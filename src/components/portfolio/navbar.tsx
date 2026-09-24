import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";
import { NepaliClock } from "./nepali-clock";
import { SiteSearch } from "./site-search";
import cv from "@/assets/suman-cv.pdf";
import { useI18n } from "@/lib/i18n";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useI18n();

  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#expertise", label: t.nav.expertise },
    { href: "#research", label: t.nav.research },
    { href: "#education", label: t.nav.education },
    { href: "#personal", label: t.nav.gallery },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-background/95 backdrop-blur" : "bg-background/85 backdrop-blur-sm"
      }`}
    >
      <div className="border-b border-border/60 bg-paper">
        <div className="mx-auto flex max-w-7xl justify-center px-4 py-1.5 sm:px-6 lg:justify-end lg:px-8">
          <NepaliClock />
        </div>
      </div>

      <nav aria-label="Primary" className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="shrink-0 font-display text-xl font-semibold tracking-tight text-foreground">
          Suman <span className="text-primary">Khadka</span>
        </a>

        <ul className="hidden items-center xl:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="px-2.5 py-2 font-nav text-sm font-bold text-foreground transition-colors hover:text-primary">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <SiteSearch />
          <LanguageToggle />
          <ThemeToggle />
          <a
            href={cv}
            download
            className="hidden items-center gap-2 bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-foreground hover:text-background md:inline-flex"
          >
            <Download className="h-4 w-4" /> {t.nav.downloadCv}
          </a>
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground hover:bg-muted xl:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={t.nav.menu}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-background xl:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block px-3 py-3 font-nav text-base font-bold text-foreground hover:bg-muted">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="md:hidden">
              <a href={cv} download className="mt-2 flex items-center justify-center gap-2 bg-primary px-3 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground">
                <Download className="h-4 w-4" /> {t.nav.downloadCv}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
