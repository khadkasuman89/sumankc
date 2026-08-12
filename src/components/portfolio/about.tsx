import { MapPin, Mail, Heart, Building2 } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { useI18n } from "@/lib/i18n";

export function About() {
  const { t } = useI18n();
  const a = t.about;
  const info = [
    { icon: MapPin, label: a.info.home.label, value: a.info.home.value },
    { icon: Building2, label: a.info.position.label, value: a.info.position.value },
    { icon: Mail, label: a.info.email.label, value: "khadkasuman89@gmail.com" },
    { icon: Mail, label: a.info.officialEmail.label, value: "suman.khadka1@nepal.gov.np" },
    { icon: Heart, label: a.info.spouse.label, value: a.info.spouse.value },
  ];

  return (
    <section id="about" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={a.eyebrow} title={a.title} />

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              <span className="font-semibold text-foreground">{a.p1a}</span> {a.p1b}{" "}
              <span className="font-semibold text-foreground">{a.p1c}</span>
              {a.p1d}
            </p>
            <p>{a.p2}</p>
            <p>
              {a.p3a} <span className="font-semibold text-foreground">{a.p3b}</span>.
            </p>
          </div>

          <div className="lg:col-span-2 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {info.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-3 border-t border-border py-4"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {label}
                  </div>
                  <div className="truncate text-sm font-semibold">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
