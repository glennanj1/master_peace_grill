import confetti from "canvas-confetti";
import React from "react";
// import steak from "../../images/steak_tray.jpg"
// import logo from './../../images/mpg_logo.png'
// const background = 'https://media.giphy.com/media/K9i1AnJdj2kUfay0Rm/giphy.gif'

export default class Modal extends React.Component {

    state = {
        isOpen: false
    }

    toggleModal = () => {
        if (this.state.isOpen) {
            this.setState({isOpen: false});
        } else {
        this.setState({
            isOpen: true
        });
        }
    }

    confettiLaunch = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            zIndex: 100000,
          });
    }


    componentDidMount() {
        this.toggleModal();
    }

  render() {

    return (
        <div>
            {this.state.isOpen ? (
                <div className="__wrapper">
                    {/* <div className="__child" style={{background: `url(${background}) white`, backgroundSize: 'cover', backgroundPosition: 'center'}}> */}
                    <div className="__child" style={{borderRadius: '10px', background: 'white'}}>
                        <div>
                            <p style={{fontSize: '1.5em', padding: '20px'}}>
                            We will be closed 1/11/24 - 1/17/24. Re-opening 1/18/24. 
                            <span role="img" aria-label="peace">
                            ✌️☮️
                            </span>
                            </p>
                        </div>
                        <div style={{height: '100%', width: '100%', backgroundImage: "url(https://imagedelivery.net/VQh5-_xRHTXIspD07tbGiw/dec76d61-b2f5-46bb-863c-5afd3dde9300/public", backgroundSize: 'contain', backgroundPosition: 'center', marginBottom: '10px'}}>
                        </div>
                        {/* <div style={{height: '30%', width: '100px', marginBottom: '10px'}}>
                            <a href="https://morethanthecurve.com/best-of-conshy/" style={{textDecoration: 'none', color: 'white'}}><button className="__button" style={{bottom: '5px'}}>Vote Now</button></a>
                        </div> */}
                        <div style={{height: '30%', width: '100px', marginBottom: '20px'}}>
                            <button className="__button" onClick={this.toggleModal} style={{top: '5px', position: 'relative'}}>Close</button>
                        </div>
                        {/* </div> */}
                    </div>
                </div> ) : null}      
        </div>
    )}
}