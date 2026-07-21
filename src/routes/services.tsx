import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { TechStackGrid } from "@/components/site/TechStackGrid";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — XQORA Technologies" },
      { name: "description", content: "Full stack development, AI & automation, cloud engineering, QA, project coordination, and business development." },
      { property: "og:title", content: "Services — XQORA Technologies" },
      { property: "og:description", content: "Six focused practices covering the full lifecycle — from idea to production and beyond." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="Services"
          title="Everything you need to build, ship, and operate."
          description="From product engineering to cloud operations, our teams cover the full software lifecycle with a single accountable partner."
        />
        <div className="mt-14">
          <ServicesGrid />
        </div>
      </Section>

      <Section surface>
        <SectionHeading eyebrow="Technology Stack" title="Modern, proven, well-supported" description="We choose durable tools that our clients' teams can own for years." />
        <div className="mt-14">
          <TechStackGrid />
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Process" title="From discovery to long-term support" />
        <ProcessTimeline />
      </Section>

      <div className="pb-24">
        <CtaBand />
      </div>
    </>
  );
}
