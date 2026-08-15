import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface to-background">
      <div 
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-40 dark:opacity-15" 
        style={{
          maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
        }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <defs>
            <filter id="flag-blur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="40" />
            </filter>
          </defs>
          {/* Saffron */}
          <path fill="#FF9933" filter="url(#flag-blur)">
            <animate
              attributeName="d"
              values="M0,0 L333,0 C433,250 233,250 333,500 C433,750 233,750 333,1000 L0,1000 Z; M0,0 L333,0 C233,250 433,250 333,500 C233,750 433,750 333,1000 L0,1000 Z; M0,0 L333,0 C433,250 233,250 333,500 C433,750 233,750 333,1000 L0,1000 Z"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
          {/* White */}
          <path fill="#FFFFFF" filter="url(#flag-blur)">
            <animate
              attributeName="d"
              values="M333,0 C433,250 233,250 333,500 C433,750 233,750 333,1000 L666,1000 C566,750 766,750 666,500 C566,250 766,250 666,0 Z; M333,0 C233,250 433,250 333,500 C233,750 433,750 333,1000 L666,1000 C766,750 566,750 666,500 C766,250 566,250 666,0 Z; M333,0 C433,250 233,250 333,500 C433,750 233,750 333,1000 L666,1000 C566,750 766,750 666,500 C566,250 766,250 666,0 Z"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
          {/* Green */}
          <path fill="#138808" filter="url(#flag-blur)">
            <animate
              attributeName="d"
              values="M666,0 C766,250 566,250 666,500 C766,750 566,750 666,1000 L1000,1000 L1000,0 Z; M666,0 C566,250 766,250 666,500 C566,750 766,750 666,1000 L1000,1000 L1000,0 Z; M666,0 C766,250 566,250 666,500 C766,750 566,750 666,1000 L1000,1000 L1000,0 Z"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
          {/* Ashoka Chakra */}
          <g transform="translate(500, 500)">
            <circle r="80" stroke="#000080" strokeWidth="6" fill="none" />
            <circle r="15" fill="#000080" />
            {Array.from({ length: 24 }).map((_, i) => (
              <line
                key={i}
                x1="0"
                y1="0"
                x2="0"
                y2="-80"
                stroke="#000080"
                strokeWidth="3"
                transform={`rotate(${i * 15})`}
              />
            ))}
          </g>
        </svg>
      </div>
      <div className="container-page relative pt-16 lg:pt-24 pb-20 lg:pb-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-[var(--shadow-card)]">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              Enterprise Software Consulting
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[64px] font-bold leading-[1.05] tracking-tight text-foreground">
              Building Intelligent Software That Solves Real Business Problems.
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
              XQORA Technologies delivers enterprise-grade software, AI automation, cloud infrastructure, QA services, and digital transformation solutions — engineered for reliability and scale.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="h-12 rounded-lg bg-brand px-6 text-base font-medium text-brand-foreground hover:bg-brand/90">
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-lg border-border bg-card px-6 text-base font-medium text-foreground hover:bg-surface"
              >
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { Icon: Award, k: "Highly experienced", v: "Team" },
                { Icon: ShieldCheck, k: "SOC-ready", v: "Secure by design" },
                { Icon: Clock, k: "24/7", v: "Support coverage" },
              ].map(({ Icon, k, v }) => (
                <div key={k} className="flex items-start gap-2">
                  <Icon className="mt-0.5 h-4 w-4 text-brand" strokeWidth={1.75} />
                  <div>
                    <dt className="text-sm font-semibold text-foreground">{k}</dt>
                    <dd className="text-xs text-muted-foreground">{v}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl border border-border bg-card p-4 sm:p-6 shadow-[var(--shadow-soft)]">
              <img
                src={heroImg}
                alt="Software team collaborating with dashboards, cloud, and analytics"
                width={1400}
                height={1100}
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 hidden sm:flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-[var(--shadow-card)]">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-teal/10 text-teal">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Uptime last quarter</div>
                <div className="text-sm font-semibold text-foreground">99.98%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
