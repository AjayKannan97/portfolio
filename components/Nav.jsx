'use client';

import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav() {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'bg-ink-950/80 backdrop-blur-md border-b border-ink-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="w-2 h-2 rounded-full bg-ember-500 group-hover:scale-150 transition-transform" />
          <span className="font-mono text-xs tracking-widest uppercase text-paper-100">
            Ajay Kannan
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`mono-label transition-colors hover:text-paper-100 ${
                  active === s.id ? '!text-ember-500' : ''
                }`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:ajaykannan1606@gmail.com"
          className="hidden md:inline-block font-mono text-xs tracking-widest uppercase text-paper-100 border border-paper-100/30 px-4 py-2 hover:bg-paper-100 hover:text-ink-950 transition-colors"
        >
          Say hello
        </a>
      </div>
    </nav>
  );
}
