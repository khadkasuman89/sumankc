import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

type Hit = { id: string; section: string; text: string };

function collect(): Hit[] {
  const hits: Hit[] = [];
  const sections = document.querySelectorAll<HTMLElement>("section[id]");
  sections.forEach((section) => {
    const heading = section.querySelector("h1, h2")?.textContent?.trim() || section.id;
    const seen = new Set<string>();
    section
      .querySelectorAll<HTMLElement>("h1, h2, h3, h4, p, li, span, a, td")
      .forEach((el) => {
        if (el.querySelector("h1, h2, h3, h4, p, li")) return;
        const text = el.textContent?.replace(/\s+/g, " ").trim() ?? "";
        if (text.length < 3 || text.length > 220) return;
        if (seen.has(text)) return;
        seen.add(text);
        hits.push({ id: section.id, section: heading, text });
      });
  });
  return hits;
}

export function SiteSearch() {
  const { lang } = useI18n();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState<Hit[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const labels =
    lang === "ne"
      ? { open: "खोज्नुहोस्", placeholder: "वेबसाइटभित्र खोज्नुहोस्...", empty: "कुनै नतिजा भेटिएन", hint: "खोज्न टाइप गर्नुहोस्" }
      : { open: "Search", placeholder: "Search this website...", empty: "No results found", hint: "Type to search" };

  useEffect(() => {
    if (!open) return;
    setIndex(collect());
    const id = window.setTimeout(() => inputRef.current?.focus(), 40);
    return () => window.clearTimeout(id);
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return index.filter((h) => h.text.toLowerCase().includes(q)).slice(0, 30);
  }, [query, index]);

  const go = (id: string) => {
    setOpen(false);
    setQuery("");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        aria-label={labels.open}
        className="text-foreground hover:bg-muted"
        onClick={() => setOpen(true)}
      >
        <Search className="h-5 w-5" />
      </Button>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-start justify-center bg-foreground/40 px-4 pt-24 backdrop-blur-sm">
          <div
            className="absolute inset-0"
            aria-hidden
            onClick={() => setOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label={labels.open}
            className="relative w-full max-w-xl overflow-hidden rounded-lg border border-border bg-card shadow-elegant"
          >
            <div className="flex items-center gap-2 border-b border-border px-4">
              <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={labels.placeholder}
                className="w-full bg-transparent py-4 font-nav text-[15px] text-card-foreground outline-none placeholder:text-muted-foreground"
              />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="rounded p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-2">
              {query.trim().length < 2 ? (
                <p className="px-3 py-6 text-center text-sm text-muted-foreground">{labels.hint}</p>
              ) : results.length === 0 ? (
                <p className="px-3 py-6 text-center text-sm text-muted-foreground">{labels.empty}</p>
              ) : (
                <ul className="space-y-1">
                  {results.map((hit, i) => (
                    <li key={`${hit.id}-${i}`}>
                      <button
                        onClick={() => go(hit.id)}
                        className="w-full rounded-md px-3 py-2 text-left transition-colors hover:bg-muted"
                      >
                        <span className="block text-[11px] font-semibold uppercase tracking-widest text-primary">
                          {hit.section}
                        </span>
                        <span className="block text-sm text-card-foreground">{hit.text}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
