import { profile } from '@/lib/data';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-10 max-w-6xl mx-auto">
      <SectionHeader number="01 / About" title="The short version" kicker="/ Introduction" />
      <div className="grid md:grid-cols-12 gap-10 items-start">
        <Reveal className="md:col-span-4">
          <div className="mono-label mb-4">Biography</div>
          <div className="text-paper-300 text-sm leading-relaxed space-y-4">
            <p>
              Computer Scientist working at the intersection of data systems and applied ML. Infrastructure-first, model-curious.
            </p>
            <p>
              Interested in how LLMs behave when you put them behind a latency budget, an SLA, and a bill.
            </p>
          </div>
        </Reveal>
        <Reveal delay={150} className="md:col-span-8">
          <div className="space-y-6 text-xl md:text-2xl font-light leading-relaxed text-paper-100">
            {profile.bio.map((p, i) => (
              <p key={i}>
                {i === 0 ? (
                  <>
                    I'm an{' '}
                    <span className="serif-italic text-ember-500">ML Systems</span> and
                    Backend Infrastructure Engineer currently at{' '}
                    <span className="text-paper-50 border-b border-ember-500/60">Pacific Gas &amp; Electric</span>
                    , where I design and maintain the data platform that moves utility
                    operations data at scale.
                  </>
                ) : (
                  p
                )}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
