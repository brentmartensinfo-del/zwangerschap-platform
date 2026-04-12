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
    avatar: 'https://storage.googleapis.com/banani-avatars/avatar%2Ffemale%2F25-35%2FEuropean%2F2',
  },
  {
    name: 'Lisa Mendes',
    role: 'Mede-oprichter & Product',
    avatar: 'https://storage.googleapis.com/banani-avatars/avatar%2Ffemale%2F25-35%2FHispanic%2F1',
  },
  {
    name: 'Thomas de Boer',
    role: 'Hoofd Partnerschappen',
    avatar: 'https://storage.googleapis.com/banani-avatars/avatar%2Fmale%2F25-35%2FEuropean%2F4',
  },
  {
    name: 'Aisha Omondi',
    role: 'Klantgeluk',
    avatar: 'https://storage.googleapis.com/banani-avatars/avatar%2Ffemale%2F18-25%2FAfrican%2F2',
  },
];

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function OverOnsPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 flex flex-col">

        {/* ── Hero ── */}
        <section className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 md:px-12 pt-16 md:pt-20 pb-10">
          <div className="text-center max-w-[800px] mx-auto mb-10">
            <h1 className="text-4xl sm:text-5xl md:text-[48px] font-bold text-foreground leading-[1.1] tracking-tight mb-6">
              Wij geloven dat een goede voorbereiding het halve werk is.
            </h1>
            <p className="text-lg md:text-[18px] text-muted-foreground leading-relaxed">
              Lumi is opgericht om aanstaande ouders zonder stress en gedoe te
              verbinden met de beste zwangerschapscursussen, zodat zij vol
              vertrouwen hun bevalling tegemoet kunnen zien.
            </p>
          </div>

          <div className="w-full rounded-xl overflow-hidden">
            <img
              src="https://storage.googleapis.com/banani-generated-images/generated-images/55c4601e-7001-4d27-a8c4-a76438bd7eb5.jpg"
              alt="Groep zwangere vrouwen die samen lachen in een gezellige studio"
              className="w-full h-auto object-cover block"
              width={1344}
              height={576}
            />
          </div>
        </section>

        {/* ── Ons verhaal ── */}
        <section className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 md:px-12 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="flex flex-col gap-5">
              <h2 className="text-3xl md:text-[32px] font-bold text-foreground tracking-tight">
                Ons verhaal
              </h2>
              <p className="text-base text-muted-foreground leading-[1.7]">
                Tijdens onze eigen zwangerschappen merkten we hoe lastig het was
                om een duidelijk overzicht te vinden van alle beschikbare
                cursussen. Het aanbod was versnipperd, de prijzen onduidelijk en
                de kwaliteit moeilijk in te schatten. Het zoeken naar de juiste
                voorbereiding leverde meer stress op dan rust.
              </p>
              <p className="text-base text-muted-foreground leading-[1.7]">
                Daarom zijn we Lumi gestart. Wij willen het proces van het
                vinden, vergelijken en boeken van een zwangerschapscursus zo
                transparant en eenvoudig mogelijk maken. Geen verborgen kosten,
                geen eindeloze zoektochten. Gewoon een helder overzicht van
                betrouwbare aanbieders bij jou in de buurt.
              </p>
            </div>
            <div className="w-full rounded-xl overflow-hidden">
              <img
                src="https://storage.googleapis.com/banani-generated-images/generated-images/3a88a4ae-2f55-4748-85e9-b74895a7c1e9.jpg"
                alt="Twee vrouwen werken samen op een laptop in een lichte, moderne ruimte"
                className="w-full h-full object-cover block"
                width={640}
                height={640}
              />
            </div>
          </div>
        </section>

        {/* ── Kernwaarden ── */}
        <section className="w-full bg-secondary py-16 md:py-20">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-[32px] font-bold text-foreground tracking-tight mb-4">
                Waar wij voor staan
              </h2>
              <p className="text-base text-muted-foreground max-w-[600px] mx-auto">
                Lumi is gebouwd op kernwaarden die de belangen van aanstaande
                ouders altijd voorop stellen.
              </p>
            </div>

            <ul
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10"
              role="list"
            >
              {VALUES.map((value) => (
                <li
                  key={value.title}
                  className="bg-white border border-black/[0.08] rounded-xl p-8 md:p-10 text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6">
                    <iconify-icon
                      icon={value.icon}
                      class="text-[32px] text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Team ── */}
        <section className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 md:px-12 py-16 md:py-20">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-[32px] font-bold text-foreground tracking-tight">
              Het team achter Lumi
            </h2>
          </div>

          <ul
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10"
            role="list"
          >
            {TEAM.map((member) => (
              <li key={member.name} className="text-center flex flex-col items-center">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mb-6 bg-secondary"
                  width={160}
                  height={160}
                />
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ── CTA ── */}
        <section className="mx-4 sm:mx-8 md:mx-12 mb-16 md:mb-20 rounded-xl bg-foreground text-background px-8 md:px-12 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-[36px] font-bold tracking-tight mb-6 text-background">
            Klaar om jouw perfecte cursus te vinden?
          </h2>
          <p className="text-base md:text-lg text-muted max-w-[600px] mx-auto mb-10 leading-relaxed">
            Ontdek het aanbod in jouw omgeving en begin met een gerust hart aan
            de voorbereiding op de komst van jullie kindje.
          </p>
          <Link
            href="/cursussen"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-base font-semibold rounded-md hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            Bekijk alle cursussen
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}