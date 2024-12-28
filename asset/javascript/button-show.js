const modal = document.querySelector(".modal-layout");
const modalClose = document.querySelector(".modal-close");
const modalContainer = document.querySelector(".modal-container");
const buttonShow = document.querySelectorAll(".places-list .btn");
for (const btnShow of buttonShow) {
  btnShow.addEventListener("click", (e) => {
    modal.classList.add("open");
    console.log("hi");
  });
}

modalClose.addEventListener("click", (e) => {
  modal.classList.remove("open");
});

modal.addEventListener("click", (e) => {
  modal.classList.remove("open");
});

modalContainer.addEventListener("click", (e) => {
  e.stopPropagation();
});
