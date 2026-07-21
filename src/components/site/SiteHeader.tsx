import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/why-xqora", label: "Why XQORA" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-background/85 backdrop-blur transition-shadow",
        scrolled ? "shadow-[var(--shadow-header)]" : "border-b border-transparent",
      )}
    >
      <div className="container-page flex h-16 lg:h-20 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="XQORA Technologies home">
          <img src="/logo.png" alt="XQORA Technologies" className="h-12 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="px-3 py-2 text-sm font-medium text-muted-foreground rounded-md transition-colors hover:text-foreground hover:bg-surface data-[status=active]:text-foreground data-[status=active]:bg-surface"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="rounded-lg bg-brand text-brand-foreground hover:bg-brand/90">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-surface"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-page py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="px-3 py-3 text-base font-medium text-muted-foreground rounded-md transition-colors hover:text-foreground hover:bg-surface data-[status=active]:text-foreground data-[status=active]:bg-surface"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2 rounded-lg bg-brand text-brand-foreground hover:bg-brand/90">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
