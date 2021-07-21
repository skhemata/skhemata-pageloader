import { html, css, LitElement, property } from 'lit-element';

export class SkhemataPageloader extends LitElement {
  static get styles() {
    return css`
    :host {
      display: block;
      color: var(--skhemata-pageloader-text-color, #000);
    }

    .lds-ring {
      display: block;
      position: relative;
      width: 100px;
      height: 100px;
      margin: 0 auto;
      padding-top: 50vh;
      z-index: 999;
    }
    .lds-ring div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 80px;
      height: 80px;
      margin: 8px;
      border: 8px solid #fff;
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: #fff transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
      animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
      animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
      animation-delay: -0.15s;
    }
    #loader-overlay {
      background-color: #ccc;
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
      z-index: 9999;
    }
    @keyframes lds-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`;
  }
  

  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;
  @property({ type: String }) loadercolor = '#1976d2';

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('load', this.onLoad);
  }
  disconnectedCallback() {
    window.removeEventListener('load', this.onLoad);
    super.disconnectedCallback();
  }
  onLoad = () => {
    const loaderElement = this.shadowRoot
      ? (this.shadowRoot.querySelector('.loader-overlay') as HTMLElement)
      : null;
    if (loaderElement) {
      loaderElement.style.display = 'none';
    }
  }

  render() {
    return html`
      <div id="loader-overlay" class="loader-overlay">
        <div class="lds-ring">
          <div
            style="border-color:${this
              .loadercolor} transparent transparent transparent;"
          ></div>
          <div
            style="border-color:${this
              .loadercolor} transparent transparent transparent;"
          ></div>
          <div
            style="border-color:${this
              .loadercolor} transparent transparent transparent;"
          ></div>
          <div
            style="border-color:${this
              .loadercolor} transparent transparent transparent;"
          ></div>
        </div>
      </div>
    `;
  }
}
