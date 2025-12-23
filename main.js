const burger = document.querySelector(".burger")
const nav = document.querySelector(".nav")
const dialog = document.querySelector("[data-dialog]")
const dialogOpenBtn = document.querySelector("[data-dialog-open-btn]")
const dialogCloseBtn = document.querySelector("[data-dialog-close-btn]")

burger.onclick = function () {
    nav.classList.toggle("nav_active")
    burger.classList.toggle("burger_active")
    document.body.classList.toggle("scroll-lock")
}

dialogOpenBtn.onclick = () => {
    dialog.open = true
    document.body.classList.add("scroll-lock")
}

dialogCloseBtn.onclick = () => {
    dialog.open = false
    document.body.classList.remove("scroll-lock")
}