import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const current = navLinks
        .map((l) => {
          const el = document.querySelector(l.href);
          if (!el) return null;
          const top = el.getBoundingClientRect().top;
          return { href: l.href, top };
        })
        .filter(Boolean)
        .filter((s) => s!.top <= 140)
        .pop();
      if (current) setActive(current.href);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={cn(
            "flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 sm:px-5",
            scrolled ? "glass-card" : "border border-transparent",
          )}
          aria-label="Main navigation"
        >
          <a href="#home" className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-xl bg-primary/15 font-display text-sm font-bold text-primary ring-1 ring-primary/30">
              SH
            </span>
            <span className="font-display text-sm font-semibold tracking-tight sm:text-base">
              Shahul Hameed
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                    active === link.href && "bg-primary/10 text-primary",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button variant="hero" size="sm" asChild className="hidden sm:inline-flex">
              <a href="#contact">Let&apos;s Connect</a>
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid size-9 place-items-center rounded-xl border border-border/70 text-foreground lg:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="glass-card animate-in fade-in slide-in-from-top-2 mt-2 rounded-3xl p-3 lg:hidden">
            <ul className="grid gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
