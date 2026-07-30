import Image from "next/image";
import { assetPath, assets } from "@/lib/paths";

const services = [
  {
    title: "Rubber",
    description:
      "Base niveladora de viscosidad media que permite fortalecer y proteger la uña natural.",
    image: assets.services.softgel,
    highlights: [
      "Protección a tus uñas naturales",
      "Dura de 3 – 4 semanas",
      "Ideal para aumentar la duración de la manicura",
    ],
  },
  {
    title: "Semipermanente",
    description:
      "Esmalte de larga duración que se aplica sobre la uña natural y se fotopolimeriza.",
    image: assets.designs.minimal,
    highlights: [
      "Uñas sencillas y prácticas",
      "Dura de 2 – 3 semanas",
      "Ideal para uñas sanas y look limpio",
    ],
  },
  {
    title: "Polygel",
    description:
      "Sistema híbrido sin olor: resistencia del acrílico con la flexibilidad del gel.",
    image: assets.services.acrylic,
    highlights: [
      "Extensiones ligeras y resistentes",
      "Dura de 3 – 4 semanas",
      "Elige largo y forma a tu gusto",
    ],
  },
];

export function Services() {
  return (
    <section id="servicios" className="section-pad scrapbook-bg">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            Lo que ofrecemos
          </p>
          <h2 className="sticker-title mt-3 font-display text-4xl font-bold sm:text-5xl">
            Servicios
          </h2>
          <div className="wave-accent mx-auto mt-4" aria-hidden />
          <p className="mt-4 text-lg font-light text-ink-muted">
            Técnicas pensadas para proteger, embellecer y durar.
          </p>
        </div>

        <ul className="mt-14 grid gap-7 lg:grid-cols-3">
          {services.map((service, index) => (
            <li
              key={service.title}
              className="service-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={assetPath(service.image)}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                <h3 className="absolute bottom-4 left-5 font-display text-2xl font-bold text-cream">
                  {service.title}
                </h3>
              </div>
              <div className="px-6 py-6 text-left">
                <p className="text-base font-light leading-relaxed text-ink-muted">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-snug text-ink">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" aria-hidden />
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#reserva"
                  className="mt-5 inline-flex text-sm font-semibold text-crimson transition-transform duration-300 group-hover:translate-x-1"
                >
                  Reservar este servicio →
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
