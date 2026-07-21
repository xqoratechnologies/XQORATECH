import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { ContactForm } from "@/components/site/ContactForm";
import { Faq } from "@/components/site/Faq";
import { Mail, Phone, MapPin, Clock, Linkedin } from "lucide-react";
import { XLogo } from "@/components/ui/XLogo";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { service?: string } => {
    return {
      service: search.service as string | undefined,
    };
  },
  head: () => ({
    meta: [
      { title: "Contact — XQORA Technologies" },
      { name: "description", content: "Get in touch with XQORA Technologies. Share your project brief and we'll respond within one business day." },
      { property: "og:title", content: "Contact XQORA Technologies" },
      { property: "og:description", content: "Let's build something great together. Reach out for consulting, engineering, or support." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Contact</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[52px] font-bold leading-[1.05] tracking-tight text-foreground">
              Let's build something great together.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Share a brief about your project or a question about our services. We typically respond within one business day.
            </p>

            <ul className="mt-10 space-y-5">
              <InfoRow Icon={Mail} label="Email" value="xqoratechnologies@gmail.com" />
              <InfoRow Icon={Phone} label="Phone" value="8928039598" />
              <InfoRow Icon={MapPin} label="Location" value="Uran, Navi Mumbai" />
              <InfoRow Icon={Clock} label="Business Hours" value="Mon–Fri, 9:00–18:00 (local)" />
            </ul>

            <div className="mt-10 flex items-center gap-3">
              <a href="https://www.linkedin.com/company/xqora-technologies/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground hover:border-foreground/30">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://x.com/XQORAtech" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground hover:border-foreground/30">
                <XLogo className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-[var(--shadow-soft)]">
            <ContactForm />
          </div>
        </div>
      </Section>

      <Section surface>
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
        <div className="mt-12">
          <Faq />
        </div>
      </Section>
    </>
  );
}

function InfoRow({ Icon, label, value }: { Icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <li className="flex items-start gap-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-surface text-brand">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="mt-0.5 text-base text-foreground">{value}</div>
      </div>
    </li>
  );
}
