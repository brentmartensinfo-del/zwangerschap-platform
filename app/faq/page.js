'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FAQ_CATEGORIES = [
  {
    id: 'algemeen',
    label: 'Algemeen',
    icon: 'lucide:info',
    items: [
      {
        q: 'Wat is Birthly?',
        a: 'Birthly is een onafhankelijk vergelijkingsplatform voor zwangerschapscursussen in Nederland. Wij brengen gecertificeerde aanbieders samen op één plek, zodat jij zonder stress de cursus vindt die het beste bij jou en je situatie past.',
      },
      {
        q: 'Is Birthly gratis te gebruiken?',
        a: 'Ja, Birthly is volledig gratis voor aanstaande ouders. Je betaalt alleen voor de cursus zelf, rechtstreeks bij de aanbieder. Wij rekenen geen servicekosten of bemiddelingskosten.',
      },
      {
        q: 'Kan ik cursussen boeken via Birthly?',
        a: 'Nee, je boekt niet via Birthly. Via ons platform vergelijk je cursussen en klik je door naar de website van de aanbieder. De boeking en betaling verlopen volledig rechtstreeks tussen jou en de aanbieder — zonder tussenpersoon.',
      },
      {
        q: 'Zijn de aanbieders op Birthly betrouwbaar?',
        a: 'Ja. Alle aanbieders worden door ons persoonlijk gecontroleerd op certificeringen, ervaring en beoordelingen voordat ze op het platform verschijnen. Wij werken uitsluitend samen met gecertificeerde professionals.',
      },
      {
        q: 'In welke steden zijn cursussen beschikbaar?',
        a: 'Je vindt cursussen in de meeste grote steden in Nederland, waaronder Amsterdam, Rotterdam, Utrecht, Den Haag, Groningen, Haarlem en Eindhoven. Veel aanbieders bieden ook online cursussen aan die je overal kunt volgen.',
      },
    ],
  },
  {
    id: 'cursussen',
    label: 'Over cursussen',
    icon: 'lucide:graduation-cap',
    items: [
      {
        q: 'Wat is het verschil tussen de cursustypen?',
        a: 'Zwangerschapsyoga richt zich op beweging en ontspanning. Hypnobirthing leert je mentale technieken om de bevalling kalm tegemoet te gaan. Een bevalcursus samen met partner bereidt jullie allebei voor op de praktische kant. Online cursussen volg je flexibel wanneer het jou uitkomt.',
      },
      {
        q: 'Wanneer kan ik het beste beginnen met een cursus?',
        a: 'De meeste cursussen zijn geschikt vanaf de 16e tot 20e week van je zwangerschap. Weekendcursussen en privécursussen zijn ook later in de zwangerschap goed te volgen. Controleer bij de aanbieder wat de aanbevolen startdatum is.',
      },
      {
        q: 'Mag mijn partner meekomen?',
        a: "Dat hangt af van het type cursus. Cursussen met het label 'Samen met partner' zijn speciaal bedoeld voor koppels. Bij yoga- en mindfulnesscursussen is de partner doorgaans niet aanwezig, maar dit verschilt per aanbieder.",
      },
      {
        q: 'Hoe groot zijn de cursusgroepen?',
        a: 'De meeste fysieke cursussen werken met kleine groepen van 6 tot 10 deelnemers voor persoonlijke aandacht. Bij privécursussen ben jij de enige deelnemer.',
      },
      {
        q: 'Zijn de cursussen ook geschikt voor een tweede zwangerschap?',
        a: 'Ja, zeker. Veel vrouwen volgen bij een tweede zwangerschap bewust een andere cursus om nieuwe technieken te leren, of om opnieuw even stil te staan bij deze bijzondere periode.',
      },
    ],
  },
  {
    id: 'doorsturen',
    label: 'Doorsturen & contact',
    icon: 'lucide:arrow-up-right',
    items: [
      {
        q: 'Hoe werkt het doorsturen naar een aanbieder?',
        a: 'Op de cursuspagina of het aanbiedersprofiel vind je een knop "Ga naar website" of "Boek deze cursus". Die knop stuurt je rechtstreeks door naar de website van de aanbieder, waar je alle informatie vindt en de boeking kunt afronden.',
      },
      {
        q: 'Kan ik direct contact opnemen met een aanbieder via Birthly?',
        a: 'Birthly is een vergelijkingsplatform — wij sturen je door naar de aanbieder. Op het profiel van elke aanbieder vind je de contactgegevens zoals website, e-mail en telefoonnummer om rechtstreeks contact op te nemen.',
      },
      {
        q: 'Worden zwangerschapscursussen vergoed door de zorgverzekering?',
        a: 'Sommige cursussen worden (deels) vergoed via de aanvullende verzekering. Dit verschilt per verzekeraar en per cursustype. Vraag dit na bij jouw zorgverzekeraar of bij de aanbieder zelf.',
      },
      {
        q: 'Wat als een cursus vol is?',
        a: 'Als een cursus volgeboekt is, kun je via de aanbieder op de wachtlijst terecht. Veel aanbieders hebben ook alternatieve startdata. Op Birthly kun je eenvoudig vergelijkbare cursussen van andere aanbieders vinden.',
      },
      {
        q: 'Kan ik een cursus annuleren?',
        a: 'Annuleringsvoorwaarden worden bepaald door de aanbieder, niet door Birthly. Wij zijn geen partij in de boeking. Bekijk altijd de voorwaarden op de website van de aanbieder voordat je boekt.',
      },
    ],
  },
  {
    id: 'aanbieders',
    label: 'Voor aanbieders',
    icon: 'lucide:building-2',
    items: [
      {
        q: 'Hoe kan ik mijn cursus aanmelden bij Birthly?',
        a: 'Via onze contactpagina kun je een aanvraag indienen om je cursus aan te melden. We beoordelen elke aanvraag op certificeringen, kwaliteit en relevantie voor onze doelgroep.',
      },
      {
        q: 'Wat zijn de voorwaarden om op Birthly te staan?',
        a: 'Aanbieders moeten beschikken over relevante certificeringen, aantoonbare ervaring en een actief aanbod. We controleren dit bij aanmelding en monitoren beoordelingen na plaatsing.',
      },
      {
        q: 'Hoeveel kost het om op Birthly te staan?',
        a: 'Neem contact met ons op voor actuele tarieven en samenwerkingsmogelijkheden. We bieden verschillende opties afhankelijk van het aantal cursussen en de gewenste zichtbaarheid.',
      },
      {
        q: 'Hoe werkt het reviewsysteem?',
        a: 'Deelnemers die een cursus hebben gevolgd kunnen een beoordeling achterlaten op het profiel van de aanbieder. Beoordelingen worden gemodereerd om betrouwbaarheid te waarborgen.',
      },
    ],
  },
];

