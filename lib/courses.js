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
 * @property {string}      slug
 * @property {string}      image
 * @property {string}      alt
 * @property {string[]}    labels
 * @property {string}      title
 * @property {string}      provider
 * @property {string}      rating
 * @property {string|null} ratingCount
 * @property {string}      description
 * @property {string}      price
 * @property {string[]}    [cities]         - Meerdere steden (nieuw)
 * @property {string|null} [city]           - Enkelvoudig stad (legacy, nog ondersteund)
 * @property {string}      [language]
 * @property {string}      [type]
 * @property {string}      [descriptionLong]
 * @property {string|null} [bookingUrl]
 * @property {{ period: string, title: string, body: string }[]} [curriculum]
 * @property {string[]}    [learningItems]
 * @property {string[]}    [includes]
 * @property {{ icon: string, text: string }[]} [guarantees]
 * @property {{ icon: string, title: string, body: string }[]} [practical]
 * @property {{ icon: string, label: string, value: string }[]} [quickInfo]
 */

const DEFAULT_CURRICULUM = [
  { period: 'Week 1-2', title: 'Basis, Houding & Ademhaling',   body: 'We starten met een kennismaking, theorie over de ademhaling en het vinden van de juiste basishouding. Je leert de eerste ontspanningsoefeningen.' },
  { period: 'Week 3-4', title: 'Kracht & Bekkenbodem',          body: 'Focus op het versterken van de spieren rondom je bekken en rug. We besteden veel aandacht aan het bewust aanspannen en ontspannen van de bekkenbodemspieren.' },
  { period: 'Week 5-6', title: 'Omgaan met Weeën & Pijn',       body: 'Praktische technieken om weeën op te vangen. Je leert welke houdingen bevorderlijk zijn voor de ontsluiting en hoe je diepe ademhaling inzet als pijnstilling.' },
  { period: 'Week 7-8', title: 'Bevalling & Kraamtijd',         body: 'De laatste voorbereidingen. We bespreken het moment van persen, houdingen tijdens de geboorte en herstel in de eerste weken na de bevalling.' },
];

const DEFAULT_LEARNING_ITEMS = [
  'Diepe ademhalingstechnieken voor pijnverlichting tijdens weeën.',
  'Versterken van bekkenbodem en rug om klachten te voorkomen.',
  'Ontspanningshoudingen die je thuis kunt oefenen.',
  'Bewust contact maken met je baby en voorbereiden op het moederschap.',
];

const DEFAULT_INCLUDES = [
  '8 wekelijkse fysieke lessen',
  'Gebruik van yogamatjes en kussens',
  'Thee en gezonde snacks na de les',
  'Toegang tot online audio-oefeningen',
];

const DEFAULT_GUARANTEES = [
  { icon: 'lucide:shield-check', text: 'Veilig betalen via iDEAL' },
  { icon: 'lucide:refresh-ccw',  text: 'Kosteloos annuleren tot 14 dagen vooraf' },
  { icon: 'lucide:award',        text: 'Geverifieerde aanbieder' },
];

const DEFAULT_PRACTICAL = [
  { icon: 'lucide:map-pin',      title: 'Locatie',       body: 'Kinkerstraat 123\n1053 EB Amsterdam' },
  { icon: 'lucide:car',          title: 'Parkeren',      body: 'Betaald parkeren in de straat. Fietsen kunnen direct voor de deur veilig geplaatst worden.' },
  { icon: 'lucide:shopping-bag', title: 'Zelf meenemen', body: 'Trek comfortabele kleding aan. Matjes, kussens en dekentjes zijn ruim aanwezig in de studio.' },
];

const DEFAULT_QUICK_INFO = [
  { icon: 'lucide:calendar-clock', label: 'Duur',          value: '8 weken (75 min per les)' },
  { icon: 'lucide:users',           label: 'Groepsgrootte', value: 'Kleine groep (max 8)' },
  { icon: 'lucide:languages',       label: 'Taal',          value: 'Nederlands' },
];

