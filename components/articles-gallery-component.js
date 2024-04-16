class ArticlesGalleryComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
            a:link {
                text-decoration: none;
                color: unset;
            }
            
            a:visited {
                color: inherit;
            }

            .articles{
                padding-left: 30%;
                padding-right: 30%;
            }
            .articles-item{
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding-bottom: 30px;
            }
            
            .articles-image{
                width: 5em;
            }
            
            .articles-title{
                color: dfe0e2;
                font-size: large;
                font-weight: bold;
            }
            
            .articles-meta{
                font-size: small;
            }
            </style>
            <div class="articles">
            <a href="#" onclick="app.router.go('/articles-cc'); event.preventDefault()">
                <div class="articles-item">
                <div class="articles-data">
                    <span class="articles-title">Clean Code</span>
                    <p class="articles-description">The disciplines, techniques, tools, and practices of true software craftsmanship</p>
                    <span class="articles-meta">20/10/24</span>
                </div>
                <img class="articles-image" src="Images/CC.jpeg" alt="Clean Code">
                </div>
            </a>
            <hr>
            <a href="#" onclick="app.router.go('/articles-ddia'); event.preventDefault()">
                <div class="articles-item">
                <div class="articles-data">
                    <span class="articles-title">Designing Data-Intensive Applications</span>
                    <p class="articles-description">Comprehensive book on best practices for building a data driven application</p>
                    <span class="articles-meta">20/02/24</span>
                </div>
                <img class="articles-image" src="Images/DDIA.png" alt="Designing Data-Intensive Applications">
                </div>
            </a>
          </div>
        `;
    }
}

customElements.define('articles-gallery-component', ArticlesGalleryComponent);