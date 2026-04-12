import Link from 'next/link';

const CONTACT_METHODS = [
  {
    icon: 'lucide:mail',
    title: 'E-mail ons',
    value: 'hallo@lumicursussen.nl',
  },
  {
    icon: 'lucide:phone',
    title: 'Bel ons',
    value: '085 - 123 45 67\nMa - Vr, 09:00 - 17:00',
  },
  {
    icon: 'lucide:map-pin',
    title: 'Kantoor',
    value: 'Keizersgracht 123\n1015 CJ Amsterdam',
  },
];

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-[40px] font-semibold text-foreground leading-snug tracking-tight">
          Neem contact op
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          Heb je een vraag over een cursus, je boeking of ben je een aanbieder
          die zich wil aansluiten? Ons team staat klaar om je te helpen.
        </p>
      </div>

      {/* Contact methods */}
      <ul className="flex flex-col gap-8" role="list">
        {CONTACT_METHODS.map((method) => (
          <li key={method.title} className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-md bg-secondary flex items-center justify-center shrink-0">
              <iconify-icon
                icon={method.icon}
                class="text-2xl text-foreground"
                aria-hidden="true"
              />
            </div>
            <div className="flex flex-col gap-1 pt-1">
              <span className="text-[15px] font-semibold text-foreground">
                {method.title}
              </span>
              <span className="text-[15px] text-muted-foreground leading-relaxed whitespace-pre-line">
                {method.value}
              </span>
            </div>
          </li>
        ))}
      </ul>

      {/* FAQ callout */}
      <div className="flex items-start gap-4 p-6 rounded-xl bg-secondary">
        <iconify-icon
          icon="lucide:info"
          class="text-xl text-primary mt-0.5 shrink-0"
          aria-hidden="true"
        />
        <div>
          <h4 className="text-[15px] font-semibold text-foreground mb-2">
            Kijk eerst bij de FAQ
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Veel antwoorden op vragen over boekingen en annuleringen vind je in
            onze{' '}
            <Link
              href="/#faq"
              className="text-primary font-medium hover:opacity-80 transition-opacity"
            >
              veelgestelde vragen
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}