  import CourseCard from './CourseCard';

  /**
   * CourseList — Server Component
   * Rendert een responsive grid van CourseCards.
   * Ontvangt gefilterde + gepagineerde cursussen van page.js.
   *
   * @param {{ courses: import('@/lib/Courses').Course[] }} props
   */
  export default function CourseList({ courses }) {
    if (courses.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <iconify-icon
            icon="lucide:search-x"
            class="text-5xl text-muted-foreground mb-4"
            aria-hidden="true"
          />
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Geen cursussen gevonden
          </h3>
          <p className="text-sm text-muted-foreground max-w-sm">
            Probeer andere filters of verwijder je huidige selectie om meer
            resultaten te zien.
          </p>
        </div>
      );
    }

    return (
      <ul
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6"
        role="list"
        aria-label="Cursusresultaten"
      >
        {courses.map((course) => (
          <li key={course.slug}>
            <CourseCard {...course} />
          </li>
        ))}
      </ul>
    );
  }