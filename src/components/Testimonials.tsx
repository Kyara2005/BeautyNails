const testimonials = [
  {
    quote:
      "Me encantó la experiencia. Son muy profesionales y cuidadosas en cada detalle. El resultado quedó hermoso y el ambiente es súper agradable. Sin duda volveré.",
    name: "Michell Manzanilla",
    service: "Uñas de acrílico y Manicura",
  },
  {
    quote:
      "Fui con un diseño previo y lo replicaron a la perfección, incluso más lindo de lo que imaginaba. Súper detallistas, con un talento increíble y un ambiente precioso que hace que la experiencia sea aún más especial.",
    name: "Carolina Baque",
  },
  {
    quote:
      "Muy buena atención, mis uñas quedaron lindísimas. Las niñas que te atienden y agendan tu cita son muy amables. Me encantó, totalmente se los recomiendo.",
    name: "Andrea Cobo Ramos",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="section-pad bg-cream">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            Clientas felices
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
            Reseñas
          </h2>
          <p className="mt-4 text-lg font-light text-ink-muted">
            Lo que dicen quienes ya visitaron Beauty Nails.
          </p>
        </div>

        <ul className="mt-14 grid gap-12 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <li key={item.name} className="reveal" style={{ animationDelay: `${index * 0.1}s` }}>
              <blockquote className="text-center">
                <p className="font-display text-5xl leading-none text-pink-soft">&ldquo;</p>
                <p className="-mt-2 text-lg font-light leading-relaxed text-ink">
                  {item.quote}
                </p>
                <footer className="mt-6">
                  <p className="font-display text-sm font-semibold tracking-wide text-rose">
                    — {item.name}
                  </p>
                  {"service" in item && item.service ? (
                    <p className="mt-1 text-xs font-light text-ink-muted">{item.service}</p>
                  ) : null}
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
