import { experience } from '@/lib/data';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-10 max-w-6xl mx-auto">
      <SectionHeader number="02 / Experience" title="Where I've built" kicker="/ Work history" />

      <div className="space-y-20">
        {experience.map((job, idx) => (
          <Reveal key={idx} delay={idx * 80}>
            <div className="grid md:grid-cols-12 gap-8 items-start group">
              <div className="md:col-span-3">
                <div className="mono-label !text-ember-500 mb-2">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div className="font-mono text-sm text-paper-100">{job.period}</div>
                <div className="font-mono text-xs text-paper-400 mt-1">{job.location}</div>
              </div>

              <div className="md:col-span-9 border-l border-ink-700 group-hover:border-ember-500/60 transition-colors pl-8">
                <div className="flex items-baseline justify-between flex-wrap gap-2 mb-2">
                  <h3 className="display text-2xl md:text-3xl text-paper-50">
                    {job.company}
                  </h3>
                  <div className="text-paper-300 text-sm italic serif-italic">
                    {job.role}
                  </div>
                </div>
                <ul className="mt-5 space-y-3">
                  {job.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="text-paper-100/90 text-[15px] leading-relaxed pl-6 relative"
                    >
                      <span className="absolute left-0 top-[0.6rem] w-3 h-px bg-paper-400" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
