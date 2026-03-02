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

    const mediaSrc = safeText(config.media?.src || config.image?.src);
    const mediaAlt = safeText(config.media?.alt || config.image?.alt, "Announcement media");
    const mediaType = config.media?.type || "image";

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
              {copy ? <p className="sb-modal__copy">{copy}</p> : null}
              {phoneDisplay ? (
                <div className="sb-modal__meta">
                  <span className="sb-modal__meta-label">Call ahead</span>
                  <a className="sb-modal__meta-phone" href={phoneHref}>
                    {phoneDisplay}
                  </a>
                </div>
              ) : null}
              {(primaryLabel || secondaryLabel) ? (
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
                </div>
              ) : null}
              {subcopy ? <p className="sb-modal__subcopy">{subcopy}</p> : null}
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
