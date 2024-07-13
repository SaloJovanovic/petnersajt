document.getElementById('linkovi').classList.add("nestani");

function burgerClicked() {
    const lines = document.getElementsByClassName("line")
    const burger = document.getElementById("burger-menu");
    const linkovi = document.getElementById('linkovi');
    if (linkovi.classList.contains("nestani")) {
        linkovi.classList.remove("nestani");
        lines[0].classList.add("clicked");
        lines[1].classList.add("clicked");
        lines[2].classList.add("clicked");
        burger.classList.add("clicked");
    }
    else {
        linkovi.classList.add("nestani");
        lines[0].classList.remove("clicked");
        lines[1].classList.remove("clicked");
        lines[2].classList.remove("clicked");
        burger.classList.remove("clicked");
    }
}