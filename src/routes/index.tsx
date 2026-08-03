import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Journey } from "@/components/portfolio/Journey";
import { Skills } from "@/components/portfolio/Skills";
import { Work } from "@/components/portfolio/Work";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollToTop } from "@/components/portfolio/ScrollToTop";
import { Preloader } from "@/components/portfolio/Preloader";
import { profile } from "@/data/portfolio";

const title = "Shahul Hameed S — Networking & VMware ESXi Engineer";
const description =
  "Portfolio of Shahul Hameed S, Computer Science Engineer and IT Engineer Trainee at Trainocate specializing in networking, VMware ESXi, virtualization and technical support.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Shahul Hameed S, networking engineer, VMware ESXi, virtualization, CCNA, IT engineer trainee, Trainocate, portfolio",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: "IT Engineer Trainee",
          worksFor: { "@type": "Organization", name: "Trainocate" },
          email: `mailto:${profile.email}`,
          telephone: profile.phone,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Trichy",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },
          sameAs: [profile.github, profile.linkedin],
          knowsAbout: ["Computer Networking", "VMware ESXi", "Virtualization", "CCNA", "Linux"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>

        <Hero />
        <About />
        <Journey />
        <Skills />
        <Work />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
