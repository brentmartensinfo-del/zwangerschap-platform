'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseFinderModal from '@/components/CourseFinderModal';

export default function RootLayout({ children }) {
  const [finderOpen, setFinderOpen] = useState(false);

  return (
    <>
      <Navbar onOpenFinder={() => setFinderOpen(true)} />
      <CourseFinderModal open={finderOpen} onClose={() => setFinderOpen(false)} />
      {children}
      <Footer />

      {/* ── Floating keuzehulp knop — mobiel only ── */}
      {!finderOpen && (
        <button
          onClick={() => setFinderOpen(true)}
          aria-label="Start keuzehulp"
          className="md:hidden fixed bottom-5 right-4 z-40 flex items-center gap-2 px-4 py-3 bg-primary text-white text-sm font-semibold rounded-full shadow-[0_4px_20px_rgba(122,166,122,0.4)] hover:opacity-90 active:scale-[0.97] transition-all"
        >
          <iconify-icon icon="lucide:sparkles" class="text-base" aria-hidden="true" />
          Keuzehulp
        </button>
      )}
    </>
  );
}