import Link from 'next/link';

const POSTS = [
  {
    slug: 'hypnobirthing-wat-is-het',
    category: 'Bevalling',
    readTime: '6 min',
    title: 'Hypnobirthing: wat is het en werkt het echt?',
    excerpt: 'Steeds meer aanstaande moeders kiezen voor hypnobirthing. Maar wat houdt het precies in, en wat kun je er realistisch van verwachten?',
    image: 'https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg',
    featured: true,
  },
  {
    slug: 'zwangerschapsyoga-beginners',
    category: 'Yoga & ontspanning',
    readTime: '4 min',
    title: 'Zwangerschapsyoga voor beginners: zo start je',
    excerpt: 'Nog nooit geyogad maar wel zwanger? Dit zijn de basics die je moet weten voor je eerste les.',
    image: 'https://images.pexels.com/photos/3984363/pexels-photo-3984363.jpeg',
  },
  {
    slug: 'partner-betrekken-voorbereiding',
    category: 'Met partner',
    readTime: '4 min',
    title: 'Hoe betrek je je partner bij de voorbereiding?',
    excerpt: 'Een cursus samen volgen versterkt ook jullie band als koppel voor de grote dag.',
    image: 'https://images.pexels.com/photos/5424711/pexels-photo-5424711.jpeg',
  },
];

export default function BlogPreview() {
  const [featured, ...rest] = POSTS;

  return (
    <section
      className="py-16 md:py-20 px-4 sm:px-8 md:px-12 bg-secondary"
      aria-labelledby="blog-preview-heading"
    >
      <div className="max-w-[1200px] mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-12">
          <div>
            <p className="text-[12px] font-bold text-primary uppercase tracking-widest mb-3">
              Birthly Blog
            </p>
            <h2
              id="blog-preview-heading"
              className="text-3xl md:text-[36px] font-bold text-foreground tracking-tight"
            >
              Lees & leer voor je bevalling
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:opacity-75 transition-opacity"
          >
            Alle artikelen
            <iconify-icon icon="lucide:arrow-right" class="text-sm" aria-hidden="true" />
          </Link>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-5 md:gap-6">

          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group relative bg-white border border-black/[0.07] rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.10)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
          >
            <div className="relative h-[220px] md:h-[260px] overflow-hidden shrink-0">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-2.5 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                  Uitgelicht
                </span>
                <span className="px-2.5 py-1 bg-white/90 text-foreground text-[10px] font-semibold rounded-full">
                  {featured.category}
                </span>
              </div>
            </div>

            <div className="flex flex-col flex-1 p-6 md:p-7">
              <p className="text-[11px] text-muted-foreground mb-3">{featured.readTime} leestijd</p>
              <h3 className="text-[20px] font-bold text-foreground leading-snug tracking-tight mb-3 group-hover:text-primary transition-colors">
                {featured.title}
              </h3>
              <p className="text-[14px] text-muted-foreground leading-relaxed flex-1 mb-5">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-1.5 text-[13px] font-semibold text-primary mt-auto">
                Lees artikel
                <iconify-icon icon="lucide:arrow-right" class="text-sm group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </div>
            </div>
          </Link>

          {/* Side posts */}
          <div className="flex flex-col gap-5">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex gap-4 bg-white border border-black/[0.07] rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="w-[120px] md:w-[140px] shrink-0 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center py-4 pr-5 min-w-0 gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{post.category}</span>
                    <span className="text-[10px] text-muted-foreground">· {post.readTime}</span>
                  </div>
                  <h3 className="text-[14px] font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[12px] text-muted-foreground leading-relaxed line-clamp-2 hidden sm:block">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}

            {/* Mobile CTA */}
            <Link
              href="/blog"
              className="md:hidden flex items-center justify-center gap-2 py-3 border border-primary/30 rounded-xl text-[13px] font-semibold text-primary hover:bg-primary/5 transition-colors"
            >
              Alle artikelen bekijken
              <iconify-icon icon="lucide:arrow-right" class="text-sm" aria-hidden="true" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}