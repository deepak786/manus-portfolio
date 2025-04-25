import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Articles } from '@/components/sections/Articles';
import { Contributions } from '@/components/sections/Contributions';
import { Support } from '@/components/sections/Support';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Articles />
      <Contributions />
      <Support />
      <Contact />
    </>
  );
}
