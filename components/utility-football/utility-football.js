const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".utility-football-title");
const tabActive = $(".utility-football-title .active");
const line = $(".utility-football-header .line");
requestIdleCallback(function () {
  line.style.left = tabActive.offsetLeft + "px";
  line.style.width = tabActive.offsetWidth + "px";
});
tabs.forEach((tab, index) => {
  tab.onclick = function () {
    $(".utility-football-title.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
  };
});
