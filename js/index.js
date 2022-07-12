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

function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  // imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
  current = Number(imgs.src.charAt(imgs.src.length - 5));
}

var current = 1;
function moveImage(direction) {
  if (direction == "left") {
    console.log(direction);
    loadImage(current - 1);
  } else {
    console.log(typeof current);
    loadImage(current + 1);
  }
}

function loadImage(id) {
  // var image = document.getElementById("image" + id);
  if (id >= 5 || id == 0) {
    return false;
  }
  var image = document.getElementById("expandedImg");
  image.setAttribute("src", "/pics/photo0" + id + ".JPG");
  current = id;
}
