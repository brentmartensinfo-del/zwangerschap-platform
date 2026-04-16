import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Over ons | Lumi Cursussen',
  description:
    'Lumi is opgericht om aanstaande ouders zonder stress te verbinden met de beste zwangerschapscursussen. Lees ons verhaal.',
};

/* ─── Data ───────────────────────────────────────────────────────────────── */

const VALUES = [
  {
    icon: 'lucide:search-check',
    title: 'Transparant',
    description:
      'Eerlijke reviews, heldere prijzen en geen verborgen kosten. Je weet precies wat je boekt en wat je kunt verwachten.',
  },
  {
    icon: 'lucide:heart-handshake',
    title: 'Persoonlijk',
    description:
      'Iedere zwangerschap is anders. Wij helpen je de cursus te vinden die perfect aansluit bij jouw wensen en situatie.',
  },
  {
    icon: 'lucide:shield-check',
    title: 'Geverifieerde kwaliteit',
    description:
      'We werken alleen samen met gecertificeerde en betrouwbare partners die aantoonbaar goede ervaringen bieden.',
  },
];

const TEAM = [
  {
    name: 'Sarah van Dongen',
    role: 'Oprichter & CEO',
    bio: 'Drie zwangerschappen, drie keer gefrustreerd door het zoeken. Dat moest anders.',
    avatar: 'https://storage.googleapis.com/banani-avatars/avatar%2Ffemale%2F25-35%2FEuropean%2F2',
  },
  {
    name: 'Lisa Mendes',
    role: 'Mede-oprichter & Product',
    bio: 'Bouwt producten die zich aanvoelen alsof ze er altijd al hadden moeten zijn.',
    avatar: 'https://storage.googleapis.com/banani-avatars/avatar%2Ffemale%2F25-35%2FHispanic%2F1',
  },
  {
    name: 'Thomas de Boer',
    role: 'Hoofd Partnerschappen',
    bio: 'Verbindt de beste aanbieders aan het platform — altijd op kwaliteit.',
    avatar: 'https://storage.googleapis.com/banani-avatars/avatar%2Fmale%2F25-35%2FEuropean%2F4',
  },
  {
    name: 'Aisha Omondi',
    role: 'Klantgeluk',
    bio: 'Zorgt dat elke ouder zich gehoord, geholpen en goed voorbereid voelt.',
    avatar: 'https://storage.googleapis.com/banani-avatars/avatar%2Ffemale%2F18-25%2FAfrican%2F2',
  },
];

