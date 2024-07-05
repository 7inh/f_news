document
    .getElementById("theme-toggle")
    .addEventListener("click", function () {
        const htmlElement = document.documentElement;
        const currentTheme = htmlElement.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        htmlElement.setAttribute("data-theme", newTheme);
    });