import Link from "next/link";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-wide text-cream drop-shadow-[0_2px_8px_rgba(61,36,48,0.35)]"
        >
          Beauty Nails
        </Link>
        <ul className="hidden items-center gap-6 text-sm font-medium text-cream/90 lg:flex">
          <li>
            <a href="#disenos" className="transition-opacity hover:opacity-100 opacity-90">
              Diseños
            </a>
          </li>
          <li>
            <a href="#servicios" className="transition-opacity hover:opacity-100 opacity-90">
              Servicios
            </a>
          </li>
          <li>
            <a href="#tratamientos" className="transition-opacity hover:opacity-100 opacity-90">
              Tratamientos
            </a>
          </li>
          <li>
            <a href="#galeria" className="transition-opacity hover:opacity-100 opacity-90">
              Galería
            </a>
          </li>
          <li>
            <a href="#reserva" className="transition-opacity hover:opacity-100 opacity-90">
              Reserva
            </a>
          </li>
        </ul>
        <a
          href="#reserva"
          className="rounded-2xl bg-cream px-4 py-2.5 text-sm font-semibold text-crimson shadow-[0_8px_24px_rgba(61,36,48,0.2)] transition-transform duration-300 hover:-translate-y-0.5"
        >
          Reservar
        </a>
      </nav>
    </header>
  );
}
