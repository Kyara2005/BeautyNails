import Image from "next/image";
import { assetPath, assets } from "@/lib/paths";
import { siteConfig } from "@/lib/site";

export function AboutStudio() {
  return (
    <section id="estudio" className="section-pad relative overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="about-media relative mx-auto w-full max-w-lg">
          <a
            href="#servicios"
            className="about-media-frame group relative block aspect-[4/5] overflow-hidden outline-none transition-transform duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-crimson focus-visible:ring-offset-4"
            aria-label="Ver qué servicios es ideal para ti"
          >
            <Image
              src={assetPath(assets.brand.moodboard)}
              alt="¿Qué servicios es ideal para ti?"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/55 to-transparent px-5 py-4 text-center">
              <span className="font-display text-sm font-semibold text-cream">
                Ver servicios →
              </span>
            </span>
          </a>
          <figure className="about-float-shot">
            <Image
              src={assetPath(assets.gallery[1])}
              alt="Detalle de nail art"
              width={200}
              height={240}
              className="h-full w-full object-cover"
            />
          </figure>
        </div>

        <div className="text-center lg:text-left">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            El estudio
          </p>
          <h2 className="sticker-title mt-3 font-display text-4xl font-bold sm:text-5xl">
            Hecho a tu medida
          </h2>
          <div className="wave-accent mx-auto mt-4 lg:mx-0" aria-hidden />
          <p className="mt-5 text-lg font-light leading-relaxed text-ink-muted">
            En {siteConfig.location} cuidamos cada detalle: forma, color y acabado
            para que salgas con uñas que se sienten tuyas.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Previa reserva", value: "Atención personalizada" },
              { label: "Martes a sábado", value: "9:30 AM – 6:00 PM" },
              { label: "Quito", value: "Centro Histórico" },
            ].map((item) => (
              <li
                key={item.label}
                className="rounded-2xl border border-rose/15 bg-blush/40 px-4 py-4 text-left"
              >
                <p className="font-display text-sm font-bold text-crimson">{item.label}</p>
                <p className="mt-1 text-sm font-light text-ink-muted">{item.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
