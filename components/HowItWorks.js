'use client';

import { useState } from 'react';
import Link from 'next/link';

const STEPS = [
  {
    number: '01',
    emoji: '🔍',
    title: 'Vertel ons wat je zoekt',
    subtitle: 'In minder dan 1 minuut',
    description:
      'Vul je stad en het type cursus in. Yoga, hypnobirthing, weekendcursus — jij bepaalt. We tonen meteen het aanbod bij jou in de buurt.',
    microcopy: 'Geen account nodig',
    color: 'from-[#eaf6ee] to-[#f6ede8]',
    accent: 'bg-primary/10 text-primary',
  },
  {
    number: '02',
    emoji: '💛',
    title: 'Vergelijk op jouw manier',
    subtitle: 'Rustig en zonder druk',
    description:
      'Lees eerlijke ervaringen van andere ouders, vergelijk prijzen en bekijk wat er precies bij de cursus is inbegrepen. Neem de tijd die je nodig hebt.',
    microcopy: 'Volledig gratis en onafhankelijk',
    color: 'from-[#fff8e6] to-[#eaf6ee]',
    accent: 'bg-amber-100 text-amber-700',
  },
  {
    number: '03',
    emoji: '🌸',
    title: 'Boek direct bij de aanbieder',
    subtitle: 'Zonder tussenpersoon',
    description:
      'Heb je jouw cursus gevonden? Je gaat direct naar de aanbieder — geen extra servicekosten, geen omwegen. Gewoon boeken en genieten.',
    microcopy: 'Geen verborgen kosten',
    color: 'from-[#f6ede8] to-[#eaf6ee]',
    accent: 'bg-rose-100 text-rose-600',
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section
      id="hoe-het-werkt"
      className="py-20 md:py-28 px-4 sm:px-8 md:px-12"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-[13px] font-semibold text-primary uppercase tracking-widest mb-4">
            Zo simpel werkt het
          </span>
          <h2
            id="how-it-works-heading"
            className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-5"
          >
            Van zoeken naar gevonden
            <br className="hidden sm:block" />
            <span className="text-primary"> in drie stappen</span>
          </h2>
          <p className="text-base md:text-[17px] text-muted-foreground max-w-[520px] mx-auto leading-relaxed">
            Geen stress, geen eindeloos zoeken. Lumi neemt je bij de hand zodat
            jij je kunt focussen op wat echt telt.
          </p>
        </div>

        {/* Steps — horizontal journey on desktop, stacked on mobile */}
        <ol className="relative flex flex-col md:flex-row gap-6 md:gap-0" role="list">

          {STEPS.map((step, i) => {
            const isActive = activeStep === i;
            const isLast = i === STEPS.length - 1;

            return (
              <li
                key={step.number}
                className="relative flex-1"
                onMouseEnter={() => setActiveStep(i)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Connector line between steps (desktop only) */}
                {!isLast && (
                  <div
                    className="hidden md:block absolute top-[52px] left-[calc(50%+80px)] right-0 h-px z-0"
                    aria-hidden="true"
                  >
                    <div className="relative h-full">
                      {/* Base line */}
                      <div className="absolute inset-0 border-t-2 border-dashed border-black/10" />
                      {/* Animated fill */}
                      <div
                        className={`absolute inset-0 border-t-2 border-primary transition-all duration-500 ${
                          activeStep !== null && activeStep > i
                            ? 'opacity-100'
                            : 'opacity-0'
                        }`}
                      />
                      {/* Arrow */}
                      <iconify-icon
                        icon="lucide:arrow-right"
                        class="absolute -right-3 -top-[11px] text-xl text-black/15"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                )}

                {/* Step card */}
                <div
                  className={`relative z-10 mx-2 md:mx-3 rounded-2xl p-6 md:p-8 border transition-all duration-300 cursor-default
                    bg-gradient-to-br ${step.color}
                    ${isActive
                      ? 'border-primary/30 shadow-[0_12px_40px_rgba(122,166,122,0.15)] -translate-y-1'
                      : 'border-black/[0.06] shadow-[0_4px_16px_rgba(0,0,0,0.04)]'
                    }`}
                >
                  {/* Step number + emoji */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl" role="img" aria-label={step.title}>
                        {step.emoji}
                      </span>
                      <span
                        className="text-[11px] font-bold tracking-widest text-foreground/30 uppercase"
                        aria-hidden="true"
                      >
                        Stap {step.number}
                      </span>
                    </div>
                    {/* Active indicator */}
                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isActive ? 'bg-primary scale-125' : 'bg-foreground/15'
                      }`}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Subtitle pill */}
                  <span
                    className={`inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full mb-4 ${step.accent}`}
                  >
                    {step.subtitle}
                  </span>

                  {/* Title */}
                  <h3 className="text-[18px] md:text-xl font-bold text-foreground mb-3 leading-snug">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] md:text-[15px] text-muted-foreground leading-relaxed mb-5">
                    {step.description}
                  </p>

                  {/* Microcopy */}
                  <div className="flex items-center gap-2 text-[12px] font-medium text-foreground/50">
                    <iconify-icon
                      icon="lucide:check-circle-2"
                      class="text-primary text-base shrink-0"
                      aria-hidden="true"
                    />
                    {step.microcopy}
                  </div>
                </div>

                {/* Mobile connector */}
                {!isLast && (
                  <div
                    className="md:hidden flex justify-center py-2"
                    aria-hidden="true"
                  >
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-px h-4 bg-black/10" />
                      <iconify-icon icon="lucide:chevron-down" class="text-base text-black/20" />
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ol>

        {/* Bottom CTA strip */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <iconify-icon icon="lucide:clock" class="text-base text-primary" aria-hidden="true" />
            Gemiddeld 3 minuten om de juiste cursus te vinden
          </div>
          <div className="hidden sm:block w-px h-4 bg-black/10" aria-hidden="true" />
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <iconify-icon icon="lucide:star" class="text-base text-primary" aria-hidden="true" />
            4.8 gemiddeld — door 1.200+ ouders beoordeeld
          </div>
          <div className="hidden sm:block w-px h-4 bg-black/10" aria-hidden="true" />
          <Link
            href="/cursussen"
            className="text-sm font-semibold text-primary hover:opacity-75 transition-opacity underline underline-offset-2"
          >
            Begin nu →
          </Link>
        </div>
      </div>
    </section>
  );
}