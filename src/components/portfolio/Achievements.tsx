import { CalendarDays, Crown, Medal, Trophy } from "lucide-react";
import { achievements } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const icons = {
  crown: Crown,
  calendar: CalendarDays,
  trophy: Trophy,
  medal: Medal,
} as const;

export function Achievements() {
  return (
    <section id="achievements" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Leadership & Achievements"
          title={
            <>
              Beyond the <span className="gradient-text">terminal</span>
            </>
          }
          description="Leading teams, organising national-level events, and competing on and off the field."
        />

        <ol className="relative mx-auto mt-14 max-w-3xl space-y-6 border-l border-border/70 pl-8">
          {achievements.map((a, i) => {
            const Icon = icons[a.icon as keyof typeof icons];
            return (
              <li key={a.title} className="relative">
                <span className="glass-card absolute top-6 -left-[3.05rem] grid size-8 place-items-center rounded-full text-primary">
                  <Icon className="size-4" />
                </span>
                <Reveal delay={i * 100}>
                  <article className="glass-card rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7">
                    <h3 className="text-lg font-semibold">{a.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{a.org}</p>
                    <ul className="mt-4 grid gap-2">
                      {a.points.map((p) => (
                        <li key={p} className="flex gap-2.5 text-sm text-muted-foreground">
                          <span
                            aria-hidden
                            className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                          />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
