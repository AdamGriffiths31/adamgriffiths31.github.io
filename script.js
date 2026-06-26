const REPO = "https://github.com/AdamGriffiths31/";

const PROJECTS = [
  {
    name: "Chess Engine",
    cat: "Algorithms",
    lang: "Go",
    repo: REPO + "ChessEngine",
    blurb:
      "Minimax with alpha-beta pruning, full move validation, check/checkmate detection and a tunable computer opponent.",
  },
  {
    name: "Interpreter & Compiler",
    cat: "Backend",
    lang: "Go",
    repo: REPO + "GoInterpreterCompiler",
    blurb:
      "A from-scratch interpreter and compiler in Go, following Thorsten Ball’s books.",
  },
  {
    name: "Advent Of Code",
    cat: "Algorithms",
    lang: "Go",
    repo: REPO + "AdventOfCode",
    blurb:
      "Daily December programming puzzles, solved and documented year on year.",
  },
  {
    name: "Survival2D",
    cat: "Frontend",
    lang: "GDScript",
    repo: REPO + "Survival2D",
    blurb:
      "Fast-paced 2D survival game in the Godot engine with leveling and progression.",
  },
  {
    name: "Leetcode Solutions",
    cat: "Algorithms",
    lang: "Go",
    repo: REPO + "Leetcode",
    blurb:
      "Optimized solutions to challenging algorithmic problems with detailed write-ups.",
  },
  {
    name: "Finance Flow",
    cat: "Frontend",
    lang: "TypeScript",
    repo: REPO + "finance-flow",
    blurb:
      "Financial tracking & visualization app with interactive dashboards and predictive analytics.",
  },
  {
    name: "Pulse Board",
    cat: "Full Stack",
    lang: "TypeScript",
    repo: REPO + "Pulseboard",
    blurb: "Real-time monitoring and visualization of API performance metrics.",
  },
  {
    name: "MazeMaker",
    cat: "Algorithms",
    lang: "TypeScript",
    repo: REPO + "MazeMaker",
    blurb:
      "Generates and solves mazes with animated visualization of each algorithm.",
  },
  {
    name: "JavaKV",
    cat: "Backend",
    lang: "Java",
    repo: REPO + "JavaKV",
    blurb:
      "Key-value store in Java 21 with write-ahead logging, a CLI and a full test suite.",
  },
  {
    name: "Distributed Cache",
    cat: "Backend",
    lang: "Go",
    repo: REPO + "DistributedCache",
    blurb:
      "High-performance distributed caching system built on consistent hashing.",
  },
  {
    name: "Postman Clone",
    cat: "Frontend",
    lang: "TypeScript",
    repo: REPO + "postman-clone",
    blurb:
      "REST API client with request builder, response viewer, history and syntax highlighting.",
  },
  {
    name: "Netflix Clone",
    cat: "Full Stack",
    lang: "TypeScript",
    repo: REPO + "netflix-clone",
    blurb:
      "Streaming app with authentication, video playback and personalized recommendations.",
  },
  {
    name: "Sitemap Builder",
    cat: "Backend",
    lang: "Go",
    repo: REPO + "SitemapBuilder",
    blurb: "Crawls websites and generates XML sitemaps for SEO optimization.",
  },
];

const CATEGORIES = ["All", "Backend", "Frontend", "Full Stack", "Algorithms"];
const STACK = [
  "Go",
  "C#",
  "Visual Basic",
  "TypeScript",
  "React",
  "GKE",
  "Java",
  "SQL",
];

let activeFilter = "All";

const els = {
  marquee: document.getElementById("marquee"),
  filters: document.getElementById("filters"),
  grid: document.getElementById("grid"),
  count: document.getElementById("count"),
  year: document.getElementById("year"),
};

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function shownProjects() {
  return activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.cat === activeFilter);
}

function renderMarquee() {
  els.marquee.innerHTML = "";

  // Two identical segments, each spanning at least the viewport width, with the
  // stack items spread across it (CSS min-width: 100vw + space-around). The
  // -50% keyframe shifts by exactly one segment, so the list scrolls past once
  // with no item ever appearing twice on screen at the same time.
  for (let i = 0; i < 2; i++) {
    const seg = document.createElement("div");
    seg.className = "marquee__seg";
    if (i === 1) seg.setAttribute("aria-hidden", "true");
    STACK.forEach((item) => {
      const span = document.createElement("span");
      span.textContent = item;
      seg.appendChild(span);
    });
    els.marquee.appendChild(seg);
  }
}

function renderFilters() {
  els.filters.innerHTML = "";
  CATEGORIES.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "filter" + (cat === activeFilter ? " is-active" : "");
    btn.type = "button";
    btn.textContent = cat;
    btn.setAttribute("aria-pressed", String(cat === activeFilter));
    btn.addEventListener("click", () => {
      if (activeFilter === cat) return;
      activeFilter = cat;
      render();
    });
    els.filters.appendChild(btn);
  });
}

function renderGrid() {
  const shown = shownProjects();
  els.grid.innerHTML = shown
    .map((p) => {
      // Numbering follows the project's position in the full list.
      const num = String(PROJECTS.indexOf(p) + 1).padStart(2, "0");
      return (
        '<a class="card" href="' +
        escapeHtml(p.repo) +
        '" target="_blank" rel="noreferrer">' +
        '<div class="card__top">' +
        '<span class="card__num">' +
        num +
        "</span>" +
        '<span class="card__cat">' +
        escapeHtml(p.cat) +
        "</span>" +
        "</div>" +
        '<span class="card__name">' +
        escapeHtml(p.name) +
        "</span>" +
        '<span class="card__blurb">' +
        escapeHtml(p.blurb) +
        "</span>" +
        '<div class="card__foot">' +
        '<span class="card__lang">' +
        escapeHtml(p.lang) +
        "</span>" +
        '<span class="card__link">View Code &rarr;</span>' +
        "</div>" +
        "</a>"
      );
    })
    .join("");
}

function renderCount() {
  const n = shownProjects().length;
  els.count.textContent =
    activeFilter === "All" ? n + " Repositories" : n + " / " + activeFilter;
}

function render() {
  renderFilters();
  renderGrid();
  renderCount();
}

// Smooth scrolling for in-page anchor links.
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

els.year.textContent = new Date().getFullYear();
renderMarquee();
render();
