'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const SORT_OPTIONS = [
  { value: 'aanbevolen',   label: 'Meest aanbevolen' },
  { value: 'beoordeling',  label: 'Hoogste beoordeling' },
  { value: 'prijs-laag',   label: 'Prijs: laag → hoog' },
  { value: 'prijs-hoog',   label: 'Prijs: hoog → laag' },
];

const FILTER_LABELS = {
  type:     'Type',
  city:     'Locatie',
  language: 'Taal',
  q:        'Zoekterm',
  price:    'Prijs',
};

const PRICE_LABELS = {
  low:  'Tot \u20ac50',
  mid:  '\u20ac50 - \u20ac150',
  high: '\u20ac150+',
};

/**
 * ResultsBar
 * Toont actieve filter-chips en een sorteer-dropdown.
 * Schrijft wijzigingen terug naar de URL.
 */
export default function ResultsBar({ total }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeSort = searchParams.get('sort') ?? 'aanbevolen';

  const removeFilter = useCallback(
    (key) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(key);
      params.delete('page');
      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams],
  );

  const setSort = useCallback(
    (value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set('sort', value);
      params.delete('page');
      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams],
  );

  // Bouw actieve filter-chips uit de huidige searchParams
  const activeChips = ['type', 'city', 'language', 'q', 'price']
    .filter((key) => searchParams.get(key))
    .map((key) => {
      const raw = searchParams.get(key);
      const value = key === 'price' ? (PRICE_LABELS[raw] ?? raw) : raw;
      return { key, label: `${FILTER_LABELS[key]}: ${value}` };
    });

  const currentSortLabel =
    SORT_OPTIONS.find((o) => o.value === activeSort)?.label ?? 'Meest aanbevolen';

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      {/* Active filter chips */}
      <div className="hidden lg:flex flex-wrap items-center gap-2">
        {activeChips.map(({ key, label }) => (
          <span
            key={key}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-[13px] font-medium"
          >
            {label}
            <button
              onClick={() => removeFilter(key)}
              aria-label={`Verwijder filter: ${label}`}
              className="hover:opacity-70 transition-opacity"
            >
              <iconify-icon icon="lucide:x" class="text-sm" aria-hidden="true" />
            </button>
          </span>
        ))}

        {activeChips.length > 0 && (
          <button
            onClick={() => router.push(pathname)}
            className="text-[13px] font-medium text-foreground underline underline-offset-2 ml-1 hover:opacity-70 transition-opacity"
          >
            Wis alle filters
          </button>
        )}

        {total != null && (
          <span className="text-[13px] text-muted-foreground ml-1">
            {total} {total === 1 ? 'resultaat' : 'resultaten'}
          </span>
        )}
      </div>

      {/* Sort dropdown */}
      <div className="relative">
        <label htmlFor="sort-select" className="sr-only">
          Sorteren op
        </label>
        <div className="flex items-center gap-2 px-4 py-2 border border-black/[0.08] rounded-md bg-white text-sm font-medium text-foreground cursor-pointer">
          <span>Sorteer op: {currentSortLabel}</span>
          <iconify-icon icon="lucide:chevron-down" class="text-base text-muted-foreground" />
          <select
            id="sort-select"
            value={activeSort}
            onChange={(e) => setSort(e.target.value)}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            aria-label="Sorteren op"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}