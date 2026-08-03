import { Code2, Database, Monitor, Network, Server, Wrench } from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal, useInView } from "./Reveal";

const icons = {
  network: Network,
  server: Server,
  code: Code2,
  database: Database,
  monitor: Monitor,
  wrench: Wrench,
} as const;

function SkillCard({
  group,
  delay,
}: {
  group: (typeof skillGroups)[number];
  delay: number;
}) {
  const Icon = icons[group.icon];
  const { ref, visible } = useInView<HTMLDivElement>(0.3);

  return (
    <Reveal delay={delay}>
      <div
        ref={ref}
        className="group glass-card h-full rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 sm:p-7"
      >
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-2xl bg-primary/12 text-primary ring-1 ring-primary/25 transition-transform duration-300 group-hover:scale-110">
            <Icon className="size-5" />
          </span>
          <div>
            <h3 className="font-semibold">{group.title}</h3>
            <p className="text-xs text-muted-foreground">{group.items.length} skills</p>
          </div>
          <span className="ml-auto font-mono text-sm text-primary">{group.level}%</span>
        </div>

        <div
          className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-secondary"
          role="progressbar"
          aria-label={`${group.title} proficiency`}
          aria-valuenow={group.level}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <span
            className="block h-full rounded-full bg-[image:var(--gradient-accent)] transition-[width] duration-1000 ease-out"
            style={{ width: visible ? `${group.level}%` : "0%" }}
          />
        </div>

        <ul className="mt-5 flex flex-wrap gap-2">
          {group.items.map((item) => (
            <li
              key={item}
              className="rounded-full border border-border/70 bg-secondary/50 px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Skills"
          title={
            <>
              Technical <span className="gradient-text">toolkit</span>
            </>
          }
          description="Networking fundamentals, enterprise virtualization, and the tools I use every day."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.title} group={group} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
