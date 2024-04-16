class HomepageComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
            .header-nav{
                display: flex;
                justify-content: right;
                padding-right: 40px;
            }
            
            .icon {
                padding-right: 10px;
            }

            a:link {
                text-decoration: none;
                color: unset;
            }
            
            a:visited {
                color: inherit;
            }
            </style>
            <project-gallery-component></project-gallery-component>
            <articles-gallery-component></articles-gallery-component>
        `;
    }
}

customElements.define('homepage-component', HomepageComponent);