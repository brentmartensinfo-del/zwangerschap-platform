import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseFinder from '@/components/CourseFinder';

export const metadata = {
  title: 'Cursus Finder | Birthly',
  description: 'Beantwoord 5 korte vragen en ontdek welke zwangerschapscursus het beste bij jou past.',
};

export default function CourseFinderPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 min-h-screen">
        <CourseFinder />
      </main>
      <Footer />
    </>
  );
}