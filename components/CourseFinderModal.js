'use client';

import { useEffect } from 'react';
import CourseFinder from '@/components/CourseFinder';

export default function CourseFinderModal({ open, onClose }) {
  // Sluit op Escape
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose();
    }
    if (open) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  // Blokkeer body scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end md:items-center md:justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Cursus keuzehulp"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* ── Mobiel: full screen sheet ── */}
      <div className="md:hidden relative z-10 w-full h-[95vh] rounded-t-3xl overflow-y-auto bg-white shadow-[0_-8px_40px_rgba(0,0,0,0.20)]">
        <button
          onClick={onClose}
          aria-label="Keuzehulp sluiten"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/[0.06] flex items-center justify-center hover:bg-black/10 transition-colors"
        >
          <iconify-icon icon="lucide:x" class="text-base text-foreground" aria-hidden="true" />
        </button>
        <CourseFinder hideImage onDone={onClose} />
      </div>

      {/* ── Desktop: centered modal, geen afbeelding ── */}
      <div className="hidden md:block relative z-10 w-full max-w-[720px] max-h-[92vh] overflow-y-auto rounded-3xl shadow-[0_32px_80px_rgba(0,0,0,0.25)] bg-white overflow-hidden">
        <button
          onClick={onClose}
          aria-label="Keuzehulp sluiten"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm border border-black/[0.08] flex items-center justify-center hover:bg-white transition-colors shadow-sm"
        >
          <iconify-icon icon="lucide:x" class="text-base text-foreground" aria-hidden="true" />
        </button>
        <CourseFinder hideImage onDone={onClose} />
      </div>
    </div>
  );
}