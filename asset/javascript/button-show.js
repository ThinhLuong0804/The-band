const navMobile = document.getElementById("nav");
const mobileMenu = document.querySelector(".mobile-bars");
const menuItems = document.querySelectorAll("#nav li a");

// Show modal
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

// Show nav mobile
mobileMenu.onclick = function () {
  let displayValue = window.getComputedStyle(navMobile).display;

  var isClosed = displayValue === "none";

  if (isClosed) {
    navMobile.style.display = "block";
  } else {
    navMobile.style.display = "";
  }
};

// Auto close menu when choose menu
for (const menuItem of menuItems) {
  let isParentMenu =
    menuItem.nextElementSibling &&
    menuItem.nextElementSibling.classList.contains("subnav");
  console.log(isParentMenu);

  menuItem.onclick = function (e) {
    if (!isParentMenu) {
      navMobile.style.display = null;
    } else {
      e.preventDefault();
    }
  };
}
