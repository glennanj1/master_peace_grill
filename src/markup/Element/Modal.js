import confetti from "canvas-confetti";
import React from "react";
// import steak from "../../images/steak_tray.jpg"

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
                    <div className="__child" style={{borderRadius: '10px', backgroundImage: "url(https://d3ddatyom1hv87.cloudfront.net/4thOfJulyDeadHead.png)", backgroundSize: 'cover', backgroundPosition: 'center'}}>

                        <h4 className="__text">We Are Closed</h4>
                        <h4 className="__text">Sunday Monday</h4>
                        <h4 className="__text">Tuesday</h4>
                        <h4 className="__text">Wednesday</h4>
                        <h4 className="__text">Happy 4th of July</h4>
                        <h4 className="__text"><span role="img" aria-label="peace">
                            ✌️
                        </span></h4>
                        <button className="__button" onClick={this.toggleModal}>Close</button>
                    </div>
                </div> ) : null}      
        </div>
    )}
}