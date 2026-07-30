/** Prefijo del repo en GitHub Pages (`/BeautyNails` en producción). */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Ruta de assets en `public/` compatible con GitHub Pages. */
export function assetPath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

/** Rutas canónicas de assets organizados en `public/`. */
export const assets = {
  brand: {
    logo: "/brand/logo.png",
    moodboard: "/brand/moodboard.png",
  },
  hero: {
    nails: "/images/hero/nails.png",
  },
  gallery: {
    1: "/images/gallery/1.png",
    2: "/images/gallery/2.png",
    3: "/images/gallery/3.png",
    nail1: "/images/gallery/nail-1.png",
  },
  designs: {
    cateye: "/images/designs/cateye.png",
    french: "/images/designs/french.png",
    minimal: "/images/designs/minimal.png",
  },
  services: {
    acrylic: "/images/services/acrylic.png",
    softgel: "/images/services/softgel.png",
    softgel1: "/images/services/softgel-1.png",
    softgel2: "/images/services/softgel-2.png",
  },
  treatments: {
    cuticle: "/images/treatments/cuticle.png",
    exfoliate: "/images/treatments/exfoliate.png",
    hydrate: "/images/treatments/hydrate.png",
    paraffin: "/images/treatments/paraffin.png",
  },
  videos: {
    comoLlegar: "/videos/como-llegar.mp4",
  },
} as const;
