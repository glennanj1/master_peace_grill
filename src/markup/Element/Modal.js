import React, { Component } from "react";
import confetti from "canvas-confetti";

export default class Modal extends Component {
  state = {
    isOpen: false
  };

  componentDidMount() {
    this.setState({ isOpen: true });
  }

  toggleModal = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
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
      <div className="__wrapper" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999999,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        pointerEvents: 'all'
      }}>
        <div className="__child" style={{ 
          margin: '10px', 
          borderRadius: '10px', 
          background: 'white', 
          maxWidth: '90vw', 
          maxHeight: '90vh', 
          overflow: 'auto',
          position: 'relative',
          zIndex: 1000000
        }}>
          <div>
            <p style={{ fontSize: '1.5em', padding: '20px', textAlign: 'center', fontWeight: 'bold' }}>
              We will be closed 5-8 through 5-13
              <br />
              Reopening 5-14
              <span role="img" aria-label="peace" style={{ marginLeft: '10px' }}>
                ✌️❤️🎶
              </span>
            </p>
          </div>
          
          <div style={{ 
            width: '100%', 
            height: '500px',
            backgroundImage: "url(https://strapi.glennan.cloud/uploads/Screenshot_2025_05_07_at_7_20_36_AM_90357324ab.png)", 
            backgroundSize: 'contain', 
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            marginBottom: '20px' 
          }} />
          
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <button 
              className="__button" 
              onClick={this.toggleModal}
              style={{ padding: '10px 20px', cursor: 'pointer' }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}