/** @type {Course[]} */
const POPULAR_COURSES = [
  {
    slug: 'De-niet-zo-standaard-zwangerschapscursus',
    featured: true,
    providerSlug: 'mom-en-co',
    image: 'https://momenco.nl/wp-content/uploads/2023/11/momenco-header-img.png',
    alt: 'Zwangere vrouw wijst naar haar buik',
    labels: ['1 dag tot 4 weken'],
    title: 'De niet-zo-standaard zwangerschapscursus',
    provider: 'Mom & Co',
    rating: '4.9',
    ratingCount: '128',
    description: 'Een baby onderweg? Dan ben je bij ons op de juiste plek. Met onze unieke en complete zwangerschapscursussen ontwikkeld door verloskundigen, begeleiden we jou én je (geboorte)partner op deze reis naar het ouderschap.',
    descriptionLong: 'Zwanger zijn kan best overweldigend zijn: Naast dat je lichaam keihard aan het werk is, is er van alles wat gaat veranderen. Die babykamer komt wel af, veel belangrijker is het dat je zorgt dat je straks positief terugkijkt op je geboorte-ervaring.\n\nDit is wat de zwangerschapscursus van Mom & Co is: een leuke, complete zwangerschapscursus voor zwangere én partner. Bomvol tools die jou de fundering geven om in je kracht te gaan staan, en te gaan voor die positieve ervaring!\n\nOnze zwangerschapscursussen worden gegeven door ervaren verloskundigen en soms een doula. Met de unieke combi van hypnobirthing- en mindfulness elementen met onze verloskundige kennis creëer jij die positieve mindset.\n\nNaast veel praktische informatie en een boost in je mindset, geven we je ook prachtige tools mee zoals ademhalings- en ontspanningstechnieken. Allemaal zodat jij in je kracht kan gaan staan, regie krijgt en je je lichaam zo goed mogelijk kan ondersteunen tijdens de bevalling. Met een sterke (geboorte)partner aan je zijde die weet wat die kan doen.\n\nEn wat als de bevalling anders loopt dan verwacht? Wat betekent een medische indicatie en hoe kan je óók dan een positieve ervaring creëren? Hoe het proces van de geboorte verloopt weten we niet, maar hoe jij om gaat met alles wat er gebeurd, daar heb je wél veel invloed op.',
    price: '€ 329',
    bookingUrl: 'https://momenco.nl',
    type: 'Complete bevallingscursus',
    cities: ['Amsterdam', 'Rotterdam'],
    languages: ['Nederlands', 'Engels'],
    curriculum: [
      { period: '4 weken', title: 'De 4-weekse zwangerschapscursus', body: 'Mom & co uitgebreide zwangerschapscursus, waar we je alles leren wat we weten. Met opdrachten voor thuis, veel ruimte voor vragen en 4 gezellige, informatieve bijeenkomsten.' },
      { period: '2 weken', title: 'De 2 weken durende zwangerschapscursus', body: 'Bereid je volledig voor op de bevalling met twee uitgebreide sessies en opdrachten voor de datenight tussendoor thuis.' },
      { period: '1 dag', title: 'De 1-daagse zwangerschapscursus (incl. lunch)', body: 'Samen één dag knallen, tijdens een gezellige, informatieve dag. Inclusief gezonde lunch!' },
      { period: 'Privé', title: 'De privé zwangerschapscursus', body: 'In de comfort van je eigen huis komt één van onze verloskundigen bij je langs voor een tailor-made sessie van drie uur.' },
    ],
    learningItems: [
      'Samen de regie nemen',
      'Gebruik van mindfulness',
      'Hypnobirthing tools',
      'Alles fases van geboorte',
    ],
    includes: [
      'Fysieke lessen met oefeningen',
      'Echte bevalverhalen',
      'Gezonde lunch van Sla',
      'Toegang tot online e-learning',
    ],
    guarantees: [
      { icon: 'lucide:shield-check', text: 'Meestal vergoed via je verzekering' },
      { icon: 'lucide:refresh-ccw',  text: 'Kosteloos annuleren tot 14 dagen vooraf' },
      { icon: 'lucide:award',        text: 'Geverifieerde aanbieder' },
    ],
    practical: [
      { icon: 'lucide:map-pin',      title: 'Locatie',       body: 'Amsterdam, Alkmaar, Breda, Doetichem en Haarlem.' },
      { icon: 'lucide:car',          title: 'Vervoer',      body: 'Alle onze locaties zijn goed te bereiken per auto of OV.' },
      { icon: 'lucide:shopping-bag', title: 'Zelf meenemen', body: 'Trek comfortabele kleding aan. Matjes en kussens aanwezig in de studio.' },
    ],
    quickInfo: [
      { icon: 'lucide:calendar-clock', label: 'Duur',          value: '1 dag tot 4 weken' },
      { icon: 'lucide:users',           label: 'Groepsgrootte', value: 'Kleine groep (max 8 koppels)' },
      { icon: 'lucide:languages',       label: 'Taal',          value: 'NL & ENG' },
    ],
  },
  {
    slug: 'hypnobirthing-voor-twee',
    providerSlug: 'geboortecentrum-amsterdam',
    image: 'https://images.squarespace-cdn.com/content/v1/5a2720408a02c70bedc3ca87/abca5562-b3e7-455d-b662-dd7f90252c29/Wellington+Obstetrics+-+Hypnobirthing+%26+Pain+Management.png',
    alt: 'Stel oefent hypnobirthing technieken in een rustige, warme omgeving',
    labels: ['4 weken', 'Hybride', 'NL'],
    title: 'Hypnobirthing voor Twee',
    provider: 'The HypnoBirth Course',
    rating: '4.8',
    ratingCount: '84',
    description: 'Een nuchtere en praktische cursus waar je samen met je partner leert ontspannen en vol vertrouwen de bevalling tegemoet gaat.',
    descriptionLong: 'Een nuchtere en praktische cursus waar je samen met je partner leert ontspannen... Meer informatie vind je op de website van de aanbieder.',
    price: '€ 220',
    bookingUrl: 'https://geboorte-in-balans.nl/hypnobirthing',
    type: 'Hypnobirthing',
    cities: ['Amsterdam', 'Den Haag'],
    language: 'Nederlands',
    curriculum: DEFAULT_CURRICULUM,
    learningItems: DEFAULT_LEARNING_ITEMS,
    includes: DEFAULT_INCLUDES,
    guarantees: DEFAULT_GUARANTEES,
    practical: DEFAULT_PRACTICAL,
    quickInfo: DEFAULT_QUICK_INFO,
  },
  {
    slug: 'online-cursus-goed-voorbereid',
    providerSlug: 'mom-en-co',
    image: 'https://i0.wp.com/krachtigbevallen.nl/wp-content/uploads/2020/10/DSC_0833ok-b-2952091091-1635242886246.jpg',
    alt: 'Zwangere vrouw volgt online cursus op laptop in een lichte ruimte',
    labels: ['Zelfstudie', 'Online', 'EN / NL'],
    title: 'Online Cursus: Goed Voorbereid',
    provider: 'Mama Academie',
    rating: '4.7',
    ratingCount: '15',
    description: "Volg de complete voorbereiding in je eigen tempo. Inclusief uitgebreide video's, een werkboek en maandelijkse live Q&A sessies.",
    price: '€ 89',
    bookingUrl: 'https://mamaacademie.nl/goed-voorbereid',
    type: 'Online cursussen',
    city: null,
    language: 'Nederlands',
    curriculum: DEFAULT_CURRICULUM,
    learningItems: DEFAULT_LEARNING_ITEMS,
    includes: DEFAULT_INCLUDES,
    guarantees: DEFAULT_GUARANTEES,
    practical: DEFAULT_PRACTICAL,
    quickInfo: DEFAULT_QUICK_INFO,
  },
  {
    slug: 'intensieve-bevalcursus-weekend',
    image: 'https://www.liesinbalans.com/uploads/7/2/0/6/72067507/28616523-1818225478478423-7162459316943799848-o_orig.jpg',
    alt: 'Groep zwangere vrouwen in een kring tijdens een weekendcursus',
    labels: ['1 weekend', 'Fysiek', 'NL'],
    title: 'Intensieve Bevalcursus (Weekend)',
    provider: 'Praktijk De Kern, Utrecht',
    rating: '5.0',
    ratingCount: '42',
    description: 'Geen tijd voor wekelijkse lessen? In dit intensieve weekend leer je alles over de fysiologie van de bevalling en pijnbestrijding.',
    descriptionLong: 'Geen tijd voor wekelijkse lessen? In dit intensieve weekend leer je alles over de fysiologie van de bevalling en pijnbestrijding. Meer informatie vind je op de website van de aanbieder.',
    price: '€ 195',
    bookingUrl: 'https://praktijdekern.nl/bevalcursus-weekend',
    type: 'Complete bevallingscursus',
    city: 'Utrecht',
    language: 'Nederlands',
    curriculum: DEFAULT_CURRICULUM,
    learningItems: DEFAULT_LEARNING_ITEMS,
    includes: DEFAULT_INCLUDES,
    guarantees: DEFAULT_GUARANTEES,
    practical: DEFAULT_PRACTICAL,
    quickInfo: DEFAULT_QUICK_INFO,
  },
];

