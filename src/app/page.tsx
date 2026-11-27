import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { OpenSource } from '@/components/sections/OpenSource';
import { Playground } from '@/components/sections/Playground';
import { Services } from '@/components/sections/Services';
import { Articles } from '@/components/sections/Articles';
import { Support } from '@/components/sections/Support';
import { Contact } from '@/components/sections/Contact';
import { getIntercomStats } from '@/lib/stats';
import { getStackOverflowReputation } from '@/lib/stackoverflow';

export default async function Home() {
  const [stats, reputation] = await Promise.all([getIntercomStats(), getStackOverflowReputation('3452078')]);

  return (
    <>
      <Hero stats={stats} />
      <About />
      <OpenSource stats={stats} reputation={reputation} />
      <Playground />
      <Services />
      <Articles />
      <Support />
      <Contact />
    </>
  );
}
