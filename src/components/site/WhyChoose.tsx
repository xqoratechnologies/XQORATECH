import { Check } from "lucide-react";
import whyImg from "@/assets/why.jpg";
import { Reveal } from "./Reveal";

const REASONS = [
  "Experienced Team",
  "Modern Technologies",
  "Agile Development",
  "Transparent Communication",
  "Timely Delivery",
  "Scalable Solutions",
  "Long-term Support",
];

export function WhyChoose() {
  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
      <Reveal>
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Why XQORA</span>
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.1] text-foreground">
          A partner engineered for reliability, not hype.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          We combine seasoned engineering with disciplined delivery. Every engagement is transparent, measured, and built to last.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {REASONS.map((r, i) => (
            <Reveal key={r} as="li" delay={i * 60} y={8} className="group flex items-center gap-3">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-success/10 text-success transition-transform duration-300 group-hover:scale-110">
                <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
              <span className="text-[15px] font-medium text-foreground">{r}</span>
            </Reveal>
          ))}
        </ul>
      </Reveal>
      <Reveal className="relative order-first lg:order-last" delay={120}>
        <div className="rounded-3xl border border-border bg-surface p-4 sm:p-6 shadow-[var(--shadow-card)]">
          <img
            src={whyImg}
            alt="Team reviewing project plan on a large screen"
            width={1200}
            height={1000}
            loading="lazy"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </Reveal>
    </div>
  );
}
