/** Prefijo del repo en GitHub Pages (`/BeautyNails` en producción). */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Ruta de assets en `public/` compatible con GitHub Pages. */
export function assetPath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
