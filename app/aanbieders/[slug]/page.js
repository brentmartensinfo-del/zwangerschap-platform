import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getProviderBySlug, getAllProviders } from '@/lib/providers';
import { getAllCourses } from '@/lib/courses';

/* ── Static params ───────────────────────────────────────────────────────── */
export async function generateStaticParams() {
  const providers = await getAllProviders();
  return providers.map((p) => ({ slug: p.slug }));
}

/* ── Metadata ────────────────────────────────────────────────────────────── */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const provider = await getProviderBySlug(slug);
  if (!provider) return {};
  return {
    title: `${provider.name} | Lumi Cursussen`,
    description: `${provider.tagline}. Bekijk het aanbod en neem direct contact op.`,
  };
}

/* ── Page ────────────────────────────────────────────────────────────────── */
export default async function ProviderPage({ params }) {
  const { slug } = await params;

  const [provider, allCourses] = await Promise.all([
    getProviderBySlug(slug),
    getAllCourses(),
  ]);

  if (!provider) notFound();

  // Haal cursussen op die bij deze aanbieder horen
  const courses = allCourses.filter((c) => c.providerSlug === slug);

  return (
    <>
      <Navbar />

      <main className="flex-1 pt-[65px]">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="relative w-full h-[400px] md:h-[480px] overflow-hidden">
          <img
            src={provider.hero}
            alt={`${provider.name} — ${provider.tagline}`}
            className="w-full h-full object-cover"
            width={1440}
            height={480}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 md:px-16 pb-10 md:pb-14">
            <div className="max-w-[900px]">
              <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-white/80 uppercase tracking-widest mb-3">
                <iconify-icon icon="lucide:map-pin" class="text-primary" aria-hidden="true" />
                {provider.location}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
                {provider.name}
              </h1>
              <p className="text-base md:text-lg text-white/80 max-w-[560px]">
                {provider.tagline}
              </p>
              <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full border border-white/20">
                <iconify-icon icon="lucide:star" class="text-yellow-400 text-sm" aria-hidden="true" />
                <span className="text-white text-sm font-semibold">{provider.rating}</span>
                <span className="text-white/60 text-sm">({provider.reviewCount} reviews)</span>
                <span className="w-px h-3 bg-white/20" aria-hidden="true" />
                <span className="text-white/80 text-sm">Actief sinds {provider.since}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Main content ──────────────────────────────────────────────── */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-12 py-12 md:py-16">
          <div className="flex flex-col lg:grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-start">

            {/* ── Left column ── */}
            <div className="flex flex-col gap-14">

              {/* Over de aanbieder */}
              <section aria-labelledby="over-heading">
                <div className="flex items-center gap-5 mb-7">
                  <img
                    src={provider.avatar}
                    alt={`Profielfoto van ${provider.name}`}
                    className="w-16 h-16 rounded-full object-cover shrink-0 ring-2 ring-white shadow-md"
                    width={64}
                    height={64}
                  />
                  <div>
                    <h2 id="over-heading" className="text-xl font-bold text-foreground">
                      Over {provider.name}
                    </h2>
                    <p className="text-sm text-muted-foreground">{provider.type} · {provider.location}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  {provider.bio.map((paragraph, i) => (
                    <p key={i} className="text-base text-muted-foreground leading-[1.75]">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8" role="list">
                  {provider.highlights.map((h) => (
                    <li
                      key={h.label}
                      className="flex items-center gap-3 px-4 py-3 bg-secondary rounded-lg text-sm text-foreground"
                    >
                      <iconify-icon icon={h.icon} class="text-primary text-base shrink-0" aria-hidden="true" />
                      {h.label}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Cursusaanbod */}
              {courses.length > 0 && (
                <section aria-labelledby="aanbod-heading">
                  <h2 id="aanbod-heading" className="text-2xl font-bold text-foreground tracking-tight mb-6">
                    Beschikbare cursussen
                  </h2>
                  <ul className="flex flex-col gap-4" role="list">
                    {courses.map((course) => (
                      <li key={course.slug}>
                        <Link
                          href={`/cursussen/${course.slug}`}
                          className="group flex gap-4 md:gap-5 p-4 md:p-5 bg-white border border-black/[0.07] rounded-xl hover:border-primary/30 hover:shadow-[0_4px_20px_rgba(122,166,122,0.1)] transition-all"
                        >
                          <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden shrink-0">
                            <img
                              src={course.image}
                              alt={course.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              width={96}
                              height={96}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap gap-1.5 mb-2">
                              {course.labels.map((label) => (
                                <span
                                  key={label}
                                  className="text-[10px] px-2 py-0.5 bg-secondary text-secondary-foreground rounded font-semibold uppercase tracking-wide"
                                >
                                  {label}
                                </span>
                              ))}
                            </div>
                            <h3 className="text-[15px] font-semibold text-foreground mb-1 line-clamp-1">
                              {course.title}
                            </h3>
                            <p className="text-[13px] text-muted-foreground leading-snug line-clamp-2">
                              {course.description}
                            </p>
                          </div>
                          <div className="flex flex-col items-end justify-between shrink-0">
                            <span className="text-base font-bold text-foreground">{course.price}</span>
                            <iconify-icon
                              icon="lucide:arrow-right"
                              class="text-base text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                              aria-hidden="true"
                            />
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Reviews */}
              {provider.reviews.length > 0 && (
                <section aria-labelledby="reviews-heading">
                  <div className="flex items-baseline justify-between mb-6">
                    <h2 id="reviews-heading" className="text-2xl font-bold text-foreground tracking-tight">
                      Wat anderen zeggen
                    </h2>
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                      <iconify-icon icon="lucide:star" class="text-yellow-400" aria-hidden="true" />
                      {provider.rating}
                      <span className="text-muted-foreground font-normal">({provider.reviewCount})</span>
                    </div>
                  </div>
                  <ul className="flex flex-col gap-4" role="list">
                    {provider.reviews.map((review) => (
                      <li
                        key={review.name}
                        className="p-5 md:p-6 bg-white border border-black/[0.07] rounded-xl"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={review.avatar}
                              alt={review.name}
                              className="w-10 h-10 rounded-full object-cover"
                              width={40}
                              height={40}
                            />
                            <div>
                              <p className="text-sm font-semibold text-foreground">{review.name}</p>
                              <p className="text-[12px] text-muted-foreground">{review.course}</p>
                            </div>
                          </div>
                          <div className="flex gap-0.5" aria-label={`${review.rating} van de 5 sterren`}>
                            {Array.from({ length: review.rating }).map((_, i) => (
                              <iconify-icon key={i} icon="lucide:star" class="text-yellow-400 text-sm" aria-hidden="true" />
                            ))}
                          </div>
                        </div>
                        <p className="text-[14px] text-muted-foreground leading-relaxed">
                          "{review.text}"
                        </p>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* ── Sticky sidebar ── */}
            <aside className="w-full lg:sticky lg:top-24 flex flex-col gap-4" aria-label="Contact en praktische info">

              {/* CTA card */}
              <div className="bg-white border border-black/[0.07] rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                <p className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                  Interesse?
                </p>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  Neem contact op
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Heb je een vraag of wil je een plek reserveren? {provider.name} beantwoordt
                  je bericht binnen één werkdag.
                </p>
                <a
                  href={`mailto:${provider.practical.find(p => p.label === 'E-mail')?.value}`}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-white rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  <iconify-icon icon="lucide:mail" class="text-base" aria-hidden="true" />
                  Stuur een bericht
                </a>
                {courses.length > 0 && (
                  <Link
                    href={`/cursussen?city=${provider.city}&type=${encodeURIComponent(provider.type)}`}
                    className="mt-3 flex items-center justify-center gap-2 w-full py-3 border border-black/[0.08] text-foreground rounded-md text-sm font-medium hover:border-black/20 transition-colors"
                  >
                    <iconify-icon icon="lucide:layout-list" class="text-base" aria-hidden="true" />
                    Bekijk alle cursussen
                  </Link>
                )}
              </div>

              {/* Praktische info */}
              <div className="bg-secondary rounded-xl p-6">
                <h4 className="text-[13px] font-semibold text-foreground uppercase tracking-wide mb-4">
                  Praktische informatie
                </h4>
                <ul className="flex flex-col gap-4" role="list">
                  {provider.practical.map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center shrink-0 shadow-sm">
                        <iconify-icon icon={item.icon} class="text-base text-foreground" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">
                          {item.label}
                        </p>
                        <p className="text-[13px] text-foreground leading-snug mt-0.5">
                          {item.value}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Guarantees */}
              <ul className="flex flex-col gap-3 px-2" role="list">
                {[
                  { icon: 'lucide:shield-check', text: 'Geverifieerde aanbieder' },
                  { icon: 'lucide:refresh-ccw',  text: 'Kosteloos annuleren tot 14 dagen vooraf' },
                  { icon: 'lucide:badge-check',  text: 'Gecertificeerd en erkend' },
                ].map((g) => (
                  <li key={g.text} className="flex items-center gap-2.5 text-[13px] text-muted-foreground">
                    <iconify-icon icon={g.icon} class="text-base text-primary shrink-0" aria-hidden="true" />
                    {g.text}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}