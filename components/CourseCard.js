import Link from 'next/link';

export default function CourseCard({
  slug,
  image,
  alt,
  labels,
  title,
  provider,
  rating,
  ratingCount,
  description,
  price,
  featured = false,
}) {
  const isNew = rating === 'Nieuw';

  return (
    <article className="group h-full bg-white border border-black/[0.07] rounded-2xl overflow-hidden flex flex-col shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300">

      {/* ── Image ── */}
      <Link
        href={`/cursussen/${slug}`}
        className="relative block w-full aspect-[4/3] overflow-hidden shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
        tabIndex={-1}
        aria-hidden="true"
      >
        <img
          src={image}
          alt={alt}
          width={400}
          height={300}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.04] group-hover:brightness-[0.97] transition-all duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

        {/* Labels */}
        {labels.length > 0 && (
          <ul className="absolute top-2.5 left-2.5 flex flex-wrap gap-1" role="list">
            {labels.slice(0, 2).map((label) => (
              <li
                key={label}
                className="text-[9px] px-2 py-0.5 bg-white/90 backdrop-blur-sm text-foreground rounded-full font-semibold uppercase tracking-wide shadow-sm"
              >
                {label}
              </li>
            ))}
          </ul>
        )}

        {/* Featured badge */}
        {featured && (
          <div className="absolute top-2.5 right-2.5">
            <span className="flex items-center gap-1 px-2 py-0.5 bg-amber-400/80 text-amber-900 text-[8px] font-bold uppercase tracking-wide rounded-full shadow-sm">
              <iconify-icon icon="lucide:sparkles" class="text-[9px]" aria-hidden="true" />
              FEatured
            </span>
          </div>
        )}

        {/* Rating */}
        <div
          className="absolute bottom-2.5 right-2.5 flex items-center gap-1 px-2 py-1 bg-white/95 backdrop-blur-sm rounded-full shadow-sm"
          aria-label={ratingCount ? `${rating} op basis van ${ratingCount} reviews` : rating}
        >
          {isNew ? (
            <span className="text-[10px] font-bold text-primary uppercase tracking-wide">Nieuw</span>
          ) : (
            <>
              <iconify-icon icon="lucide:star" class="text-yellow-400 text-[10px]" aria-hidden="true" />
              <span className="text-[11px] font-bold text-foreground">{rating}</span>
              {ratingCount && (
                <span className="text-[10px] text-muted-foreground">({ratingCount})</span>
              )}
            </>
          )}
        </div>
      </Link>

      {/* ── Content ── */}
      <div className="p-3.5 flex flex-col flex-1 gap-1.5">

        {/* Provider */}
        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide truncate">
          {provider}
        </p>

        {/* Title */}
        <h3 className="text-[13px] font-bold text-foreground leading-snug line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[12px] text-muted-foreground leading-relaxed line-clamp-2 flex-1">
          {description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2.5 border-t border-black/[0.06] mt-auto gap-2">
          <div className="min-w-0">
            <p className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">
              Prijs
            </p>
            <span className="text-[14px] font-bold text-foreground leading-none">
              {price}
            </span>
          </div>
          <Link
            href={`/cursussen/${slug}`}
            className="shrink-0 flex items-center gap-1 px-3 py-2 bg-primary text-white rounded-lg text-[11px] font-semibold hover:opacity-90 active:scale-[0.97] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            aria-label={`Bekijk ${title}`}
          >
            Bekijk
            <iconify-icon icon="lucide:arrow-right" class="text-[10px]" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}