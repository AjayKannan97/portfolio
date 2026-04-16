import { publications } from '@/lib/data';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function Publications() {
  return (
    <section id="writing" className="py-32 px-6 md:px-10 max-w-6xl mx-auto">
      <SectionHeader number="05 / Writing" title="Papers & posters" kicker="/ Publications" />

      <div className="divide-y divide-ink-700 border-y border-ink-700">
        {publications.map((pub, i) => {
          const href = pub.link || (pub.doi ? `https://doi.org/${pub.doi}` : null);
          const Wrapper = href ? 'a' : 'div';
          const wrapperProps = href
            ? { href, target: '_blank', rel: 'noreferrer' }
            : {};

          return (
            <Reveal key={i} delay={i * 80}>
              <Wrapper
                {...wrapperProps}
                className={`block py-8 group ${href ? 'cursor-pointer' : ''}`}
              >
                <div className="grid md:grid-cols-12 gap-6 items-baseline">
                  <div className="md:col-span-1 mono-label !text-ember-500">
                    {pub.year}
                  </div>
                  <div className="md:col-span-8">
                    <h3 className="display text-xl md:text-2xl text-paper-50 group-hover:text-ember-500 transition-colors leading-tight">
                      {pub.title}
                    </h3>
                    <div className="mt-2 text-sm text-paper-300 serif-italic">
                      {pub.venue}
                    </div>
                  </div>
                  <div className="md:col-span-2 mono-label">{pub.type}</div>
                  <div className="md:col-span-1 text-right mono-label">
                    {href ? (
                      <span className="group-hover:text-ember-500 transition-colors">↗</span>
                    ) : (
                      <span>—</span>
                    )}
                  </div>
                </div>
              </Wrapper>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://medium.com/@ajay_k"
          target="_blank"
          rel="noreferrer"
          className="mono-label hover:text-ember-500 transition-colors"
        >
          Read more on Medium ↗
        </a>
      </div>
    </section>
  );
}
