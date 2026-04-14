const FOOTER_COLS = [
  {
    title: 'Over Lumi',
    links: ['Ons verhaal', 'Hoe het werkt', 'Klantervaringen', 'Werken bij Lumi'],
  },
  {
    title: 'Voor Aanbieders',
    links: ['Cursus aanmelden', 'Partner worden', 'Succesverhalen', 'Inloggen partners'],
  },
  {
    title: 'Hulp & Contact',
    links: ['Veelgestelde vragen', 'Klantenservice', 'Contact opnemen'],
  },
];

const LEGAL_LINKS = ['Algemene Voorwaarden', 'Privacybeleid', 'Cookiebeleid'];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/[0.08] pt-12 md:pt-16 pb-8 px-4 sm:px-8 md:px-12">

      {/* ── Main grid ──
          Mobile: 2 cols (brand full-width + 2 cols link groups)
          md+: 4 cols
      */}
      <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8 md:gap-12 mb-10 md:mb-12">

        {/* Brand column — full width on mobile */}
        <div className="col-span-2 md:col-span-1">
          <a href="/" className="inline-flex items-center gap-2.5 mb-3 md:mb-4" aria-label="Lumi Cursussen – home">
            <iconify-icon icon="lucide:flower-2" class="text-2xl text-primary" aria-hidden="true" />
            <span className="text-lg md:text-xl font-semibold tracking-tight text-foreground">
              Lumi Cursussen
            </span>
          </a>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-[300px]">
            Lumi is het onafhankelijke platform waar aanstaande ouders in alle rust de
            perfecte voorbereiding op hun bevalling kunnen vinden, vergelijken en boeken.
          </p>
        </div>

        {/* Link columns */}
        {FOOTER_COLS.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="text-[13px] md:text-[15px] font-semibold mb-4 md:mb-6 text-foreground">
              {col.title}
            </h3>
            <ul className="flex flex-col gap-3 md:gap-4" role="list">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[13px] md:text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* ── Bottom bar ── */}
      <div className="pt-6 md:pt-8 border-t border-black/[0.06] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[12px] md:text-[13px] text-muted-foreground">
        <p>© 2025 Lumi Cursussen B.V. Alle rechten voorbehouden.</p>
        <nav aria-label="Juridische links">
          <ul className="flex flex-wrap gap-4 md:gap-6" role="list">
            {LEGAL_LINKS.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}