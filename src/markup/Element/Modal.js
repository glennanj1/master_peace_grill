import React from "react";

const background = 'https://media.giphy.com/media/K9i1AnJdj2kUfay0Rm/giphy.gif'

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

    componentDidMount() {
        this.toggleModal();
    }

  render() {

    return (
        <div>
            {this.state.isOpen ? (
                <div className="__wrapper">
                    {/* <div className="__child" style={{background: `url(${background}) white`, backgroundSize: 'cover', backgroundPosition: 'center'}}> */}
                    <div className="__child" style={{background: 'rgb(238,174,202)', background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(181,43,43,1) 100%'), backgroundSize: 'cover', backgroundPosition: 'center'}}>
                        <h4 className="__text">We are Closing Early</h4>
                        <h4 className="__text">at 8PM Tonight</h4>
                        <h4 className="__text">Sorry for the Inconvienence</h4>
                        <h4 className="__text">Please order by 7:30PM</h4>
                        <button className="__button" onClick={this.toggleModal}>Close</button>
                    </div>
                </div> ) : null}      
        </div>
    )}
}