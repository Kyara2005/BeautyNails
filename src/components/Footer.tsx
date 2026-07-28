import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-blush-deep/60 bg-cream px-5 py-8 text-center">
      <p className="font-display text-sm font-semibold text-ink">Beauty Nails</p>
      <p className="mt-1 text-sm font-light text-ink-muted">
        Centro Histórico — San Blas, Quito · Martes a sábado 9:30 AM – 6:00 PM
      </p>
      <p className="mt-3">
        <Link href="/tree" className="text-sm font-medium text-rose transition-colors hover:text-crimson">
          Enlaces
        </Link>
      </p>
      <p className="mt-4 text-xs text-ink-muted/80">
        © {new Date().getFullYear()} Beauty Nails. Todos los derechos reservados.
      </p>
    </footer>
  );
}
