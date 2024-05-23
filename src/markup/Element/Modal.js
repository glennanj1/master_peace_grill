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
                            Masterpeace Grill will be closed Friday through Wednesday
                            <span role="img" aria-label="peace">
                            ✌️❤️🎶🎶🎶🎶🎶🎶🎶🎶
                            </span>
                            </p>
                        </div>
                        <div style={{height: '100%', width: '100%', backgroundImage: "url(https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/436275260_926074752863111_8295943386381515439_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7KqOluyciBsQ7kNvgFqzaAK&_nc_ht=scontent-mia3-1.xx&oh=00_AYBmL7vNKda8VrsR3c1eZsCtDQH45GeVx6msAZwufRsapg&oe=66545F22", backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: '10px'}}>
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
