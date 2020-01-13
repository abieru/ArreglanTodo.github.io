window.sr = ScrollReveal();
/*
sr.reveal('.about-content-left', {
	duration: 2000,
	origin: 'top',
	distance: '300px'
});
*/
sr.reveal('.about-content-right', {
	duration: 2000,
	origin: 'left',
	distance: '300px'
});

sr.reveal('.header-content-right', {
	duration: 2000,
	origin: 'right',
	distance: '300px'
});


// smoth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});	
