"use client";

import { useEffect, useRef, useState } from "react";
import { assetPath, assets } from "@/lib/paths";
import { siteConfig } from "@/lib/site";

const POST_URL = "https://www.instagram.com/p/DaiQKBJFnc-/";
const HOWTO_URL = "https://www.instagram.com/reel/DXIYcgoDWje/";

function LocalVideoPlayer({ src, title }: { src: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  }, [src]);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="relative aspect-[9/16] w-full overflow-hidden bg-ink">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src={src}
        muted
        loop
        playsInline
        preload="auto"
        controls
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        Tu navegador no soporta video HTML5.
      </video>
      <button
        type="button"
        onClick={toggle}
        className="absolute bottom-4 left-4 rounded-2xl bg-cream/90 px-3 py-2 text-xs font-semibold text-crimson shadow-md backdrop-blur-sm"
        aria-label={playing ? `Pausar ${title}` : `Reproducir ${title}`}
      >
        {playing ? "Pausar" : "Reproducir"}
      </button>
    </div>
  );
}

export function InteractiveVideo() {
  return (
    <section id="video" className="section-pad relative overflow-hidden scrapbook-bg">
      <span className="sparkle sparkle-a" aria-hidden />
      <span className="sparkle sparkle-b" aria-hidden />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            En Instagram
          </p>
          <h2 className="sticker-title mt-3 font-display text-4xl font-bold sm:text-5xl">
            Reels en vivo
          </h2>
          <div className="wave-accent mx-auto mt-4" aria-hidden />
          <p className="mt-4 text-lg font-light text-ink-muted">
            Publicación reciente y cómo llegar al estudio, reproducidos aquí mismo.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-8 md:grid-cols-2">
          <article className="mx-auto w-full max-w-[400px]">
            <p className="mb-3 text-center font-display text-sm font-semibold uppercase tracking-[0.18em] text-rose">
              Publicación
            </p>
            <div className="reel-frame">
              <div className="reel-frame-inner overflow-hidden">
                <iframe
                  title="Publicación Beauty Nails en Instagram"
                  src="https://www.instagram.com/p/DaiQKBJFnc-/embed/captioned/"
                  className="h-[720px] w-full border-0 bg-blush"
                  loading="eager"
                  allow="autoplay; encrypted-media; clipboard-write; picture-in-picture; fullscreen"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
            <div className="mt-4 text-center">
              <a
                href={POST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-crimson hover:underline"
              >
                Ver publicación completa
              </a>
            </div>
          </article>

          <article className="mx-auto w-full max-w-[400px]">
            <p className="mb-3 text-center font-display text-sm font-semibold uppercase tracking-[0.18em] text-rose">
              Cómo llegar
            </p>
            <div className="reel-frame">
              <div className="reel-frame-inner overflow-hidden">
                <LocalVideoPlayer
                  src={assetPath(assets.videos.comoLlegar)}
                  title="Cómo llegar a Beauty Nails"
                />
              </div>
            </div>
            <p className="mt-3 text-center text-sm font-light text-ink-muted">
              Se reproduce en la página, con controles propios.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <a
                href={siteConfig.links.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-crimson px-5 py-2.5 text-sm font-semibold text-cream shadow-[0_10px_28px_rgba(196,59,78,0.28)] transition-transform hover:-translate-y-0.5"
              >
                Abrir en Maps
              </a>
              <a
                href={HOWTO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-rose/30 bg-cream/80 px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
              >
                Reel original
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
