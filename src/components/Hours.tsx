export function Hours() {
  return (
    <section
      id="horarios"
      className="bg-gradient-to-b from-cream to-blush/40 px-[clamp(1.25rem,4vw,2rem)] py-12 sm:py-14"
    >
      <div className="mx-auto max-w-xl text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-rose">
          Te esperamos
        </p>
        <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
          Horarios
        </h2>
        <p className="mt-4 text-lg font-light text-ink-muted">
          Atención con previa reserva.
        </p>

        <div className="mt-8 rounded-[1.75rem] bg-cream/80 px-8 py-8 shadow-[0_12px_36px_rgba(61,36,48,0.06)] backdrop-blur-sm">
          <p className="font-display text-2xl font-bold text-ink sm:text-3xl">
            Martes a Sábados
          </p>
          <p className="mt-3 font-display text-xl font-semibold text-crimson sm:text-2xl">
            9:30 AM – 6:00 PM
          </p>
          <p className="mt-4 text-sm font-light text-ink-muted">
            Domingos y lunes cerrados
          </p>
        </div>
      </div>
    </section>
  );
}
