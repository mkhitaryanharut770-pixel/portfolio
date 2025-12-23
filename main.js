const burger = document.querySelector(".burger")
const nav = document.querySelector(".nav")

burger.onclick = function () {
    nav.classList.toggle("nav_active")
    burger.classList.toggle("burger_active")
    document.body.classList.toggle("scroll-lock")
}