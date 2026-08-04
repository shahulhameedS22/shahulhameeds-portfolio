import { useEffect, useState } from "react";
import { Download, Github, Linkedin, Mail, MapPin, Sparkles, Network, Server, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticleField } from "./ParticleField";
import { profile, counters } from "@/data/portfolio";
import { downloadResume } from "@/lib/resume";
import profilePhoto from "@/assets/profile.jpg";


function useTypewriter(words: readonly string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length]!;
    const done = !deleting && text === word;
    const empty = deleting && text === "";

    if (done) {
      const t = setTimeout(() => setDeleting(true), 1600);
      return () => clearTimeout(t);
    }
    if (empty) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(
      () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
      deleting ? 35 : 70,
    );
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return text;
}

const focusCards = [
  { icon: Network, title: "Networking", note: "Routing, switching, CCNA in progress" },
  { icon: Server, title: "VMware ESXi", note: "Virtualization & data center" },
  { icon: Terminal, title: "Tech Support", note: "Troubleshooting & infrastructure" },
];

export function Hero() {
  const typed = useTypewriter(profile.typingRoles);

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div aria-hidden className="hero-glow absolute inset-x-0 top-0 h-[640px]" />
      <ParticleField />
      <div
        aria-hidden
        className="animate-glow absolute -top-32 left-1/2 size-[520px] -translate-x-1/2 rounded-full bg-[image:var(--gradient-accent)] opacity-30 blur-[120px]"
      />

      <div className="relative mx-auto max-w-5xl px-4 text-center">
        <div className="relative mx-auto mb-8 w-fit">
          <div aria-hidden className="absolute inset-0 rounded-full bg-[image:var(--gradient-accent)] opacity-25 blur-2xl" />
          <div className="glass-card relative rounded-full p-1.5">
            <div className="size-36 overflow-hidden rounded-full ring-1 ring-primary/25 sm:size-44">
              <img
                src={profilePhoto}
                alt="Shahul Hameed S"
                width={352}
                height={352}
                loading="eager"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <span className="glass-card inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs text-primary">
          <Sparkles className="size-3.5" />
          Available for networking &amp; infrastructure roles
        </span>


        <h1 className="mt-7 text-4xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Hello, I&apos;m <span className="gradient-text">Shahul Hameed S</span>
        </h1>

        <p
          className="mt-5 flex items-center justify-center gap-2 font-mono text-base text-primary sm:text-xl"
          aria-label={profile.role}
        >
          <span aria-hidden className="text-primary/50">&#47;&#47;</span>
          <span>{typed}</span>
        </p>


        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {profile.intro}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">Let&apos;s Connect</a>
          </Button>
          <Button variant="outlineGlow" size="lg" onClick={downloadResume}>
            <Download /> Download Resume
          </Button>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Button variant="glass" size="sm" asChild>
            <a href={profile.github} target="_blank" rel="noreferrer noopener">
              <Github /> GitHub
            </a>
          </Button>
          <Button variant="glass" size="sm" asChild>
            <a href={profile.linkedin} target="_blank" rel="noreferrer noopener">
              <Linkedin /> LinkedIn
            </a>
          </Button>
          <Button variant="glass" size="sm" asChild>
            <a href={`mailto:${profile.email}`}>
              <Mail /> Email
            </a>
          </Button>
          <Button variant="glass" size="sm" asChild>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.location)}`}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`View ${profile.location} on Google Maps (opens in a new tab)`}
            >
              <MapPin /> {profile.location}
            </a>
          </Button>

        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {focusCards.map((card, i) => (
            <div
              key={card.title}
              className="glass-card rounded-2xl p-5 text-left transition-transform duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 160}ms` }}
            >
              <span className="grid size-10 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/25">
                <card.icon className="size-5" />
              </span>
              <p className="font-display mt-4 text-base font-semibold">{card.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{card.note}</p>
            </div>
          ))}
        </div>

        <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {counters.map((c) => (
            <div key={c.label} className="glass-card rounded-2xl px-4 py-5">
              <dt className="order-2 mt-1 text-[11px] text-muted-foreground">{c.label}</dt>
              <dd className="font-display text-xl font-bold text-primary sm:text-2xl">
                {c.value}
                {c.suffix}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
