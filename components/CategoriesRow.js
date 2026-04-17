'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CATEGORIES = [
  { label: 'Alle cursussen',     type: null },
  { label: 'Allround bevallingscursus',  type: 'Allround bevallingscursus' },
  { label: 'Hypnobirthing',      type: 'Hypnobirthing' },
  { label: 'Ademhalingscursus',   type: 'Ademhalingscursus' },
  { label: 'Borstvoedingscursus', type: 'Borstvoedingscursus' },
  { label: 'Haptonomie',  type: 'Haptonomie' },
  { label: 'Slaaptraining',   type: 'Slaaptraining' },
  { label: 'Zwangerschapsyoga', type: 'Zwangerschapsyoga' },
  { label: 'ZwangerFit',  type: 'ZwangerFit' },
  { label: 'Mindfulness',   type: 'Mindfulness' },
  { label: 'Partnercursus',   type: 'Partnercursus' },
  { label: 'Online cursussen',   type: 'Online cursussen' },
];

export default function CategoriesRow() {
  const router = useRouter();
  const [active, setActive] = useState('Alle cursussen');

  function handleClick(cat) {
    setActive(cat.label);
    if (cat.type) {
      const params = new URLSearchParams({ type: cat.type });
      router.push(`/cursussen?${params.toString()}`);
    } else {
      router.push('/cursussen');
    }
  }

  return (
    <nav aria-label="Cursus categorieën">
      <ul
        className="flex gap-2.5 md:gap-3 px-4 sm:px-8 md:px-12 pb-6 md:pb-8 overflow-x-auto scrollbar-hide"
        role="list"
      >
        {CATEGORIES.map((cat) => (
          <li key={cat.label} className="shrink-0">
            <button
              onClick={() => handleClick(cat)}
              aria-pressed={active === cat.label}
              className={`px-4 md:px-5 py-2 md:py-2.5 rounded-full border text-sm font-medium whitespace-nowrap flex items-center gap-2 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
                active === cat.label
                  ? 'bg-foreground text-background border-foreground'
                  : 'bg-white border-black/[0.08] text-foreground hover:border-black/20'
              }`}
            >
              {cat.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}