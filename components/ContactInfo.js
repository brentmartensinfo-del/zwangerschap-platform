import Link from 'next/link';

const EMAIL = 'hallo@birhtly.nl';

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">

      {/* Header */}
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl md:text-[38px] font-bold text-foreground leading-snug tracking-tight">
          Neem contact op
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed max-w-[460px]">
          Heb je een vraag over Birthly of wil je je aansluiten als
          aanbieder? Stuur ons een bericht — we reageren binnen één werkdag.
        </p>
      </div>

      {/* Email card */}
      <div className="bg-white border border-black/[0.07] rounded-xl p-6 shadow-[0_4px_16px_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <iconify-icon
              icon="lucide:mail"
              class="text-xl text-primary"
              aria-hidden="true"
            />
          </div>
          <div>
            <p className="text-[13px] font-semibold text-muted-foreground uppercase tracking-wide">
              E-mail ons
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="text-[15px] font-semibold text-foreground hover:text-primary transition-colors"
            >
              {EMAIL}
            </a>
          </div>
        </div>
        <a
          href={`mailto:${EMAIL}`}
          className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-white rounded-md text-sm font-medium hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
        >
          <iconify-icon icon="lucide:send" class="text-base" aria-hidden="true" />
          Stuur een e-mail
        </a>
      </div>

      {/* FAQ callout */}
      <div className="bg-secondary rounded-xl p-6 flex flex-col gap-3">
        <div className="flex items-center gap-2.5">
          <iconify-icon
            icon="lucide:circle-help"
            class="text-lg text-primary shrink-0"
            aria-hidden="true"
          />
          <h4 className="text-[15px] font-semibold text-foreground">
            Antwoord nodig? Kijk eerst bij de FAQ
          </h4>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          De meeste vragen over cursussen, aanbieders en overige vragen
          beantwoorden we al op onze FAQ pagina.
        </p>
        <Link
          href="/faq"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:opacity-75 transition-opacity"
        >
          Bekijk veelgestelde vragen
          <iconify-icon icon="lucide:arrow-right" class="text-sm" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}