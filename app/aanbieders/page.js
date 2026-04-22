import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProviderCard from '@/components/ProviderCard';
import { getAllProviders } from '@/lib/providers';

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
      "Alle aanbieders beschikken over actuele diploma's en certificeringen. We controleren registraties bij erkende beroepsverenigingen — voordat ze op ons platform verschijnen.",
    stat: '100%',
    statLabel: 'geverifieerd',
  },
  {
    icon: 'lucide:star',
    title: 'Aantoonbare ervaring',
    description:
      'We selecteren professionals met ruime, praktische ervaring in het begeleiden van aanstaande ouders — niet alleen theorie, maar bewezen resultaten.',
    stat: '5+',
    statLabel: 'jaar gem. ervaring',
  },
  {
    icon: 'lucide:heart',
    title: 'Passie voor de zorg',
    description:
      'Onze aanbieders zetten zich met hart en ziel in voor een veilige, positieve en goed geïnformeerde voorbereiding op de bevalling.',
    stat: '4.8',
    statLabel: 'gem. beoordeling',
  },
];

const SPECIALISATIONS = [
  {
    title: 'Zwangerschapsyoga',
    description: 'Ontspan en bereid je lichaam voor',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/e36bd753-9c98-4b61-9702-354b33d730c1.jpg',
    href: '/cursussen?type=Zwangerschapsyoga',
  },
  {
    title: 'Hypnobirthing',
    description: 'Bevallen met vertrouwen en kracht',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/f8047725-fff5-4be2-8dea-873aa1bf5bac.jpg',
    href: '/cursussen?type=Hypnobirthing',
  },
  {
    title: 'Samen met partner',
    description: 'Voorbereiding voor jullie allebei',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/911782ef-1dbd-40ea-9709-f371c217ef5a.jpg',
    href: '/cursussen?type=Samen+met+partner',
  },
  {
    title: 'Online Cursussen',
    description: 'Leren op jouw moment en tempo',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/53d8f310-55ba-4cef-85bf-b83c46481c52.jpg',
    href: '/cursussen?type=Online+Cursussen',
  },
];

