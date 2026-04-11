const STEPS = [
  {
    icon: 'lucide:search',
    title: 'Zoek & Filter',
    description:
      'Vul je locatie in en ontdek het ruime aanbod van zwangerschapscursussen bij jou in de buurt.',
  },
  {
    icon: 'lucide:layout-list',
    title: 'Vergelijk het aanbod',
    description:
      'Lees reviews, bekijk de prijzen en ontdek welke cursus het beste aansluit bij jouw wensen.',
  },
  {
    icon: 'lucide:message-circle-heart',
    title: 'Neem direct contact op',
    description:
      'Heb je de perfecte cursus gevonden? Boek direct via de aanbieder, zonder verborgen kosten.',
  },
];

export default function HowItWorks() {
  return (
    <section
      className="py-14 md:py-20 px-4 sm:px-8 md:px-12 bg-secondary my-8 md:my-10 text-center"
      aria-labelledby="how-it-works-heading"
    >
      <h2
        id="how-it-works-heading"
        className="text-2xl md:text-[28px] font-semibold mb-10 md:mb-12 text-foreground"
      >
        Hoe Lumi werkt
      </h2>

      <ol
        className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10 max-w-[1000px] mx-auto"
        role="list"
        aria-label="Stappen om een cursus te vinden"
      >
        {STEPS.map((step, i) => (
          <li key={step.title} className="flex flex-col items-center text-center">
            {/* Step number badge */}
            <div className="relative mb-6">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
                <iconify-icon
                  icon={step.icon}
                  class="text-2xl md:text-[28px] text-foreground"
                  aria-hidden="true"
                />
              </div>
              <span
                className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center"
                aria-hidden="true"
              >
                {i + 1}
              </span>
            </div>

            <h3 className="text-base md:text-lg font-semibold mb-2.5 md:mb-3 text-foreground">
              {step.title}
            </h3>
            <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed max-w-[260px] mx-auto">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}