'use client';

import { useState } from 'react';
import Link from 'next/link';

const CATEGORIES = [
  {
    id: 'mentaal',
    label: 'Mentaal & ontspanning',
    icon: 'lucide:brain',
    accent: 'text-[#5a9b6a]',
    iconBg: 'bg-[#d4eedb]',
    popular: true,
    image: 'https://images.pexels.com/photos/33755457/pexels-photo-33755457.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    courses: [
      'Zwangerschapsyoga',
      'Mindfulness tijdens zwangerschap',
      'Hypnobirthing',
      'Meditatie voor zwangeren',
      'Ademhalingscursussen',
      'Angst- en stressreductie',
    ],
  },
  {
    id: 'fysiek',
    label: 'Fysiek & beweging',
    icon: 'lucide:activity',
    accent: 'text-[#c4782a]',
    iconBg: 'bg-[#fde8c8]',
    image: 'https://images.pexels.com/photos/3984363/pexels-photo-3984363.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    courses: [
      'ZwangerFit',
      'Zwangerschapsgym',
      'Zwangerschapspilates',
      'Zwangerschapszwemmen',
      'Prenatale bootcamp',
      'Bekkenbodemtraining',
    ],
  },
  {
    id: 'bevalling',
    label: 'Bevalling & voorbereiding',
    icon: 'lucide:heart-pulse',
    accent: 'text-[#c4456a]',
    iconBg: 'bg-[#f9d0dc]',
    image: 'https://images.pexels.com/photos/18999261/pexels-photo-18999261.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    courses: [
      'Algemene bevallingscursus',
      'Pers- en ademhalingstechnieken',
      'Natuurlijke bevalling',
      'Medische bevalling voorbereiding',
      'Thuisbevalling vs ziekenhuis',
      'Keizersnede voorbereiding',
    ],
  },
  {
    id: 'partner',
    label: 'Partner & koppel',
    icon: 'lucide:users',
    accent: 'text-[#4a6abf]',
    iconBg: 'bg-[#ccd8f8]',
    image: 'https://images.pexels.com/photos/5424711/pexels-photo-5424711.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    courses: [
      'Samen bevallen cursus',
      'Partnercoach training',
      'Vadercursus',
      'Haptonomie voor koppels',
      'Communicatie tijdens bevalling',
    ],
  },
  {
    id: 'hechting',
    label: 'Emotie & hechting',
    icon: 'lucide:heart-handshake',
    accent: 'text-[#8a4abf]',
    iconBg: 'bg-[#e8d0f8]',
    image: 'https://images.pexels.com/photos/32410087/pexels-photo-32410087.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    courses: [
      'Haptonomie',
      'Prenatale hechting',
      'Bewust ouderschap',
      'Contact maken met je baby',
      'Intuïtief moederschap',
    ],
  },
  {
    id: 'babyzorg',
    label: 'Babyzorg & postnataal',
    icon: 'lucide:baby',
    accent: 'text-[#2a8abf]',
    iconBg: 'bg-[#c8e8f8]',
    image: 'https://images.pexels.com/photos/7491225/pexels-photo-7491225.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    courses: [
      'Borstvoeding cursus',
      'Flesvoeding cursus',
      'Babyverzorging',
      'Slaaptraining baby',
      "EHBO voor baby's",
      'Postpartum herstel',
    ],
  },
  {
    id: 'allinone',
    label: 'All-in-one cursussen',
    icon: 'lucide:layers',
    accent: 'text-[#9b5a3a]',
    iconBg: 'bg-[#f0d4c0]',
    image: 'https://images.pexels.com/photos/7990107/pexels-photo-7990107.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    courses: [
      'Complete zwangerschapscursus',
      'Groepscursus',
      'Privé cursus',
      'Online cursus',
      'Crash course',
    ],
  },
  {
    id: 'alternatief',
    label: 'Alternatief & specialistisch',
    icon: 'lucide:leaf',
    accent: 'text-[#4a8a3a]',
    iconBg: 'bg-[#ccecc0]',
    image: 'https://images.pexels.com/photos/5240739/pexels-photo-5240739.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    courses: [
      'Holistische zwangerschapscursus',
      'Ayurvedische begeleiding',
      'Reiki / energetisch',
      'Doula trajecten',
      'Spirituele cursussen',
    ],
  },
  {
    id: 'doelgroepen',
    label: 'Specifieke doelgroepen',
    icon: 'lucide:target',
    accent: 'text-[#9b7a3a]',
    iconBg: 'bg-[#f0dfc0]',
    image: 'https://images.pexels.com/photos/35012717/pexels-photo-35012717.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    courses: [
      'Eerste zwangerschap',
      'Ervaren moeders',
      'Tienerzwangerschap',
      'LGBTQ+ zwangerschap',
      'Hoogrisico zwangerschap',
      'Alleenstaande moeder',
    ],
  },
];

