import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { WhyChoose } from "@/components/site/WhyChoose";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { CtaBand } from "@/components/site/CtaBand";
import { Sparkles, ShieldCheck, Users } from "lucide-react";

export const Route = createFileRoute("/why-xqora")({
  head: () => ({
    meta: [
      { title: "Why XQORA — Reliable Engineering Partnership" },
      { name: "description", content: "Why organizations choose XQORA: experienced engineering, transparent delivery, and long-term support." },
      { property: "og:title", content: "Why XQORA Technologies" },
      { property: "og:description", content: "A partner engineered for reliability, not hype." },
    ],
  }),
  component: WhyPage,
});

const VALUES = [
  { Icon: Sparkles, title: "Innovation", body: "We adopt technology deliberately — proven, durable, and aligned with your business." },
  { Icon: ShieldCheck, title: "Integrity", body: "Straight answers, transparent estimates, and honest reporting through every release." },
  { Icon: Users, title: "Collaboration", body: "We work as an extension of your team, not a black box you hand work to." },
];

function WhyPage() {
  return (
    <>
      <Section>
        <WhyChoose />
      </Section>

      <Section surface>
        <SectionHeading eyebrow="Our Values" title="What we hold ourselves to" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-teal/10 text-teal">
                <v.Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">{v.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Process" title="Predictable delivery, milestone by milestone" />
        <ProcessTimeline />
      </Section>

      <div className="pb-24">
        <CtaBand />
      </div>
    </>
  );
}
