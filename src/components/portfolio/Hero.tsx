import { useEffect, useState } from "react";
import { Download, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticleField } from "./ParticleField";
import { profile } from "@/data/portfolio";
import { downloadResume } from "@/lib/resume";
import profileImage from "@/assets/profile.jpg";

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

export function Hero() {
  const typed = useTypewriter(profile.typingRoles);

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div aria-hidden className="hero-glow absolute inset-x-0 top-0 h-[640px]" />
      <ParticleField />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="glass-card inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs text-primary">
            <Sparkles className="size-3.5" />
            Available for networking &amp; infrastructure roles
          </span>

          <h1 className="mt-6 text-4xl leading-[1.08] font-bold sm:text-5xl lg:text-6xl">
            Hello, I&apos;m <span className="gradient-text">Shahul Hameed S</span>
          </h1>

          <p
            className="mt-4 font-mono text-base text-primary sm:text-lg"
            aria-label={profile.role}
          >
            {typed}
            <span className="animate-blink ml-0.5 inline-block">|</span>
          </p>

          <p className="mt-3 text-sm text-muted-foreground sm:text-base">{profile.role}</p>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">Let&apos;s Connect</a>
            </Button>
            <Button variant="outlineGlow" size="lg" onClick={downloadResume}>
              <Download /> Download Resume
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
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
            <span className="glass-card inline-flex items-center gap-2 rounded-full px-4 text-xs text-muted-foreground">
              <MapPin className="size-3.5 text-primary" /> {profile.location}
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div
            aria-hidden
            className="animate-glow absolute inset-6 rounded-full bg-[image:var(--gradient-accent)] blur-3xl"
          />
          <div className="glass-card animate-float relative overflow-hidden rounded-[2.5rem] p-2">
            <img
              src={profileImage}
              alt="Portrait of Shahul Hameed S, Computer Science Engineer and IT Engineer Trainee"
              width={896}
              height={1152}
              className="h-auto w-full rounded-[2rem] object-cover"
            />
          </div>
          <div className="glass-card absolute -bottom-5 -left-4 rounded-2xl px-4 py-3">
            <p className="font-display text-lg font-bold text-primary">VMware ESXi</p>
            <p className="text-xs text-muted-foreground">Virtualization &amp; Data Center</p>
          </div>
          <div className="glass-card absolute -top-4 -right-2 rounded-2xl px-4 py-3">
            <p className="font-display text-lg font-bold text-primary">CCNA</p>
            <p className="text-xs text-muted-foreground">Currently studying</p>
          </div>
        </div>
      </div>
    </section>
  );
}
