'use client';

import { useState } from 'react';
import Link from 'next/link';

/* ─── Stap definities ────────────────────────────────────────────────────── */

const STEPS = [
  {
    id: 'interest',
    question: 'Wat spreekt je het meest aan?',
    sub: 'Kies wat het beste bij jou past op dit moment.',
    options: [
      { id: 'relax',       label: 'Ontspanning & rust',              icon: 'lucide:heart',           hint: 'Meest gekozen' },
      { id: 'active',      label: 'Actief bewegen',                  icon: 'lucide:activity',        hint: null },
      { id: 'prep',        label: 'Voorbereiding op bevalling',      icon: 'lucide:baby',            hint: 'Populair bij eerste zwangerschap' },
      { id: 'partner',     label: 'Samen met partner',               icon: 'lucide:users',           hint: null },
      { id: 'unsure',      label: 'Weet ik nog niet',                icon: 'lucide:help-circle',     hint: null },
    ],
  },
  {
    id: 'situation',
    question: 'Wat is jouw situatie?',
    sub: 'Zodat we de beste match voor jou kunnen vinden.',
    options: [
      { id: 'first',      label: 'Eerste zwangerschap',             icon: 'lucide:sparkles',        hint: null },
      { id: 'again',      label: 'Al eerder zwanger geweest',       icon: 'lucide:refresh-ccw',     hint: null },
      { id: 'specific',   label: 'Specifieke situatie',             icon: 'lucide:shield-check',    hint: 'Bijv. medisch of extra spannend' },
      { id: 'explore',    label: 'Gewoon oriënteren',               icon: 'lucide:compass',         hint: null },
    ],
  },
  {
    id: 'format',
    question: 'Hoe wil je de cursus volgen?',
    sub: 'Kies de manier die het beste bij jouw leven past.',
    options: [
      { id: 'group',      label: 'In een groep',                    icon: 'lucide:users-round',     hint: 'Gezellig en inspirerend' },
      { id: 'private',    label: 'Privé / 1-op-1',                  icon: 'lucide:user',            hint: 'Helemaal op maat' },
      { id: 'online',     label: 'Online',                          icon: 'lucide:monitor',         hint: 'Op jouw moment en tempo' },
      { id: 'noformat',   label: 'Geen voorkeur',                   icon: 'lucide:circle-dashed',   hint: null },
    ],
  },
  {
    id: 'budget',
    question: 'Wat is je budget?',
    sub: 'We tonen cursussen die daarbinnen passen.',
    options: [
      { id: 'low',        label: 'Tot €50',                         icon: 'lucide:coins',           hint: null },
      { id: 'mid',        label: '€50 – €150',                      icon: 'lucide:banknote',        hint: 'Meest aanbod' },
      { id: 'high',       label: '€150+',                           icon: 'lucide:gem',             hint: 'Premium & privé' },
      { id: 'any',        label: 'Maakt niet uit',                  icon: 'lucide:infinity',        hint: null },
    ],
  },
  {
    id: 'location',
    question: 'Waar zoek je?',
    sub: 'We zoeken het aanbod bij jou in de buurt.',
    options: [
      { id: 'Amsterdam',  label: 'Amsterdam',   icon: 'lucide:map-pin', hint: null },
      { id: 'Rotterdam',  label: 'Rotterdam',   icon: 'lucide:map-pin', hint: null },
      { id: 'Utrecht',    label: 'Utrecht',      icon: 'lucide:map-pin', hint: null },
      { id: 'Den Haag',   label: 'Den Haag',    icon: 'lucide:map-pin', hint: null },
      { id: 'Groningen',  label: 'Groningen',   icon: 'lucide:map-pin', hint: null },
      { id: 'Eindhoven',  label: 'Eindhoven',   icon: 'lucide:map-pin', hint: null },
      { id: 'online',     label: 'Maakt niet uit / Online', icon: 'lucide:globe', hint: 'Overal te volgen' },
    ],
  },
];

/* ─── Aanbevelingslogica ─────────────────────────────────────────────────── */

