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
        {/* Subtle warm overlay — image stays visible */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/50 to-background/30" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[1060px] mx-auto">

        {/* ── Header ── */}
        <div className="max-w-[520px] mb-14 md:mb-18">
          <p className="text-[12px] font-semibold text-primary uppercase tracking-widest mb-3">
            Hoe het werkt
          </p>
          <h2
            id="how-it-works-heading"
            className="text-3xl md:text-[36px] font-bold text-foreground tracking-tight leading-[1.1] mb-4"
          >
            Van zoeken naar gevonden,
            <br />in drie stappen
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Geen stress, geen eindeloos zoeken. Lumi neemt je bij de hand.
          </p>
        </div>

        {/* ── Steps ── */}
        <ol
          className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-5 md:items-stretch"
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
                {/* Mobile connector — consistent with vertical flow */}
                <div
                  className="md:hidden absolute left-[22px] top-[52px] bottom-0 w-px bg-black/[0.07]"
                  aria-hidden="true"
                />

                {/* Card — CourseCard-consistent styling + glass */}
                <div
                  className={`relative flex md:flex-col gap-5 md:gap-0 p-5 md:p-6 rounded-2xl border w-full transition-all duration-300 ${
                    isActive
                      ? 'bg-white/90 backdrop-blur-md border-black/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.10)] -translate-y-1'
                      : 'bg-white/70 backdrop-blur-sm border-black/[0.07] shadow-[0_2px_12px_rgba(0,0,0,0.04)]'
                  }`}
                >
                  {/* Icon block */}
                  <div className={`shrink-0 md:mb-5 flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-300 ${
                    isActive ? 'bg-primary/10' : 'bg-secondary'
                  }`}>
                    <iconify-icon
                      icon={step.icon}
                      class={`text-lg transition-colors duration-300 ${isActive ? 'text-primary' : 'text-foreground/50'}`}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-2.5">

                    {/* Step number + desktop connector */}
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-bold text-muted-foreground/60 tracking-widest uppercase tabular-nums">
                        {step.number}
                      </span>
                      {!isLast && (
                        <div
                          className="hidden md:block flex-1 h-px bg-black/[0.06] -mr-6"
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    {/* Title — CourseCard h3 style */}
                    <h3 className="text-[15px] md:text-[16px] font-bold text-foreground leading-snug">
                      {step.title}
                    </h3>

                    {/* Description — CourseCard description style */}
                    <p className="text-[13px] text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    {/* Detail — CourseCard microcopy style */}
                    <div className="flex items-center gap-1.5 text-[12px] font-medium text-muted-foreground mt-0.5 pt-3 border-t border-black/[0.06]">
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

        {/* ── Bottom CTA — CourseCard footer style ── */}
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-between gap-5 p-5 md:p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-black/[0.07] shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
              <iconify-icon icon="lucide:clock" class="text-base text-primary" aria-hidden="true" />
            </div>
            <div>
              <p className="text-[14px] font-bold text-foreground">
                Gemiddeld 3 minuten
              </p>
              <p className="text-[12px] text-muted-foreground mt-0.5">
                om de juiste cursus te vinden · 4.8★ door 1.200+ ouders
              </p>
            </div>
          </div>
          <Link
            href="/cursussen"
            className="shrink-0 flex items-center gap-1.5 px-4 py-2.5 bg-primary text-white rounded-xl text-[13px] font-semibold hover:opacity-90 active:scale-[0.97] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 whitespace-nowrap"
          >
            Begin nu
            <iconify-icon icon="lucide:arrow-right" class="text-sm" aria-hidden="true" />
          </Link>
        </div>

      </div>
    </section>
  );
}