# react-google-map-image
This is a simple react component that displays the image of a google map location.


## Demo & Examples

Live demo: [bodunadebiyi.github.io/react-google-map-image](http://bodunadebiyi.github.io/react-google-map-image/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use react-google-map-image is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-google-map-image.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-google-map-image --save
```


## Usage
This component is super easy to you

```js
// Using ES5
var ReactGoogleMapImage = require('react-google-map-image'); 

// Using ES6
import ReactGoogleMapImage from 'react-google-map-image';

// Example Usage
const googleMapApiConfig = { 
	center: '32 wulemotu ajoke street akoka', 
	size: '500x240', 
	zoom: '15',
	key: {{ google-api-key }}, 
	maptype: 'roadmap'
}
<ReactGoogleMapImage 
    config={googleMapApiConfig}
    wrapperStyle={{ width: '100%' }}
    style={{ width: '100px', height: 'auto', border: '1px solid #ccc'}}
/>
```

### Properties
###### config
This component makes use of google's Static Map API, this prop object contains the parameters used to configure this component. The full list of parameters can be found [here](https://developers.google.com/maps/documentation/static-maps/intro) on the google's static map page.

###### wrapperStyle
This prop is a style object used to customize the wrapper-div covering the image.

###### style
This prop is a style object used to customize the map image.

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

Copyright (c) 2017 Adebiyi Bodunde.

