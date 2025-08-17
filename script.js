// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', function() {
  this.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function() {
    mobileMenuBtn.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
  if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
    mobileMenuBtn.classList.remove('active');
    navLinks.classList.remove('active');
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Filter functionality
const filterTabs = document.querySelectorAll(".filter-tab");
const projectCards = document.querySelectorAll(".project-card");

// Add data attributes to projects for filtering
const projectData = {
  "Chess Engine": ["backend", "algorithms"],
  "Netflix Clone": ["frontend", "fullstack"],
  "Distributed Cache": ["backend"],
  "Leetcode Solutions": ["algorithms"],
  "Postman Clone": ["frontend", "fullstack"],
  "Sitemap Builder": ["backend"],
  Survival2D: ["fullstack"],
  "Pulse Board": ["fullstack", "backend", "frontend"],
  "Interpreter & Compiler": ["backend", "algorithms"],
  "Advent Of Code": ["algorithms"],
};

// Set data attributes on project cards
projectCards.forEach((card) => {
  const title = card.querySelector(".project-title").textContent;
  if (projectData[title]) {
    card.setAttribute("data-categories", projectData[title].join(" "));
  }
});

filterTabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    filterTabs.forEach((t) => t.classList.remove("active"));
    this.classList.add("active");

    const filter = this.textContent.toLowerCase().replace(" ", "");

    projectCards.forEach((card) => {
      if (filter === "all") {
        card.style.display = "block";
        card.style.opacity = "1";
        card.style.transform = "scale(1)";
      } else {
        const categories = card.getAttribute("data-categories") || "";
        if (categories.includes(filter)) {
          card.style.display = "block";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 10);
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.95)";
          setTimeout(() => {
            card.style.display = "none";
          }, 300);
        }
      }
    });

    // Update grid layout for better appearance when filtered
    const visibleCards = Array.from(projectCards).filter(
      (card) =>
        filter === "all" ||
        (card.getAttribute("data-categories") || "").includes(filter)
    );

    // If no projects match the filter, show a message
    const projectSections = document.querySelectorAll(
      ".bento-grid, .project-grid"
    );
    if (visibleCards.length === 0) {
      projectSections.forEach((section) => {
        if (!section.querySelector(".no-results")) {
          const noResults = document.createElement("div");
          noResults.className = "no-results";
          noResults.textContent = "No projects found in this category.";
          noResults.style.cssText =
            "grid-column: 1 / -1; text-align: center; color: var(--text-secondary); padding: 3rem;";
          section.appendChild(noResults);
        }
      });
    } else {
      document.querySelectorAll(".no-results").forEach((msg) => msg.remove());
    }
  });
});

// Add scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all project cards
document.querySelectorAll(".project-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(card);
});
