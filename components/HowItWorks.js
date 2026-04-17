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
      {/* ── Background image ── */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="https://images.pexels.com/photos/7155353/pexels-photo-7155353.jpeg"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay: dark left for text readability, lighter right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-black/15" />
        {/* Subtle bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[1060px] mx-auto">

        {/* ── Header — glass card ── */}
        <div className="max-w-[520px] mb-16 md:mb-20">
          <div className="inline-block bg-white/15 backdrop-blur-md rounded-2xl px-6 py-5 border border-white/25 shadow-[0_8px_32px_rgba(0,0,0,0.10)]">
            <p className="text-[12px] font-bold text-white/70 uppercase tracking-widest mb-3">
              Hoe het werkt
            </p>
            <h2
              id="how-it-works-heading"
              className="text-3xl md:text-[36px] font-bold text-white tracking-tight leading-[1.1] mb-3"
            >
              Van zoeken naar gevonden,
              <br />in drie stappen
            </h2>
            <p className="text-base text-white/70 leading-relaxed">
              Geen stress, geen eindeloos zoeken. Lumi neemt je bij de hand.
            </p>
          </div>
        </div>

        {/* ── Steps ── */}
        <ol
          className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-6 md:items-stretch"
          role="list"
        >
          {STEPS.map((step, i) => {
            const isActive = activeStep === i;
            const isLast = i === STEPS.length - 1;

            return (
              <li
                key={step.number}
                className="relative flex"
                onMouseEnter={() => setActiveStep(i)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Mobile connector */}
                {!isLast && (
                  <div
                    className="md:hidden absolute left-[22px] top-[52px] bottom-0 w-px bg-white/20"
                    aria-hidden="true"
                  />
                )}

                <div
                  className={`relative flex md:flex-col gap-5 md:gap-0 p-5 md:p-7 rounded-2xl border transition-all duration-300 w-full ${
                    isActive
                      ? 'bg-white/75 backdrop-blur-lg border-white/50 shadow-[0_12px_40px_rgba(0,0,0,0.15)] -translate-y-1'
                      : 'bg-white/50 backdrop-blur-md border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.08)]'
                  }`}
                >
                  {/* Icon */}
                  <div className={`shrink-0 md:mb-6 flex items-center justify-center w-11 h-11 rounded-xl transition-colors duration-300 ${
                    isActive ? 'bg-primary/20' : 'bg-white/40'
                  }`}>
                    <iconify-icon
                      icon={step.icon}
                      class={`text-xl transition-colors duration-300 ${isActive ? 'text-primary' : 'text-foreground/60'}`}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-bold text-foreground/30 tracking-widest uppercase tabular-nums">
                        {step.number}
                      </span>
                      {!isLast && (
                        <div
                          className="hidden md:block flex-1 h-px bg-white/30 relative -mr-7 mt-px"
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    <h3 className="text-[17px] md:text-[18px] font-bold text-foreground leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-[14px] text-foreground/65 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="flex items-center gap-1.5 text-[12px] font-medium text-foreground/45 mt-1">
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
        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 p-6 md:p-7 bg-white/50 backdrop-blur-md rounded-2xl border border-white/35 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-white/70 backdrop-blur-sm flex items-center justify-center shrink-0 shadow-sm">
              <iconify-icon icon="lucide:clock" class="text-base text-primary" aria-hidden="true" />
            </div>
            <div>
              <p className="text-[15px] font-semibold text-foreground">
                Gemiddeld 3 minuten
              </p>
              <p className="text-[13px] text-foreground/60">
                om de juiste cursus te vinden · 4.8★ door 1.200+ ouders
              </p>
            </div>
          </div>
          <Link
            href="/cursussen"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 bg-primary text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 whitespace-nowrap shadow-[0_4px_16px_rgba(122,166,122,0.4)]"
          >
            Begin nu
            <iconify-icon icon="lucide:arrow-right" class="text-base" aria-hidden="true" />
          </Link>
        </div>

      </div>
    </section>
  );
}