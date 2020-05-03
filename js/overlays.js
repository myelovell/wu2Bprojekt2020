//2020-03-05,

function overlays() {
    var pickNav = document.querySelector(".nav")
    pickNav.classList.toggle("show")

    // var exitNav = document.querySelector(".exit")
    // exitNav.classList.toggle("show")
};
    var btn = document.querySelector(".btn")
    btn.addEventListener("click",overlays)

    var exit = document.querySelector(".btn.exit")
    exit.addEventListener("click",overlays)
