let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header naV a');

window.onscroll = () => {
    sections.forEach(sec => {
       let top = window.scrollY;
       let offset = sec.offsetTop - 150;
       let height = sec.offsetHeight;
       let id = sec.getAttribute('id');


       if (top >= offset && top < offset + height) {
        navlinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
       };
    });


let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .about-content, .book, .column, .column-left img', { origin: 'top' });
ScrollReveal().reveal('.home-img, .about-img, .dot, .services-container, .drive, .portfolio-box, .more-folio, .contact form, .love, .boat', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .column-left h3', { origin: 'right' });

const typed = new Typed('.multi-text',{
    strings: ['Web Developer', 'Logo Designer', 'Programmer'],
    typeSpeed: 120,
    backSpeed: 120,
    backDelay: 800,
    loop:true
});