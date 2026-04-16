import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Aanbieders | Lumi Cursussen',
  description:
    'Bij Lumi geloven we dat een goede voorbereiding op de geboorte begint bij de juiste begeleiding. Ontdek onze gecertificeerde aanbieders.',
};

const SELECTION_CRITERIA = [
  {
    icon: 'lucide:shield-check',
    title: 'Gecertificeerde professionals',
    description:
      "Alle aanbieders op ons platform beschikken over de juiste, actuele diploma's en certificeringen in hun specifieke vakgebied. We controleren registraties bij erkende beroepsverenigingen.",
  },
  {
    icon: 'lucide:star',
    title: 'Aantoonbare ervaring',
    description:
      'We werken samen met professionals die niet alleen de theorie kennen, maar ook ruime, praktische ervaring hebben in het begeleiden van aanstaande ouders en zwangeren.',
  },
  {
    icon: 'lucide:heart',
    title: 'Passie voor de zorg',
    description:
      'Naast papieren kijken we naar toewijding. Onze aanbieders zetten zich met hart en ziel in om jou een veilige, positieve en goed geïnformeerde voorbereiding te bieden.',
  },
];

const SPECIALISATIONS = [
  {
    title: 'Zwangerschapsyoga',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/e36bd753-9c98-4b61-9702-354b33d730c1.jpg',
    href: '/cursussen?type=Zwangerschapsyoga',
  },
  {
    title: 'Hypnobirthing',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/f8047725-fff5-4be2-8dea-873aa1bf5bac.jpg',
    href: '/cursussen?type=Hypnobirthing',
  },
  {
    title: 'Praktische Cursussen',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/911782ef-1dbd-40ea-9709-f371c217ef5a.jpg',
    href: '/cursussen?type=Samen+met+partner',
  },
  {
    title: 'Online Cursussen',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/53d8f310-55ba-4cef-85bf-b83c46481c52.jpg',
    href: '/cursussen?type=Online+Cursussen',
  },
];

