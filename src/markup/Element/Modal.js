import React from "react";

const background = 'https://static.wonderfulunion.net/groundctrl/clients/groundctrl/media/09/06/media/release_images/assets/large.szVfY7CoJkgiZNQVDE8VdNzuUyAVZIJ8HsohHt2g17I.jpg'

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
                    <div className="__child" style={{background: `url(${background})`, backgroundSize: '100vh', backgroundPosition: 'center'}}>
                        <h4 className="__text">We are Closed Today 09/18</h4>
                        <h4 className="__text">Reopening tomorrow 09/19</h4>
                        <h4 className="__text">Sorry for the Inconvienence</h4>
                        <button className="__button" onClick={this.toggleModal}>Close</button>
                    </div>
                </div> ) : null}      
        </div>
    )}
}