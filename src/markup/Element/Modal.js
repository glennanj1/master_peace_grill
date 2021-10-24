import confetti from "canvas-confetti";
import React from "react";
import steak from "../../images/steak_tray.jpg"

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
                    <div className="__child" style={{borderRadius: '10px', backgroundImage: "url(" + steak + ")", backgroundSize: 'cover', backgroundPosition: 'center'}}>
                        <h4 className="__text">Master Peace</h4>
                        <h4 className="__text">Grill Best</h4>
                        <h4 className="__text">CheeseSteaks</h4>
                        <h4 className="__text">&</h4>
                        <h4 className="__text">Take Out</h4>
                        <a style={{color: 'inherit'}} href="https://morethanthecurve.com/best-of-conshy/"><button className="__button" onClick={this.confettiLaunch}>Vote Here</button></a>
                        <button className="__button" onClick={this.toggleModal}>Close</button>
                    </div>
                </div> ) : null}      
        </div>
    )}
}