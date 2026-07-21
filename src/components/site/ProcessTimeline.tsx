import {
  Search, ClipboardList, PenTool, Code2, TestTube2, Rocket, LifeBuoy,
  type LucideIcon,
} from "lucide-react";

const STEPS: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Search, title: "Requirement Analysis", desc: "Discovery workshops to define scope and success metrics." },
  { icon: ClipboardList, title: "Planning", desc: "Architecture, roadmap, and delivery milestones." },
  { icon: PenTool, title: "Design", desc: "User-centered interfaces and system design." },
  { icon: Code2, title: "Development", desc: "Modern engineering with continuous integration." },
  { icon: TestTube2, title: "Testing", desc: "Quality assurance across every release." },
  { icon: Rocket, title: "Deployment", desc: "Zero-downtime rollout to cloud infrastructure." },
  { icon: LifeBuoy, title: "Support", desc: "Ongoing maintenance and enhancement." },
];

export function ProcessTimeline() {
  return (
    <div className="mt-14">
      {/* Desktop horizontal */}
      <div className="hidden lg:block">
        <div className="relative">
          <div className="absolute left-0 right-0 top-6 h-px bg-border" aria-hidden />
          <ol className="relative grid grid-cols-7 gap-4">
            {STEPS.map((s, i) => (
              <li key={s.title} className="flex flex-col items-center text-center">
                <div className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-border bg-card text-brand shadow-[var(--shadow-card)]">
                  <s.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Step {i + 1}
                </div>
                <h4 className="mt-1 text-sm font-semibold text-foreground">{s.title}</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Mobile vertical */}
      <ol className="lg:hidden relative border-l border-border pl-6 space-y-8">
        {STEPS.map((s, i) => (
          <li key={s.title} className="relative">
            <div className="absolute -left-[34px] grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-brand shadow-[var(--shadow-card)]">
              <s.icon className="h-4 w-4" strokeWidth={1.75} />
            </div>
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Step {i + 1}</div>
            <h4 className="mt-1 text-base font-semibold text-foreground">{s.title}</h4>
            <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
