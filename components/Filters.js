'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const PRICE_OPTIONS = [
  { label: 'Tot €50',    value: 'low' },
  { label: '€50 - €150', value: 'mid' },
  { label: '€150+',      value: 'high' },
];

/**
 * Filters
 * Client Component — leest de actieve filters uit de URL (searchParams)
 * en schrijft wijzigingen terug via router.push, zodat de Server Component
 * (page.js) de gefilterde data opnieuw kan fetchen.
 *
 * Props:
 *  - filterOptions: { types, cities, languages }  (server-side opgehaald)
 */
export default function Filters({ filterOptions }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeType     = searchParams.get('type') ?? '';
  const activeCity     = searchParams.get('city') ?? '';
  const activeLanguage = searchParams.get('language') ?? '';
  const activeQuery    = searchParams.get('q') ?? '';
  const activePrice    = searchParams.get('price') ?? '';

  /** Pas één param aan, bewaar de rest */
  const setParam = useCallback(
    (key, value) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      // Reset naar pagina 1 bij elke filterwijziging
      params.delete('page');
      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams],
  );

  /** Toggle een checkbox-waarde (aan = zet, uit = verwijder) */
  const toggle = useCallback(
    (key, value) => {
      const current = searchParams.get(key);
      setParam(key, current === value ? '' : value);
    },
    [searchParams, setParam],
  );

  const clearAll = () => router.push(pathname);

  const hasActiveFilters = activeType || activeCity || activeLanguage || activeQuery || activePrice;

  return (
    <aside
      className="w-full md:w-[280px] shrink-0 flex flex-col gap-8"
      aria-label="Filters"
    >
      {/* ── Zoeken ── */}
      <FilterGroup title="Zoeken">
        <div className="flex items-center gap-3 px-3.5 py-2.5 border border-black/[0.08] rounded-md bg-white text-sm text-muted-foreground focus-within:border-black/20 transition-colors">
          <iconify-icon icon="lucide:search" class="text-base text-muted-foreground shrink-0" />
          <input
            type="text"
            value={activeQuery}
            onChange={(e) => setParam('q', e.target.value)}
            placeholder="Zoek cursus of thema..."
            aria-label="Zoek cursus of thema"
            className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
          />
          {activeQuery && (
            <button
              onClick={() => setParam('q', '')}
              aria-label="Wis zoekterm"
              className="hover:opacity-70 transition-opacity"
            >
              <iconify-icon icon="lucide:x" class="text-sm text-muted-foreground" />
            </button>
          )}
        </div>
      </FilterGroup>

      {/* ── Locatie ── */}
      <FilterGroup title="Locatie">
        {/* Stad opties */}
        <div className="flex flex-wrap gap-2 mt-1">
          {filterOptions.cities.map((city) => (
            <button
              key={city}
              onClick={() => toggle('city', city)}
              className={`px-3 py-1.5 rounded-full text-[13px] font-medium border transition-colors ${
                activeCity === city
                  ? 'bg-foreground text-background border-foreground'
                  : 'bg-white border-black/[0.08] text-foreground hover:border-black/20'
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </FilterGroup>

      {/* ── Type cursus ── */}
      <FilterGroup title="Type cursus">
        <CheckboxList>
          {filterOptions.types.map((type) => (
            <CheckboxItem
              key={type}
              label={type}
              checked={activeType === type}
              onChange={() => toggle('type', type)}
            />
          ))}
        </CheckboxList>
      </FilterGroup>

      {/* ── Prijs ── */}
      <FilterGroup title="Prijs">
        <CheckboxList>
          {PRICE_OPTIONS.map(({ label, value }) => (
            <CheckboxItem
              key={value}
              label={label}
              checked={activePrice === value}
              onChange={() => toggle('price', value)}
            />
          ))}
        </CheckboxList>
      </FilterGroup>

      {/* ── Voertaal ── */}
      <FilterGroup title="Voertaal">
        <CheckboxList>
          {filterOptions.languages.map((lang) => (
            <CheckboxItem
              key={lang}
              label={lang}
              checked={activeLanguage === lang}
              onChange={() => toggle('language', lang)}
            />
          ))}
        </CheckboxList>
      </FilterGroup>

      {/* ── Filters wissen ── */}
      {hasActiveFilters && (
        <button
          onClick={clearAll}
          className="text-sm font-medium text-foreground underline underline-offset-2 text-left hover:opacity-70 transition-opacity"
        >
          Wis alle filters
        </button>
      )}
    </aside>
  );
}

/* ─── Sub-components ─────────────────────────────────────────────────────── */

function FilterGroup({ title, children }) {
  return (
    <div className="flex flex-col gap-3 pb-6 border-b border-black/[0.06] last:border-b-0 last:pb-0">
      <h3 className="text-[15px] font-semibold text-foreground">{title}</h3>
      {children}
    </div>
  );
}

function CheckboxList({ children }) {
  return <ul className="flex flex-col gap-3">{children}</ul>;
}

function CheckboxItem({ label, checked, onChange }) {
  return (
    <li>
      <button
        role="checkbox"
        aria-checked={checked}
        onClick={onChange}
        className="flex items-center gap-3 w-full text-left group"
      >
        {/* Checkbox box */}
        <span
          className={`w-5 h-5 rounded shrink-0 border flex items-center justify-center transition-colors ${
            checked
              ? 'bg-foreground border-foreground'
              : 'bg-background border-black/[0.15] group-hover:border-black/30'
          }`}
          aria-hidden="true"
        >
          {checked && (
            <iconify-icon icon="lucide:check" class="text-xs text-white" />
          )}
        </span>
        <span className="text-sm text-foreground">{label}</span>
      </button>
    </li>
  );
}