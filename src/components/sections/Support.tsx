import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function Support() {
  return (
    <section id="support" className="section">
      <div className="container">
        <h2 className="section-title">Support My Work</h2>
        <p className="text-muted-foreground text-center mb-8">
          If you find my work helpful or valuable, consider supporting me through the following platforms:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Buy Me a Coffee</h3>
              <p className="text-muted-foreground mb-4">
                If you appreciate my open source contributions or find my content helpful, you can buy me a coffee to show your support.
              </p>
              <Button asChild>
                <a 
                  href="https://buymeacoffee.com/deepakdroid" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Buy Me a Coffee
                </a>
              </Button>
            </div>
          </Card>
          
          <Card>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">PayPal</h3>
              <p className="text-muted-foreground mb-4">
                You can also support my work through PayPal if you prefer this payment method.
              </p>
              <Button asChild>
                <a 
                  href="https://www.paypal.com/paypalme/deepakdroid" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Support via PayPal
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
