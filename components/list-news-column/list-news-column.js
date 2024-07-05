fetch("./components/list-news-column/item-news.html")
        .then((response) => response.text())
        .then((data) => {
          document.querySelector("#list-news-column").innerHTML = data.repeat(8);
        });

document
        .getElementById("list-news-column")
        .addEventListener("click", function () {
          const htmlElement = document.documentElement;
          const currentTheme = htmlElement.getAttribute("data-theme");
          const newTheme = currentTheme === "light" ? "dark" : "light";
          htmlElement.setAttribute("data-theme", newTheme);
        });