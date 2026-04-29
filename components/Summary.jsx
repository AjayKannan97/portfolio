import { profile } from '@/lib/data';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function Summary() {
  if (!profile.summary) return null;

  return (
    <section id="summary" className="py-32 px-6 md:px-10 max-w-6xl mx-auto">
      <SectionHeader number="01 / Summary" title="In one paragraph" kicker="/ Profile" />
      <Reveal>
        <div className="pl-6 border-l-2 border-ember-500/60 max-w-4xl">
          <p className="serif-italic text-2xl md:text-3xl font-light leading-[1.4] text-paper-50">
            {profile.summary}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
