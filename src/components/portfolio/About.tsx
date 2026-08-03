import { CheckCircle2 } from "lucide-react";
import { counters, highlights, profile } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              Building a career in <span className="gradient-text">networking</span> and
              virtualization
            </>
          }
          description="A Computer Science Engineer who enjoys hands-on infrastructure work — from routing and switching labs to deploying virtual machines on enterprise hypervisors."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="glass-card rounded-3xl p-7 sm:p-9">
            <h3 className="text-xl font-semibold">Who I am</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {profile.intro}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Alongside my technical work, I have led a college club as President and organised
              large-scale campus events — experience that shaped how I collaborate, communicate and
              take ownership within a team.
            </p>
          </Reveal>

          <Reveal delay={120} className="glass-card rounded-3xl p-7 sm:p-9">
            <h3 className="text-xl font-semibold">What defines me</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {counters.map((c, i) => (
            <Reveal key={c.label} delay={i * 90}>
              <div className="glass-card h-full rounded-3xl p-6 text-center transition-transform duration-300 hover:-translate-y-1">
                <p className="font-display text-3xl font-bold text-primary sm:text-4xl">
                  <Counter value={c.value} suffix={c.suffix} decimals={c.decimals ?? 0} />
                </p>
                <p className="mt-2 text-xs tracking-wide text-muted-foreground uppercase">
                  {c.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
