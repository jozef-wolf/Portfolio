
function openNav() {
    document.getElementById("mySidenav").style.height = "10%";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.height = "0";
}

/*Parallax scrolling effect*/

let bg = document.getElementById("bg");
let earth = document.getElementById("earth");
let mountains = document.getElementById("mountains");
let text = document.getElementById("text");

window.addEventListener('scroll', function () {
    var value = window.scrollY;

    bg.style.top = value * 0.5 + 'px';
    earth.style.left = -value * 0.5 + 'px';
    earth.style.top = -value * 0.15 + 'px';
    mountains.style.top = value * 0.15 + 'px';
    text.style.top = value * 1 + 'px';

})