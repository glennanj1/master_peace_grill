// Corner popup promoting online catering orders (/catering).
// Flip `enabled` to false to turn it off site-wide.
export const cateringPopupConfig = {
  enabled: true,
  badge: "NEW",
  title: "Order Catering Online",
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
