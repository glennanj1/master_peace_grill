export const announcementModalConfig = {
  enabled: true,
  // The vacation modal only appears during this window (inclusive), by the
  // visitor's local date. It stays hidden before startDate and disappears on
  // its own the day after endDate — no manual toggling needed.
  startDate: "2026-07-19", // Sunday — vacation begins
  endDate: "2026-07-22", // Wednesday — last closed day (reopening Thu 7/23)
  badge: "On Vacation ✌️",
  title: "We're on vacation",
  copy: "Closed Sunday, July 19 through Wednesday, July 22 — reopening Thursday, July 23!",
  phone: null,
  subcopy: null,
  primaryCta: null,
  secondaryCta: null,
  media: {
    type: "video",
    src: "https://masterpeacegrillconshy.techbridge.dev/vacation_video/IMG_6048.MOV",
    alt: "Vacation video",
  },
};

// Local YYYY-MM-DD for a given date (in the visitor's own timezone).
const toLocalYMD = (date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

// True only when the modal is enabled AND today falls within
// [startDate, endDate] inclusive. Missing bounds are treated as open-ended,
// so a config without dates behaves like the old plain on/off switch.
export const isAnnouncementActive = (
  config = announcementModalConfig,
  now = new Date()
) => {
  if (!config || !config.enabled) return false;
  const today = toLocalYMD(now);
  if (config.startDate && today < config.startDate) return false;
  if (config.endDate && today > config.endDate) return false;
  return true;
};
