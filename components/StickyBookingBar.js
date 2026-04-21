'use client';

import { useState, useEffect } from 'react';

export default function StickyBookingBar({ price, bookingUrl, title }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const sentinel = document.getElementById('booking-card-sentinel');
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-black/[0.08] px-4 py-3 flex items-center justify-between gap-3 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
      <div className="min-w-0">
        <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">Prijs</p>
        <p className="text-[17px] font-bold text-foreground leading-none">{price}</p>
      </div>
      {bookingUrl ? (
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-xl text-sm font-semibold hover:opacity-90 active:scale-[0.98] transition-all"
          aria-label={`Boek ${title}`}
        >
          Boek deze cursus
          <iconify-icon icon="lucide:arrow-up-right" class="text-base" aria-hidden="true" />
        </a>
      ) : (
        <button disabled className="shrink-0 px-5 py-3 bg-muted text-muted-foreground rounded-xl text-sm font-semibold cursor-not-allowed">
          Niet beschikbaar
        </button>
      )}
    </div>
  );
}