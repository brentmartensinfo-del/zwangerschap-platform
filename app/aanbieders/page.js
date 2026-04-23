import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProviderCard from '@/components/ProviderCard';
import { getAllProviders } from '@/lib/providers';

export const metadata = {
  title: 'Aanbieders | Lumi Cursussen',
  description:
    'Bij Lumi werken we uitsluitend samen met gecertificeerde professionals. Ontdek onze aanbieders.',
};

export default async function AanbiedersPage() {
  const providers = await getAllProviders();

  return (
    <>
      <Navbar />

      <main className="flex-1">

        {/* ── Hero — met achtergrondafbeelding ── */}
        <section className="relative overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0" aria-hidden="true">
            <img
              src="https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg"
              alt=""
              className="w-full h-full object-cover object-center"
            />
            {/* Gradient overlay voor leesbaarheid */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(105deg, rgba(43,43,43,0.82) 0%, rgba(43,43,43,0.55) 55%, rgba(43,43,43,0.25) 100%)' }}
            />
          </div>

          <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8 md:px-12 py-14 md:py-20">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div className="max-w-[600px]">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/15 rounded-full mb-5">
                  <iconify-icon icon="lucide:shield-check" class="text-sm text-primary" aria-hidden="true" />
                  <span className="text-[11px] font-semibold text-white/70 uppercase tracking-widest">
                    Alleen gecertificeerde professionals
                  </span>
                </div>
                <h1 className="text-4xl md:text-[52px] font-bold text-white tracking-tight leading-[1.06] mb-4">
                  Ontmoet de experts
                  <br />
                  <span className="text-primary">achter de cursussen</span>
                </h1>
                <p className="text-base md:text-[17px] text-white/55 leading-relaxed max-w-[480px]">
                  Elk aanbieder op Lumi is persoonlijk geselecteerd op kwaliteit,
                  certificering en aantoonbare ervaring.
                </p>
              </div>

              {/* Stats — glass cards */}
              <div className="flex flex-wrap gap-3 shrink-0">
                {[
                  { value: `${providers.length}`, label: 'Aanbieders', icon: 'lucide:building-2' },
                  { value: '4.8 ★', label: 'Gem. beoordeling', icon: 'lucide:star' },
                  { value: '100%', label: 'Gecertificeerd', icon: 'lucide:shield-check' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center gap-3 px-4 py-3 bg-white/15 backdrop-blur-md border border-white/25 rounded-xl"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                      <iconify-icon icon={s.icon} class="text-sm text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[16px] font-bold text-white leading-none">{s.value}</p>
                      <p className="text-[11px] text-white/70 mt-0.5">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Providers grid — hoofdsectie ── */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-12 py-12 md:py-16" aria-labelledby="providers-heading">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <div>
              <h2 id="providers-heading" className="text-2xl md:text-[28px] font-bold text-foreground tracking-tight">
                Alle aanbieders
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                <span className="font-semibold text-foreground">{providers.length}</span> gecertificeerde partners
              </p>
            </div>
            <Link
              href="/cursussen"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-black/[0.08] text-foreground text-sm font-semibold rounded-xl hover:shadow-md transition-all shrink-0"
            >
              Bekijk alle cursussen
              <iconify-icon icon="lucide:arrow-right" class="text-base" aria-hidden="true" />
            </Link>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
            {providers.map((provider) => (
              <li key={provider.slug} className="h-full">
                <ProviderCard {...provider} />
              </li>
            ))}
          </ul>
        </section>

        {/* ── Waarom Lumi ── */}
        <section className="w-full bg-secondary py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-12">
            <div className="text-center mb-12">
              <p className="text-[12px] font-bold text-primary uppercase tracking-widest mb-3">Ons selectieproces</p>
              <h2 className="text-2xl md:text-[32px] font-bold text-foreground tracking-tight">
                Hoe wij aanbieders selecteren
              </h2>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-3 gap-5" role="list">
              {[
                {
                  icon: 'lucide:shield-check',
                  title: 'Gecertificeerde professionals',
                  body: "Actuele diploma's en certificeringen, geverifieerd bij erkende beroepsverenigingen.",
                  stat: '100%', statLabel: 'geverifieerd',
                },
                {
                  icon: 'lucide:star',
                  title: 'Aantoonbare ervaring',
                  body: 'Minimaal 5 jaar praktijkervaring in het begeleiden van aanstaande ouders.',
                  stat: '5+', statLabel: 'jaar gem. ervaring',
                },
                {
                  icon: 'lucide:heart',
                  title: 'Passie voor de zorg',
                  body: 'Hart voor veilige, positieve en goed geïnformeerde voorbereiding op de bevalling.',
                  stat: '4.8', statLabel: 'gem. beoordeling',
                },
              ].map((item, i) => (
                <li
                  key={item.title}
                  className="group flex flex-col bg-white border border-black/[0.07] rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <iconify-icon icon={item.icon} class="text-base text-primary group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-black text-foreground leading-none">{item.stat}</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wide mt-0.5">{item.statLabel}</p>
                    </div>
                  </div>
                  <h3 className="text-[15px] font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed flex-1">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── CTA voor aanbieders ── */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-12 py-16 md:py-20">
          <div className="relative bg-foreground rounded-3xl overflow-hidden px-8 md:px-16 py-12 md:py-16">
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'radial-gradient(ellipse at 15% 50%, rgba(122,166,122,0.12) 0%, transparent 55%)' }}
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-[520px]">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/10 rounded-full mb-5">
                  <iconify-icon icon="lucide:building-2" class="text-sm text-primary" aria-hidden="true" />
                  <span className="text-[11px] font-semibold text-white/60 uppercase tracking-widest">Voor aanbieders</span>
                </div>
                <h2 className="text-2xl md:text-[36px] font-bold text-white tracking-tight leading-tight mb-4">
                  Ben jij een cursusaanbieder?
                </h2>
                <p className="text-base text-white/50 leading-relaxed">
                  Sluit je aan en bereik maandelijks duizenden aanstaande ouders die actief op zoek zijn naar de juiste voorbereiding.
                </p>
              </div>

              <div className="flex flex-col gap-3 shrink-0 md:w-[260px]">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity"
                >
                  Meld je aan als partner
                  <iconify-icon icon="lucide:arrow-right" class="text-base" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3 border border-white/15 text-white/70 text-sm font-medium rounded-xl hover:border-white/30 hover:text-white transition-all"
                >
                  Meer informatie
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}