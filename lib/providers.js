/**
 * lib/providers.js
 *
 * Centrale datalaag voor cursusaanbieders.
 *
 * Nu: statische arrays.
 * Straks: vervang de functies door echte API/database calls.
 *
 * Voorbeelden voor later:
 *   - Supabase: return await supabase.from('providers').select('*')
 *   - Prisma:   return await prisma.provider.findMany()
 */

/**
 * @typedef {Object} Provider
 * @property {string}   slug
 * @property {string}   name
 * @property {string}   tagline
 * @property {string}   location
 * @property {string}   city
 * @property {string}   type
 * @property {string}   rating
 * @property {number}   reviewCount
 * @property {number}   since
 * @property {string}   avatar
 * @property {string}   hero
 * @property {string}   [website]   - Externe website URL
 * @property {string[]} bio
 * @property {{ icon: string, label: string }[]} highlights
 * @property {{ icon: string, label: string, value: string }[]} practical
 * @property {{ name: string, course: string, avatar: string, text: string, rating: number }[]} reviews
 */

/** @type {Provider[]} */
const ALL_PROVIDERS = [
  {
    slug: 'mom-en-co',
    website: 'https://momenco.nl',
    name: 'Mom & Co',
    tagline: 'De sleutel tot een positieve geboorte-ervaring.',
    location: 'Amsterdam, Centrum',
    city: 'Amsterdam',
    type: 'Allround bevallingscursus',
    rating: '4.9',
    reviewCount: 128,
    since: 2018,
    avatar: 'https://momenco.nl/wp-content/uploads/2024/02/230518_BureauLiefhebbersMomCO_363-800x528.jpg',
    hero: 'https://momenco.nl/wp-content/uploads/2024/03/IMG_1899-scaled.jpg',
    bio: [
      'Dit zijn we dan. Geen mega miljoenen corporatie met een CEO en CFO, maar drie bevlogen mensen met een flinke passie voor een leuke, interessante stroming binnen de geboortezorg.',
      'Aline, rechts de foto, is de ‘founder’ van Mom & co en schreef de oorspronkelijke cursus. Aline  is verloskundige, moeder van Kobe, met een passie voor persoonlijke ontwikkeling wat je ook terug ziet in de Mom & co zwangerschapscursussen. Ze overziet de complete inhoud van de cursus en traint nieuwe franchisers.',
      'Lonneke, links, beheert ons ‘hoofdkantoor’ in Amsterdam, is verloskundige en hoofdtrainer, maakt de planning en regelt alles met onze verloskundige-trainers. Lonneke is ook parttime presentatrice en is met haar pop-up miniclub ‘Club Zeven Alles Geven’ te vinden op verschillende festivals.',
      'René is getrouwd met Aline, vader van Kobe en doet de dagelijkse gang van zaken van Mom & co, dus kijk niet gek op als hij je mail beantwoord. René is van huis uit cameraman/editor en heeft journalistiek gestudeerd. Hij maakte voordat hij fulltime voor Mom & co ging werken, ook al alle video’s, podcasts, audiobestanden en teksten die we gebruiken in onze zwangerschapscursussen. Daarom klinkt -en ziet het er allemaal zo lekker uit, al zeggen we zelf.',
      'Samen met Rolien Magendans maken René en Aline ook veelbeluisterde podcast: Adem In, Adem Uit vol geboorteverhalen én, omdat we er niet genoeg van krijgen, ook Mom & co – de Podcast.',
    ],
    highlights: [
      { icon: 'lucide:award',    label: 'Gegeven door verloskundigen' },
      { icon: 'lucide:users',    label: 'Max. 8 koppels per les' },
      { icon: 'lucide:calendar', label: 'Al 10 jaar actief in Amsterdam' },
      { icon: 'lucide:star',     label: '4.9 gemiddeld op 128 reviews' },
    ],
    practical: [
      { icon: 'lucide:map-pin', label: 'Locatie',   value: 'Amsterdam, Alkmaar, Breda, Doetinchem, Haarlem' },
      { icon: 'lucide:clock',   label: 'Lestijden', value: 'Afhankelijk per cursus' },
      { icon: 'lucide:phone',   label: 'Telefoon',  value: '06 – 12 34 56 78' },
      { icon: 'lucide:mail',    label: 'E-mail',    value: 'info@momenco.nl' },
    ],
    reviews: [
      {
        name: 'Sanne (29)',
        course: 'De niet-zo-standaard zwangerschapscursus',
        avatar: 'https://storage.googleapis.com/banani-avatars/avatar%2Ffemale%2F25-35%2FEuropean%2F1',
        text: 'Aline heeft een ongelofelijke manier om je op je gemak te stellen. Ik ging elke week met meer vertrouwen naar huis. De groep was klein en fijn, precies wat ik nodig had.',
        rating: 5,
      },
      {
        name: 'Aisha (31)',
        course: 'De niet-zo-standaard zwangerschapscursus',
        avatar: 'https://storage.googleapis.com/banani-avatars/avatar%2Ffemale%2F25-35%2FAfrican%2F1',
        text: 'In één weekend zoveel geleerd. De ademhalingstechnieken heb ik tijdens de bevalling echt kunnen gebruiken. Absoluut een aanrader voor wie weinig wekelijkse tijd heeft.',
        rating: 5,
      },
      {
        name: 'Marieke (33)',
        course: 'De niet-zo-standaard zwangerschapscursus',
        avatar: 'https://storage.googleapis.com/banani-avatars/avatar%2Ffemale%2F25-35%2FEuropean%2F2',
        text: 'De sfeer in de studio is zo warm en rustig. Lonneke neemt echt de tijd voor iedereen. Mijn bevalling verliep niet perfect, maar ik voelde me zo goed voorbereid.',
        rating: 5,
      },
    ],
  },
  {
    slug: 'geboorte-in-balans',
    website: 'https://geboorte-in-balans.nl',
    name: 'Geboorte in Balans',
    tagline: 'Hypnobirthing voor koppels in Rotterdam',
    location: 'Rotterdam, Centrum',
    city: 'Rotterdam',
    type: 'Hypnobirthing',
    rating: '4.8',
    reviewCount: 84,
    since: 2020,
    avatar: 'https://storage.googleapis.com/banani-avatars/avatar%2Ffemale%2F25-35%2FHispanic%2F1',
    hero: 'https://storage.googleapis.com/banani-generated-images/generated-images/f8047725-fff5-4be2-8dea-873aa1bf5bac.jpg',
    bio: [
      'Ik ben Carmen Rodrigues — hypnobirthing trainer en verloskundige. Na jaren in de verloskunde merkte ik dat koppels die goed voorbereid waren een compleet andere bevalervaring hadden. Rustiger, bewuster en met meer vertrouwen.',
      'Bij Geboorte in Balans leer ik jou en je partner hoe je met ontspanningstechnieken en de kracht van je eigen geest de bevalling tegemoet kunt gaan. Geen magie, gewoon bewezen methoden.',
    ],
    highlights: [
      { icon: 'lucide:award',    label: 'Gecertificeerd hypnobirthing trainer' },
      { icon: 'lucide:heart',    label: 'Gespecialiseerd in koppelbegeleiding' },
      { icon: 'lucide:calendar', label: 'Al 4 jaar actief in Rotterdam' },
      { icon: 'lucide:star',     label: '4.8 gemiddeld op 84 reviews' },
    ],
    practical: [
      { icon: 'lucide:map-pin', label: 'Locatie',   value: 'Westersingel 45, 3014 GR Rotterdam' },
      { icon: 'lucide:clock',   label: 'Lestijden', value: 'Zaterdag 10:00 – 13:00' },
      { icon: 'lucide:phone',   label: 'Telefoon',  value: '06 – 98 76 54 32' },
      { icon: 'lucide:mail',    label: 'E-mail',    value: 'carmen@geboorte-in-balans.nl' },
    ],
    reviews: [
      {
        name: 'Mark (32)',
        course: 'Hypnobirthing voor Twee',
        avatar: 'https://storage.googleapis.com/banani-avatars/avatar%2Fmale%2F25-35%2FEuropean%2F2',
        text: 'Als partner had ik aanvankelijk mijn twijfels, maar Carmen heeft me echt meegenomen in het proces. We voelden ons allebei enorm goed voorbereid.',
        rating: 5,
      },
      {
        name: 'Julia (28)',
        course: 'Hypnobirthing voor Twee',
        avatar: 'https://storage.googleapis.com/banani-avatars/avatar%2Ffemale%2F25-35%2FEuropean%2F4',
        text: 'De cursus heeft mijn kijk op bevallen compleet veranderd. Van iets wat ik vreesde naar iets waar ik naar uitkeek. Ongelooflijk.',
        rating: 5,
      },
    ],
  },
  {
    slug: 'doula-sarah',
    website: 'https://doulasarah.nl',
    name: 'Doula Sarah',
    tagline: 'Privé bevalcursussen aan huis in Amsterdam e.o.',
    location: 'Amsterdam e.o.',
    city: 'Amsterdam',
    type: 'Samen met partner',
    rating: '5.0',
    reviewCount: 28,
    since: 2019,
    avatar: 'https://storage.googleapis.com/banani-avatars/avatar%2Ffemale%2F25-35%2FAfrican%2F1',
    hero: 'https://storage.googleapis.com/banani-generated-images/generated-images/06bd7004-eacd-4a1d-8934-75eb13ea2ca6.jpg',
    bio: [
      'Ik ben Sarah Okonkwo — doula en geboortecoach met een passie voor persoonlijke begeleiding. Ik geloof dat elke zwangerschap en bevalling uniek is, en dat de voorbereiding daar ook op moet aansluiten.',
      'Bij mij kom je thuis. Letterlijk. Ik kom naar jullie toe, zodat jullie in jullie eigen vertrouwde omgeving kunnen leren en oefenen. Geen groepsdruk, geen vaste planning — gewoon op jullie manier.',
    ],
    highlights: [
      { icon: 'lucide:award',    label: 'Gecertificeerd doula & geboortecoach' },
      { icon: 'lucide:home',     label: 'Cursus bij jullie thuis' },
      { icon: 'lucide:calendar', label: 'Flexibele planning' },
      { icon: 'lucide:star',     label: '5.0 gemiddeld op 28 reviews' },
    ],
    practical: [
      { icon: 'lucide:map-pin', label: 'Werkgebied', value: 'Amsterdam en omgeving (30 km)' },
      { icon: 'lucide:clock',   label: 'Beschikbaar', value: 'Ma t/m za, in overleg' },
      { icon: 'lucide:phone',   label: 'Telefoon',    value: '06 – 11 22 33 44' },
      { icon: 'lucide:mail',    label: 'E-mail',      value: 'sarah@doulasarah.nl' },
    ],
    reviews: [
      {
        name: 'Fatima (30)',
        course: 'Privé Bevalcursus Thuis',
        avatar: 'https://storage.googleapis.com/banani-avatars/avatar%2Ffemale%2F25-35%2FAfrican%2F2',
        text: 'Sarah heeft ons zo ontzettend goed voorbereid. Ze voelde aan wat we nodig hadden en paste de cursus volledig aan op onze situatie. Een 10.',
        rating: 5,
      },
    ],
  },
];

/**
 * Geeft alle aanbieders terug.
 * @returns {Promise<Provider[]>}
 */
export async function getAllProviders() {
  return ALL_PROVIDERS;
}

/**
 * Geeft een enkele aanbieder op slug.
 * @param {string} slug
 * @returns {Promise<Provider|undefined>}
 */
export async function getProviderBySlug(slug) {
  return ALL_PROVIDERS.find((p) => p.slug === slug);
}