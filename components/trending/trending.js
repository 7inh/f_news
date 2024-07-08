class FIcon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
          <style>
            .f-icon {
              width: 24px;
              height: 24px;
              background-repeat: no-repeat;
              background-size: 100% 100%;
              background-color: currentColor;
              mask: url(${this.getAttribute('src')}) no-repeat center / contain;
              WebkitMask: url(${this.getAttribute(
                'src'
              )}) no-repeat center / contain;
            }
          </style>
          <div class="f-icon"></div>
        `;
  }
}

customElements.define('f-icon', FIcon);
