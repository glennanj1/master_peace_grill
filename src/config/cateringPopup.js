// Corner popup promoting online catering orders (/catering).
// Flip `enabled` to false to turn it off site-wide.
export const cateringPopupConfig = {
  // Back on now that the July vacation is over and the big announcement
  // modal has expired. This small corner popup is the main way visitors
  // discover online catering — otherwise it's only in the nav menu.
  enabled: true,
  badge: "NEW",
  title: "Now: Order Catering Online",
  copy: "Build your tray in minutes. Cheesesteaks, hoagies, wraps, wings and more.",
  cta: {
    label: "Build Your Tray",
    href: "/catering",
  },
  // Delay before the popup slides in (ms).
  delayMs: 1500,
  // Dismissal is remembered for the browser session.
  storageKey: "mpg-catering-popup-dismissed",
};
