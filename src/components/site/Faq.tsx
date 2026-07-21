import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "What services do you provide?",
    a: "We offer full stack development, AI & automation, cloud engineering, QA & technical support, project coordination, and business development consulting.",
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines depend on scope. A focused MVP usually ships in 6–10 weeks, while enterprise platforms typically run 3–9 months with staged releases.",
  },
  {
    q: "Do you provide long-term support?",
    a: "Yes. We offer flexible support and maintenance retainers covering monitoring, incident response, feature enhancements, and technical guidance.",
  },
  {
    q: "How can we start working together?",
    a: "Share a brief via our contact form. We'll schedule a discovery call, align on outcomes, and deliver a proposal with scope, timeline, and pricing.",
  },
  {
    q: "Do you work with startups and enterprise clients?",
    a: "Both. Our processes scale from lean product teams shipping their first release to enterprise organizations modernizing critical systems.",
  },
];

export function Faq() {
  return (
    <div className="mx-auto max-w-3xl">
      <Accordion type="single" collapsible className="space-y-3">
        {FAQS.map((f, i) => (
          <AccordionItem
            key={f.q}
            value={`item-${i}`}
            className="rounded-xl border border-border bg-card px-5 shadow-[var(--shadow-card)]"
          >
            <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
