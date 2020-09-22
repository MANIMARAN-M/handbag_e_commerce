
// JavaScript Document
$(document).ready(function () {
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        auto: true,
        onSliderLoad: function () {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});


// Navbar

var navbar = document.querySelector('header')

window.onscroll = function () {

    // pageYOffset or scrollY
    if (window.pageYOffset > 80) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
}



let navIcon = document.getElementById("nav-icon1");
let menu = document.querySelector(".nav_menu");








// social icons hover

const triggers = document.querySelectorAll('.fab')
const allMenu = document.querySelectorAll('.menu_item')
const socialMenu = document.querySelectorAll('.nav_social')

function handleEnter() {
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 200);
}

function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));





navIcon.addEventListener("click", function () {



    this.classList.toggle("open")
    menu.classList.toggle("open_menu")


    allMenu.forEach((element, i) => {
        setTimeout(() => {
            element.classList.toggle("anotherclass");
        }, i * 200);
    });



});





const popMobile = document.querySelector('.pop_mobile');
const closeMobile = document.getElementById('no_button_mobile');

function mobileInsta() {
    popMobile.classList.add("open");
}

setTimeout(mobileInsta, 10440);

closeMobile.addEventListener('click', function () {
    popMobile.classList.remove("open");
});


// $('#shop-dropdown-section .dropdown-head').click(function () {
//     $('#shop-dropdown-section .dropdown-head span').toggleClass("rotate");
// });

// const selected = document.querySelector(".selected");
// const optionsContainer = document.querySelector(".options-container");

// const optionsList = document.querySelectorAll(".option");

// selected.addEventListener("click", () => {
//     optionsContainer.classList.toggle("active");
// });

// optionsList.forEach(o => {
//     o.addEventListener("click", () => {
//         selected.innerHTML = o.querySelector("label").innerHTML;
//         optionsContainer.classList.remove("active");
//     });
// });





