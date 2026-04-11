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
}) {
  return (
    <article className="bg-white border border-black/[0.08] rounded-xl overflow-hidden flex flex-col shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.07)] transition-shadow">

      {/* Image */}
      <div className="w-full aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={alt}
          width={400}
          height={300}
          loading="lazy"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-4 md:p-5 flex flex-col flex-1">

        {/* Labels */}
        <ul className="flex flex-wrap gap-1.5 mb-3" role="list" aria-label="Cursus kenmerken">
          {labels.map((label) => (
            <li
              key={label}
              className="text-[11px] px-2 py-1 bg-secondary text-secondary-foreground rounded font-medium uppercase tracking-wide"
            >
              {label}
            </li>
          ))}
        </ul>

        <h3 className="text-sm md:text-base font-semibold leading-snug mb-1.5 text-foreground">
          {title}
        </h3>

        <p className="text-[13px] text-muted-foreground mb-2.5">{provider}</p>

        {/* Rating */}
        <div
          className="flex items-center gap-1 text-[13px] font-medium mb-3.5 text-foreground"
          aria-label={ratingCount ? `Beoordeling: ${rating} op basis van ${ratingCount} reviews` : rating}
        >
          {rating !== 'Nieuw' && (
            <iconify-icon icon="lucide:star" class="text-sm text-foreground" aria-hidden="true" />
          )}
          <span>{rating}</span>
          {ratingCount && (
            <span className="text-muted-foreground font-normal" aria-hidden="true">
              ({ratingCount})
            </span>
          )}
        </div>

        <p className="text-[13px] text-muted-foreground leading-relaxed line-clamp-2 mb-5 md:mb-6 flex-1">
          {description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-black/[0.06] mt-auto">
          <span className="text-base md:text-lg font-semibold text-foreground">
            {price}
          </span>
          <Link
            href={`/cursussen/${slug}`}
            className="px-3 md:px-4 py-2 bg-primary text-white rounded-md text-[13px] font-medium hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            aria-label={`Bekijk cursus: ${title}`}
          >
            Bekijk cursus
          </Link>
        </div>
      </div>
    </article>
  );
}