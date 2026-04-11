/**
 * lib/courses.js
 *
 * Centrale datalaag voor cursussen.
 *
 * Nu: statische arrays.
 * Straks: vervang de functies onderaan door echte API / database calls.
 * De rest van de app hoeft dan niet te veranderen.
 *
 * Voorbeelden voor later:
 *   - Supabase:   return await supabase.from('courses').select('*').eq('section','popular')
 *   - Prisma:     return await prisma.course.findMany({ where: { section: 'popular' } })
 *   - REST API:   return await fetch('/api/courses?section=popular').then(r => r.json())
 */

/**
 * @typedef {Object} Course
 * @property {string}      slug         - URL-vriendelijke identifier, ook gebruikt als React key
 * @property {string}      image        - Afbeeldings-URL
 * @property {string}      alt          - Beschrijvende alt-tekst (toegankelijkheid)
 * @property {string[]}    labels       - Korte badges, bijv. ['8 weken', 'Fysiek', 'NL']
 * @property {string}      title        - Naam van de cursus
 * @property {string}      provider     - Naam + locatie van de aanbieder
 * @property {string}      rating       - Cijfer als string, of 'Nieuw'
 * @property {string|null} ratingCount  - Aantal beoordelingen, of null
 * @property {string}      description  - Korte omschrijving (max. 2 regels)
 * @property {string}      price        - Prijs inclusief valutasymbool, bijv. '€ 145'
 */

/** @type {Course[]} */
const POPULAR_COURSES = [
  {
    slug: 'zwangerschapsyoga-ontspanning',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/e36bd753-9c98-4b61-9702-354b33d730c1.jpg',
    alt: 'Zwangere vrouw doet yoga in een lichte, rustige studio',
    labels: ['8 weken', 'Fysiek', 'NL'],
    title: 'Zwangerschapsyoga & Ontspanning',
    provider: 'Studio Vesper, Amsterdam',
    rating: '4.9',
    ratingCount: '128',
    description: 'Bereid je fysiek en mentaal voor op de bevalling met wekelijkse yogalessen en ademhalingsoefeningen in een kleine, vertrouwde groep.',
    price: '€ 145',
  },
  {
    slug: 'hypnobirthing-voor-twee',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/f8047725-fff5-4be2-8dea-873aa1bf5bac.jpg',
    alt: 'Stel oefent hypnobirthing technieken in een rustige, warme omgeving',
    labels: ['4 weken', 'Hybride', 'NL'],
    title: 'Hypnobirthing voor Twee',
    provider: 'Geboorte in Balans, Rotterdam',
    rating: '4.8',
    ratingCount: '84',
    description: 'Een nuchtere en praktische cursus waar je samen met je partner leert ontspannen en vol vertrouwen de bevalling tegemoet gaat.',
    price: '€ 220',
  },
  {
    slug: 'online-cursus-goed-voorbereid',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/e7fe9998-0c4a-4572-ae0a-36dbf0dfc51f.jpg',
    alt: 'Zwangere vrouw volgt online cursus op laptop in een lichte ruimte',
    labels: ['Zelfstudie', 'Online', 'EN / NL'],
    title: 'Online Cursus: Goed Voorbereid',
    provider: 'Mama Academie',
    rating: '4.7',
    ratingCount: '215',
    description: "Volg de complete voorbereiding in je eigen tempo. Inclusief uitgebreide video's, een werkboek en maandelijkse live Q&A sessies.",
    price: '€ 89',
  },
  {
    slug: 'intensieve-bevalcursus-weekend',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/911782ef-1dbd-40ea-9709-f371c217ef5a.jpg',
    alt: 'Groep zwangere vrouwen in een kring tijdens een weekendcursus',
    labels: ['1 weekend', 'Fysiek', 'NL'],
    title: 'Intensieve Bevalcursus (Weekend)',
    provider: 'Praktijk De Kern, Utrecht',
    rating: '5.0',
    ratingCount: '42',
    description: 'Geen tijd voor wekelijkse lessen? In dit intensieve weekend leer je alles over de fysiologie van de bevalling en pijnbestrijding.',
    price: '€ 195',
  },
];

