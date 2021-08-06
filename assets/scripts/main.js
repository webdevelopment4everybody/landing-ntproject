var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    // centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next-unique',
        prevEl: '.swiper-button-prev-unique',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1110: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1161: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }
});
// burger menu
var burgerMenu = document.getElementById('burger-menu-icon');
var overlay = document.getElementById('links');

burgerMenu.addEventListener('click', function() {
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
});

// close hamburger menu after click a
jQuery(document).ready(function($) {
    $('.nav-links a').on("click", function() {
        $('#burger-menu-icon').click();
    });
});

// offers accordion
jQuery(document).ready(function($) {

    $(".arrow-down").click(function() {

        $(this).toggleClass("border-radius-none");

        $(this).next(".rules-description-box").slideToggle("slow");

        $(this).find('.fa-chevron-down').toggleClass("active-loyal-program");

    });

});

// smooth scroll to sections
const links = document.querySelectorAll(".nav-links a");

for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop - 100,
        behavior: "smooth"
    });
}

// form validation

let name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const textarea = document.getElementById('message');
const nameError = document.getElementById('nameerror');
const phoneError = document.getElementById('phoneerror');
const emailError = document.getElementById('emailerror');
const messageError = document.getElementById('messageerror');
const checkboxError = document.getElementById('checkboxerror');
const form = document.getElementById('form');


form.addEventListener('submit', (e) => {
    let messages = [];
    let phone_mess = [];
    let textarea_mess = [];
    if (name.value === '' || name.value == null) {
        messages.push('Privalomas laukas');
    }
    if (messages.length > 0) {
        e.preventDefault();
        nameError.innerText = messages;
    } else {
        nameError.innerText = '';
    }
    if (phone.value === '' || phone.value == null) {
        phone_mess.push('Privalomas laukas');
    }
    if (phone_mess.length > 0) {
        e.preventDefault();
        phoneError.innerText = phone_mess.join(', ');
    } else {
        phoneError.innerText = '';
    }
    if (isNaN(phone.value)) {
        phone_mess.push('Galimi tik skaičiai');
    }
    if (phone_mess.length > 0) {
        e.preventDefault();
        phoneError.innerText = phone_mess;
    } else {
        phoneError.innerText = '';
    }
    if (textarea.value === '' || textarea.value == null) {
        textarea_mess.push('Privalomas laukas');
    }
    if (textarea_mess.length > 0) {
        e.preventDefault();
        messageError.innerText = textarea_mess;
    } else {
        messageError.innerText = '';
    }
    let emailfield = email.value;
    if (!validateEmail(emailfield)) {
        e.preventDefault();
        emailError.innerHTML = 'Įvestas neteisingas el. paštas';
    } else {
        emailError.innerHTML = '';
    }
    var isChecked = document.getElementById('confirm').checked;
    if (!isChecked) {
        e.preventDefault();
        checkboxError.innerText = 'Privalomas laukas';
    } else {
        checkboxError.innerText = '';
    }
})

function validateEmail(emailfield) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailfield).toLowerCase());
}