"use client";

import { useEffect, useRef, useState } from "react";

type Mark = {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  rotate: number;
  skew: number;
};

const COLORS = ["#a67b82", "#c45c6e", "#b76e79", "#d4a0a8", "#8f5a63"];

export function PolishCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [pressing, setPressing] = useState(false);
  const [marks, setMarks] = useState<Mark[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const noReduce = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || !noReduce) return;

    setEnabled(true);
    document.documentElement.classList.add("polish-cursor-on");

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onDown = (e: MouseEvent) => {
      if (e.button !== 0) return;
      setPressing(true);

      const id = ++idRef.current;
      const mark: Mark = {
        id,
        x: e.clientX,
        y: e.clientY,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: 12 + Math.random() * 16,
        rotate: Math.random() * 360,
        skew: -18 + Math.random() * 36,
      };
      setMarks((prev) => [...prev.slice(-40), mark]);
      window.setTimeout(() => {
        setMarks((prev) => prev.filter((m) => m.id !== id));
      }, 2800);
    };
    const onUp = () => setPressing(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      document.documentElement.classList.remove("polish-cursor-on");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div className="polish-marks" aria-hidden>
        {marks.map((mark) => (
          <span
            key={mark.id}
            className="polish-mark"
            style={{
              left: mark.x,
              top: mark.y,
              width: mark.size,
              height: mark.size * 1.15,
              background: `radial-gradient(circle at 35% 30%, #e8c4c8 0%, ${mark.color} 55%, #7a4a52 100%)`,
              transform: `translate(-50%, -50%) rotate(${mark.rotate}deg) skewX(${mark.skew}deg)`,
            }}
          />
        ))}
      </div>

      <div
        className={`polish-pointer ${visible ? "is-visible" : ""} ${pressing ? "is-pressing" : ""}`}
        style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
        aria-hidden
      >
        <svg viewBox="0 0 64 96" width="44" height="66" fill="none">
          {/* Cap / handle */}
          <rect x="24" y="2" width="16" height="28" rx="4" fill="#1a1a1a" />
          <rect x="26" y="4" width="5" height="24" rx="2" fill="#2e2e2e" opacity="0.5" />
          {/* Ferrule */}
          <rect x="22" y="28" width="20" height="10" rx="2" fill="#c5c8ce" />
          <rect x="22" y="30" width="20" height="2" fill="#e8eaed" />
          <rect x="22" y="35" width="20" height="1.5" fill="#9a9da3" />
          {/* Bristles */}
          <path
            d="M24 38c0 0 1 10 2.5 18 .8 4.2 2.2 8 5.5 11.5 1.2 1.3 2.5 2 4 2s2.8-.7 4-2c3.3-3.5 4.7-7.3 5.5-11.5C47 48 48 38 48 38H24Z"
            fill="#a67b82"
          />
          <path
            d="M28 39c.5 8 1.8 14 4 19.5"
            stroke="#c9a0a6"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.55"
          />
          {/* Drip */}
          <ellipse cx="36" cy="78" rx="7" ry="8" fill="#a67b82" className="brush-drip" />
          <ellipse cx="34" cy="75" rx="2.5" ry="2" fill="#d4b0b6" opacity="0.7" />
        </svg>
      </div>
    </>
  );
}
