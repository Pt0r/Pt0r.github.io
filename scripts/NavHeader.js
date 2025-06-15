class NavHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav> 
            <div>
                <a href="/index.html">
                    Home
                </a>
            </div>                    
            <div>
                <a href="/pages/about.html">
                    About
                </a>
            </div>                  
            <div>
                <a href="/pages/talents.html">
                    Talent
                </a>
            </div>                    
            <div>
                <a href="/pages/shop.html">
                    Shop
                </a>
            </div>                    
        </nav>`
    }
}

customElements.define("nav-header", NavHeader);
