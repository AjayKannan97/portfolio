import Link from 'next/link';

export const metadata = {
  title: 'About — Ajay Kannan',
  description:
    'The full story — from Chennai to Geneva to the Bay Area. A journey through computer science, research, recovery, and building systems that matter.',
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      {/* Top bar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-ink-950/80 backdrop-blur-md border-b border-ink-700">
        <div className="max-w-4xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-2 h-2 rounded-full bg-ember-500 group-hover:scale-150 transition-transform" />
            <span className="font-mono text-xs tracking-widest uppercase text-paper-100">
              Ajay Kannan
            </span>
          </Link>
          <Link
            href="/"
            className="mono-label hover:text-ember-500 transition-colors"
          >
            Back to home ↗
          </Link>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-6 md:px-10 pt-40 pb-32">
        {/* Header */}
        <header className="mb-20 reveal" style={{ animationDelay: '0.1s' }}>
          <div className="mono-label !text-ember-500 mb-6">The long version</div>
          <h1 className="display text-5xl md:text-7xl leading-[0.95] mb-8">
            Beyond
            <br />
            <span className="serif-italic text-ember-500">Boundaries.</span>
          </h1>
          <p className="text-paper-300 text-lg md:text-xl max-w-2xl leading-relaxed serif-italic">
            &ldquo;Attitude is all that matters.&rdquo;
          </p>
        </header>

        {/* Body */}
        <div className="space-y-20 reveal" style={{ animationDelay: '0.4s' }}>

          {/* Chapter 1 */}
          <section>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="mono-label !text-ember-500">01</span>
              <h2 className="display text-2xl md:text-3xl text-paper-50">
                Where it started
              </h2>
              <div className="flex-1 h-px bg-ink-700" />
            </div>
            <div className="space-y-6 text-lg text-paper-100/90 leading-relaxed">
              <p>
                My journey in computer science started nearly a decade ago. From
                a young age, I was fascinated by computer technology. The
                exposure from my high-school project — a football manager
                simulator using C++ — motivated me to pursue a degree in
                computer science. Eventually, I got into the College of
                Engineering, Guindy, at Anna University in Chennai.
              </p>
            </div>
          </section>

          {/* Chapter 2 */}
          <section>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="mono-label !text-ember-500">02</span>
              <h2 className="display text-2xl md:text-3xl text-paper-50">
                The research years
              </h2>
              <div className="flex-1 h-px bg-ink-700" />
            </div>
            <div className="space-y-6 text-lg text-paper-100/90 leading-relaxed">
              <p>
                During my second year of undergrad, I gravitated towards the
                captivating realm of Human-Computer Interaction and Machine
                Learning. It was at{' '}
                <span className="text-paper-50 border-b border-ember-500/60">
                  Solarillion Foundation
                </span>
                , a non-profit research organization, where this passion took
                root. As the group leader of four, I led a project centered on
                creating an affordable static gesture recognition system using
                microcontrollers and accelerometers.
              </p>
              <p>
                Witnessing the technology read gestures with over 95% accuracy
                from a simple glove — all within a budget of under $20 —
                solidified my enthusiasm. I co-authored our pioneering research,
                titled{' '}
                <span className="serif-italic text-paper-50">
                  &ldquo;Low-cost static gesture recognition system using MEMS
                  accelerometers&rdquo;
                </span>
                , presenting it at the Global IoT Summit 2017 in Switzerland.
              </p>
              <p>
                From there, I co-led a team of six researching simple dynamic
                gestures, where popular devices were not cost efficient. We were
                able to build a device that came in at less than $10. This work,{' '}
                <span className="serif-italic text-paper-50">
                  &ldquo;A Generic Multi-modal Dynamic Gesture Recognition
                  System using Machine Learning&rdquo;
                </span>
                , was presented at FICC 2018 in Singapore by my co-lead and
                friend.
              </p>
            </div>
          </section>

          {/* Chapter 3 */}
          <section>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="mono-label !text-ember-500">03</span>
              <h2 className="display text-2xl md:text-3xl text-paper-50">
                Microsoft, and then Geneva
              </h2>
              <div className="flex-1 h-px bg-ink-700" />
            </div>
            <div className="space-y-6 text-lg text-paper-100/90 leading-relaxed">
              <p>
                In my third year of college, I was the only student from the
                computer science department selected for an internship at{' '}
                <span className="text-paper-50 border-b border-ember-500/60">
                  Microsoft
                </span>
                {' '}in Hyderabad. We worked on a project called
                &ldquo;Shopping on Cortana&rdquo; — and during this period, I
                decamped to present my first paper on June 6, 2017 in Geneva,
                Switzerland.
              </p>
              <p>
                This was an important period in my life.
              </p>
            </div>
          </section>

          {/* Chapter 4 — the turning point */}
          <section className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-ember-500/40" />
            <div className="pl-8">
              <div className="flex items-baseline gap-4 mb-8">
                <span className="mono-label !text-ember-500">04</span>
                <h2 className="display text-2xl md:text-3xl text-paper-50">
                  The day everything changed
                </h2>
                <div className="flex-1 h-px bg-ink-700" />
              </div>
              <div className="space-y-6 text-lg text-paper-100/90 leading-relaxed">
                <p>
                  On the last day of the summit, I returned to my room because
                  of a headache, fainted, and went into a coma. My teammates
                  alerted the hotel. Paramedics arrived, rushed me to the HUG
                  hospital, and diagnosed a ruptured aneurysm — a brain
                  haemorrhage.
                </p>
                <p>
                  They saved me at the right time. The surgery left me with
                  severe right-hemiparesis. This incident completely changed my
                  perception of life.
                </p>
                <p className="serif-italic text-paper-50 text-xl md:text-2xl border-l-2 border-ember-500 pl-6">
                  As my family doctor worded it, &ldquo;my purpose of visit to
                  Geneva was to present the paper and the destiny&rsquo;s purpose
                  was to save me.&rdquo;
                </p>
              </div>
            </div>
          </section>

          {/* Chapter 5 */}
          <section>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="mono-label !text-ember-500">05</span>
              <h2 className="display text-2xl md:text-3xl text-paper-50">
                Recovery and forward
              </h2>
              <div className="flex-1 h-px bg-ink-700" />
            </div>
            <div className="space-y-6 text-lg text-paper-100/90 leading-relaxed">
              <p>
                I am still recovering from the effects of the brain haemorrhage,
                but it has not dented my dreams in the slightest.
              </p>
              <p>
                After recovery, I returned to Microsoft for a second summer
                internship, worked as a data scientist at Sigtuple applying
                generative models to medical imaging, then crossed continents
                for graduate school at{' '}
                <span className="text-paper-50 border-b border-ember-500/60">
                  Arizona State University
                </span>
                {' '}— where I researched few-shot learning for immunology and
                earned my M.S. in Computer Science.
              </p>
              <p>
                Today I work at{' '}
                <span className="text-paper-50 border-b border-ember-500/60">
                  Pacific Gas and Electric
                </span>
                {' '}in the Bay Area, designing the data platform and ML
                infrastructure behind utility operations. Pipelines, anomaly
                detection, observability, and increasingly, generative AI that
                has to earn its place in production.
              </p>
              <p>
                The journey from Chennai to Santa Clara was not a straight line.
                It was an odyssey — shaped by curiosity, cross-cultural leaps,
                a surgery that reset everything, and the stubborn belief that{' '}
                <span className="serif-italic text-ember-500">
                  attitude is all that matters
                </span>
                .
              </p>
            </div>
          </section>
        </div>

        {/* Footer CTA */}
        <div className="mt-24 pt-12 border-t border-ink-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="mono-label mb-2">Want to work together?</div>
            <a
              href="mailto:ajaykannan1606@gmail.com"
              className="display text-2xl md:text-3xl text-paper-50 hover:text-ember-500 transition-colors"
            >
              ajaykannan1606@gmail.com
            </a>
          </div>
          <Link
            href="/"
            className="mono-label border border-paper-100/30 px-5 py-3 hover:bg-paper-100 hover:text-ink-950 transition-colors"
          >
            Back to home
          </Link>
        </div>
      </article>
    </main>
  );
}
