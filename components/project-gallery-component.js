class ProjectGalleryComponent extends HTMLElement {
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

            .gallery {
                padding-left: 80px;
                padding-right: 80px;
                padding-bottom: 50px;
            }
            
            .gallery-items {
                display: flex;
                justify-content: center;
            }
            
            .gallery-header {
                margin-bottom: 5px;
                font-size: x-large;
                font-weight: bold;
                color: dfe0e2;
            }
            
            .gallery-item {
                width: 33%;
                height: 15em;
                background-color: aaaaaa;
                margin: 4px;
            }
            
            .gallery-title {
                text-align-last: center;
                font-size: larger;
                font-weight: bold;
            }
            
            .gallery-icon {
                text-align: center;
            }
            
            .gallery-description{
                text-align: center;
                padding-left: 5px;
                padding-right: 5px;
            }
            </style>
            <div class="gallery">
            <div class="gallery-header">Projects</div>
            <div class="gallery-items">
              <div class="gallery-item">
                <p class="gallery-title">Chess Engine</p>
                <a target="_blank" href="https://github.com/AdamGriffiths31/">
                  <div class="gallery-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-github"
                      viewBox="0 0 16 16">
                      <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z">
                      </path>
                    </svg>
                  </div>
                </a>
                <p class="gallery-description">A comprehensive Chess engine written in Go that includes alpha beta
                  evaluation and LazySMP</p>
              </div>
              <div class="gallery-item">
                <p class="gallery-title">Interpreter & Compiler</p>
                <a target="_blank" href="https://github.com/AdamGriffiths31/">
                  <div class="gallery-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-github"
                      viewBox="0 0 16 16">
                      <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z">
                      </path>
                    </svg>
                  </div>
                </a>
                <p class="gallery-description">This project is a personal implementation of the code examples found in the
                  book "Writing An Interpreter In Go" and "Writing A Compiler In Go" by Thorsten Ball</p>
              </div>
              <div class="gallery-item">
                <p class="gallery-title">Leetcode</p>
                <a target="_blank" href="https://github.com/AdamGriffiths31/">
                  <div class="gallery-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-github"
                      viewBox="0 0 16 16">
                      <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z">
                      </path>
                    </svg>
                  </div>
                </a>
                <p class="gallery-description">A collection of programming challenges in a variety of languages</p>
              </div>
            </div>
          </div>
        `;
    }
}

customElements.define('project-gallery-component', ProjectGalleryComponent);