const Router = {
    init: () => {
        document.querySelectorAll("a.navlink").forEach((link) => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const route = link.getAttribute("href");
                Router.go(route);
            });
        });

        window.addEventListener("popstate", (e) => {
            Router.go(e.state.route, false);
        });

        Router.go(location.pathname);
    },
    go: (route, addToHistory = true) => {
        console.log("Navigating to: ", route);
        if (addToHistory) {
            history.pushState({ route }, null, route);
        }

        let pageElement = null
        switch (route) {
            case "/":
                pageElement = document.createElement("homepage-component");
                break;
            default:
                if (route.startsWith("/articles-")) {
                    pageElement = document.createElement("article-review-component");
                    const routeID = route.split("-")[1];
                    pageElement.dataset.id = routeID;
                }
        }

        if (pageElement) {
            const main = document.querySelector("main");
            main.innerHTML = "";
            main.appendChild(pageElement);
            window.scrollTo(0, 0);
        }
    },
}

export default Router;