function getRecommendation(answers) {
  const { interest, format, budget } = answers;

  const map = {
    relax: [
      { type: 'Zwangerschapsyoga',  reason: 'Perfect voor ontspanning en bewuste verbinding met je baby.' },
      { type: 'Hypnobirthing',       reason: 'Leert je mentale technieken om rustig en krachtig te bevallen.' },
    ],
    active: [
      { type: 'Zwangerschapsgym',   reason: 'Blijf fit en sterk gedurende je zwangerschap.' },
      { type: 'Zwangerschapsyoga',   reason: 'Combineer beweging met ontspanning op jouw eigen tempo.' },
    ],
    prep: [
      { type: 'Complete bevallingscursus', reason: 'Alles wat je moet weten voor een goede voorbereiding op de bevalling.' },
      { type: 'Hypnobirthing',              reason: 'Geeft je vertrouwen en concrete tools voor de bevalling.' },
    ],
    partner: [
      { type: 'Complete bevallingscursus', reason: 'Speciaal voor koppels die samen willen voorbereiden.' },
      { type: 'Hypnobirthing',              reason: 'Samen leren ontspannen en de bevalling tegemoet gaan.' },
    ],
    unsure: [
      { type: 'Zwangerschapsyoga',         reason: 'Een zachte start — goed voor bijna elke situatie.' },
      { type: 'Complete bevallingscursus', reason: 'Brede voorbereiding die alle belangrijke onderwerpen dekt.' },
    ],
  };

  let results = map[interest] || map['unsure'];

  // Online format → voorkeur voor online cursussen
  if (format === 'online') {
    results = [
      { type: 'Online cursussen', reason: 'Volledig flexibel te volgen, waar en wanneer jij wilt.' },
      ...results,
    ].slice(0, 2);
  }

  return results.slice(0, 2);
}

function buildUrl(answers) {
  const params = new URLSearchParams();
  const recs = getRecommendation(answers);
  if (recs[0]) params.set('type', recs[0].type);
  if (answers.location && answers.location !== 'online') params.set('city', answers.location);
  if (answers.budget === 'low')  params.set('price', 'low');
  if (answers.budget === 'mid')  params.set('price', 'mid');
  if (answers.budget === 'high') params.set('price', 'high');
  return `/cursussen?${params.toString()}`;
}

/* ─── Hoofd component ────────────────────────────────────────────────────── */

