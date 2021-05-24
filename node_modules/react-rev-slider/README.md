# React Rev Slider
Exposes react components for the popular revolution slider. 
NB: For now it supports only images in the slider and not videos and designed to work with Revolution Slider 4.

## Examples

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use react-rev-slider is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-rev-slider.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-rev-slider --save
```


## Usage
Include jquery and all the revolution slider assets in the header of your `index.html` file of your React application, then the following below.

```js
import RevSlider, { Slide, Caption } from 'react-rev-slider';

const config = {
    delay:9000,
    startwidth:1170,
    startheight:500,
    hideThumbs:10,
    fullWidth:"on",
    forceFullWidth:"on"
};

<RevSlider config={config}>
	<Slide
		src="https://i.ytimg.com/vi/dFnvYtPePRA/maxresdefault.jpg"
		alt="slidebg1"
		data-bgfit="cover"
		data-bgposition="left top"
		data-bgrepeat="no-repeat"
		slideProperties={{
			'data-transition': "fade",
			'data-slotamount': "7",
			'data-masterspeed': "1500"
		}}
	>   
		<Caption
			class="tp-caption skewfromrightshort fadeout"
			data-x="85"
			data-y="224"
			data-speed="500"
			data-start="1200"
			data-easing="Power4.easeOut"
		>
			This is a caption
		</Caption>
	</Slide>
	<Slide
		src="https://i.ytimg.com/vi/0xe4H666drk/maxresdefault.jpg"
		alt="slidebg1"
		data-bgfit="cover"
		data-bgposition="left top"
		data-bgrepeat="no-repeat"
		slideProperties={{
			'data-transition': "fade",
			'data-slotamount': "7",
			'data-masterspeed': "1500"
		}}
	>   
		<Caption
			class="tp-caption skewfromrightshort fadeout"
			data-x="85"
			data-y="224"
			data-speed="500"
			data-start="1200"
			data-easing="Power4.easeOut"
		>
			This is a caption
		</Caption>
	</Slide>
</RevSlider>
```

### Properties
Check the revolution slider documentation

### Notes

__ADDITIONAL USAGE NOTES__


## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

__PUT LICENSE HERE__

Copyright (c) 2017 Bodunde Adebiyi.

