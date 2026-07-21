const TECHS = [
  "React", "Next.js", "Node.js", "Python", "Java",
  "Docker", "AWS", "PostgreSQL", "Prisma", "GitHub",
];

export function TrustLogos() {
  return (
    <div className="border-y border-border bg-surface">
      <div className="container-page py-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Trusted Technologies We Build With
        </p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-x-8 gap-y-6 items-center">
          {TECHS.map((t) => (
            <div
              key={t}
              className="text-center text-sm font-semibold tracking-tight text-muted-foreground/70 hover:text-foreground transition-colors"
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