export default async function AanbiedersPage() {
  const providers = await getAllProviders();
  return (
    <>
      <Navbar />

      <main className="flex-1 pt-[65px]">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          {/* Background gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-secondary/60 to-background"
            aria-hidden="true"
          />
          {/* Decorative blobs */}
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 -translate-y-1/2 translate-x-1/3"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary -translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          />

          <div className="relative max-w-[860px] mx-auto px-4 sm:px-8 text-center pt-6 md:pt-8 pb-14 md:pb-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/[0.07] shadow-sm mb-8">
              <iconify-icon icon="lucide:shield-check" class="text-sm text-primary" aria-hidden="true" />
              <span className="text-[12px] font-semibold text-foreground/70 uppercase tracking-widest">
                Alleen gecertificeerde professionals
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[40px] sm:text-5xl md:text-[58px] font-bold text-foreground tracking-tight leading-[1.05] mb-7">
              De beste voorbereiding
              <br className="hidden sm:block" />
              <span className="text-primary"> begint hier</span>
            </h1>

            <p className="text-base md:text-[18px] text-muted-foreground leading-relaxed max-w-[540px] mx-auto mb-10">
              Bij Lumi werken we uitsluitend samen met gecertificeerde en
              gepassioneerde professionals. Zodat jij vol vertrouwen kunt
              voorbereiden op de komst van jullie kindje.
            </p>

            {/* Stats row */}
            <div className="inline-flex flex-wrap items-center justify-center gap-6 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-black/[0.06] shadow-sm">
              {[
                { value: '50+', label: 'Aanbieders' },
                { value: '1.200+', label: 'Cursussen gevolgd' },
                { value: '4.8 ★', label: 'Gem. beoordeling' },
              ].map((s, i) => (
                <div key={s.label} className="flex items-center gap-5">
                  <div className="text-center">
                    <p className="text-xl font-bold text-foreground leading-none">{s.value}</p>
                    <p className="text-[12px] text-muted-foreground mt-1">{s.label}</p>
                  </div>
                  {i < 2 && (
                    <div className="w-px h-8 bg-black/[0.07]" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Selectiecriteria ──────────────────────────────────────────── */}
        <section
          className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-12 py-20 md:py-28"
          aria-labelledby="criteria-heading"
        >
          {/* Section label */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
            <div>
              <p className="text-[12px] font-semibold text-primary uppercase tracking-widest mb-3">
                Ons selectieproces
              </p>
              <h2
                id="criteria-heading"
                className="text-3xl md:text-[38px] font-bold text-foreground tracking-tight leading-tight max-w-[460px]"
              >
                Hoe wij onze aanbieders selecteren
              </h2>
            </div>
            <p className="text-base text-muted-foreground max-w-[340px] leading-relaxed md:text-right">
              Elk aanvraag doorloopt een uitgebreide kwaliteitscheck op drie
              essentiële pijlers.
            </p>
          </div>

          {/* Cards */}
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
            {SELECTION_CRITERIA.map((item, i) => (
              <li
                key={item.title}
                className="group relative flex flex-col bg-white border border-black/[0.07] rounded-2xl p-8 md:p-10 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Ghost number */}
                <span
                  className="absolute top-8 right-8 text-[72px] font-black text-black/[0.03] leading-none select-none pointer-events-none tabular-nums"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 shrink-0 group-hover:bg-primary group-hover:shadow-[0_4px_16px_rgba(122,166,122,0.3)] transition-all duration-300">
                  <iconify-icon
                    icon={item.icon}
                    class="text-xl text-primary group-hover:text-white transition-colors duration-300"
                    aria-hidden="true"
                  />
                </div>

                {/* Stat */}
                <div className="mb-5">
                  <p className="text-3xl font-black text-foreground leading-none">
                    {item.stat}
                  </p>
                  <p className="text-[12px] text-muted-foreground mt-1 uppercase tracking-wide font-medium">
                    {item.statLabel}
                  </p>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1">
                  <h3 className="text-[17px] font-bold text-foreground mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed flex-1">
                    {item.description}
                  </p>
                </div>

                {/* Bottom line */}
                <div
                  className="mt-8 h-[2px] w-8 rounded-full bg-primary/20 group-hover:w-full group-hover:bg-primary/40 transition-all duration-500 ease-out"
                  aria-hidden="true"
                />
              </li>
            ))}
          </ul>
        </section>

        {/* ── Aanbieders grid ── */}
        <section className="w-full bg-secondary py-20 md:py-28" aria-labelledby="aanbieders-heading">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-12">

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
              <div>
                <p className="text-[12px] font-semibold text-primary uppercase tracking-widest mb-3">
                  Onze aanbieders
                </p>
                <h2
                  id="aanbieders-heading"
                  className="text-3xl md:text-[38px] font-bold text-foreground tracking-tight"
                >
                  Maak kennis met de experts
                </h2>
              </div>
              <Link
                href="/cursussen"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-black/[0.08] text-foreground text-sm font-semibold rounded-xl hover:shadow-md transition-all"
              >
                Bekijk alle cursussen
                <iconify-icon icon="lucide:arrow-right" class="text-base" aria-hidden="true" />
              </Link>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
              {providers.map((provider) => (
                <li key={provider.slug}>
                  <ProviderCard {...provider} />
                </li>
              ))}
            </ul>

            <div className="text-center mt-8 md:hidden">
              <Link
                href="/cursussen"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-black/[0.08] text-foreground text-sm font-semibold rounded-xl hover:shadow-md transition-all"
              >
                Bekijk alle cursussen
                <iconify-icon icon="lucide:arrow-right" class="text-base" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA voor aanbieders ───────────────────────────────────────── */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-12 py-20 md:py-28">
          <div className="relative bg-foreground rounded-3xl overflow-hidden">

            {/* Background texture */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(circle at 15% 50%, rgba(122,166,122,0.12) 0%, transparent 50%), radial-gradient(circle at 85% 20%, rgba(255,255,255,0.04) 0%, transparent 40%)',
              }}
              aria-hidden="true"
            />

            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 px-8 md:px-20 py-16 md:py-24">
              {/* Two-column layout on desktop */}
              <div className="flex flex-col md:grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">

                {/* Left: text */}
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 mb-6">
                    <iconify-icon icon="lucide:building-2" class="text-sm text-primary" aria-hidden="true" />
                    <span className="text-[11px] font-semibold text-white/60 uppercase tracking-widest">
                      Voor aanbieders
                    </span>
                  </span>

                  <h2 className="text-3xl md:text-[42px] font-bold text-white tracking-tight leading-[1.08] mb-5">
                    Ben jij een
                    <br />cursusaanbieder?
                  </h2>
                  <p className="text-base md:text-[17px] text-white/55 max-w-[460px] leading-relaxed">
                    Sluit je aan bij het grootste onafhankelijke platform voor
                    zwangerschapscursussen in Nederland. Bereik maandelijks
                    duizenden aanstaande ouders.
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-8 mt-8 pt-8 border-t border-white/10">
                    {[
                      { value: '50+', label: 'Aanbieders' },
                      { value: '1.200+', label: 'Cursussen gevolgd' },
                      { value: '4.8', label: 'Gem. beoordeling' },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <p className="text-2xl font-bold text-white leading-none">{stat.value}</p>
                        <p className="text-[12px] text-white/40 mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: CTA card */}
                <div className="w-full md:w-[300px] shrink-0 bg-white/[0.06] border border-white/10 rounded-2xl p-7 flex flex-col gap-4">
                  <p className="text-white font-semibold text-[16px] leading-snug">
                    Klaar om meer aanstaande ouders te bereiken?
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Meld je aan als partner en beheer alles op één plek.
                  </p>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  >
                    Meld je aan als partner
                    <iconify-icon icon="lucide:arrow-right" class="text-base" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3 border border-white/15 text-white/70 text-sm font-medium rounded-xl hover:border-white/30 hover:text-white transition-all"
                  >
                    Meer informatie
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}