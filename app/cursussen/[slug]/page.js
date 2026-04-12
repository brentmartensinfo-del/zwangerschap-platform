import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getCourseBySlug, getAllCourses } from '@/lib/Courses';

/* ── Static params voor build-time generatie ─────────────────────────────── */
export async function generateStaticParams() {
  const courses = await getAllCourses();
  return courses.map((c) => ({ slug: c.slug }));
}

/* ── Metadata ────────────────────────────────────────────────────────────── */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);
  if (!course) return {};
  return {
    title: `${course.title} | Lumi Cursussen`,
    description: course.description,
  };
}

/* ── Page ────────────────────────────────────────────────────────────────── */
export default async function CourseDetailPage({ params }) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);

  if (!course) notFound();

  const {
    title,
    image,
    alt,
    description,
    provider,
    price,
    rating,
    ratingCount,
    labels = [],
    bookingUrl,
    descriptionLong,
    curriculum = [],
    learningItems = [],
    includes = [],
    guarantees = [],
    practical = [],
    quickInfo = [],
  } = course;

  return (
    <>
      <Navbar />

      <main className="flex-1">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-12 py-10 pb-20">

          {/* ── Breadcrumb ── */}
          <nav aria-label="Kruimelpad" className="flex items-center gap-2 text-[13px] text-muted-foreground mb-8">
            <Link href="/" className="font-medium hover:text-foreground transition-colors">Home</Link>
            <iconify-icon icon="lucide:chevron-right" class="text-sm" aria-hidden="true" />
            <Link href="/cursussen" className="font-medium hover:text-foreground transition-colors">Cursussen</Link>
            <iconify-icon icon="lucide:chevron-right" class="text-sm" aria-hidden="true" />
            <span className="text-foreground font-medium truncate">{title}</span>
          </nav>

          {/* ── Course header ── */}
          <header className="mb-6">
            <h1 className="text-3xl md:text-[36px] font-semibold text-foreground leading-snug tracking-tight mb-3">
              {title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm font-medium text-foreground">
              <div className="flex items-center gap-1.5">
                <iconify-icon icon="lucide:star" class="text-base text-foreground" aria-hidden="true" />
                <span>{rating}</span>
                {ratingCount && (
                  <span className="text-muted-foreground font-normal underline">
                    ({ratingCount} reviews)
                  </span>
                )}
              </div>
              <span className="text-black/20" aria-hidden="true">•</span>
              <span>{provider}</span>
              {labels.length > 0 && (
                <>
                  <span className="text-black/20" aria-hidden="true">•</span>
                  <div className="flex flex-wrap gap-1.5">
                    {labels.map((label) => (
                      <span
                        key={label}
                        className="text-[11px] px-2 py-1 bg-secondary text-secondary-foreground rounded font-medium uppercase tracking-wide"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </header>

          {/* ── Hero image ── */}
          <div className="w-full aspect-[21/9] rounded-xl overflow-hidden mb-12">
            <img
              src={image}
              alt={alt}
              className="w-full h-full object-cover"
              width={1200}
              height={514}
            />
          </div>

          {/* ── Content grid: main + sidebar ── */}
          <div className="flex flex-col lg:grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-start">

            {/* ── Main column ── */}
            <div className="flex flex-col gap-14 min-w-0">

              {/* Quick info row */}
              {quickInfo.length > 0 && (
                <div className="flex flex-col sm:flex-row sm:justify-between gap-6 pb-8 border-b border-black/[0.06]">
                  {quickInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <iconify-icon icon={item.icon} class="text-2xl text-foreground mt-0.5 shrink-0" aria-hidden="true" />
                      <div>
                        <h4 className="text-[15px] font-semibold text-foreground mb-1">{item.label}</h4>
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Over deze cursus */}
              <section aria-labelledby="over-heading">
                <h2 id="over-heading" className="text-2xl font-semibold text-foreground tracking-tight mb-4">
                  Over deze cursus
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">{description}</p>
                {(descriptionLong || description) !== description && (
                  <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                    {descriptionLong || description}
                  </p>
                )}
              </section>

              {/* Wat je gaat leren */}
              {learningItems.length > 0 && (
                <section aria-labelledby="leren-heading">
                  <h2 id="leren-heading" className="text-2xl font-semibold text-foreground tracking-tight mb-4">
                    Wat je gaat leren
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6" role="list">
                    {learningItems.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[15px] text-foreground leading-snug">
                        <iconify-icon icon="lucide:check" class="text-xl text-foreground shrink-0 mt-0.5" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Cursus overzicht */}
              {curriculum.length > 0 && (
                <section aria-labelledby="programma-heading">
                  <h2 id="programma-heading" className="text-2xl font-semibold text-foreground tracking-tight mb-2">
                    Cursus overzicht
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">
                    De cursus is opgebouwd rondom de belangrijkste thema's voor een ontspannen zwangerschap en voorbereiding op de bevalling.
                  </p>
                  <ol className="flex flex-col gap-4" role="list">
                    {curriculum.map((item) => (
                      <li
                        key={item.period}
                        className="flex gap-5 md:gap-6 p-5 border border-black/[0.08] rounded-md bg-white"
                      >
                        <span className="text-[13px] font-semibold bg-secondary text-secondary-foreground px-3 py-1.5 rounded h-max whitespace-nowrap">
                          {item.period}
                        </span>
                        <div>
                          <h4 className="text-[16px] font-semibold text-foreground mb-2">{item.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </section>
              )}

              {/* Praktische informatie */}
              {practical.length > 0 && (
                <section aria-labelledby="praktisch-heading">
                  <h2 id="praktisch-heading" className="text-2xl font-semibold text-foreground tracking-tight mb-6">
                    Praktische informatie
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6" role="list">
                    {practical.map((item) => (
                      <li key={item.title} className="flex flex-col gap-4 p-6 bg-secondary rounded-md">
                        <div className="w-9 h-9 flex items-center justify-center bg-background rounded">
                          <iconify-icon icon={item.icon} class="text-xl text-foreground" aria-hidden="true" />
                        </div>
                        <div>
                          <h4 className="text-[15px] font-semibold text-foreground mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{item.body}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Map placeholder */}
                  <div className="mt-6 w-full rounded-md overflow-hidden border border-black/[0.08]">
                    <img
                      src="https://storage.googleapis.com/banani-generated-images/generated-images/e930dd6e-9164-4bbd-a517-523633967b66.jpg"
                      alt="Kaart met locatie van de studio"
                      className="w-full block"
                      width={800}
                      height={300}
                    />
                  </div>
                </section>
              )}

              {/* Over de aanbieder */}
              <section aria-labelledby="aanbieder-heading">
                <h2 id="aanbieder-heading" className="text-2xl font-semibold text-foreground tracking-tight mb-6">
                  Over de aanbieder
                </h2>
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center p-6 border border-black/[0.08] rounded-xl bg-white">
                  <img
                    src="https://storage.googleapis.com/banani-avatars/avatar%2Ffemale%2F25-35%2FEuropean%2F3 "
                    alt={`Profielfoto van ${provider}`}
                    className="w-16 h-16 rounded-full object-cover shrink-0"
                    width={64}
                    height={64}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{provider}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Gecertificeerd Yogadocente &amp; Doula
                    </p>
                    <button className="px-4 py-2 border border-black/[0.08] rounded-md text-[13px] font-medium text-foreground hover:border-black/20 transition-colors">
                      Bekijk profiel
                    </button>
                  </div>
                </div>
              </section>
            </div>

            {/* ── Sticky booking card ── */}
            <aside className="w-full lg:sticky lg:top-24" aria-label="Boeking">
              <div className="bg-white border border-black/[0.08] rounded-xl p-6 shadow-[0_12px_24px_rgba(0,0,0,0.04),0_4px_8px_rgba(0,0,0,0.02)]">

                {/* Price */}
                <p className="text-[28px] font-semibold text-foreground mb-6">{price}</p>

                {/* CTA */}
                {bookingUrl ? (
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3.5 bg-primary text-white rounded-md text-base font-semibold hover:opacity-90 transition-opacity mb-4 text-center"
                  >
                    Boek deze cursus
                  </a>
                ) : (
                  <button
                    disabled
                    className="w-full py-3.5 bg-muted text-muted-foreground rounded-md text-base font-semibold cursor-not-allowed mb-4"
                  >
                    Niet beschikbaar
                  </button>
                )}
                <p className="text-[13px] text-muted-foreground text-center mb-6">
                  Je wordt doorgestuurd naar de cursusaanbieder.
                </p>

                {/* Includes */}
                {includes.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-4">Deze cursus is inclusief:</h4>
                    <ul className="flex flex-col gap-3" role="list">
                      {includes.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <iconify-icon icon="lucide:check-circle-2" class="text-[18px] text-foreground shrink-0" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Guarantees */}
                {guarantees.length > 0 && (
                  <ul className="flex flex-col gap-3 mt-6 pt-6 border-t border-black/[0.06]" role="list">
                    {guarantees.map((g) => (
                      <li key={g.text} className="flex items-center gap-3 text-[13px] text-muted-foreground">
                        <iconify-icon icon={g.icon} class="text-base text-primary shrink-0" aria-hidden="true" />
                        {g.text}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}