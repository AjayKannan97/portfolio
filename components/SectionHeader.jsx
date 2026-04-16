export default function SectionHeader({ number, title, kicker }) {
  return (
    <div className="flex items-baseline gap-6 mb-16">
      <span className="mono-label !text-ember-500">{number}</span>
      <div className="flex-1 h-px bg-ink-700" />
      <div className="text-right">
        {kicker && <div className="mono-label mb-1">{kicker}</div>}
        <h2 className="display text-3xl md:text-5xl">{title}</h2>
      </div>
    </div>
  );
}
