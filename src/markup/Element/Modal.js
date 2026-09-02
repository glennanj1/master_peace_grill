import React, { Component } from "react";

const DEFAULT_ONLINE_URL =
  "https://online.skytab.com/f117df8f79079535eaa7a295c5011345";

const safeText = (value, fallback = "") => {
  if (typeof value !== "string") {
    return fallback;
  }

  const trimmed = value.trim();
  return trimmed || fallback;
};

const isHttpUrl = (value) => {
  if (typeof value !== "string" || !value.trim()) {
    return false;
  }

  try {
    const parsed = new URL(value);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch (error) {
    return false;
  }
};

const isAllowedHref = (value) => {
  if (typeof value !== "string" || !value.trim()) {
    return false;
  }

  const href = value.trim();
  return (
    href.startsWith("tel:") ||
    href.startsWith("mailto:") ||
    isHttpUrl(href)
  );
};

const phoneToHref = (value) => {
  const digitsOnly = String(value || "").replace(/\D/g, "");
  return digitsOnly ? `tel:${digitsOnly}` : "";
};

// Copies text to the clipboard. Prefers the async Clipboard API (https only)
// and falls back to a hidden textarea + execCommand so older mobile browsers
// still work. Returns false when neither path succeeds.
const copyToClipboard = async (value) => {
  const text = safeText(value);
  if (!text) return false;

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (error) {
    // Clipboard API refused (permissions, insecure context), so try the fallback.
  }

  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "-1000px";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    document.body.removeChild(textarea);
    return copied;
  } catch (error) {
    return false;
  }
};

export default class Modal extends Component {
  state = {
    isOpen: false,
    copied: false,
  };

  copyResetTimer = null;

  componentDidMount() {
    this.setState({ isOpen: true });
    document.addEventListener("keydown", this.handleKeyDown);
    this.lockBodyScroll();
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
    this.unlockBodyScroll();
    if (this.copyResetTimer) {
      clearTimeout(this.copyResetTimer);
    }
  }

  // While the overlay is up, stop the page underneath from scrolling. Without
  // this a touch drag can scroll the body behind the modal, which makes the
  // overlay feel stuck and the close button hard to get to.
  lockBodyScroll = () => {
    if (!document.body || this.previousBodyOverflow !== undefined) return;
    this.previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  };

  unlockBodyScroll = () => {
    if (!document.body || this.previousBodyOverflow === undefined) return;
    document.body.style.overflow = this.previousBodyOverflow;
    this.previousBodyOverflow = undefined;
  };

  handleKeyDown = (event) => {
    if (event.key === "Escape" || event.key === "Esc") {
      this.closeModal();
    }
  };

  closeModal = () => {
    this.unlockBodyScroll();
    this.setState({ isOpen: false });
  };

  handleCopy = async (value) => {
    const copied = await copyToClipboard(value);
    if (!copied) return;

    this.setState({ copied: true });
    if (this.copyResetTimer) {
      clearTimeout(this.copyResetTimer);
    }
    this.copyResetTimer = setTimeout(() => {
      this.setState({ copied: false });
    }, 2500);
  };

