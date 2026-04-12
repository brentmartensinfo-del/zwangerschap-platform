'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const TRUST_ITEMS = [
  'Vergelijk eenvoudig',
  'Onafhankelijk platform',
  'Direct boeken bij de aanbieder',
];

const CITY_OPTIONS   = ['Amsterdam', 'Den Haag', 'Eindhoven', 'Groningen', 'Haarlem', 'Rotterdam', 'Utrecht'];
const TYPE_OPTIONS   = ['Zwangerschapsyoga', 'Hypnobirthing', 'Online Cursussen', 'Samen met partner', 'Zwangerschapsgym'];
const PRICE_OPTIONS  = [
  { label: 'Tot €50',     value: 'low'  },
  { label: '€50 - €150',  value: 'mid'  },
  { label: '€150+',       value: 'high' },
];

export default function Hero() {
  const router = useRouter();
  const [city,  setCity]  = useState('');
  const [type,  setType]  = useState('');
  const [q,     setQ]     = useState('');
  const [price, setPrice] = useState('');

  function handleSearch() {
    const params = new URLSearchParams();
    if (q)     params.set('q',     q);
    if (city)  params.set('city',  city);
    if (type)  params.set('type',  type);
    if (price) params.set('price', price);
    const query = params.toString();
    router.push(`/cursussen${query ? `?${query}` : ''}`);
  }

  return (
    <section className="px-4 sm:px-8 md:px-12 pt-6 md:pt-7 pb-8 md:pb-10">
      <div className="relative min-h-[480px] md:min-h-[520px] rounded-xl overflow-hidden flex items-stretch bg-secondary">

        {/* ── Background image ── */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3988431/pexels-photo-3988431.jpeg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
        </div>

        {/* ── Gradient overlay ── */}
        <div className="absolute inset-0 bg-hero-overlay" aria-hidden="true" />

        {/* ── Content: stacks on mobile, side-by-side on xl ── */}
        <div className="relative z-10 w-full flex flex-col xl:grid xl:grid-cols-[minmax(0,760px)_1fr] gap-8 xl:gap-6 items-start xl:items-center p-6 sm:p-10 md:p-14 min-h-[480px] md:min-h-[520px]">

          {/* Left / top column */}
          <div className="flex flex-col items-start gap-5 md:gap-6 w-full">

            {/* Headline */}
            <div className="flex flex-col gap-2 md:gap-3 max-w-[620px]">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground leading-[1.1] md:leading-[1.08] tracking-[-0.025em] md:tracking-[-0.03em]">
                Vind de perfecte cursus voor jouw zwangerschap
              </h1>
              <p className="text-base md:text-[17px] text-body-muted leading-relaxed max-w-[560px]">
                Vergelijk onafhankelijk het aanbod en ontdek wat het beste bij jullie past.
              </p>
            </div>

            {/* ── Search pill ──
                On mobile: stacks vertically as a card.
                On md+: horizontal pill layout.
            */}
            <div className="w-full max-w-[720px]">

              {/* ── Mobile search card ── */}
              <div className="md:hidden flex flex-col gap-2 p-4 rounded-2xl bg-glass-search backdrop-blur-glass border border-white/45 shadow-[0_8px_24px_rgba(43,43,43,0.08)]">

                {/* Trefwoord — input */}
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/70 border border-black/[0.06]">
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-[10px] font-semibold text-foreground uppercase tracking-wide mb-0.5">
                      Trefwoord
                    </span>
                    <input
                      type="text"
                      value={q}
                      onChange={(e) => setQ(e.target.value)}
                      placeholder="Zoek cursus, thema..."
                      aria-label="Trefwoord"
                      className="text-sm bg-transparent outline-none text-foreground placeholder:text-muted-foreground w-full"
                    />
                  </div>
                </div>

                {/* Stad — select */}
                <div className="relative flex items-center justify-between px-4 py-3 rounded-xl bg-white/70 border border-black/[0.06]">
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-[10px] font-semibold text-foreground uppercase tracking-wide mb-0.5">
                      Stad
                    </span>
                    <span className={`text-sm truncate ${city ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {city || 'Kies een stad'}
                    </span>
                  </div>
                  <iconify-icon icon="lucide:chevron-down" class="text-base text-muted-foreground shrink-0 ml-2" aria-hidden="true" />
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    aria-label="Kies een stad"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  >
                    <option value="">Alle steden</option>
                    {CITY_OPTIONS.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {/* Type cursus — select */}
                <div className="relative flex items-center justify-between px-4 py-3 rounded-xl bg-white/70 border border-black/[0.06]">
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-[10px] font-semibold text-foreground uppercase tracking-wide mb-0.5">
                      Type cursus
                    </span>
                    <span className={`text-sm truncate ${type ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {type || 'Alle types'}
                    </span>
                  </div>
                  <iconify-icon icon="lucide:chevron-down" class="text-base text-muted-foreground shrink-0 ml-2" aria-hidden="true" />
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    aria-label="Kies een type cursus"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  >
                    <option value="">Alle types</option>
                    {TYPE_OPTIONS.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Prijs — select */}
                <div className="relative flex items-center justify-between px-4 py-3 rounded-xl bg-white/70 border border-black/[0.06]">
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-[10px] font-semibold text-foreground uppercase tracking-wide mb-0.5">
                      Prijs
                    </span>
                    <span className={`text-sm truncate ${price ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {PRICE_OPTIONS.find((p) => p.value === price)?.label || 'Elk budget'}
                    </span>
                  </div>
                  <iconify-icon icon="lucide:sliders-horizontal" class="text-base text-muted-foreground shrink-0 ml-2" aria-hidden="true" />
                  <select
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    aria-label="Kies een prijsrange"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  >
                    <option value="">Elk budget</option>
                    {PRICE_OPTIONS.map((p) => (
                      <option key={p.value} value={p.value}>{p.label}</option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={handleSearch}
                  aria-label="Cursussen zoeken"
                  className="mt-1 w-full py-3 rounded-full bg-primary text-white text-sm font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <iconify-icon icon="lucide:search" class="text-base" aria-hidden="true" />
                  Zoeken
                </button>
              </div>

              {/* ── Desktop search pill ── */}
              <div className="hidden md:flex items-center w-full p-2 rounded-full bg-glass-search backdrop-blur-glass border border-white/45 shadow-[0_16px_40px_rgba(43,43,43,0.08)]">

                {/* Trefwoord — input */}
                <div className="flex-1 flex flex-col px-5 py-2 text-left min-w-0 border-r border-black/[0.08]">
                  <span className="text-[11px] font-semibold text-foreground mb-1 uppercase tracking-wide">
                    Trefwoord
                  </span>
                  <input
                    type="text"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    placeholder="Zoek cursus, thema..."
                    aria-label="Trefwoord"
                    className="text-sm bg-transparent outline-none text-foreground placeholder:text-muted-foreground w-full"
                  />
                </div>

                {/* Stad — select */}
                <div className="flex-1 relative flex flex-col px-5 py-2 text-left min-w-0 border-r border-black/[0.08]">
                  <span className="text-[11px] font-semibold text-foreground mb-1 uppercase tracking-wide">
                    Stad
                  </span>
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-sm truncate ${city ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {city || 'Kies een stad'}
                    </span>
                    <iconify-icon icon="lucide:chevron-down" class="text-sm text-muted-foreground shrink-0" aria-hidden="true" />
                  </div>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    aria-label="Kies een stad"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  >
                    <option value="">Alle steden</option>
                    {CITY_OPTIONS.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {/* Type cursus — select */}
                <div className="flex-1 relative flex flex-col px-5 py-2 text-left min-w-0 border-r border-black/[0.08]">
                  <span className="text-[11px] font-semibold text-foreground mb-1 uppercase tracking-wide">
                    Type cursus
                  </span>
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-sm truncate ${type ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {type || 'Alle types'}
                    </span>
                    <iconify-icon icon="lucide:chevron-down" class="text-sm text-muted-foreground shrink-0" aria-hidden="true" />
                  </div>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    aria-label="Kies een type cursus"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  >
                    <option value="">Alle types</option>
                    {TYPE_OPTIONS.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Prijs — select */}
                <div className="flex-1 relative flex flex-col px-5 py-2 text-left min-w-0">
                  <span className="text-[11px] font-semibold text-foreground mb-1 uppercase tracking-wide">
                    Prijs
                  </span>
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-sm truncate ${price ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {PRICE_OPTIONS.find((p) => p.value === price)?.label || 'Elk budget'}
                    </span>
                    <iconify-icon icon="lucide:sliders-horizontal" class="text-sm text-muted-foreground shrink-0" aria-hidden="true" />
                  </div>
                  <select
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    aria-label="Kies een prijsrange"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  >
                    <option value="">Elk budget</option>
                    {PRICE_OPTIONS.map((p) => (
                      <option key={p.value} value={p.value}>{p.label}</option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={handleSearch}
                  aria-label="Cursussen zoeken"
                  className="ml-2 shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <iconify-icon icon="lucide:search" class="text-xl text-white" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Trust badges */}
            <ul className="flex flex-wrap gap-4 md:gap-6 mt-1" role="list" aria-label="Kenmerken van het platform">
              {TRUST_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[12px] md:text-[13px] text-trust-muted font-medium whitespace-nowrap"
                >
                  <iconify-icon icon="lucide:check-circle-2" class="text-sm md:text-base text-foreground shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right / bottom column — stat cards
              Hidden on small screens, visible from xl */}
          <div className="hidden xl:flex self-end justify-self-end flex-col gap-3 w-[260px]">
            <StatCard
              label="Meest gekozen categorie"
               value={<a href="/cursussen?type=Zwangerschapsyoga">Zwangerschapsyoga</a>}
              sub="48 cursussen in heel Nederland"
            />
            <StatCard
              label="Gemiddelde beoordeling"
              value="4.8 / 5"
              sub="Gebaseerd op 1.200+ ervaringen"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Sub-components ─────────────────────────────────────────────────────── */

/** Mobile stacked row (statisch, geen interactie) */
function MobileSearchRow({ label, placeholder, icon }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/70 border border-black/[0.06]">
      <div className="flex flex-col min-w-0">
        <span className="text-[10px] font-semibold text-foreground uppercase tracking-wide mb-0.5">
          {label}
        </span>
        <span className="text-sm text-muted-foreground truncate">{placeholder}</span>
      </div>
      {icon && (
        <iconify-icon icon={icon} class="text-base text-muted-foreground shrink-0 ml-2" aria-hidden="true" />
      )}
    </div>
  );
}

/** Glass stat card */
function StatCard({ label, value, sub }) {
  return (
    <div className="rounded-xl px-5 py-[18px] bg-glass-card backdrop-blur-glass border border-white/40 shadow-[0_12px_30px_rgba(43,43,43,0.06)]">
      <p className="text-xs font-semibold text-muted-foreground mb-2 whitespace-nowrap">
        {label}
      </p>
      <p className="text-[22px] font-bold text-foreground leading-[1.15]">{value}</p>
      <p className="text-[13px] text-muted-foreground mt-1.5 leading-snug">{sub}</p>
    </div>
  );
}