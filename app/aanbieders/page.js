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
      'Alle aanbieders op ons platform beschikken over de juiste, actuele diploma\'s en certificeringen in hun specifieke vakgebied. We controleren registraties bij erkende beroepsverenigingen.',
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
        <section className="max-w-[800px] mx-auto px-4 sm:px-8 text-center pt-16 md:pt-20 pb-12 md:pb-16">
          <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-primary uppercase tracking-widest mb-5">
            <iconify-icon icon="lucide:shield-check" class="text-sm" aria-hidden="true" />
            Geselecteerde Kwaliteit
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mb-6">
            De beste voorbereiding,
            <br />zorgvuldig geselecteerd
          </h1>
          <p className="text-base md:text-[18px] text-muted-foreground leading-relaxed max-w-[560px] mx-auto">
            Bij Lumi geloven we dat een goede voorbereiding op de geboorte
            begint bij de juiste begeleiding. Daarom werken we uitsluitend samen
            met gecertificeerde en gepassioneerde professionals.
          </p>
        </section>

        {/* ── Selectiecriteria ──────────────────────────────────────────── */}
        <section
          className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-12 pb-16 md:pb-20"
          aria-labelledby="criteria-heading"
        >
          <div className="text-center mb-10 md:mb-12">
            <h2
              id="criteria-heading"
              className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-4"
            >
              Hoe wij onze aanbieders selecteren
            </h2>
            <p className="text-base text-muted-foreground max-w-[500px] mx-auto">
              Voordat een cursus of professional op ons platform wordt
              toegelaten, voeren we een uitgebreide kwaliteitscheck uit op basis
              van drie belangrijke pijlers.
            </p>
          </div>

          <ul
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            role="list"
          >
            {SELECTION_CRITERIA.map((item) => (
              <li
                key={item.title}
                className="bg-white border border-black/[0.07] rounded-xl p-7 md:p-8"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-5">
                  <iconify-icon icon={item.icon} class="text-xl text-foreground" aria-hidden="true" />
                </div>
                <h3 className="text-[16px] font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Specialisaties ────────────────────────────────────────────── */}
        <section className="w-full bg-secondary py-16 md:py-20" aria-labelledby="spec-heading">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-12">
            <div className="text-center mb-10 md:mb-12">
              <h2
                id="spec-heading"
                className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-4"
              >
                Verschillende specialisaties
              </h2>
              <p className="text-base text-muted-foreground max-w-[440px] mx-auto">
                Vind de expert en de methode die het beste aansluit bij jouw
                wensen en behoeften.
              </p>
            </div>

            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4" role="list">
              {SPECIALISATIONS.map((spec) => (
                <li key={spec.title}>
                  <Link
                    href={spec.href}
                    className="group block rounded-xl overflow-hidden relative"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={spec.image}
                        alt={spec.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        width={300}
                        height={225}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent rounded-xl" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-semibold text-[15px]">{spec.title}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── CTA voor aanbieders ───────────────────────────────────────── */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-12 py-16 md:py-20">
          <div className="bg-foreground rounded-xl px-8 md:px-16 py-14 md:py-20 text-center">
            <h2 className="text-3xl md:text-[36px] font-bold text-background tracking-tight mb-5">
              Ben jij een cursusaanbieder?
            </h2>
            <p className="text-base md:text-[17px] text-muted max-w-[560px] mx-auto mb-10 leading-relaxed">
              Sluit je aan bij het grootste onafhankelijke platform voor
              zwangerschapscursussen in Nederland. Bereik maandelijks duizenden
              aanstaande ouders en beheer je boekingen eenvoudig op één plek.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-foreground text-sm font-semibold rounded-md hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Meld je aan als partner
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}