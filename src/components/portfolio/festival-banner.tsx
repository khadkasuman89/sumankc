import { useI18n } from "@/lib/i18n";

export function FestivalBanner() {
  const { t } = useI18n();
  const message = t.festival.message;

  return (
    <div role="status" aria-label={message} className="festival-banner">
      <div aria-hidden className="festival-stripe" />
      <div className="overflow-hidden">
        <div className="festival-track">
          <span className="festival-text">{message}</span>
          <span aria-hidden className="festival-text">
            {message}
          </span>
        </div>
      </div>
    </div>
  );
}
