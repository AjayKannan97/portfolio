import { profile } from '@/lib/data';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 md:px-10 max-w-6xl mx-auto border-t border-ink-700 mt-20"
    >
      <div className="grid md:grid-cols-12 gap-10 items-start">
        <Reveal className="md:col-span-5">
          <div className="mono-label !text-ember-500 mb-4">06 / Contact</div>
          <h2 className="display text-5xl md:text-7xl leading-[0.9] mb-8">
            Let's
            <br />
            <span className="serif-italic text-ember-500">build</span>
            <br />
            something.
          </h2>
          <p className="text-paper-300 max-w-sm">
            Open to conversations about ML infrastructure, generative AI in production,
            or anything in the neighborhood.
          </p>
        </Reveal>

        <Reveal delay={150} className="md:col-span-7 space-y-6">
          <a
            href={profile.links.email}
            className="block group border border-ink-700 hover:border-ember-500 p-6 transition-all hover:bg-ink-900"
          >
            <div className="mono-label mb-2">Email — preferred</div>
            <div className="display text-2xl md:text-3xl text-paper-50 group-hover:text-ember-500 transition-colors">
              {profile.email}
            </div>
          </a>

          <div className="grid grid-cols-2 gap-4">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group border border-ink-700 hover:border-ember-500 p-6 transition-all hover:bg-ink-900 block"
            >
              <div className="mono-label mb-2">LinkedIn ↗</div>
              <div className="text-paper-50 group-hover:text-ember-500 transition-colors serif-italic">
                ajay-kannan
              </div>
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="group border border-ink-700 hover:border-ember-500 p-6 transition-all hover:bg-ink-900 block"
            >
              <div className="mono-label mb-2">GitHub ↗</div>
              <div className="text-paper-50 group-hover:text-ember-500 transition-colors serif-italic">
                @AjayKannan97
              </div>
            </a>
            <a
              href={profile.links.medium}
              target="_blank"
              rel="noreferrer"
              className="group border border-ink-700 hover:border-ember-500 p-6 transition-all hover:bg-ink-900 block"
            >
              <div className="mono-label mb-2">Medium ↗</div>
              <div className="text-paper-50 group-hover:text-ember-500 transition-colors serif-italic">
                @ajay_k
              </div>
            </a>
            <div className="border border-ink-700 p-6 block">
              <div className="mono-label mb-2">Based in</div>
              <div className="text-paper-50 serif-italic">{profile.location}</div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Footer */}
      <footer className="mt-32 pt-8 border-t border-ink-700 flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
        <div className="mono-label">
          © {new Date().getFullYear()} Ajay Kannan — Built with Next.js on Vercel
        </div>
        <div className="mono-label">
          <a href="#top" className="hover:text-ember-500 transition-colors">
            Back to top ↑
          </a>
        </div>
      </footer>
    </section>
  );
}
