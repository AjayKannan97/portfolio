import { projects } from '@/lib/data';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function Projects() {
  return (
    <section id="work" className="py-32 px-6 md:px-10 max-w-6xl mx-auto">
      <SectionHeader
        number="03 / Work"
        title="Everything on GitHub"
        kicker="/ Projects"
      />

      <div className="mb-10 flex items-center justify-between flex-wrap gap-3">
        <p className="text-paper-300 text-base leading-[1.7] max-w-2xl">
          A complete index of my public repositories — from production-style
          LLM systems to graduate coursework and the occasional weekend
          experiment. Most recent first.
        </p>
        <a
          href="https://github.com/AjayKannan97"
          target="_blank"
          rel="noreferrer"
          className="mono-label hover:text-ember-500 transition-colors"
        >
          View on GitHub ↗
        </a>
      </div>

      <div className="divide-y divide-ink-700 border-y border-ink-700">
        {projects.map((p, i) => (
          <Reveal key={p.repo} delay={Math.min(i, 8) * 40}>
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="block py-7 group cursor-pointer"
            >
              <div className="grid md:grid-cols-12 gap-4 md:gap-6 items-baseline">
                <div className="md:col-span-1 mono-label !text-ember-500">
                  {p.year}
                </div>
                <div className="md:col-span-8">
                  <h3 className="display text-xl md:text-2xl text-paper-50 group-hover:text-ember-500 transition-colors leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-base leading-[1.7] text-paper-300 max-w-2xl">
                    {p.summary}
                  </p>
                </div>
                <div className="md:col-span-2 flex flex-wrap gap-1.5">
                  {p.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="mono-label border border-ink-700 px-2 py-1 !text-paper-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="md:col-span-1 text-right mono-label group-hover:text-ember-500 transition-colors">
                  ↗
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
