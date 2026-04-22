'use client';

import { useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';

/* ─── Constanten ─────────────────────────────────────────────────────────── */

const CITIES     = ['Amsterdam', 'Den Haag', 'Eindhoven', 'Groningen', 'Haarlem', 'Rotterdam', 'Utrecht'];
const LANGUAGES  = ['Nederlands', 'Engels'];
const TYPES      = ['Complete bevallingscursus', 'Hypnobirthing', 'Zwangerschapsyoga', 'Zwangerschapsgym', 'Online cursussen', 'Samen met partner', 'Mindfulness', 'ZwangerFit', 'Allround bevallingscursus'];
const GUARANTEE_ICONS  = ['lucide:shield-check', 'lucide:refresh-ccw', 'lucide:award', 'lucide:badge-check', 'lucide:heart'];
const PRACTICAL_ICONS  = ['lucide:map-pin', 'lucide:car', 'lucide:shopping-bag', 'lucide:clock', 'lucide:phone', 'lucide:mail', 'lucide:globe', 'lucide:info'];
const QUICKINFO_ICONS  = ['lucide:calendar-clock', 'lucide:users', 'lucide:languages', 'lucide:map-pin', 'lucide:clock', 'lucide:star'];
const HIGHLIGHT_ICONS  = ['lucide:award', 'lucide:users', 'lucide:calendar', 'lucide:star', 'lucide:check-circle-2', 'lucide:shield-check', 'lucide:heart', 'lucide:map-pin', 'lucide:clock', 'lucide:baby', 'lucide:leaf', 'lucide:graduation-cap'];

/* ─── Default objecten ───────────────────────────────────────────────────── */

const emptyCourse = () => ({
  slug: '', featured: false, providerSlug: '', image: '', alt: '',
  labels: [''], title: '', provider: '', rating: '', ratingCount: '',
  description: '', descriptionLong: '', price: '', bookingUrl: '', type: '',
  cities: [], languages: [],
  curriculum:   [{ period: '', title: '', body: '' }],
  learningItems: [''],
  includes:      [''],
  guarantees: [
    { icon: 'lucide:shield-check', text: 'Veilig betalen via iDEAL' },
    { icon: 'lucide:refresh-ccw',  text: 'Kosteloos annuleren tot 14 dagen vooraf' },
    { icon: 'lucide:award',        text: 'Geverifieerde aanbieder' },
  ],
  practical: [
    { icon: 'lucide:map-pin',      title: 'Locatie',       body: '' },
    { icon: 'lucide:car',          title: 'Vervoer',       body: '' },
    { icon: 'lucide:shopping-bag', title: 'Zelf meenemen', body: '' },
  ],
  quickInfo: [
    { icon: 'lucide:calendar-clock', label: 'Duur',          value: '' },
    { icon: 'lucide:users',           label: 'Groepsgrootte', value: '' },
    { icon: 'lucide:languages',       label: 'Taal',          value: '' },
  ],
});

const emptyProvider = () => ({
  slug: '', name: '', tagline: '', type: '', location: '', since: '',
  website: '', hero: '', avatar: '', rating: '', reviewCount: '',
  bio: [''],
  highlights: [
    { icon: 'lucide:award',    label: 'bijv. Gecertificeerd verloskundige' },
    { icon: 'lucide:users',    label: 'bijv. Kleine groepen (max 8)' },
    { icon: 'lucide:calendar', label: 'bijv. Doorlopende inschrijving' },
    { icon: 'lucide:star',     label: 'bijv. 4.8 gemiddelde beoordeling' },
  ],
  practical: [
    { icon: 'lucide:map-pin', label: 'Locatie',   value: '' },
    { icon: 'lucide:clock',   label: 'Lestijden', value: '' },
    { icon: 'lucide:phone',   label: 'Telefoon',  value: '' },
    { icon: 'lucide:mail',    label: 'E-mail',    value: '' },
  ],
  reviews: [{ name: '', course: '', rating: 5, text: '', avatar: '' }],
});

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function AdminPage() {
  const [mode, setMode]         = useState('cursus');   // 'cursus' | 'aanbieder'
  const [course, setCourse]     = useState(emptyCourse());
  const [provider, setProvider] = useState(emptyProvider());
  const [activeTab, setActiveTab] = useState('basis');
  const [copied, setCopied]     = useState(false);

  /* ── Generic helpers ── */
  const setC = (k, v) => setCourse((p) => ({ ...p, [k]: v }));
  const setP = (k, v) => setProvider((p) => ({ ...p, [k]: v }));

  const setListC = (k, i, f, v) => setCourse((p) => { const a = [...p[k]]; a[i] = f ? { ...a[i], [f]: v } : v; return { ...p, [k]: a }; });
  const setListP = (k, i, f, v) => setProvider((p) => { const a = [...p[k]]; a[i] = f ? { ...a[i], [f]: v } : v; return { ...p, [k]: a }; });

  const addC = (k, t) => setCourse((p) => ({ ...p, [k]: [...p[k], t] }));
  const addP = (k, t) => setProvider((p) => ({ ...p, [k]: [...p[k], t] }));

  const delC = (k, i) => setCourse((p) => ({ ...p, [k]: p[k].filter((_, j) => j !== i) }));
  const delP = (k, i) => setProvider((p) => ({ ...p, [k]: p[k].filter((_, j) => j !== i) }));

  const toggleArr = (k, v) => setCourse((p) => ({ ...p, [k]: p[k].includes(v) ? p[k].filter((x) => x !== v) : [...p[k], v] }));

  const handleReset = () => {
    if (!confirm('Weet je zeker dat je alles wilt wissen?')) return;
    if (mode === 'cursus') { setCourse(emptyCourse()); } else { setProvider(emptyProvider()); }
  };

  const handleModeSwitch = (newMode) => {
    setMode(newMode);
    setActiveTab('basis');
  };

  /* ── Code generators ── */
  const generateCourse = useCallback(() => {
    const q = (s) => String(s).replace(/'/g, "\\'");
    const labelsStr   = course.labels.filter(Boolean).map((l) => `'${q(l)}'`).join(', ');
    const citiesStr   = course.cities.map((c) => `'${c}'`).join(', ');
    const langsStr    = course.languages.map((l) => `'${l}'`).join(', ');
    const currStr     = course.curriculum.filter((c) => c.title).map((c) => `    { period: '${q(c.period)}', title: '${q(c.title)}', body: '${q(c.body)}' }`).join(',\n');
    const learnStr    = course.learningItems.filter(Boolean).map((l) => `    '${q(l)}'`).join(',\n');
    const inclStr     = course.includes.filter(Boolean).map((l) => `    '${q(l)}'`).join(',\n');
    const guarStr     = course.guarantees.filter((g) => g.text).map((g) => `    { icon: '${g.icon}', text: '${q(g.text)}' }`).join(',\n');
    const practStr    = course.practical.filter((p) => p.title).map((p) => `    { icon: '${p.icon}', title: '${q(p.title)}', body: '${q(p.body).replace(/\n/g, '\\n')}' }`).join(',\n');
    const quickStr    = course.quickInfo.filter((qi) => qi.label).map((qi) => `    { icon: '${qi.icon}', label: '${q(qi.label)}', value: '${q(qi.value)}' }`).join(',\n');
    return `  {\n    slug: '${q(course.slug)}',\n    featured: ${course.featured},\n    providerSlug: '${q(course.providerSlug)}',\n    image: '${course.image}',\n    alt: '${q(course.alt)}',\n    labels: [${labelsStr}],\n    title: '${q(course.title)}',\n    provider: '${q(course.provider)}',\n    rating: '${course.rating}',\n    ratingCount: '${course.ratingCount}',\n    description: '${q(course.description)}',\n    descriptionLong: '${q(course.descriptionLong).replace(/\n/g, '\\n')}',\n    price: '${q(course.price)}',\n    bookingUrl: '${course.bookingUrl}',\n    type: '${q(course.type)}',\n    cities: [${citiesStr}],\n    languages: [${langsStr}],\n    curriculum: [\n${currStr}\n    ],\n    learningItems: [\n${learnStr}\n    ],\n    includes: [\n${inclStr}\n    ],\n    guarantees: [\n${guarStr}\n    ],\n    practical: [\n${practStr}\n    ],\n    quickInfo: [\n${quickStr}\n    ],\n  },`;
  }, [course]);

  const generateProvider = useCallback(() => {
    const q = (s) => String(s).replace(/'/g, "\\'");
    const bioStr      = provider.bio.filter(Boolean).map((b) => `    '${q(b)}'`).join(',\n');
    const highStr     = provider.highlights.filter((h) => h.label).map((h) => `    { icon: '${h.icon}', label: '${q(h.label)}' }`).join(',\n');
    const practStr    = provider.practical.filter((p) => p.label).map((p) => `    { icon: '${p.icon}', label: '${q(p.label)}', value: '${q(p.value).replace(/\n/g, '\\n')}' }`).join(',\n');
    const revStr      = provider.reviews.filter((r) => r.name).map((r) => `    { name: '${q(r.name)}', course: '${q(r.course)}', rating: ${r.rating}, text: '${q(r.text)}', avatar: '${r.avatar}' }`).join(',\n');
    return `  {\n    slug: '${q(provider.slug)}',\n    name: '${q(provider.name)}',\n    tagline: '${q(provider.tagline)}',\n    type: '${q(provider.type)}',\n    location: '${q(provider.location)}',\n    since: '${provider.since}',\n    website: '${provider.website}',\n    hero: '${provider.hero}',\n    avatar: '${provider.avatar}',\n    rating: '${provider.rating}',\n    reviewCount: '${provider.reviewCount}',\n    bio: [\n${bioStr}\n    ],\n    highlights: [\n${highStr}\n    ],\n    practical: [\n${practStr}\n    ],\n    reviews: [\n${revStr}\n    ],\n  },`;
  }, [provider]);

  const handleCopy = () => {
    navigator.clipboard.writeText(mode === 'cursus' ? generateCourse() : generateProvider());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  /* ── Tabs per mode ── */
  const COURSE_TABS = [
    { id: 'basis',      label: 'Basisinfo',   icon: 'lucide:info' },
    { id: 'inhoud',     label: 'Inhoud',       icon: 'lucide:file-text' },
    { id: 'curriculum', label: 'Programma',   icon: 'lucide:list' },
    { id: 'practical',  label: 'Praktisch',   icon: 'lucide:map-pin' },
    { id: 'quickinfo',  label: 'Snelle info', icon: 'lucide:zap' },
    { id: 'guarantees', label: 'Garanties',   icon: 'lucide:shield-check' },
    { id: 'output',     label: 'Code output', icon: 'lucide:code-2' },
  ];

  const PROVIDER_TABS = [
    { id: 'basis',      label: 'Basisinfo',   icon: 'lucide:info' },
    { id: 'bio',        label: 'Bio',          icon: 'lucide:file-text' },
    { id: 'highlights', label: 'Highlights',  icon: 'lucide:star' },
    { id: 'practical',  label: 'Praktisch',   icon: 'lucide:map-pin' },
    { id: 'reviews',    label: 'Reviews',     icon: 'lucide:message-square' },
    { id: 'output',     label: 'Code output', icon: 'lucide:code-2' },
  ];

  const tabs = mode === 'cursus' ? COURSE_TABS : PROVIDER_TABS;

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-secondary/40 min-h-screen">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 md:px-12 py-10">

          {/* ── Header ── */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-[12px] font-bold text-primary uppercase tracking-widest mb-1">Admin</p>
              <h1 className="text-2xl md:text-[28px] font-bold text-foreground tracking-tight">
                {mode === 'cursus' ? 'Cursus toevoegen' : 'Aanbieder toevoegen'}
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={handleReset} className="flex items-center gap-2 px-4 py-2 border border-black/[0.08] rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:border-black/20 transition-colors bg-white">
                <iconify-icon icon="lucide:rotate-ccw" class="text-sm" aria-hidden="true" />
                Reset
              </button>
            </div>
          </div>

          {/* ── Mode switcher ── */}
          <div className="flex gap-1 p-1 bg-white border border-black/[0.07] rounded-2xl mb-4 w-fit shadow-sm">
            {[{ id: 'cursus', label: 'Cursus', icon: 'lucide:graduation-cap' }, { id: 'aanbieder', label: 'Aanbieder', icon: 'lucide:building-2' }].map((m) => (
              <button
                key={m.id}
                onClick={() => handleModeSwitch(m.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  mode === m.id ? 'bg-primary text-white shadow-sm' : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                <iconify-icon icon={m.icon} class="text-sm" aria-hidden="true" />
                {m.label}
              </button>
            ))}
          </div>

          {/* ── Tabs ── */}
          <div className="flex gap-1 p-1 bg-white border border-black/[0.07] rounded-2xl mb-6 overflow-x-auto shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab.id ? 'bg-foreground text-background shadow-sm' : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                <iconify-icon icon={tab.icon} class="text-sm" aria-hidden="true" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* ══════════════════════════════════════════
              CURSUS TABS
          ══════════════════════════════════════════ */}
          {mode === 'cursus' && (
            <>
              {activeTab === 'basis' && (
                <Section title="Basisinformatie" icon="lucide:info">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Titel" required>
                      <Input value={course.title} onChange={(v) => { setC('title', v); setC('slug', v.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')); }} placeholder="bijv. Zwangerschapsyoga Amsterdam" />
                    </Field>
                    <Field label="Slug (auto)">
                      <Input value={course.slug} onChange={(v) => setC('slug', v)} placeholder="bijv. zwangerschapsyoga-amsterdam" />
                    </Field>
                    <Field label="Aanbieder naam" required>
                      <Input value={course.provider} onChange={(v) => setC('provider', v)} placeholder="bijv. Mom & Co" />
                    </Field>
                    <Field label="Provider slug" hint="Koppeling met aanbiedersprofiel">
                      <Input value={course.providerSlug} onChange={(v) => setC('providerSlug', v)} placeholder="bijv. mom-en-co" />
                    </Field>
                    <Field label="Type cursus">
                      <select value={course.type} onChange={(e) => setC('type', e.target.value)} className="w-full px-4 py-2.5 border border-black/[0.08] rounded-xl bg-white text-sm text-foreground outline-none focus:border-primary/50">
                        <option value="">Kies een type...</option>
                        {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </Field>
                    <Field label="Prijs">
                      <Input value={course.price} onChange={(v) => setC('price', v)} placeholder="bijv. € 145" />
                    </Field>
                    <Field label="Rating" hint="bijv. 4.8 of 'Nieuw'">
                      <Input value={course.rating} onChange={(v) => setC('rating', v)} placeholder="4.8" />
                    </Field>
                    <Field label="Aantal reviews">
                      <Input value={course.ratingCount} onChange={(v) => setC('ratingCount', v)} placeholder="bijv. 94" />
                    </Field>
                    <Field label="Booking URL" className="sm:col-span-2">
                      <Input value={course.bookingUrl} onChange={(v) => setC('bookingUrl', v)} placeholder="https://..." />
                    </Field>
                    <Field label="Afbeelding URL" className="sm:col-span-2">
                      <div className="flex gap-3 items-center">
                        <Input value={course.image} onChange={(v) => setC('image', v)} placeholder="https://..." />
                        {course.image && <img src={course.image} alt="" className="w-20 h-14 rounded-lg object-cover border border-black/[0.08] shrink-0" />}
                      </div>
                    </Field>
                    <Field label="Alt tekst" className="sm:col-span-2">
                      <Input value={course.alt} onChange={(v) => setC('alt', v)} placeholder="bijv. Groep zwangere vrouwen in yogahouding" />
                    </Field>
                    <Field label="Labels" hint="bijv. 8 weken, Fysiek, NL" className="sm:col-span-2">
                      <div className="flex flex-col gap-2">
                        {course.labels.map((l, i) => (
                          <div key={i} className="flex gap-2">
                            <Input value={l} onChange={(v) => setListC('labels', i, null, v)} placeholder="bijv. 8 weken" />
                            <DelBtn onClick={() => delC('labels', i)} disabled={course.labels.length === 1} />
                          </div>
                        ))}
                        <AddButton onClick={() => addC('labels', '')} label="Label toevoegen" />
                      </div>
                    </Field>
                    <Field label="Steden" className="sm:col-span-2">
                      <div className="flex flex-wrap gap-2">
                        {CITIES.map((city) => (
                          <button key={city} onClick={() => toggleArr('cities', city)} className={`px-3 py-1.5 rounded-lg text-[13px] font-medium border transition-colors ${course.cities.includes(city) ? 'bg-foreground text-background border-foreground' : 'bg-white border-black/[0.08] text-foreground hover:border-black/20'}`}>{city}</button>
                        ))}
                      </div>
                    </Field>
                    <Field label="Talen">
                      <div className="flex gap-2">
                        {LANGUAGES.map((lang) => (
                          <button key={lang} onClick={() => toggleArr('languages', lang)} className={`px-3 py-1.5 rounded-lg text-[13px] font-medium border transition-colors ${course.languages.includes(lang) ? 'bg-foreground text-background border-foreground' : 'bg-white border-black/[0.08] text-foreground hover:border-black/20'}`}>{lang}</button>
                        ))}
                      </div>
                    </Field>
                    <Field label="Featured">
                      <button onClick={() => setC('featured', !course.featured)} className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold transition-colors ${course.featured ? 'bg-amber-400/80 border-amber-400 text-amber-900' : 'bg-white border-black/[0.08] text-muted-foreground hover:border-black/20'}`}>
                        <iconify-icon icon="lucide:sparkles" class="text-sm" aria-hidden="true" />
                        {course.featured ? 'Featured aan' : 'Featured uit'}
                      </button>
                    </Field>
                  </div>
                </Section>
              )}

              {activeTab === 'inhoud' && (
                <div className="flex flex-col gap-5">
                  <Section title="Omschrijvingen" icon="lucide:file-text">
                    <div className="flex flex-col gap-4">
                      <Field label="Korte beschrijving" required hint="Getoond op de cursuskaart (max. 2 regels)">
                        <textarea value={course.description} onChange={(e) => setC('description', e.target.value)} placeholder="Korte pakkende omschrijving..." rows={3} className="w-full px-4 py-3 border border-black/[0.08] rounded-xl bg-white text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 transition-colors resize-none" />
                      </Field>
                      <Field label="Uitgebreide beschrijving" hint="Getoond op de detailpagina">
                        <textarea value={course.descriptionLong} onChange={(e) => setC('descriptionLong', e.target.value)} placeholder="Uitgebreide omschrijving..." rows={8} className="w-full px-4 py-3 border border-black/[0.08] rounded-xl bg-white text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 transition-colors resize-none" />
                      </Field>
                    </div>
                  </Section>
                  <Section title="Wat je gaat leren" icon="lucide:check-circle-2">
                    <div className="flex flex-col gap-2">
                      {course.learningItems.map((item, i) => (
                        <div key={i} className="flex gap-2">
                          <Input value={item} onChange={(v) => setListC('learningItems', i, null, v)} placeholder="bijv. Diepe ademhalingstechnieken" />
                          <DelBtn onClick={() => delC('learningItems', i)} disabled={course.learningItems.length === 1} />
                        </div>
                      ))}
                      <AddButton onClick={() => addC('learningItems', '')} label="Leerdoel toevoegen" />
                    </div>
                  </Section>
                  <Section title="Inclusief" icon="lucide:package">
                    <div className="flex flex-col gap-2">
                      {course.includes.map((item, i) => (
                        <div key={i} className="flex gap-2">
                          <Input value={item} onChange={(v) => setListC('includes', i, null, v)} placeholder="bijv. 8 wekelijkse lessen" />
                          <DelBtn onClick={() => delC('includes', i)} disabled={course.includes.length === 1} />
                        </div>
                      ))}
                      <AddButton onClick={() => addC('includes', '')} label="Item toevoegen" />
                    </div>
                  </Section>
                </div>
              )}

              {activeTab === 'curriculum' && (
                <Section title="Programma overzicht" icon="lucide:list" hint="De weekindeling of onderdelen van de cursus.">
                  <div className="flex flex-col gap-4">
                    {course.curriculum.map((item, i) => (
                      <div key={i} className="bg-white border border-black/[0.07] rounded-xl p-4 flex flex-col gap-3">
                        <div className="flex gap-2 items-center">
                          <div className="w-[120px] shrink-0">
                            <Input value={item.period} onChange={(v) => setListC('curriculum', i, 'period', v)} placeholder="bijv. Week 1" />
                          </div>
                          <Input value={item.title} onChange={(v) => setListC('curriculum', i, 'title', v)} placeholder="Titel van dit onderdeel" />
                          <DelBtn onClick={() => delC('curriculum', i)} disabled={course.curriculum.length === 1} />
                        </div>
                        <textarea value={item.body} onChange={(e) => setListC('curriculum', i, 'body', e.target.value)} placeholder="Beschrijving..." rows={2} className="w-full px-4 py-3 border border-black/[0.08] rounded-xl bg-white text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 transition-colors resize-none" />
                      </div>
                    ))}
                    <AddButton onClick={() => addC('curriculum', { period: '', title: '', body: '' })} label="Onderdeel toevoegen" />
                  </div>
                </Section>
              )}

              {activeTab === 'practical' && (
                <Section title="Praktische informatie" icon="lucide:map-pin">
                  <div className="flex flex-col gap-4">
                    {course.practical.map((p, i) => (
                      <div key={i} className="bg-white border border-black/[0.07] rounded-xl p-4 flex flex-col gap-3">
                        <div className="flex gap-2 items-center">
                          <select value={p.icon} onChange={(e) => setListC('practical', i, 'icon', e.target.value)} className="w-[160px] shrink-0 px-3 py-2 border border-black/[0.08] rounded-lg text-sm bg-white outline-none focus:border-primary/50">
                            {PRACTICAL_ICONS.map((icon) => <option key={icon} value={icon}>{icon.replace('lucide:', '')}</option>)}
                          </select>
                          <Input value={p.title} onChange={(v) => setListC('practical', i, 'title', v)} placeholder="Titel (bijv. Locatie)" />
                          <DelBtn onClick={() => delC('practical', i)} />
                        </div>
                        <textarea value={p.body} onChange={(e) => setListC('practical', i, 'body', e.target.value)} placeholder="Omschrijving..." rows={2} className="w-full px-4 py-3 border border-black/[0.08] rounded-xl bg-white text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 transition-colors resize-none" />
                      </div>
                    ))}
                    <AddButton onClick={() => addC('practical', { icon: 'lucide:map-pin', title: '', body: '' })} label="Item toevoegen" />
                  </div>
                </Section>
              )}

              {activeTab === 'quickinfo' && (
                <Section title="Snelle info" icon="lucide:zap" hint="Getoond bovenaan de detailpagina als compacte rij.">
                  <div className="flex flex-col gap-3">
                    {course.quickInfo.map((q, i) => (
                      <div key={i} className="flex gap-2 items-center bg-white border border-black/[0.07] rounded-xl p-3">
                        <select value={q.icon} onChange={(e) => setListC('quickInfo', i, 'icon', e.target.value)} className="w-[180px] shrink-0 px-3 py-2 border border-black/[0.08] rounded-lg text-sm bg-white outline-none focus:border-primary/50">
                          {QUICKINFO_ICONS.map((icon) => <option key={icon} value={icon}>{icon.replace('lucide:', '')}</option>)}
                        </select>
                        <Input value={q.label} onChange={(v) => setListC('quickInfo', i, 'label', v)} placeholder="Label (bijv. Duur)" />
                        <Input value={q.value} onChange={(v) => setListC('quickInfo', i, 'value', v)} placeholder="Waarde (bijv. 8 weken)" />
                        <DelBtn onClick={() => delC('quickInfo', i)} disabled={course.quickInfo.length === 1} />
                      </div>
                    ))}
                    <AddButton onClick={() => addC('quickInfo', { icon: 'lucide:calendar-clock', label: '', value: '' })} label="Item toevoegen" />
                  </div>
                </Section>
              )}

              {activeTab === 'guarantees' && (
                <Section title="Garanties" icon="lucide:shield-check" hint="Getoond in de boekingskaart op de detailpagina.">
                  <div className="flex flex-col gap-3">
                    {course.guarantees.map((g, i) => (
                      <div key={i} className="flex gap-2 items-center bg-white border border-black/[0.07] rounded-xl p-3">
                        <select value={g.icon} onChange={(e) => setListC('guarantees', i, 'icon', e.target.value)} className="w-[180px] shrink-0 px-3 py-2 border border-black/[0.08] rounded-lg text-sm bg-white outline-none focus:border-primary/50">
                          {GUARANTEE_ICONS.map((icon) => <option key={icon} value={icon}>{icon.replace('lucide:', '')}</option>)}
                        </select>
                        <Input value={g.text} onChange={(v) => setListC('guarantees', i, 'text', v)} placeholder="bijv. Kosteloos annuleren tot 14 dagen vooraf" />
                        <DelBtn onClick={() => delC('guarantees', i)} disabled={course.guarantees.length === 1} />
                      </div>
                    ))}
                    <AddButton onClick={() => addC('guarantees', { icon: 'lucide:shield-check', text: '' })} label="Garantie toevoegen" />
                  </div>
                </Section>
              )}
            </>
          )}

          {/* ══════════════════════════════════════════
              AANBIEDER TABS
          ══════════════════════════════════════════ */}
          {mode === 'aanbieder' && (
            <>
              {activeTab === 'basis' && (
                <Section title="Basisinformatie" icon="lucide:info">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Naam" required>
                      <Input value={provider.name} onChange={(v) => { setP('name', v); setP('slug', v.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')); }} placeholder="bijv. Mom & Co" />
                    </Field>
                    <Field label="Slug (auto)">
                      <Input value={provider.slug} onChange={(v) => setP('slug', v)} placeholder="bijv. mom-en-co" />
                    </Field>
                    <Field label="Tagline" required className="sm:col-span-2">
                      <Input value={provider.tagline} onChange={(v) => setP('tagline', v)} placeholder="bijv. Dé zwangerschapscursus van Amsterdam" />
                    </Field>
                    <Field label="Type aanbieder">
                      <Input value={provider.type} onChange={(v) => setP('type', v)} placeholder="bijv. Verloskundigenpraktijk" />
                    </Field>
                    <Field label="Locatie">
                      <Input value={provider.location} onChange={(v) => setP('location', v)} placeholder="bijv. Amsterdam" />
                    </Field>
                    <Field label="Actief sinds">
                      <Input value={provider.since} onChange={(v) => setP('since', v)} placeholder="bijv. 2018" />
                    </Field>
                    <Field label="Website URL">
                      <Input value={provider.website} onChange={(v) => setP('website', v)} placeholder="https://..." />
                    </Field>
                    <Field label="Rating">
                      <Input value={provider.rating} onChange={(v) => setP('rating', v)} placeholder="4.8" />
                    </Field>
                    <Field label="Aantal reviews">
                      <Input value={provider.reviewCount} onChange={(v) => setP('reviewCount', v)} placeholder="bijv. 128" />
                    </Field>
                    <Field label="Hero afbeelding URL" className="sm:col-span-2">
                      <Input value={provider.hero} onChange={(v) => setP('hero', v)} placeholder="https://..." />
                    </Field>
                    <Field label="Avatar URL" className="sm:col-span-2">
                      <div className="flex gap-3 items-center">
                        <Input value={provider.avatar} onChange={(v) => setP('avatar', v)} placeholder="https://..." />
                        {provider.avatar && <img src={provider.avatar} alt="" className="w-12 h-12 rounded-full object-cover border border-black/[0.08] shrink-0" />}
                      </div>
                    </Field>
                  </div>
                </Section>
              )}

              {activeTab === 'bio' && (
                <Section title="Bio paragrafen" icon="lucide:file-text" hint="Elke paragraaf wordt apart getoond op de aanbiederspagina.">
                  <div className="flex flex-col gap-3">
                    {provider.bio.map((para, i) => (
                      <div key={i} className="flex gap-2 items-start">
                        <textarea value={para} onChange={(e) => setListP('bio', i, null, e.target.value)} placeholder={`Paragraaf ${i + 1}...`} rows={3} className="flex-1 px-4 py-3 border border-black/[0.08] rounded-xl bg-white text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 transition-colors resize-none" />
                        <DelBtn onClick={() => delP('bio', i)} disabled={provider.bio.length === 1} />
                      </div>
                    ))}
                    <AddButton onClick={() => addP('bio', '')} label="Paragraaf toevoegen" />
                  </div>
                </Section>
              )}

              {activeTab === 'highlights' && (
                <Section title="Highlights" icon="lucide:star" hint="Korte kenmerken die op het profiel worden getoond.">
                  <div className="flex flex-col gap-3">
                    {provider.highlights.map((h, i) => (
                      <div key={i} className="flex gap-2 items-center bg-white border border-black/[0.07] rounded-xl p-3">
                        <select value={h.icon} onChange={(e) => setListP('highlights', i, 'icon', e.target.value)} className="w-[180px] shrink-0 px-3 py-2 border border-black/[0.08] rounded-lg text-sm bg-white outline-none focus:border-primary/50">
                          {HIGHLIGHT_ICONS.map((icon) => <option key={icon} value={icon}>{icon.replace('lucide:', '')}</option>)}
                        </select>
                        <Input value={h.label} onChange={(v) => setListP('highlights', i, 'label', v)} placeholder="bijv. Gecertificeerd verloskundige" />
                        <DelBtn onClick={() => delP('highlights', i)} />
                      </div>
                    ))}
                    <AddButton onClick={() => addP('highlights', { icon: 'lucide:check-circle-2', label: '' })} label="Highlight toevoegen" />
                  </div>
                </Section>
              )}

              {activeTab === 'practical' && (
                <Section title="Praktische informatie" icon="lucide:map-pin">
                  <div className="flex flex-col gap-4">
                    {provider.practical.map((p, i) => (
                      <div key={i} className="bg-white border border-black/[0.07] rounded-xl p-4 flex flex-col gap-3">
                        <div className="flex gap-2 items-center">
                          <select value={p.icon} onChange={(e) => setListP('practical', i, 'icon', e.target.value)} className="w-[160px] shrink-0 px-3 py-2 border border-black/[0.08] rounded-lg text-sm bg-white outline-none focus:border-primary/50">
                            {PRACTICAL_ICONS.map((icon) => <option key={icon} value={icon}>{icon.replace('lucide:', '')}</option>)}
                          </select>
                          <Input value={p.label} onChange={(v) => setListP('practical', i, 'label', v)} placeholder="Label (bijv. Locatie)" />
                          <DelBtn onClick={() => delP('practical', i)} />
                        </div>
                        <textarea value={p.value} onChange={(e) => setListP('practical', i, 'value', e.target.value)} placeholder={p.label === 'Locatie' ? 'bijv. Kinkerstraat 123, 1053 EB Amsterdam' : p.label === 'Lestijden' ? 'bijv. Maandag 10:00–11:30' : p.label === 'Telefoon' ? 'bijv. +31 6 12 34 56 78' : p.label === 'E-mail' ? 'bijv. info@aanbieder.nl' : ''} rows={2} className="w-full px-4 py-3 border border-black/[0.08] rounded-xl bg-white text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 transition-colors resize-none" />
                      </div>
                    ))}
                    <AddButton onClick={() => addP('practical', { icon: 'lucide:map-pin', label: '', value: '' })} label="Item toevoegen" />
                  </div>
                </Section>
              )}

              {activeTab === 'reviews' && (
                <Section title="Reviews" icon="lucide:message-square" hint="Klantervaringen die op het profiel worden getoond.">
                  <div className="flex flex-col gap-4">
                    {provider.reviews.map((r, i) => (
                      <div key={i} className="bg-white border border-black/[0.07] rounded-xl p-5">
                        <div className="flex items-center justify-between mb-4">
                          <p className="text-sm font-semibold text-foreground">Review {i + 1}</p>
                          <DelBtn onClick={() => delP('reviews', i)} />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <Field label="Naam"><Input value={r.name} onChange={(v) => setListP('reviews', i, 'name', v)} placeholder="bijv. Lisa de Vries" /></Field>
                          <Field label="Cursus naam"><Input value={r.course} onChange={(v) => setListP('reviews', i, 'course', v)} placeholder="bijv. Zwangerschapsyoga" /></Field>
                          <Field label="Beoordeling">
                            <select value={r.rating} onChange={(e) => setListP('reviews', i, 'rating', Number(e.target.value))} className="w-full px-4 py-2.5 border border-black/[0.08] rounded-xl bg-white text-sm text-foreground outline-none focus:border-primary/50">
                              {[5,4,3,2,1].map((n) => <option key={n} value={n}>{n} ster{n !== 1 ? 'ren' : ''}</option>)}
                            </select>
                          </Field>
                          <Field label="Avatar URL"><Input value={r.avatar} onChange={(v) => setListP('reviews', i, 'avatar', v)} placeholder="https://..." /></Field>
                          <Field label="Review tekst" className="sm:col-span-2">
                            <textarea value={r.text} onChange={(e) => setListP('reviews', i, 'text', e.target.value)} placeholder="Ervaringsverhaal..." rows={3} className="w-full px-4 py-3 border border-black/[0.08] rounded-xl bg-white text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 transition-colors resize-none" />
                          </Field>
                        </div>
                      </div>
                    ))}
                    <AddButton onClick={() => addP('reviews', { name: '', course: '', rating: 5, text: '', avatar: '' })} label="Review toevoegen" />
                  </div>
                </Section>
              )}
            </>
          )}

          {/* ── Code output (gedeeld) ── */}
          {activeTab === 'output' && (
            <Section title="Gegenereerde code" icon="lucide:code-2" hint={mode === 'cursus' ? 'Plak in ALL_COURSES in lib/courses.js' : 'Plak in PROVIDERS in lib/providers.js'}>
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm text-muted-foreground">
                  Plak in <code className="text-[12px] bg-secondary px-1.5 py-0.5 rounded font-mono">{mode === 'cursus' ? 'lib/courses.js' : 'lib/providers.js'}</code>
                </p>
                <button onClick={handleCopy} className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${copied ? 'bg-primary text-white' : 'bg-foreground text-background hover:opacity-90'}`}>
                  <iconify-icon icon={copied ? 'lucide:check' : 'lucide:copy'} class="text-sm" aria-hidden="true" />
                  {copied ? 'Gekopieerd!' : 'Kopieer code'}
                </button>
              </div>
              <pre className="w-full bg-foreground text-white/80 text-[12px] font-mono p-5 rounded-2xl overflow-x-auto leading-relaxed">
                {mode === 'cursus' ? generateCourse() : generateProvider()}
              </pre>
            </Section>
          )}

        </div>
      </main>
    </>
  );
}

/* ─── Sub-components ─────────────────────────────────────────────────────── */

function Section({ title, icon, hint, children }) {
  return (
    <div className="bg-white border border-black/[0.07] rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-2.5 mb-1">
        <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
          <iconify-icon icon={icon} class="text-sm text-primary" aria-hidden="true" />
        </div>
        <h2 className="text-[15px] font-bold text-foreground">{title}</h2>
      </div>
      <div className={hint ? 'mb-5' : 'mb-4'}>
        {hint && <p className="text-[13px] text-muted-foreground mt-1 ml-[42px]">{hint}</p>}
      </div>
      {children}
    </div>
  );
}

function Field({ label, required, hint, className = '', children }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-[12px] font-semibold text-foreground uppercase tracking-wide">
        {label}{required && <span className="text-primary ml-1">*</span>}
      </label>
      {hint && <p className="text-[11px] text-muted-foreground -mt-0.5">{hint}</p>}
      {children}
    </div>
  );
}

function Input({ value, onChange, placeholder }) {
  return (
    <input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
      className="w-full px-4 py-2.5 border border-black/[0.08] rounded-xl bg-white text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 transition-colors"
    />
  );
}

function AddButton({ onClick, label }) {
  return (
    <button onClick={onClick} className="flex items-center gap-2 px-4 py-2.5 border border-dashed border-primary/40 text-primary text-sm font-semibold rounded-xl hover:bg-primary/5 transition-colors w-full justify-center">
      <iconify-icon icon="lucide:plus" class="text-sm" aria-hidden="true" />
      {label}
    </button>
  );
}

function DelBtn({ onClick, disabled = false }) {
  return (
    <button onClick={onClick} disabled={disabled} className="p-2.5 rounded-xl border border-black/[0.08] bg-white text-muted-foreground hover:text-red-500 hover:border-red-200 transition-colors disabled:opacity-30 shrink-0">
      <iconify-icon icon="lucide:trash-2" class="text-sm" aria-hidden="true" />
    </button>
  );
}