import React from 'react';
import { Card } from '@/components/ui/card';

export function About() {
  return (
    <section id="about" className="section bg-secondary/30">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-4">
              I'm a results-driven, customer-focused, articulate, and analytical Senior Software Engineer with over 10 years of experience in the industry.
            </p>
            <p className="text-lg mb-4">
              My expertise spans across mobile and web development, with a strong focus on creating efficient, scalable, and user-friendly applications.
            </p>
            <p className="text-lg">
              I'm passionate about open source contributions and continuously strive to improve the developer ecosystem through my work on various packages and libraries.
            </p>
          </div>
          <div>
            <Card className="h-full flex flex-col justify-center p-4">
              <h3 className="text-xl font-semibold mb-4">Skills & Expertise</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Java</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Android</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Kotlin</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Firebase</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Flutter</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Dart</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>NodeJS</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>AWS</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
