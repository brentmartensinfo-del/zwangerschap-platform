'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

/**
 * Pagination
 * Schrijft ?page=N naar de URL. De Server Component pakt dit op
 * en geeft de juiste slice data door aan CourseList.
 *
 * @param {{ currentPage: number, totalPages: number }} props
 */
export default function Pagination({ currentPage, totalPages }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const goTo = useCallback(
    (page) => {
      const params = new URLSearchParams(searchParams.toString());
      if (page === 1) {
        params.delete('page');
      } else {
        params.set('page', String(page));
      }
      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams],
  );

  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      className="flex justify-center gap-2 mt-12"
      aria-label="Paginering"
    >
      {/* Vorige */}
      <PageButton
        onClick={() => goTo(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Vorige pagina"
      >
        <iconify-icon icon="lucide:chevron-left" class="text-base" aria-hidden="true" />
      </PageButton>

      {/* Pagina nummers */}
      {pages.map((page) => (
        <PageButton
          key={page}
          onClick={() => goTo(page)}
          active={page === currentPage}
          aria-label={`Pagina ${page}`}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </PageButton>
      ))}

      {/* Volgende */}
      <PageButton
        onClick={() => goTo(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Volgende pagina"
      >
        <iconify-icon icon="lucide:chevron-right" class="text-base" aria-hidden="true" />
      </PageButton>
    </nav>
  );
}

function PageButton({ children, onClick, active, disabled, ...props }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={[
        'w-10 h-10 flex items-center justify-center rounded-md border text-sm font-medium transition-colors',
        active
          ? 'bg-foreground text-background border-foreground'
          : 'bg-white border-black/[0.08] text-foreground hover:border-black/20',
        disabled && 'opacity-40 cursor-not-allowed pointer-events-none',
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </button>
  );
}