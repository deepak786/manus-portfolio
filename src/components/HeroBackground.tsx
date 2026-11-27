'use client';

import { useEffect, useRef } from 'react';

type Node = { x: number; y: number; vx: number; vy: number; r: number };
type Packet = { from: number; to: number; start: number; duration: number; color: string };

const LINK_DISTANCE = 170;
const COLORS = ['129, 140, 248', '34, 211, 238'];

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let packets: Packet[] = [];
    let frame = 0;
    let visible = true;
    let lastPacket = 0;
    const pointer = { x: -9999, y: -9999 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const widthChanged = canvas.clientWidth !== width;
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!widthChanged) return;

      const count = Math.min(70, Math.round((width * height) / 16000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.4 + 0.8,
      }));
      packets = [];
    };

    const neighbours = (i: number) =>
      nodes.reduce<number[]>((acc, node, j) => {
        if (j !== i && Math.hypot(node.x - nodes[i].x, node.y - nodes[i].y) < LINK_DISTANCE) acc.push(j);
        return acc;
      }, []);

    const spawnPacket = (now: number) => {
      const from = Math.floor(Math.random() * nodes.length);
      const options = neighbours(from);
      if (!options.length) return;
      packets.push({
        from,
        to: options[Math.floor(Math.random() * options.length)],
        start: now,
        duration: 1400 + Math.random() * 800,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    };

    const draw = (now: number) => {
      ctx.clearRect(0, 0, width, height);

      for (const node of nodes) {
        if (!reduceMotion) {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const distance = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (distance < LINK_DISTANCE) {
            ctx.strokeStyle = `rgba(148, 163, 255, ${(1 - distance / LINK_DISTANCE) * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        const distance = Math.hypot(node.x - pointer.x, node.y - pointer.y);
        if (distance < LINK_DISTANCE * 1.2) {
          ctx.strokeStyle = `rgba(34, 211, 238, ${(1 - distance / (LINK_DISTANCE * 1.2)) * 0.35})`;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.stroke();
        }
      }

      for (const node of nodes) {
        ctx.fillStyle = 'rgba(199, 210, 254, 0.7)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (reduceMotion) return;

      if (now - lastPacket > 450) {
        spawnPacket(now);
        lastPacket = now;
      }

      packets = packets.filter((packet) => {
        const progress = (now - packet.start) / packet.duration;
        if (progress >= 1) return false;
        const a = nodes[packet.from];
        const b = nodes[packet.to];
        const x = a.x + (b.x - a.x) * progress;
        const y = a.y + (b.y - a.y) * progress;
        const glow = ctx.createRadialGradient(x, y, 0, x, y, 10);
        glow.addColorStop(0, `rgba(${packet.color}, 0.9)`);
        glow.addColorStop(1, `rgba(${packet.color}, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();
        return true;
      });
    };

    const loop = (now: number) => {
      draw(now);
      if (visible) frame = requestAnimationFrame(loop);
    };

    resize();
    if (reduceMotion) {
      draw(0);
    } else {
      frame = requestAnimationFrame(loop);
    }

    const observer = new IntersectionObserver(([entry]) => {
      const wasVisible = visible;
      visible = entry.isIntersecting;
      if (visible && !wasVisible && !reduceMotion) frame = requestAnimationFrame(loop);
    });
    observer.observe(canvas);

    const onResize = () => {
      resize();
      if (reduceMotion) draw(0);
    };
    window.addEventListener('resize', onResize);

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };
    const onPointerLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };
    if (!reduceMotion) {
      window.addEventListener('pointermove', onPointerMove, { passive: true });
      document.addEventListener('pointerleave', onPointerLeave);
    }

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="hero-network pointer-events-none absolute inset-0 h-full w-full" />;
}
