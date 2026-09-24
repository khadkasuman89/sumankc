import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { useInView } from "./reveal";

function Counter({ value, run }: { value: string; run: boolean }) {
  const m = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const [shown, setShown] = useState(value);
  useEffect(() => {
    if (!m || !run) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return setShown(value);
    const target = parseFloat(m[1]);
    const decimals = m[1].split(".")[1]?.length ?? 0;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / 1200);
      const eased = 1 - Math.pow(1 - p, 3);
      setShown((target * eased).toFixed(decimals) + m[2]);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [run, value]);
  return <>{shown}</>;
}

export function CredentialStrip() {
  const { t } = useI18n();
  const { ref, seen } = useInView<HTMLElement>();
  return (
    <section ref={ref} aria-label={t.credentials.label} className="border-y border-border bg-navy-deep text-paper">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {t.credentials.items.map((c) => (
          <div key={c.label} className="border-b border-r border-paper/10 px-5 py-7 last:border-r-0 lg:border-b-0">
            <dd className="font-display text-3xl font-light text-paper sm:text-4xl">
              <Counter value={c.value} run={seen} />
            </dd>
            <dt className="technical-label mt-2 text-steel">{c.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
