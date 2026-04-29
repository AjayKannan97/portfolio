import { education } from '@/lib/data';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function Education() {
  return (
    <section id="education" className="py-32 px-6 md:px-10 max-w-6xl mx-auto">
      <SectionHeader number="07 / Education" title="Where I studied" kicker="/ Schools" />

      <div className="grid md:grid-cols-2 gap-10">
        {education.map((ed, i) => (
          <Reveal key={ed.school} delay={i * 80}>
            <div className="border-l border-ink-700 hover:border-ember-500/60 transition-colors pl-8">
              <div className="font-mono text-xs text-paper-400 mb-2">{ed.period}</div>
              <h3 className="display text-2xl md:text-3xl text-paper-50 mb-2">
                {ed.school}
              </h3>
              <div className="serif-italic text-paper-300 text-base md:text-lg mb-4">
                {ed.degree}
              </div>
              {ed.coursework && (
                <div className="text-paper-300 text-base leading-[1.7]">
                  <div className="mono-label mb-2">Relevant Coursework</div>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {ed.coursework.map((c) => (
                      <span key={c} className="text-paper-100">{c}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
