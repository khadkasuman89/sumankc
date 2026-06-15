import { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Facebook, Github, Globe } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SectionHeading } from "./section-heading";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Subject required").max(150),
  message: z.string().trim().min(5, "Message too short").max(1000),
});

const socials = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Globe, href: "https://suman-khadka.com.np", label: "Website" },
];

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse(Object.fromEntries(fd.entries()));
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Message sent — I'll get back to you soon!");
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 700);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-gradient-subtle">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something solid"
          description="Open to consulting, structural design, and research collaborations."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Mail, label: "Email", value: "er.sumankhadka@gmail.com", href: "mailto:er.sumankhadka@gmail.com" },
              { icon: Phone, label: "Phone", value: "+977 9818486399", href: "tel:+9779818486399" },
              { icon: MapPin, label: "Location", value: "Nepal", href: "#" },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elegant"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
                  <div className="truncate font-semibold">{value}</div>
                </div>
              </a>
            ))}

            <div className="flex flex-wrap gap-2 pt-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-card text-muted-foreground shadow-card transition-all hover:-translate-y-0.5 hover:text-primary hover:shadow-elegant"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 rounded-3xl border border-border bg-card p-6 shadow-card md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your full name" className="mt-1.5" maxLength={100} />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="you@example.com" className="mt-1.5" maxLength={255} />
              </div>
            </div>
            <div className="mt-4">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" name="subject" placeholder="Project inquiry" className="mt-1.5" maxLength={150} />
            </div>
            <div className="mt-4">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project…"
                rows={6}
                className="mt-1.5"
                maxLength={1000}
              />
            </div>
            <Button
              type="submit"
              disabled={submitting}
              size="lg"
              className="mt-6 w-full bg-gradient-primary shadow-elegant hover:opacity-90"
            >
              <Send className="h-4 w-4" /> {submitting ? "Sending…" : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
