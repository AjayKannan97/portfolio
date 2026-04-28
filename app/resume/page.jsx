import Link from 'next/link';

export const metadata = {
  title: 'Resume — Ajay Kannan',
  description: 'Resume of Ajay Kannan — ML Systems / Backend Infrastructure Engineer.',
};

const PDF_HREF = '/Ajay_Kannan_Resume.pdf';

export default function ResumePage() {
  return (
    <main className="relative min-h-screen">
      {/* Top bar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-ink-950/80 backdrop-blur-md border-b border-ink-700">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-2 h-2 rounded-full bg-ember-500 group-hover:scale-150 transition-transform" />
            <span className="font-mono text-xs tracking-widest uppercase text-paper-100">
              Ajay Kannan
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <a
              href={PDF_HREF}
              download
              className="mono-label hover:text-ember-500 transition-colors"
            >
              Download PDF ↓
            </a>
            <a
              href={PDF_HREF}
              target="_blank"
              rel="noreferrer"
              className="mono-label hover:text-ember-500 transition-colors"
            >
              Open in new tab ↗
            </a>
            <Link
              href="/"
              className="mono-label hover:text-ember-500 transition-colors"
            >
              Back to home ↗
            </Link>
          </div>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-6 md:px-10 pt-28 pb-20">
        {/* Header */}
        <header className="mb-10">
          <div className="mono-label !text-ember-500 mb-4">/ Resume</div>
          <h1 className="display text-4xl md:text-6xl leading-[0.95] mb-4">
            The <span className="serif-italic text-ember-500">one-pager</span>.
          </h1>
          <p className="text-paper-300 max-w-2xl text-base leading-[1.7]">
            A snapshot of where I&rsquo;ve worked, what I&rsquo;ve shipped, and the stack I reach for.
            Use the buttons above to download the PDF or open it in a new tab.
          </p>
        </header>

        {/* Inline PDF viewer */}
        <div className="border border-ink-700 bg-ink-900 overflow-hidden">
          <object
            data={`${PDF_HREF}#view=FitH`}
            type="application/pdf"
            className="w-full h-[85vh] min-h-[640px]"
            aria-label="Ajay Kannan resume PDF"
          >
            {/* Fallback for browsers without PDF support */}
            <div className="p-10 text-center">
              <p className="text-paper-300 mb-6">
                Your browser can&rsquo;t display the PDF inline.
              </p>
              <a
                href={PDF_HREF}
                target="_blank"
                rel="noreferrer"
                className="mono-label border border-paper-100/30 px-5 py-3 hover:bg-paper-100 hover:text-ink-950 transition-colors"
              >
                Open PDF ↗
              </a>
            </div>
          </object>
        </div>
      </section>
    </main>
  );
}
