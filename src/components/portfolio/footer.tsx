import { HardHat } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary text-primary-foreground shadow-elegant">
            <HardHat className="h-5 w-5" />
          </span>
          <div>
            <div className="text-sm font-bold">{t.footer.name}</div>
            <div className="text-xs text-muted-foreground">{t.footer.tagline}</div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {t.footer.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
