import Link from 'next/link';

export const metadata = {
  title: 'Blog | Birthly',
  description: 'Artikelen, tips en verhalen over zwangerschap, bevalling en voorbereiding. Van gecertificeerde professionals en ouders die er zijn geweest.',
};

const FEATURED = {
  slug: 'hypnobirthing-wat-is-het',
  category: 'Bevalling',
  readTime: '6 min',
  title: 'Hypnobirthing: wat is het en werkt het echt?',
  excerpt: 'Steeds meer aanstaande moeders kiezen voor hypnobirthing als voorbereiding op de bevalling. Maar wat houdt het precies in, en wat kun je er realistisch van verwachten?',
  author: { name: 'Lisa Mendes', role: 'Redactie Birthly' },
  image: 'https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg',
  date: '18 april 2025',
};

const POSTS = [
  {
    slug: 'zwangerschapsyoga-beginners',
    category: 'Yoga & ontspanning',
    readTime: '4 min',
    title: 'Zwangerschapsyoga voor beginners: zo start je',
    excerpt: 'Nog nooit geyogad maar wel zwanger? Geen probleem. Dit zijn de basics die je moet weten voor je eerste les.',
    date: '10 april 2025',
    image: 'https://images.pexels.com/photos/3984363/pexels-photo-3984363.jpeg',
  },
  {
    slug: 'cursus-kiezen-eerste-zwangerschap',
    category: 'Keuzehulp',
    readTime: '5 min',
    title: 'Welke cursus kies je bij je eerste zwangerschap?',
    excerpt: 'Er is veel aanbod. Dit zijn de vragen die je jezelf moet stellen voordat je iets boekt.',
    date: '2 april 2025',
    image: 'https://images.pexels.com/photos/5424711/pexels-photo-5424711.jpeg',
  },
  {
    slug: 'partner-betrekken-voorbereiding',
    category: 'Met partner',
    readTime: '4 min',
    title: 'Hoe betrek je je partner bij de voorbereiding?',
    excerpt: 'Een cursus samen volgen is meer dan handig — het versterkt ook jullie band als koppel voor de grote dag.',
    date: '24 maart 2025',
    image: 'https://images.pexels.com/photos/7990107/pexels-photo-7990107.jpeg',
  },
  {
    slug: 'online-cursus-voordelen',
    category: 'Online cursussen',
    readTime: '3 min',
    title: 'Online cursus volgen: dit zijn de voordelen',
    excerpt: 'Thuis en op jouw tempo — maar mis je dan ook iets? We zetten de voor- en nadelen eerlijk op een rij.',
    date: '15 maart 2025',
    image: 'https://images.pexels.com/photos/7491225/pexels-photo-7491225.jpeg',
  },
  {
    slug: 'ademhaling-bevalling',
    category: 'Bevalling',
    readTime: '5 min',
    title: 'Ademhaling tijdens de bevalling: waarom het zo belangrijk is',
    excerpt: 'Goede ademhalingstechnieken kunnen het verschil maken. Wat de wetenschap erover zegt en hoe je het oefent.',
    date: '8 maart 2025',
    image: 'https://images.pexels.com/photos/18999261/pexels-photo-18999261.jpeg',
  },
  {
    slug: 'bevallingsverhaal-sanne',
    category: 'Verhalen',
    readTime: '6 min',
    title: '"De cursus gaf me rust die ik nooit had verwacht"',
    excerpt: 'Sanne (29) deelt haar bevallingservaring en hoe de hypnobirthingcursus haar voorbereiding veranderde.',
    date: '28 februari 2025',
    image: 'https://images.pexels.com/photos/4894853/pexels-photo-4894853.jpeg',
  },
];

const CATEGORIES = ['Alle artikelen', 'Bevalling', 'Yoga & ontspanning', 'Keuzehulp', 'Met partner', 'Online cursussen', 'Verhalen'];

