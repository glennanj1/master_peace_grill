import React, { Component } from "react";
import { cateringPopupConfig } from "../../config/cateringPopup";
import "../../css/cateringPopup.css";

const safeText = (value, fallback = "") => {
  if (typeof value !== "string") {
    return fallback;
  }

  const trimmed = value.trim();
  return trimmed || fallback;
};

export default class CateringPopup extends Component {
  state = {
    visible: false,
  };

  componentDidMount() {
    const config = cateringPopupConfig;
    if (!config.enabled) return;

    try {
      if (window.sessionStorage.getItem(config.storageKey) === "1") return;
    } catch (error) {
      // Storage unavailable (private mode) - still show the popup.
    }

    this.timer = window.setTimeout(() => {
      this.setState({ visible: true });
    }, Number(config.delayMs) || 0);
  }

  componentWillUnmount() {
    if (this.timer) {
      window.clearTimeout(this.timer);
    }
  }

  dismiss = () => {
    this.setState({ visible: false });
    try {
      window.sessionStorage.setItem(cateringPopupConfig.storageKey, "1");
    } catch (error) {
      // Ignore storage failures; the popup just reappears next page.
    }
  };

  render() {
    if (!this.state.visible) return null;

    const config = cateringPopupConfig;
    const badge = config.badge ? safeText(config.badge) : null;
    const title = safeText(config.title, "Order Catering Online");
    const copy = config.copy ? safeText(config.copy) : null;
    const ctaLabel = safeText(config.cta?.label, "Build Your Tray");
    const ctaHref = safeText(config.cta?.href, "/catering");

    return (
      <div className="sb-toast" role="complementary" aria-label="Catering announcement">
        <button
          className="sb-toast__close"
          onClick={this.dismiss}
          aria-label="Dismiss"
        >
          ×
        </button>
        {badge ? <div className="sb-toast__badge">{badge}</div> : null}
        <div className="sb-toast__title">{title}</div>
        {copy ? <p className="sb-toast__copy">{copy}</p> : null}
        {/* Plain anchor: /catering is served by the catering app via the
            Netlify proxy, not a react-router route. */}
        <a className="sb-toast__btn" href={ctaHref}>
          {ctaLabel}
        </a>
      </div>
    );
  }
}
