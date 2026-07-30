import Image from "next/image";
import { assetPath, assets } from "@/lib/paths";

const gallery = [
  {
    src: assets.hero.nails,
    alt: "Manicura rosa glossy",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: assets.designs.cateye,
    alt: "Cat eye dusty rose",
    span: "",
  },
  {
    src: assets.designs.french,
    alt: "Francesa clásica",
    span: "",
  },
  {
    src: assets.gallery[1],
    alt: "Nail art con detalles en oro",
    span: "",
  },
  {
    src: assets.gallery[2],
    alt: "Manicura con flores 3D",
    span: "",
  },
  {
    src: assets.services.acrylic,
    alt: "Uñas acrílicas en crimson",
    span: "sm:col-span-2",
  },
];

export function Gallery() {
  return (
    <section id="galeria" className="section-pad bg-cream">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            Nuestro trabajo
          </p>
          <h2 className="sticker-title mt-3 font-display text-4xl font-bold sm:text-5xl">
            Galería
          </h2>
          <div className="wave-accent mx-auto mt-4" aria-hidden />
          <p className="mt-4 text-lg font-light text-ink-muted">
            Color, forma y detalle en cada set.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-3 sm:auto-rows-[240px]">
          {gallery.map((item) => (
            <figure key={item.src + item.alt} className={`gallery-sticker group relative ${item.span}`}>
              <Image
                src={assetPath(item.src)}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, 66vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <figcaption className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/35 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
