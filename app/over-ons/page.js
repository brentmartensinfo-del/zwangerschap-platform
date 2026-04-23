import Link from 'next/link';

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
    description: 'Eerlijke reviews, heldere prijzen en geen verborgen kosten. Je weet precies wat je boekt.',
  },
  {
    icon: 'lucide:heart-handshake',
    title: 'Persoonlijk',
    description: 'Iedere zwangerschap is anders. Wij helpen je de cursus te vinden die écht bij jou past.',
  },
  {
    icon: 'lucide:shield-check',
    title: 'Geverifieerde kwaliteit',
    description: 'Alleen gecertificeerde en betrouwbare partners die aantoonbaar goede ervaringen bieden.',
  },
];

const WHY_US = [
  { icon: 'lucide:ban',         title: 'Geen betaalde posities', body: 'Aanbieders kunnen zich niet inkopen. Elke cursus staat op eigen merites.' },
  { icon: 'lucide:badge-check', title: 'Gecertificeerd aanbod',  body: 'We controleren elk aanmeldverzoek op opleiding, ervaring en reviews.' },
  { icon: 'lucide:euro',        title: 'Altijd gratis',          body: 'Voor aanstaande ouders is Lumi volledig gratis. Geen servicekosten.' },
  { icon: 'lucide:map-pin',     title: 'Heel Nederland',         body: 'Van Groningen tot Zeeland — en altijd een ruim online aanbod.' },
  { icon: 'lucide:star',        title: '4.8 gemiddeld',          body: 'Gebaseerd op meer dan 1.200 geverifieerde beoordelingen.' },
  { icon: 'lucide:refresh-ccw', title: 'Altijd up-to-date',      body: 'Ons team controleert en vernieuwt het aanbod doorlopend.' },
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
    <main className="flex-1 flex flex-col">

        {/* ── 1. Hero ── */}
        <section className="relative overflow-hidden">
          <div className="relative w-full h-[500px] md:h-[600px]">
            <img
              src="https://storage.googleapis.com/banani-generated-images/generated-images/55c4601e-7001-4d27-a8c4-a76438bd7eb5.jpg"
              alt="Groep zwangere vrouwen die samen lachen in een gezellige studio"
              className="w-full h-full object-cover object-center"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(43,43,43,0.80) 0%, rgba(43,43,43,0.35) 55%, rgba(43,43,43,0.10) 100%)' }}
              aria-hidden="true"
            />

            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 md:px-16 pb-12 md:pb-16">
              <div className="max-w-[800px]">
                {/* Trust badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full mb-5">
                  <iconify-icon icon="lucide:flower-2" class="text-sm text-white" aria-hidden="true" />
                  <span className="text-[11px] font-semibold text-white/90 uppercase tracking-widest">
                    Opgericht door ouders, voor ouders
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-[54px] font-bold text-white leading-[1.06] tracking-tight mb-4">
                  Jouw bevalling verdient
                  <br className="hidden md:block" />
                  de beste voorbereiding.
                </h1>
                <p className="text-base md:text-[17px] text-white/70 max-w-[560px] leading-relaxed">
                  Wij maken het vinden van de perfecte zwangerschapscursus zo makkelijk, eerlijk en stressvrij mogelijk.
                </p>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="bg-primary">
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

        {/* ── 2. Probleem → Oplossing ── */}
        <section className="relative overflow-hidden">
          {/* Subtle background blobs */}
          <div aria-hidden="true" className="pointer-events-none">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-secondary opacity-60 blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-primary opacity-10 blur-[120px]" />
          </div>

          <div className="relative max-w-[1200px] mx-auto px-6 sm:px-10 md:px-12 py-20 md:py-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

              {/* Image + quote */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://storage.googleapis.com/banani-generated-images/generated-images/3a88a4ae-2f55-4748-85e9-b74895a7c1e9.jpg"
                  alt="Twee vrouwen werken samen op een laptop in een lichte, moderne ruimte"
                  className="w-full h-full object-cover block"
                  width={640}
                  height={640}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-lg border border-black/[0.06]">
                  <p className="text-[14px] text-foreground leading-relaxed font-medium">
                    "Het zoeken leverde meer stress op dan rust. Dat wilden we veranderen."
                  </p>
                  <p className="text-[12px] text-muted-foreground mt-2 font-semibold">— Sarah van Dongen, oprichter</p>
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-7">
                <div>
                  <p className="text-[12px] font-bold text-primary uppercase tracking-widest mb-3">
                    Hoe het begon
                  </p>
                  <h2 className="text-3xl md:text-[36px] font-bold text-foreground tracking-tight leading-tight">
                    Geboren uit frustratie,
                    <br />gebouwd met zorg.
                  </h2>
                </div>

                <div className="flex flex-col gap-4">
                  <p className="text-base text-muted-foreground leading-[1.75]">
                    Tijdens onze eigen zwangerschappen merkten we hoe lastig het was om een duidelijk overzicht te vinden. Het aanbod was versnipperd, prijzen onduidelijk, kwaliteit moeilijk in te schatten.
                  </p>
                  <p className="text-base text-muted-foreground leading-[1.75]">
                    Daarom bouwden we Lumi — een transparant platform waar aanstaande ouders zonder stress de cursus vinden die écht bij hen past.
                  </p>
                </div>

                <ul className="flex flex-col gap-2.5" role="list">
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
          </div>
        </section>

        {/* ── 3. Waarom Lumi ── */}
        <section className="w-full bg-secondary py-20 md:py-24">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-10 md:px-12">
            <div className="text-center mb-12 md:mb-14">
              <p className="text-[12px] font-bold text-primary uppercase tracking-widest mb-3">
                Waarom ouders voor ons kiezen
              </p>
              <h2 className="text-3xl md:text-[36px] font-bold text-foreground tracking-tight">
                Lumi is anders
              </h2>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" role="list">
              {WHY_US.map((item) => (
                <li
                  key={item.title}
                  className="group flex gap-4 p-5 bg-white border border-black/[0.07] rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.07)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <iconify-icon icon={item.icon} class="text-base text-primary group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 4. Kernwaarden ── */}
        <section className="w-full py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-10 md:px-12">

            <div className="text-center mb-14 md:mb-16">
              <p className="text-[12px] font-bold text-primary uppercase tracking-widest mb-4">
                Onze kernwaarden
              </p>
              <h2 className="text-3xl md:text-[38px] font-bold text-foreground tracking-tight mb-4">
                Waar wij voor staan
              </h2>
              <p className="text-base text-muted-foreground max-w-[480px] mx-auto leading-relaxed">
                Lumi is gebouwd op kernwaarden die de belangen van aanstaande ouders altijd voorop stellen.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
              {VALUES.map((value, i) => (
                <li
                  key={value.title}
                  className="group relative flex flex-col bg-white border border-black/[0.07] rounded-2xl p-8 md:p-10 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="absolute top-6 right-7 text-[56px] font-black text-black/[0.03] leading-none select-none tabular-nums" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-7 group-hover:bg-primary group-hover:shadow-[0_4px_16px_rgba(122,166,122,0.3)] transition-all duration-300 shrink-0">
                    <iconify-icon icon={value.icon} class="text-xl text-primary group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                  </div>

                  <h3 className="text-[18px] font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed flex-1">{value.description}</p>

                  <div className="mt-8 h-[2px] w-8 rounded-full bg-primary/20 group-hover:w-full group-hover:bg-primary/30 transition-all duration-500" aria-hidden="true" />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 5. Team ── */}
        <section className="w-full bg-secondary py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-10 md:px-12">

            <div className="text-center mb-14 md:mb-16">
              <p className="text-[12px] font-bold text-primary uppercase tracking-widest mb-4">
                De mensen achter Lumi
              </p>
              <h2 className="text-3xl md:text-[38px] font-bold text-foreground tracking-tight mb-3">
                Het team
              </h2>
              <p className="text-base text-muted-foreground max-w-[440px] mx-auto leading-relaxed">
                Vier mensen die geloven dat aanstaande ouders verdienen dat dit makkelijker is.
              </p>
            </div>

            <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8" role="list">
              {TEAM.map((member) => (
                <li key={member.name} className="group flex flex-col items-center text-center">
                  <div className="relative mb-5">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)] transition-shadow duration-300"
                      width={160}
                      height={160}
                    />
                    <div className="absolute inset-0 rounded-2xl bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
                  </div>
                  <h3 className="text-[15px] font-bold text-foreground mb-0.5">{member.name}</h3>
                  <p className="text-[12px] font-semibold text-primary mb-2">{member.role}</p>
                  <p className="text-[13px] text-muted-foreground leading-snug max-w-[180px]">{member.bio}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 6. CTA ── */}
        <section className="px-6 sm:px-10 md:px-12 py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto">
            <div className="relative bg-foreground rounded-3xl overflow-hidden px-8 md:px-20 py-16 md:py-24 text-center">
              {/* Dot texture */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }}
                aria-hidden="true"
              />
              {/* Green glow */}
              <div
                className="absolute inset-0"
                style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(122,166,122,0.14) 0%, transparent 60%)' }}
                aria-hidden="true"
              />

              <div className="relative z-10 max-w-[620px] mx-auto">
                <p className="text-[12px] font-bold text-white/40 uppercase tracking-widest mb-5">
                  Klaar om te beginnen?
                </p>
                <h2 className="text-3xl md:text-[42px] font-bold text-white tracking-tight leading-[1.08] mb-5">
                  Vind de cursus die
                  <br />jouw bevalling onvergetelijk maakt.
                </h2>
                <p className="text-base md:text-[17px] text-white/50 leading-relaxed mb-3">
                  Vergelijk gratis, onafhankelijk en zonder gedoe.
                </p>
                <p className="text-[13px] text-white/30 mb-10 flex items-center justify-center gap-2">
                  <iconify-icon icon="lucide:shield-check" class="text-primary text-sm" aria-hidden="true" />
                  Geverifieerde aanbieders · Geen servicekosten · Direct contact
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
  );
}