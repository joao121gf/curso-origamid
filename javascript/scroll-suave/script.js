const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event) {
    event.preventDefault();
    console.log(event)
    const href = event.currentTarget.getAttribute('href');
    console.log(href)
}

linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection)
});