class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="bigLogo">
            CoVen
        </div>`
    }
}

customElements.define("main-header", Header);