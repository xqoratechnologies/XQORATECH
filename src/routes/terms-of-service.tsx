import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service — XQORA Technologies" },
      { name: "description", content: "Terms of Service for using XQORA Technologies." },
    ],
  }),
  component: TermsOfServicePage,
});

function TermsOfServicePage() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto py-12 lg:py-24">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
          Terms of Service
        </h1>
        <p className="mt-4 text-muted-foreground">
          Last updated: July 20, 2026
        </p>

        <div className="mt-12 space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
              In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
            <p>
              XQORA Technologies provides users with access to a rich collection of resources, including various communications tools, 
              forums, consulting services, and custom software development. You understand and agree that the Service is provided "AS-IS".
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Intellectual Property Rights</h2>
            <p>
              All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, 
              and software, is the property of XQORA Technologies or its content suppliers and protected by international copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Contact Information</h2>
            <p>
              If you have any questions or concerns regarding our terms of service, please do not hesitate to contact us at:
              <br />
              <strong>Email:</strong> xqoratechnologies@gmail.com
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
}
