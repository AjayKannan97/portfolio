import { projects } from '@/lib/data';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function Projects() {
  return (
    <section id="work" className="py-32 px-6 md:px-10 max-w-6xl mx-auto">
      <SectionHeader number="03 / Work" title="Selected projects" kicker="/ Things I've built" />

      <div className="grid md:grid-cols-2 gap-x-10 gap-y-16">
        {projects.map((p, i) => (
          <Reveal key={i} delay={i * 60}>
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="block group"
            >
              <div className="mono-label mb-4 flex items-center justify-between">
                <span>Project / {String(i + 1).padStart(2, '0')}</span>
                <span className="group-hover:text-ember-500 transition-colors">↗</span>
              </div>

              {/* Decorative abstract visual */}
              <div className="aspect-[4/3] relative overflow-hidden bg-ink-900 border border-ink-700 mb-6 group-hover:border-ember-500/50 transition-colors">
                <ProjectVisual index={i} />
              </div>

              <h3 className="display text-2xl md:text-3xl text-paper-50 mb-3 group-hover:text-ember-500 transition-colors">
                {p.title}
              </h3>
              <p className="text-paper-300 text-[15px] leading-relaxed mb-4">
                {p.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="mono-label border border-ink-700 px-2 py-1 !text-paper-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectVisual({ index }) {
  // Six distinct SVG "generative" visuals — one per project
  const visuals = [
    // 0 — Voice / waveform
    <svg key="0" viewBox="0 0 400 300" className="w-full h-full">
      <rect width="400" height="300" fill="#120f0d" />
      {Array.from({ length: 40 }).map((_, i) => {
        const h = 40 + Math.abs(Math.sin(i * 0.4) * 80) + Math.abs(Math.cos(i * 0.6) * 40);
        return (
          <rect
            key={i}
            x={20 + i * 9}
            y={150 - h / 2}
            width="3"
            height={h}
            fill={i === 20 ? '#e87c1f' : '#3d342d'}
          />
        );
      })}
      <text x="20" y="280" fontFamily="monospace" fontSize="10" fill="#a89e8a">
        VOICE.WAVE // LM-STUDIO
      </text>
    </svg>,
    // 1 — Chatbot / flowchart
    <svg key="1" viewBox="0 0 400 300" className="w-full h-full">
      <rect width="400" height="300" fill="#120f0d" />
      <circle cx="80" cy="80" r="24" fill="none" stroke="#e87c1f" strokeWidth="1.5" />
      <circle cx="200" cy="150" r="36" fill="none" stroke="#efe9de" strokeWidth="1" />
      <circle cx="320" cy="80" r="24" fill="none" stroke="#efe9de" strokeWidth="1" />
      <circle cx="320" cy="220" r="24" fill="none" stroke="#efe9de" strokeWidth="1" />
      <line x1="104" y1="80" x2="176" y2="138" stroke="#3d342d" />
      <line x1="236" y1="150" x2="296" y2="80" stroke="#3d342d" />
      <line x1="236" y1="150" x2="296" y2="220" stroke="#3d342d" />
      <text x="20" y="280" fontFamily="monospace" fontSize="10" fill="#a89e8a">
        LANGCHAIN.GRAPH
      </text>
    </svg>,
    // 2 — TCR / DNA helix
    <svg key="2" viewBox="0 0 400 300" className="w-full h-full">
      <rect width="400" height="300" fill="#120f0d" />
      {Array.from({ length: 24 }).map((_, i) => {
        const y = 40 + i * 10;
        const x1 = 120 + Math.sin(i * 0.5) * 60;
        const x2 = 280 - Math.sin(i * 0.5) * 60;
        return (
          <g key={i}>
            <line x1={x1} y1={y} x2={x2} y2={y} stroke="#3d342d" strokeWidth="0.5" />
            <circle cx={x1} cy={y} r="2" fill={i % 4 === 0 ? '#e87c1f' : '#efe9de'} />
            <circle cx={x2} cy={y} r="2" fill={i % 4 === 0 ? '#e87c1f' : '#efe9de'} />
          </g>
        );
      })}
      <text x="20" y="280" fontFamily="monospace" fontSize="10" fill="#a89e8a">
        TCR.EPITOPE // FEW-SHOT
      </text>
    </svg>,
    // 3 — Chest X-ray grid (deterministic)
    <svg key="3" viewBox="0 0 400 300" className="w-full h-full">
      <rect width="400" height="300" fill="#120f0d" />
      {Array.from({ length: 80 }).map((_, i) => {
        const x = 40 + (i % 10) * 32;
        const y = 40 + Math.floor(i / 10) * 28;
        const r = ((i * 37) % 60) / 10 + 1;
        const highlighted = (i === 33 || i === 34 || i === 43 || i === 44);
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={r}
            fill={highlighted ? '#e87c1f' : '#3d342d'}
            opacity={highlighted ? 1 : 0.7}
          />
        );
      })}
      <text x="20" y="280" fontFamily="monospace" fontSize="10" fill="#a89e8a">
        CNN.ACTIVATION.MAP
      </text>
    </svg>,
    // 4 — Streaming / data flow
    <svg key="4" viewBox="0 0 400 300" className="w-full h-full">
      <rect width="400" height="300" fill="#120f0d" />
      {Array.from({ length: 6 }).map((_, i) => {
        const y = 60 + i * 35;
        return (
          <g key={i}>
            <line x1="40" y1={y} x2="360" y2={y} stroke="#3d342d" strokeDasharray="2 4" />
            {Array.from({ length: 12 }).map((__, j) => {
              const x = 40 + j * 28 + (i * 6);
              return (
                <rect
                  key={j}
                  x={x}
                  y={y - 3}
                  width="4"
                  height="6"
                  fill={(i + j) % 7 === 0 ? '#e87c1f' : '#efe9de'}
                  opacity={0.7}
                />
              );
            })}
          </g>
        );
      })}
      <text x="20" y="280" fontFamily="monospace" fontSize="10" fill="#a89e8a">
        STREAM.ANN.SVR
      </text>
    </svg>,
    // 5 — Data mining / cluster (deterministic pseudo-random)
    <svg key="5" viewBox="0 0 400 300" className="w-full h-full">
      <rect width="400" height="300" fill="#120f0d" />
      {Array.from({ length: 60 }).map((_, i) => {
        const cluster = i % 3;
        const cx = [120, 220, 300][cluster];
        const cy = [100, 180, 120][cluster];
        // deterministic jitter based on index
        const jx = Math.sin(i * 12.9898) * 43758.5453;
        const jy = Math.sin(i * 78.233) * 43758.5453;
        const x = cx + ((jx - Math.floor(jx)) - 0.5) * 80;
        const y = cy + ((jy - Math.floor(jy)) - 0.5) * 80;
        const colors = ['#e87c1f', '#efe9de', '#a89e8a'];
        return <circle key={i} cx={x} cy={y} r="3" fill={colors[cluster]} opacity="0.8" />;
      })}
      <text x="20" y="280" fontFamily="monospace" fontSize="10" fill="#a89e8a">
        KMEANS.CLUSTERS
      </text>
    </svg>,
  ];
  return visuals[index % visuals.length];
}
