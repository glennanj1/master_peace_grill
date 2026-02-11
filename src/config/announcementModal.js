const DEFAULT_ONLINE_URL =
  "https://online.skytab.com/f117df8f79079535eaa7a295c5011345";

export const announcementModalConfig = {
  enabled: process.env.REACT_APP_SHOW_ANNOUNCEMENT_MODAL === "true",
  badge: process.env.REACT_APP_ANNOUNCEMENT_MODAL_BADGE || "Super Bowl Sunday",
  title:
    process.env.REACT_APP_ANNOUNCEMENT_MODAL_TITLE ||
    "Open and delivering until 7 PM.",
  copy:
    process.env.REACT_APP_ANNOUNCEMENT_MODAL_COPY ||
    "Call ahead for the fastest pickup. We are ready for game day.",
  phone: process.env.REACT_APP_ANNOUNCEMENT_MODAL_PHONE || "484-344-5250",
  subcopy:
    process.env.REACT_APP_ANNOUNCEMENT_MODAL_SUBCOPY ||
    "Super Bowl Sunday only. Thanks for supporting local.",
  primaryCta: {
    label:
      process.env.REACT_APP_ANNOUNCEMENT_MODAL_PRIMARY_LABEL || "Order Online",
    href:
      process.env.REACT_APP_ANNOUNCEMENT_MODAL_PRIMARY_HREF || DEFAULT_ONLINE_URL,
  },
  secondaryCta: {
    label: process.env.REACT_APP_ANNOUNCEMENT_MODAL_SECONDARY_LABEL || "Call Now",
    href:
      process.env.REACT_APP_ANNOUNCEMENT_MODAL_SECONDARY_HREF || "tel:4843445250",
  },
  image: {
    src:
      process.env.REACT_APP_ANNOUNCEMENT_MODAL_IMAGE_SRC ||
      "/cheese-steak-tray.png",
    alt:
      process.env.REACT_APP_ANNOUNCEMENT_MODAL_IMAGE_ALT ||
      "Cheesesteak tray for game day",
  },
};