export default function AanbiedersPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 pt-[65px]">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="max-w-[760px] mx-auto px-4 sm:px-8 text-center pt-20 md:pt-24 pb-14 md:pb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 mb-6">
            <iconify-icon icon="lucide:shield-check" class="text-sm text-primary" aria-hidden="true" />
            <span className="text-[11px] font-semibold text-primary uppercase tracking-widest">
              Geselecteerde Kwaliteit
            </span>
          </div>
          <h1 className="text-[36px] sm:text-5xl md:text-[52px] font-bold text-foreground tracking-tight leading-[1.08] mb-6">
            De beste voorbereiding,
            <br className="hidden sm:block" />
            zorgvuldig geselecteerd
          </h1>
          <p className="text-base md:text-[17px] text-muted-foreground leading-relaxed max-w-[520px] mx-auto">
            Bij Lumi geloven we dat een goede voorbereiding op de geboorte
            begint bij de juiste begeleiding. Daarom werken we uitsluitend
            samen met gecertificeerde en gepassioneerde professionals.
          </p>
        </section>

        {/* ── Selectiecriteria ──────────────────────────────────────────── */}
        <section
          className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-12 pb-20 md:pb-28"
          aria-labelledby="criteria-heading"
        >
          <div className="text-center mb-12 md:mb-14">
            <h2
              id="criteria-heading"
              className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-4"
            >
              Hoe wij onze aanbieders selecteren
            </h2>
            <p className="text-base text-muted-foreground max-w-[480px] mx-auto leading-relaxed">
              Voordat een cursus of professional op ons platform wordt
              toegelaten, voeren we een uitgebreide kwaliteitscheck uit op
              basis van drie belangrijke pijlers.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-5" role="list">
            {SELECTION_CRITERIA.map((item, i) => (
              <li
                key={item.title}
                className="group relative flex flex-col bg-white border border-black/[0.07] rounded-2xl p-8 hover:border-primary/25 hover:shadow-[0_8px_32px_rgba(122,166,122,0.08)] transition-all duration-300"
              >
                {/* Ghost number */}
                <span
                  className="absolute top-6 right-7 text-[56px] font-black text-black/[0.04] leading-none select-none pointer-events-none tabular-nums"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300 shrink-0">
                  <iconify-icon
                    icon={item.icon}
                    class="text-xl text-foreground group-hover:text-primary transition-colors duration-300"
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1">
                  <h3 className="text-[16px] font-semibold text-foreground mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed flex-1">
                    {item.description}
                  </p>
                </div>

                {/* Animated underline */}
                <div
                  className="mt-7 h-px w-8 bg-primary/25 group-hover:w-full transition-all duration-500 ease-out"
                  aria-hidden="true"
                />
              </li>
            ))}
          </ul>
        </section>

        {/* ── Specialisaties ────────────────────────────────────────────── */}
        <section className="w-full bg-secondary py-18 md:py-24" aria-labelledby="spec-heading">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-12">

            <div className="text-center mb-12 md:mb-14">
              <h2
                id="spec-heading"
                className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-4"
              >
                Verschillende specialisaties
              </h2>
              <p className="text-base text-muted-foreground max-w-[420px] mx-auto leading-relaxed">
                Vind de expert en de methode die het beste aansluit bij jouw
                wensen en behoeften.
              </p>
            </div>

            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4" role="list">
              {SPECIALISATIONS.map((spec) => (
                <li key={spec.title}>
                  <Link
                    href={spec.href}
                    className="group block rounded-2xl overflow-hidden relative shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="aspect-[3/4] md:aspect-[3/4] overflow-hidden">
                      <img
                        src={spec.image}
                        alt={spec.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        width={300}
                        height={400}
                      />
                    </div>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/65 via-foreground/10 to-transparent" />
                    {/* Label */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                      <p className="text-white font-semibold text-[15px] leading-snug">
                        {spec.title}
                      </p>
                      <div className="flex items-center gap-1 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white/80 text-[12px]">Bekijk cursussen</span>
                        <iconify-icon icon="lucide:arrow-right" class="text-white/80 text-xs" aria-hidden="true" />
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── CTA voor aanbieders ───────────────────────────────────────── */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-12 py-20 md:py-28">
          <div className="relative bg-foreground rounded-2xl px-8 md:px-20 py-16 md:py-20 text-center overflow-hidden">
            {/* Subtle background texture */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }}
              aria-hidden="true"
            />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 mb-6">
                <iconify-icon icon="lucide:building-2" class="text-sm text-white/70" aria-hidden="true" />
                <span className="text-[11px] font-semibold text-white/70 uppercase tracking-widest">
                  Voor aanbieders
                </span>
              </span>

              <h2 className="text-3xl md:text-[38px] font-bold text-white tracking-tight leading-[1.1] mb-5">
                Ben jij een cursusaanbieder?
              </h2>
              <p className="text-base md:text-[17px] text-white/60 max-w-[520px] mx-auto mb-10 leading-relaxed">
                Sluit je aan bij het grootste onafhankelijke platform voor
                zwangerschapscursussen in Nederland. Bereik maandelijks
                duizenden aanstaande ouders en beheer je boekingen eenvoudig
                op één plek.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-foreground text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  Meld je aan als partner
                  <iconify-icon icon="lucide:arrow-right" class="text-base" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white/80 text-sm font-medium rounded-xl hover:border-white/40 hover:text-white transition-all"
                >
                  Meer informatie
                </Link>
              </div>

              {/* Trust stats */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 pt-8 border-t border-white/10">
                {[
                  { value: '50+', label: 'Aangesloten aanbieders' },
                  { value: '1.200+', label: 'Geboekte cursussen' },
                  { value: '4.8', label: 'Gemiddelde beoordeling' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-[13px] text-white/50 mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}