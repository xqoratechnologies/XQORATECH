import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionProps {
  id?: string;
  className?: string;
  containerClassName?: string;
  surface?: boolean;
  navy?: boolean;
  children: ReactNode;
}

export function Section({ id, className, containerClassName, surface, navy, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-y",
        surface && "bg-surface",
        navy && "bg-navy text-navy-foreground",
        className,
      )}
    >
      <div className={cn("container-page", containerClassName)}>{children}</div>
    </section>
  );
}

interface HeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  invert?: boolean;
}

export function SectionHeading({ eyebrow, title, description, align = "center", className, invert }: HeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center mx-auto max-w-3xl" : "items-start text-left max-w-2xl",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.16em]",
            invert ? "text-teal" : "text-brand",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] font-bold",
          invert ? "text-navy-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed",
            invert ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
