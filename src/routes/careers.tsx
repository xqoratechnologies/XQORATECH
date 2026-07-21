import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import { Briefcase, MapPin, Clock, Upload, ArrowRight } from "lucide-react";
import { ApplicationForm } from "@/components/site/ApplicationForm";
import careersImg from "@/assets/careers.jpg";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — XQORA Technologies" },
      { name: "description", content: "Join XQORA Technologies. Open internship roles across engineering, cloud, QA, project management, and business development." },
      { property: "og:title", content: "Careers at XQORA Technologies" },
      { property: "og:description", content: "We're always looking for passionate innovators to join our growing team." },
    ],
  }),
  component: CareersPage,
});

const OPENINGS = [
  { title: "Full Stack Developer Intern", type: "Internship", location: "Remote", exp: "0–1 yr" },
  { title: "AI & Automation Developer Intern", type: "Internship", location: "Remote", exp: "0–1 yr" },
  { title: "Cloud Support Engineer Intern", type: "Internship", location: "Remote", exp: "0–1 yr" },
  { title: "Project Coordinator Intern", type: "Internship", location: "Hybrid", exp: "0–1 yr" },
  { title: "Business Development Executive Intern", type: "Internship", location: "Hybrid", exp: "0–1 yr" },
  { title: "QA & Technical Support Engineer Intern", type: "Internship", location: "Remote", exp: "0–1 yr" },
];

function CareersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string>("");

  const handleApply = (roleTitle: string = "") => {
    setSelectedRole(roleTitle);
    setIsModalOpen(true);
  };

  return (
    <>
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Careers</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.05] tracking-tight text-foreground">
              Join Our Team
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl">
              We're always looking for passionate innovators — engineers, designers, and thinkers who care about craft and outcomes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 rounded-lg bg-brand text-brand-foreground hover:bg-brand/90">
                <a href="#openings">See Openings <ArrowRight className="ml-1.5 h-4 w-4" /></a>
              </Button>
              <Button onClick={() => handleApply()} size="lg" variant="outline" className="h-12 rounded-lg border-border bg-card">
                <Upload className="mr-1.5 h-4 w-4" /> Upload Resume
              </Button>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-surface p-4 sm:p-6 shadow-[var(--shadow-card)]">
            <img src={careersImg} alt="XQORA team culture" width={1200} height={900} loading="lazy" className="w-full h-auto rounded-2xl" />
          </div>
        </div>
      </Section>

      <Section id="openings" surface>
        <SectionHeading eyebrow="Open Roles" title="Current Openings" />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {OPENINGS.map((o) => (
            <article
              key={o.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand/10 text-brand">
                <Briefcase className="h-4 w-4" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{o.title}</h3>
              <dl className="mt-3 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><Briefcase className="h-3.5 w-3.5" /> {o.type}</div>
                <div className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> {o.location}</div>
                <div className="flex items-center gap-2"><Clock className="h-3.5 w-3.5" /> {o.exp}</div>
              </dl>
              <Button
                onClick={() => handleApply(o.title)}
                className="mt-6 rounded-lg bg-navy text-navy-foreground hover:bg-navy/90"
              >
                Apply
              </Button>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-dashed border-border bg-card p-8 text-center">
          <p className="text-base text-muted-foreground">
            Don't see a fit? We'd still love to hear from you.
          </p>
          <div className="mt-4">
            <Button onClick={() => handleApply()} variant="outline" className="rounded-lg">
              <Upload className="mr-1.5 h-4 w-4" /> Upload Resume
            </Button>
          </div>
        </div>
      </Section>

      <ApplicationForm 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen} 
        defaultRole={selectedRole} 
      />
    </>
  );
}
