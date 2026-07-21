import { Link } from "@tanstack/react-router";
import {
  Code2, BrainCircuit, Cloud, ShieldCheck, ClipboardList, TrendingUp, ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";

export const SERVICES: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Custom web applications, dashboards, SaaS platforms, and enterprise software built for scale.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    description: "Practical AI solutions, workflow automation, intelligent assistants, and process optimization.",
  },
  {
    icon: Cloud,
    title: "Cloud Support Engineering",
    description: "Cloud deployment, infrastructure management, DevOps, scalability, and observability.",
  },
  {
    icon: ShieldCheck,
    title: "QA & Technical Support",
    description: "Software testing, debugging, maintenance, issue resolution, and customer support.",
  },
  {
    icon: ClipboardList,
    title: "Project Coordination",
    description: "Project planning, agile execution, client communication, and dependable delivery management.",
  },
  {
    icon: TrendingUp,
    title: "Business Development",
    description: "Technology consulting, digital strategy, client acquisition, and sustainable growth.",
  },
];

export function ServicesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((s, i) => (
        <Reveal key={s.title} as="article" delay={i * 80}
          className="group flex flex-col rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] hover:border-brand/20"
        >
          <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-brand-foreground group-hover:scale-105">
            <s.icon className="h-6 w-6" strokeWidth={1.75} />
          </div>
          <h3 className="text-xl lg:text-2xl font-semibold text-foreground">{s.title}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{s.description}</p>
          <Link
            to="/contact"
            search={{ service: s.title }}
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand/80"
          >
            Request Service <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
