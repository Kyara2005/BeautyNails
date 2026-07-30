"use client";

import { useState } from "react";
import Image from "next/image";
import { assetPath, assets } from "@/lib/paths";

type CategoryId =
  | "acrilicas"
  | "softgel"
  | "nailart"
  | "francesas"
  | "cateye"
  | "minimalistas";

const categories: {
  id: CategoryId;
  label: string;
  blurb: string;
}[] = [
  { id: "acrilicas", label: "Uñas Acrílicas", blurb: "Extensiones con forma y largo a tu medida." },
  { id: "softgel", label: "Soft Gel", blurb: "Acabado flexible, natural y de larga duración." },
  { id: "nailart", label: "Nail Art", blurb: "Detalles creativos, texturas y piezas únicas." },
  { id: "francesas", label: "Francesas", blurb: "Clásicas o modernas, con tip en color o glitter." },
  { id: "cateye", label: "Cat Eye", blurb: "Efecto magnético con brillo y movimiento." },
  { id: "minimalistas", label: "Minimalistas", blurb: "Líneas limpias, nude y detalles sutiles." },
];

const designs: {
  id: string;
  category: CategoryId;
  title: string;
  description: string;
  image: string;
}[] = [
  {
    id: "acr-1",
    category: "acrilicas",
    title: "Almond glam",
    description: "Extensión almendra con brillo intenso.",
    image: assets.services.acrylic,
  },
  {
    id: "acr-2",
    category: "acrilicas",
    title: "Color statement",
    description: "Largo medio y acabado glossy.",
    image: assets.gallery[1],
  },
  {
    id: "acr-3",
    category: "acrilicas",
    title: "Stiletto soft",
    description: "Forma alargada con tip en contraste.",
    image: assets.gallery.softunas,
  },
  {
    id: "acr-4",
    category: "acrilicas",
    title: "Ballerina chic",
    description: "Cuadrada suave con volumen y brillo.",
    image: assets.designs.cateye,
  },
  {
    id: "sg-1",
    category: "softgel",
    title: "Soft nude",
    description: "Base translúcida con glow natural.",
    image: assets.services.softgel,
  },
  {
    id: "sg-2",
    category: "softgel",
    title: "Gel flexible",
    description: "Look limpio para el día a día.",
    image: assets.designs.softgel,
  },
  {
    id: "sg-3",
    category: "softgel",
    title: "Rose glaze",
    description: "Capa rosa suave con acabado glass.",
    image: assets.services.softgel1,
  },
  {
    id: "sg-4",
    category: "softgel",
    title: "Natural cover",
    description: "Cobertura ligera que respeta la uña.",
    image: assets.services.softgel2,
  },
  {
    id: "na-1",
    category: "nailart",
    title: "Floral 3D",
    description: "Flores en relieve y detalles en oro.",
    image: assets.gallery[2],
  },
  {
    id: "na-2",
    category: "nailart",
    title: "Print & hearts",
    description: "Motivos creativos con personalidad.",
    image: assets.gallery.nail1,
  },
  {
    id: "na-3",
    category: "nailart",
    title: "Art mix",
    description: "Combinación de texturas y color.",
    image: assets.gallery[1],
  },
  {
    id: "na-4",
    category: "nailart",
    title: "Statement set",
    description: "Pieza llamativa para ocasiones especiales.",
    image: assets.services.acrylic,
  },
  {
    id: "fr-1",
    category: "francesas",
    title: "French clássica",
    description: "Tip blanco sobre base nude.",
    image: assets.designs.french,
  },
  {
    id: "fr-2",
    category: "francesas",
    title: "French rosa",
    description: "Variación suave y moderna.",
    image: assets.gallery[4],
  },
  {
    id: "fr-3",
    category: "francesas",
    title: "French color",
    description: "Tip en tono vivo con base clara.",
    image: assets.hero.nails,
  },
  {
    id: "fr-4",
    category: "francesas",
    title: "Micro french",
    description: "Línea fina y elegante.",
    image: assets.designs.minimal,
  },
  {
    id: "ce-1",
    category: "cateye",
    title: "Cat eye rose",
    description: "Destello magnético dusty rose.",
    image: assets.gallery[6],
  },
  {
    id: "ce-2",
    category: "cateye",
    title: "Cat eye glow",
    description: "Profundidad metálica con luz.",
    image: assets.gallery[1],
  },
  {
    id: "ce-3",
    category: "cateye",
    title: "Cat eye night",
    description: "Efecto oscuro con brillo móvil.",
    image: assets.gallery[7],
  },
  {
    id: "ce-4",
    category: "cateye",
    title: "Cat eye soft",
    description: "Versión suave en tonos mauve.",
    image: assets.gallery[8],
  },
  {
    id: "mi-1",
    category: "minimalistas",
    title: "Línea fina",
    description: "Detalles delicados sobre nude.",
    image: assets.designs.minimal,
  },
  {
    id: "mi-2",
    category: "minimalistas",
    title: "Clean chic",
    description: "Minimalismo elegante y versátil.",
    image: assets.services.softgel,
  },
  {
    id: "mi-3",
    category: "minimalistas",
    title: "Soft tip",
    description: "Toque sutil en punta clara.",
    image: assets.designs.french,
  },
  {
    id: "mi-4",
    category: "minimalistas",
    title: "Nude gloss",
    description: "Base limpia con brillo espejo.",
    image: assets.gallery[3],
  },
];

export function FavoriteDesigns() {
  const [active, setActive] = useState<CategoryId>("acrilicas");
  const current = categories.find((c) => c.id === active)!;
  const filtered = designs.filter((d) => d.category === active);

  return (
    <section id="disenos" className="section-pad relative overflow-hidden bg-cream">
      <div
        className="polish-smear pointer-events-none absolute -left-[10%] top-[10%] h-48 w-72 bg-pink/25"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            Inspiración
          </p>
          <h2 className="sticker-title mt-3 font-display text-4xl font-bold sm:text-5xl">
            Nuestros Diseños Favoritos
          </h2>
          <div className="wave-accent mx-auto mt-4" aria-hidden />
          <p className="mt-4 text-lg font-light text-ink-muted">
            Explora por categoría y elige el look que más te represente.
          </p>
        </div>

        <div
          className="mt-10 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Categorías de diseños"
        >
          {categories.map((cat) => {
            const isActive = cat.id === active;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(cat.id)}
                className={`shrink-0 rounded-2xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "scale-[1.03] bg-crimson text-cream shadow-[0_10px_28px_rgba(196,59,78,0.28)]"
                    : "border border-rose/20 bg-cream text-ink-muted hover:-translate-y-0.5 hover:text-crimson"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <p className="mt-6 text-center text-base font-light text-ink-muted">{current.blurb}</p>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" key={active}>
          {filtered.map((design, index) => (
            <li
              key={design.id}
              className="design-card group"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <figure className="relative h-56 overflow-hidden sm:h-64">
                <Image
                  src={assetPath(design.image)}
                  alt={design.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 text-left">
                  <p className="font-display text-lg font-bold text-cream">{design.title}</p>
                  <p className="mt-1 text-sm font-light text-cream/90">{design.description}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
