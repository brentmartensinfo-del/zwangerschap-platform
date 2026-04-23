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
    </>
  );
}