import { Briefcase, GraduationCap } from "lucide-react";
import { education, experience } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

type Item = { title: string; org: string; period: string; points: string[] };

function Timeline({ items, icon: Icon }: { items: Item[]; icon: typeof Briefcase }) {
  return (
    <ol className="relative space-y-6 border-l border-border/70 pl-6 sm:pl-8">
      {items.map((item, i) => (
        <li key={item.title} className="relative">
          <span className="glass-card absolute top-6 -left-[2.35rem] grid size-8 place-items-center rounded-full text-primary sm:-left-[3.05rem]">
            <Icon className="size-4" />
          </span>
          <Reveal delay={i * 100}>
            <article className="glass-card rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7">
              <p className="font-mono text-xs text-primary">{item.period}</p>
              <h3 className="mt-2 text-lg font-semibold sm:text-xl">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.org}</p>
              <ul className="mt-4 grid gap-2">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm text-muted-foreground">
                    <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

export function Journey() {
  return (
    <section id="journey" className="relative py-20 sm:py-28">
      <div aria-hidden className="hero-glow absolute inset-x-0 top-1/4 h-[420px] opacity-60" />
      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Education & Experience"
          title={
            <>
              My <span className="gradient-text">journey</span> so far
            </>
          }
          description="Academic foundation in Computer Science paired with hands-on enterprise virtualization experience."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-10">
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-display text-sm tracking-[0.15em] text-muted-foreground uppercase">
              <GraduationCap className="size-4 text-primary" /> Education
            </h3>
            <Timeline items={education as unknown as Item[]} icon={GraduationCap} />
          </div>
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-display text-sm tracking-[0.15em] text-muted-foreground uppercase">
              <Briefcase className="size-4 text-primary" /> Experience
            </h3>
            <Timeline items={experience as unknown as Item[]} icon={Briefcase} />
          </div>
        </div>
      </div>
    </section>
  );
}
