

//one-by-one selecting every btn and adding event listener
const historyBtn = document.querySelector(".history-btn");
const visionBtn = document.querySelector(".vision-btn");
const goalsBtn = document.querySelector(".goals-btn");

historyBtn.addEventListener("click", () => {});
visionBtn.addEventListener("click", () => {});
goalsBtn.addEventListener("click", () => {});

const tabs = document.querySelectorAll(".tab");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {});
});

//in one go get the container of btns and attach only one event listener
const tabContainer = document.querySelector(".tabs");
/* tabContainer.addEventListener("click", (e) => {
    if (e.target.innerHTML === "Vision") {
        e.target.classList.add("active-btn")
        historyBtn.classList.remove("active-btn")
    } else if (e.target.innerHTML === "Goals") {
        e.target.classList.add("active-btn")
        historyBtn.classList.remove("active-btn")
        visionBtn.classList.remove("active-btn")
    } else {
        e.target.classList.add("active-btn")
        goalsBtn.classList.remove("active-btn")
        visionBtn.classList.remove("active-btn")
    }
    console.log(tabContainer.childNodes)
}); */

tabContainer.addEventListener("click", (e) => {
  for (let i = 0; i < tabs.length; i++) {
    if (e.target.innerHTML === tab.innerHTML) {
      tabs[i].classList.add("active-btn");
      articles[i].classList.add("active-article");
    } else {
        tabs[i].classList.remove("active-btn");
        articles[i].classList.remove("active-article");
    }
  }
  for (let article of articles) {
    console.log(e.target.classList, 'class list')
    console.log(e.target.className, 'class name')
    if (e.target.innerHTML.toLowerCase() === article.className) {
        article.classList.add("active-article");
    } else {
        article.classList.remove("active-article");
    }
}
});






