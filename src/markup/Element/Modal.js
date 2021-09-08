import React from "react";

// const background = 'https://static.wonderfulunion.net/groundctrl/clients/groundctrl/media/09/06/media/release_images/assets/large.szVfY7CoJkgiZNQVDE8VdNzuUyAVZIJ8HsohHt2g17I.jpg'

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
                <div className="__wrapper" >
                    <div className="__child" style={{backgroundColor: '#5f0000'}}>
                        <h4 className="__text">We are Sorry to Inform You</h4>
                        <h4 className="__text">That we are closed Today</h4>
                        <h4 className="__text">We apologize for the inconvienence</h4>
                        <button className="__button" onClick={this.toggleModal}>Close</button>
                    </div>
                </div> ) : null}      
        </div>
    )}
}