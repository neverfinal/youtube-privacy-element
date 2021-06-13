# YouTube Privacy Element

An extremely lightweight soluting to replace an existing youtube embed with a 
gdpr-conform 2-click solution using the `WebComponents` standard.

## Installation

### Using `npm`

`npm install --save @neverfinal/youtube-privacy`. 

Then include the `dist/youtube-privacy.js` script in your bundle or add it to your website.

### Using `unpkg`

Include the following script tag in the footer of your website:

```js
    <script src="https://unpkg.com/@neverfinal/youtube-privacy"></script>
```

## Usage

1. Copy the embed code from any YouTube video
```html
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/xxxxxx"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
```

2. Replace the `iframe` tag with `youtube-privacy`

```html
    <youtube-privacy width="560" height="315" src="https://www.youtube-nocookie.com/embed/xxxxxx"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </youtube-privacy>
```
