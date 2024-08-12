//toggle
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navbarNav = document.querySelector(".navbar-nav");

  hamburgerMenu.addEventListener("click", function (e) {
    e.stopPropagation();
    navbarNav.classList.toggle("active");
  });

  // Klik di luar side bar untuk menghilangkan nav
  document.addEventListener("click", function (e) {
    if (!navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
  });
});
