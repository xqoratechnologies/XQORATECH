import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, ArrowRight } from "lucide-react";
import { XLogo } from "@/components/ui/XLogo";
import { useState } from "react";
import { toast } from "sonner";

export function SiteFooter() {
  const [email, setEmail] = useState("");

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    toast.success("Subscribed. We'll be in touch.");
    setEmail("");
  };

  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 font-display font-bold">X</span>
              <span className="font-display font-bold text-lg tracking-tight">
                XQORA<span className="text-teal">.</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70 max-w-sm">
              XQORA Technologies delivers enterprise-grade software, AI automation, and cloud infrastructure that solves real business problems.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/company/xqora-technologies/", label: "LinkedIn" },
                { Icon: XLogo, href: "https://x.com/XQORAtech", label: "X (Twitter)" },
                { Icon: Instagram, href: "https://www.instagram.com/xqoratechnologies/", label: "Instagram" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-md bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Company"
            links={[
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/careers", label: "Careers" },
              { to: "/contact", label: "Contact" },
            ]}
          />
          <FooterCol
            title="Resources"
            links={[
              { to: "/why-xqora", label: "Why XQORA" },
              { to: "/services", label: "Technology Stack" },
              { to: "/contact", label: "FAQ" },
              { to: "/contact", label: "Support" },
            ]}
          />

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-white/60">Newsletter</h4>
            <p className="mt-4 text-sm text-white/70">
              Insights on software, AI, and cloud — occasional, never noisy.
            </p>
            <form onSubmit={onSubscribe} className="mt-4 flex overflow-hidden rounded-lg border border-white/15 bg-white/5">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 inline-flex items-center gap-1 bg-brand px-3 text-sm font-medium text-brand-foreground hover:bg-brand/90 transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/60">© 2026 XQORA Technologies. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/60">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-white/60">{title}</h4>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-sm text-white/80 transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
