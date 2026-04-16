'use client';
 
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/* ─── Data ───────────────────────────────────────────────────────────────── */

const FAQ_CATEGORIES = [
  {
    id: 'algemeen',
    label: 'Algemeen',
    icon: 'lucide:info',
    items: [
      {
        q: 'Wat is Lumi Cursussen?',
        a: 'Lumi is een onafhankelijk platform waarop je zwangerschapscursussen kunt vergelijken en boeken. We brengen gecertificeerde aanbieders samen op één plek, zodat jij zonder gedoe de cursus vindt die het beste bij jou past.',
      },
      {
        q: 'Is Lumi gratis te gebruiken?',
        a: 'Ja, Lumi is volledig gratis voor aanstaande ouders. Je betaalt alleen voor de cursus zelf, rechtstreeks bij de aanbieder. Wij rekenen geen extra servicekosten.',
      },
      {
        q: 'Zijn de aanbieders op Lumi betrouwbaar?',
        a: 'Ja. Alle aanbieders worden door ons gecontroleerd op certificeringen, ervaring en reviews voordat ze worden toegelaten. Wij werken uitsluitend samen met gecertificeerde professionals.',
      },
      {
        q: 'In welke steden zijn cursussen beschikbaar?',
        a: 'Je vindt cursussen in de meeste grote steden in Nederland, waaronder Amsterdam, Rotterdam, Utrecht, Den Haag, Groningen, Haarlem en Eindhoven. Daarnaast bieden veel aanbieders online cursussen aan die overal te volgen zijn.',
      },
      {
        q: 'Kan ik ook online cursussen volgen?',
        a: 'Absoluut. Op Lumi vind je een ruim aanbod aan online cursussen die je in je eigen tempo of live via video kunt volgen. Handig als je weinig tijd hebt of niet in een grote stad woont.',
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
        a: 'Zwangerschapsyoga richt zich op beweging en ontspanning. Hypnobirthing leert je mentale technieken om de bevalling kalm tegemoet te gaan. Een bevalcursus samen met partner behandelt de praktische voorbereiding voor jullie allebei. Online cursussen kun je flexibel volgen wanneer het jou uitkomt.',
      },
      {
        q: 'Wanneer kan ik beginnen met een cursus?',
        a: 'De meeste cursussen zijn geschikt vanaf de 16e tot 20e week van je zwangerschap. Weekendcursussen en privécursussen zijn ook later in de zwangerschap nog goed te volgen. Controleer bij de aanbieder wat de aanbevolen startdatum is.',
      },
      {
        q: 'Mag mijn partner meekomen?',
        a: "Dat hangt af van het type cursus. Cursussen met het label 'Samen met partner' zijn specifiek bedoeld voor koppels. Bij yoga- en mindfulnesscursussen is de partner doorgaans niet aanwezig, maar dit verschilt per aanbieder.",
      },
      {
        q: 'Hoe groot zijn de groepen?',
        a: 'De meeste fysieke cursussen werken met kleine groepen van 6 tot 10 deelnemers. Dit zorgt voor persoonlijke aandacht en een veilige sfeer. Bij privécursussen ben jij de enige deelnemer.',
      },
      {
        q: 'Zijn de cursussen ook geschikt voor een tweede zwangerschap?',
        a: 'Ja, zeker. Veel vrouwen volgen bij een tweede zwangerschap bewust een andere cursus om nieuwe technieken te leren of simpelweg om opnieuw stil te staan bij deze bijzondere periode.',
      },
      {
        q: 'Wat als ik een cursus moet missen door omstandigheden?',
        a: 'Dit verschilt per aanbieder. Bij de meeste cursussen kun je een gemiste les inhalen of krijg je toegang tot opnames. Bekijk de voorwaarden bij de specifieke aanbieder.',
      },
    ],
  },
  {
    id: 'boeken',
    label: 'Boeken & betalen',
    icon: 'lucide:credit-card',
    items: [
      {
        q: 'Hoe boek ik een cursus via Lumi?',
        a: "Via Lumi vergelijk je cursussen en klik je door naar de website van de aanbieder. De boeking en betaling verlopen rechtstreeks bij de aanbieder — wij zijn geen tussenpartij in het boekingsproces.",
      },
      {
        q: 'Worden zwangerschapscursussen vergoed door de zorgverzekering?',
        a: 'Sommige cursussen worden (deels) vergoed via de aanvullende verzekering. Dit verschilt per verzekering en per type cursus. Vraag dit na bij jouw zorgverzekeraar of bij de aanbieder.',
      },
      {
        q: 'Kan ik een cursus annuleren?',
        a: 'Annuleringsvoorwaarden zijn per aanbieder verschillend. De meeste aanbieders hanteren een kosteloos annuleringsbeleid tot 14 dagen voor de startdatum. Bekijk altijd de voorwaarden op de website van de aanbieder.',
      },
      {
        q: 'Welke betaalmethoden worden geaccepteerd?',
        a: 'Dit is afhankelijk van de aanbieder. De meeste aanbieders accepteren iDEAL, creditcard en soms ook bankoverschrijving. Dit vind je terug op de boekingspagina van de aanbieder.',
      },
      {
        q: 'Wat als een cursus vol is?',
        a: 'Als een cursus volgeboekt is, kun je jezelf op de wachtlijst zetten via de aanbieder. Veel aanbieders bieden ook alternatieve startdata aan. Op Lumi kun je vergelijkbare cursussen van andere aanbieders bekijken.',
      },
    ],
  },
  {
    id: 'aanbieders',
    label: 'Voor aanbieders',
    icon: 'lucide:building-2',
    items: [
      {
        q: 'Hoe kan ik mijn cursus aanmelden bij Lumi?',
        a: 'Via onze contactpagina kun je een aanvraag indienen om je cursus aan te melden. We beoordelen elke aanvraag op certificeringen, kwaliteit en relevantie voor onze doelgroep.',
      },
      {
        q: 'Wat zijn de voorwaarden om op Lumi te staan?',
        a: 'Aanbieders moeten beschikken over relevante certificeringen, aantoonbare ervaring en een actief aanbod. We controleren dit bij aanmelding en monitoren reviews na plaatsing.',
      },
      {
        q: 'Hoeveel kost het om op Lumi te staan?',
        a: 'Neem contact met ons op voor actuele tarieven en samenwerkingsmogelijkheden. We bieden verschillende opties afhankelijk van het aantal cursussen en de gewenste zichtbaarheid.',
      },
      {
        q: 'Hoe werkt het reviewsysteem?',
        a: 'Deelnemers die een cursus hebben gevolgd kunnen een review achterlaten op het profiel van de aanbieder. Reviews worden gemodereerd om de betrouwbaarheid te waarborgen.',
      },
    ],
  },
];

