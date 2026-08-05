import { ArrowUpRight, BadgeCheck, Github, Sparkles } from "lucide-react";
import { certifications, projects } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <Reveal className="mt-14" delay={index * 150}>
      <article className="glass-card rounded-[2rem] p-7 sm:p-10">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/12 px-3 py-1 text-xs text-primary ring-1 ring-primary/25">
              <Sparkles className="size-3.5" /> {project.badge}
            </span>
            <h3 className="mt-4 text-2xl font-bold sm:text-3xl">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {project.description}
            </p>
          </div>
          <Button variant="hero" asChild>
            <a href={project.repo} target="_blank" rel="noreferrer noopener">
              <Github /> View on GitHub
            </a>
          </Button>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <h4 className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
              Key Features
            </h4>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {project.features.map((feature: string) => (
                <li key={feature} className="flex gap-2.5 text-sm text-muted-foreground">
                  <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
              Technologies
            </h4>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech: string) => (
                <li
                  key={tech}
                  className="rounded-full border border-border/70 bg-secondary/50 px-3 py-1 text-xs text-muted-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Work() {
  return (
    <section id="project" className="relative py-20 sm:py-28">
      <div aria-hidden className="hero-glow absolute inset-x-0 top-0 h-[420px] opacity-60" />
      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Featured Projects"
          title={
            <>
              Work I&apos;m <span className="gradient-text">proud of</span>
            </>
          }
        />

        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}

        <div className="mt-20">
          <SectionHeading
            eyebrow="Certifications"
            title={
              <>
                Always <span className="gradient-text">learning</span>
              </>
            }
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {certifications.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <div className="glass-card h-full rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30">
                  <BadgeCheck className="size-6 text-primary" />
                  <h3 className="mt-4 font-semibold">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.org}</p>
                  <span className="mt-4 inline-block rounded-full bg-primary/12 px-3 py-1 text-xs text-primary ring-1 ring-primary/25">
                    {c.status}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
