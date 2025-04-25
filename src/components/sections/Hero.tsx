'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            <span className="text-primary">Deepak Goyal</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            A results-driven, customer-focused, articulate, and analytical Senior Software Engineer with 10+ years of experience. 
            Passionate about open source contributions and building innovative solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={scrollToContact}>
              Contact Me
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              as="a" 
              href="https://github.com/deepak786" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
