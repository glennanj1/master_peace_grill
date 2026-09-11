// Best of Conshy 2026 announcement modal (homepage).
//
// MoreThanTheCurve.com runs Best of Conshy in two rounds:
//   * Nominations  = closed September 10, 2026
//   * Final voting = September 14 through September 23, 2026
//   * Winners announced September 25, 2026
//
// Nominations are closed, so the nominate ask and its link are down. The modal
// stays dark until the final round opens, then turns itself off after it ends:
//   * now through Sep 13  -> nothing shows
//   * Sep 14 - Sep 23     -> "vote for us"
//   * after Sep 23        -> isAnnouncementActive() turns the modal off
//
// To reuse next year, update BEST_OF_CONSHY_URL and the two dates below.

export const BEST_OF_CONSHY_URL = "https://morethanthecurve.com/best-of-conshy/";

// Local YYYY-MM-DD comparisons, so every date below reads in the visitor's
// own timezone the same way the start/end window does.
const VOTING_START = "2026-09-14"; // final round opens
const VOTING_END = "2026-09-23"; // final round closes

// Local YYYY-MM-DD for a given date (in the visitor's own timezone).
const toLocalYMD = (date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

const VOTE_COPY =
  "Voting is open through September 23! You've made us Best Cheesesteak nine " +
  "years running. Help us go for ten! Head to MoreThanTheCurve.com and vote " +
  "MasterPeace Grill for Best Cheesesteak.";

export const announcementModalConfig = {
  enabled: true,
  // The modal only appears during this window (inclusive), by the visitor's
  // local date. It stays hidden before startDate and disappears on its own the
  // day after endDate, so no manual toggling is needed.
  startDate: VOTING_START,
  endDate: VOTING_END,
  badge: "Best of Conshy 2026 ✌️",
  title: "Vote Us Best Cheesesteak!",
  copy: VOTE_COPY,
  phone: null,
  subcopy:
    "Best of Conshy is run by MoreThanTheCurve.com. Winners announced September 25.",
  primaryCta: {
    label: "Vote on MoreThanTheCurve",
    href: BEST_OF_CONSHY_URL,
  },
  secondaryCta: null,
  // Renders a button that copies the ballot link to the clipboard, so anyone
  // who finds us here can paste it to friends, a group chat, or their socials.
  copyCta: {
    label: "Copy the Link",
    copiedLabel: "Link Copied! ✌️",
    value: BEST_OF_CONSHY_URL,
  },
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
