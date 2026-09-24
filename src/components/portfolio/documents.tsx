import { FileDown, BookOpen } from "lucide-react";
import cv from "@/assets/suman-cv.pdf";
import { useI18n } from "@/lib/i18n";

export function Documents() {
  const { t } = useI18n();
  const d = t.documents;
  const items = [
    { icon: FileDown, ...d.cv, href: cv, download: true },
    { icon: BookOpen, ...d.research, href: "#research", download: false },
  ];
  return (
    <section aria-labelledby="documents-title" className="border-y border-border bg-muted/50 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="documents-title" className="technical-label text-steel">{d.title}</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {items.map(({ icon: Icon, title, sub, action, href, download }) => (
            <div key={title} className="flex flex-wrap items-center justify-between gap-4 border border-border bg-card p-6">
              <div className="flex items-center gap-4">
                <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                <div>
                  <div className="font-semibold">{title}</div>
                  <div className="text-sm text-muted-foreground">{sub}</div>
                </div>
              </div>
              <a href={href} {...(download ? { download: true } : {})} className="inline-flex min-h-11 items-center border border-foreground px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-foreground hover:text-background">
                {action}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
