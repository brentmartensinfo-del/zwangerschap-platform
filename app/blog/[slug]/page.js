import Link from 'next/link';
import OpenFinderButton from '@/components/OpenFinderButton';

// In productie: fetch artikel op basis van slug
export default function BlogPostPage({ params }) {
  return (
    <main className="flex-1">

      {/* ── Article header ── */}
      <section className="border-b border-black/[0.07] bg-background">
        <div className="max-w-[760px] mx-auto px-4 sm:px-8 md:px-12 pt-10 pb-0">

          {/* Breadcrumb */}
          <nav aria-label="Kruimelpad" className="flex items-center gap-2 text-[13px] text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <iconify-icon icon="lucide:chevron-right" class="text-xs" aria-hidden="true" />
            <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            <iconify-icon icon="lucide:chevron-right" class="text-xs" aria-hidden="true" />
            <span className="text-foreground font-medium truncate">Hypnobirthing</span>
          </nav>

          {/* Category + meta */}
          <div className="flex items-center gap-3 mb-5">
            <span className="px-3 py-1.5 bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-widest rounded-full">
              Bevalling
            </span>
            <span className="text-[12px] text-muted-foreground">18 april 2025</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/30" aria-hidden="true" />
            <span className="text-[12px] text-muted-foreground">6 min leestijd</span>
          </div>

          <h1 className="text-3xl md:text-[42px] font-bold text-foreground tracking-tight leading-[1.1] mb-6">
            Hypnobirthing: wat is het en werkt het echt?
          </h1>

          <p className="text-[17px] text-muted-foreground leading-relaxed mb-8">
            Steeds meer aanstaande moeders kiezen voor hypnobirthing als voorbereiding op de bevalling. Maar wat houdt het precies in, en wat kun je er realistisch van verwachten?
          </p>

          {/* Author */}
          <div className="flex items-center gap-4 pb-8 border-b border-black/[0.07]">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <iconify-icon icon="lucide:user" class="text-base text-primary" aria-hidden="true" />
            </div>
            <div>
              <p className="text-[14px] font-semibold text-foreground">Lisa Mendes</p>
              <p className="text-[12px] text-muted-foreground">Redactie Birthly · Mede-oprichter</p>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <button className="w-8 h-8 rounded-full border border-black/[0.08] flex items-center justify-center hover:border-black/20 transition-colors">
                <iconify-icon icon="lucide:share-2" class="text-sm text-muted-foreground" aria-hidden="true" />
              </button>
              <button className="w-8 h-8 rounded-full border border-black/[0.08] flex items-center justify-center hover:border-black/20 transition-colors">
                <iconify-icon icon="lucide:bookmark" class="text-sm text-muted-foreground" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hero image ── */}
      <div className="max-w-[1000px] mx-auto px-4 sm:px-8 md:px-12 pt-10">
        <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden">
          <img
            src="https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg"
            alt="Vrouw in ontspannen houding tijdens zwangerschapscursus"
            className="w-full h-full object-cover"
            width={1000}
            height={428}
          />
        </div>
      </div>

      {/* ── Article body + sidebar ── */}
      <div className="max-w-[1000px] mx-auto px-4 sm:px-8 md:px-12 py-12 md:py-16">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_280px] gap-12 lg:gap-16 items-start">

          {/* ── Main content ── */}
          <article className="prose-birthly flex flex-col gap-6 min-w-0" style={{fontSize:'16px',lineHeight:'1.75',color:'var(--color-text-secondary, #5A615C)'}}>

            <p style={{color:'var(--foreground)'}}>
              Hypnobirthing is een methode waarbij je jezelf voorbereidt op de bevalling door middel van ontspanningstechnieken, visualisaties en positieve suggesties. Het idee is dat angst spanning veroorzaakt, en spanning pijn — en dat je die cyclus kunt doorbreken.
            </p>

            <h2 style={{fontSize:'22px',fontWeight:'700',color:'var(--foreground)',lineHeight:'1.3',marginTop:'8px'}}>Wat is hypnobirthing precies?</h2>

            <p>
              De term klinkt misschien mysterieus, maar hypnobirthing heeft weinig te maken met hypnose in de traditionele zin. Het is een combinatie van ademhalingstechnieken, diepe ontspanning en mentale voorbereiding. Je leert je lichaam en geest in staat te stellen rustig te blijven, ook onder druk.
            </p>

            <p>
              De methode werd in de jaren '90 populair door Marie Mongan, die het HypnoBirthing® programma ontwikkelde. Inmiddels zijn er meerdere varianten, maar de kern is bij alle hetzelfde: bevallen vanuit ontspanning in plaats van angst.
            </p>

            <div style={{background:'var(--secondary)',borderRadius:'16px',padding:'24px 28px',margin:'8px 0'}}>
              <p style={{fontWeight:'600',color:'var(--foreground)',fontSize:'15px',marginBottom:'8px'}}>Wat leer je in een hypnobirthingcursus?</p>
              <ul style={{paddingLeft:'0',listStyle:'none',display:'flex',flexDirection:'column',gap:'8px'}}>
                {[
                  'Diepe ademhalingstechnieken voor elke fase van de bevalling',
                  'Ontspannings- en visualisatieoefeningen',
                  'Hoe je je partner betrekt als coach',
                  'Een positief woordgebruik rondom de bevalling',
                  'Hoe je omgaat met onverwachte situaties',
                ].map((item) => (
                  <li key={item} style={{display:'flex',alignItems:'flex-start',gap:'10px',fontSize:'14px'}}>
                    <iconify-icon icon="lucide:check" style={{color:'var(--primary)',flexShrink:'0',marginTop:'3px'}} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <h2 style={{fontSize:'22px',fontWeight:'700',color:'var(--foreground)',lineHeight:'1.3',marginTop:'8px'}}>Werkt het?</h2>

            <p>
              Dat is de vraag die veel mensen stellen. Het eerlijke antwoord: er is wetenschappelijk bewijs dat ontspanningstechnieken pijnbeleving kunnen verminderen en de duur van de ontsluiting kunnen verkorten. Studies tonen aan dat vrouwen die hypnobirthing hebben gevolgd gemiddeld minder medicatie nodig hebben.
            </p>

            <p>
              Tegelijkertijd is hypnobirthing geen garantie voor een pijnvrije bevalling. Bevallen is intensief — de methode helpt je ermee om te gaan, niet het te vermijden. Verwacht geen wonderen, maar reken wel op een significante verbetering in hoe je de ervaring beleeft.
            </p>

            <blockquote style={{borderLeft:'3px solid var(--primary)',paddingLeft:'20px',margin:'8px 0',fontStyle:'italic',fontSize:'18px',color:'var(--foreground)',lineHeight:'1.4'}}>
              "Ik heb niet perfect rustig bevallen, maar ik was niet bang. Dat was het verschil."
              <footer style={{fontSize:'13px',fontStyle:'normal',color:'var(--muted-foreground)',marginTop:'8px'}}>— Sanne, hypnobirthing cursist</footer>
            </blockquote>

            <h2 style={{fontSize:'22px',fontWeight:'700',color:'var(--foreground)',lineHeight:'1.3',marginTop:'8px'}}>Voor wie is het geschikt?</h2>

            <p>
              Hypnobirthing werkt voor veel verschillende mensen — ook voor wie sceptisch is. De technieken die je leert zijn gewoon nuttig, of je ze nu 'hypnobirthing' noemt of niet. Wel is het zo dat je er het meest uithaalt als je er écht tijd in steekt: de oefeningen thuis doen, de visualisaties herhalen, en je partner erbij betrekken.
            </p>

            <p>
              Ben je bang voor de bevalling, of heb je een vorige moeilijke bevalling meegemaakt? Dan kan hypnobirthing bijzonder waardevol zijn. De focus op ontspanning en positieve verwachting kan helpen om die angst los te laten.
            </p>

            <h2 style={{fontSize:'22px',fontWeight:'700',color:'var(--foreground)',lineHeight:'1.3',marginTop:'8px'}}>Hoe vind je een goede cursus?</h2>

            <p>
              Let bij het kiezen van een cursus op de achtergrond van de trainer — is die gecertificeerd? Hoeveel ervaring hebben ze? Hoeveel deelnemers zitten er in een groep? En past het format bij jou — groep, privé of online?
            </p>

            <p>
              Op Birthly vind je alle gecertificeerde hypnobirthingaanbieders in jouw omgeving, met echte reviews van eerdere deelnemers.
            </p>
          </article>

          {/* ── Sidebar ── */}
          <aside className="w-full lg:sticky lg:top-24 flex flex-col gap-4">

            {/* Related courses CTA */}
            <div className="bg-white border border-black/[0.07] rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
              <div className="h-1 w-full bg-gradient-to-r from-primary/50 to-primary" />
              <div className="p-6">
                <p className="text-[11px] font-bold text-primary uppercase tracking-widest mb-3">Passend aanbod</p>
                <h3 className="text-[16px] font-bold text-foreground mb-2 leading-snug">Hypnobirthing cursussen bij jou in de buurt</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed mb-5">
                  Bekijk gecertificeerde aanbieders en lees echte ervaringen.
                </p>
                <Link
                  href="/cursussen?type=Hypnobirthing"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-white text-[13px] font-semibold rounded-xl hover:opacity-90 transition-opacity"
                >
                  Bekijk cursussen
                  <iconify-icon icon="lucide:arrow-right" class="text-sm" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Keuzehulp */}
            <div className="bg-secondary border border-black/[0.07] rounded-2xl p-5">
              <div className="flex items-center gap-2.5 mb-3">
                <iconify-icon icon="lucide:sparkles" class="text-base text-primary" aria-hidden="true" />
                <p className="text-[13px] font-bold text-foreground">Nog niet zeker?</p>
              </div>
              <p className="text-[12px] text-muted-foreground leading-relaxed mb-4">
                Onze keuzehulp helpt je in 5 stappen de cursus te vinden die bij jou past.
              </p>
              <OpenFinderButton className="flex items-center justify-center gap-2 w-full py-2.5 border border-primary/30 text-primary text-[12px] font-semibold rounded-xl hover:bg-primary/5 transition-colors">
                Start keuzehulp
              </OpenFinderButton>
            </div>

            {/* Article meta */}
            <div className="bg-white border border-black/[0.07] rounded-2xl p-5 flex flex-col gap-4">
              <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Over dit artikel</p>
              {[
                { label: 'Categorie', value: 'Bevalling' },
                { label: 'Leestijd', value: '6 minuten' },
                { label: 'Gepubliceerd', value: '18 april 2025' },
                { label: 'Auteur', value: 'Lisa Mendes' },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center text-[13px] border-t border-black/[0.05] pt-3 first:border-0 first:pt-0">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="font-medium text-foreground">{item.value}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>

      {/* ── More articles ── */}
      <section className="bg-secondary border-t border-black/[0.06] py-14 md:py-16">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-8 md:px-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[20px] font-bold text-foreground tracking-tight">Meer artikelen</h2>
            <Link href="/blog" className="text-[13px] font-semibold text-primary hover:opacity-75 transition-opacity flex items-center gap-1.5">
              Alle artikelen
              <iconify-icon icon="lucide:arrow-right" class="text-sm" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { title: 'Zwangerschapsyoga voor beginners', cat: 'Yoga & ontspanning', time: '4 min', slug: 'zwangerschapsyoga-beginners' },
              { title: 'Welke cursus bij je eerste zwangerschap?', cat: 'Keuzehulp', time: '5 min', slug: 'cursus-kiezen-eerste-zwangerschap' },
              { title: 'Hoe betrek je je partner?', cat: 'Met partner', time: '4 min', slug: 'partner-betrekken-voorbereiding' },
            ].map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white border border-black/[0.07] rounded-2xl p-5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-3 block">{post.cat}</span>
                <h3 className="text-[14px] font-bold text-foreground leading-snug mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                <span className="text-[12px] text-muted-foreground">{post.time} leestijd</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}