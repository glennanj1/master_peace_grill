import confetti from "canvas-confetti";
import React from "react";
// import steak from "../../images/steak_tray.jpg"
// import logo from './../../images/mpg_logo.png'
// const background = 'https://strapi.glennan.cloud/uploads/IMG_3628_4113ccde86.jpg'

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
                            <p style={{fontSize: '1.5em', padding: '20px', textAlign: 'left'}}>
                            MasterPeace Grill Voted best CheeseSteaks in Conshohocken. Thank you to all that voted!
                            <span role="img" aria-label="peace">
                            ✌️❤️🎶
                            </span>
                            </p>
                        </div>
                        <div style={{height: '100%', width: '100%', backgroundImage: "url(https://strapi.glennan.cloud/uploads/IMG_3628_4113ccde86.jpg", backgroundSize: 'contain', backgroundPosition: 'center', marginBottom: '10px'}}>
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
