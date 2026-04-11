import CourseCard from './CourseCard';

/**
 * Gedeelde sectie-header met titel en "Bekijk alles" link.
 * @param {{ title: string, id: string }} props
 */
function SectionHeader({ title, id }) {
  return (
    <div className="px-4 sm:px-8 md:px-12 pb-5 md:pb-6 flex justify-between items-end">
      <h2 id={id} className="text-xl md:text-2xl font-semibold text-foreground">
        {title}
      </h2>
      <a
        href="/cursussen"
        className="text-sm font-medium text-primary flex items-center gap-1 hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded"
        aria-label={`Bekijk alle ${title.toLowerCase()}`}
      >
        Bekijk alles
        <iconify-icon icon="lucide:arrow-right" class="text-base" aria-hidden="true" />
      </a>
    </div>
  );
}

/**
 * Responsive cursussen-grid.
 *  mobiel  → 1 kolom
 *  sm      → 2 kolommen
 *  lg      → 3 kolommen
 *  xl      → 4 kolommen
 *
 * @param {{ courses: import('@/lib/Courses').Course[] }} props
 */
function CourseGrid({ courses }) {
  return (
    <ul
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 px-4 sm:px-8 md:px-12"
      role="list"
    >
      {courses.map((course) => (
        <li key={course.slug}>
          <CourseCard {...course} />
        </li>
      ))}
    </ul>
  );
}

/**
 * @param {{ courses: import('@/lib/Courses').Course[] }} props
 */
export function PopularCourses({ courses }) {
  return (
    <section className="py-8 md:py-10" aria-labelledby="popular-heading">
      <SectionHeader title="Populaire cursussen" id="popular-heading" />
      <CourseGrid courses={courses} />
    </section>
  );
}

/**
 * @param {{ courses: import('@/lib/Courses').Course[] }} props
 */
export function NewCourses({ courses }) {
  return (
    <section className="py-8 md:py-10" aria-labelledby="new-heading">
      <SectionHeader title="Nieuw toegevoegd" id="new-heading" />
      <CourseGrid courses={courses} />
    </section>
  );
}