import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { TrustLogos } from "@/components/site/TrustLogos";
import { Section, SectionHeading } from "@/components/site/Section";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { WhyChoose } from "@/components/site/WhyChoose";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { Industries } from "@/components/site/Industries";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustLogos />

      <Section id="services">
        <SectionHeading
          eyebrow="What We Do"
          title="Services built for enterprise outcomes"
          description="Six focused practices covering the full lifecycle — from idea to production and beyond."
        />
        <div className="mt-14">
          <ServicesGrid />
        </div>
      </Section>

      <Section surface>
        <WhyChoose />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="How We Work"
          title="A proven delivery process"
          description="A structured, transparent approach that keeps every engagement predictable and on track."
        />
        <ProcessTimeline />
      </Section>

      <Section surface>
        <SectionHeading
          eyebrow="Industries"
          title="Industries we serve"
          description="Trusted by teams across regulated and fast-moving sectors."
        />
        <div className="mt-14">
          <Industries />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Testimonials"
          title="What our clients say"
        />
        <div className="mt-14">
          <Testimonials />
        </div>
      </Section>

      <div className="pb-24">
        <CtaBand />
      </div>
    </>
  );
}
