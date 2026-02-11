import React, { Component } from "react";

const DEFAULT_ONLINE_URL =
  "https://online.skytab.com/f117df8f79079535eaa7a295c5011345";
const DEFAULT_PHONE_NUMBER = "484-344-5250";

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

export default class Modal extends Component {
  state = {
    isOpen: false,
  };

  componentDidMount() {
    this.setState({ isOpen: true });
  }

  toggleModal = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const { isOpen } = this.state;
    const { config = {}, online } = this.props;
    const enabled = Boolean(config.enabled);

    if (!enabled || !isOpen) return null;

    const badge = safeText(config.badge, "Announcement");
    const title = safeText(config.title, "Open and delivering until 7 PM.");
    const copy = safeText(
      config.copy,
      "Call ahead for the fastest pickup. We are ready for game day."
    );
    const phoneDisplay = safeText(config.phone, DEFAULT_PHONE_NUMBER);
    const phoneHref = phoneToHref(phoneDisplay) || phoneToHref(DEFAULT_PHONE_NUMBER);
    const subcopy = safeText(config.subcopy);

    const primaryLabel = safeText(config.primaryCta?.label, "Order Online");
    const onlineUrl = isHttpUrl(online) ? online : DEFAULT_ONLINE_URL;
    const primaryHref = isHttpUrl(config.primaryCta?.href)
      ? config.primaryCta.href
      : onlineUrl;

    const secondaryLabel = safeText(config.secondaryCta?.label, "Call Now");
    const secondaryHref = isAllowedHref(config.secondaryCta?.href)
      ? config.secondaryCta.href
      : phoneHref;

    const imageSrc = safeText(config.image?.src);
    const imageAlt = safeText(config.image?.alt, "Announcement image");

    return (
      <div
        className="sb-modal__overlay"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sb-modal-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            this.toggleModal();
          }
        }}
      >
        <div className="sb-modal__card">
          <button
            className="sb-modal__close"
            onClick={this.toggleModal}
            aria-label="Close"
          >
            ×
          </button>
          <div className="sb-modal__content">
            <div className="sb-modal__text">
              <div className="sb-modal__badge">{badge}</div>
              <h2 id="sb-modal-title" className="sb-modal__title">
                {title}
              </h2>
              <p className="sb-modal__copy">{copy}</p>
              <div className="sb-modal__meta">
                <span className="sb-modal__meta-label">Call ahead</span>
                <a className="sb-modal__meta-phone" href={phoneHref}>
                  {phoneDisplay}
                </a>
              </div>
              <div className="sb-modal__actions">
                <a
                  className="sb-modal__btn sb-modal__btn--primary"
                  href={primaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {primaryLabel}
                </a>
                <a
                  className="sb-modal__btn sb-modal__btn--ghost"
                  href={secondaryHref}
                >
                  {secondaryLabel}
                </a>
              </div>
              {subcopy ? <p className="sb-modal__subcopy">{subcopy}</p> : null}
            </div>
            {imageSrc ? (
              <div className="sb-modal__media">
                <img className="sb-modal__image" src={imageSrc} alt={imageAlt} />
                <div className="sb-modal__glow" aria-hidden="true" />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
