import Image from "next/image";
import { assetPath, assets } from "@/lib/paths";

const treatments = [
  {
    title: "Hidratación profunda de manos",
    description: "Nutrición intensa para piel suave, luminosa y recuperada.",
    image: assets.treatments.hydrate,
  },
  {
    title: "Exfoliación",
    description: "Elimina impurezas y deja la piel fresca al tacto.",
    image: assets.treatments.exfoliate,
  },
  {
    title: "Tratamiento con parafina",
    description: "Calor envolvente que hidrata y relaja manos cansadas.",
    image: assets.treatments.paraffin,
  },
  {
    title: "Aceite para cutículas",
    description: "Cuida el contorno de la uña y previene resequedad.",
    image: assets.treatments.cuticle,
  },
  {
    title: "Fortalecimiento de uñas",
    description: "Refuerza la lámina ungueal para más resistencia.",
    image: assets.services.softgel,
  },
  {
    title: "Reparación de uñas quebradizas",
    description: "Recuperación gradual para uñas débiles o dañadas.",
    image: assets.designs.minimal,
  },
];

export function Treatments() {
  return (
    <section id="tratamientos" className="section-pad relative overflow-hidden scrapbook-bg">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            Cuidado real
          </p>
          <h2 className="sticker-title mt-3 font-display text-4xl font-bold sm:text-5xl">
            Tratamientos
          </h2>
          <div className="wave-accent mx-auto mt-4" aria-hidden />
          <p className="mt-4 text-lg font-light text-ink-muted">
            Rituales que preparan, nutren y recuperan tus manos y uñas.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((item, index) => (
            <li
              key={item.title}
              className="treatment-card group"
              style={{ animationDelay: `${index * 0.07}s` }}
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={assetPath(item.image)}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
              </div>
              <div className="px-5 py-5 text-left">
                <h3 className="font-display text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-ink-muted">
                  {item.description}
                </p>
                <a
                  href="#reserva"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-crimson transition-transform duration-300 group-hover:translate-x-1"
                >
                  Agregar a mi cita
                  <span aria-hidden>→</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
