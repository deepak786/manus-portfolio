import React from 'react';
import { Card } from '@/components/ui/Card';
import { getStackOverflowReputation } from '@/lib/stackoverflow';

export async function Contributions() {
  // Fetch StackOverflow reputation
  const reputation = await getStackOverflowReputation('3452078');

  return (
    <section id="contributions" className="section bg-secondary/30">
      <div className="container">
        <h2 className="section-title">Open Source Contributions</h2>
        <p className="text-muted-foreground mb-8">
          I'm passionate about open source and actively contribute to various projects.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">intercom_flutter</h3>
              <p className="text-muted-foreground mb-4">
                I'm a maintainer of the intercom_flutter package, which provides Flutter integration for the Intercom customer messaging platform.
              </p>
              <a 
                href="https://pub.dev/packages/intercom_flutter" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                View on pub.dev →
              </a>
            </div>
          </Card>
          
          <Card>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">firebase_realtime_database</h3>
              <p className="text-muted-foreground mb-4">
                I've contributed to the Flutter web implementation of the firebase_realtime_database package, which was mentioned in a YouTube video.
              </p>
              <a 
                href="https://www.youtube.com/watch?v=-W-xHsbPFuI&t=175s" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Watch on YouTube →
              </a>
            </div>
          </Card>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <Card className="flex-1">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-muted-foreground mb-4">
                Check out my open source projects and contributions on GitHub.
              </p>
              <a 
                href="https://github.com/deepak786" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                View GitHub Profile →
              </a>
            </div>
          </Card>
          
          <Card className="flex-1">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">StackOverflow</h3>
              <p className="text-muted-foreground mb-4">
                I actively contribute to the developer community by answering questions on StackOverflow.
              </p>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-amber-500 text-white px-2 py-1 rounded text-sm">
                  Reputation: {reputation !== null ? reputation.toLocaleString() : 'Loading...'}
                </div>
              </div>
              <a 
                href="https://stackoverflow.com/users/3452078/deepak-goyal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                View StackOverflow Profile →
              </a>
            </div>
          </Card>
        </div>
        
        <div className="mb-8">
          <Card>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">pub.dev</h3>
              <p className="text-muted-foreground mb-4">
                I've published several packages on pub.dev that are used by developers worldwide. Check out all my packages on the pub.dev platform.
              </p>
              <a 
                href="https://pub.dev/publishers/deepakdroid.xyz/packages" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                View All Packages →
              </a>
            </div>
          </Card>
        </div>

      </div>
    </section>
  );
}
