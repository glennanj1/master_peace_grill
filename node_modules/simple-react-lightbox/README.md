# Simple React Lightbox (SRL)

![Simple React Lightbox - Logo](https://simple-react-lightbox.dev/docs/SRL_Logo_Git.jpeg)

[![NPM](https://img.shields.io/npm/v/simple-react-lightbox.svg)](https://www.npmjs.com/package/simple-react-lightbox) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Build Status](https://travis-ci.com/michelecocuccio/simple-react-lightbox.svg?token=RytKLBgaYszcR25z6ZLP&branch=master)](https://travis-ci.com/michelecocuccio/simple-react-lightbox)


[![buymeacoffe](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/michelecocuccio)

**Simple React Lightbox** gives you the ability to add a lightbox functionality on a set of images (or videos/audio if you are using the PRO version), whether you define them yourself or you get them from an external source (API, backend etc…). Just use the provided component to wrap your app, define your options and then use the `<SRLWrapper>`  component by wrapping it around the content in which you have or expect your images or videos!

#### Packed with features 📦

**Simple React Lightbox** comes with many features: please check the [options](#options) section to learn more. Some features are only available in the PRO version available on the official [Simple React Lightbox - webiste](https://simple-react-lightbox.dev).

---

### Documentation: quick links

- [Demo website](https://demo.simple-react-lightbox.dev)
- [Demo CodeSandbox](#demo)
- [Official website and PRO version](https://simple-react-lightbox.dev)
- [Getting started](#getting-started)
- [Options](#options)
- [Video and audio support](#video-and-audio-support)
- [Custom Captions](#custom-captions)
- [Callbacks](#callbacks)
- [Hooks](#hooks)
- [A note on "slide" animation and Firefox](#firefox-issue)


#### December update (v4.0.0) and PRO version (v1.0)
- It took a while but with this update the Simple React Lightbox PRO version is finally ready. The PRO version can be purchased for **just $5 dollars** and it will give access to some new exciting and requested features like: Video and audio support (Web videos or YouTube, Twitch, DailyMotion, Vimeo, SoundCloud), custom icons, custom captions, translations, excluding content easily from the lightbox.
The PRO version can be purchased on the official [Simple React Lightbox - webiste](https://simple-react-lightbox.dev).
- Added a `boxShadow` option in the settings object to allow to display a shadow behind the element.
- ⚠️ The data attribute `data-attribute="SRL"` for when creating a gallery with thumbnails is no longer need and should be removed.
- Some features have been removed from the Free version but all the options related to the customization of the lightbox are still available.
- Improved the overall quality of the code, including the occurrence of a small memory leak when changing routes if a lightbox component was unmounted before the elements were loaded.
- Fixed a notable bug where an instance of the lightbox was fetching the wrong sets of elements when changing a route if the previous elements were not loaded.

---

## Demo

I have provided a **full working demo** on CodeSandbox where you can also play with the options and see the lightbox in action.

[![Edit Simple-React-Lightbox§](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/simple-react-lightboxss-39wrb?fontsize=10)

I have also created a **full working website** where you can see the lightbox in action. If you want to play with the options, use the CodeSandbox link above.

[Simple React Lightbox - Demo website](https://demo.simple-react-lightbox.dev)

---

## Getting Started


#### Install

```bash
npm install --save simple-react-lightbox
```

or with Yarn

```bash
yarn add simple-react-lightbox
```

The installation for the PRO version is slightly different. You will get instructions on how to install the PRO version after the purchase on the [Simple React Lightbox - webiste](https://simple-react-lightbox.dev).


#### First step (Step 1)

First of all you need to **wrap your React app with the main component** so that it can create the context. The example below will allow you to use the **Simple React Lightbox** wherever you need it in your app:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SimpleReactLightbox from 'simple-react-lightbox'
// USE THE IMPORT BELOW INSTEAD IF YOU ARE USING THE PRO VERSION
// import SimpleReactLightbox from 'simple-react-lightbox-pro'

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <App />
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById("root")
);

export default App;
```

Note: *If you need multiple instances of the lightbox in a single page you should wrap each one with its own <SimpleReactLightbox> component. Although this approach is valid, is not recommended and you should use the composition logic that React offers (for example using multiple components each containing a gallery).*

#### Basic implementation (Step 2)

Next you want to import and use the `<SRLWrapper>` component wherever you expect the content with the images or videos. Please note the `{}` as this is a named export. The caption for the images will be generated from the [image "alt" attribute](https://www.w3schools.com/tags/tag_img.asp) so don't forget to add it. The caption for the video and audio elements is manually defined as explained in its own section.

```jsx
import { SRLWrapper } from "simple-react-lightbox";
// USE THE IMPORT BELOW INSTEAD IF YOU ARE USING THE PRO VERSION
// import { SRLWrapper } from 'simple-react-lightbox-pro'

function MyComponent() {
  return (
    <SRLWrapper>
      // This will be your content with the images.
      // It can be anything. Content defined by yourself,
      // content fetched from an API, data from a graphQL query...
    </SRLWrapper>
  );
}

export default MyComponent;
```

#### Done! But there's a lot more...

That's it 🥳 You implemented your lightbox! But you know that there are tons of [options](#options) that can be implemented? Check the options below.

![Simple React Lightbox - Default options](https://simple-react-lightbox.dev/docs/SRL_Example1_Git.jpeg)

###### The lightbox with the default options

#### Gallery with thumbnails

If you want to create a traditional gallery with some thumbnails that on click trigger the lightbox, you don't have to do anything different apart from making sure you are using a clean syntax like the one showed below.

The anchor tag will point to the full width image while the image will act as thumbnail. The captions is taken from the thumbnail. Simple React Lightbox is smart enough to recognize the link wrapping the image, ignore the thumbnails and trigger the lightbox.

```jsx
import { SRLWrapper } from "simple-react-lightbox";
// USE THE IMPORT BELOW INSTEAD IF YOU ARE USING THE PRO VERSION
// import { SRLWrapper } from 'simple-react-lightbox-pro'

function MyComponent() {
  return (
    <SRLWrapper>
      <a href="/link/to/the/full/width/image.jpg">
        <img src="/link/for/the/thumbnail/image.jpg" alt="Umbrella" />
      </a>
      <a href="/link/to/the/full/width/image_two.jpg">
        <img src="/link/for/the/thumbnail/image_two.jpg" alt="Blue sky" />
      </a>
    </SRLWrapper>
  );
}

export default MyComponent;
```

#### Using the lightbox with props

As stated, Simple React Lightbox is different from the competition. But that doesn't mean you can't use it in a more traditional way. In fact you can easily create an array with the elements that you want to pass to the lightbox and pass them using the `elements` prop.
Passing `src` is the only mandatory requirement for passing a valid element.

```jsx
import { SRLWrapper } from "simple-react-lightbox";
// USE THE IMPORT BELOW INSTEAD IF YOU ARE USING THE PRO VERSION
// import { SRLWrapper } from 'simple-react-lightbox-pro'

// Create an array of objects that you want to pass to the lightbox
const elements = [
  {
    src: 'https://my/image.jpg',
    caption: 'Lorem ipsum dolor sit amet',
    width: 1920,
    height: 'auto'
  },
  {
    src: 'https://my/second-image.jpg',
    thumbnail: 'https://my/second-image-thumbnails.jpg',
    caption: 'Commodo commodo dolore',
    width: 1024,
    height: 'auto'
  },
  {
    src: 'https://vimeo.com/458698330',
    thumbnail:
      'https://www.simple-react-lightbox.dev/docs/gallery/thumbnails/unsplash05.jpg',
    caption: 'Vimeo video',
    autoplay: false,
    showControls: true
  }
]

function MyComponent() {
  return <SRLWrapper elements={elements} />
}

export default MyComponent;
```
---
## Options
I know what you are thinking.

> "That's cool and all but the style of the lightbox doesn't match the one of my project. That's ok though. I will use your classes and override everything with my custom styles..."

⚠️ **WAIT!** ⚠️ Despite the fact that I have made sure to define class names for each part of the lightbox, I have provided all the options that you need to customize the lightbox so that you don't have to add any additional logic. **You can customize everything!**

Passing options is very simple. Just pass the options in a prop called **options** to the `<SRLWrapper>` component. I will strongly recommend to create a constant with all the options and then pass it to the component. The options are clearly broken in smaller objects so that you can easily target the option that you need. **Some options are only available on the pro version as stated in each section.**

```js
const options = {
  settings: {},
  caption: {},
  buttons: {},
  thumbnails: {},
  progressBar:{},
  translations: {}, /* PRO ONLY */
  icons: {} /* PRO ONLY */
}
```

```jsx
import React from "react";
import MyComponent from "./components/MyComponent";
// Import SRLWrapper
import {SRLWrapper} from "simple-react-lightbox";

// Create an object with the options that you want to use. The options are divided in 4 main objects. You don't need to define them all.
const options = {
  settings: {
    overlayColor: "rgb(25, 136, 124)",
    autoplaySpeed: 1500,
    transitionSpeed: 900,
  },
  buttons: {
    backgroundColor: "#1b5245",
    iconColor: "rgba(126, 172, 139, 0.8)",
  },
  caption: {
    captionColor: "#a6cfa5",
    captionFontFamily: "Raleway, sans-serif",
    captionFontWeight: "300",
    captionTextTransform: "uppercase",
  }
};

function MyComponent() {
  return (
    <div className="MyComponent">
     // Simply pass the entire object in a prop called "options"
     <SRLWrapper options={options}>
        // Your images here
      </SRLWrapper>
    </div>
  );
}

export default MyComponent;
```

![Simple React Lightbox - Default options](https://simple-react-lightbox.dev/docs/SRL_Example2_Git.jpeg)
###### The lightbox with the custom options


#### Settings options

|  **Option** |  **Type** |  **Default value** | **Description**   |
| :------------ | :------------ | :------------ | :----------------- |
|  `autoplaySpeed` |  `number`  | 3000  | Controls the auto play change interval. Set it to 0 if you don't want to use the auto play functionality and hide the button. |
|  `boxShadow` |  `string`  | none  | Sets a box shadow following the CSS convention.|
| `disableKeyboardControls`   | `boolean`   | `false`  | Disable keyboard controls. |
| `disableWheelControls`   | `boolean`   | `false`   | Disable mouse wheel controls.  |
| `disablePanzoom`   | `boolean`   | `false`  | Disable panzzom controls.  |
| `hideControlsAfter`  | `number` or `boolean`  |  false  |  Controls how long it will takes for the controls and thumbnails to be hidden. This value can't be less then 1000ms. If you want the controls and thumbnails to be always visible set this to FALSE. |
| `lightboxTransitionSpeed `   | `number`   | 0.6  | Controls the transition speed of when the lightbox is opened. **This value is in seconds ⚠️**.  |
| `lightboxTransitionTimingFunction`   | `string`   | "linear"  | Controls the transition timing function of when the lightbox is opened. Accepted values are *"linear", "easeIn","easeOut", "easeInOut","circIn", "circOut", "circInOut", "backIn", "backOut", "backInOut", "anticipate"*|
| `overlayColor` | `string` | "rgba(0, 0, 0, 0.9)"  | Controls the background color of the lightbox. |
| `slideAnimationType` | `string`  | 'fade'  | Set the type of animation. Possible values are "fade","slide","both". "Fade" is a simple fade in/out animation. "Slide" means that the image will slide left or right (depeding on the direction). This uses the spring physics animation so make sure you set the `slideSpringValues` as settings. "Both" means that the image will slide and fade. |
| ` slideSpringValues` | `array` of `number`  | `[300, 200]`  | Simulates spring physics for realistic motion. The first value in the array is **damping** (Strength of opposing force. If set to 0, spring will oscillate indefinitely so don't do it). The second value is **stiffness** (Stiffness of the spring. Higher values will create more sudden movement).  |
| `slideTransitionSpeed`   | `number`  | 0.6  | Controls the transition speed of each image (when changing from an image to another). **This value is in seconds ⚠️**. This value is going to be ignored if you use the "slide" animation type and the `slideSpringValues` settings will be used instead|
| `slideTransitionTimingFunction`   | `string`   | "linear"  | Controls the transition timing function of each image (when changing from an image to another). Accepted values are *"linear", "easeIn","easeOut", "easeInOut","circIn", "circOut", "circInOut", "backIn", "backOut", "backInOut", "anticipate"* |
| `usingPreact`   | `boolean`   | false  | Set this to TRUE if you are using Preact |


```js
const options = {
  settings: {
    autoplaySpeed: 3000,
    boxShadow: 'none',
    disableKeyboardControls: false,
    disablePanzoom: false,
    disableWheelControls: false,
    hideControlsAfter: 3000,
    lightboxTransitionSpeed: 0.3,
    lightboxTransitionTimingFunction: 'linear',
    overlayColor: 'rgba(30, 30, 30, 0.9)',
    slideAnimationType: 'fade',
    slideSpringValues: [300, 50],
    slideTransitionSpeed: 0.6,
    slideTransitionTimingFunction: 'linear',
    usingPreact: false
  }
}
```


#### Buttons options


|  **Option** |  **Type** |  **Default value** | **Description**   |
| :------------ | :------------ | :------------ | :----------------- |
|  `backgroundColor` |  `string`  | "rgba(30,30,36,0.8)"  | Controls the background color of the buttons. Any CSS Color value is valid.   |
| `iconColor`  | `string`  |  "rgba(255, 255, 255, 0.8)"  |  Controls the color of the icons inside the buttons. Any CSS Color value is valid but there is some magic 🎩 happening in here: if you use an rgba() value and set an opacity (like “0.8” as showed in the default value), when you hover with the mouse on the icon this will create a nice CSS hover effect by automatically changing the opacity to “1”, regardless the colour you choose. |
| `iconPadding`   | `string`   | "13px"   | Increases the padding between the icon and the sides of the button. The more padding you add the smaller the icon will look.  |
| `showAutoplayButton`   | `string`   | `true`  | Show / Hide the autoplay button  |
| `showCloseButton`   | `string`   | `true`  | Show / Hide the close button  |
| `showDownloadButton`   | `string`   | `true`  | Show / Hide the download button  |
| `showFullscreenButton`   | `string`   | `true`  | Show / Hide the fullscreen button  |
| `showNextButton`   | `string`   | `true`  | Show / Hide the next button  |
| `showPrevButton`   | `string`   | `true`  | Show / Hide the previous button  |
| `showThumbnailsButton`   | `string`   | `true`  | Show / Hide the button to hide the thumbnails  |
| `size`   | `string`   | "40px"  | Controls the size of the buttons |


```js
const options = {
    buttons: {
      backgroundColor: 'rgba(30,30,36,0.8)',
      iconColor: 'rgba(255, 255, 255, 0.8)',
      iconPadding: '10px',
      showAutoplayButton: true,
      showCloseButton: true,
      showDownloadButton: true,
      showFullscreenButton: true,
      showNextButton: true,
      showPrevButton: true,
      showThumbnailsButton: true,
      size: '40px'
    }
}
```


#### Caption options

If you want to use [custom captions](#custom-captions) please read the documentation below.


|  **Option** |  **Type** |  **Default value** | **Description**   |
| :------------------ | :------------ | :------------ | :----------------- |
|  `captionAlignment`  |  `string`  | "start"  | Align the caption inside its div. Accepted values are *"start", "center", "end"* |
| `captionColor`  | `string`  |  "#FFFFFF"  |  Controls the color of the caption. |
| `captionContainerPadding`    | `string`  |  "20px 0 30px 0"  | Adds padding to the div containing the caption. You can use the CSS shortened syntax like "10px 5px" which will add 10px of padding top and bottom and 5px left and right. |
| `captionFontFamily`   | `string`   | "inherit"  | Controls the font family of the caption. By default it will inherit the one from the parent element. |
| `captionFontSize`   | `string`   | "inherit"  | Controls the font size of the caption. By default it will inherit the one from the parent element. |
| `captionFontStyle`   | `string`   | "inherit"  | Controls the font style of the caption. By default it will inherit the one from the parent element. |
| `captionFontWeight`   | `string`   | "inherit"  | Controls the font weight of the caption. By default it will inherit the one from the parent element. |
| `captionTextTransform`   | `string`   | "inherit"  | Controls the "text-transform" property of the caption. By default it will inherit the one from the parent element. |
|  `showCaption` |  `boolean`  | `true`  | Show / Hide the caption. |


```js
const options = {
  // Please note that "caption" is singular
  caption: {
    captionAlignment: 'start',
    captionColor: '#FFFFFF',
    captionContainerPadding: '0',
    captionFontFamily: 'inherit',
    captionFontSize: 'inherit',
    captionFontStyle: 'inherit',
    captionFontWeight: 'inherit',
    captionTextTransform: 'inherit',
    showCaption: true
  }
}
```

#### Thumbnails options

|  **Option** |  **Type** |  **Default value** | **Description**   |
| :------------ | :------------ | :------------ | :----------------- |
|  `showThumbnails` |  `boolean`  | `true`  | Show / Hide the thumbails. |
|  `thumbnailsAlignment`  |  `string`  | "center"  | Align the thumbnails in their div. Accepted values are *"start", "center", "end", "space-between", "space-around"* |
|  `thumbnailsContainerBackgroundColor`  |  `string`  | "transparent"  | Adds a background color to the div containing the thumbnails. |
|  `thumbnailsContainerPadding`  |  `string`  | "0"  | Adds padding to the div containing the thumbnails. You can use the CSS shortened syntax like "10px 5px" which will add 10px of padding top and bottom and 5px left and right. |
|  `thumbnailsGap`  |  `string`  | "0 1px"  | Gap between the thumbnails; |
| `thumbnailsIconColor`  | `string`  |  "#ffffff"  |  In the case of a video element, you will see a "play" icon in the thumbnails. You can control the color of the icon here. |
| `thumbnailsOpacity`  | `number`  |  0.4  |  Controls the opacity of the thumbnails. |
| `thumbnailsPosition`  | `string`  | 'bottom' |  Controls where the thumbnails are going to be displayed. If displayed left and right, thumbnails will be stacked vertically. |
| `thumbnailsSize`   | `array` of `strings`   | `['100px', '80px']`  | Controls the size of the thumbnail. First value in the array is width and the second is height. |

```js
const options = {
  thumbnails: {
    showThumbnails: true,
    thumbnailsAlignment: 'center',
    thumbnailsContainerBackgroundColor: 'transparent',
    thumbnailsContainerPadding: '0',
    thumbnailsGap: '0 1px',
    thumbnailsIconColor: '#ffffff',
    thumbnailsOpacity: 0.4,
    thumbnailsPosition: 'bottom',
    thumbnailsSize: ['100px', '80px']
  }
}
```

#### Progress bar options

|  **Option** |  **Type** |  **Default value** | **Description**   |
| :------------ | :------------ | :------------ | :----------------- |
|  `backgroundColor` |  `string`  | "#f2f2f2"  | The background color of the progress bar. |
|  `fillColor` |  `string`  | "#000000"  | The fill color of the progress bar. |
|  `height` |  `string`  | "3px"  | The height of the progress bar. |
|  `showProgressBar` |  `boolean`  | `true`  | Show / Hide the progress bar. |


```js
const options = {
  progressBar: {
    backgroundColor: '#f2f2f2',
    fillColor: '#000000',
    height: '3px',
    showProgressBar: true
  }
}
```


#### Translations options (PRO only)

|  **Option** |  **Type** |  **Default value** | **Description**   |
| :------------ | :------------ | :------------ | :----------------- |
|  `autoplayText`  |  `string`  | "Play"  | The text for the play button when the lightbox is not playing |
|  `closeText`  |  `string`  | "Close"  | The text for the close button |
|  `downloadText`  |  `string`  | "Download"  | The text for the download button |
|  `fullscreenText`  |  `string`  | "Full Screen"  | The text for the full screen button |
|  `nextText`  |  `string`  | "Next"  | The text for the next slide button |
|  `previousText`  |  `string`  | "Previous"  | The text for the previous slide button |
|  `pauseText`  |  `string`  | "Pause"  | The text for the play button when the lightbox is playing |
|  `thumbnailsText`  |  `string`  | "Hide thumbnails"  | The text for the hide thumbnails button |
|  `zoomOutText`  |  `string`  | "Zoom out"  | The text for the zoom out button when the pan zoom is activate |

```js
const options = {
  translations: {
    autoplayText: 'Play',
    closeText: 'Close',
    downloadText: 'Download',
    fullscreenText: 'Full screen',
    nextText: 'Next',
    pauseText: 'Pause',
    previousText: 'Previous',
    thumbnailsText: 'Hide thumbnails',
    zoomOutText: 'Zoom Out'
  }
}
```

#### Custom icons (PRO only)

If you are using the PRO version of Simple React Lightbox, you will have access to another object in the options, called `icons` in which you can pass your custom icons as an image. Ideally you would pass a transparent PNG image but it's entirely up to you.
|  **Option** |  **Type** |  **Default value** | **Description**   |
| :------------ | :------------ | :------------ | :----------------- |
|  `autoplayIcon`  |  `string`  | null | The autoplay icon.|
|  `closeIcon`  |  `string`  | null  | The close icon.|
|  `downloadIcon`  |  `string`  | null  | The download icon. |
|  `fullscreenIcon`  |  `string`  | null  | The fullscreen icon.|
|  `nextIcon`  |  `string`  | null | The next icon. |
|  `previousIcon`  |  `string`  | null  | The previous icon. |
|  `thumbnailsIcon`  |  `string`  | null  | The thumbnails icon. |
|  `zoomOutIcon`  |  `string`  | null | The zoomOut icon. |


```js
const options = {
  icons: {
    autoplayIcon: null,
    closeIcon: null,
    downloadIcon: null,
    fullscreenIcon: null,
    nextIcon: null,
    pauseIcon: null,
    previousIcon: null,
    thumbnailsIcon: null,
    zoomOutIcon: null
  }
}
```

---
## Video and audio support
##### PRO only

If you are using the PRO version, Simple React Lightbox will add support to audio links (from SoundCloud) and videos (YouTube, Twitch, Vimeo, DailyMotion and web videos). There are some custom HTML attributes you can pass to control the video/audio element.

If you get an error from the player, you probably passed a wrong URL.
**YouTube videos for example, must be passed without the "channel"
argument for now (this will be fixed soon.)**
A valid YouTube URL will look like this: https://www.youtube.com/watch?v=aS1no1myeTM

|  **Attribute** |  **Type** |  **Default value** | **Description**   |
| :------------ | :------------ | :------------ | :----------------- |
|  `srl_video_caption`  |  `string`  | null | TDefine the caption for the video/audio.|
|  `srl_video_thumbnail`  |  `string`  | null  | Define the thumbnail for the video/audio.|
|  `srl_video_width`  |  `string`  | "100%"  | Define the width of the video if you need a custom size. Otherwise the video will adapt itself to the ratio which by default is 16/9. |
|  `srl_video_height	`  |  `string`  | "100%"  | Define the heigth of the video if you need a custom size. Otherwise the video will adapt itself to the ratio which by default is 16/9. |
|  `srl_video_ratio`  |  `string`  | "16/9" | By default videos will have a ratio of `16/9`. Another option available is `4/3` in the case of some old videos. |
|  `srl_video_scale`  |  `string`  | "60"  | If you want to keep the video with the correct ratio and just scaled it up or down you can use this value (from `0` to `100`) to scale the video accordingly. |
|  `srl_video_controls`  |  `string`  | true  | Show / Hide video/audio control where supported. |
|  `srl_video_autoplay`  |  `string`  | true | Set autoplay for the video/audio where supported. |
|  `srl_video_muted`  |  `string`  | false | Set muted for the video/audio where supported.|
|  `srl_video_loop`  |  `string`  | true | Set loop for the video/audio where supported. |

#### Web video (Mp4, Webm, Ogv)
In the case of web videos you can pass them as per usual using the HTML `video` element. In this case you will pass the custom HTML attributes to the `video` element.

```jsx
import { SRLWrapper } from "simple-react-lightbox";
// USE THE IMPORT BELOW INSTEAD IF YOU ARE USING THE PRO VERSION
// import { SRLWrapper } from 'simple-react-lightbox-pro'

function MyComponent() {
  return (
    <div className="MyComponent">
      <SRLWrapper>
        <video
          width="100%"
          height="100%"
          srl_video_thumbnail="./videos/video_thumbnail_01.jpg"
          srl_video_caption="A video with a rabbit"
          srl_video_muted="true"
        >
          <source src="./videos/bunny.mp4" type="video/mp4" />
          <source src="./videos/bunny.webm" type="video/webm" />
          <source src="./videos/bunny.ogv" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </SRLWrapper>
    </div>
  );
}

export default MyComponent;
```
If you don't want to display the `video` element and want to display a custom image, just put an image before it and hide the video using CSS.

```jsx
<SRLWrapper>
  <div>
    <img src="https://url/to/video_thumbnail.jpg" />
    <video
      srl_video_thumbnail="https://url/to/video_thumbnail.jpg"
      srl_video_caption="An epic video"
      srl_video_controls="true"
      srl_video_autoplay="true"
      srl_video_muted="true"
      style={{ display: 'none' }}
    >
      <source src="./videos/bunny.mp4" type="video/mp4" />
      <source src="./videos/bunny.webm" type="video/webm" />
      <source src="./videos/bunny.ogv" type="video/ogg" />
      Your browser does not support the video tag.
    </video>
  </div>
</SRLWrapper>
```
#### Embed Video/Audio (YouTube, Twitch, Vimeo, Dailymotion, SoundCloud)
In the case of an embed video, just wrap an image with a link to the embed video in which you will pass the custom HTML attributes.


```jsx
<SRLWrapper>
  <a
    srl_video_thumbnail="https://url/to/my_twitch_thumbnail.jpg"
    srl_video_loop="true"
    srl_video_scale="80"
    srl_video_caption="Twitch video"
    href="https://www.twitch.tv/videos/778219281"
  >
    <img src="https://url/to/my_twitch_thumbnail.jpg" />
  </a>

  <a
    srl_video_thumbnail="https://url/to/my_audio_thumbnail.jpg"
    srl_video_caption="Audio Track"
    href="https://soundcloud.com/miami-nights-1984/accelerated"
  >
    <img src="https://url/to/my_audio_thumbnail.jpg" />
  </a>
</SRLWrapper>
```
---


## Custom Captions
##### PRO only
If you want one or more image to have a fully customized caption, you can now do it by declaring an array of objects and passing it to the a prop on the `<SRLWrapper>` called `customCaptions`. Each object in the array has two values:
- `id` which is the image you want to add the custom caption to. **Remember that the id is starting from 0 so `id: 0` will target the first image, `id: 4` the fifth and so on...**
- `caption` this will contain your custom caption. You can use JSX/HTML markup and so you can have buttons, links and anything you like.

Check the example on the [demo website](https://simple-react-lightbox.dev/with-custom-captions/)

⚠️ NOTES:
- If you are using a button, or a link or anything you want clickable or selectable, **you need to add a class of `SRLCustomCaption` to every element, including children**. This is to prevent the lightbox from closing when clicking outside which is the normal behavior of the lightbox.
- All the settings about the caption are being ignored if you are using a custom caption. You dictate the style of your custom caption. Keep in mind that the caption was designed to be just that, a caption, and I am not responsible if your layout breaks for any reason (like if you put too many things in it).

```jsx
  import { SRLWrapper } from "simple-react-lightbox";
  // USE THE IMPORT BELOW INSTEAD IF YOU ARE USING THE PRO VERSION
  // import { SRLWrapper } from 'simple-react-lightbox-pro'

  // JSX can be assigned to a variable
  const captionOne = (
    <div className="SRLCustomCaption myCustomCaptionOne">
      She found herself in a <span className="SRLCustomCaption">forest...</span>
    </div>
  )
  const captionTwo = (
    <div className="SRLCustomCaption myCustomCaptionTwo">
      ...lost and wandering she had to
      <span className="SRLCustomCaption">make a choice...</span>
    </div>
  )
  const captionThree = (
    <a
      href="http://www.simple-react-lightbox.dev"
      target="__blank"
      className="SRLCustomCaption myCustomButton"
    >
      Help her make a choice
    </a>
  )

  // Create an array with the custom captions that you want to use
  const customCaptions = [
    { id: 0, caption: captionOne },
    { id: 1, caption: captionTwo },
    { id: 2, caption: captionThree }
  ]

  function MyComponent() {
    return (
      <div className="MyComponent">
      <SRLWrapper customCaptions={customCaptions}>
          {/* Your elements here (image or video/audio). Images 0,1,2 will use a custom caption.  */}
        </SRLWrapper>
      </div>
    );
  }
```

---

## Hooks
There are two hooks that you can use.
The first one is `openLightbox`. It opens the lightbox and you can pass an argument which is the index of the slide you want to open (starting from 0).If you don't provide any argument to the function the lightbox will just open it from the first image.
The second one is `closeLightbox` and you can use it to close the lightbox.

Check the [demo](#demo) to see it in action. In the example below we are creating a **reusable** React component (a button) that can open the lightbox from anywhere in your app. **Please note that from version 2.8 you need to destructure the useLightbox() hook to get the function that you need.**

```jsx
import { useLightbox } from 'simple-react-lightbox'
// USE THE IMPORT BELOW INSTEAD IF YOU ARE USING THE PRO VERSION
// import { useLightbox } from 'simple-react-lightbox-pro'

export default function Buttons() {
  const { openLightbox, closeLightbox } = useLightbox()

  return (
    <>
      <button onClick={() => openLightbox(2)}>
        Open the third image
      </button>
      <button onClick={() => openLightbox()}>
        Open the lightbox
      </button>
      <button onClick={() => closeLightbox()}>
        Close the lightbox
      </button>
    </>
  )
}
```
---

## Callbacks
Callbacks can be used in case you need to get information about the state of the lightbox or to access the different slides (images). A good example of this could be if you, for example, wanted to sync a carousel with the lightbox so that when you go through the images, your carousel is synced. (Check the example on the [demo website](https://simple-react-lightbox.dev/with-hook/) )

|  **Callback** |  **Args** | **Returns** | **Usage** | **Description**   |
| :------------ | :------------ | :------------ | :------------ | :----------------- |
|  `onSlideChange` |  `object` | `{index: integer`, `action: string}`, `slides: {previous: {}, current: {}, next: {}}` | `(object) => { console.log('object) }`  | Use this to detected when a slide changes. Gives back the current slide index, the action take (left, right or selected) and an object with the previous, current and next slide. |
|  `onLightboxOpened` |  `object` | `{currentSlide: {...}}, opened: true` | `(object) => { console.log('object) }`  | Use this to detected when the lightbox is opened. It returns an object with the current slide and another one with a key of "opened" and a value of "true".  |
|  `onLightboxClosed` |  `object` | `{currentSlide: {...}}, opened: false` | `(object) => { console.log('object) }`  | Use this to detected when the lightbox is closed. It returns an object with the current slide and another one with a key of "opened" value of "false".  |
|  `onCountSlides` |  `total` | `{totalSlide: integer}` | `(total) => { console.log('total) }`  | Use this to get the total of the slides. You can pass the total as an argument to your callback function and it will give back an integer with the total count of the slides/images on your lightbox. |

#### Yes, callbacks! But how do I use them?
Callbacks are passed with the **callbacks** prop to the SRLWrapper.
I will strongly recommend to create a constant with all of your callbacks and then pass it to the component with the prop **callbacks**.

```jsx
import { SRLWrapper } from "simple-react-lightbox";
// USE THE IMPORT BELOW INSTEAD IF YOU ARE USING THE PRO VERSION
// import { SRLWrapper } from 'simple-react-lightbox-pro'

// Create an object with the callbacks that you want to use
const callbacks = {
    onSlideChange: object => console.log(object),
    onLightboxOpened: object => console.log(object),
    onLightboxClosed: object => console.log(object),
    onCountSlides: object => console.log(object)
};

function MyComponent() {
  return (
    <div className="MyComponent">
     <SRLWrapper callbacks={callbacks}>
        // Your images here
      </SRLWrapper>
    </div>
  );
}

export default MyComponent;
```
---

## Firefox issue
I have noticed that sometimes Firefox has issues on rendering the "slide" animation. I will need to investigate this fully but I think it's related to a bug with Firefox and semi-transparent background. The solution is to change the `overlayColor` option to have a color without any transparency.
If you really want the transparency you can do a little hack and change the variable if the browser is Firefox. This only occurs rarely and especially with the "slide" animation. The "fade" animation should work perfectly regardless.

```jsx
import { SRLWrapper } from "simple-react-lightbox";
// USE THE IMPORT BELOW INSTEAD IF YOU ARE USING THE PRO VERSION
// import { SRLWrapper } from 'simple-react-lightbox-pro'

const browser = navigator.userAgent
const isFirefox = browser.indexOf('Firefox') > -1

const options = {
    settings: {
      overlayColor: isFirefox ? '#000000' : 'rgba(0,0,0,0,8)'
    }
};

function MyComponent() {
  return (
    <div className="MyComponent">
     <SRLWrapper callbacks={callbacks}>
        // Your images here
      </SRLWrapper>
    </div>
  );
}

export default MyComponent;
```


## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|Edge                                                                                                                                                                                                      | last 2 versions                                                                                                                                                                                                   | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                                     | last 2 versions                                                                                                                                                                                           |

## What the future holds 🔮

- Use TypeScript
