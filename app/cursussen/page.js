import { Suspense } from 'react';
import Link from 'next/link';
import Filters from '@/components/Filters';
import ResultsBar from '@/components/ResultsBar';
import CourseList from '@/components/CourseList';
import Pagination from '@/components/Pagination';
import { getAllCourses, getFilterOptions } from '@/lib/courses';

const PAGE_SIZE = 12;

export default async function CursussenPage({ searchParams }) {
  const { type, city, language, q, price, sort, page } = await searchParams;

  const currentPage = Math.max(1, parseInt(page ?? '1', 10));

  const [allFiltered, filterOptions] = await Promise.all([
    getAllCourses({ type, city, language, q, price, sort }),
    getFilterOptions(),
  ]);

  const totalPages = Math.ceil(allFiltered.length / PAGE_SIZE);
  const start      = (currentPage - 1) * PAGE_SIZE;
  const courses    = allFiltered.slice(start, start + PAGE_SIZE);

  const locationLabel     = city  ? ` in ${city}` : '';
  const typeLabel         = type  ?? 'Zwangerschapscursussen';
  const pageTitle         = `${typeLabel}${locationLabel}`;
  const hasFilters        = !!(type || city || language || q || price);
  const activeFilterCount = [type, city, language, q, price].filter(Boolean).length;

  return (
    <main className="flex-1 pt-[0px] lg:pt-[0px]">

        {/* ── Page header ── */}
        <div className="border-b border-black/[0.06] bg-background">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 py-4 md:py-5">

            {/* Breadcrumb */}
            <nav aria-label="Kruimelpad" className="flex items-center gap-2 text-[13px] text-muted-foreground mb-2">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <iconify-icon icon="lucide:chevron-right" class="text-xs" aria-hidden="true" />
              <span className="text-foreground font-medium">{typeLabel}</span>
            </nav>

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
              {/* Left: title + count */}
              <div>
                <h1 className="text-2xl md:text-[30px] font-bold text-foreground tracking-tight mb-1.5">
                  {pageTitle}
                </h1>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{allFiltered.length}</span>
                  {' '}{allFiltered.length === 1 ? 'cursus' : 'cursussen'} gevonden
                  {locationLabel}
                  {hasFilters && (
                    <Link
                      href="/cursussen"
                      className="hidden sm:inline ml-3 text-primary hover:opacity-75 transition-opacity"
                    >
                      Wis filters
                    </Link>
                  )}
                </p>
              </div>

              {/* Right: trust items + sort */}
              <div className="hidden md:flex flex-col items-end gap-2 shrink-0">
                <div className="flex items-center gap-5 text-[13px] text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <iconify-icon icon="lucide:shield-check" class="text-primary text-sm" aria-hidden="true" />
                    Geverifieerde aanbieders
                  </span>
                  <span className="w-px h-4 bg-black/[0.08]" aria-hidden="true" />
                  <span className="flex items-center gap-1.5">
                    <iconify-icon icon="lucide:star" class="text-primary text-sm" aria-hidden="true" />
                    4.8 gemiddeld
                  </span>
                </div>
                {/* Sort dropdown directly below trust items */}
                <Suspense fallback={null}>
                  <ResultsBar total={allFiltered.length} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>

        {/* ── Main layout ── */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 py-6 md:py-8 pb-24">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">

            {/* ── Filters sidebar ── */}
            <Suspense fallback={<FiltersSkeleton />}>
              {/* Mobile: compact button */}
              <div className="lg:hidden w-full">
                <Filters filterOptions={filterOptions} activeFilterCount={activeFilterCount} total={allFiltered.length} />
              </div>

              {/* Desktop: full sidebar card */}
              <aside className="hidden lg:block w-[268px] shrink-0 sticky top-[89px]">
                <div className="bg-white border border-black/[0.07] rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                  <div className="px-5 py-4 border-b border-black/[0.06] flex items-center justify-between">
                    <h2 className="text-[14px] font-bold text-foreground">Filters</h2>
                    {hasFilters ? (
                      <Link
                        href="/cursussen"
                        className="text-[12px] text-primary font-medium hover:opacity-75 transition-opacity"
                      >
                        Alles wissen
                      </Link>
                    ) : (
                      <span className="text-[12px] text-muted-foreground">
                        Geen geselecteerd
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <Filters filterOptions={filterOptions} activeFilterCount={activeFilterCount} total={allFiltered.length} />
                  </div>
                </div>
              </aside>
            </Suspense>

            {/* ── Results ── */}
            <div className="flex-1 flex flex-col gap-5 min-w-0">

              {/* Mobile: ResultsBar (sort only) */}
              <div className="md:hidden">
                <Suspense fallback={null}>
                  <ResultsBar total={allFiltered.length} />
                </Suspense>
              </div>

              {/* Course grid */}
              {courses.length > 0 ? (
                <CourseList courses={courses} />
              ) : (
                <EmptyState hasFilters={hasFilters} />
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <Suspense fallback={null}>
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                  />
                </Suspense>
              )}
            </div>
          </div>
        </div>
      </main>
  );
}

/* ── Metadata ────────────────────────────────────────────────────────────── */
export async function generateMetadata({ searchParams }) {
  const { type, city } = await searchParams;
  const location = city ? ` in ${city}` : '';
  const title = `${type ?? 'Zwangerschapscursussen'}${location} | Lumi Cursussen`;
  return {
    title,
    description: `Vergelijk en vind de beste zwangerschapscursussen${location}. Onafhankelijk platform, direct contact met de aanbieder.`,
  };
}

/* ── Empty state ─────────────────────────────────────────────────────────── */
function EmptyState({ hasFilters }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-6 bg-white border border-black/[0.07] rounded-2xl">
      <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-5">
        <iconify-icon icon="lucide:search-x" class="text-2xl text-muted-foreground" aria-hidden="true" />
      </div>
      <h3 className="text-[17px] font-bold text-foreground mb-2">
        Geen cursussen gevonden
      </h3>
      <p className="text-sm text-muted-foreground max-w-[340px] leading-relaxed mb-7">
        {hasFilters
          ? 'Je huidige filters geven geen resultaten. Probeer minder filters te gebruiken of een andere combinatie.'
          : 'Er zijn momenteel geen cursussen beschikbaar. Kom later terug.'}
      </p>
      {hasFilters && (
        <Link
          href="/cursussen"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity"
        >
          <iconify-icon icon="lucide:x" class="text-sm" aria-hidden="true" />
          Wis alle filters
        </Link>
      )}
    </div>
  );
}

/* ── Filters skeleton ────────────────────────────────────────────────────── */
function FiltersSkeleton() {
  return (
    <div
      className="w-full lg:w-[268px] shrink-0 bg-white border border-black/[0.07] rounded-2xl overflow-hidden animate-pulse"
      aria-hidden="true"
    >
      <div className="px-5 py-4 border-b border-black/[0.06]">
        <div className="h-4 w-16 bg-muted rounded" />
      </div>
      <div className="p-5 flex flex-col gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col gap-3">
            <div className="h-3 w-20 bg-muted rounded" />
            <div className="h-9 w-full bg-muted rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}