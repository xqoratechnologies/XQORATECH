import {
  HeartPulse, Landmark, GraduationCap, ShoppingBag, Building2, Truck, Factory, Rocket,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";

const INDUSTRIES: { icon: LucideIcon; label: string }[] = [
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Landmark, label: "Finance" },
  { icon: GraduationCap, label: "Education" },
  { icon: ShoppingBag, label: "Retail" },
  { icon: Building2, label: "Real Estate" },
  { icon: Truck, label: "Logistics" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Rocket, label: "Startups" },
];

export function Industries() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
      {INDUSTRIES.map((i, idx) => (
        <Reveal
          key={i.label}
          delay={idx * 60}
          className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[var(--shadow-card)]"
        >
          <div className="grid h-11 w-11 place-items-center rounded-lg bg-surface text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-brand-foreground group-hover:scale-110">
            <i.icon className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <div className="text-sm font-semibold text-foreground">{i.label}</div>
        </Reveal>
      ))}
    </div>
  );
}
