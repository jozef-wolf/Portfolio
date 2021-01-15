
// const openNav = document.querySelector('.menu-icon');
// openNav.addEventListener('hover', () => {
//     document.getElementById("mySidenav").style.height = "10%";
// }

// })
/* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.height = "10%";
}

/* Close/hide the sidenav */
// const closeNav = document.querySelector('')
function closeNav() {
    document.getElementById("mySidenav").style.height = "0";
}

/*Parallax scrolling effect*/

let bg = document.getElementById("bg");
let earth = document.getElementById("earth");
let mountains = document.getElementById("mountains");
let text = document.getElementById("text");

window.addEventListener('scroll', function () {
    let value = window.scrollY;

    bg.style.top = value * 0.5 + 'px';
    earth.style.left = -value * 0.5 + 'px';
    earth.style.top = -value * 0.15 + 'px';
    mountains.style.top = value * 0.40 + 'px';
    text.style.top = value * 1.1 + 'px';

})