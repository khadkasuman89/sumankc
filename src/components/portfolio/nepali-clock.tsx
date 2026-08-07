import { useEffect, useState } from "react";
import { CalendarDays, Clock } from "lucide-react";
import {
  adToBs,
  formatBsLong,
  formatBsNumeric,
  formatNepaliTime,
} from "@/lib/nepali-date";

export function NepaliClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!now) return null;
  const bs = adToBs(now);

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-navy-deep">
      {bs && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold sm:text-sm">
          <CalendarDays className="h-4 w-4 text-steel" />
          <span className="tabular-nums">{formatBsNumeric(bs)}</span>
          <span className="text-[11px] font-medium text-steel sm:text-xs">
            ({formatBsLong(bs)})
          </span>
        </span>
      )}
      <span className="inline-flex items-center gap-2 text-xs font-semibold sm:text-sm">
        <Clock className="h-4 w-4 text-steel" />
        <span className="tabular-nums">{formatNepaliTime(now)}</span>
      </span>
    </div>
  );
}
