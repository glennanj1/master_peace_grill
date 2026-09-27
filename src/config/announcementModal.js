// Best of Conshy 2026 announcement modal (homepage).
//
// MoreThanTheCurve.com announced the Best of Conshy 2026 winners on
// September 25, 2026, and MasterPeace Grill won Best Takeout Service. The
// modal thanks everyone who voted, then turns itself off:
//   * Sep 25 - Oct 31     -> "Best Takeout Service, thanks for your vote"
//   * after Oct 31        -> isAnnouncementActive() turns the modal off
//
// The badge art lives in public/awards/. To reuse next year, swap the award
// image and caption and update the two dates below.

export const BEST_OF_CONSHY_URL = "https://morethanthecurve.com/best-of-conshy/";

// Local YYYY-MM-DD comparisons, so every date below reads in the visitor's
// own timezone the same way the start/end window does.
const THANK_YOU_START = "2026-09-25"; // winners announced
const THANK_YOU_END = "2026-10-31"; // last day the thank-you shows

// Local YYYY-MM-DD for a given date (in the visitor's own timezone).
const toLocalYMD = (date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

export const announcementModalConfig = {
  enabled: true,
  // The modal only appears during this window (inclusive), by the visitor's
  // local date. It stays hidden before startDate and disappears on its own the
  // day after endDate, so no manual toggling is needed.
  startDate: THANK_YOU_START,
  endDate: THANK_YOU_END,
  // Award badge shown centered above the title, with the caption under it in
  // white (the same way the old Best Cheesesteak badge carried its category).
  award: {
    src: "/awards/best-of-conshy-2026.png",
    alt: "Best of Conshy 2026",
    caption: "Best Takeout Service",
  },
  badge: null,
  title: "Thanks for Your Vote! ✌️",
  copy:
    "You made MasterPeace Grill the Best Takeout in Conshohocken for 2026. " +
    "We appreciate every one of you!",
  phone: null,
  subcopy: "Best of Conshy is run by MoreThanTheCurve.com.",
  // No href, so the button falls back to the online ordering link.
  primaryCta: {
    label: "Order Takeout",
  },
  secondaryCta: null,
  copyCta: null,
  dismissLabel: "Close",
  media: null,
};

// True only when the modal is enabled AND today falls within
// [startDate, endDate] inclusive. Missing bounds are treated as open-ended,
// so a config without dates behaves like the old plain on/off switch.
export const isAnnouncementActive = (
  config = announcementModalConfig,
  now = new Date()
) => {
  if (!config || !config.enabled) return false;
  const day = toLocalYMD(now);
  if (config.startDate && day < config.startDate) return false;
  if (config.endDate && day > config.endDate) return false;
  return true;
};
