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
                            <p style={{fontSize: '1em', padding: '25px'}}>
                            Masterpeace Grill will be closed for Vacation 
                            8/14 threw 8/22<span role="img" aria-label="peace">
                            ✌️❤️🎼🎼🎼🎼
                            </span>
                            </p>
                        </div>
                        <div style={{height: '100%', width: '100%', backgroundImage: "url(https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/298989073_5644966415533751_8313348424198655745_n.jpg?stp=cp1_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=lb6svY6Y84UAX8NIOhi&_nc_ht=scontent-iad3-2.xx&oh=00_AT_K28cHS668q5vi8PFvcWcAXDVOwUpquPW45IP3B5ZDQw&oe=62FC15AA)", backgroundSize: 'contain', backgroundPosition: 'center'}}>
                        </div>
                        <div style={{height: '100px', width: '100px'}}>
                            <button className="__button" onClick={this.toggleModal} style={{bottom: '5px', position: 'relative'}}>Close</button>
                        </div>
                    </div>
                </div> ) : null}      
        </div>
    )}
}