const STATS = [
  { value: '50+',    label: 'Gecertificeerde aanbieders' },
  { value: '1.200+', label: 'Cursussen gevolgd' },
  { value: '4.8',    label: 'Gemiddelde beoordeling' },
  { value: '2019',   label: 'Opgericht' },
];

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function OverOnsPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 flex flex-col">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden">
          {/* Full-bleed image */}
          <div className="relative w-full h-[480px] md:h-[580px]">
            <img
              src="https://storage.googleapis.com/banani-generated-images/generated-images/55c4601e-7001-4d27-a8c4-a76438bd7eb5.jpg"
              alt="Groep zwangere vrouwen die samen lachen in een gezellige studio"
              className="w-full h-full object-cover object-center"
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, rgba(43,43,43,0.75) 0%, rgba(43,43,43,0.30) 50%, transparent 100%)',
              }}
              aria-hidden="true"
            />
            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 md:px-20 pb-12 md:pb-16 max-w-[900px]">
              <p className="text-[12px] font-bold text-white/60 uppercase tracking-widest mb-4">
                Ons verhaal
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold text-white leading-[1.06] tracking-tight">
                Wij geloven dat een goede
                <br className="hidden md:block" />
                voorbereiding het halve werk is.
              </h1>
            </div>
          </div>

          {/* Stats bar */}
          <div className="bg-foreground">
            <div className="max-w-[1200px] mx-auto px-6 md:px-12">
              <ul className="grid grid-cols-2 md:grid-cols-4" role="list">
                {STATS.map((stat, i) => (
                  <li
                    key={stat.label}
                    className={`py-6 md:py-7 px-6 text-center ${i < STATS.length - 1 ? 'border-r border-white/10' : ''}`}
                  >
                    <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                    <p className="text-[12px] text-white/50 mt-1">{stat.label}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Intro tekst ── */}
        <section className="max-w-[760px] mx-auto px-6 sm:px-10 py-16 md:py-24 text-center">
          <p className="text-lg md:text-xl text-muted-foreground leading-[1.75]">
            Lumi is opgericht om aanstaande ouders zonder stress en gedoe te
            verbinden met de beste zwangerschapscursussen — zodat zij vol
            vertrouwen hun bevalling tegemoet kunnen zien.
          </p>
        </section>

        {/* ── Ons verhaal ── */}
        <section className="max-w-[1200px] mx-auto w-full px-6 sm:px-10 md:px-12 pb-20 md:pb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://storage.googleapis.com/banani-generated-images/generated-images/3a88a4ae-2f55-4748-85e9-b74895a7c1e9.jpg"
                alt="Twee vrouwen werken samen op een laptop in een lichte, moderne ruimte"
                className="w-full h-full object-cover block"
                width={640}
                height={640}
              />
              {/* Floating quote */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-lg">
                <p className="text-[14px] text-foreground leading-relaxed font-medium">
                  "Het zoeken naar de juiste cursus leverde meer stress op dan rust. Dat wilden we veranderen."
                </p>
                <p className="text-[12px] text-muted-foreground mt-2 font-semibold">— Sarah van Dongen, oprichter</p>
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-[12px] font-bold text-primary uppercase tracking-widest mb-4">
                  Hoe het begon
                </p>
                <h2 className="text-3xl md:text-[36px] font-bold text-foreground tracking-tight leading-tight mb-6">
                  Geboren uit frustratie,
                  <br />gebouwd met zorg.
                </h2>
              </div>

              <div className="flex flex-col gap-5">
                <p className="text-base text-muted-foreground leading-[1.75]">
                  Tijdens onze eigen zwangerschappen merkten we hoe lastig het
                  was om een duidelijk overzicht te vinden van alle beschikbare
                  cursussen. Het aanbod was versnipperd, prijzen onduidelijk, en
                  kwaliteit moeilijk in te schatten.
                </p>
                <p className="text-base text-muted-foreground leading-[1.75]">
                  Daarom zijn we Lumi gestart. Wij willen het vinden, vergelijken
                  en boeken van een zwangerschapscursus zo transparant en
                  eenvoudig mogelijk maken. Geen verborgen kosten, geen eindeloos
                  zoeken — gewoon een helder overzicht van betrouwbare aanbieders
                  bij jou in de buurt.
                </p>
              </div>

              {/* Highlights */}
              <ul className="flex flex-col gap-3" role="list">
                {[
                  'Volledig onafhankelijk — geen betaalde posities',
                  'Alleen gecertificeerde aanbieders op het platform',
                  'Gratis te gebruiken voor aanstaande ouders',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-foreground">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <iconify-icon icon="lucide:check" class="text-primary text-xs" aria-hidden="true" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Kernwaarden ── */}
        <section className="w-full bg-secondary py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-10 md:px-12">

            <div className="text-center mb-14 md:mb-16">
              <p className="text-[12px] font-bold text-primary uppercase tracking-widest mb-4">
                Onze kernwaarden
              </p>
              <h2 className="text-3xl md:text-[38px] font-bold text-foreground tracking-tight mb-4">
                Waar wij voor staan
              </h2>
              <p className="text-base text-muted-foreground max-w-[480px] mx-auto leading-relaxed">
                Lumi is gebouwd op kernwaarden die de belangen van aanstaande
                ouders altijd voorop stellen.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
              {VALUES.map((value, i) => (
                <li
                  key={value.title}
                  className="group relative flex flex-col bg-white border border-black/[0.07] rounded-2xl p-8 md:p-10 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  {/* Ghost number */}
                  <span
                    className="absolute top-6 right-7 text-[56px] font-black text-black/[0.03] leading-none select-none tabular-nums"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-7 group-hover:bg-primary group-hover:shadow-[0_4px_16px_rgba(122,166,122,0.3)] transition-all duration-300 shrink-0">
                    <iconify-icon
                      icon={value.icon}
                      class="text-xl text-primary group-hover:text-white transition-colors duration-300"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="text-[18px] font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>

                  <div
                    className="mt-8 h-[2px] w-8 rounded-full bg-primary/20 group-hover:w-full group-hover:bg-primary/30 transition-all duration-500"
                    aria-hidden="true"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Team ── */}
        <section className="max-w-[1200px] mx-auto w-full px-6 sm:px-10 md:px-12 py-20 md:py-28">

          <div className="text-center mb-14 md:mb-16">
            <p className="text-[12px] font-bold text-primary uppercase tracking-widest mb-4">
              De mensen achter Lumi
            </p>
            <h2 className="text-3xl md:text-[38px] font-bold text-foreground tracking-tight">
              Het team
            </h2>
          </div>

          <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8" role="list">
            {TEAM.map((member) => (
              <li
                key={member.name}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative mb-5">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-28 h-28 md:w-36 md:h-36 rounded-2xl object-cover bg-secondary shadow-sm group-hover:shadow-md transition-shadow duration-300"
                    width={144}
                    height={144}
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
                </div>
                <h3 className="text-[15px] font-bold text-foreground mb-0.5">
                  {member.name}
                </h3>
                <p className="text-[12px] font-semibold text-primary mb-2">
                  {member.role}
                </p>
                <p className="text-[13px] text-muted-foreground leading-snug max-w-[180px]">
                  {member.bio}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* ── CTA ── */}
        <section className="px-6 sm:px-10 md:px-12 pb-20 md:pb-28">
          <div className="max-w-[1200px] mx-auto">
            <div className="relative bg-foreground rounded-3xl overflow-hidden px-8 md:px-20 py-16 md:py-24 text-center">
              {/* Background texture */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }}
                aria-hidden="true"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(ellipse at 30% 50%, rgba(122,166,122,0.12) 0%, transparent 60%)',
                }}
                aria-hidden="true"
              />

              <div className="relative z-10 max-w-[600px] mx-auto">
                <h2 className="text-3xl md:text-[42px] font-bold text-white tracking-tight leading-[1.08] mb-5">
                  Klaar om jouw perfecte
                  <br />cursus te vinden?
                </h2>
                <p className="text-base md:text-[17px] text-white/55 leading-relaxed mb-10">
                  Ontdek het aanbod in jouw omgeving en begin met een gerust
                  hart aan de voorbereiding op de komst van jullie kindje.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/cursussen"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white text-[15px] font-semibold rounded-xl hover:opacity-90 active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  >
                    Bekijk alle cursussen
                    <iconify-icon icon="lucide:arrow-right" class="text-base" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/15 text-white/70 text-[15px] font-medium rounded-xl hover:border-white/30 hover:text-white transition-all"
                  >
                    Neem contact op
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