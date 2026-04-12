import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategoriesRow from '@/components/CategoriesRow';
import { PopularCourses, NewCourses } from '@/components/CourseSections';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { getPopularCourses, getNewCourses } from '@/lib/courses';

/**
 * Server Component: fetcht cursusdata en geeft die als props door.
 * Swap getPopularCourses / getNewCourses in lib/courses.js voor
 * een echte database- of API-aanroep — deze pagina hoeft nooit te veranderen.
 */
export default async function HomePage() {
  const [popularCourses, newCourses] = await Promise.all([
    getPopularCourses(),
    getNewCourses(),
  ]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CategoriesRow />
        <PopularCourses courses={popularCourses} />
        <NewCourses courses={newCourses} />
        <HowItWorks />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}