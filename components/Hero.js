'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const TRUST_ITEMS = [
  { icon: 'lucide:shield-check', label: 'Geverifieerde aanbieders' },
  { icon: 'lucide:star',         label: '4.8 gemiddeld · 1.200+ ouders' },
  { icon: 'lucide:zap',          label: 'Direct boeken bij de aanbieder' },
];

const CITY_OPTIONS  = ['Amsterdam', 'Den Haag', 'Eindhoven', 'Groningen', 'Haarlem', 'Rotterdam', 'Utrecht'];
const TYPE_OPTIONS  = ['Zwangerschapsyoga', 'Hypnobirthing', 'Online Cursussen', 'Samen met partner', 'Zwangerschapsgym'];
const PRICE_OPTIONS = [
  { label: 'Tot €50',    value: 'low'  },
  { label: '€50 - €150', value: 'mid'  },
  { label: '€150+',      value: 'high' },
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
    <section className="px-4 sm:px-6 md:px-10 pt-5 md:pt-6 pb-8 md:pb-10">
      <div className="relative min-h-[520px] md:min-h-[580px] rounded-2xl overflow-hidden bg-secondary">

        {/* ── Background image ── */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/15797917/pexels-photo-15797917.jpeg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* ── Gradient overlay ── */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(105deg, rgba(43,43,43,0.72) 0%, rgba(43,43,43,0.40) 55%, rgba(43,43,43,0.10) 100%)',
          }}
          aria-hidden="true"
        />

        {/* ── Content ── */}
        <div className="relative z-10 h-full flex flex-col xl:grid xl:grid-cols-[1fr_300px] xl:items-center gap-8 xl:gap-12 p-7 sm:p-10 md:p-14 min-h-[520px] md:min-h-[580px]">

          {/* ── Left column ── */}
          <div className="flex flex-col items-start gap-7 md:gap-8 max-w-[680px]">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full">
              <iconify-icon icon="lucide:baby" class="text-sm text-white" aria-hidden="true" />
              <span className="text-[11px] font-semibold text-white/90 uppercase tracking-widest">
                Onafhankelijk cursusplatform
              </span>
            </div>

            {/* Headline */}
            <div className="flex flex-col gap-3">
              <h1 className="text-[34px] sm:text-[42px] md:text-[52px] font-bold text-white leading-[1.07] tracking-tight">
                Vind de cursus die
                <br />jouw bevalling
                <br />
                <span className="text-white">onvergetelijk maakt</span>
              </h1>
              <p className="text-base md:text-[17px] text-white/70 leading-relaxed max-w-[500px]">
                Vergelijk alle zwangerschapscursussen in Nederland op één plek.
                Eerlijk, transparant en gratis.
              </p>
            </div>

            {/* ── Search ── */}
            <div className="w-full max-w-[700px]">

              {/* Mobile — volgorde: Type → Stad → Prijs → Trefwoord */}
              <div className="md:hidden flex flex-col gap-2 p-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 shadow-[0_8px_32px_rgba(0,0,0,0.15)]">

                {/* 1. Type cursus */}
                <SelectRow
                  label="Type cursus"
                  displayValue={type || 'Alle types'}
                  hasValue={!!type}
                  icon="lucide:chevron-down"
                  select={
                    <select value={type} onChange={(e) => setType(e.target.value)} aria-label="Type cursus" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer">
                      <option value="">Alle types</option>
                      {TYPE_OPTIONS.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  }
                />

                {/* 2. Stad */}
                <SelectRow
                  label="Stad"
                  displayValue={city || 'Alle steden'}
                  hasValue={!!city}
                  icon="lucide:chevron-down"
                  select={
                    <select value={city} onChange={(e) => setCity(e.target.value)} aria-label="Kies een stad" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer">
                      <option value="">Alle steden</option>
                      {CITY_OPTIONS.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  }
                />

                {/* 3. Prijs */}
                <SelectRow
                  label="Prijs"
                  displayValue={PRICE_OPTIONS.find((p) => p.value === price)?.label || 'Elk budget'}
                  hasValue={!!price}
                  icon="lucide:sliders-horizontal"
                  select={
                    <select value={price} onChange={(e) => setPrice(e.target.value)} aria-label="Prijs" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer">
                      <option value="">Elk budget</option>
                      {PRICE_OPTIONS.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
                    </select>
                  }
                />

                <button
                  onClick={handleSearch}
                  aria-label="Zoeken"
                  className="mt-1 w-full py-3.5 rounded-xl bg-primary text-white text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all"
                >
                  <iconify-icon icon="lucide:search" class="text-base" aria-hidden="true" />
                  Zoek cursussen
                </button>
              </div>

              {/* Desktop pill — volgorde: Type → Stad → Prijs → Trefwoord → Knop */}
              <div className="hidden md:flex items-stretch w-full rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 shadow-[0_16px_48px_rgba(0,0,0,0.16)] overflow-hidden">

                {/* 1. Type cursus */}
                <PillSegment label="Type cursus" divider relative>
                  <span className={`text-sm truncate ${type ? 'text-white' : 'text-white/60'}`}>
                    {type || 'Alle types'}
                  </span>
                  <iconify-icon icon="lucide:chevron-down" class="text-sm text-white/65 ml-auto shrink-0" aria-hidden="true" />
                  <select value={type} onChange={(e) => setType(e.target.value)} aria-label="Type cursus" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer">
                    <option value="">Alle types</option>
                    {TYPE_OPTIONS.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </PillSegment>

                {/* 2. Stad */}
                <PillSegment label="Stad" divider relative>
                  <span className={`text-sm truncate ${city ? 'text-white' : 'text-white/60'}`}>
                    {city || 'Alle steden'}
                  </span>
                  <iconify-icon icon="lucide:chevron-down" class="text-sm text-white/65 ml-auto shrink-0" aria-hidden="true" />
                  <select value={city} onChange={(e) => setCity(e.target.value)} aria-label="Kies een stad" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer">
                    <option value="">Alle steden</option>
                    {CITY_OPTIONS.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </PillSegment>

                {/* 3. Prijs */}
                <PillSegment label="Prijs" divider relative>
                  <span className={`text-sm truncate ${price ? 'text-white' : 'text-white/60'}`}>
                    {PRICE_OPTIONS.find((p) => p.value === price)?.label || 'Elk budget'}
                  </span>
                  <iconify-icon icon="lucide:sliders-horizontal" class="text-sm text-white/65 ml-auto shrink-0" aria-hidden="true" />
                  <select value={price} onChange={(e) => setPrice(e.target.value)} aria-label="Prijs" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer">
                    <option value="">Elk budget</option>
                    {PRICE_OPTIONS.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
                  </select>
                </PillSegment>

                {/* 4. Trefwoord */}
                <PillSegment label="Trefwoord">
                  <input
                    type="text"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    placeholder="Cursus, thema..."
                    aria-label="Trefwoord"
                    className="text-sm bg-transparent outline-none text-white placeholder:text-white/60 w-full"
                  />
                </PillSegment>

                {/* Zoekknop */}
                <button
                  onClick={handleSearch}
                  aria-label="Zoeken"
                  className="shrink-0 m-2 px-6 rounded-xl bg-primary text-white text-sm font-semibold flex items-center gap-2 hover:opacity-90 active:scale-[0.97] transition-all whitespace-nowrap"
                >
                  <iconify-icon icon="lucide:search" class="text-base" aria-hidden="true" />
                  Zoeken
                </button>
              </div>
            </div>

            {/* Trust badges */}
            <ul className="flex flex-wrap gap-3 md:gap-4" role="list">
              {TRUST_ITEMS.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-2 text-[12px] md:text-[13px] text-white/90 font-medium"
                >
                  <iconify-icon icon={item.icon} class="text-sm text-white/90 shrink-0" aria-hidden="true" />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right: stat cards (xl only) ── */}
          <div className="hidden xl:flex self-center flex-col gap-3 w-full">
            <StatCard
              icon="lucide:trending-up"
              label="Meest gekozen"
              value="Zwangerschapsyoga"
              sub="Populairste cursustype in NL"
            />
            <StatCard
              icon="lucide:star"
              label="Gemiddelde beoordeling"
              value="4.8 / 5"
              sub="Gebaseerd op 1.200+ ervaringen"
            />
            <StatCard
              icon="lucide:users"
              label="Actieve aanbieders"
              value="50+"
              sub="In heel Nederland"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Sub-components ─────────────────────────────────────────────────────── */

function SearchRow({ label, node }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/80 border border-black/[0.06]">
      <div className="flex flex-col min-w-0 flex-1">
        <span className="text-[10px] font-bold text-foreground/50 uppercase tracking-widest mb-0.5">
          {label}
        </span>
        {node}
      </div>
    </div>
  );
}

function SelectRow({ label, displayValue, hasValue, icon, select }) {
  return (
    <div className="relative flex items-center gap-3 px-4 py-3 rounded-xl bg-white/80 border border-black/[0.06]">
      <div className="flex flex-col min-w-0 flex-1">
        <span className="text-[10px] font-bold text-foreground/50 uppercase tracking-widest mb-0.5">
          {label}
        </span>
        <span className={`text-sm truncate ${hasValue ? 'text-foreground' : 'text-muted-foreground'}`}>
          {displayValue}
        </span>
      </div>
      <iconify-icon icon={icon} class="text-base text-muted-foreground shrink-0" aria-hidden="true" />
      {select}
    </div>
  );
}

function PillSegment({ label, children, divider = false, relative = false }) {
  return (
    <div className={`flex-1 flex flex-col justify-center px-5 py-3.5 min-w-0 gap-0.5
      ${divider ? 'border-r border-white/15' : ''}
      ${relative ? 'relative' : ''}
    `}>
      <span className="text-[10px] font-bold text-white/65 uppercase tracking-widest">
        {label}
      </span>
      <div className="flex items-center gap-2 min-w-0">
        {children}
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, sub }) {
  return (
    <div className="flex items-center gap-4 px-5 py-4 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl">
      <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
        <iconify-icon icon={icon} class="text-base text-white" aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-semibold text-white/60 uppercase tracking-widest truncate">
          {label}
        </p>
        <p className="text-[17px] font-bold text-white leading-tight">{value}</p>
        <p className="text-[11px] text-white/65 leading-snug mt-0.5">{sub}</p>
      </div>
    </div>
  );
}