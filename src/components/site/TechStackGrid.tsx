const GROUPS = [
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "HTML", "CSS", "JavaScript"] },
  { title: "Backend", items: ["Node.js", "Express", "Java", "Python", "REST", "GraphQL"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "Prisma", "MongoDB", "Redis"] },
  { title: "Cloud & DevOps", items: ["AWS", "Docker", "GitHub", "CI/CD", "Kubernetes", "Terraform"] },
];

export function TechStackGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {GROUPS.map((g) => (
        <div key={g.title} className="rounded-2xl border border-border bg-card p-6">
          <h4 className="text-sm font-semibold uppercase tracking-widest text-brand">{g.title}</h4>
          <ul className="mt-4 flex flex-wrap gap-2">
            {g.items.map((i) => (
              <li
                key={i}
                className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm font-medium text-foreground"
              >
                {i}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
