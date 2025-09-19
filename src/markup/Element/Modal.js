import React, { Component } from "react";
import confetti from "canvas-confetti";

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

  confettiLaunch = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      zIndex: 100000,
    });
  };

  render() {
    const { isOpen } = this.state;

    if (!isOpen) return null;

    return (
      <div
        className="__wrapper"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.95)",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start", // Changed from center to flex-start
          paddingTop: "5vh", // Added padding at the top
          zIndex: 999999,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          pointerEvents: "all",
        }}
      >
        <div
          className="__child"
          style={{
            margin: "10px",
            borderRadius: "10px",
            background: "white",
            maxWidth: "90vw",
            maxHeight: "85vh",
            overflow: "auto",
            position: "relative",
            zIndex: 1000000,
            top: "0 !important", // Force override any CSS classes
            transform: "none !important", // Ensure no transforms are applied
          }}
        >
          <div>
            <p
              style={{
                fontSize: "1.5em",
                padding: "20px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
             We need you're help. Today is the last day to vote for best cheese steak and best takeout in Conshy!
            </p>
          </div>

          <div
            style={{
              width: "100%",
              height: "500px",
              backgroundImage:
                "url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWZzbjltcW9zaHBkbDRza2hleWRnOWM4Mzl2em5vYXVhemoya3g1NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5xtDarx8iw5A0Pz45WM/giphy.gif)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "repeat",
              marginBottom: "20px",
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <button
              href="https://morethanthecurve.com/best-of-conshy/?fbclid=IwY2xjawM6bKZleHRuA2FlbQIxMQBicmlkETFFNGZuMkJ4dzVnb0ZMRGZ5AR5J15-rPxH5S2jJRmNpkyE5QsrVtFQ_9PycL5KSDBNCEn1rXsHzmfo7HIfBPA_aem_qQRNfUBhyOam0Yetzi3GKQ"
              className="__button" 
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "10px 20px", marginRight: "10px", cursor: "pointer", textDecoration: "none" }}
            >
              Vote Now
            </button>
            <button
              className="__button"
              onClick={this.toggleModal}
              style={{ padding: "10px 20px", cursor: "pointer" }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}
