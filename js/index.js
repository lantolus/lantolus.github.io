document.addEventListener("DOMContentLoaded", function () {
  var navToggle = document.getElementById("nav-toggle");

  navToggle.addEventListener("click", function () {
    const navMain = document.getElementById("nav-main"),
      hamburger = document.getElementById("hamburger");

    if (navMain.className === "nav nav-main") {
      navMain.className = "nav nav-main" + " nav-main--open";
      hamburger.className = "hamburger" + " hamburger--open";
    } else {
      navMain.className = "nav nav-main";
      hamburger.className = "hamburger";
    }
  });
});

let leftArrow = document.querySelector(".gallery__arrow.gallery__arrow-l");
let rightArrow = document.querySelector(".gallery__arrow.gallery__arrow-r");
function loadImage(id) {
  if (id == 4) {
    rightArrow.style.display = "none";
  } else {
    rightArrow.style.display = "initial";
  }

  if (id == 1) {
    leftArrow.style.display = "none";
  } else {
    leftArrow.style.display = "block";
  }

  if (id >= 5 || id == 0) {
    return false;
  }
  var expandImg = document.getElementById("expandedImg");

  let width = screen.width;
  if (width <= 600) {
    expandImg.setAttribute("srcset", "/pics/photo-600-0" + id + ".JPG");
  } else {
    expandImg.setAttribute("srcset", "/pics/photo0" + id + ".JPG");
  }
  expandImg.parentElement.style.display = "block";
  current = id;
}

var current = 1;
function moveImage(direction) {
  if (direction == "left") {
    loadImage(current - 1);
  } else {
    loadImage(current + 1);
  }
}
