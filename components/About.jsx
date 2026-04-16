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
              Born in Chennai. Educated at Anna University and Arizona State.
              Now building in the Bay Area.
            </p>
            <p>
              The thread that connects IoT sensors, gesture recognition,
              medical imaging, and utility-scale data platforms is the same
              one — curiosity about systems that have to work in the real world.
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-ink-700">
            <a
              href="/about"
              className="mono-label hover:text-ember-500 transition-colors"
            >
              Read the full story ↗
            </a>
          </div>
        </Reveal>
        <Reveal delay={150} className="md:col-span-8">
          <div className="space-y-6 text-xl md:text-2xl font-light leading-relaxed text-paper-100">
            <p>
              I grew up in
              {' '}
              <span className="serif-italic text-ember-500">Chennai</span>
              , where I first fell in love with building things — wiring Arduino
              boards, training accelerometers to read sign language gestures,
              and leading an IoT research group before I had a degree to show
              for it.
            </p>
            <p>
              That curiosity carried me to two summers at
              {' '}
              <span className="text-paper-50 border-b border-ember-500/60">Microsoft</span>
              , where I shipped sensor-driven ML for agriculture and helped
              integrate Cortana with a shopping platform — my first taste of
              building at scale, and of the gap between a model that works in
              a notebook and one that works in production.
            </p>
            <p>
              I crossed continents for grad school at
              {' '}
              <span className="text-paper-50 border-b border-ember-500/60">Arizona State</span>
              , researching few-shot learning for immunology — a problem where
              data is scarce and the stakes are real. That tension between
              limited signal and high consequence shaped how I think about ML
              systems today.
            </p>
            <p>
              Now at
              {' '}
              <span className="text-paper-50 border-b border-ember-500/60">
                Pacific Gas and Electric
              </span>
              {' '}
              in the Bay Area, I design the data platform and ML infrastructure
              behind utility operations — pipelines, anomaly detection,
              observability, and increasingly, generative AI that has to earn
              its place in production. The work is less glamorous than a
              chatbot demo, but
              {' '}
              <span className="serif-italic text-ember-500">
                reliability is the product
              </span>
              .
            </p>
            <p>
              The journey from Chennai to Santa Clara was not a straight line.
              It was an odyssey — shaped by curiosity, cross-cultural leaps,
              and the stubborn belief that the most interesting problems live
              where engineering meets the real world.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