export default function BlogPage() {
  return (
    <main className="flex-1">

      {/* ── Hero ── */}
      <section className="border-b border-black/[0.07] bg-background">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-12 py-14 md:py-20">
          <div className="max-w-[680px]">
            <p className="text-[12px] font-bold text-primary uppercase tracking-widest mb-4">Birthly Blog</p>
            <h1 className="text-4xl md:text-[52px] font-bold text-foreground tracking-tight leading-[1.06] mb-5">
              Alles over zwangerschap,<br className="hidden md:block" /> bevalling en voorbereiding.
            </h1>
            <p className="text-base md:text-[17px] text-muted-foreground leading-relaxed max-w-[520px]">
              Eerlijke artikelen, praktische tips en persoonlijke verhalen. Geschreven door professionals en ouders die er zijn geweest.
            </p>
          </div>
        </div>
      </section>

      {/* ── Category filter ── */}
      <section className="border-b border-black/[0.07] bg-background sticky top-[65px] z-10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-12">
          <nav aria-label="Blog categorieën" className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {CATEGORIES.map((cat, i) => (
              <button
                key={cat}
                className={`shrink-0 px-4 py-2 rounded-full text-[13px] font-medium transition-colors whitespace-nowrap ${
                  i === 0
                    ? 'bg-foreground text-background'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-12 py-12 md:py-16">

        {/* ── Featured post ── */}
        <section aria-labelledby="featured-heading" className="mb-14">
          <Link href={`/blog/${FEATURED.slug}`} className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white border border-black/[0.07] rounded-3xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)] transition-all duration-300">
              <div className="relative h-[260px] lg:h-auto overflow-hidden">
                <img
                  src={FEATURED.image}
                  alt={FEATURED.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="px-3 py-1.5 bg-primary text-white text-[11px] font-bold uppercase tracking-widest rounded-full">
                    Uitgelicht
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[11px] font-bold text-primary uppercase tracking-widest">{FEATURED.category}</span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/30" aria-hidden="true" />
                  <span className="text-[12px] text-muted-foreground">{FEATURED.readTime} leestijd</span>
                </div>
                <h2 id="featured-heading" className="text-2xl md:text-[28px] font-bold text-foreground tracking-tight leading-snug mb-4 group-hover:text-primary transition-colors">
                  {FEATURED.title}
                </h2>
                <p className="text-[15px] text-muted-foreground leading-relaxed mb-8">
                  {FEATURED.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <iconify-icon icon="lucide:user" class="text-sm text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-foreground">{FEATURED.author.name}</p>
                      <p className="text-[11px] text-muted-foreground">{FEATURED.author.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-[13px] font-semibold text-primary">
                    Lees artikel
                    <iconify-icon icon="lucide:arrow-right" class="text-sm" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* ── Post grid ── */}
        <section aria-labelledby="posts-heading">
          <div className="flex items-center justify-between mb-8">
            <h2 id="posts-heading" className="text-[20px] font-bold text-foreground tracking-tight">
              Alle artikelen
            </h2>
            <p className="text-[13px] text-muted-foreground">{POSTS.length} artikelen</p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {POSTS.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group flex flex-col bg-white border border-black/[0.07] rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.09)] hover:-translate-y-0.5 transition-all duration-300 h-full">
                  <div className="relative h-[180px] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-white/95 text-[10px] font-bold text-foreground uppercase tracking-wide rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <div className="flex items-center gap-2 mb-3 text-[11px] text-muted-foreground">
                      <span>{post.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.readTime} leestijd</span>
                    </div>
                    <h3 className="text-[15px] font-bold text-foreground leading-snug mb-2.5 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[13px] text-muted-foreground leading-relaxed flex-1 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-1.5 text-[12px] font-semibold text-primary mt-auto">
                      Lees meer
                      <iconify-icon icon="lucide:arrow-right" class="text-xs group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Newsletter CTA ── */}
        <section className="mt-16 bg-foreground rounded-3xl overflow-hidden px-8 md:px-16 py-12 md:py-14 relative">
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(122,166,122,0.14) 0%, transparent 55%)' }}
            aria-hidden="true"
          />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-[480px]">
              <p className="text-[11px] font-bold text-white/40 uppercase tracking-widest mb-3">Blijf op de hoogte</p>
              <h2 className="text-2xl md:text-[30px] font-bold text-white tracking-tight leading-snug mb-3">
                Nieuwe artikelen direct in je inbox.
              </h2>
              <p className="text-[14px] text-white/55 leading-relaxed">
                Geen spam, alleen relevante tips en verhalen voor aanstaande ouders. Afmelden kan altijd.
              </p>
            </div>
            <div className="flex gap-2 shrink-0 md:w-[340px] w-full">
              <input
                type="email"
                placeholder="jouw@email.nl"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/40 text-sm outline-none focus:border-primary/60 transition-colors"
              />
              <button className="px-5 py-3 bg-primary text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap">
                Aanmelden
              </button>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}