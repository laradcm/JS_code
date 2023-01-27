// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();


// ********** close links ************

const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    }else{
        linksContainer.style.height = 0;
    }

    console.log(linksContainer.style.height);
});


// ********** fixed navbar ************

const navbar = document.getElementById('nav');
const toLink = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
    const scrollHeight = window.scrollY;
    const navHeight = navbar.getBoundingClientRect().height;


    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');

    } else {
        navbar.classList.remove('fixed-nav');
    }
    console.log(linksContainer.style.height);
})


// ********** smooth scroll ************
// select links