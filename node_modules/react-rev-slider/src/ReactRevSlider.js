import React, { Component } from 'react';

export class RevSlider extends Component {
    constructor(props) {
        super(props);
        this.jquery = jQuery || $ || window.jQuery || window.$;
    }

    componentDidMount() {
        this.jquery(document).ready(() => {
            this.jquery('.tp-banner').revolution(this.props.config);
        });
    }

    render() {
        return(
            <div 
                className="tp-container"
                style={containerStyle}
            >
                <div 
                    className="tp-banner"
                    style={bannerStyle}
                >
                    <ul>
                        {this.props.children}
                    </ul>
                </div>
            </div>
        )
    }
}

export class Slide extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <li {...fetchAttributes(this.props.slideProperties)}>
                <img {...fetchAttributes(this.props, 'slideProperties')}/>
                {this.props.children}
            </li>
        )
    }
}


export class Caption extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div {...fetchAttributes(this.props)}>
                {this.props.children}
            </div>
        )
    }
}

export default RevSlider;

const containerStyle = {
    position: 'relative',
    width: '100%',
    padding: 0
}

const bannerStyle = {
    width: '100%',
	position: 'relative'
}

const fullscreenContainer = {
    maxHeight: 'none',
    overflow: 'visible',
}

function fetchAttributes(payload, sk = [], ex = []) {
    const attr = {};
    const skip = ['children'].concat(sk)
    const exceptions = ['class', 'src', 'alt', 'style', 'id'].concat(...ex);
    for (let key in payload) {
        if (skip.includes(key)) {
            continue;
        } else if (key === 'class') {
            attr[key + 'Name'] = payload[key];
        } else if (exceptions.includes(key)) {
            attr[key] = payload[key];
        } else {
            if (key.startsWith('data-')) {
                attr[key] = payload[key];
            } else {
                attr['data-' + key] = payload[key];
            }
        }

    }
    return attr;
}