let prevScrollPos = window.pageYOffset;
const header = document.getElementById("main-header");

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        header.style.transform = "translateY(0)";
    } else {
        if (currentScrollPos > 80) {
            header.style.transform = "translateY(-100%)";
        }
    }
    prevScrollPos = currentScrollPos;
};

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    if (mobileMenu.classList.contains('hidden')) {
        menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
    } else {
        menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
    }
});

const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
    });
});

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
reveal();

const modal = document.getElementById('modal-privacidade');
const btnPrivacidade = document.getElementById('btn-privacidade');
const closeModal = document.getElementById('close-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalBackdrop = document.getElementById('modal-backdrop');

function openModal() {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function close() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
}

btnPrivacidade.addEventListener('click', openModal);
closeModal.addEventListener('click', close);
closeModalBtn.addEventListener('click', close);
modalBackdrop.addEventListener('click', close);