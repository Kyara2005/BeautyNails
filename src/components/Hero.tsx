import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { siteConfig } from "@/lib/site";
import { assetPath, assets } from "@/lib/paths";

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

function PaintedNails() {
  const colors = ["#c43b4e", "#e891a3", "#a67b82", "#f0b4c0", "#c45c6e"];

  return (
    <div className="painted-nails" aria-hidden>
      {colors.map((color, i) => (
        <span
          key={color}
          className="painted-nail"
          style={
            {
              "--nail-color": color,
              "--nail-delay": `${0.35 + i * 0.28}s`,
              "--nail-x": `${(i - 2) * 22}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="hero-fullbleed relative flex min-h-[100svh] items-end overflow-hidden">
      <Image
        src={assetPath(assets.hero.nails)}
        alt="Manicura Beauty Nails en tonos rosa"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_35%]"
      />
      <div className="hero-fullbleed-veil pointer-events-none absolute inset-0" aria-hidden />

      <span className="sparkle sparkle-a !top-[22%] !left-[12%]" aria-hidden />
      <span className="sparkle sparkle-b !bg-cream" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-32 text-center sm:px-8 sm:pb-20">
        <div className="animate-float animate-fade-up mx-auto mb-6">
          <Image
            src={assetPath(assets.brand.logo)}
            alt="Beauty Nails logo"
            width={220}
            height={220}
            priority
            className="mx-auto h-36 w-36 rounded-full object-cover ring-4 ring-cream/70 shadow-[0_20px_50px_rgba(61,36,48,0.35)] sm:h-44 sm:w-44"
          />
        </div>

        <h1 className="animate-fade-up-delay font-display text-5xl font-bold leading-[1.05] tracking-tight text-cream sm:text-7xl">
          Beauty Nails
        </h1>
        <span className="wave-accent-light mt-4" aria-hidden />
        <p className="animate-fade-up-delay-2 mx-auto mt-5 max-w-md text-lg font-light leading-relaxed text-cream/90 sm:text-xl">
          Manicura y pedicura con detalle en el corazón de Quito.
        </p>

        <PaintedNails />

        <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#reserva"
            className="rounded-2xl bg-crimson px-7 py-3.5 text-base font-semibold text-cream shadow-[0_12px_32px_rgba(196,59,78,0.45)] transition-transform duration-300 hover:-translate-y-1"
          >
            Reservar cita
          </a>
          <a
            href="#disenos"
            className="rounded-2xl border border-cream/40 bg-cream/15 px-7 py-3.5 text-base font-semibold text-cream backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
          >
            Ver diseños
          </a>
        </div>
      </div>
    </section>
  );
}
