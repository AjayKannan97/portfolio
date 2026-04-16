import { profile } from '@/lib/data';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-6 md:px-10 max-w-6xl mx-auto"
    >
      {/* Top meta row */}
      <div className="flex justify-between items-start reveal" style={{ animationDelay: '0.1s' }}>
        <div>
          <div className="mono-label mb-2">Currently</div>
          <div className="text-sm text-paper-100">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-ember-500 mr-2 align-middle animate-pulse" />
            ML Systems @ PG&amp;E
          </div>
        </div>
        <div className="text-right">
          <div className="mono-label mb-2">Based in</div>
          <div className="text-sm text-paper-100">{profile.location}</div>
        </div>
      </div>

      {/* Central display */}
      <div className="flex-1 flex items-center py-20">
        <div>
          <h1
            className="display text-[clamp(3rem,11vw,9.5rem)] font-normal reveal"
            style={{ animationDelay: '0.3s' }}
          >
            Ajay
            <br />
            <span className="serif-italic text-ember-500">Kannan.</span>
          </h1>
          <p
            className="mt-10 max-w-xl text-lg md:text-xl text-paper-100/90 leading-relaxed reveal"
            style={{ animationDelay: '0.6s' }}
          >
            {profile.tagline}
          </p>
        </div>
      </div>

      {/* Bottom strip */}
      <div
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 reveal"
        style={{ animationDelay: '0.9s' }}
      >
        <div>
          <div className="mono-label mb-2">Role</div>
          <div className="text-paper-100 text-sm max-w-xs">
            {profile.title}
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="mono-label hover:text-ember-500 transition-colors">
            Github ↗
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="mono-label hover:text-ember-500 transition-colors">
            LinkedIn ↗
          </a>
          <a href={profile.links.medium} target="_blank" rel="noreferrer" className="mono-label hover:text-ember-500 transition-colors">
            Medium ↗
          </a>
        </div>
        <div className="hidden md:flex items-center gap-2 text-paper-300">
          <div className="w-12 h-px bg-paper-300/40" />
          <span className="mono-label !text-paper-300">Scroll</span>
        </div>
      </div>
    </section>
  );
}
