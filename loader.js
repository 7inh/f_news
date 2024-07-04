document.addEventListener("DOMContentLoaded", function () {
    function loadComponent(component) {
        fetch(`components/${component}/${component}.html`)
            .then((response) => response.text())
            .then((html) => {
                const container = document.querySelector(`#${component}`);
                const temp = document.createElement("template");
                temp.innerHTML = html;
                container.replaceWith(temp.content);
            })
            .catch((error) => {
                content.innerHTML =
                    "<p>Sorry, an error occurred while loading the content.</p>";
            });
    }

    function loadScript(component) {
        fetch(`components/${component}/${component}.js`)
            .then((response) => {
                if (!response.ok) {
                    return 404
                }
                return response.text();
            })
            .then((js) => {
                const script = document.createElement("script");
                script.text = js;
                document.body.appendChild(script);
            })
            .catch((error) => {
            });
    }


    [
        "logo",
        "search-bar",
        "profile-icon",
        "nav",
        "expand-nav-icon",
        "spotlight",
        "brief",
        "trending",
        "word-run",
        "word-cloud",
        "list-news-column",
        "list-news-block",
        "utility-lottery",
        "utility-weather",
        "utility-football",
        "short-video",
        "footer-summary",
        "footer-link",
        "subscribe-mail",
        "footer-contact",
        "footer-social-media",
        "copyright"
    ].forEach((component) => {
        loadComponent(component);
        try {
            loadScript(component);
        } catch (e) {
        }
    });
});