export default function CourseCategories() {
  const [openCategories, setOpenCategories] = useState(
    () => new Set(CATEGORIES.map((c) => c.id))
  );

  function toggle(id) {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  return (
    <section
      className="py-16 md:py-20 px-4 sm:px-8 md:px-12"
      aria-labelledby="categories-heading"
    >
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-12">
          <div>
            <p className="text-[12px] font-bold text-primary uppercase tracking-widest mb-3">
              Alle categorieën
            </p>
            <h2
              id="categories-heading"
              className="text-3xl md:text-[36px] font-bold text-foreground tracking-tight"
            >
              Wat zoek jij?
            </h2>
          </div>
          <Link
            href="/cursussen"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:opacity-75 transition-opacity"
          >
            Bekijk alle cursussen
            <iconify-icon icon="lucide:arrow-right" class="text-sm" aria-hidden="true" />
          </Link>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-3 gap-5">
          {CATEGORIES.map((cat) => (
            <CategoryCard
              key={cat.id}
              cat={cat}
              isOpen={openCategories.has(cat.id)}
              onToggle={() => toggle(cat.id)}
            />
          ))}
        </div>

        {/* Mobile accordion */}
        <div className="md:hidden flex flex-col gap-2">
          {CATEGORIES.map((cat) => (
            <MobileAccordion
              key={cat.id}
              cat={cat}
              isOpen={openCategories.has(cat.id)}
              onToggle={() => toggle(cat.id)}
            />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden mt-6 text-center">
          <Link
            href="/cursussen"
            className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            Bekijk alle cursussen
            <iconify-icon icon="lucide:arrow-right" class="text-sm" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Desktop category card ───────────────────────────────────────────────── */
function CategoryCard({ cat, isOpen, onToggle }) {
  return (
    <div
      className={`group relative rounded-2xl border overflow-hidden cursor-pointer transition-all duration-300 ${
        isOpen
          ? 'border-black/[0.10] shadow-[0_12px_36px_rgba(0,0,0,0.10)]'
          : 'border-black/[0.07] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1'
      }`}
      onClick={onToggle}
    >
      {/* Image area */}
      <div className="relative w-full h-[160px] overflow-hidden shrink-0">
        <img
          src={cat.image}
          alt={cat.label}
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
          loading="lazy"
        />
        {/* Light overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Top badges */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
          <div className={`w-9 h-9 rounded-xl ${cat.iconBg} flex items-center justify-center shadow-sm`}>
            <iconify-icon icon={cat.icon} class={`text-base ${cat.accent}`} aria-hidden="true" />
          </div>
          {cat.popular && (
            <span className="text-[10px] font-bold text-white bg-primary px-2.5 py-1 rounded-full uppercase tracking-wide shadow-sm">
              Populair
            </span>
          )}
        </div>

        {/* Bottom label */}
        <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="text-[14px] font-bold text-white leading-snug drop-shadow-sm">
              {cat.label}
            </h3>
            <p className="text-[11px] text-white/75 mt-0.5">
              {cat.courses.length} cursustypes
            </p>
          </div>
          <iconify-icon
            icon="lucide:chevron-down"
            class={`text-base text-white/80 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Course list */}
      <div
        className={`overflow-hidden transition-all duration-300 bg-white ${
          isOpen ? 'max-h-72' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-3 py-3 gap-0.5" role="list">
          {cat.courses.map((course) => (
            <li key={course}>
              <Link
                href={`/cursussen?type=${encodeURIComponent(course)}`}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-[13px] text-foreground hover:bg-secondary transition-colors group/item"
              >
                <span className="truncate">{course}</span>
                <iconify-icon
                  icon="lucide:arrow-right"
                  class="text-xs text-muted-foreground shrink-0 opacity-0 group-hover/item:opacity-100 transition-opacity"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ── Mobile accordion ────────────────────────────────────────────────────── */
function MobileAccordion({ cat, isOpen, onToggle }) {
  return (
    <div className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
      isOpen ? 'border-black/[0.10] shadow-sm' : 'border-black/[0.07]'
    }`}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center gap-3 px-4 py-3.5 text-left bg-white"
      >
        {/* Thumbnail */}
        <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
          <img
            src={cat.image}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
            aria-hidden="true"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[14px] font-bold text-foreground truncate">
              {cat.label}
            </span>
            {cat.popular && (
              <span className="text-[9px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded-full uppercase tracking-wide shrink-0">
                Populair
              </span>
            )}
          </div>
          <span className="text-[11px] text-muted-foreground">
            {cat.courses.length} cursustypes
          </span>
        </div>

        <iconify-icon
          icon="lucide:chevron-down"
          class={`text-base text-foreground/40 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      <div className={`overflow-hidden transition-all duration-300 bg-white border-t border-black/[0.06] ${
        isOpen ? 'max-h-96' : 'max-h-0'
      }`}>
        <ul className="flex flex-col px-3 py-2 gap-0.5" role="list">
          {cat.courses.map((course) => (
            <li key={course}>
              <Link
                href={`/cursussen?type=${encodeURIComponent(course)}`}
                className="flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg text-[13px] text-foreground hover:bg-secondary transition-colors"
              >
                <span>{course}</span>
                <iconify-icon icon="lucide:arrow-right" class="text-xs text-muted-foreground shrink-0" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}