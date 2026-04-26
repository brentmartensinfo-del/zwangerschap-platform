import Link from 'next/link';

const FOOTER_COLS = [
  {
    title: 'Over Birthly',
    links: [
      { label: 'Ons verhaal',      href: '/over-ons' },
      { label: 'Hoe het werkt',    href: '/#hoe-het-werkt' },
      { label: 'Klantervaringen',  href: '/#testimonials' },
      { label: 'Birthly blog',  href: '/blog' },
    ],
  },
  {
    title: 'Voor Aanbieders',
    links: [
      { label: 'Cursus aanmelden', href: '/contact' },
      { label: 'Partner worden',   href: '/aanbieders' },
      { label: 'Succesverhalen',   href: '/over-ons' },
      { label: 'Inloggen partners', href: '/contact' },
    ],
  },
  {
    title: 'Hulp & Contact',
    links: [
      { label: 'Veelgestelde vragen', href: '/faq' },
      { label: 'Contact opnemen',     href: '/contact' },
    ],
  },
];

const LEGAL_LINKS = [
  { label: 'Algemene Voorwaarden', href: '/contact' },
  { label: 'Privacybeleid',        href: '/contact' },
  { label: 'Cookiebeleid',         href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 md:pt-20 pb-8 px-6 sm:px-10 md:px-12">

      {/* ── Main grid ── */}
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 md:gap-12 pb-14 md:pb-16 border-b border-white/[0.08]">

          {/* ── Brand column ── */}
          <div className="flex flex-col gap-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 group"
              aria-label="Birthly – home"
            >
              <iconify-icon
                icon="lucide:baby"
                class="text-2xl text-primarly"
                aria-hidden="true"
              />
              <span className="text-lg font-semibold tracking-tight text-white">
                Birthly.nl
              </span>
            </Link>

            <p className="text-[14px] text-white/50 leading-relaxed max-w-[280px]">
              Het onafhankelijke platform voor aanstaande ouders die de perfecte
              zwangerschapscursus willen vinden, vergelijken en boeken.
            </p>

            {/* Trust badges */}
            <ul className="flex flex-col gap-2.5 mt-1" role="list">
              {[
                'Gratis te gebruiken',
                'Onafhankelijk & transparant',
                'Alleen gecertificeerde aanbieders',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[13px] text-white/40">
                  <iconify-icon icon="lucide:check-circle-2" class="text-primary text-sm shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Link columns ── */}
          {FOOTER_COLS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-[13px] font-bold text-white/90 uppercase tracking-widest mb-5">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-3.5" role="list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-white/45 hover:text-white transition-colors focus-visible:outline-none focus-visible:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-7 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-[13px] text-white/30">
            © 2026 Birthly B.V. Alle rechten voorbehouden.
          </p>
          <nav aria-label="Juridische links">
            <ul className="flex flex-wrap gap-5" role="list">
              {LEGAL_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-white/30 hover:text-white/70 transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}