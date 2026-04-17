'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const PRICE_OPTIONS = [
  { label: 'Tot €50',    value: 'low' },
  { label: '€50 - €150', value: 'mid' },
  { label: '€150+',      value: 'high' },
];

export default function Filters({ filterOptions, activeFilterCount = 0, total }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeType     = searchParams.get('type') ?? '';
  const activeCity     = searchParams.get('city') ?? '';
  const activeLanguage = searchParams.get('language') ?? '';
  const activeQuery    = searchParams.get('q') ?? '';
  const activePrice    = searchParams.get('price') ?? '';

  const hasActiveFilters = !!(activeType || activeCity || activeLanguage || activeQuery || activePrice);

  const [sheetOpen, setSheetOpen] = useState(false);

  // Body scroll lock when sheet is open
  useEffect(() => {
    if (sheetOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [sheetOpen]);

  const setParam = useCallback(
    (key, value) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) { params.set(key, value); } else { params.delete(key); }
      params.delete('page');
      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams],
  );

  const toggle = useCallback(
    (key, value) => {
      const current = searchParams.get(key);
      setParam(key, current === value ? '' : value);
    },
    [searchParams, setParam],
  );

  const clearAll = () => {
    router.push(pathname);
    setSheetOpen(false);
  };

  const filtersContent = (
    <div className="flex flex-col gap-6">

      {/* Zoeken */}
      <FilterGroup title="Zoeken">
        <div className="flex items-center gap-3 px-3.5 py-2.5 border border-black/[0.08] rounded-md bg-white text-sm focus-within:border-black/20 transition-colors">
          <iconify-icon icon="lucide:search" class="text-base text-muted-foreground shrink-0" />
          <input
            type="text"
            value={activeQuery}
            onChange={(e) => setParam('q', e.target.value)}
            placeholder="Zoek cursus of thema..."
            aria-label="Zoek cursus of thema"
            className="flex-1 min-w-0 bg-transparent outline-none text-foreground placeholder:text-muted-foreground text-sm"
          />
          {activeQuery && (
            <button onClick={() => setParam('q', '')} aria-label="Wis zoekterm" className="shrink-0 hover:opacity-70 transition-opacity">
              <iconify-icon icon="lucide:x" class="text-sm text-muted-foreground" />
            </button>
          )}
        </div>
      </FilterGroup>

      {/* Locatie */}
      <FilterGroup title="Locatie">
        <div className="grid grid-cols-2 gap-1.5 mt-1">
          {filterOptions.cities.map((city) => (
            <button
              key={city}
              onClick={() => toggle('city', city)}
              title={city}
              className={`px-3 py-2 rounded-lg text-[13px] font-medium border transition-colors truncate text-center ${
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

      {/* Type cursus */}
      <FilterGroup title="Type cursus">
        <CheckboxList>
          {filterOptions.types.map((type) => (
            <CheckboxItem key={type} label={type} checked={activeType === type} onChange={() => toggle('type', type)} />
          ))}
        </CheckboxList>
      </FilterGroup>

      {/* Prijs */}
      <FilterGroup title="Prijs">
        <CheckboxList>
          {PRICE_OPTIONS.map(({ label, value }) => (
            <CheckboxItem key={value} label={label} checked={activePrice === value} onChange={() => toggle('price', value)} />
          ))}
        </CheckboxList>
      </FilterGroup>

      {/* Voertaal */}
      <FilterGroup title="Voertaal">
        <CheckboxList>
          {filterOptions.languages.map((lang) => (
            <CheckboxItem key={lang} label={lang} checked={activeLanguage === lang} onChange={() => toggle('language', lang)} />
          ))}
        </CheckboxList>
      </FilterGroup>

      {/* Wis filters */}
      {hasActiveFilters && (
        <button
          onClick={clearAll}
          className="text-sm font-medium text-foreground underline underline-offset-2 text-left hover:opacity-70 transition-opacity"
        >
          Wis alle filters
        </button>
      )}
    </div>
  );

  return (
    <>
      {/* ── Desktop sidebar (always visible) ── */}
      <aside className="hidden lg:block w-full" aria-label="Filters">
        {filtersContent}
      </aside>

      {/* ── Mobile: show filters inline when no active filters ── */}
      {!hasActiveFilters && (
        <aside className="lg:hidden w-full" aria-label="Filters">
          {filtersContent}
        </aside>
      )}

      {/* ── Mobile: "Filters aanpassen" button when filters are active ── */}
      {hasActiveFilters && (
        <div className="lg:hidden w-full">
          <button
            onClick={() => setSheetOpen(true)}
            className="w-full flex items-center justify-between gap-3 px-4 py-3.5 bg-white border border-black/[0.08] rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-2.5">
              <iconify-icon icon="lucide:sliders-horizontal" class="text-base text-foreground" aria-hidden="true" />
              <span className="text-sm font-semibold text-foreground">
                Filters aanpassen
              </span>
            </div>
            <span className="flex items-center gap-1.5 px-2.5 py-1 bg-primary text-white text-[12px] font-bold rounded-full">
              {activeFilterCount}
              <iconify-icon icon="lucide:check" class="text-xs" aria-hidden="true" />
            </span>
          </button>
        </div>
      )}

      {/* ── Mobile bottom sheet ── */}
      {sheetOpen && (
        <div className="lg:hidden fixed inset-0 z-50" aria-modal="true" role="dialog" aria-label="Filters">

          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px] animate-[fadeIn_0.2s_ease]"
            onClick={() => setSheetOpen(false)}
            aria-hidden="true"
          />

          {/* Panel */}
          <div className="absolute bottom-0 left-0 right-0 bg-background rounded-t-2xl max-h-[82vh] flex flex-col animate-[slideUp_0.28s_ease]">

            {/* Handle */}
            <div className="flex justify-center pt-3 pb-1 shrink-0">
              <div className="w-10 h-1 rounded-full bg-black/15" aria-hidden="true" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-black/[0.06] shrink-0">
              <h2 className="text-[15px] font-bold text-foreground">
                Filters
                {activeFilterCount > 0 && (
                  <span className="ml-2 text-[12px] font-semibold text-primary">
                    ({activeFilterCount} actief)
                  </span>
                )}
              </h2>
              <button
                onClick={() => setSheetOpen(false)}
                aria-label="Sluit filters"
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <iconify-icon icon="lucide:x" class="text-lg text-foreground" aria-hidden="true" />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="overflow-y-auto flex-1 px-6 py-5">
              {filtersContent}
            </div>

            {/* Footer CTA */}
            <div className="shrink-0 px-6 py-4 border-t border-black/[0.06] bg-background">
              <button
                onClick={() => setSheetOpen(false)}
                className="w-full py-3.5 bg-primary text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity"
              >
                Bekijk resultaten{total != null ? ` (${total})` : ''}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to   { transform: translateY(0); }
        }
      `}</style>
    </>
  );
}

/* ─── Sub-components ─────────────────────────────────────────────────────── */

function FilterGroup({ title, children }) {
  return (
    <div className="flex flex-col gap-3 pb-5 border-b border-black/[0.06] last:border-b-0 last:pb-0">
      <h3 className="text-[14px] font-semibold text-foreground">{title}</h3>
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
        <span
          className={`w-5 h-5 rounded shrink-0 border flex items-center justify-center transition-colors ${
            checked
              ? 'bg-foreground border-foreground'
              : 'bg-background border-black/[0.15] group-hover:border-black/30'
          }`}
          aria-hidden="true"
        >
          {checked && <iconify-icon icon="lucide:check" class="text-xs text-white" />}
        </span>
        <span className="text-sm text-foreground truncate">{label}</span>
      </button>
    </li>
  );
}