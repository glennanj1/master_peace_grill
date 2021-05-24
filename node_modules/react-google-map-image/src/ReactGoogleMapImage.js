import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GoogleMapImage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    getSrcParams() {
        let params = '';
        let counter = 0;
        let defaultMarker = '&markers=blue|';

        for (let key in this.props.config) {
            params += (counter > 0 ? "&" : "");
            params += `${key}=${this.props.config[key]}`;
            counter++;
        }

        if (!Object.keys(this.props.config).includes('markers')) {
            params += defaultMarker + this.props.config.center;
        }

        return params;
    }

    render() {
        return (
            <div 
                className="map-image-wrapper"
                style={this.props.wrapperStyle || null}
            >
                <img 
                    src={"https://maps.googleapis.com/maps/api/staticmap?" + this.getSrcParams()} 
                    style={this.props.style || null}
                />
            </div>
        );
    }
}

GoogleMapImage.propTypes = {
    config: PropTypes.shape({
        center: PropTypes.string.isRequired,
        size: PropTypes.string.isRequired,
        zoom: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired
    }).isRequired
};

export default GoogleMapImage;