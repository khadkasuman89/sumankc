import { Languages } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const { lang, toggle, t } = useI18n();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggle}
      aria-label={lang === "en" ? "Switch to Nepali" : "Switch to English"}
      className="gap-1.5 font-nav text-xs font-bold uppercase tracking-wider"
    >
      <Languages className="h-4 w-4" />
      {t.langLabel}
    </Button>
  );
}
