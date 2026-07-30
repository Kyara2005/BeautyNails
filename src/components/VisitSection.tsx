import { siteConfig } from "@/lib/site";

const actions = [
  {
    href: "#reserva",
    label: "Reserva ahora",
    detail: "Formulario rápido",
    primary: true,
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" aria-hidden>
        <rect x="3" y="5" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: siteConfig.links.whatsapp,
    label: "WhatsApp",
    detail: siteConfig.phoneDisplay,
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden>
        <path d="M12 2.2A9.7 9.7 0 0 0 2.4 11.7c0 1.7.4 3.3 1.3 4.7L2 22l5.8-1.5a9.7 9.7 0 0 0 4.2 1 9.8 9.8 0 0 0 0-19.5Zm0 17.8c-1.4 0-2.7-.3-3.9-1l-.3-.2-3.4.9.9-3.3-.2-.3a7.9 7.9 0 1 1 6.9 3.9Zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8 1-.2.2-.3.2-.6.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.3.1-.2 0-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.2 1.8.7 2.2.6 2.6.5.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3Z" />
      </svg>
    ),
  },
  {
    href: siteConfig.links.maps,
    label: "Dirección",
    detail: siteConfig.location,
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" aria-hidden>
        <path
          d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    href: "#horarios",
    label: "Horarios",
    detail: "Mar–Sáb 9:30–18:00",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 7.5V12l3.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function VisitSection() {
  return (
    <section id="agenda" className="section-pad relative overflow-hidden scrapbook-bg">
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            Da el siguiente paso
          </p>
          <h2 className="sticker-title mt-3 font-display text-4xl font-bold sm:text-6xl">
            Escribenos para conocer más!!
          </h2>
          <div className="wave-accent mx-auto mt-4" aria-hidden />
          <p className="mx-auto mt-4 max-w-lg text-lg font-light text-ink-muted">
            Reserva, escribe por WhatsApp o encuentra cómo llegar.
          </p>

          <a href="#reserva" className="agenda-mega mt-10 inline-flex">
            Reservar ahora
          </a>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {actions.map((action) => (
            <li key={action.label}>
              <a
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noopener noreferrer" : undefined}
                className={`agenda-card ${action.primary ? "is-primary" : ""}`}
              >
                <span className="agenda-card-icon">{action.icon}</span>
                <span className="text-left">
                  <span className="block font-display text-lg font-bold">{action.label}</span>
                  <span className="mt-0.5 block text-sm font-light opacity-80">{action.detail}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div
          id="horarios"
          className="mt-10 scroll-mt-24 rounded-[1.75rem] border border-white/80 bg-cream/90 px-8 py-8 text-center shadow-[0_12px_36px_rgba(61,36,48,0.06)]"
        >
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            Horarios
          </p>
          <p className="mt-3 font-display text-2xl font-bold text-ink sm:text-3xl">
            Martes a Sábados
          </p>
          <p className="mt-2 font-display text-xl font-semibold text-crimson sm:text-2xl">
            9:30 AM – 6:00 PM
          </p>
          <p className="mt-3 text-sm font-light text-ink-muted">
            Domingos y lunes cerrados · Atención con previa reserva
          </p>
        </div>
      </div>
    </section>
  );
}
