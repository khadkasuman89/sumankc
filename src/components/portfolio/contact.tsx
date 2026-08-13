import { useState } from "react";
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Music2 } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SectionHeading } from "./section-heading";
import { useI18n } from "@/lib/i18n";

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/er.sumankhadka", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/Er.sumankhadka", label: "Instagram" },
  { icon: Music2, href: "https://www.tiktok.com/@er.sumankhadka", label: "TikTok" },
];

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const { t } = useI18n();
  const c = t.contact;

  const schema = z.object({
    name: z.string().trim().min(1, c.errors.name).max(100),
    email: z.string().trim().email(c.errors.email).max(255),
    subject: z.string().trim().min(1, c.errors.subject).max(150),
    message: z.string().trim().min(5, c.errors.message).max(1000),
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse(Object.fromEntries(fd.entries()));
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? c.errors.generic);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success(c.success);
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 700);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-gradient-subtle">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={c.eyebrow} title={c.title} description={c.description} />

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Mail, label: c.email, value: "khadkasuman89@gmail.com", href: "mailto:khadkasuman89@gmail.com" },
              { icon: Mail, label: c.officialEmail, value: "suman.khadka1@nepal.gov.np", href: "mailto:suman.khadka1@nepal.gov.np" },
              { icon: Phone, label: c.phone, value: "+977 9818486399", href: "tel:+9779818486399" },
              { icon: MapPin, label: c.location, value: c.locationValue, href: "https://maps.google.com/?q=Itahari+Sunsari+Nepal" },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-start gap-4 border-t border-border bg-card p-5 transition-all hover:-translate-y-0.5"
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
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-card text-muted-foreground shadow-card transition-all hover:-translate-y-0.5 hover:text-primary hover:shadow-elegant"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <div className="overflow-hidden border border-border bg-card shadow-card">
              <iframe
                title={c.mapTitle}
                src="https://www.google.com/maps?q=Itahari,+Sunsari,+Nepal&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0"
              />
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="border border-border bg-card p-6 shadow-card md:p-8 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">{c.name}</Label>
                <Input id="name" name="name" placeholder={c.namePlaceholder} className="mt-1.5" maxLength={100} />
              </div>
              <div>
                <Label htmlFor="email">{c.email}</Label>
                <Input id="email" name="email" type="email" placeholder={c.emailPlaceholder} className="mt-1.5" maxLength={255} />
              </div>
            </div>
            <div className="mt-4">
              <Label htmlFor="subject">{c.subject}</Label>
              <Input id="subject" name="subject" placeholder={c.subjectPlaceholder} className="mt-1.5" maxLength={150} />
            </div>
            <div className="mt-4">
              <Label htmlFor="message">{c.message}</Label>
              <Textarea
                id="message"
                name="message"
                placeholder={c.messagePlaceholder}
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
              <Send className="h-4 w-4" /> {submitting ? c.sending : c.send}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
