import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Filters from '@/components/Filters';
import ResultsBar from '@/components/ResultsBar';
import CourseList from '@/components/CourseList';
import Pagination from '@/components/Pagination';
import { getAllCourses, getFilterOptions } from '@/lib/Courses';

/** Aantal cursussen per pagina */
const PAGE_SIZE = 9 ;

/**
 * /cursussen — Server Component
 *
 * searchParams die worden ondersteund:
 *   ?type=Zwangerschapsyoga
 *   ?city=Amsterdam
 *   ?language=Nederlands
 *   ?sort=beoordeling | prijs-laag | prijs-hoog | aanbevolen
 *   ?page=2
 *
 * Alle filtering en paginering gebeurt server-side via lib/courses.js.
 * Client Components (Filters, ResultsBar, Pagination) schrijven alleen
 * terug naar de URL — de pagina herlaadt en de server doet de rest.
 */
export default async function CursussenPage({ searchParams }) {
  const { type, city, language, q, price, sort, page } = await searchParams;

  const currentPage = Math.max(1, parseInt(page ?? '1', 10));

  // Fetch data parallel
  const [allFiltered, filterOptions] = await Promise.all([
    getAllCourses({ type, city, language, q, price, sort }),
    getFilterOptions(),
  ]);

  // Paginering
  const totalPages = Math.ceil(allFiltered.length / PAGE_SIZE);
  const start = (currentPage - 1) * PAGE_SIZE;
  const courses = allFiltered.slice(start, start + PAGE_SIZE);

  // Paginatitel
  const locationLabel = city ? ` in ${city}` : '';
  const typeLabel     = type ?? 'Zwangerschapscursussen';
  const pageTitle     = `${typeLabel}${locationLabel}`;

  return (
    <>
      <Navbar />

      <main className="flex-1">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 py-10 md:py-14 pb-20">

          {/* ── Pagina-header ── */}
          <header className="mb-8">
            <h1 className="text-2xl md:text-[32px] font-semibold text-foreground tracking-tight mb-2">
              {pageTitle}
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              {allFiltered.length}{' '}
              {allFiltered.length === 1 ? 'resultaat' : 'resultaten'} gevonden
              {locationLabel}
            </p>
          </header>

          <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-start">

            {/* ── Filters sidebar ──
                Suspense is nodig omdat Filters useSearchParams() aanroept */}
            <Suspense fallback={<FiltersSkeleton />}>
              <Filters filterOptions={filterOptions} />
            </Suspense>

            {/* ── Resultaten ── */}
            <div className="flex-1 flex flex-col gap-6 min-w-0">

              {/* Active chips + sortering */}
              <Suspense fallback={null}>
                <ResultsBar total={allFiltered.length} />
              </Suspense>

              {/* Cursuskaarten grid */}
              <CourseList courses={courses} />

              {/* Paginering */}
              <Suspense fallback={null}>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

/* ── Metadata ──────────────────────────────────────────────────────────────── */
export async function generateMetadata({ searchParams }) {
  const { type, city } = await searchParams;
  const location = city ? ` in ${city}` : '';
  const title = `${type ?? 'Zwangerschapscursussen'}${location} | Lumi Cursussen`;
  return {
    title,
    description: `Vergelijk en vind de beste zwangerschapscursussen${location}. Onafhankelijk platform, direct contact met de aanbieder.`,
  };
}

/* ── Skeleton voor de filters terwijl Suspense laadt ───────────────────────── */
function FiltersSkeleton() {
  return (
    <div
      className="w-full md:w-[280px] shrink-0 flex flex-col gap-6 animate-pulse"
      aria-hidden="true"
    >
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex flex-col gap-3 pb-6 border-b border-black/[0.06]">
          <div className="h-4 w-24 bg-muted rounded" />
          <div className="h-10 w-full bg-muted rounded-md" />
        </div>
      ))}
    </div>
  );
}