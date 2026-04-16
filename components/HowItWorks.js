'use client';

import { useState } from 'react';
import Link from 'next/link';

const STEPS = [
  {
    number: '01',
    title: 'Vertel ons wat je zoekt',
    description:
      'Vul je stad en het type cursus in. We tonen meteen het aanbod bij jou in de buurt — yoga, hypnobirthing, weekendcursus, alles is er.',
    detail: 'Geen account nodig',
    icon: 'lucide:search',
  },
  {
    number: '02',
    title: 'Vergelijk op jouw manier',
    description:
      'Lees echte ervaringen van andere ouders, vergelijk prijzen en bekijk wat er precies bij de cursus is inbegrepen. Rustig, zonder druk.',
    detail: 'Volledig gratis en onafhankelijk',
    icon: 'lucide:layers',
  },
  {
    number: '03',
    title: 'Boek direct bij de aanbieder',
    description:
      'Je gaat rechtstreeks naar de aanbieder — geen extra servicekosten, geen omwegen. Gewoon boeken en je richten op wat telt.',
    detail: 'Geen verborgen kosten',
    icon: 'lucide:calendar-check',
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section
      id="hoe-het-werkt"
      className="relative py-20 md:py-28 px-4 sm:px-8 md:px-12 overflow-hidden"
      aria-labelledby="how-it-works-heading"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="https://storage.googleapis.com/banani-generated-images/generated-images/55c4601e-7001-4d27-a8c4-a76438bd7eb5.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay — keeps text readable */}
        <div className="absolute inset-0 bg-background/90" />
      </div>
      <div className="relative z-10 max-w-[1060px] mx-auto">

        {/* ── Header ── */}
        <div className="max-w-[520px] mb-16 md:mb-20">
          <p className="text-[12px] font-semibold text-primary uppercase tracking-widest mb-4">
            Hoe het werkt
          </p>
          <h2
            id="how-it-works-heading"
            className="text-3xl md:text-[38px] font-bold text-foreground tracking-tight leading-[1.1] mb-5"
          >
            Van zoeken naar gevonden,
            in drie stappen
          </h2>
          <p className="text-base md:text-[17px] text-muted-foreground leading-relaxed">
            Geen stress, geen eindeloos zoeken. Lumi neemt je bij de hand.
          </p>
        </div>

        {/* ── Steps ── */}
        <ol
          className="flex flex-col md:grid md:grid-cols-3 gap-0 md:gap-8"
          role="list"
        >
          {STEPS.map((step, i) => {
            const isActive = activeStep === i;
            const isLast = i === STEPS.length - 1;

            return (
              <li
                key={step.number}
                className="relative"
                onMouseEnter={() => setActiveStep(i)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Mobile connector */}
                {!isLast && (
                  <div
                    className="md:hidden absolute left-[22px] top-[52px] bottom-0 w-px bg-black/[0.07]"
                    aria-hidden="true"
                  />
                )}

                <div
                  className={`relative flex md:flex-col gap-5 md:gap-0 p-5 md:p-7 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? 'bg-white shadow-[0_4px_24px_rgba(0,0,0,0.07)] -translate-y-0.5'
                      : 'bg-transparent'
                  }`}
                >
                  {/* Number + icon */}
                  <div className="shrink-0 md:mb-7 flex items-center justify-center w-11 h-11 rounded-xl bg-secondary group-hover:bg-primary/10 transition-colors">
                    <iconify-icon
                      icon={step.icon}
                      class={`text-xl transition-colors duration-300 ${isActive ? 'text-primary' : 'text-foreground/50'}`}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-3 md:mt-0">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-bold text-foreground/25 tracking-widest uppercase tabular-nums">
                        {step.number}
                      </span>
                      {/* Desktop connector line */}
                      {!isLast && (
                        <div
                          className="hidden md:block flex-1 h-px bg-black/[0.07] relative -mr-7 mt-px"
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    <h3 className="text-[17px] md:text-[18px] font-bold text-foreground leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-[14px] text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    <div className="flex items-center gap-1.5 text-[12px] font-medium text-foreground/40 mt-1">
                      <iconify-icon
                        icon="lucide:check-circle-2"
                        class="text-primary text-sm shrink-0"
                        aria-hidden="true"
                      />
                      {step.detail}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        {/* ── Bottom CTA ── */}
        <div className="mt-14 md:mt-16 flex flex-col sm:flex-row items-center justify-between gap-5 p-6 md:p-7 bg-secondary rounded-2xl">
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
              <iconify-icon icon="lucide:clock" class="text-base text-primary" aria-hidden="true" />
            </div>
            <div>
              <p className="text-[15px] font-semibold text-foreground">
                Gemiddeld 3 minuten
              </p>
              <p className="text-[13px] text-muted-foreground">
                om de juiste cursus te vinden · 4.8★ door 1.200+ ouders
              </p>
            </div>
          </div>
          <Link
            href="/cursussen"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 bg-primary text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 whitespace-nowrap"
          >
            Begin nu
            <iconify-icon icon="lucide:arrow-right" class="text-base" aria-hidden="true" />
          </Link>
        </div>

      </div>
    </section>
  );
}