  render() {
    const { isOpen, copied } = this.state;
    const { config = {}, online } = this.props;
    const enabled = Boolean(config.enabled);

    if (!enabled || !isOpen) return null;

    const badge = config.badge ? safeText(config.badge) : null;
    const title = safeText(config.title, "On Vacation ✌️");
    const copy = config.copy ? safeText(config.copy) : null;
    const phoneDisplay = config.phone ? safeText(config.phone) : null;
    const phoneHref = phoneDisplay ? phoneToHref(phoneDisplay) : null;
    const subcopy = config.subcopy ? safeText(config.subcopy) : null;

    const primaryLabel = config.primaryCta?.label ? safeText(config.primaryCta.label) : null;
    const onlineUrl = isHttpUrl(online) ? online : DEFAULT_ONLINE_URL;
    const primaryHref = config.primaryCta?.href && isHttpUrl(config.primaryCta.href)
      ? config.primaryCta.href
      : onlineUrl;

    const secondaryLabel = config.secondaryCta?.label ? safeText(config.secondaryCta.label) : null;
    const secondaryHref = config.secondaryCta?.href && isAllowedHref(config.secondaryCta.href)
      ? config.secondaryCta.href
      : phoneHref;

    const copyValue =
      config.copyCta?.value && isHttpUrl(config.copyCta.value)
        ? config.copyCta.value.trim()
        : null;
    const copyLabel =
      copyValue && config.copyCta?.label ? safeText(config.copyCta.label) : null;
    const copiedLabel = safeText(config.copyCta?.copiedLabel, "Link copied!");
    const dismissLabel = safeText(config.dismissLabel, "Maybe later");

    const mediaSrc = safeText(config.media?.src || config.image?.src);
    const mediaAlt = safeText(config.media?.alt || config.image?.alt, "Announcement media");
    const mediaType = config.media?.type || "image";
    const hasMedia = Boolean(mediaSrc);

    // Without media, collapse the two-column grid to a single centered column
    // and narrow the card so it reads as a clean text-only announcement.
    const cardClass = hasMedia
      ? "sb-modal__card"
      : "sb-modal__card sb-modal__card--compact";
    const contentClass = hasMedia
      ? "sb-modal__content"
      : "sb-modal__content sb-modal__content--solo";

    return (
      <div
        className="sb-modal__overlay"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sb-modal-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            this.closeModal();
          }
        }}
      >
        <div className={cardClass}>
          <button
            className="sb-modal__close"
            onClick={this.closeModal}
            aria-label="Close"
          >
            ×
          </button>
          <div className={contentClass}>
            <div className="sb-modal__text">
              {badge ? <div className="sb-modal__badge">{badge}</div> : null}
              <h2 id="sb-modal-title" className="sb-modal__title">
                {title}
              </h2>
              {copy ? <p className="sb-modal__copy">{copy}</p> : null}
              {phoneDisplay ? (
                <div className="sb-modal__meta">
                  <span className="sb-modal__meta-label">Call ahead</span>
                  <a className="sb-modal__meta-phone" href={phoneHref}>
                    {phoneDisplay}
                  </a>
                </div>
              ) : null}
              {(primaryLabel || secondaryLabel || copyLabel) ? (
                <div className="sb-modal__actions">
                  {primaryLabel ? (
                    <a
                      className="sb-modal__btn sb-modal__btn--primary"
                      href={primaryHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {primaryLabel}
                    </a>
                  ) : null}
                  {secondaryLabel ? (
                    <a
                      className="sb-modal__btn sb-modal__btn--ghost"
                      href={secondaryHref}
                    >
                      {secondaryLabel}
                    </a>
                  ) : null}
                  {copyLabel ? (
                    <button
                      type="button"
                      className="sb-modal__btn sb-modal__btn--ghost sb-modal__btn--copy"
                      onClick={() => this.handleCopy(copyValue)}
                      aria-live="polite"
                    >
                      {copied ? copiedLabel : copyLabel}
                    </button>
                  ) : null}
                </div>
              ) : null}
              {subcopy ? <p className="sb-modal__subcopy">{subcopy}</p> : null}
              <button
                type="button"
                className="sb-modal__dismiss"
                onClick={this.closeModal}
              >
                {dismissLabel}
              </button>
            </div>
            {mediaSrc ? (
              <div className="sb-modal__media">
                {mediaType === "video" ? (
                  <video 
                    className="sb-modal__video" 
                    src={mediaSrc} 
                    alt={mediaAlt}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit"}}
                  />
                ) : (
                  <img className="sb-modal__image" src={mediaSrc} alt={mediaAlt} />
                )}
                <div className="sb-modal__glow" aria-hidden="true" />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
