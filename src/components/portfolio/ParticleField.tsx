import { useEffect, useMemo, useState } from "react";

/** Lightweight CSS-only particle field — no canvas, no layout thrash. */
export function ParticleField() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const particles = useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => ({
        left: (i * 37) % 100,
        top: (i * 53) % 100,
        size: 2 + ((i * 7) % 4),
        delay: (i % 9) * 1.4,
        duration: 14 + ((i * 3) % 12),
        opacity: 0.15 + ((i % 5) * 0.09),
      })),
    [],
  );

  if (!mounted) return null;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-primary"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `drift ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
