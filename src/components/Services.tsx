const services = [
  {
    title: "Rubber",
    description:
      "Base niveladora de viscosidad media que permite fortalecer y proteger la uña natural.",
    highlights: [
      "Protección a tus uñas naturales",
      "Dura de 3 – 4 semanas",
      "Ideal para aumentar la duración de la manicura",
      "Aporta resistencia y estructura a la uña natural",
    ],
  },
  {
    title: "Semipermanente",
    description:
      "Esmalte de larga duración que se aplica sobre la uña natural y se fotopolimeriza.",
    highlights: [
      "Uñas sencillas y prácticas",
      "Dura de 2 – 3 semanas",
      "Ideal para uñas sanas que quieres algo práctico",
      "No alarga la uña",
    ],
  },
  {
    title: "Polygel",
    description:
      "Sistema híbrido (sin olor) que combina la resistencia del acrílico con la flexibilidad del gel, permitiendo crear extensiones ligeras y duraderas.",
    highlights: [
      "Extensiones ligeras y resistentes",
      "Dura de 3 – 4 semanas",
      "Permite elegir el largo y forma de las uñas",
      "Recomendado para personas que sufren alergias",
    ],
  },
];

export function Services() {
  return (
    <section id="servicios" className="section-pad bg-cream">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            Lo que ofrecemos
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
            Servicios
          </h2>
          <p className="mt-4 text-lg font-light text-ink-muted">
            Nail studio en Quito, en el Centro Histórico — San Blas. Atención con previa reserva.
          </p>
        </div>

        <ul className="mt-14 grid gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <li
              key={service.title}
              className="reveal rounded-[1.75rem] bg-gradient-to-b from-blush/50 to-cream px-7 py-8 text-left shadow-[0_12px_36px_rgba(61,36,48,0.06)]"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div className="mb-5 h-1.5 w-12 rounded-full bg-gradient-to-r from-pink to-crimson" />
              <h3 className="font-display text-2xl font-bold text-ink">{service.title}</h3>
              <p className="mt-3 text-base font-light leading-relaxed text-ink-muted">
                {service.description}
              </p>
              <ul className="mt-6 space-y-2.5">
                {service.highlights.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-snug text-ink">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" aria-hidden />
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
