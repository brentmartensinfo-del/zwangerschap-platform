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
    city: 'Amsterdam, Rotterdam',
    type: 'Allround bevallingscursus',
    rating: '4.9',
    reviewCount: 173,
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
    slug: 'geboortecentrum-amsterdam',
    website: 'https://geboortecentrum.nl/',
    name: 'Geboortecentrum Amsterdam',
    tagline: 'Bij het Geboortecentrum proberen wij jou als zwangere samen met je partner alles te bieden wat je tijdens je zwangerschap nodig hebt.',
    location: 'Amsterdam, Oud West',
    city: 'Amsterdam',
    type: 'Diverse cursussen',
    rating: '4.8',
    reviewCount: 203,
    since: 1991,
    avatar: 'https://geboortecentrum.nl/wp-content/uploads/2023/07/Groepsfoto-voor-de-praktijk-scaled-e1757684141457.jpg',
    hero: 'https://geboortecentrum.nl/wp-content/uploads/2022/04/praktijk_header_smal.jpg.avif',
    bio: [
    'Bij het Geboortecentrum proberen wij jou als zwangere samen met je partner alles te bieden wat je tijdens je zwangerschap nodig hebt. Behalve verloskundige zorg in Amsterdam bieden we ook kraamzorg en jullie hebben de keuze uit veel zwangerschapscursussen. We hebben een eigen cursuscentrum waar we werken met cursusdocenten die aansluiten op onze visie. Zij begeleiden jullie liefdevol en kundig in je zwangerschap en bereidenen jullie voor op de bevalling. Ook voor na de bevalling zijn er verschillende cursussen die je alleen of samen met je kindje kunt doen.',
    'Wij raden alle vrouwen aan om een zwangerschapscursus te volgen. Ook als je zwanger bent van je tweede kindje. Het is namelijk gewoon heel fijn om ook voor deze baby even de tijd en rust te nemen een uurtje per week. In de cursus zwangerschap leer je veel over het zwanger zijn en over de bevalling. Ook ontmoet je andere jonge moeders die straks een kindje hebben in dezelfde leeftijd als jouw kindje. Soms ontstaan vriendschappen voor het leven!',
    'Schrijf je rond 20 weken in bij een cursus.',
    'Voor vragen, ook administratief, over de verschillende cursussen kun je direct contact opnemen met de desbetreffende docent. De contact gegevens staan bij iedere cursus vermeld.'
    ],
    highlights: [
      { icon: 'lucide:award',    label: 'Gecertificeerde trainers' },
      { icon: 'lucide:heart',    label: 'Gegeven door experts' },
      { icon: 'lucide:calendar', label: 'Al 35 jaar actief in Amsterdam' },
      { icon: 'lucide:star',     label: '4.8 gemiddeld op 84 reviews' },
    ],
    practical: [
    { icon: 'lucide:map-pin', label: 'Locatie', value: 'De Genestetstraat 3-1\n1054 AW Amsterdam' },
    { icon: 'lucide:clock', label: 'Lestijden', value: 'Afhankelijk per cursus' },
    { icon: 'lucide:phone', label: 'Telefoon', value: '020 555 59 61' },
    { icon: 'lucide:mail', label: 'E-mail', value: 'assistentes@geboortecentrum.nl' }
    ],
    reviews: [
      {
        name: 'Mark (32)',
        course: 'Hypnobirthing voor twee',
        avatar: 'https://storage.googleapis.com/banani-avatars/avatar%2Fmale%2F25-35%2FEuropean%2F2',
        text: 'Het Geboortecentrum is een hele fijne organisatie met kundige vakmensen die je op een zeer prettige, aandachtvolle manier door de zwangerschap en bevalling heen coachen.',
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
  slug: 'the-house-of-balance',
  name: 'The House of Balance',
  tagline: 'Bevalcursus, zwangerschapsyoga en postnatale yoga in Amsterdam',
  type: 'Yoga & Geboortevoorbereiding',
  location: 'Amsterdam',
  since: '2013',
  website: 'https://thehouseofbalance.nl',
  hero: 'https://i.vimeocdn.com/video/2098859355-05d1266a8262fb700fededf8d9186575bd29c2486838270a3849f72c08310ad3-d?f=webp',
  avatar: 'https://thehouseofbalance.nl/wp-content/uploads/2022/06/THoB-logo-transparant-1024x486.png',
  rating: '4.9',
  reviewCount: '66',
  bio: [
    'Al meer dan 10 jaar verzorgt The House of Balance bevalcursussen en zwangerschapsyoga in Amsterdam. Wij zijn specialisten op het gebied van zwangerschapsyoga, geboortevoorbereiding en postnatale yoga.',
    'Onze cursussen combineren milde yoga met theoretische kennis over het bevallingsproces, ademhalingstechnieken en ontspanningsoefeningen. We begeleiden aanstaande ouders bij de voorbereiding op een zelfverzekerde bevalling.',
    'De cursussen zijn beschikbaar in zowel het Nederlands als het Engels, en worden gegeven op meerdere locaties in Amsterdam: het Geboortecentrum (West), Yoga Spot (Zuid) en De Nieuwe Yogaschool (Jordaan).',
  ],
  highlights: [
    { icon: 'lucide:award', label: 'Meer dan 10 jaar ervaring' },
    { icon: 'lucide:users', label: 'Kleine groepen (max. 10 deelnemers)' },
    { icon: 'lucide:languages', label: 'Cursussen in Nederlands én Engels' },
    { icon: 'lucide:star', label: '4.9 gemiddelde beoordeling (66 reviews)' },
  ],
  practical: [
    { icon: 'lucide:map-pin', label: 'Locaties', value: 'Amsterdam Oud-West (Geboortecentrum), Amsterdam-Zuid (Yoga Spot), Amsterdam Jordaan (De Nieuwe Yogaschool)' },
    { icon: 'lucide:clock', label: 'Lestijden', value: 'Zie inschrijfpagina voor actuele data en tijden' },
    { icon: 'lucide:phone', label: 'Telefoon', value: '+31 6 26718330 (ook WhatsApp)' },
    { icon: 'lucide:mail', label: 'E-mail', value: 'info@thehouseofbalance.nl' },
  ],
  reviews: [
    {
      name: 'Babette Hakenkruger',
      course: 'Bevalcursus & Zwangerschapsyoga',
      rating: 5,
      text: 'Superfijne cursus en precies waar ik naar zocht! Een combinatie van ademhaling, yoga en kennis over de bevalling. Ga nu echt met meer kennis en zelfvertrouwen het proces in.',
      avatar: 'https://storage.googleapis.com/banani-avatars/avatar%2Ffemale%2F25-35%2FEuropean%2F2',
    },
    {
      name: 'Josephine de Groot',
      course: 'Bevalcursus & Zwangerschapsyoga',
      rating: 5,
      text: 'Hele fijne zwangerschapsyoga en geboortevoorbereiding cursus! Het allerleukst vond ik de partnerles. De lessen waren een fijne mix tussen connectie met andere vrouwen, handige info over de bevalling en ontspannende yoga.',
      avatar: 'https://storage.googleapis.com/banani-avatars/avatar%2Ffemale%2F25-35%2FEuropean%2F1',
    },
    {
      name: 'Floor Smit',
      course: 'Zwangerschapsyoga',
      rating: 5,
      text: 'De perfecte yoga om in de juiste state of mind te komen tijdens de zwangerschap. De lessen voelde veilig, warm en gentle. Ik keek iedere keer weer uit naar de volgende les.',
      avatar: 'https://storage.googleapis.com/banani-avatars/avatar%2Ffemale%2F25-35%2FEuropean%2F3',
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