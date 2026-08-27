// Corner popup on the main site. Normally it promotes online catering orders
// (/catering); during a temporary closure it carries the closure notice
// instead, then goes back to the catering promo by itself once we reopen.
// Flip `enabled` to false to turn the popup off site-wide.
//
// Closure: close at 6 PM Friday, Aug 28, 2026; reopen Wednesday, Sept 2, 2026.
// The message switches automatically based on the visitor's clock:
//   • before Friday 6 PM            -> "heads up, we're closing early Friday ..."
//   • Friday 6 PM through Tuesday   -> "we're closed, back Wednesday ..."
//   • from Wednesday, Sept 2 on     -> the regular catering promo again.
// To reuse for the next closure, change the two dates and the copy below.

// Month is 0-indexed, so 7 = August and 8 = September.
const CLOSES_AT = new Date(2026, 7, 28, 18, 0); // Friday, Aug 28, 2026 at 6:00 PM
const REOPENS = new Date(2026, 8, 2); // Wednesday, Sept 2, 2026 (open again)

const now = new Date();
const isClosedNow = now >= CLOSES_AT && now < REOPENS;
const closureOver = now >= REOPENS;

// The everyday popup: the main way visitors discover online catering
// (otherwise it's only in the nav menu).
const CATERING_PROMO = {
  badge: "NEW",
  title: "Now: Order Catering Online",
  copy: "Build your tray in minutes. Cheesesteaks, hoagies, wraps, wings and more.",
  cta: { label: "Build Your Tray", href: "/catering" },
  storageKey: "mpg-catering-popup-dismissed",
};

const CLOSURE_HEADS_UP = {
  badge: "Heads Up ✌️",
  title: "Closing at 6 PM This Friday",
  copy:
    "We'll close at 6 PM Friday, August 28 and reopen Wednesday, September 2. " +
    "Thanks for your patience, see you then!",
  cta: { label: "Order Catering Online", href: "/catering" },
  // Fresh key so visitors who already dismissed the promo still see the notice.
  storageKey: "mpg-closure-popup-dismissed-2026-09",
};

const CLOSURE_NOW = {
  badge: "We're Closed ✌️",
  title: "Reopening Wednesday, Sept 2",
  copy:
    "We're closed for a few days and will be back Wednesday, September 2. " +
    "Thanks for your patience, see you then!",
  cta: { label: "Order Catering Online", href: "/catering" },
  storageKey: "mpg-closure-popup-dismissed-2026-09",
};

const content = closureOver ? CATERING_PROMO : isClosedNow ? CLOSURE_NOW : CLOSURE_HEADS_UP;

export const cateringPopupConfig = {
  enabled: true,
  ...content,
  // Delay before the popup slides in (ms).
  delayMs: 1500,
  // Dismissal is remembered for the browser session (per storageKey above).
};
