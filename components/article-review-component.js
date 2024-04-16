class AricleReviewComponent extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });

    const template = document.getElementById("article-review-template");
    const content = template.content.cloneNode(true);
     const styles = document.createElement("style");
    this.root.appendChild(content);
    this.root.appendChild(styles);

    async function loadCSS() {
      const request = await fetch("/components/article-review-component.css");
      styles.textContent = await request.text();
    }
    loadCSS();
  }

  async renderData() {
    if (this.dataset.id) {
      switch (this.dataset.id) {
        case "ddia":
          this.root.querySelector(".title").textContent =
            "Designing Data-Intensive Applications";
          this.root.querySelector(".author").textContent =
            "Martin Kleppmann";
          this.root.querySelector(".description").innerHTML =
            `Designing Data-Intensive Applications is a book that explains the principles, techniques, and practices needed to build and maintain large-scale distributed systems.
            <br>
            <br>
            Test
            `;
          break;
        case "cc":
          this.root.querySelector(".title").textContent = "Clean Code";
          this.root.querySelector(".author").textContent = "Robert C. Martin";
          this.root.querySelector(".description").textContent =
            "Clean Code is a book that introduces the disciplines, techniques, tools, and practices of true software craftsmanship.";
          break;
      };
    } else {
      alert("Invalid Product ID");
    }
  }

  connectedCallback() {
    this.renderData();
  }
}

customElements.define('article-review-component', AricleReviewComponent);