import { Github, Linkedin, Mail } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold">{profile.name}</p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Networking · VMware ESXi · Enterprise Infrastructure
          </p>
        </div>

        <nav aria-label="Quick links">
          <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">Quick Links</p>
          <ul className="mt-3 grid grid-cols-2 gap-1.5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">Elsewhere</p>
          <div className="mt-3 flex gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="glass-card grid size-10 place-items-center rounded-xl text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="size-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="glass-card grid size-10 place-items-center rounded-xl text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send an email"
              className="glass-card grid size-10 place-items-center rounded-xl text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-4 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Shahul Hameed S. All rights reserved.</p>
        <p className="mt-1">Designed &amp; Developed by Shahul Hameed S</p>
      </div>
    </footer>
  );
}
