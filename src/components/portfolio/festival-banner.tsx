import { content } from "@/lib/translations";

export function FestivalBanner() {
  // Both languages always, so every visitor sees the greeting in English and Nepali.
  const messages = [content.en.festival.message, content.ne.festival.message];

  return (
    <div role="status" aria-label={messages.join(" ")} className="festival-banner">
      <div aria-hidden className="festival-stripe" />
      <div className="overflow-hidden">
        <div className="festival-track">
          {messages.map((m, i) => (
            <span key={`a-${i}`} className="festival-text">
              {m}
            </span>
          ))}
          {messages.map((m, i) => (
            <span key={`b-${i}`} aria-hidden className="festival-text">
              {m}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
