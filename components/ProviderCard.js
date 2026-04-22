import Link from 'next/link';

export default function ProviderCard({
  slug,
  name,
  tagline,
  location,
  type,
  rating,
  reviewCount,
  since,
  avatar,
  hero,
  highlights = [],
}) {
  return (
    <article className="group h-full bg-white border border-black/[0.07] rounded-2xl overflow-hidden flex flex-col shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300">

      {/* ── Hero image ── */}
      <Link
        href={`/aanbieders/${slug}`}
        className="relative block w-full aspect-[16/9] overflow-hidden shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
        tabIndex={-1}
        aria-hidden="true"
      >
        <img
          src={hero}
          alt={`${name} — ${tagline}`}
          className="w-full h-full object-cover group-hover:scale-[1.04] group-hover:brightness-[0.97] transition-all duration-500 ease-out"
          loading="lazy"
          width={600}
          height={338}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Type badge */}
        <div className="absolute top-3 left-3">
          <span className="text-[9px] px-2 py-1 bg-white/90 backdrop-blur-sm text-foreground rounded-full font-semibold uppercase tracking-wide shadow-sm">
            {type}
          </span>
        </div>

        {/* Rating */}
        <div
          className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 bg-white/95 backdrop-blur-sm rounded-full shadow-sm"
          aria-label={`${rating} op basis van ${reviewCount} reviews`}
        >
          <iconify-icon icon="lucide:star" class="text-yellow-400 text-[10px]" aria-hidden="true" />
          <span className="text-[11px] font-bold text-foreground">{rating}</span>
          <span className="text-[10px] text-muted-foreground">({reviewCount})</span>
        </div>
      </Link>

      {/* ── Content ── */}
      <div className="p-5 flex flex-col flex-1 gap-3">

        {/* Avatar + name */}
        <div className="flex items-center gap-3">
          <img
            src={avatar}
            alt={name}
            className="w-10 h-10 rounded-xl object-cover border border-black/[0.07] shrink-0"
            width={40}
            height={40}
            loading="lazy"
          />
          <div className="min-w-0">
            <h3 className="text-[14px] font-bold text-foreground leading-snug truncate">
              {name}
            </h3>
            <p className="text-[11px] text-muted-foreground truncate flex items-center gap-1">
              <iconify-icon icon="lucide:map-pin" class="text-[10px] shrink-0" aria-hidden="true" />
              {location}
            </p>
          </div>
          <span className="ml-auto text-[11px] text-muted-foreground shrink-0">
            Sinds {since}
          </span>
        </div>

        {/* Tagline */}
        <p className="text-[13px] text-muted-foreground leading-relaxed line-clamp-2 flex-1">
          {tagline}
        </p>

        {/* Highlights */}
        {highlights.length > 0 && (
          <ul className="flex flex-col gap-1.5" role="list">
            {highlights.slice(0, 3).map((h) => (
              <li key={h.label} className="flex items-center gap-2 text-[12px] text-foreground">
                <iconify-icon icon={h.icon} class="text-primary text-sm shrink-0" aria-hidden="true" />
                <span className="truncate">{h.label}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-black/[0.06] mt-auto">
          <span className="text-[12px] text-muted-foreground">
            {reviewCount} reviews
          </span>
          <Link
            href={`/aanbieders/${slug}`}
            className="flex items-center gap-1 px-3 py-2 bg-primary text-white rounded-lg text-[12px] font-semibold hover:opacity-90 active:scale-[0.97] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            aria-label={`Bekijk ${name}`}
          >
            Bekijk profiel
            <iconify-icon icon="lucide:arrow-right" class="text-xs" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}   