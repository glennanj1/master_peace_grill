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
                    <div className="__child" style={{borderRadius: '10px', background: 'white'}}>
                        <div>
                            <p style={{fontSize: '1em', padding: '50px'}}>
                            Masterpeace Grill will be closed Today 
                            Have a GRATEFUL Day Reopening Tuesday 7/12/2022 <span role="img" aria-label="peace">
                            ✌️❤️🎼🎼🎼🎼
                            </span>
                            </p>
                        </div>
                        <div style={{height: '100%', width: '100%', backgroundImage: "url(https://d3ddatyom1hv87.cloudfront.net/4thOfJulyDeadHead.png)", backgroundSize: 'contain', backgroundPosition: 'center'}}>
                        </div>
                        <div style={{height: '100px', width: '100px'}}>
                            <button className="__button" onClick={this.toggleModal} style={{bottom: '20px', position: 'relative'}}>Close</button>
                        </div>
                    </div>
                </div> ) : null}      
        </div>
    )}
}