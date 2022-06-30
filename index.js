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