/** @type {Course[]} */
const NEW_COURSES = [
  {
  slug: 'prive-bevalcursus-amsterdam',
  featured: false,
  providerSlug: 'the-house-of-balance',
  image: 'https://images.pexels.com/photos/5424711/pexels-photo-5424711.jpeg',
  alt: 'Privé bevalcursus met persoonlijke begeleiding',
  labels: ['Privé / 1-op-1', 'Thuis of online', 'NL & EN'],
  title: 'Privé Bevalcursus Amsterdam',
  provider: 'The House of Balance',
  rating: '4.9',
  ratingCount: '66',
  description: 'Een volledig op jou afgestemde bevalcursus — thuis of online. Ideaal als je 1-op-1 aandacht wilt, medische redenen hebt, of snel wilt starten.',
  descriptionLong: 'Bij de privé cursus van The House of Balance krijg je een traject dat volledig is afgestemd op jouw situatie en behoeften. De sessies zijn online of bij jou thuis — je hoeft niet de deur uit.\n\nDe privé cursus is ideaal als je 1-op-1 aandacht fijn vindt, om medische redenen rust nodig hebt, al eerder zwanger bent geweest en geen behoefte hebt aan een groepscursus, of als de bevalling dichtbij is en je alsnog een goede voorbereiding wilt.\n\nNa een telefonische intake wordt het aantal sessies en de inhoud volledig op jou afgestemd. Kosten zijn gedeeltelijk te declareren bij de zorgverzekeraar.',
  price: 'Vanaf € 160',
  bookingUrl: 'https://thehouseofbalance.nl/contact/',
  type: 'Complete bevallingscursus',
  cities: ['Amsterdam'],
  languages: ['Nederlands', 'Engels'],
  curriculum: [
    { period: 'Intake', title: 'Telefonisch kennismakingsgesprek', body: 'Bespreking van jouw situatie, wensen en mogelijkheden. Op basis hiervan wordt het traject samengesteld.' },
    { period: 'Sessies', title: '1-op-1 begeleiding op maat', body: 'Combinatie van zwangerschapsyoga, ademhalingstechnieken, ontspanningsoefeningen en theorie over het geboorteproces.' },
    { period: 'Optioneel', title: 'Partnerles (2,5 uur)', body: 'Praktische tools en uitleg voor je partner om je optimaal te ondersteunen tijdens de bevalling.' },
  ],
  learningItems: [
    'Zwangerschapsyoga afgestemd op jouw lichaam en situatie',
    'Ademhalingstechnieken voor tijdens de bevalling',
    'Omgaan met pijn en weeën',
    'Bevalhoudingen en de persfase',
    'Yoga nidra voor zwangerschap en bevalling',
    'Postpartum informatie en voorbereiding',
  ],
  includes: [
    'Telefonische intake',
    'Sessies volledig op maat (thuis of online)',
    'Optioneel partnerles van 2,5 uur',
    'Deels declareerbaar bij zorgverzekeraar',
  ],
  guarantees: [
    { icon: 'lucide:shield-check', text: 'Geverifieerde aanbieder' },
    { icon: 'lucide:user', text: 'Volledig 1-op-1 aandacht' },
    { icon: 'lucide:home', text: 'Thuis of online te volgen' },
  ],
  practical: [
    { icon: 'lucide:map-pin', title: 'Locatie', body: 'Bij jou thuis in Amsterdam of online via video' },
    { icon: 'lucide:clock', title: 'Duur', body: '1 sessie = 1,5 uur · Pakket op maat samen te stellen' },
    { icon: 'lucide:phone', title: 'Aanmelden', body: 'Via contact pagina — telefonische intake volgt' },
  ],
  quickInfo: [
    { icon: 'lucide:user', label: 'Format', value: 'Privé / 1-op-1' },
    { icon: 'lucide:clock', label: 'Per sessie', value: '1,5 uur' },
    { icon: 'lucide:languages', label: 'Taal', value: 'Nederlands & Engels' },
    { icon: 'lucide:map-pin', label: 'Locatie', value: 'Thuis of online' },
  ],
},
{
  slug: 'online-zwangerschapscursus',
  featured: false,
  providerSlug: 'the-house-of-balance',
  image: 'https://images.pexels.com/photos/7990107/pexels-photo-7990107.jpeg',
  alt: 'Online zwangerschapsyoga cursus thuis volgen',
  labels: ['Online', 'Op eigen tempo', 'NL & EN'],
  title: 'Online Zwangerschapscursus',
  provider: 'The House of Balance',
  rating: '4.9',
  ratingCount: '66',
  description: 'Volg de volledige bevalcursus online — zwangerschapsyoga, ademhaling, geboortevoorbereiding en postnatale oefeningen. Op jouw moment en tempo.',
  descriptionLong: 'The House of Balance biedt meerdere online cursussen aan voor tijdens en na de zwangerschap. Alles is digitaal te volgen in je eigen tempo, vanuit huis.\n\nHet online aanbod bestaat uit een zwangerschapscursus met yoga en geboortevoorbereiding, een postnatale yogacursus voor herstel na de bevalling, en een Shantala babymassagecursus (in het Engels) om dieper te verbinden met je baby.\n\nAlle cursussen zijn direct beschikbaar na aanmelding via het online platform.',
  price: 'Op aanvraag',
  bookingUrl: 'https://thehouseofbalance.nl/producten/',
  type: 'Online cursussen',
  cities: [],
  languages: ['Nederlands', 'Engels'],
  curriculum: [
    { period: 'Module 1', title: 'Zwangerschapsyoga & geboortevoorbereiding', body: 'Yogalessen, ademhalingstechnieken, ontspanningsoefeningen en theorie over het bevallingsproces — op jouw tempo.' },
    { period: 'Module 2', title: 'Postnatale yoga', body: 'Korte lessen gericht op bekkenbodemherstel, buikspieren, ontspanning en oefeningen samen met je baby.' },
    { period: 'Module 3', title: 'Shantala babymassage (Engels)', body: 'Leer basistechnieken van de Shantala babymassage, inclusief technieken voor krampjes, verkoudheid en tandjes.' },
  ],
  learningItems: [
    'Zwangerschapsyoga op eigen tempo thuis',
    'Ademhalingstechnieken voor de bevalling',
    'Bekkenbodem- en buikspiertraining postnataal',
    'Basistechnieken Shantala babymassage',
    'Yoga nidra voor zwangerschap en bevalling',
    'Ontspannings- en meditatietechnieken',
  ],
  includes: [
    'Direct toegang na aanmelding',
    'Online zwangerschapscursus met yoga',
    'Postnatale yogacursus met baby',
    'Shantala babymassagecursus (Engels)',
    'Op eigen tempo te volgen',
  ],
  guarantees: [
    { icon: 'lucide:shield-check', text: 'Geverifieerde aanbieder' },
    { icon: 'lucide:monitor', text: 'Direct online beschikbaar' },
    { icon: 'lucide:clock', text: 'Volg op jouw eigen tempo' },
  ],
  practical: [
    { icon: 'lucide:monitor', title: 'Platform', body: 'Online via het eigen leerplatform van The House of Balance' },
    { icon: 'lucide:clock', title: 'Toegang', body: 'Direct na aanmelding beschikbaar' },
    { icon: 'lucide:shopping-bag', title: 'Zelf meenemen', body: 'Yogamat en comfortabele kleding voor de oefeningen' },
  ],
  quickInfo: [
    { icon: 'lucide:monitor', label: 'Format', value: 'Volledig online' },
    { icon: 'lucide:clock', label: 'Tempo', value: 'Zelf te bepalen' },
    { icon: 'lucide:languages', label: 'Taal', value: 'Nederlands & Engels' },
    { icon: 'lucide:map-pin', label: 'Locatie', value: 'Overal' },
  ],
},
  {
    slug: 'zwangerschapspilates',
    image: 'https://www.themompany.com/wp-content/uploads/2021/12/IMG_6328-2.jpg',
    alt: 'Pilates apparatuur in een rustige, lichte studio voor zwangere vrouwen',
    labels: ['6 weken', 'Fysiek', 'NL'],
    title: 'Zwangerschapspilates',
    provider: 'Studio Flow, Haarlem',
    rating: 'Nieuw',
    ratingCount: null,
    description: 'Blijf fit en sterk tijdens je zwangerschap met veilige pilates oefeningen gericht op je core en bekken.',
    price: '€ 125',
    bookingUrl: 'https://studioflow.nl/zwangerschapspilates',
    type: 'ZwangerFit',
    city: 'Rotterdam',
    language: 'Nederlands',
    curriculum: DEFAULT_CURRICULUM,
    learningItems: DEFAULT_LEARNING_ITEMS,
    includes: DEFAULT_INCLUDES,
    guarantees: DEFAULT_GUARANTEES,
    practical: DEFAULT_PRACTICAL,
    quickInfo: DEFAULT_QUICK_INFO,
  },
  {
    slug: 'mindful-pregnancy-course',
    image: 'https://image.oudersvannu.nl/250391553/width/2048/mindfulness-tijdens-je-zwangerschap',
    alt: 'Zwangere vrouw mediteert buiten bij zachte zonsopgang',
    labels: ['8 weken', 'Online', 'EN'],
    title: 'Mindful Pregnancy Course',
    provider: 'Mindful Birth Academy',
    rating: '5.0',
    ratingCount: '12',
    description: 'Learn how to manage anxiety and prepare mentally for birth using proven mindfulness techniques.',
    price: '€ 150',
    bookingUrl: 'https://mindfulbirthacademy.com/pregnancy',
    type: 'Mindfulness',
    city: null,
    languages: ['Engels'],
    curriculum: DEFAULT_CURRICULUM,
    learningItems: DEFAULT_LEARNING_ITEMS,
    includes: DEFAULT_INCLUDES,
    guarantees: DEFAULT_GUARANTEES,
    practical: DEFAULT_PRACTICAL,
    quickInfo: DEFAULT_QUICK_INFO,
  },
];

