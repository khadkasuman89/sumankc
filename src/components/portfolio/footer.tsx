import cv from "@/assets/suman-cv.pdf";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#research", label: t.nav.research },
    { href: "#education", label: t.nav.education },
    { href: cv, label: "CV", download: true },
    { href: "#contact", label: t.nav.contact },
  ];
  return (
    <footer className="border-t border-border bg-navy-deep text-paper">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 lg:px-8">
        <div>
          <div className="font-display text-2xl">{t.footer.name}</div>
          <div className="mt-2 text-sm text-paper/70">{t.footer.tagline}</div>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} {...(l.download ? { download: true } : {})} className="text-sm text-paper/80 hover:text-paper">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-paper/10 py-5 text-center text-xs text-paper/60">
        © {new Date().getFullYear()} {t.footer.name}. {t.footer.rights}
      </div>
    </footer>
  );
}
