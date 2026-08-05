// Bikram Sambat (BS) conversion + Nepali formatting helpers.
// Reference: Baisakh 1, 2070 BS = April 14, 2013 AD

const BS_MONTH_DAYS: Record<number, number[]> = {
  2070: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  2071: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2072: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2073: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  2074: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2075: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2076: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2077: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2078: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  2079: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2080: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  2081: [31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  2082: [31, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30],
  2083: [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30],
  2084: [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
  2085: [31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30],
  2086: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  2087: [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30],
  2088: [30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30],
  2089: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  2090: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
};

const BASE_BS_YEAR = 2070;
/** April 14, 2013 UTC (midnight) */
const BASE_AD_UTC = Date.UTC(2013, 3, 14);
const MS_PER_DAY = 86_400_000;

export const NEPALI_MONTHS = [
  "बैशाख",
  "जेठ",
  "असार",
  "साउन",
  "भदौ",
  "असोज",
  "कार्तिक",
  "मंसिर",
  "पुष",
  "माघ",
  "फागुन",
  "चैत",
];

export const NEPALI_WEEKDAYS = [
  "आइतबार",
  "सोमबार",
  "मंगलबार",
  "बुधबार",
  "बिहीबार",
  "शुक्रबार",
  "शनिबार",
];

const NEPALI_DIGITS = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];

export function toNepaliDigits(value: string | number): string {
  return String(value).replace(/[0-9]/g, (d) => NEPALI_DIGITS[Number(d)]);
}

export type BsDate = {
  year: number;
  month: number; // 1-12
  day: number; // 1-32
  weekday: number; // 0 = Sunday
};

/** Kathmandu is UTC+05:45 */
function kathmanduParts(date: Date) {
  const shifted = new Date(date.getTime() + 5.75 * 60 * 60 * 1000);
  return {
    year: shifted.getUTCFullYear(),
    month: shifted.getUTCMonth(),
    day: shifted.getUTCDate(),
    hours: shifted.getUTCHours(),
    minutes: shifted.getUTCMinutes(),
    seconds: shifted.getUTCSeconds(),
    weekday: shifted.getUTCDay(),
  };
}

export function adToBs(date: Date): BsDate | null {
  const p = kathmanduParts(date);
  let remaining = Math.floor(
    (Date.UTC(p.year, p.month, p.day) - BASE_AD_UTC) / MS_PER_DAY,
  );
  if (remaining < 0) return null;

  let bsYear = BASE_BS_YEAR;
  let bsMonth = 1;
  while (true) {
    const months = BS_MONTH_DAYS[bsYear];
    if (!months) return null;
    const days = months[bsMonth - 1];
    if (remaining < days) break;
    remaining -= days;
    bsMonth += 1;
    if (bsMonth > 12) {
      bsMonth = 1;
      bsYear += 1;
    }
  }

  return { year: bsYear, month: bsMonth, day: remaining + 1, weekday: p.weekday };
}

const pad = (n: number) => String(n).padStart(2, "0");

/** yyyy-mm-dd in Nepali numerals */
export function formatBsNumeric(bs: BsDate): string {
  return toNepaliDigits(`${bs.year}-${pad(bs.month)}-${pad(bs.day)}`);
}

export function formatBsLong(bs: BsDate): string {
  return `${NEPALI_WEEKDAYS[bs.weekday]}, ${NEPALI_MONTHS[bs.month - 1]} ${toNepaliDigits(bs.day)}, ${toNepaliDigits(bs.year)}`;
}

/** Kathmandu time, 12-hour, Nepali numerals with Nepali day-part label */
export function formatNepaliTime(date: Date): string {
  const p = kathmanduParts(date);
  const h24 = p.hours;
  const label =
    h24 < 4
      ? "राति"
      : h24 < 11
        ? "बिहान"
        : h24 < 16
          ? "दिउँसो"
          : h24 < 19
            ? "बेलुका"
            : "राति";
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${label} ${toNepaliDigits(h12)}:${toNepaliDigits(pad(p.minutes))}:${toNepaliDigits(pad(p.seconds))}`;
}
