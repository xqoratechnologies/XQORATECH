import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import aboutImg from "@/assets/about.jpg";
import { Target, Eye, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — XQORA Technologies" },
      { name: "description", content: "XQORA Technologies is a global software consultancy delivering AI, cloud, and enterprise engineering to organizations that value reliability." },
      { property: "og:title", content: "About XQORA Technologies" },
      { property: "og:description", content: "Our mission, vision, values, and the team building intelligent software for modern enterprises." },
    ],
  }),
  component: AboutPage,
});

const STATS = [
  { k: "120+", v: "Projects Delivered" },
  { k: "60+", v: "Clients Served" },
  { k: "30+", v: "Technologies" },
  { k: "24/7", v: "Support Availability" },
];

const PILLARS = [
  { Icon: Target, title: "Mission", body: "Help organizations solve real business problems through thoughtful engineering, automation, and dependable delivery." },
  { Icon: Eye, title: "Vision", body: "Be the technology partner enterprises trust for their most important digital initiatives." },
  { Icon: Sparkles, title: "Values", body: "Craft, integrity, and long-term partnership — in every line of code and every conversation." },
];

const LEADERSHIP = [
  { name: "Manas Mhatre", role: "Founder & CEO", img: "/Manas Mhatre - Founder & CEO.jpeg" },
  { name: "Shravani Gharat", role: "HR", img: "/Shravani Ghanshyam Gharat - HR.jpeg" },
  { name: "Nikhil Raj", role: "COO", img: "/Nikhil Raj - COO.jpeg" },
  { name: "Tanish Jangale", role: "CMO", img: "/Tanish Jangale - CMO.jpeg" },
];

const INTERNS = [
  { name: "Agam Tyagi", role: "DevOps Intern", img: "/Agam Tyagi - DevOps intern.jpeg" },
  { name: "Anshu Panwar", role: "AI Automation Intern", img: "/Anshu Panwar - AI Automation Intern.jpeg" },
  { name: "Bhagya Lakshmi", role: "Software QA Intern", img: "/BHAGYA LAKSHMI - Software Quality Intern (QA).jpeg" },
  { name: "Hetvi Kataria", role: "Cloud Eng Intern", img: "/Hetvi Kataria - Cloud Engineering Intern.jpeg" },
  { name: "Shivprakash Mishra", role: "Software Dev Intern", img: "/Shivprakash Mishra - Software Developer Intern.jpeg" },
];

function AboutPage() {
  return (
    <>
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="rounded-3xl border border-border bg-surface p-4 sm:p-6 shadow-[var(--shadow-card)]">
            <img src={aboutImg} alt="XQORA team collaborating" width={1200} height={1000} loading="lazy" className="w-full h-auto rounded-2xl" />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">About XQORA</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.05] tracking-tight text-foreground">
              A modern technology consultancy built on trust.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              XQORA Technologies is a full-service software company partnering with startups and enterprises to design, build, and operate mission-critical systems. We combine deep engineering with disciplined delivery — no hype, no shortcuts.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Our multidisciplinary teams work across product, cloud, AI, and quality — giving clients a single partner for the entire lifecycle.
            </p>
          </div>
        </div>
      </Section>

      <Section surface>
        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-brand/10 text-brand">
                <p.Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Our Team" title="Meet the Minds Behind XQORA" />
        
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LEADERSHIP.map((person) => (
            <div 
              key={person.name} 
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={person.img} 
                  alt={person.name} 
                  loading="lazy" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-foreground">{person.name}</h3>
                <p className="mt-1 text-sm font-semibold text-brand uppercase tracking-wider">{person.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-foreground mb-10">Our Rising Stars</h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {INTERNS.map((person) => (
              <div 
                key={person.name} 
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={person.img} 
                    alt={person.name} 
                    loading="lazy" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-[15px] font-bold text-foreground leading-snug">{person.name}</h3>
                  <p className="mt-1.5 text-[11px] font-semibold text-brand uppercase tracking-wider">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="By the numbers" title="Impact across our engagements" />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.v} className="rounded-2xl border border-border bg-card p-8 text-center shadow-[var(--shadow-card)]">
              <div className="text-4xl lg:text-5xl font-display font-bold tracking-tight text-navy dark:text-brand">{s.k}</div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </Section>

      <div className="pb-24">
        <CtaBand />
      </div>
    </>
  );
}
