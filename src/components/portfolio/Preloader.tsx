import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      aria-hidden={done}
      className={cn(
        "fixed inset-0 z-100 grid place-items-center bg-background transition-opacity duration-500",
        done ? "pointer-events-none opacity-0" : "opacity-100",
      )}
    >
      <div className="text-center">
        <div className="relative mx-auto size-16">
          <span className="absolute inset-0 animate-ping rounded-full bg-primary/25" />
          <span className="glass-card absolute inset-0 grid place-items-center rounded-full font-display text-lg font-bold text-primary">
            SH
          </span>
        </div>
        <p className="mt-5 font-mono text-xs tracking-[0.25em] text-muted-foreground uppercase">
          Loading portfolio
        </p>
      </div>
    </div>
  );
}
