const lmode = document.querySelector(".light-mode")
const dmode = document.querySelector(".dark-mode")

function toggle(e) {
    if (e == "light") {
        dmode.style.display = "none"
        lmode.style.display = "block"
    } else {
        dmode.style.display = "block"
        lmode.style.display = "none"
    }
}