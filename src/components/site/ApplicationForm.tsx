import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { submitApplicationFn } from "@/server/actions/application";
import { Loader2, UploadCloud } from "lucide-react";

// Maximum file size: 5MB
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(5, "Please enter your phone number").max(40),
  role: z.string().min(1, "Role is required"),
  resume: z
    .any()
    .refine((files) => files?.length == 1, "Resume is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
      "Only .pdf, .doc, and .docx formats are supported."
    ),
});

type FormValues = z.infer<typeof schema>;

interface ApplicationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultRole?: string;
}

export function ApplicationForm({ open, onOpenChange, defaultRole }: ApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      role: defaultRole || "General Application",
      resume: undefined,
    },
  });

  // Update default role if it changes
  useEffect(() => {
    form.setValue("role", defaultRole || "General Application");
  }, [defaultRole, form]);

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("role", values.role);
      formData.append("resume", values.resume[0]);

      await submitApplicationFn({ data: formData });
      
      toast.success("Application submitted successfully! We will be in touch.");
      form.reset();
      onOpenChange(false);
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl">Apply for {defaultRole || "General Application"}</DialogTitle>
          <DialogDescription>
            Fill out the form below and attach your resume. We'll get back to you soon.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <Field label="Full Name" error={form.formState.errors.name?.message}>
            <Input {...form.register("name")} placeholder="Jane Doe" className="h-11 rounded-lg" />
          </Field>
          
          <Field label="Email" error={form.formState.errors.email?.message}>
            <Input {...form.register("email")} type="email" placeholder="jane@example.com" className="h-11 rounded-lg" />
          </Field>
          
          <Field label="Phone Number" error={form.formState.errors.phone?.message}>
            <Input {...form.register("phone")} placeholder="+1 555 0100" className="h-11 rounded-lg" />
          </Field>

          {/* Hidden input for role, as it's passed via props */}
          <input type="hidden" {...form.register("role")} />

          <Field label="Resume (PDF or Word, max 5MB)" error={form.formState.errors.resume?.message as string}>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-card hover:bg-surface border-border transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <UploadCloud className="w-8 h-8 mb-3 text-muted-foreground" />
                  <p className="mb-2 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {form.watch("resume")?.[0]?.name || "No file selected"}
                  </p>
                </div>
                <input 
                  type="file" 
                  className="hidden" 
                  accept=".pdf,.doc,.docx"
                  {...form.register("resume")}
                />
              </label>
            </div>
          </Field>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 w-full rounded-lg bg-brand text-brand-foreground hover:bg-brand/90 mt-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
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
