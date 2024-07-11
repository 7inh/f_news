fetch("./components/list-news-column/item-news.html")
        .then((response) => response.text())
        .then((data) => {
          document.querySelector("#list-news-column").innerHTML = data.repeat(4);
        });