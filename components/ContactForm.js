const WHATSAPP_NUMBER = '31653742392';
const WHATSAPP_MESSAGE = 'Hi! Ik heb een vraag over Birthly.';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function ContactForm() {
  return (
    <div className="relative bg-[#f0faf0] border border-primary/20 rounded-2xl overflow-hidden">

      {/* Decorative circles */}
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/5" aria-hidden="true" />
      <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-primary/5" aria-hidden="true" />

      <div className="relative z-10 p-8 md:p-10 flex flex-col gap-8">

        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shrink-0 shadow-[0_4px_16px_rgba(122,166,122,0.35)]">
            <iconify-icon
              icon="lucide:message-circle-more"
              class="text-[26px] text-white"
              aria-hidden="true"
            />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
              WhatsApp met ons
            </h2>
            <p className="text-[13px] text-primary font-medium mt-0.5">
              Gemiddeld antwoord binnen 2 uur
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-[15px] text-muted-foreground leading-relaxed">
          Heb je een vraag over een cursus, aanbieder of boeking? App ons
          direct — geen formulieren, geen wachttijden.
        </p>

        {/* Preview bubble */}
        <div className="bg-white rounded-xl p-4 border border-black/[0.06]">
          <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide mb-2">
            Jouw bericht
          </p>
          <div className="inline-block bg-primary/10 rounded-xl rounded-tl-sm px-4 py-2.5 max-w-[280px]">
            <p className="text-[13px] text-foreground leading-relaxed">
              {WHATSAPP_MESSAGE}
            </p>
          </div>
          <p className="text-[11px] text-muted-foreground mt-2">
            Pas het bericht aan nadat je op de knop klikt.
          </p>
        </div>

        {/* CTA */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 w-full py-4 bg-primary text-white rounded-xl text-[15px] font-semibold hover:opacity-90 active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 shadow-[0_4px_16px_rgba(122,166,122,0.3)]"
        >
          <iconify-icon icon="lucide:message-circle-more" class="text-xl" aria-hidden="true" />
          Open WhatsApp
        </a>

        {/* Trust items */}
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {[
            'Gratis & vrijblijvend',
            'Veilig & vertrouwelijk',
            'Ma–vr, 09:00–18:00',
          ].map((item) => (
            <span key={item} className="flex items-center gap-1.5 text-[12px] text-muted-foreground">
              <iconify-icon icon="lucide:check-circle-2" class="text-primary text-sm" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}