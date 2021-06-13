# YouTube Privacy Element

Replace an existing iframe from YouTube with the "youtube-privacy" element to add 
a 2-click solution for loading YouTube videos.

## Installation

Install using `npm install --save @neverfinal/youtube-privacy`

## Usage

1. Include the `youtube-privacy.js` script in the footer of your website or bundle
it with your favorite bundler.

2. Copy the embed code from any YouTube video
```html
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/xxxxxx"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
```

3. Replace the `iframe` tag with `youtube-privacy`

```html
    <youtube-privacy width="560" height="315" src="https://www.youtube-nocookie.com/embed/xxxxxx"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </youtube-privacy>
```
