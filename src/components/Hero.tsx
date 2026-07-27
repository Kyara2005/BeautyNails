import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { assetPath } from "@/lib/paths";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <Link href="/" className="font-display text-lg font-bold tracking-wide text-ink">
          Beauty Nails
        </Link>
        <ul className="hidden items-center gap-8 text-sm font-medium text-ink-muted md:flex">
          <li>
            <a href="#servicios" className="transition-colors hover:text-crimson">
              Servicios
            </a>
          </li>
          <li>
            <a href="#galeria" className="transition-colors hover:text-crimson">
              Galería
            </a>
          </li>
          <li>
            <a href="#horarios" className="transition-colors hover:text-crimson">
              Horarios
            </a>
          </li>
          <li>
            <a href="#testimonios" className="transition-colors hover:text-crimson">
              Reseñas
            </a>
          </li>
          <li>
            <Link href="/tree" className="transition-colors hover:text-crimson">
              Enlaces
            </Link>
          </li>
        </ul>
        <a
          href={siteConfig.links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl bg-crimson px-4 py-2.5 text-sm font-semibold text-cream shadow-[0_8px_24px_rgba(196,59,78,0.28)] transition-transform duration-300 hover:-translate-y-0.5"
        >
          Reservar
        </a>
      </nav>
    </header>
  );
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="hero-atmosphere relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 pb-16 pt-28 text-center"
    >
      <div
        className="polish-smear animate-smear left-[-8%] top-[18%] h-48 w-72 bg-rose/40 sm:h-64 sm:w-96"
        aria-hidden
      />
      <div
        className="polish-smear right-[-6%] top-[28%] h-40 w-56 bg-crimson/35 sm:h-56 sm:w-80"
        style={{ animationDelay: "1.5s" }}
        aria-hidden
      />
      <div
        className="polish-smear bottom-[12%] left-[20%] h-32 w-48 bg-pink/45"
        style={{ animationDelay: "3s" }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
        <div className="animate-float animate-fade-up mb-8">
          <Image
            src={assetPath("/logo.png")}
            alt="Beauty Nails logo"
            width={280}
            height={280}
            priority
            className="h-44 w-44 rounded-full object-cover shadow-[0_20px_50px_rgba(196,59,78,0.22)] sm:h-56 sm:w-56"
          />
        </div>

        <h1 className="animate-fade-up-delay font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-7xl">
          Beauty Nails
        </h1>

        <p className="animate-fade-up-delay-2 mt-5 max-w-md text-lg font-light leading-relaxed text-ink-muted sm:text-xl">
          Manicura y pedicura con detalle en el corazón de Quito. Previa reserva.
        </p>

        <div className="animate-fade-up-delay-2 mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-crimson px-7 py-3.5 text-base font-semibold text-cream shadow-[0_12px_32px_rgba(196,59,78,0.3)] transition-transform duration-300 hover:-translate-y-1"
          >
            Reservar por WhatsApp
          </a>
          <a
            href="#servicios"
            className="rounded-2xl border border-rose/30 bg-cream/60 px-7 py-3.5 text-base font-semibold text-ink backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
