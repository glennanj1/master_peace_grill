import React, {useState, useEffect} from "react";
// import confetti from "canvas-confetti";
// import steak from "../../images/steak_tray.jpg"

// const background = 'https://media.giphy.com/media/K9i1AnJdj2kUfay0Rm/giphy.gif'

export default function Modal() {

    useEffect(() => {
         fetchModal();
    }, [])

    const [isOpen, setIsOpen] = useState(true);
    const [modalInfo, setModalInfo] = useState();
    

    let toggleModal = () => {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }

    // let confettiLaunch = () => {
    //     confetti({
    //         particleCount: 100,
    //         spread: 70,
    //         origin: { y: 0.6 },
    //         zIndex: 100000,
    //     });
    // }

    async function fetchModal() {
        try {
          let res = await fetch(
            process.env.PROD_URL + "/modals"
          );

          if (!res.ok) {
            const message = `Error occurred: ${res.status}`;
            throw new Error(message);
          }
    
          //set menu info w/ response from DB
          const modalData = await res.json();
          setModalInfo(modalData?.modals);
        } catch (error) {
          console.error("ERROR:", error);
        }
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
    

}