import Hero from '@/components/Hero';
import CategoriesRow from '@/components/CategoriesRow';
import { PopularCourses, NewCourses } from '@/components/CourseSections';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CourseCategories from '@/components/CourseCategories';
import { getPopularCourses, getNewCourses } from '@/lib/courses';

export default async function HomePage() {
  const [popularCourses, newCourses] = await Promise.all([
    getPopularCourses(),
    getNewCourses(),
  ]);

  return (
    <main>
      <Hero />
      <CategoriesRow />
      <PopularCourses courses={popularCourses} />
      <NewCourses courses={newCourses} />
      <Testimonials />
      <CourseCategories />
      <FAQ />
    </main>
  );
}