import Link from 'next/link';

const TESTIMONIALS = [
  {
    quote:
      'Via Birthly vond ik precies de hypnobirthing cursus die ik zocht. Het overzicht was super helder en ik kon de prijzen goed vergelijken. De cursus zelf was een fantastische ervaring!',
    name: 'Sanne (29)',
    context: 'Volgde Hypnobirthing in Utrecht',
    avatar:
      'https://storage.googleapis.com/banani-avatars/avatar%2Ffemale%2F25-35%2FEuropean%2F1',
    rating: 5,
  },
  {
    quote:
      'Mijn partner en ik zagen door de bomen het bos niet meer. Birthly bracht daar verandering in. Binnen vijf minuten hadden we een weekendcursus geboekt die perfect bij ons paste.',
    name: 'Mark (32)',
    context: 'Volgde Intensieve Bevalcursus',
    avatar:
      'https://storage.googleapis.com/banani-avatars/avatar%2Fmale%2F25-35%2FEuropean%2F2',
    rating: 5,
  },
  {
    quote:
      'De zwangerschapsyoga die ik vond via dit platform was heerlijk. Het was dichtbij, betaalbaar en precies wat ik nodig had om even tot rust te komen in mijn drukke week.',
    name: 'Aisha (31)',
    context: 'Volgde Zwangerschapsyoga in Amsterdam',
    avatar:
      'https://storage.googleapis.com/banani-avatars/avatar%2Ffemale%2F25-35%2FAfrican%2F1',
    rating: 5,
  },
];

export default function Testimonials() {
  const [featured, ...rest] = TESTIMONIALS;

  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-8 md:px-12"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-[1100px] mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-14">
          <div>
            <p className="text-[12px] font-semibold text-primary uppercase tracking-widest mb-3">
              Ervaringen
            </p>
            <h2
              id="testimonials-heading"
              className="text-3xl md:text-[38px] font-bold text-foreground tracking-tight leading-tight"
            >
              Waarom ouders
              <br className="hidden sm:block" />
              Birthly gebruiken
            </h2>
          </div>
          <div className="flex items-center gap-3 md:pb-1">
            <div className="flex -space-x-2">
              {TESTIMONIALS.map((t) => (
                <img
                  key={t.name}
                  src={t.avatar}
                  alt=""
                  aria-hidden="true"
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-background"
                  width={32}
                  height={32}
                />
              ))}
            </div>
            <div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <iconify-icon key={i} icon="lucide:star" class="text-yellow-400 text-xs" aria-hidden="true" />
                ))}
              </div>
              <p className="text-[12px] text-muted-foreground mt-0.5">
                4.8 · 1.200+ ouders
              </p>
            </div>
          </div>
        </div>

        {/* ── Layout: featured + two smaller ── */}
        <ul
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          role="list"
          aria-label="Klantervaringen"
        >
          {/* Featured testimonial */}
          <li className="md:row-span-2">
            <figure className="h-full flex flex-col bg-white border border-black/[0.07] rounded-2xl p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-shadow duration-300">

              {/* Stars */}
              <div className="flex gap-0.5 mb-6">
                {Array.from({ length: featured.rating }).map((_, i) => (
                  <iconify-icon key={i} icon="lucide:star" class="text-yellow-400 text-base" aria-hidden="true" />
                ))}
              </div>

              {/* Decorative quote mark */}
              <span
                className="text-[80px] font-black text-primary/8 leading-none select-none mb-2 -mt-4"
                aria-hidden="true"
              >
                "
              </span>

              {/* Quote */}
              <blockquote className="flex-1">
                <p className="text-[17px] md:text-[18px] text-foreground font-medium leading-[1.65]">
                  {featured.quote}
                </p>
              </blockquote>

              {/* Identity */}
              <figcaption className="flex items-center gap-4 mt-8 pt-7 border-t border-black/[0.06]">
                <img
                  src={featured.avatar}
                  alt={`Foto van ${featured.name}`}
                  width={52}
                  height={52}
                  loading="lazy"
                  className="w-13 h-13 rounded-full object-cover ring-2 ring-white shadow-sm shrink-0"
                  style={{ width: 52, height: 52 }}
                />
                <div>
                  <p className="text-[15px] font-bold text-foreground">{featured.name}</p>
                  <p className="text-[13px] text-muted-foreground mt-0.5">{featured.context}</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5 text-[11px] font-semibold text-primary bg-primary/8 px-2.5 py-1 rounded-full shrink-0">
                  <iconify-icon icon="lucide:badge-check" class="text-sm" aria-hidden="true" />
                  Geverifieerd
                </div>
              </figcaption>
            </figure>
          </li>

          {/* Smaller testimonials */}
          {rest.map((t) => (
            <li key={t.name}>
              <figure className="flex flex-col bg-white border border-black/[0.07] rounded-2xl p-6 md:p-7 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.07)] transition-shadow duration-300 h-full">

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <iconify-icon key={i} icon="lucide:star" class="text-yellow-400 text-sm" aria-hidden="true" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="flex-1 mb-6">
                  <p className="text-[14px] md:text-[15px] text-foreground leading-relaxed">
                    "{t.quote}"
                  </p>
                </blockquote>

                {/* Identity */}
                <figcaption className="flex items-center gap-3 pt-5 border-t border-black/[0.06]">
                  <img
                    src={t.avatar}
                    alt={`Foto van ${t.name}`}
                    width={44}
                    height={44}
                    loading="lazy"
                    className="rounded-full object-cover ring-2 ring-white shadow-sm shrink-0"
                    style={{ width: 44, height: 44 }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-foreground">{t.name}</p>
                    <p className="text-[12px] text-muted-foreground mt-0.5 truncate">{t.context}</p>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-primary bg-primary/8 px-2 py-1 rounded-full shrink-0">
                    <iconify-icon icon="lucide:badge-check" class="text-sm" aria-hidden="true" />
                    Geverifieerd
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        {/* ── CTA ── */}
        <div className="mt-10 text-center">
          <Link
            href="/cursussen"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-black/[0.08] text-foreground text-sm font-semibold rounded-xl hover:shadow-md transition-all"
          >
            Ontdek wat bij jou past
            <iconify-icon icon="lucide:arrow-right" class="text-base" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}