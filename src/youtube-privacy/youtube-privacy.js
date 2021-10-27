import styles from './youtube-privacy.css';

export default class YoutubePrivacy extends HTMLElement {

    showVideo = false;
    poster = null;

    get root() {
        return this.shadowRoot;
    }

    constructor() {
        super();

        this.attachShadow({mode: 'open'});
    }

    render() {
        this.root.innerHTML = this.showVideo
            ? this.templateVideo()
            : `${this.templatePrivacy()} ${this.templateStyles()}`;
    }

    getVideoSource() {
        const src = this.getAttribute('src');
        const url = new URL(src);

        url.searchParams.set('autoplay', '1');

        return url.toString();
    }

    getPosterFromSource() {
        const source = this.getAttribute('src');

        if (source) {
            const url = new URL(source);
            return `https://img.youtube.com/vi/${url.pathname.split('/').pop()}/0.jpg`;
        }

        return false;
    }

    connectedCallback() {
        if (this.hasAttribute('poster')) {
            this.poster = this.getAttribute('poster');
        } else {
            this.poster = this.getPosterFromSource();
        }

        if (this.hasAttribute('width')) {
            this._width = this.getAttribute('width');

            this.style.setProperty(
                '--youtube-privacy-width',
                this._width + 'px'
            );
        }

        if (this.hasAttribute('height')) {
            this._height = this.getAttribute('height');

            this.style.setProperty(
                '--youtube-privacy-height',
                this._height + 'px'
            );
        }

        this.render();

        this.root.querySelector('[allow]')
            .addEventListener('click', (ev) => {
                this.showVideo = true;
                this.render();
            });
    }

    templateVideo() {
        return `
            <iframe 
                part="video"
                ${this._width ? `width="${this._width}"` : ``}
                ${this._height ? `height="${this._height}"` : ''}
                src="${this.getVideoSource()}"
                title="${this.getAttribute('title') ?? ''}"
                frameborder="${this.getAttribute('frameborder') ?? 0}" 
                allow="
                    ${this.getAttribute('allow') ?? 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' }
                " ${this.hasAttribute('allowfullscreen') ? 'allowfullscreen' : ''}>
            </iframe>
        `
    }

    templateStyles() {
        return `
            <style>
                ${styles}
            </style>
        `;
    }

    templatePrivacy() {
        return `
            <div class="overlay" part="overlay">
                ${this.poster ? `
                    <img class="poster" part="poster" src="${this.poster}" alt="${this.getAttribute('title') ?? ''}" />
                ` : ``}
                
                <div class="button-container">
                    <button class="button" part="button allow" allow>
                        <svg width="68" height="48" viewBox="0 0 68 48">
                            <path class="ytp-large-play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill=""></path>
                            <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                        </svg>                  
                  </button>
                </div>
            </div>
        `;
    }
}
