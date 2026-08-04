import { useState } from "react";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Check, Copy, Github, Linkedin, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { profile } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const EMAILJS_PUBLIC_KEY = "_Zlm6qZPURdX06X3k";
const EMAILJS_SERVICE_ID = "service_02e9dfd";
const EMAILJS_TEMPLATE_ID = "template_tsrdsgv";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address").max(255, "Email is too long"),
  subject: z.string().trim().min(3, "Add a short subject").max(120, "Subject is too long"),
  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters")
    .max(1000, "Message must be under 1000 characters"),
});

type Errors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

const details = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.location)}`,
  },
  { icon: Linkedin, label: "LinkedIn", value: "shahul-hameed-s", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: "shahulhameedS22", href: profile.github },
];

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      toast.success("Copied to clipboard");
      setTimeout(() => setCopied(null), 1800);
    } catch {
      toast.error("Couldn't copy — please copy manually");
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formEl = event.currentTarget;
    const form = new FormData(formEl);
    const parsed = contactSchema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      subject: form.get("subject"),
      message: form.get("message"),
    });

    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    const { name, email, subject, message } = parsed.data;
    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          reply_to: email,
          subject,
          message,
          to_email: profile.email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setSent(true);
      toast.success("Message sent!", {
        description: "Thanks for reaching out — I'll get back to you soon.",
      });
      formEl.reset();
      setTimeout(() => setSent(false), 4000);
    } catch {
      toast.error("Couldn't send your message", {
        description: "Please try again or email me directly.",
      });
    } finally {
      setSending(false);
    }
  };


  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div aria-hidden className="hero-glow absolute inset-x-0 bottom-0 h-[460px] opacity-70" />
      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let&apos;s <span className="gradient-text">connect</span>
            </>
          }
          description="Open to opportunities in networking, virtualization and IT infrastructure. Drop a message and I'll get back to you."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-4">
            <div className="glass-card rounded-3xl p-6 sm:p-7">
              <ul className="grid gap-3">
                {details.map((d) => (
                  <li
                    key={d.label}
                    className="flex items-center gap-3 rounded-2xl border border-border/60 bg-secondary/40 p-3"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/25">
                      <d.icon className="size-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">{d.label}</p>
                      {d.href ? (
                        <a
                          href={d.href}
                          target={d.href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer noopener"
                          className="block truncate text-sm text-foreground hover:text-primary"
                        >
                          {d.value}
                        </a>
                      ) : (
                        <p className="truncate text-sm">{d.value}</p>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => copy(d.href?.startsWith("http") ? d.href : d.value)}
                      aria-label={`Copy ${d.label}`}
                      className="ml-auto grid size-8 shrink-0 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                    >
                      {copied === (d.href?.startsWith("http") ? d.href : d.value) ? (
                        <Check className="size-4 text-primary" />
                      ) : (
                        <Copy className="size-4" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>


          <Reveal delay={120}>
            <form onSubmit={onSubmit} noValidate className="glass-card rounded-3xl p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your name" maxLength={100} />
                  {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    maxLength={255}
                  />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>

              <div className="mt-4 grid gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="What is this about?"
                  maxLength={120}
                />
                {errors.subject && <p className="text-xs text-destructive">{errors.subject}</p>}
              </div>

              <div className="mt-4 grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me a little about the opportunity…"
                  maxLength={1000}
                />
                {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
              </div>

              <Button type="submit" variant="hero" size="lg" className="mt-6 w-full">
                {sent ? (
                  <>
                    <Check className="animate-in zoom-in" /> Message sent
                  </>
                ) : (
                  <>
                    <Send /> Send Message
                  </>
                )}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
