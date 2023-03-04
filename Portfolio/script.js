// sticky header

window.onscroll = () => {

    let header = document.querySelector('.header')
    header.classList.toggle('sticky', window.scrollY > 100)
}
// toggle menu icon
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector(".navbar")
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}