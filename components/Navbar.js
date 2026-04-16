'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { label: 'Over ons',      href: '/over-ons' },
  { label: 'FAQ',           href: '/faq' },
  { label: 'Aanbieders',    href: '/aanbieders' },
  { label: 'Contact',       href: '/contact' },
];

export default function Navbar() {
  const [activeLang, setActiveLang] = useState('NL');
  const [menuOpen, setMenuOpen]     = useState(false);
  const pathname  = usePathname();
  const menuRef   = useRef(null);
  const buttonRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  // Close on Escape
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') setMenuOpen(false);
    }
    if (menuOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [menuOpen]);

  // Close on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-black/[0.08]">
      <nav aria-label="Hoofdnavigatie">
        <div className="flex items-center justify-between px-6 md:px-12 py-4">

          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0"
            aria-label="Birthly – home"
          >
            <iconify-icon icon="lucide:baby" class="text-[26px] text-primary" aria-hidden="true" />
            <span className="text-lg md:text-xl font-semibold tracking-tight text-foreground">
              Birthly
            </span>
          </Link>

          {/* ── Right: CTA + hamburger ── */}
          <div className="flex items-center gap-3">
            <LanguageSelector activeLang={activeLang} onChange={setActiveLang} />

            <Link
              href="/cursussen"
              className="hidden sm:inline-flex px-4 py-2 rounded-md bg-foreground text-background text-sm font-medium whitespace-nowrap hover:opacity-90 transition-opacity"
            >
              Alle cursussen
            </Link>

            <button
              ref={buttonRef}
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="nav-menu"
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

        {/* ── Dropdown menu ── */}
        {menuOpen && (
          <div
            id="nav-menu"
            ref={menuRef}
            className="absolute top-full right-4 md:right-10 w-[calc(100%-2rem)] sm:w-[320px] bg-background border border-black/[0.08] rounded-xl shadow-[0_16px_48px_rgba(0,0,0,0.10)] overflow-hidden z-50"
          >
            <ul className="flex flex-col p-2" role="list">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-muted ${
                        isActive ? 'text-foreground bg-muted' : 'text-muted-foreground'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                      )}
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* CTA in menu — visible on mobile only */}
            <div className="sm:hidden px-3 pb-3">
              <Link
                href="/cursussen"
                className="block w-full text-center px-4 py-2.5 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Alle cursussen
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

/* ── LanguageSelector ─────────────────────────────────────────────────────── */
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