export default function CourseFinder() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers]         = useState({});
  const [animating, setAnimating]     = useState(false);
  const [done, setDone]               = useState(false);

  const step = STEPS[currentStep];
  const progress = ((currentStep) / STEPS.length) * 100;

  function handleSelect(optionId) {
    if (animating) return;

    const newAnswers = { ...answers, [step.id]: optionId };
    setAnswers(newAnswers);
    setAnimating(true);

    setTimeout(() => {
      if (currentStep < STEPS.length - 1) {
        setCurrentStep((s) => s + 1);
      } else {
        setDone(true);
      }
      setAnimating(false);
    }, 280);
  }

  function handleBack() {
    if (currentStep === 0) return;
    setCurrentStep((s) => s - 1);
    setDone(false);
  }

  function handleRestart() {
    setCurrentStep(0);
    setAnswers({});
    setDone(false);
  }

  const recommendations = done ? getRecommendation(answers) : [];
  const url = done ? buildUrl(answers) : '/cursussen';

  return (
    <section className="relative overflow-hidden">
      {/* Soft background blobs */}
      <div aria-hidden="true" className="pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary opacity-[0.07] blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full bg-secondary opacity-50 blur-[80px]" />
      </div>

      <div className="relative flex flex-col lg:flex-row items-stretch min-h-[520px]">

        {/* ── Left: form ── */}
        <div className="w-full lg:w-[55%] px-4 sm:px-8 md:px-12 py-10 md:py-14">
          <div className="bg-white/80 backdrop-blur-sm border border-black/[0.07] rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col h-full">

            {/* Progress bar */}
            <div className="h-1 bg-black/[0.05]">
              <div
                className="h-full bg-primary transition-all duration-500 ease-out"
                style={{ width: done ? '100%' : `${progress}%` }}
                aria-hidden="true"
              />
            </div>

            <div className={`p-5 md:p-7 flex-1 transition-opacity duration-[280ms] ${animating ? 'opacity-0' : 'opacity-100'}`}>

              {/* Header */}
              {!done && (
                <div className="mb-4">
                  <p className="text-[11px] font-bold text-primary uppercase tracking-widest mb-1">Cursus finder</p>
                  <h2 className="text-[18px] font-bold text-foreground">Welke cursus past bij jou?</h2>
                </div>
              )}

              {!done ? (
                <>
                  {/* Step indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={handleBack}
                      disabled={currentStep === 0}
                      className="flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground transition-colors disabled:opacity-0"
                    >
                      <iconify-icon icon="lucide:arrow-left" class="text-sm" aria-hidden="true" />
                      Terug
                    </button>
                    <div className="flex items-center justify-center gap-1.5" aria-hidden="true">
                      {STEPS.map((_, i) => (
                        <div
                          key={i}
                          className={`rounded-full transition-all duration-300 ${
                            i === currentStep
                              ? 'w-5 h-2 bg-primary'
                              : i < currentStep
                              ? 'w-2 h-2 bg-primary/40'
                              : 'w-2 h-2 bg-black/10'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[12px] font-semibold text-muted-foreground">
                      {currentStep + 1} / {STEPS.length}
                    </span>
                  </div>

                  {/* Question */}
                  <div className="mb-4 text-center">
                    <h3 className="text-[17px] md:text-[19px] font-bold text-foreground mb-1">
                      {step.question}
                    </h3>
                    <p className="text-[12px] text-muted-foreground">{step.sub}</p>
                  </div>

                  {/* Options */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2" role="list">
                    {step.options.map((opt) => (
                      <OptionButton
                        key={opt.id}
                        option={opt}
                        selected={answers[step.id] === opt.id}
                        onSelect={() => handleSelect(opt.id)}
                      />
                    ))}
                  </ul>
                </>
              ) : (
                <ResultScreen
                  recommendations={recommendations}
                  url={url}
                  answers={answers}
                  onRestart={handleRestart}
                />
              )}
            </div>
          </div>
        </div>

        {/* ── Right: image full bleed ── */}
        <div className="hidden lg:block lg:flex-1 relative">
          <img
            src="https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg"
            alt="Zwangere vrouw bereidt zich voor op bevalling"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(43,43,43,0.65) 0%, transparent 55%)' }}
            aria-hidden="true"
          />
          <div className="absolute bottom-0 left-0 right-0 p-7">
            <p className="text-[12px] font-bold text-white/60 uppercase tracking-widest mb-2">Birthly</p>
            <p className="text-[18px] font-bold text-white leading-snug mb-3">
              Vind de cursus die
              <br />bij jou past
            </p>
            <div className="flex flex-col gap-2">
              {[
                { icon: 'lucide:shield-check', label: 'Alleen gecertificeerde aanbieders' },
                { icon: 'lucide:star',         label: '4.8 gemiddeld · 1.200+ ouders' },
                { icon: 'lucide:euro',         label: 'Altijd gratis te gebruiken' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-[12px] text-white/80">
                  <iconify-icon icon={item.icon} class="text-primary text-sm shrink-0" aria-hidden="true" />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ─── Option button ──────────────────────────────────────────────────────── */

function OptionButton({ option, selected, onSelect }) {
  return (
    <li>
      <button
        onClick={onSelect}
        className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl border text-left transition-all duration-200 group ${
          selected
            ? 'bg-primary border-primary shadow-[0_4px_16px_rgba(122,166,122,0.25)]'
            : 'bg-white border-black/[0.08] hover:border-primary/40 hover:bg-primary/[0.03] hover:shadow-sm'
        }`}
      >
        {/* Icon */}
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 ${
          selected ? 'bg-white/20' : 'bg-secondary group-hover:bg-primary/10'
        }`}>
          <iconify-icon
            icon={option.icon}
            class={`text-base transition-colors duration-200 ${selected ? 'text-white' : 'text-foreground/60 group-hover:text-primary'}`}
            aria-hidden="true"
          />
        </div>

        {/* Label + hint */}
        <div className="flex-1 min-w-0">
          <p className={`text-[14px] font-semibold leading-snug transition-colors ${selected ? 'text-white' : 'text-foreground'}`}>
            {option.label}
          </p>
          {option.hint && (
            <p className={`text-[11px] mt-0.5 transition-colors ${selected ? 'text-white/70' : 'text-muted-foreground'}`}>
              {option.hint}
            </p>
          )}
        </div>

        {/* Check */}
        <iconify-icon
          icon={selected ? 'lucide:check-circle-2' : 'lucide:circle'}
          class={`text-lg shrink-0 transition-colors duration-200 ${selected ? 'text-white' : 'text-black/15 group-hover:text-primary/30'}`}
          aria-hidden="true"
        />
      </button>
    </li>
  );
}

/* ─── Result screen ──────────────────────────────────────────────────────── */

function ResultScreen({ recommendations, url, answers, onRestart }) {
  return (
    <div className="flex flex-col gap-6">

      {/* Header */}
      <div className="text-center">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <iconify-icon icon="lucide:sparkles" class="text-2xl text-primary" aria-hidden="true" />
        </div>
        <h3 className="text-[20px] font-bold text-foreground mb-1.5">
          Jouw perfecte match
        </h3>
        <p className="text-[13px] text-muted-foreground">
          Op basis van jouw antwoorden raden we dit aan:
        </p>
      </div>

      {/* Recommendations */}
      <ul className="flex flex-col gap-3" role="list">
        {recommendations.map((rec, i) => (
          <li
            key={rec.type}
            className={`flex gap-4 p-4 rounded-2xl border ${
              i === 0
                ? 'bg-primary/5 border-primary/20'
                : 'bg-white border-black/[0.07]'
            }`}
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${i === 0 ? 'bg-primary/15' : 'bg-secondary'}`}>
              <iconify-icon icon={i === 0 ? 'lucide:star' : 'lucide:bookmark'} class={`text-sm ${i === 0 ? 'text-primary' : 'text-muted-foreground'}`} aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <p className="text-[14px] font-bold text-foreground">{rec.type}</p>
                {i === 0 && (
                  <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full uppercase tracking-wide">
                    Top keuze
                  </span>
                )}
              </div>
              <p className="text-[12px] text-muted-foreground leading-snug">{rec.reason}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* City + budget summary */}
      <div className="flex flex-wrap gap-2">
        {answers.location && answers.location !== 'online' && (
          <span className="flex items-center gap-1.5 text-[12px] px-3 py-1.5 bg-secondary rounded-full text-foreground font-medium">
            <iconify-icon icon="lucide:map-pin" class="text-xs text-primary" aria-hidden="true" />
            {answers.location}
          </span>
        )}
        {answers.location === 'online' && (
          <span className="flex items-center gap-1.5 text-[12px] px-3 py-1.5 bg-secondary rounded-full text-foreground font-medium">
            <iconify-icon icon="lucide:globe" class="text-xs text-primary" aria-hidden="true" />
            Online
          </span>
        )}
        {answers.budget && answers.budget !== 'any' && (
          <span className="flex items-center gap-1.5 text-[12px] px-3 py-1.5 bg-secondary rounded-full text-foreground font-medium">
            <iconify-icon icon="lucide:euro" class="text-xs text-primary" aria-hidden="true" />
            {answers.budget === 'low' ? 'Tot €50' : answers.budget === 'mid' ? '€50 – €150' : '€150+'}
          </span>
        )}
      </div>

      {/* CTA */}
      <Link
        href={url}
        className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white text-[15px] font-semibold rounded-2xl hover:opacity-90 active:scale-[0.98] transition-all"
      >
        Bekijk passende cursussen
        <iconify-icon icon="lucide:arrow-right" class="text-base" aria-hidden="true" />
      </Link>

      {/* Restart */}
      <button
        onClick={onRestart}
        className="text-[13px] text-muted-foreground hover:text-foreground transition-colors text-center"
      >
        Opnieuw beginnen
      </button>
    </div>
  );
}