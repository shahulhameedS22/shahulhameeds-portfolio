import {
  achievements,
  certifications,
  education,
  experience,
  profile,
  project,
  skillGroups,
} from "@/data/portfolio";

/**
 * Builds a plain-text resume from the portfolio data and triggers a download.
 * Keeps the résumé in sync with the site content without shipping a binary.
 */
export function downloadResume() {
  const line = "-".repeat(58);
  const parts = [
    profile.name.toUpperCase(),
    profile.role,
    `${profile.email} | ${profile.phone} | ${profile.location}`,
    `${profile.linkedin} | ${profile.github}`,
    "",
    line,
    "PROFILE",
    line,
    profile.intro,
    "",
    line,
    "EDUCATION",
    line,
    ...education.flatMap((e) => [
      `${e.title} — ${e.org} (${e.period})`,
      ...e.points.map((p) => `  • ${p}`),
      "",
    ]),
    line,
    "EXPERIENCE",
    line,
    ...experience.flatMap((e) => [
      `${e.title} — ${e.org} (${e.period})`,
      ...e.points.map((p) => `  • ${p}`),
      "",
    ]),
    line,
    "SKILLS",
    line,
    ...skillGroups.map((g) => `${g.title}: ${g.items.join(", ")}`),
    "",
    line,
    "PROJECT",
    line,
    project.title,
    project.description,
    `Tech: ${project.tech.join(", ")}`,
    `Repository: ${project.repo}`,
    "",
    line,
    "CERTIFICATIONS",
    line,
    ...certifications.map((c) => `${c.title} — ${c.org} (${c.status})`),
    "",
    line,
    "LEADERSHIP & ACHIEVEMENTS",
    line,
    ...achievements.flatMap((a) => [
      `${a.title} — ${a.org}`,
      ...a.points.map((p) => `  • ${p}`),
      "",
    ]),
  ];

  const blob = new Blob([parts.join("\n")], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "Shahul-Hameed-S-Resume.txt";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}
