'use client';

import { useState } from 'react';

const FAQS = [
  {
    id: 'faq-1',
    question: 'Zijn de cursussen op Lumi onafhankelijk?',
    answer:
      'Ja, Lumi is een volledig onafhankelijk platform. Wij hebben geen commerciële relatie met de aanbieders die hun cursus via ons aanbieden. Onze beoordelingen zijn afkomstig van echte ouders.',
  },
  {
    id: 'faq-2',
    question: 'Hoe weet ik of een cursus kwalitatief goed is?',
    answer:
      'Elke cursus op Lumi wordt beoordeeld door ouders die de cursus daadwerkelijk hebben gevolgd. We tonen alleen cursussen die zijn beoordeeld door gecertificeerde professionals.',
  },
  {
    id: 'faq-3',
    question: 'Kan ik mijn boeking annuleren of wijzigen?',
    answer:
      'Je boekt en betaalt direct bij de aanbieder. De annuleringsvoorwaarden zijn daardoor afhankelijk van de aanbieder zelf. Die vind je altijd terug op de cursuspagina.',
  },
  {
    id: 'faq-4',
    question: 'Betaal ik extra servicekosten als ik via GeboorteHub boek?',
    answer:
      'Nee. GeboorteHub rekent geen enkele servicekosteb, onze dienstverlening is gratis. Je betaalt precies het bedrag dat op de cursuspagina staat vermeld, rechtstreeks aan de aanbieder.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      className="py-12 md:py-16 px-4 sm:px-8 md:px-12 pb-16 md:pb-24 max-w-[800px] mx-auto"
      aria-labelledby="faq-heading"
    >
      <h2
        id="faq-heading"
        className="text-2xl md:text-[28px] font-semibold text-center mb-10 md:mb-12 text-foreground"
      >
        Veelgestelde vragen
      </h2>

      <dl className="flex flex-col gap-3 md:gap-4">
        {FAQS.map(({ id, question, answer }) => {
          const isOpen = openId === id;
          return (
            <div
              key={id}
              className="border border-black/[0.08] rounded-md bg-white overflow-hidden"
            >
              <dt>
                <button
                  id={`${id}-btn`}
                  onClick={() => toggle(id)}
                  aria-expanded={isOpen}
                  aria-controls={`${id}-panel`}
                  className="w-full flex justify-between items-center px-5 md:px-6 py-4 md:py-5 text-left hover:bg-muted/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/50"
                >
                  <span className="text-sm md:text-base font-medium text-foreground pr-4">
                    {question}
                  </span>
                  <iconify-icon
                    icon={isOpen ? 'lucide:minus' : 'lucide:plus'}
                    class="text-lg md:text-xl text-muted-foreground shrink-0 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </button>
              </dt>
              {isOpen && (
                <dd
                  id={`${id}-panel`}
                  role="region"
                  aria-labelledby={`${id}-btn`}
                  className="px-5 md:px-6 pb-4 md:pb-5 text-sm md:text-[15px] text-muted-foreground leading-relaxed border-t border-black/[0.06] pt-3"
                >
                  {answer}
                </dd>
              )}
            </div>
          );
        })}
      </dl>
    </section>
  );
}