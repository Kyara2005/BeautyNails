import Image from "next/image";
import { assetPath } from "@/lib/paths";

const gallery = [
  {
    src: assetPath("/gallery-1.png"),
    alt: "Nail art con detalles en oro, rosa y azul",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: assetPath("/gallery-2.png"),
    alt: "Manicura con flores 3D y textura de concha",
    span: "",
  },
  {
    src: assetPath("/gallery-3.png"),
    alt: "Manicura nude con estrellas azules y puntos negros",
    span: "",
  },
];

export function Gallery() {
  return (
    <section id="galeria" className="section-pad bg-gradient-to-b from-blush/40 to-cream">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            Nuestro trabajo
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
            Galería
          </h2>
          <p className="mt-4 text-lg font-light text-ink-muted">
            Detalles, color y acabados pensados para cada cliente.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-3 sm:auto-rows-[260px]">
          {gallery.map((item) => (
            <figure
              key={item.src}
              className={`group relative overflow-hidden rounded-[1.75rem] ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, 66vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <figcaption className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
