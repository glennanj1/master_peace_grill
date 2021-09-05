import React from "react";

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
                    <div className="__child">
                        <h4 className="__text">We are Closed Sunday 09/05</h4>
                        <h4 className="__text">Have a great Labor Day</h4>
                        <h4 className="__text">See everyone on Tuesday 09/07</h4>
                        <button className="__button" onClick={this.toggleModal}>Close</button>
                    </div>
                </div> ) : null}      
        </div>
    )}
}