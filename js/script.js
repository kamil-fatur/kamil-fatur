// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclik = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        Let top = window.scrollY;
        Let offset = sec.offsetTop - 100;
        Let height = sec.offsetHeight;
        Let id = sec.getAttribute('id');

        if(top >= offset && top <offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                dokument.querySelector('header nav a[href*=' + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky header
    Let header = dokument.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')

    // animation footer on scroll
    Let footer = dokument.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= dokument.scrollingElement.
    scrollingHeight);
}