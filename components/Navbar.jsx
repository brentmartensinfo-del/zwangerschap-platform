'use client';

import { useState } from 'react';

const NAV_LINKS = ['Over ons', 'Hoe werkt het', 'Aanbieders', 'Contact'];

export default function Navbar() {
  const [activeLang, setActiveLang] = useState('NL');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav
        aria-label="Hoofdnavigatie"
        className="sticky top-0 z-50 bg-background border-b border-black/[0.08]"
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-4">
          {/* ── Logo ── */}
          <a href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Lumi Cursussen – home">
            <iconify-icon icon="lucide:baby" class="text-[26px] text-primary" aria-hidden="true" />
            <span className="text-lg md:text-xl font-semibold tracking-tight text-foreground">
              GeboorteHub
            </span>
          </a>

          {/* ── Desktop nav links ── */}
          <ul className="hidden lg:flex items-center gap-8" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* ── Desktop actions ── */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSelector activeLang={activeLang} onChange={setActiveLang} />
            <a
              href="/cursussen"
              className="px-4 py-2 rounded-md bg-foreground text-background text-sm font-medium whitespace-nowrap hover:opacity-90 transition-opacity"
            >
              Alle cursussen
            </a>
          </div>

          {/* ── Mobile: lang + hamburger ── */}
          <div className="flex lg:hidden items-center gap-3">
            <LanguageSelector activeLang={activeLang} onChange={setActiveLang} />
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Menu sluiten' : 'Menu openen'}
              className="p-2 rounded-md hover:bg-muted transition-colors"
            >
              <iconify-icon
                icon={menuOpen ? 'lucide:x' : 'lucide:menu'}
                class="text-xl text-foreground"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        {/* ── Mobile dropdown menu ── */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden border-t border-black/[0.08] bg-background px-6 pb-6"
          >
            <ul className="flex flex-col gap-1 pt-4" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    onClick={() => setMenuOpen(false)}
                    className="block py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-4 block w-full text-center px-4 py-2.5 rounded-md bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Alle cursussen
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

function LanguageSelector({ activeLang, onChange }) {
  return (
    <div
      role="group"
      aria-label="Taal kiezen"
      className="flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-white border border-black/[0.08]"
    >
      {['NL', 'EN'].map((lang, i) => (
        <span key={lang} className="flex items-center gap-1">
          {i > 0 && (
            <span className="text-xs text-muted-foreground select-none" aria-hidden="true">
              /
            </span>
          )}
          <button
            onClick={() => onChange(lang)}
            aria-pressed={activeLang === lang}
            className={`text-[13px] font-medium transition-colors px-0.5 ${
              activeLang === lang ? 'text-foreground' : 'text-muted-foreground'
            }`}
          >
            {lang}
          </button>
        </span>
      ))}
    </div>
  );
}