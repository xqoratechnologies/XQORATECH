import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const ITEMS = [
  {
    quote:
      "XQORA rebuilt our operations platform in six months. It's faster, cleaner, and our team finally has the reporting we needed for years.",
    name: "Priya Menon",
    role: "COO, Northline Logistics",
    initials: "PM",
  },
  {
    quote:
      "They combined strong engineering with real business understanding. Every milestone was on time, every conversation was straightforward.",
    name: "Daniel Weiss",
    role: "VP Engineering, Halcyon Health",
    initials: "DW",
  },
  {
    quote:
      "From cloud migration to internal automation, XQORA has become our long-term technology partner rather than a vendor.",
    name: "Aisha Rahman",
    role: "CTO, Vertex Retail Group",
    initials: "AR",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const item = ITEMS[i];
  const prev = () => setI((v) => (v - 1 + ITEMS.length) % ITEMS.length);
  const next = () => setI((v) => (v + 1) % ITEMS.length);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-2xl border border-border bg-card p-8 lg:p-12 shadow-[var(--shadow-card)]">
        <Quote className="h-8 w-8 text-brand/40" />
        <blockquote className="mt-5 text-xl lg:text-2xl leading-relaxed font-medium text-foreground">
          "{item.quote}"
        </blockquote>
        <div className="mt-8 flex items-center gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-navy text-navy-foreground font-semibold">
            {item.initials}
          </div>
          <div>
            <div className="text-sm font-semibold text-foreground">{item.name}</div>
            <div className="text-sm text-muted-foreground">{item.role}</div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          onClick={prev}
          className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-1.5">
          {ITEMS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={
                "h-1.5 rounded-full transition-all " +
                (idx === i ? "w-6 bg-brand" : "w-1.5 bg-border hover:bg-muted-foreground/40")
              }
            />
          ))}
        </div>
        <button
          onClick={next}
          className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
