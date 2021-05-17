const btnHamMenu = document.querySelector(".header__btn-menu");
const headerNav = document.querySelector(".header__nav");

btnHamMenu.addEventListener("click", function() {
    if (headerNav.classList.contains("open")) {
        headerNav.classList.remove("open");
        headerNav.classList.add("fade-out");
        headerNav.classList.remove("fade-in");
        btnHamMenu.querySelector(".header__close-menu").classList.remove("hidden");
        btnHamMenu.querySelector(".header__hamburger").classList.add("hidden");
    } else {
        headerNav.classList.add("fade-in");
        headerNav.classList.remove("fade-out");
        headerNav.classList.add("open");
        btnHamMenu.querySelector(".header__hamburger").classList.remove("hidden");
        btnHamMenu.querySelector(".header__close-menu").classList.add("hidden");
    }
});