function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <li className="border-b border-black/[0.06] last:border-0">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className={`text-[15px] font-medium leading-snug transition-colors ${isOpen ? 'text-foreground' : 'text-foreground/80 group-hover:text-foreground'}`}>
          {question}
        </span>
        <iconify-icon
          icon="lucide:chevron-down"
          class={`text-lg text-muted-foreground shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-[14px] text-muted-foreground leading-relaxed">{answer}</p>
      </div>
    </li>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('algemeen');
  const [openItem, setOpenItem] = useState(null);

  const currentCategory = FAQ_CATEGORIES.find((c) => c.id === activeCategory);

  function handleToggle(index) {
    setOpenItem(openItem === index ? null : index);
  }

  function handleCategoryChange(id) {
    setActiveCategory(id);
    setOpenItem(null);
  }

  return (
    <>
      <Navbar />

      <main className="flex-1 relative overflow-hidden">

        {/* ── Background blobs ── */}
        <div aria-hidden="true" className="pointer-events-none select-none">
          <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-primary opacity-20 blur-[120px]" />
          <div className="absolute -top-10 right-0 w-[360px] h-[360px] rounded-full bg-secondary opacity-60 blur-[100px]" />
          <div className="absolute top-[40%] -left-24 w-[300px] h-[300px] rounded-full bg-secondary opacity-50 blur-[90px]" />
          <div className="absolute bottom-0 -right-24 w-[500px] h-[500px] rounded-full bg-primary opacity-10 blur-[140px]" />
        </div>

        {/* ── Hero ── */}
        <section className="relative z-10 max-w-[680px] mx-auto px-4 sm:px-8 text-center pt-12 md:pt-16 pb-10 md:pb-14">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-secondary opacity-70 blur-[60px] pointer-events-none rounded-full" aria-hidden="true" />
          <h1 className="relative text-[36px] sm:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mb-4">
            Veelgestelde vragen
          </h1>
          <p className="text-base md:text-[17px] text-muted-foreground leading-relaxed max-w-[480px] mx-auto mb-8">
            Alles wat je wilt weten over Birthly — hoe het werkt, wat we doen
            en hoe je de juiste cursus vindt.
          </p>
          <div className="relative max-w-[440px] mx-auto">
            <iconify-icon icon="lucide:search" class="absolute left-4 top-1/2 -translate-y-1/2 text-base text-muted-foreground pointer-events-none" aria-hidden="true" />
            <input
              type="text"
              placeholder="Zoek een vraag..."
              aria-label="Zoek in veelgestelde vragen"
              className="w-full h-12 pl-11 pr-4 border border-black/[0.08] rounded-xl bg-white/80 backdrop-blur-sm text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-black/20 transition-colors shadow-sm"
            />
          </div>
        </section>

        {/* ── FAQ content ── */}
        <section className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-8 md:px-12 pb-20 md:pb-28">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">

            {/* Category nav */}
            <nav aria-label="FAQ categorieën" className="w-full md:w-[200px] shrink-0">
              <ul className="flex md:hidden gap-2 overflow-x-auto pb-2" role="list">
                {FAQ_CATEGORIES.map((cat) => (
                  <li key={cat.id} className="shrink-0">
                    <button
                      onClick={() => handleCategoryChange(cat.id)}
                      aria-current={activeCategory === cat.id ? 'true' : undefined}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                        activeCategory === cat.id ? 'bg-foreground text-background' : 'bg-white/80 backdrop-blur-sm border border-black/[0.08] text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <iconify-icon icon={cat.icon} class="text-sm" aria-hidden="true" />
                      {cat.label}
                    </button>
                  </li>
                ))}
              </ul>
              <ul className="hidden md:flex flex-col gap-1" role="list">
                {FAQ_CATEGORIES.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => handleCategoryChange(cat.id)}
                      aria-current={activeCategory === cat.id ? 'true' : undefined}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-left transition-colors ${
                        activeCategory === cat.id ? 'bg-foreground text-background' : 'text-muted-foreground hover:bg-black/[0.04] hover:text-foreground'
                      }`}
                    >
                      <iconify-icon icon={cat.icon} class="text-base shrink-0" aria-hidden="true" />
                      {cat.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Accordion */}
            <div className="flex-1 min-w-0">
              {currentCategory && (
                <div className="bg-white/80 backdrop-blur-sm border border-black/[0.05] rounded-2xl px-6 md:px-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                  <ul role="list">
                    {currentCategory.items.map((item, i) => (
                      <AccordionItem
                        key={i}
                        question={item.q}
                        answer={item.a}
                        isOpen={openItem === i}
                        onToggle={() => handleToggle(i)}
                      />
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-8 md:px-12 pb-20 md:pb-28">
          <div className="bg-secondary/80 backdrop-blur-sm rounded-2xl px-8 md:px-12 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6 border border-black/[0.04]">
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                Staat je vraag er niet tussen?
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Ons team helpt je graag verder. We reageren binnen één werkdag.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Neem contact op
              <iconify-icon icon="lucide:arrow-right" class="text-base" aria-hidden="true" />
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}