import React, { Component } from "react";

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
    const { online } = this.props;
    const onlineUrl =
      online ||
      "https://online.skytab.com/f117df8f79079535eaa7a295c5011345";

    if (!isOpen) return null;

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
              <div className="sb-modal__badge">Super Bowl Sunday</div>
              <h2 id="sb-modal-title" className="sb-modal__title">
                Open and delivering until 7 PM.
              </h2>
              <p className="sb-modal__copy">
                Call ahead for the fastest pickup. We are ready for game day.
              </p>
              <div className="sb-modal__meta">
                <span className="sb-modal__meta-label">Call ahead</span>
                <a className="sb-modal__meta-phone" href="tel:4843445250">
                  484-344-5250
                </a>
              </div>
              <div className="sb-modal__actions">
                <a
                  className="sb-modal__btn sb-modal__btn--primary"
                  href={onlineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order Online
                </a>
                <a
                  className="sb-modal__btn sb-modal__btn--ghost"
                  href="tel:4843445250"
                >
                  Call Now
                </a>
              </div>
              <p className="sb-modal__subcopy">
                Super Bowl Sunday only. Thanks for supporting local.
              </p>
            </div>
            <div className="sb-modal__media">
              <img
                className="sb-modal__image"
                src="/cheese-steak-tray.png"
                alt="Cheesesteak tray for game day"
              />
              <div className="sb-modal__glow" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
