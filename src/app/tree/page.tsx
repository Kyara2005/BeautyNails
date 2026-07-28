import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { assetPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Enlaces | Beauty Nails",
  description: "Instagram, ubicación y WhatsApp de Beauty Nails Quito.",
};

const links = [
  {
    label: "Instagram",
    description: "@beautynailsquito",
    href: siteConfig.links.instagram,
    accent: "from-rose to-crimson",
  },
  {
    label: "Ubicación",
    description: siteConfig.location,
    href: siteConfig.links.maps,
    accent: "from-pink to-rose",
  },
  {
    label: "WhatsApp",
    description: siteConfig.phoneDisplay,
    href: siteConfig.links.whatsapp,
    accent: "from-crimson to-rose",
  },
];

export default function TreePage() {
  return (
    <main className="flex-1">
      <section className="hero-atmosphere relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 py-16">
        <div
          className="polish-smear right-[-10%] top-10 h-56 w-72 bg-crimson/25"
          aria-hidden
        />
        <div
          className="polish-smear bottom-0 left-[-8%] h-48 w-64 bg-rose/30"
          aria-hidden
        />

        <div className="relative z-10 mx-auto w-full max-w-md text-center">
          <Link
            href="/"
            className="mb-8 inline-block text-sm font-medium text-ink-muted transition-colors hover:text-crimson"
          >
            ← Beauty Nails
          </Link>

          <Image
            src={assetPath("/logo.png")}
            alt="Beauty Nails"
            width={140}
            height={140}
            priority
            className="mx-auto h-28 w-28 rounded-full object-cover shadow-[0_12px_30px_rgba(196,59,78,0.2)]"
          />
          <h1 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl">
            Beauty Nails
          </h1>
          <p className="mt-2 text-base font-light text-ink-muted">
            {siteConfig.tagline} · Previa reserva
          </p>

          <ul className="mt-10 space-y-4">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl bg-cream/80 px-5 py-4 shadow-[0_10px_28px_rgba(61,36,48,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(196,59,78,0.16)]"
                >
                  <span
                    className={`h-11 w-11 shrink-0 rounded-xl bg-gradient-to-br ${link.accent} shadow-inner`}
                    aria-hidden
                  />
                  <span className="min-w-0 flex-1 text-left">
                    <span className="block font-display text-lg font-bold text-ink">
                      {link.label}
                    </span>
                    <span className="block truncate text-sm font-light text-ink-muted">
                      {link.description}
                    </span>
                  </span>
                  <span
                    className="text-rose transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
