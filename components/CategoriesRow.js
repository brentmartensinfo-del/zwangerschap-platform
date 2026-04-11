'use client';

import { useState } from 'react';

const CATEGORIES = [
  'Alle cursussen',
  'Zwangerschapsyoga',
  'Hypnobirthing',
  'Online Cursussen',
  'Intensief / Weekend',
  'Samen met partner',
  'Zwangerschapsgym',
];

export default function CategoriesRow() {
  const [active, setActive] = useState('Alle cursussen');

  return (
    <nav aria-label="Cursus categorieën">
      <ul
        className="flex gap-2.5 md:gap-3 px-4 sm:px-8 md:px-12 pb-6 md:pb-8 overflow-x-auto scrollbar-hide"
        role="list"
      >
        {CATEGORIES.map((cat) => (
          <li key={cat} className="shrink-0">
            <button
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              className={`px-4 md:px-5 py-2 md:py-2.5 rounded-full border text-sm font-medium whitespace-nowrap flex items-center gap-2 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
                active === cat
                  ? 'bg-foreground text-background border-foreground'
                  : 'bg-white border-black/[0.08] text-foreground hover:border-black/20'
              }`}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}