/* ─── Accordion item ─────────────────────────────────────────────────────── */

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
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}
      >
        <p className="text-[14px] text-muted-foreground leading-relaxed">
          {answer}
        </p>
      </div>
    </li>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

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

      <main className="flex-1 pt-[65px]">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="max-w-[680px] mx-auto px-4 sm:px-8 text-center pt-16 md:pt-20 pb-12 md:pb-16">
          <h1 className="text-[36px] sm:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mb-5">
            Veelgestelde vragen
          </h1>
          <p className="text-base md:text-[17px] text-muted-foreground leading-relaxed max-w-[480px] mx-auto mb-8">
            Alles wat je wilt weten over het vinden, vergelijken en boeken van
            een zwangerschapscursus via Lumi.
          </p>

          {/* Search bar — UI only */}
          <div className="relative max-w-[440px] mx-auto">
            <iconify-icon
              icon="lucide:search"
              class="absolute left-4 top-1/2 -translate-y-1/2 text-base text-muted-foreground pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="text"
              placeholder="Zoek een vraag..."
              aria-label="Zoek in veelgestelde vragen"
              className="w-full h-12 pl-11 pr-4 border border-black/[0.08] rounded-xl bg-white text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-black/20 transition-colors"
            />
          </div>
        </section>

        {/* ── FAQ content ───────────────────────────────────────────────── */}
        <section className="max-w-[1000px] mx-auto px-4 sm:px-8 md:px-12 pb-20 md:pb-28">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">

            {/* ── Category tabs (sidebar on desktop, scrollable pills on mobile) ── */}
            <nav
              aria-label="FAQ categorieën"
              className="w-full md:w-[200px] shrink-0"
            >
              {/* Mobile: horizontal scroll */}
              <ul className="flex md:hidden gap-2 overflow-x-auto pb-2 scrollbar-hide" role="list">
                {FAQ_CATEGORIES.map((cat) => (
                  <li key={cat.id} className="shrink-0">
                    <button
                      onClick={() => handleCategoryChange(cat.id)}
                      aria-current={activeCategory === cat.id ? 'true' : undefined}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                        activeCategory === cat.id
                          ? 'bg-foreground text-background'
                          : 'bg-white border border-black/[0.08] text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <iconify-icon icon={cat.icon} class="text-sm" aria-hidden="true" />
                      {cat.label}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Desktop: vertical list */}
              <ul className="hidden md:flex flex-col gap-1" role="list">
                {FAQ_CATEGORIES.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => handleCategoryChange(cat.id)}
                      aria-current={activeCategory === cat.id ? 'true' : undefined}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-left transition-colors ${
                        activeCategory === cat.id
                          ? 'bg-foreground text-background'
                          : 'text-muted-foreground hover:bg-black/[0.04] hover:text-foreground'
                      }`}
                    >
                      <iconify-icon icon={cat.icon} class="text-base shrink-0" aria-hidden="true" />
                      {cat.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* ── Accordion ── */}
            <div className="flex-1 min-w-0">
              {currentCategory && (
                <div className="bg-white border border-black/[0.07] rounded-2xl px-6 md:px-8">
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

        {/* ── CTA ───────────────────────────────────────────────────────── */}
        <section className="max-w-[1000px] mx-auto px-4 sm:px-8 md:px-12 pb-20 md:pb-28">
          <div className="bg-secondary rounded-2xl px-8 md:px-12 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
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
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 whitespace-nowrap"
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