import { skills } from '@/lib/data';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 md:px-10 max-w-6xl mx-auto">
      <SectionHeader number="04 / Stack" title="Tools of the trade" kicker="/ What I reach for" />

      <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 80}>
            <div className="flex items-baseline gap-4 mb-5">
              <span className="mono-label !text-ember-500">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="display text-2xl text-paper-50">{group.category}</h3>
              <div className="flex-1 h-px bg-ink-700 mb-1" />
            </div>
            <ul className="flex flex-wrap gap-x-5 gap-y-3">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-paper-100 text-base hover:text-ember-500 transition-colors cursor-default"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      {/* marquee-style tag line for aesthetic */}
      <div className="mt-24 pt-10 border-t border-ink-700">
        <div className="mono-label mb-3">Also comfortable with</div>
        <p className="text-xl md:text-2xl font-light text-paper-300 leading-relaxed">
          <span className="serif-italic text-paper-100">Predictive modeling</span> · Big Data ·
          Decision Analytics · <span className="serif-italic text-paper-100">Exploratory Data Analysis</span> ·
          Arduino · HTML/CSS · <span className="serif-italic text-paper-100">Problem solving</span>
        </p>
      </div>
    </section>
  );
}