const ALL_COURSES = [
  ...POPULAR_COURSES,
  ...NEW_COURSES,
  {
    slug: 'De-Online-Zwangerschapscursus',
    providerSlug: 'mom-en-co',
    image: 'https://momenco.nl/wp-content/uploads/2024/03/Ontwerp-zonder-titel-e1683026990389.png',
    alt: 'Zwangere vrouw wijst naar haar buik',
    labels: ['Online'],
    title: 'De Online Zwangerschapscursus',
    provider: 'Mom & Co',
    rating: '4.8',
    ratingCount: '70',
    description: 'Een baby onderweg? Dan ben je bij ons op de juiste plek. Met onze unieke en complete zwangerschapscursussen ontwikkeld door verloskundigen, begeleiden we jou én je (geboorte)partner op deze reis naar het ouderschap.',
    descriptionLong: 'Zwanger zijn kan best overweldigend zijn: Naast dat je lichaam keihard aan het werk is, is er van alles wat gaat veranderen. Die babykamer komt wel af, veel belangrijker is het dat je zorgt dat je straks positief terugkijkt op je geboorte-ervaring.\n\nDit is wat de zwangerschapscursus van Mom & Co is: een leuke, complete zwangerschapscursus voor zwangere én partner. Bomvol tools die jou de fundering geven om in je kracht te gaan staan, en te gaan voor die positieve ervaring!\n\nOnze zwangerschapscursussen worden gegeven door ervaren verloskundigen en soms een doula. Met de unieke combi van hypnobirthing- en mindfulness elementen met onze verloskundige kennis creëer jij die positieve mindset.\n\nNaast veel praktische informatie en een boost in je mindset, geven we je ook prachtige tools mee zoals ademhalings- en ontspanningstechnieken. Allemaal zodat jij in je kracht kan gaan staan, regie krijgt en je je lichaam zo goed mogelijk kan ondersteunen tijdens de bevalling. Met een sterke (geboorte)partner aan je zijde die weet wat die kan doen.\n\nEn wat als de bevalling anders loopt dan verwacht? Wat betekent een medische indicatie en hoe kan je óók dan een positieve ervaring creëren? Hoe het proces van de geboorte verloopt weten we niet, maar hoe jij om gaat met alles wat er gebeurd, daar heb je wél veel invloed op.',
    price: '€ 149,25',
    bookingUrl: 'https://momenco.nl',
    type: 'Online cursussen',
    cities: ['Amsterdam', 'Rotterdam'],
    language: 'Nederlands',
    curriculum: [
      { period: '4 weken', title: 'De 4-weekse zwangerschapscursus', body: 'Mom & co uitgebreide zwangerschapscursus, waar we je alles leren wat we weten. Met opdrachten voor thuis, veel ruimte voor vragen en 4 gezellige, informatieve bijeenkomsten.' },
      { period: '2 weken', title: 'De 2 weken durende zwangerschapscursus', body: 'Bereid je volledig voor op de bevalling met twee uitgebreide sessies en opdrachten voor de datenight tussendoor thuis.' },
      { period: '1 dag', title: 'De 1-daagse zwangerschapscursus (incl. lunch)', body: 'Samen één dag knallen, tijdens een gezellige, informatieve dag. Inclusief gezonde lunch!' },
      { period: 'Privé', title: 'De privé zwangerschapscursus', body: 'In de comfort van je eigen huis komt één van onze verloskundigen bij je langs voor een tailor-made sessie van drie uur.' },
    ],
    learningItems: [
      'Samen de regie nemen',
      'Gegeven door verloskundigen',
      'Hypnobirthing tools',
      'Theorie en opdrachten',
    ],
    includes: [
      'Fysieke lessen met oefeningen',
      'Echte bevalverhalen',
      'Gezonde lunch van Sla',
      'Toegang tot online e-learning',
    ],
    guarantees: [
      { icon: 'lucide:shield-check', text: 'Meestal vergoed via je verzekering' },
      { icon: 'lucide:refresh-ccw',  text: 'Kosteloos annuleren tot 14 dagen vooraf' },
      { icon: 'lucide:award',        text: 'Geverifieerde aanbieder' },
    ],
    practical: [
      { icon: 'lucide:map-pin',      title: 'Locatie',       body: 'Amsterdam, Alkmaar, Breda, Doetichem en Haarlem.' },
      { icon: 'lucide:car',          title: 'Vervoer',      body: 'Alle onze locaties zijn goed te bereiken per auto of OV.' },
      { icon: 'lucide:shopping-bag', title: 'Zelf meenemen', body: 'Trek comfortabele kleding aan. Matjes en kussens aanwezig in de studio.' },
    ],
    quickInfo: [
      { icon: 'lucide:calendar-clock', label: 'Duur',          value: '1 dag tot 4 weken' },
      { icon: 'lucide:users',           label: 'Groepsgrootte', value: 'Kleine groep (max 8 koppels)' },
      { icon: 'lucide:languages',       label: 'Taal',          value: 'Nederlands' },
    ],
  },
  {
  slug: 'bevalcursus-zwangerschapsyoga-amsterdam',
  featured: true,
  providerSlug: 'the-house-of-balance',
  image: 'https://images.pexels.com/photos/3984363/pexels-photo-3984363.jpeg',
  alt: 'Zwangere vrouwen tijdens zwangerschapsyoga les in Amsterdam',
  labels: ['7 weken', 'Incl. partnerles', 'NL & EN'],
  title: 'Bevalcursus & Zwangerschapsyoga Amsterdam',
  provider: 'The House of Balance',
  rating: '4.9',
  ratingCount: '66',
  description: 'Een 7-weekse cursus die yoga combineert met geboortevoorbereiding. Fysiek én mentaal klaar voor een zelfverzekerde bevalling, samen met je partner.',
  descriptionLong: 'De bevalcursus van The House of Balance combineert milde zwangerschapsyoga met uitgebreide geboortevoorbereiding. In 7 weken leer je alles wat je nodig hebt: van ademhalingstechnieken en bevalhoudingen tot meditatie en de theorie van het geboorteproces.\n\nJe partner speelt een actieve rol via een aparte partnerles van 3 uur. Na de bevalling sluit je af met een terugkomles met baby\'s. De cursus wordt gegeven op drie locaties in Amsterdam en is beschikbaar in zowel het Nederlands als het Engels.\n\nDeelnemers krijgen gratis toegang tot een uitgebreid online platform met videomateriaal (t.w.v. €165). Gemiste lessen kunnen kosteloos worden ingehaald.',
  price: '€ 339',
  bookingUrl: 'https://thehouseofbalance.nl/inschrijven/',
  type: 'Complete bevallingscursus',
  cities: ['Amsterdam'],
  languages: ['Nederlands', 'Engels'],
  curriculum: [
    { period: 'Les 1–5', title: 'Zwangerschapsyoga & geboortevoorbereiding', body: 'Milde yoga, ademhalingstechnieken, ontspanningsoefeningen en theorie over het bevallingsproces. Elke les duurt 1,5 uur.' },
    { period: 'Les 6', title: 'Partnerworkshop (3 uur)', body: 'Samen met je partner dieper ingaan op ademhaling, bevalhoudingen en praktische ondersteuning tijdens de bevalling.' },
    { period: 'Les 7', title: 'Terugkomles met baby\'s', body: 'Herenigen met andere mama\'s en baby\'s, ervaringen delen en terugkijken op de bevalling.' },
  ],
  learningItems: [
    'Zwangerschapsyogahoudingen die je lichaam ondersteunen',
    'Ademhalingstechnieken voor tijdens de bevalling',
    'Ontspannings- en meditatietechnieken',
    'Theorie over het geboorteproces en de persfase',
    'Hoe je partner je optimaal kan ondersteunen',
    'Informatie over de postpartum periode',
  ],
  includes: [
    '5 zwangerschapsyogalessen van 1,5 uur',
    'Partnerles van 3 uur',
    'Terugkomles met baby\'s',
    'Toegang tot online platform met videomateriaal (t.w.v. €165)',
    'Kosteloos les inhalen op andere dag of locatie',
  ],
  guarantees: [
    { icon: 'lucide:shield-check', text: 'Geverifieerde aanbieder' },
    { icon: 'lucide:refresh-ccw', text: 'Gemiste les kosteloos inhalen' },
    { icon: 'lucide:award', text: 'Meer dan 10 jaar ervaring' },
  ],
  practical: [
    { icon: 'lucide:map-pin', title: 'Locaties', body: 'Geboortecentrum (West), Yoga Spot (Zuid), De Nieuwe Yogaschool (Jordaan) — goed bereikbaar met OV en fiets' },
    { icon: 'lucide:clock', title: 'Duur', body: '±7 weken · 5 yogalessen + partnerworkshop + terugkomles' },
    { icon: 'lucide:shopping-bag', title: 'Zelf meenemen', body: 'Comfortabele kleding, yogamat (aanwezig in de studio), water' },
  ],
  quickInfo: [
    { icon: 'lucide:calendar-clock', label: 'Duur', value: '±7 weken' },
    { icon: 'lucide:users', label: 'Groepsgrootte', value: 'Max. 10 deelnemers' },
    { icon: 'lucide:languages', label: 'Taal', value: 'Nederlands & Engels' },
    { icon: 'lucide:map-pin', label: 'Locatie', value: 'Amsterdam (3 locaties)' },
  ],
},
{
  slug: 'postnatale-yoga-amsterdam',
  featured: false,
  providerSlug: 'the-house-of-balance',
  image: 'https://images.pexels.com/photos/7491225/pexels-photo-7491225.jpeg',
  alt: 'Moeder met baby tijdens postnatale yogales',
  labels: ['Postnataal', 'Met baby', 'NL & EN'],
  title: 'Postnatale Yoga met Baby Amsterdam',
  provider: 'The House of Balance',
  rating: '4.9',
  ratingCount: '66',
  description: 'Herstel na je bevalling in een kleine, warme groep — samen met je baby. Werken aan bekkenbodem, buikspieren en ontspanning.',
  descriptionLong: 'De postnatale yogacursus van The House of Balance biedt nieuwe moeders de ruimte om samen met hun baby te werken aan het lichamelijke herstel na de bevalling. In kleine groepen van maximaal 8 personen, met persoonlijke aandacht.\n\nDe lessen zijn gericht op het versterken van de bekkenbodem, buikspieren, onderrug en benen. Daarnaast is er aandacht voor het losmaken van spanning in rug, nek en schouders, en ruimte voor het uitwisselen van ervaringen.\n\nDeelnemers krijgen toegang tot een online lesomgeving met gerichte oefeningen en korte yogalessen voor thuis.',
  price: 'Op aanvraag',
  bookingUrl: 'https://thehouseofbalance.nl/inschrijven/',
  type: 'Zwangerschapsyoga',
  cities: ['Amsterdam'],
  languages: ['Nederlands', 'Engels'],
  curriculum: [],
  learningItems: [
    'Versterken van bekkenbodem en buikspieren',
    'Losmaken van spanning in rug, nek en schouders',
    'Ontspanningsoefeningen samen met je baby',
    'Verbinding maken met andere nieuwe moeders',
  ],
  includes: [
    'Wekelijkse yogales van 1 uur',
    'Baby\'s meer dan welkom',
    'Toegang tot online lesomgeving met thuisoefeningen',
    'Kleine groep (max. 8 deelnemers)',
  ],
  guarantees: [
    { icon: 'lucide:shield-check', text: 'Geverifieerde aanbieder' },
    { icon: 'lucide:heart', text: 'Baby\'s altijd welkom' },
    { icon: 'lucide:award', text: 'Meer dan 10 jaar ervaring' },
  ],
  practical: [
    { icon: 'lucide:map-pin', title: 'Locaties', body: 'Meerdere locaties in Amsterdam — zie website voor actuele planning' },
    { icon: 'lucide:clock', title: 'Lestijden', value: 'Zie inschrijfpagina voor actuele data' },
    { icon: 'lucide:shopping-bag', title: 'Zelf meenemen', body: 'Comfortabele kleding, yogamat, luiertas voor je baby' },
  ],
  quickInfo: [
    { icon: 'lucide:calendar-clock', label: 'Frequentie', value: '1× per week' },
    { icon: 'lucide:users', label: 'Groepsgrootte', value: 'Max. 8 deelnemers' },
    { icon: 'lucide:languages', label: 'Taal', value: 'Nederlands & Engels' },
    { icon: 'lucide:map-pin', label: 'Locatie', value: 'Amsterdam' },
  ],
},
];

