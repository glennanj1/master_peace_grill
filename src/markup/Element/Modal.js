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

    const grateful = 'https://d3ddatyom1hv87.cloudfront.net/grateful.mp4'
    return (
        <div>
            {this.state.isOpen ? (
                <div className="__wrapper">
                    <div className="__child">
                        <h4 className="__text">We will be closed Tuesday 08/24 to attend the Grateful Dead Concert</h4>
                        <h4 className="__text">We will reopen on Wednesday 08/25</h4>
                        <h4 className="__text">Thank you for your understanding.</h4>
                        <button className="__button" onClick={this.toggleModal}>Close</button>
                    </div>
                </div> ) : null}
            
        </div>
    )}
}