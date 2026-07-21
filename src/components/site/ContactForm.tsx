import { useForm } from "react-hook-form";
import { useSearch } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  subject: z.string().trim().min(2, "Subject is required").max(140),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(10, "Please share a bit more (10+ characters)").max(2000),
  privacy: z.literal(true, { message: "Please accept the privacy policy" }),
});

type FormValues = z.infer<typeof schema>;

const SERVICES = [
  "Full Stack Development",
  "AI & Automation",
  "Cloud Support Engineering",
  "QA & Technical Support",
  "Project Coordination",
  "Business Development",
  "Other",
];

export function ContactForm() {
  const search: any = useSearch({ strict: false });

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "", email: "", company: "", phone: "", subject: "", service: search.service || "", message: "",
      privacy: false as unknown as true,
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      const response = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT || "", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast.success("Thanks — we'll get back to you within one business day.");
        form.reset();
      } else {
        toast.error("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      toast.error("Oops! There was a problem submitting your form.");
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" error={form.formState.errors.name?.message}>
          <Input {...form.register("name")} placeholder="Jane Cooper" className="h-11 rounded-lg" />
        </Field>
        <Field label="Email" error={form.formState.errors.email?.message}>
          <Input {...form.register("email")} type="email" placeholder="jane@company.com" className="h-11 rounded-lg" />
        </Field>
        <Field label="Company Name">
          <Input {...form.register("company")} placeholder="Acme Inc." className="h-11 rounded-lg" />
        </Field>
        <Field label="Phone Number">
          <Input {...form.register("phone")} placeholder="+1 555 0100" className="h-11 rounded-lg" />
        </Field>
      </div>

      <Field label="Subject" error={form.formState.errors.subject?.message}>
        <Input {...form.register("subject")} placeholder="How can we help?" className="h-11 rounded-lg" />
      </Field>

      <Field label="Service Interested In" error={form.formState.errors.service?.message}>
        <Select value={form.watch("service")} onValueChange={(v) => form.setValue("service", v, { shouldValidate: true })}>
          <SelectTrigger className="h-11 rounded-lg">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {SERVICES.map((s) => (
              <SelectItem key={s} value={s}>{s}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>

      <Field label="Message" error={form.formState.errors.message?.message}>
        <Textarea {...form.register("message")} rows={5} placeholder="Tell us about your project, timeline, and goals." className="rounded-lg" />
      </Field>

      <div className="flex items-start gap-3">
        <Checkbox
          id="privacy"
          checked={!!form.watch("privacy")}
          onCheckedChange={(v) => form.setValue("privacy", (v === true) as true, { shouldValidate: true })}
          className="mt-0.5"
        />
        <Label htmlFor="privacy" className="text-sm font-normal text-muted-foreground leading-relaxed">
          I agree to the privacy policy and consent to being contacted about my inquiry.
        </Label>
      </div>
      {form.formState.errors.privacy?.message && (
        <p className="text-sm text-destructive">{form.formState.errors.privacy.message}</p>
      )}

      <Button
        type="submit"
        disabled={form.formState.isSubmitting}
        className="h-12 w-full rounded-lg bg-brand text-brand-foreground hover:bg-brand/90 text-base font-medium"
      >
        Send Message
      </Button>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm font-medium text-foreground">{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
