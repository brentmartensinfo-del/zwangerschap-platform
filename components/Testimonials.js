const TESTIMONIALS = [
  {
    quote:
      'Via Lumi vond ik precies de hypnobirthing cursus die ik zocht. Het overzicht was super helder en ik kon de prijzen goed vergelijken. De cursus zelf was een fantastische ervaring!',
    name: 'Sanne (29)',
    context: 'Volgde Hypnobirthing in Utrecht',
    avatar:
      'https://storage.googleapis.com/banani-avatars/avatar%2Ffemale%2F25-35%2FEuropean%2F1',
  },
  {
    quote:
      'Mijn partner en ik zagen door de bomen het bos niet meer. Lumi bracht daar verandering in. Binnen vijf minuten hadden we een weekendcursus geboekt die perfect bij ons paste.',
    name: 'Mark (32)',
    context: 'Volgde Intensieve Bevalcursus',
    avatar:
      'https://storage.googleapis.com/banani-avatars/avatar%2Fmale%2F25-35%2FEuropean%2F2',
  },
  {
    quote:
      'De zwangerschapsyoga die ik vond via dit platform was heerlijk. Het was dichtbij, betaalbaar en precies wat ik nodig had om even tot rust te komen in mijn drukke week.',
    name: 'Aisha (31)',
    context: 'Volgde Zwangerschapsyoga in Amsterdam',
    avatar:
      'https://storage.googleapis.com/banani-avatars/avatar%2Ffemale%2F25-35%2FAfrican%2F1',
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-12 md:py-16 px-4 sm:px-8 md:px-12"
      aria-labelledby="testimonials-heading"
    >
      <h2
        id="testimonials-heading"
        className="text-2xl md:text-[28px] font-semibold text-center mb-10 md:mb-12 text-foreground"
      >
        Wat andere ouders zeggen
      </h2>

      <ul
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        role="list"
        aria-label="Klantervaringen"
      >
        {TESTIMONIALS.map((t) => (
          <li key={t.name}>
            <figure className="bg-white border border-black/[0.08] rounded-xl p-6 md:p-8 flex flex-col gap-5 md:gap-6 h-full">
              <iconify-icon
                icon="lucide:quote"
                class="text-2xl text-primary opacity-30"
                aria-hidden="true"
              />

              <blockquote className="text-[14px] md:text-[15px] text-foreground leading-relaxed italic flex-1">
                <p>"{t.quote}"</p>
              </blockquote>

              <figcaption className="flex items-center gap-3 mt-auto">
                <img
                  src={t.avatar}
                  alt={`Foto van ${t.name}`}
                  width={48}
                  height={48}
                  loading="lazy"
                  className="w-11 h-11 md:w-12 md:h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-[12px] md:text-[13px] text-muted-foreground">{t.context}</p>
                </div>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}