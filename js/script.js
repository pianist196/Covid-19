// Burger
document.querySelector('.menu-icon-wrapper').onclick = function () {
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
}


const burger = document.querySelector('.menu-icon-wrapper');
const menu = document.querySelector('.header-top__nav');

burger.addEventListener('click', function () {
    menu.classList.toggle('active');
});

// Accordeon

const btns = document.querySelectorAll('.questions-item__svg');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('opened');
    });
});

// Scroll

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const blockId = anchor.getAttribute('href');
        document.querySelector('' + blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

// ArrowUp

document.querySelector('.arrowUp').onclick = function scrollUpFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () { scrollFunction() }

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.querySelector('.arrowUp').style.display = 'block';
    } else {
        document.querySelector('.arrowUp').style.display = 'none';
    }
}







