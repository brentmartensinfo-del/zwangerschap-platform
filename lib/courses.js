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
   * @property {string}      [descriptionLong] - Uitgebreide omschrijving voor de detailpagina
   * @property {string|null}  [bookingUrl]    - Externe boekings-URL van de aanbieder
   * @property {{ period: string, title: string, body: string }[]} [curriculum]  - Programma-onderdelen
   * @property {string[]}    [learningItems]  - Leerdoelen
   * @property {string[]}    [includes]       - Wat is inbegrepen
   * @property {{ icon: string, text: string }[]} [guarantees] - Garanties in de boekingskaart
   * @property {{ icon: string, title: string, body: string }[]} [practical] - Praktische info
   * @property {{ icon: string, label: string, value: string }[]} [quickInfo] - Snelle info-rij
   */

  /**
   * Gedeelde standaardwaarden voor cursusdetailvelden.
   * Cursussen zonder eigen data vallen terug op deze waarden.
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
      slug: 'studio-vesper',
      providerSlug: 'studio-vesper', 
      image: 'https://momenco.nl/wp-content/uploads/2023/11/momenco-header-img.png',
      alt: 'Zwangere vrouw wijst naar haar buik',
      labels: ['1 dag tot 4 weken', 'Fysiek', 'NL'],
      title: 'De niet-zo-standaard zwangerschapscursus',
      provider: 'Mom & Co',
      rating: '4.9',
      ratingCount: '128',
      description: 'Een baby onderweg? Dan ben je bij ons op de juiste plek. Met onze unieke en complete zwangerschapscursussen ontwikkeld door verloskundigen, begeleiden we jou én je (geboorte)partner op deze reis naar het ouderschap.',
      descriptionLong: 'Zwanger zijn kan best overweldigend zijn: Naast dat je lichaam keihard aan het werk is, is er van alles wat gaat veranderen. Die babykamer komt wel af, veel belangrijker is het dat je zorgt dat je straks positief terugkijkt op je geboorte-ervaring. Dus moet je goed voorbereid zijn; want dan kan je de geboorte van je kleinte met kracht, vertrouwen en met de juiste tools aan gaan – én kan je meebewegen als het anders loopt dan verwacht. \n\nDit is wat de zwangerschapscursus van Mom & Co’s is: een leuke, complete zwangerschapscursus voor zwangere én partner. Bomvol tools die jou de fundering geven om in je kracht te gaan staan, en te gaan voor die positieve ervaring! ',
      price: '€ 330',
      bookingUrl: 'https://momenco-online.nl/alle-online-cursussen/',
      type: 'Zwangerschapsyoga',
      city: 'Amsterdam',
      language: 'Nederlands',
      curriculum: [
        { period: 'Week 1', title: 'De 4-weekse zwangerschapscursus',   body: 'Mom & co’s ultieme en super uitgebreide zwangerschapscursus, waar we je álles leren wat we weten. Met opdrachten voor thuis, veel ruimte voor vragen en 4 gezellige, informatieve bijeenkomsten is er zowel veel te doen als op te steken, met veel verbinding en herkenning.' },
        { period: 'Week 2', title: 'De 2 weken durende zwangerschapscursus',          body: 'Bereid je volledig voor op de bevalling met twee uitgebreide sessies en opdrachten voor de ‘datenight’ tussendoor thuis. Deze 2 weken durende zwangerschapscursus is ook zeer complete, maar iets meer gefocussed.' },
        { period: 'Week 3', title: 'De 1-daagse zwangerschapscursus (incl. lunch)',       body: 'Samen één dag knallen, tijdens een gezellige, informatieve en iets intensiever dan de andere cursussen. Dat is de 1 daagse zwangerschapscursus van Mom & co. Een echte stoomcursus, samen met de andere deelnemers ‘deep-diven’ en de babymodus écht aan switchen. Inclusief gezellige en gezonde lunch!' },
        { period: 'Week 4', title: 'De privé zwangerschapscursus',         body: 'In de comfort van je eigen huis komt één van onze verloskundigen bij je langs, om een ‘tailor-made’ sessie van drie uur te geven die je samen van te voren hebt voorbereid, om zo je specifieke wensen en vragen te tackelen.' },
        { period: 'e-Learning', title: 'De Online Zwangerschapscursus',         body: 'De complete zwangerschapscursus van Mom & co. In een persoonlijke online omgeving, te volgen waar en wanneer je maar wil.' },
      ],
      learningItems: [
        'Alles over de verzorging van je baby.',
        'Meest voorkomende ziektebeelden.',
        'Borst- en flesvoeding.',
        'Slaap (en het gebrek daaraan).',
      ],
      includes: [
        'Fysieke lessen met oefeningen',
        'Echte bevalverhalen',
        'Gezonde lunch van Sla',
        'Toegang tot online e-learning',
      ],
      guarantees: [
        { icon: 'lucide:shield-check', text: 'Meestal vergoed via je vezekering' },
        { icon: 'lucide:refresh-ccw',  text: 'Kosteloos annuleren tot 14 dagen vooraf' },
        { icon: 'lucide:award',        text: 'Geverifieerde aanbieder' },
      ],
      practical: [
        { icon: 'lucide:map-pin',      title: 'Locatie',       body: 'Mom & Co \nLaagte Kadijk 148 \n1018 ZD Amsterdam' },
        { icon: 'lucide:car',          title: 'Parkeren',      body: 'Betaald parkeren in de straat. Fietsen kunnen direct voor de deur veilig geplaatst worden.' },
        { icon: 'lucide:shopping-bag', title: 'Zelf meenemen', body: 'Trek comfortabele kleding aan. Matjes en kussens aanwezig in de studio.' },
      ],
      quickInfo: [
        { icon: 'lucide:calendar-clock', label: 'Duur',          value: '1 dag tot 4 weken' },
        { icon: 'lucide:users',           label: 'Groepsgrootte', value: 'Kleine groep (max 8 koppels)' },
        { icon: 'lucide:languages',       label: 'Taal',          value: 'Nederlands' },
      ],
    },
    {
      slug: 'hypnobirthing-voor-twee',
      image: 'https://images.squarespace-cdn.com/content/v1/5a2720408a02c70bedc3ca87/abca5562-b3e7-455d-b662-dd7f90252c29/Wellington+Obstetrics+-+Hypnobirthing+%26+Pain+Management.png',
      alt: 'Stel oefent hypnobirthing technieken in een rustige, warme omgeving',
      labels: ['4 weken', 'Hybride', 'NL'],
      title: 'Hypnobirthing voor Twee',
      provider: 'The HypnoBirth Course',
      rating: '4.8',
      ratingCount: '84',
      description: 'Een nuchtere en praktische cursus waar je samen met je partner leert ontspannen en vol vertrouwen de bevalling tegemoet gaat.',
      descriptionLong: 'Een nuchtere en praktische cursus waar je samen met je partner leert ontspannen ... Meer informatie vind je op de website van de aanbieder.',
      price: '€ 220',
      bookingUrl: 'https://geboorte-in-balans.nl/hypnobirthing',
      type: 'Hypnobirthing',
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
      slug: 'online-cursus-goed-voorbereid',
      image: 'https://i0.wp.com/krachtigbevallen.nl/wp-content/uploads/2020/10/DSC_0833ok-b-2952091091-1635242886246.jpg',
      alt: 'Zwangere vrouw volgt online cursus op laptop in een lichte ruimte',
      labels: ['Zelfstudie', 'Online', 'EN / NL'],
      title: 'Online Cursus: Goed Voorbereid',
      provider: 'Mama Academie',
      rating: '4.7',
      ratingCount: '215',
      description: "Volg de complete voorbereiding in je eigen tempo. Inclusief uitgebreide video's, een werkboek en maandelijkse live Q&A sessies.",
      price: '€ 89',
      bookingUrl: 'https://mamaacademie.nl/goed-voorbereid',
      type: 'Online Cursussen',
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
      descriptionLong: 'Geen tijd voor wekelijkse lessen? In dit intensieve weekend leer je alles over d... Meer informatie vind je op de website van de aanbieder.',
      price: '€ 195',
      bookingUrl: 'https://praktijdekern.nl/bevalcursus-weekend',
      type: 'Intensief / Weekend',
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
      slug: 'zwangerschapspilates',
      image: 'https://www.themompany.com/wp-content/uploads/2021/12/IMG_6328-2.jpg',
      alt: 'Pilates apparatuur in een rustige, lichte studio voor zwangere vrouwen',
      labels: ['6 weken', 'Fysiek', 'NL'],
      title: 'Zwangerschapspilates',
      provider: 'Studio Flow, Haarlem',
      rating: 'Nieuw',
      ratingCount: null,
      description: 'Blijf fit en sterk tijdens je zwangerschap met veilige pilates oefeningen gericht op je core en bekken.',
      descriptionLong: 'Blijf fit en sterk tijdens je zwangerschap met veilige pilates oefeningen gerich... Meer informatie vind je op de website van de aanbieder.',
      price: '€ 125',
      bookingUrl: 'https://studioflow.nl/zwangerschapspilates',
      type: 'Zwangerschapsgym',
      city: 'Haarlem',
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
      descriptionLong: 'Learn how to manage anxiety and prepare mentally for birth using proven mindfuln... Meer informatie vind je op de website van de aanbieder.',
      price: '€ 150',
      bookingUrl: 'https://mindfulbirthacademy.com/pregnancy',
      type: 'Online Cursussen',
      city: null,
      language: 'Engels',
    curriculum: DEFAULT_CURRICULUM,
      learningItems: DEFAULT_LEARNING_ITEMS,
      includes: DEFAULT_INCLUDES,
      guarantees: DEFAULT_GUARANTEES,
      practical: DEFAULT_PRACTICAL,
      quickInfo: DEFAULT_QUICK_INFO,
    },
    {
      slug: 'zwangerschapszwemmen-utrecht',
      image: 'https://www.sportintilburg.nl//fileadmin/subsites/sport-in-tilburg/sport_en_bewegen/zwemmen/860_zwangerschapszwemmen.jpg',
      alt: 'Aqua aerobics les voor zwangere vrouwen in rustig blauw water',
      labels: ['10 weken', 'Fysiek', 'NL'],
      title: 'Zwangerschapszwemmen',
      provider: 'Zwembad De Bron, Utrecht',
      rating: '4.6',
      ratingCount: '55',
      description: 'Ervaar de gewichtloosheid in het water en werk ontspannen aan je conditie tijdens de zwangerschap.',
      descriptionLong: 'Ervaar de gewichtloosheid in het water en werk ontspannen aan je conditie tijden... Meer informatie vind je op de website van de aanbieder.',
      price: '€ 95',
      bookingUrl: 'https://zwembaddebron.nl/zwangerschapszwemmen',
      type: 'Zwangerschapsgym',
      city: 'Utrecht',
      language: 'Nederlands',
    curriculum: DEFAULT_CURRICULUM,
      learningItems: DEFAULT_LEARNING_ITEMS,
      includes: DEFAULT_INCLUDES,
      guarantees: DEFAULT_GUARANTEES,
      practical: DEFAULT_PRACTICAL,
      quickInfo: DEFAULT_QUICK_INFO,
    },
    {
      slug: 'prive-bevalcursus-thuis',
      image: 'https://www.simonekamping.nl/wp-content/uploads/2018/10/IMG_8885.jpg',
      alt: 'Doula in gesprek met zwanger stel in een warme, gezellige woonkamer',
      labels: ['1 dag', 'Privé', 'NL'],
      title: 'Privé Bevalcursus Thuis',
      provider: 'Doula Sarah, Amsterdam e.o.',
      rating: '5.0',
      ratingCount: '28',
      description: 'Een complete voorbereiding op maat, gewoon bij jullie thuis in jullie eigen vertrouwde omgeving.',
      descriptionLong: 'Een complete voorbereiding op maat, gewoon bij jullie thuis in jullie eigen vert... Meer informatie vind je op de website van de aanbieder.',
      price: '€ 250',
      bookingUrl: 'https://doulasarah.nl/prive-bevalcursus',
      type: 'Samen met partner',
      city: 'Amsterdam',
      language: 'Nederlands',
    curriculum: DEFAULT_CURRICULUM,
      learningItems: DEFAULT_LEARNING_ITEMS,
      includes: DEFAULT_INCLUDES,
      guarantees: DEFAULT_GUARANTEES,
      practical: DEFAULT_PRACTICAL,
      quickInfo: DEFAULT_QUICK_INFO,
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
      descriptionLong: 'Combineer lichte yogaoefeningen met diepe mindfulness technieken om volledig in ... Meer informatie vind je op de website van de aanbieder.',
      price: '€ 175',
      type: 'Zwangerschapsyoga',
      city: 'Amsterdam',
      language: 'Nederlands',
      curriculum: DEFAULT_CURRICULUM,
      learningItems: DEFAULT_LEARNING_ITEMS,
      includes: DEFAULT_INCLUDES,
      guarantees: DEFAULT_GUARANTEES,
      practical: DEFAULT_PRACTICAL,
      quickInfo: DEFAULT_QUICK_INFO,
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
      descriptionLong: 'Blijf sterk en fit. Deze cursus is speciaal ontworpen voor vrouwen die een actie... Meer informatie vind je op de website van de aanbieder.',
      price: '€ 110',
      type: 'Zwangerschapsyoga',
      city: 'Amsterdam',
      language: 'Nederlands',
      curriculum: DEFAULT_CURRICULUM,
      learningItems: DEFAULT_LEARNING_ITEMS,
      includes: DEFAULT_INCLUDES,
      guarantees: DEFAULT_GUARANTEES,
      practical: DEFAULT_PRACTICAL,
      quickInfo: DEFAULT_QUICK_INFO,
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
      descriptionLong: 'Een intieme cursus gericht op ontspanning en verbinding met je baby. Ideaal voor... Meer informatie vind je op de website van de aanbieder.',
      price: '€ 95',
      type: 'Zwangerschapsyoga',
      city: 'Amsterdam',
      language: 'Nederlands',
      curriculum: DEFAULT_CURRICULUM,
      learningItems: DEFAULT_LEARNING_ITEMS,
      includes: DEFAULT_INCLUDES,
      guarantees: DEFAULT_GUARANTEES,
      practical: DEFAULT_PRACTICAL,
      quickInfo: DEFAULT_QUICK_INFO,
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
      descriptionLong: 'Twee intensieve middagen waarin alle belangrijke yogahoudingen en ademhalingstec... Meer informatie vind je op de website van de aanbieder.',
      price: '€ 135',
      type: 'Zwangerschapsyoga',
      city: 'Amsterdam',
      language: 'Nederlands',
      curriculum: DEFAULT_CURRICULUM,
      learningItems: DEFAULT_LEARNING_ITEMS,
      includes: DEFAULT_INCLUDES,
      guarantees: DEFAULT_GUARANTEES,
      practical: DEFAULT_PRACTICAL,
      quickInfo: DEFAULT_QUICK_INFO,
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
      descriptionLong: 'Sluit je werkdag ontspannen af met deze rustgevende avondsessies. Helpt aantoonb... Meer informatie vind je op de website van de aanbieder.',
      price: '€ 150',
      type: 'Zwangerschapsyoga',
      city: 'Amsterdam',
      language: 'Engels',
      bookingUrl: 'https://balansstudio.nl/avond-yoga',
      curriculum: DEFAULT_CURRICULUM,
      learningItems: DEFAULT_LEARNING_ITEMS,
      includes: DEFAULT_INCLUDES,
      guarantees: DEFAULT_GUARANTEES,
      practical: DEFAULT_PRACTICAL,
      quickInfo: DEFAULT_QUICK_INFO,
    },

    // ── 20 extra cursussen ───────────────────────────────────────────────────
    {
      slug: 'hypnobirthing-online',
      image: 'https://storage.googleapis.com/banani-generated-images/generated-images/53d8f310-55ba-4cef-85bf-b83c46481c52.jpg',
      alt: 'Zwangere vrouw ontspant thuis met koptelefoon en meditatietechnieken',
      labels: ['5 weken', 'Online', 'NL'],
      title: 'Hypnobirthing Online',
      provider: 'Rustige Geboorte, Online',
      rating: '4.7',
      ratingCount: '53',
      description: 'Leer hypnobirthingstechnieken volledig online, in je eigen tempo en vanuit je eigen vertrouwde omgeving. Inclusief live Q&A sessies.',
      descriptionLong: 'Leer hypnobirthingstechnieken volledig online, in je eigen tempo en vanuit je ei... Meer informatie vind je op de website van de aanbieder.',
      price: '€ 180',
      type: 'Hypnobirthing',
      city: null,
      language: 'Nederlands',
      bookingUrl: 'https://rustigegeboorte.nl/hypnobirthing-online',
      curriculum: DEFAULT_CURRICULUM,
      learningItems: DEFAULT_LEARNING_ITEMS,
      includes: DEFAULT_INCLUDES,
      guarantees: DEFAULT_GUARANTEES,
      practical: DEFAULT_PRACTICAL,
      quickInfo: DEFAULT_QUICK_INFO,
    },
    {
      slug: 'hypnobirthing-den-haag',
      image: 'https://storage.googleapis.com/banani-generated-images/generated-images/f8047725-fff5-4be2-8dea-873aa1bf5bac.jpg',
      alt: 'Stel oefent ontspanningstechnieken in een rustige huiskameromgeving',
      labels: ['4 weken', 'Fysiek', 'NL'],
      title: 'Hypnobirthing Den Haag',
      provider: 'Serene Birth, Den Haag',
      rating: '5.0',
      ratingCount: '29',
      description: 'Een persoonlijke en diepgaande hypnobirthing cursus in kleine groepen. Je gaat naar huis met vertrouwen en concrete tools.',
      descriptionLong: 'Een persoonlijke en diepgaande hypnobirthing cursus in kleine groepen. Je gaat n... Meer informatie vind je op de website van de aanbieder.',
      price: '€ 240',
      type: 'Hypnobirthing',
      city: 'Den Haag',
      language: 'Nederlands',
      bookingUrl: 'https://serene-birth.nl/hypnobirthing',
      curriculum: DEFAULT_CURRICULUM,
      learningItems: DEFAULT_LEARNING_ITEMS,
      includes: DEFAULT_INCLUDES,
      guarantees: DEFAULT_GUARANTEES,
      practical: DEFAULT_PRACTICAL,
      quickInfo: DEFAULT_QUICK_INFO,
    },
    {
      slug: 'bevalcursus-online-compleet',
      image: 'https://storage.googleapis.com/banani-generated-images/generated-images/e7fe9998-0c4a-4572-ae0a-36dbf0dfc51f.jpg',
      alt: 'Zwangere vrouw bekijkt online cursusmateriaal op tablet',
      labels: ['Zelfstudie', 'Online', 'NL'],
      title: 'Complete Online Bevalcursus',
      provider: 'Geboortewijzer, Online',
      rating: '4.8',
      ratingCount: '142',
      description: 'De meest uitgebreide online bevalvoorbereiding van Nederland. Meer dan 10 uur videomateriaal, werkboeken en een actieve community.',
      descriptionLong: 'De meest uitgebreide online bevalvoorbereiding van Nederland. Meer dan 10 uur vi... Meer informatie vind je op de website van de aanbieder.',
      price: '€ 119',
      type: 'Online Cursussen',
      city: null,
      language: 'Nederlands',
      bookingUrl: 'https://geboortewijzer.nl/complete-bevalcursus',
      curriculum: DEFAULT_CURRICULUM,
      learningItems: DEFAULT_LEARNING_ITEMS,
      includes: DEFAULT_INCLUDES,
      guarantees: DEFAULT_GUARANTEES,
      practical: DEFAULT_PRACTICAL,
      quickInfo: DEFAULT_QUICK_INFO,
    },
    {
      slug: 'online-cursus-engelstalig',
      image: 'https://storage.googleapis.com/banani-generated-images/generated-images/b2dc0721-23fb-4236-9ef4-bbdfa39f1ca7.jpg',
      alt: 'Internationale zwangere vrouw volgt Engelstalige online cursus',
      labels: ['6 weken', 'Online', 'EN'],
      title: 'Birth Preparation Course',
      provider: 'Amsterdam Birth Academy, Online',
      rating: '4.9',
      ratingCount: '77',
      description: 'Comprehensive English-language birth preparation for expats and international parents living in the Netherlands.',
      descriptionLong: 'Comprehensive English-language birth preparation for expats and international pa... Meer informatie vind je op de website van de aanbieder.',
      price: '€ 145',
      type: 'Online Cursussen',
      city: null,
      language: 'Engels',
      bookingUrl: 'https://amsterdambirthacademy.nl/english-course',
      curriculum: DEFAULT_CURRICULUM,
      learningItems: DEFAULT_LEARNING_ITEMS,
      includes: DEFAULT_INCLUDES,
      guarantees: DEFAULT_GUARANTEES,
      practical: DEFAULT_PRACTICAL,
      quickInfo: DEFAULT_QUICK_INFO,
    },
    {
      slug: 'bevalcursus-samen-rotterdam',
      image: 'https://storage.googleapis.com/banani-generated-images/generated-images/9f134ace-ec9b-4000-9f3a-4711029b4c9e.jpg',
      alt: 'Zwanger stel luistert aandachtig naar instructeur in groepsruimte',
      labels: ['6 weken', 'Fysiek', 'NL'],
      title: 'Samen Voorbereid – Bevalcursus',
      provider: 'Wijzer Bevallen, Rotterdam',
      rating: '4.9',
      ratingCount: '66',
      description: 'Een cursus speciaal voor koppels. Jullie leren samen wat te verwachten tijdens de bevalling en hoe de partner optimaal kan ondersteunen.',
      descriptionLong: 'Een cursus speciaal voor koppels. Jullie leren samen wat te verwachten tijdens d... Meer informatie vind je op de website van de aanbieder.',
      price: '€ 210',
      type: 'Samen met partner',
      city: 'Rotterdam',
      language: 'Nederlands',
      bookingUrl: 'https://wijzerbevallen.nl/samen-voorbereid',
      curriculum: DEFAULT_CURRICULUM,
      learningItems: DEFAULT_LEARNING_ITEMS,
      includes: DEFAULT_INCLUDES,
      guarantees: DEFAULT_GUARANTEES,
      practical: DEFAULT_PRACTICAL,
      quickInfo: DEFAULT_QUICK_INFO,
    },
    {
      slug: 'partner-cursus-amsterdam',
      image: 'https://storage.googleapis.com/banani-generated-images/generated-images/2e8eb22e-0e4e-45f0-80f2-98f0dda4c8f9.jpg',
      alt: 'Partner legt hand op zwangere buik tijdens begeleidingssessie',
      labels: ['3 weken', 'Fysiek', 'NL'],
      title: 'Partnercursus Zwangerschap & Bevalling',
      provider: 'De Geboortecoach, Amsterdam',
      rating: '4.8',
      ratingCount: '44',
      description: 'Een korte maar krachtige cursus speciaal voor de partner. Leer hoe je écht aanwezig kunt zijn en concrete steun biedt tijdens de bevalling.',
      descriptionLong: 'Een korte maar krachtige cursus speciaal voor de partner. Leer hoe je écht aanwe... Meer informatie vind je op de website van de aanbieder.',
      price: '€ 130',
      type: 'Samen met partner',
      city: 'Amsterdam',
      language: 'Nederlands',
      bookingUrl: 'https://degeboortecoach.nl/partnercursus',
      curriculum: DEFAULT_CURRICULUM,
      learningItems: DEFAULT_LEARNING_ITEMS,
      includes: DEFAULT_INCLUDES,
      guarantees: DEFAULT_GUARANTEES,
      practical: DEFAULT_PRACTICAL,
      quickInfo: DEFAULT_QUICK_INFO,
    },
    {
      slug: 'zwangerschapsgym-utrecht',
      image: 'https://storage.googleapis.com/banani-generated-images/generated-images/b236f7bb-dbb2-4c09-8511-11ca679a6d04.jpg',
      alt: 'Groep zwangere vrouwen doet lichte fitness oefeningen in sportzaal',
      labels: ['8 weken', 'Fysiek', 'NL'],
      title: 'Zwangerschapsgym Utrecht',
      provider: 'Fit & Zwanger, Utrecht',
      rating: '4.7',
      ratingCount: '81',
      description: 'Beweeg veilig en gericht tijdens je zwangerschap. Speciaal samengestelde oefeningen die je conditie op peil houden en rugklachten voorkomen.',
      descriptionLong: 'Beweeg veilig en gericht tijdens je zwangerschap. Speciaal samengestelde oefenin... Meer informatie vind je op de website van de aanbieder.',
      price: '€ 140',
      type: 'Zwangerschapsgym',
      city: 'Utrecht',
      language: 'Nederlands',
      bookingUrl: 'https://fitzwanger.nl/gym-utrecht',
      curriculum: DEFAULT_CURRICULUM,
      learningItems: DEFAULT_LEARNING_ITEMS,
      includes: DEFAULT_INCLUDES,
      guarantees: DEFAULT_GUARANTEES,
      practical: DEFAULT_PRACTICAL,
      quickInfo: DEFAULT_QUICK_INFO,
    },
    {
      slug: 'zwangerschapsgym-groningen',
      image: 'https://storage.googleapis.com/banani-generated-images/generated-images/3c54bc35-b4db-4cd7-a6d5-044cf09e0a12.jpg',
      alt: 'Zwangere vrouw traint met lichte gewichten onder begeleiding van trainer',
      labels: ['10 weken', 'Fysiek', 'NL'],
      title: 'Prenatale Gym Groningen',
      provider: 'Kracht & Zwanger, Groningen',
      rating: '4.6',
      ratingCount: '37',
      description: 'Blijf sterk en energiek gedurende de hele zwangerschap. Onze gecertificeerde trainer begeleidt je veilig door elke fase.',
      descriptionLong: 'Blijf sterk en energiek gedurende de hele zwangerschap. Onze gecertificeerde tra... Meer informatie vind je op de website van de aanbieder.',
      price: '€ 120',
      type: 'Zwangerschapsgym',
      city: 'Groningen',
      language: 'Nederlands',
      bookingUrl: 'https://krachtzwanger.nl/prenatale-gym',
      curriculum: DEFAULT_CURRICULUM,
      learningItems: DEFAULT_LEARNING_ITEMS,
      includes: DEFAULT_INCLUDES,
      guarantees: DEFAULT_GUARANTEES,
      practical: DEFAULT_PRACTICAL,
      quickInfo: DEFAULT_QUICK_INFO,
    },
    {
      slug: 'weekendcursus-bevallen-amsterdam',
      image: 'https://storage.googleapis.com/banani-generated-images/generated-images/911782ef-1dbd-40ea-9709-f371c217ef5a.jpg',
      alt: 'Groep zwangere vrouwen en partners volgen intensieve dagsessie',
      labels: ['1 weekend', 'Fysiek', 'NL'],
      title: 'Intensieve Weekendcursus Amsterdam',
      provider: 'Bewust Bevallen, Amsterdam',
      rating: '4.9',
      ratingCount: '58',
      description: 'Alles wat je moet weten over de bevalling in één intensief weekend. Inclusief ademhaling, pijnverlichting en de rol van de partner.',
      descriptionLong: 'Alles wat je moet weten over de bevalling in één intensief weekend. Inclusief ad... Meer informatie vind je op de website van de aanbieder.',
      price: '€ 185',
      type: 'Samen met partner',
      city: 'Amsterdam',
      language: 'Nederlands',
      bookingUrl: 'https://bewustbevallen.nl/weekendcursus',
      curriculum: DEFAULT_CURRICULUM,
      learningItems: DEFAULT_LEARNING_ITEMS,
      includes: DEFAULT_INCLUDES,
      guarantees: DEFAULT_GUARANTEES,
      practical: DEFAULT_PRACTICAL,
      quickInfo: DEFAULT_QUICK_INFO,
    },
    {
      slug: 'prenatale-yoga-eindhoven',
      image: 'https://storage.googleapis.com/banani-generated-images/generated-images/e36bd753-9c98-4b61-9702-354b33d730c1.jpg',
      alt: 'Zwangere vrouwen in yogahouding in een lichte studio in Eindhoven',
      labels: ['8 weken', 'Fysiek', 'NL'],
      title: 'Prenatale Yoga Eindhoven',
      provider: 'YogaMama, Eindhoven',
      rating: '4.8',
      ratingCount: '49',
      description: 'Wekelijkse yogalessen op maat voor elke fase van de zwangerschap. In een kleine groep van maximaal 10 vrouwen.',
      descriptionLong: 'Wekelijkse yogalessen op maat voor elke fase van de zwangerschap. In een kleine ... Meer informatie vind je op de website van de aanbieder.',
      price: '€ 160',
      type: 'Zwangerschapsyoga',
      city: 'Eindhoven',
      language: 'Nederlands',
      bookingUrl: 'https://yogamama.nl/prenatale-yoga-eindhoven',
      curriculum: DEFAULT_CURRICULUM,
      learningItems: DEFAULT_LEARNING_ITEMS,
      includes: DEFAULT_INCLUDES,
      guarantees: DEFAULT_GUARANTEES,
      practical: DEFAULT_PRACTICAL,
      quickInfo: DEFAULT_QUICK_INFO,
    },
    {
      slug: 'zwangerschapsyoga-den-haag',
      image: 'https://storage.googleapis.com/banani-generated-images/generated-images/d3d2f5af-40e3-4444-bf47-cc9b5af8deb6.jpg',
      alt: 'Zwangere vrouwen doen rustige yogaoefeningen bij daglicht in Den Haag',
      labels: ['6 weken', 'Fysiek', 'NL'],
      title: 'Zwangerschapsyoga Den Haag',
      provider: 'Studio Sereen, Den Haag',
      rating: '4.7',
      ratingCount: '61',
      description: 'Zachte yogalessen afgestemd op de unieke behoeften van zwangere vrouwen. Ruimte voor verbinding, ontspanning en bewust bewegen.',
      descriptionLong: 'Zachte yogalessen afgestemd op de unieke behoeften van zwangere vrouwen. Ruimte ... Meer informatie vind je op de website van de aanbieder.',
      price: '€ 130',
      type: 'Zwangerschapsyoga',
      city: 'Den Haag',
      language: 'Nederlands',
      bookingUrl: 'https://studiosereen.nl/zwangerschapsyoga',
      curriculum: DEFAULT_CURRICULUM,
      learningItems: DEFAULT_LEARNING_ITEMS,
      includes: DEFAULT_INCLUDES,
      guarantees: DEFAULT_GUARANTEES,
      practical: DEFAULT_PRACTICAL,
      quickInfo: DEFAULT_QUICK_INFO,
    },
    {
      slug: 'hypnobirthing-utrecht',
      image: 'https://storage.googleapis.com/banani-generated-images/generated-images/f8047725-fff5-4be2-8dea-873aa1bf5bac.jpg',
      alt: 'Stel in ontspannen sfeer tijdens hypnobirthing sessie in Utrecht',
      labels: ['4 weken', 'Hybride', 'NL'],
      title: 'Hypnobirthing Utrecht',
      provider: 'Kalme Geboorte, Utrecht',
      rating: '5.0',
      ratingCount: '33',
      description: 'Bewezen hypnobirthingstechnieken gecombineerd met praktische bevalvoorbereiding. Lessen zowel fysiek als online beschikbaar.',
      descriptionLong: 'Bewezen hypnobirthingstechnieken gecombineerd met praktische bevalvoorbereiding.... Meer informatie vind je op de website van de aanbieder.',
      price: '€ 220',
      type: 'Hypnobirthing',
      city: 'Utrecht',
      language: 'Nederlands',
      bookingUrl: 'https://kalmegeboorte.nl/hypnobirthing-utrecht',
      curriculum: DEFAULT_CURRICULUM,
      learningItems: DEFAULT_LEARNING_ITEMS,
      includes: DEFAULT_INCLUDES,
      guarantees: DEFAULT_GUARANTEES,
      practical: DEFAULT_PRACTICAL,
      quickInfo: DEFAULT_QUICK_INFO,
    },
    {
      slug: 'aqua-yoga-zwangerschap',
      image: 'https://storage.googleapis.com/banani-generated-images/generated-images/4d1a9c05-f97d-4697-a785-ae219290a712.jpg',
      alt: 'Zwangere vrouwen doen wateryoga in helder blauw zwembad',
      labels: ['8 weken', 'Fysiek', 'NL'],
      title: 'Aqua Yoga voor Zwangeren',
      provider: 'AquaFlow, Rotterdam',
      rating: '4.8',
      ratingCount: '56',
      description: 'De perfecte combinatie van yoga en water. Laat de dragen kracht van het water je helpen bij zachte oefeningen die ideaal zijn voor elke fase.',
      descriptionLong: 'De perfecte combinatie van yoga en water. Laat de dragen kracht van het water je... Meer informatie vind je op de website van de aanbieder.',
      price: '€ 155',
      type: 'Zwangerschapsyoga',
      city: 'Rotterdam',
      language: 'Nederlands',
      bookingUrl: 'https://aquaflow.nl/aqua-yoga-zwangerschap',
      curriculum: DEFAULT_CURRICULUM,
      learningItems: DEFAULT_LEARNING_ITEMS,
      includes: DEFAULT_INCLUDES,
      guarantees: DEFAULT_GUARANTEES,
      practical: DEFAULT_PRACTICAL,
      quickInfo: DEFAULT_QUICK_INFO,
    },
    {
      slug: 'bevalcursus-prive-rotterdam',
      image: 'https://storage.googleapis.com/banani-generated-images/generated-images/06bd7004-eacd-4a1d-8934-75eb13ea2ca6.jpg',
      alt: 'Verloskundige in gesprek met zwanger stel aan keukentafel',
      labels: ['1 dag', 'Privé', 'NL'],
      title: 'Privé Bevalcursus Rotterdam',
      provider: 'Verloskundigenpraktijk Zuidhaven, Rotterdam',
      rating: '5.0',
      ratingCount: '22',
      description: 'Een op maat gemaakte bevalvoorbereiding bij jullie thuis of in de praktijk. Volledig afgestemd op jullie wensen en situatie.',
      descriptionLong: 'Een op maat gemaakte bevalvoorbereiding bij jullie thuis of in de praktijk. Voll... Meer informatie vind je op de website van de aanbieder.',
      price: '€ 275',
      type: 'Samen met partner',
      city: 'Rotterdam',
      language: 'Nederlands',
      bookingUrl: 'https://zuidhaven-verloskundigen.nl/prive-bevalcursus',
      curriculum: DEFAULT_CURRICULUM,
      learningItems: DEFAULT_LEARNING_ITEMS,
      includes: DEFAULT_INCLUDES,
      guarantees: DEFAULT_GUARANTEES,
      practical: DEFAULT_PRACTICAL,
      quickInfo: DEFAULT_QUICK_INFO,
    },
    {
      slug: 'online-cursus-na-bevalling',
      image: 'https://storage.googleapis.com/banani-generated-images/generated-images/53d8f310-55ba-4cef-85bf-b83c46481c52.jpg',
      alt: 'Jonge moeder volgt online herstelcursus op laptop met baby naast haar',
      labels: ['4 weken', 'Online', 'NL'],
      title: 'Herstel na de Bevalling',
      provider: 'PostPartum Academy, Online',
      rating: '4.9',
      ratingCount: '88',
      description: 'Praktische begeleiding voor de kraamperiode en daarna. Van bekkenbodemherstel tot omgaan met vermoeidheid en emoties.',
      descriptionLong: 'Praktische begeleiding voor de kraamperiode en daarna. Van bekkenbodemherstel to... Meer informatie vind je op de website van de aanbieder.',
      price: '€ 75',
      type: 'Online Cursussen',
      city: null,
      language: 'Nederlands',
      bookingUrl: 'https://postpartumacademy.nl/herstel',
      curriculum: DEFAULT_CURRICULUM,
      learningItems: DEFAULT_LEARNING_ITEMS,
      includes: DEFAULT_INCLUDES,
      guarantees: DEFAULT_GUARANTEES,
      practical: DEFAULT_PRACTICAL,
      quickInfo: DEFAULT_QUICK_INFO,
    },
    {
      slug: 'zwangerschapsgym-amsterdam',
      image: 'https://storage.googleapis.com/banani-generated-images/generated-images/b236f7bb-dbb2-4c09-8511-11ca679a6d04.jpg',
      alt: 'Zwangere vrouwen doen functionele fitness oefeningen in moderne sportschool',
      labels: ['12 weken', 'Fysiek', 'NL / EN'],
      title: 'Prenatale Gym Amsterdam',
      provider: 'StrongMama, Amsterdam Oost',
      rating: '4.7',
      ratingCount: '73',
      description: 'Functionele krachttraining speciaal voor zwangere vrouwen. Onder begeleiding van een gecertificeerde prenatale personal trainer.',
      descriptionLong: 'Functionele krachttraining speciaal voor zwangere vrouwen. Onder begeleiding van... Meer informatie vind je op de website van de aanbieder.',
      price: '€ 165',
      type: 'Zwangerschapsgym',
      city: 'Amsterdam',
      language: 'Nederlands',
      bookingUrl: 'https://strongmama.nl/prenatale-gym',
      curriculum: DEFAULT_CURRICULUM,
      learningItems: DEFAULT_LEARNING_ITEMS,
      includes: DEFAULT_INCLUDES,
      guarantees: DEFAULT_GUARANTEES,
      practical: DEFAULT_PRACTICAL,
      quickInfo: DEFAULT_QUICK_INFO,
    },
    {
      slug: 'mindfulness-zwangerschap-rotterdam',
      image: 'https://storage.googleapis.com/banani-generated-images/generated-images/2e8eb22e-0e4e-45f0-80f2-98f0dda4c8f9.jpg',
      alt: 'Zwangere vrouw mediteert op een rustige plek met ogen gesloten',
      labels: ['8 weken', 'Hybride', 'NL'],
      title: 'Mindfulness tijdens Zwangerschap',
      provider: 'Mindful Moederschap, Rotterdam',
      rating: '4.8',
      ratingCount: '47',
      description: 'Leer hoe mindfulness je helpt rustiger en bewuster door je zwangerschap te gaan. Combinatie van groepssessies en thuisoefeningen.',
      descriptionLong: 'Leer hoe mindfulness je helpt rustiger en bewuster door je zwangerschap te gaan.... Meer informatie vind je op de website van de aanbieder.',
      price: '€ 195',
      type: 'Online Cursussen',
      city: 'Rotterdam',
      language: 'Nederlands',
      bookingUrl: 'https://mindfulmoederschap.nl/mindfulness-zwangerschap',
      curriculum: DEFAULT_CURRICULUM,
      learningItems: DEFAULT_LEARNING_ITEMS,
      includes: DEFAULT_INCLUDES,
      guarantees: DEFAULT_GUARANTEES,
      practical: DEFAULT_PRACTICAL,
      quickInfo: DEFAULT_QUICK_INFO,
    },
    {
      slug: 'zwangerschapsyoga-groningen',
      image: 'https://storage.googleapis.com/banani-generated-images/generated-images/e36bd753-9c98-4b61-9702-354b33d730c1.jpg',
      alt: 'Kleine groep zwangere vrouwen op yogamatjes in lichte ruimte in Groningen',
      labels: ['6 weken', 'Fysiek', 'NL'],
      title: 'Zwangerschapsyoga Groningen',
      provider: 'Noorderzon Yoga, Groningen',
      rating: '4.9',
      ratingCount: '38',
      description: 'Ontspannen yogalessen in een intieme sfeer. Speciaal aandacht voor de lichamelijke en emotionele veranderingen tijdens de zwangerschap.',
      descriptionLong: 'Ontspannen yogalessen in een intieme sfeer. Speciaal aandacht voor de lichamelij... Meer informatie vind je op de website van de aanbieder.',
      price: '€ 115',
      type: 'Zwangerschapsyoga',
      city: 'Groningen',
      language: 'Nederlands',
      bookingUrl: 'https://noorderzon-yoga.nl/zwangerschapsyoga',
      curriculum: DEFAULT_CURRICULUM,
      learningItems: DEFAULT_LEARNING_ITEMS,
      includes: DEFAULT_INCLUDES,
      guarantees: DEFAULT_GUARANTEES,
      practical: DEFAULT_PRACTICAL,
      quickInfo: DEFAULT_QUICK_INFO,
    },
    {
      slug: 'hypnobirthing-groepscursus-online',
      image: 'https://storage.googleapis.com/banani-generated-images/generated-images/9f134ace-ec9b-4000-9f3a-4711029b4c9e.jpg',
      alt: 'Meerdere koppels volgen gezamenlijk een online hypnobirthing sessie',
      labels: ['5 weken', 'Online', 'NL'],
      title: 'Hypnobirthing Groepscursus Online',
      provider: 'Zacht Bevallen, Online',
      rating: '4.6',
      ratingCount: '41',
      description: 'Volg hypnobirthing samen met andere koppels in een online groep. Goedkoper dan privélessen, met de voordelen van gedeelde ervaringen.',
      descriptionLong: 'Volg hypnobirthing samen met andere koppels in een online groep. Goedkoper dan p... Meer informatie vind je op de website van de aanbieder.',
      price: '€ 160',
      type: 'Hypnobirthing',
      city: null,
      language: 'Nederlands',
      bookingUrl: 'https://zachtbevallen.nl/groepscursus-online',
      curriculum: DEFAULT_CURRICULUM,
      learningItems: DEFAULT_LEARNING_ITEMS,
      includes: DEFAULT_INCLUDES,
      guarantees: DEFAULT_GUARANTEES,
      practical: DEFAULT_PRACTICAL,
      quickInfo: DEFAULT_QUICK_INFO,
    },
    {
      slug: 'bevalvoorbereiding-inclusief',
      image: 'https://storage.googleapis.com/banani-generated-images/generated-images/b2dc0721-23fb-4236-9ef4-bbdfa39f1ca7.jpg',
      alt: 'Diverse groep zwangere vrouwen samen in een open en inclusieve cursusruimte',
      labels: ['6 weken', 'Hybride', 'NL / EN'],
      title: 'Inclusieve Bevalvoorbereiding',
      provider: 'Open Geboorte, Amsterdam',
      rating: '5.0',
      ratingCount: '25',
      description: 'Een veilige en inclusieve bevalcursus voor iedereen, ongeacht gezinssamenstelling, achtergrond of voorkeur voor de bevalling.',
      descriptionLong: 'Een veilige en inclusieve bevalcursus voor iedereen, ongeacht gezinssamenstellin... Meer informatie vind je op de website van de aanbieder.',
      price: '€ 175',
      type: 'Samen met partner',
      city: 'Amsterdam',
      language: 'Nederlands',
      bookingUrl: 'https://opengeboorte.nl/inclusieve-bevalvoorbereiding',
      curriculum: DEFAULT_CURRICULUM,
      learningItems: DEFAULT_LEARNING_ITEMS,
      includes: DEFAULT_INCLUDES,
      guarantees: DEFAULT_GUARANTEES,
      practical: DEFAULT_PRACTICAL,
      quickInfo: DEFAULT_QUICK_INFO,
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
   * Geeft een enkele cursus op slug.
   * Handig voor de /cursussen/[slug] detailpagina.
   * Zoekt in ALL_COURSES zodat alle cursussen bereikbaar zijn.
   * @param {string} slug
   * @returns {Promise<Course|undefined>}
   */
  export async function getCourseBySlug(slug) {
    return ALL_COURSES.find((c) => c.slug === slug);
  }

  /**
   * Geeft beschikbare filter-opties terug (voor de sidebar checkboxes).
   * Steden worden dynamisch afgeleid uit ALL_COURSES zodat nieuwe cursussen
   * automatisch in het filter verschijnen.
   * @returns {Promise<{ types: string[], cities: string[], languages: string[] }>}
   */
  export async function getFilterOptions() {
    const cities = [...new Set(
      ALL_COURSES.map((c) => c.city).filter(Boolean),
    )].sort((a, b) => a.localeCompare(b, 'nl'));

    return {
      types: ['Zwangerschapsyoga', 'Hypnobirthing', 'Online Cursussen', 'Samen met partner', 'Zwangerschapsgym'],
      cities,
      languages: ['Nederlands', 'Engels'],
    };
  }