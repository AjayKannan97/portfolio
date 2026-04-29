import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Summary from '@/components/Summary';
import About from '@/components/About';
import Publications from '@/components/Publications';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Summary />
      <About />
      <Publications />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}