/** @type {Course[]} */
const NEW_COURSES = [
  {
    slug: 'zwangerschapspilates',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/b236f7bb-dbb2-4c09-8511-11ca679a6d04.jpg',
    alt: 'Pilates apparatuur in een rustige, lichte studio voor zwangere vrouwen',
    labels: ['6 weken', 'Fysiek', 'NL'],
    title: 'Zwangerschapspilates',
    provider: 'Studio Flow, Haarlem',
    rating: 'Nieuw',
    ratingCount: null,
    description: 'Blijf fit en sterk tijdens je zwangerschap met veilige pilates oefeningen gericht op je core en bekken.',
    price: '€ 125',
  },
  {
    slug: 'mindful-pregnancy-course',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/53d8f310-55ba-4cef-85bf-b83c46481c52.jpg',
    alt: 'Zwangere vrouw mediteert buiten bij zachte zonsopgang',
    labels: ['8 weken', 'Online', 'EN'],
    title: 'Mindful Pregnancy Course',
    provider: 'Mindful Birth Academy',
    rating: '5.0',
    ratingCount: '12',
    description: 'Learn how to manage anxiety and prepare mentally for birth using proven mindfulness techniques.',
    price: '€ 150',
  },
  {
    slug: 'zwangerschapszwemmen',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/4d1a9c05-f97d-4697-a785-ae219290a712.jpg',
    alt: 'Aqua aerobics les voor zwangere vrouwen in rustig blauw water',
    labels: ['10 weken', 'Fysiek', 'NL'],
    title: 'Zwangerschapszwemmen',
    provider: 'Zwembad De Bron, Utrecht',
    rating: '4.6',
    ratingCount: '55',
    description: 'Ervaar de gewichtloosheid in het water en werk ontspannen aan je conditie tijdens de zwangerschap.',
    price: '€ 95',
  },
  {
    slug: 'prive-bevalcursus-thuis',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/06bd7004-eacd-4a1d-8934-75eb13ea2ca6.jpg',
    alt: 'Doula in gesprek met zwanger stel in een warme, gezellige woonkamer',
    labels: ['1 dag', 'Privé', 'NL'],
    title: 'Privé Bevalcursus Thuis',
    provider: 'Doula Sarah, Amsterdam e.o.',
    rating: '5.0',
    ratingCount: '28',
    description: 'Een complete voorbereiding op maat, gewoon bij jullie thuis in jullie eigen vertrouwde omgeving.',
    price: '€ 250',
  },
];

// ─── Exporteerbare fetch-functies ─────────────────────────────────────────────
// async zodat je ze straks kunt vervangen door echte awaitable calls
// zonder dat page.js of de componenten hoeven te veranderen.

/**
 * Geeft populaire cursussen terug.
 * @returns {Promise<Course[]>}
 */
export async function getPopularCourses() {
  return POPULAR_COURSES;
}

/**
 * Geeft nieuw toegevoegde cursussen terug.
 * @returns {Promise<Course[]>}
 */
export async function getNewCourses() {
  return NEW_COURSES;
}

/**
 * Geeft een enkele cursus op slug.
 * Handig voor een toekomstige /cursussen/[slug] detailpagina.
 * @param {string} slug
 * @returns {Promise<Course|undefined>}
 */
export async function getCourseBySlug(slug) {
  return [...POPULAR_COURSES, ...NEW_COURSES].find((c) => c.slug === slug);
}

// ─── Zoekpagina helpers ───────────────────────────────────────────────────────

/**
 * Alle cursussen gecombineerd (popular + new).
 * Voeg hier straks extra cursussen aan toe of vervang door een DB-query.
 * @type {Course[]}
 */
