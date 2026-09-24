import { MapPin, Mail, Building2 } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { useI18n } from "@/lib/i18n";

export function About() {
  const { t } = useI18n();
  const a = t.about;
  const info = [
    { icon: MapPin, label: a.info.home.label, value: a.info.home.value },
    { icon: Building2, label: a.info.position.label, value: a.info.position.value },
    { icon: Mail, label: a.info.email.label, value: "er.sumankhadka@gmail.com" },
    { icon: Mail, label: a.info.officialEmail.label, value: "suman.khadka1@nepal.gov.np" },
  ];

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={a.eyebrow} title={a.title} align="left" />
        <div className="grid gap-12 lg:grid-cols-5">
          <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-3">
            <p>
              <span className="font-semibold text-foreground">{a.p1a}</span> {a.p1b}{" "}
              <span className="font-semibold text-foreground">{a.p1c}</span>
              {a.p1d}
            </p>
            <p>{a.p2}</p>
            <p>{a.p3a}</p>
          </Reveal>
          <div className="grid gap-1 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
            {info.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3 border-t border-border py-4">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div className="min-w-0">
                  <div className="technical-label text-muted-foreground">{label}</div>
                  <div className="break-words text-sm font-semibold">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="technical-label text-steel">{a.focusEyebrow}</div>
          <div className="mt-5 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {a.focus.map((f, i) => (
              <div key={f.title} className="bg-background p-6">
                <div className="font-mono text-xs text-primary">0{i + 1}</div>
                <h3 className="mt-3 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.items}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
