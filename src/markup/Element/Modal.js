import React, {useState, useEffect} from "react";
// import confetti from "canvas-confetti";
// import steak from "../../images/steak_tray.jpg"
// import logo from './../../images/mpg_logo.png'
// const background = 'https://strapi.glennan.cloud/uploads/IMG_3628_4113ccde86.jpg'

export default function Modal() {

    useEffect(() => {
         fetchModal();
    }, [])

    toggleModal = () => {
        if (this.state.isOpen) {
            this.setState({ isOpen: false });
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
    
   if (isOpen) {
       return (
           <div>
               {modalInfo?.active ? (
                   <div className="__wrapper">
                       {/* <div className="__child" style={{background: `url(${background}) white`, backgroundSize: 'cover', backgroundPosition: 'center'}}> */}
                       <div className="__child" style={{borderRadius: '10px', background: 'white'}}>
                           <div>
                               <p style={{fontSize: '1.5em', padding: '20px'}}>
                               {modalInfo?.body}
                               <span role="img" aria-label="peace">
                               ✌️☮️
                               </span>
                               </p>
                           </div>
                           <div style={{height: '100%', width: '100%', backgroundImage: `url(${modalInfo?.picture})`, backgroundSize: 'contain', backgroundPosition: 'center', marginBottom: '10px'}}>
                           </div>
                           {/* <div style={{height: '30%', width: '100px', marginBottom: '10px'}}>
                               <a href="https://morethanthecurve.com/best-of-conshy/" style={{textDecoration: 'none', color: 'white'}}><button className="__button" style={{bottom: '5px'}}>Vote Now</button></a>
                           </div> */}
                           <div style={{height: '30%', width: '100px', marginBottom: '20px'}}>
                               <button className="__button" onClick={toggleModal} style={{top: '5px', position: 'relative'}}>Close</button>
                           </div>
                       </div>
                   </div> ) : null}      
           </div>
       )
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
                        <div className="__child" style={{ borderRadius: '10px', background: 'white' }}>
                            <div>
                                <p style={{ fontSize: '1.5em', padding: '20px', textAlign: 'left' }}>
                                    We will be closed for vacation - Reopening 1/16                            <span role="img" aria-label="peace">
                                        ✌️❤️🎶
                                    </span>
                                </p>
                            </div>
                            <div style={{ height: '100%', width: '100%', backgroundImage: "url(https://strapi.glennan.cloud/uploads/Screenshot_2025_01_05_at_8_21_53_PM_ef586be5ed.png", backgroundSize: 'contain', backgroundPosition: 'center', marginBottom: '10px' }}>
                            </div>
                            {/* <div style={{height: '30%', width: '100px', marginBottom: '10px'}}>
                            <a href="https://morethanthecurve.com/best-of-conshy/" style={{textDecoration: 'none', color: 'white'}}><button className="__button" style={{bottom: '5px'}}>Vote Now</button></a>
                        </div> */}
                            <div style={{ height: '30%', width: '100px', marginBottom: '20px' }}>
                                <button className="__button" onClick={this.toggleModal} style={{ top: '5px', position: 'relative' }}>Close</button>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>) : null}
            </div>
        )
    }
}