const ALL_COURSES = [
  ...POPULAR_COURSES,
  ...NEW_COURSES,
  // ── Zoekpagina-specifieke cursussen (Amsterdam) ──────────────────────────
  {
    slug: 'mindful-zwangerschapsyoga',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/b2dc0721-23fb-4236-9ef4-bbdfa39f1ca7.jpg',
    alt: 'Groep zwangere vrouwen mediteert op yogamatten in een lichte studio',
    labels: ['10 weken', 'Fysiek', 'NL'],
    title: 'Mindful Zwangerschapsyoga',
    provider: 'Yoga Spot, Amsterdam Zuid',
    rating: '4.8',
    ratingCount: '94',
    description: 'Combineer lichte yogaoefeningen met diepe mindfulness technieken om volledig in contact te komen met je veranderende lichaam en je baby.',
    price: '€ 175',
    type: 'Zwangerschapsyoga',
    city: 'Amsterdam',
    language: 'Nederlands',
  },
  {
    slug: 'actieve-zwangerschapsyoga',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/3c54bc35-b4db-4cd7-a6d5-044cf09e0a12.jpg',
    alt: 'Zwangere vrouw doet strekoefeningen met yogablok in moderne studio',
    labels: ['6 weken', 'Fysiek', 'NL / EN'],
    title: 'Actieve Zwangerschapsyoga',
    provider: 'De Vrije Geboorte, Amsterdam West',
    rating: '4.7',
    ratingCount: '62',
    description: 'Blijf sterk en fit. Deze cursus is speciaal ontworpen voor vrouwen die een actieve zwangerschap willen behouden en fysiek sterk de bevalling in willen gaan.',
    price: '€ 110',
    type: 'Zwangerschapsyoga',
    city: 'Amsterdam',
    language: 'Nederlands',
  },
  {
    slug: 'relax-connect-yoga',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/2e8eb22e-0e4e-45f0-80f2-98f0dda4c8f9.jpg',
    alt: 'Handen in hartvorm op zwangere buik, zachte warme belichting',
    labels: ['5 weken', 'Fysiek', 'NL'],
    title: 'Relax & Connect Yoga',
    provider: 'Motherhood Studio, Amsterdam Centrum',
    rating: '5.0',
    ratingCount: '41',
    description: 'Een intieme cursus gericht op ontspanning en verbinding met je baby. Ideaal voor het derde trimester om even helemaal tot rust te komen.',
    price: '€ 95',
    type: 'Zwangerschapsyoga',
    city: 'Amsterdam',
    language: 'Nederlands',
  },
  {
    slug: 'yoga-ademhaling-weekend',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/9f134ace-ec9b-4000-9f3a-4711029b4c9e.jpg',
    alt: 'Instructeur leert zwangere vrouw ademhalingstechnieken op yogabal',
    labels: ['1 weekend', 'Fysiek', 'NL'],
    title: 'Yoga & Ademhaling Weekend',
    provider: 'Ouder & Kind, Amsterdam Oost',
    rating: '4.9',
    ratingCount: '88',
    description: 'Twee intensieve middagen waarin alle belangrijke yogahoudingen en ademhalingstechnieken voor de bevalling worden behandeld.',
    price: '€ 135',
    type: 'Zwangerschapsyoga',
    city: 'Amsterdam',
    language: 'Nederlands',
  },
  {
    slug: 'avond-yoga-zwangeren',
    image: 'https://storage.googleapis.com/banani-generated-images/generated-images/d3d2f5af-40e3-4444-bf47-cc9b5af8deb6.jpg',
    alt: 'Sfeervolle avond yogales voor zwangere vrouwen met kaarslicht',
    labels: ['8 weken', 'Fysiek', 'EN'],
    title: 'Avond Yoga voor Zwangeren',
    provider: 'Balans Studio, Amsterdam Noord',
    rating: '4.6',
    ratingCount: '35',
    description: 'Sluit je werkdag ontspannen af met deze rustgevende avondsessies. Helpt aantoonbaar bij een betere nachtrust tijdens de zwangerschap.',
    price: '€ 150',
    type: 'Zwangerschapsyoga',
    city: 'Amsterdam',
    language: 'Engels',
  },
];

/**
 * Geeft alle cursussen terug, optioneel gefilterd op type, stad, taal, trefwoord en prijs.
 *
 * @param {{ type?: string, city?: string, language?: string, q?: string, price?: 'low'|'mid'|'high', sort?: string }} filters
 * @returns {Promise<Course[]>}
 */
export async function getAllCourses({ type, city, language, q, price, sort } = {}) {
  let results = ALL_COURSES;

  if (type)     results = results.filter((c) => c.type === type);
  if (city)     results = results.filter((c) => c.city === city);
  if (language) results = results.filter((c) => c.language === language);

  // Trefwoord: zoek in titel, aanbieder en omschrijving (case-insensitive)
  if (q) {
    const needle = q.toLowerCase();
    results = results.filter(
      (c) =>
        c.title.toLowerCase().includes(needle) ||
        c.provider.toLowerCase().includes(needle) ||
        c.description.toLowerCase().includes(needle),
    );
  }

  // Prijs: low = t/m €50, mid = €51–€150, high = €151+
  if (price === 'low')  results = results.filter((c) => parsePrice(c.price) <= 50);
  if (price === 'mid')  results = results.filter((c) => parsePrice(c.price) > 50 && parsePrice(c.price) <= 150);
  if (price === 'high') results = results.filter((c) => parsePrice(c.price) > 150);

  if (sort === 'prijs-laag')  results = [...results].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
  if (sort === 'prijs-hoog')  results = [...results].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
  if (sort === 'beoordeling') results = [...results].sort((a, b) => parseRating(b.rating) - parseRating(a.rating));

  return results;
}

/** @param {string} price  e.g. '€ 145' */
function parsePrice(price) {
  return parseInt(price.replace(/[^\d]/g, ''), 10) || 0;
}

/** @param {string} rating  e.g. '4.9' or 'Nieuw' */
function parseRating(rating) {
  return parseFloat(rating) || 0;
}

/**
 * Geeft beschikbare filter-opties terug (voor de sidebar checkboxes).
 * @returns {Promise<{ types: string[], cities: string[], languages: string[] }>}
 */
export async function getFilterOptions() {
  return {
    types: ['Zwangerschapsyoga', 'Hypnobirthing', 'Online Cursussen', 'Samen met partner', 'Zwangerschapsgym'],
    cities: ['Amsterdam', 'Rotterdam', 'Utrecht', 'Haarlem'],
    languages: ['Nederlands', 'Engels'],
  };
}