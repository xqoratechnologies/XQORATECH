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
        <SectionHeading eyebrow="Leadership" title="Meet the Founder" />
        <div className="mt-14 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/3 shrink-0">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
              <img src="/manas-mhatre.jpeg" alt="Manas Chandrakant Mhatre" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-3xl font-bold text-foreground tracking-tight">MANAS CHANDRAKANT MHATRE</h3>
            <p className="mt-2 text-brand font-semibold tracking-wider text-sm uppercase">CEO AND FOUNDER OF XQORA</p>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Manas brings a wealth of experience in software engineering, enterprise architecture, and technological innovation. His vision for XQORA Technologies is deeply rooted in delivering uncompromising quality, deep technical expertise, and establishing true partnerships with clients.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Under his leadership, XQORA is rapidly establishing itself as a trusted partner for organizations navigating complex digital landscapes, prioritizing craft, reliability, and long-term value creation in every engagement.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="By the numbers" title="Impact across our engagements" />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.v} className="rounded-2xl border border-border bg-card p-8 text-center shadow-[var(--shadow-card)]">
              <div className="text-4xl lg:text-5xl font-display font-bold tracking-tight text-navy">{s.k}</div>
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
