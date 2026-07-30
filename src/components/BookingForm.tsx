"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site";

const services = [
  "Uñas Acrílicas",
  "Soft Gel",
  "Nail Art",
  "Francesas",
  "Cat Eye",
  "Diseños Minimalistas",
  "Rubber",
  "Semipermanente",
  "Polygel",
  "Tratamiento de manos",
];

export function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(services[0]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hola Beauty Nails, quiero reservar una cita.`,
      ``,
      `Nombre: ${name.trim()}`,
      `WhatsApp: ${phone.trim()}`,
      `Servicio: ${service}`,
      date ? `Fecha preferida: ${date}` : null,
      time ? `Hora preferida: ${time}` : null,
      notes.trim() ? `Notas: ${notes.trim()}` : null,
    ].filter(Boolean);

    const url = `${siteConfig.links.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    setSent(true);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="reserva" className="section-pad relative overflow-hidden scrapbook-bg">
      <span className="sparkle sparkle-b" aria-hidden />

      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            Agenda fácil
          </p>
          <h2 className="sticker-title mt-3 font-display text-4xl font-bold sm:text-5xl">
            Reserva tu cita
          </h2>
          <div className="wave-accent mx-auto mt-4" aria-hidden />
          <p className="mt-4 text-lg font-light text-ink-muted">
            Completa el formulario y te redirigimos a WhatsApp para confirmar.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="booking-form mt-12 space-y-5 rounded-[2rem] border border-white/80 bg-cream/85 p-6 shadow-[0_20px_50px_rgba(61,36,48,0.1)] backdrop-blur-sm sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-left">
              <span className="mb-2 block text-sm font-semibold text-ink">Nombre</span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
                className="booking-input"
              />
            </label>
            <label className="block text-left">
              <span className="mb-2 block text-sm font-semibold text-ink">WhatsApp</span>
              <input
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="09xxxxxxxx"
                className="booking-input"
              />
            </label>
          </div>

          <label className="block text-left">
            <span className="mb-2 block text-sm font-semibold text-ink">Servicio</span>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="booking-input"
            >
              {services.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-left">
              <span className="mb-2 block text-sm font-semibold text-ink">Fecha preferida</span>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="booking-input"
              />
            </label>
            <label className="block text-left">
              <span className="mb-2 block text-sm font-semibold text-ink">Hora preferida</span>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="booking-input"
              />
            </label>
          </div>

          <label className="block text-left">
            <span className="mb-2 block text-sm font-semibold text-ink">Notas (opcional)</span>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              placeholder="Diseño, referencia o preferencias"
              className="booking-input resize-y"
            />
          </label>

          <button type="submit" className="booking-submit">
            Reservar por WhatsApp
          </button>

          {sent ? (
            <p className="text-center text-sm font-medium text-rose" role="status">
              Se abrió WhatsApp con tu solicitud. ¡Te confirmamos pronto!
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