// ─── Exporteerbare fetch-functies ─────────────────────────────────────────────

export async function getPopularCourses() {
  return POPULAR_COURSES;
}

export async function getNewCourses() {
  return NEW_COURSES;
}

/**
 * Geeft alle cursussen terug, optioneel gefilterd.
 * Ondersteunt zowel cities[] (nieuw) als city (legacy).
 */
export async function getAllCourses({ type, city, language, q, price, sort } = {}) {
  let results = ALL_COURSES;

  if (type)     results = results.filter((c) => c.type === type);

  // ── Stap 2: stad filter ondersteunt zowel cities[] als city ──
  if (city)     results = results.filter((c) =>
    Array.isArray(c.cities) ? c.cities.includes(city) : c.city === city
  );

  if (language) results = results.filter((c) =>
  Array.isArray(c.languages) ? c.languages.includes(language) : c.language === language
  );

  if (q) {
    const needle = q.toLowerCase();
    results = results.filter(
      (c) =>
        c.title.toLowerCase().includes(needle) ||
        c.provider.toLowerCase().includes(needle) ||
        c.description.toLowerCase().includes(needle),
    );
  }

  if (price === 'low')  results = results.filter((c) => parsePrice(c.price) <= 50);
  if (price === 'mid')  results = results.filter((c) => parsePrice(c.price) > 50 && parsePrice(c.price) <= 150);
  if (price === 'high') results = results.filter((c) => parsePrice(c.price) > 150);

  if (sort === 'prijs-laag')  results = [...results].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
  if (sort === 'prijs-hoog')  results = [...results].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
  if (sort === 'beoordeling') results = [...results].sort((a, b) => parseRating(b.rating) - parseRating(a.rating));

  return results;
}

function parsePrice(price) {
  return parseInt(price.replace(/[^\d]/g, ''), 10) || 0;
}

function parseRating(rating) {
  return parseFloat(rating) || 0;
}

export async function getCourseBySlug(slug) {
  return ALL_COURSES.find((c) => c.slug === slug);
}

/**
 * Geeft beschikbare filter-opties terug.
 * Stap 3: steden worden afgeleid uit zowel cities[] als city.
 */
export async function getFilterOptions() {
  // ── Stap 3: flatMap ondersteunt zowel cities[] als city ──
  const cities = [...new Set(
    ALL_COURSES.flatMap((c) =>
      Array.isArray(c.cities) ? c.cities : c.city ? [c.city] : []
    ),
  )].sort((a, b) => a.localeCompare(b, 'nl'));

  return {
    types: ['Complete bevallingscursus', 'Hypnobirthing', 'Ademhalingscursus', 'Borstvoedingscursus', 'Haptonomie', 'Slaaptraining', 'Zwangerschapsyoga', 'ZwangerFit', 'Mindfulness', 'Partnercursus', 'Online cursussen'],
    cities,
    languages: ['Nederlands', 'Engels'],
  };
}