import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function CtaBand() {
  return (
    <div className="container-page">
      <Reveal className="relative overflow-hidden rounded-3xl bg-navy px-8 py-14 lg:px-16 lg:py-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 90% at 100% 0%, rgba(37,99,235,0.45), rgba(15,23,42,0) 70%), radial-gradient(50% 70% at 0% 100%, rgba(13,148,136,0.35), rgba(15,23,42,0) 70%)",
          }}
          aria-hidden
        />
        <div className="relative grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div>
            <h3 className="font-display text-3xl lg:text-[38px] font-bold leading-tight text-white">
              Ready to build something dependable?
            </h3>
            <p className="mt-4 text-white/80 text-lg max-w-2xl">
              Tell us about your project and we'll respond within one business day with a clear plan.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button asChild size="lg" className="group h-12 rounded-lg bg-white text-navy hover:bg-white/90 transition-transform hover:scale-[1.02]">
              <Link to="/contact">
                Get in Touch <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 rounded-lg border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white hover:border-white/40">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
