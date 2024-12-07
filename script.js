var typed = new Typed('#element', {
    strings: ['Web Developer', 'Android Developer', 'UI/UX Designer', 'Backend Engineer'],
    typeSpeed: 50,
    backSpeed: 20,
    loop: true
});
const circleContainers = document.querySelectorAll('.roadmap');

// Intersection Observer callback
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const container = entry.target;
            const circle = container.querySelector('circle');

            // Add the animation classes
            container.classList.add('visible');
            circle.classList.add('animated');

            // Unobserve the container once animation is triggered
            observer.unobserve(container);
        }
    });
};

// Intersection Observer options
const observerOptions = {
    root: null, // Use the viewport as the root
    threshold: 0.5 // Trigger when 50% of the element is visible
};

// Create the Intersection Observer
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observe each circle container
circleContainers.forEach(container => observer.observe(container));

function toggleMenu () {
    console.log("Clicked on hamburger");
    const menu = document.body.querySelector('.small-right')
    if (menu.style.display === 'none' || menu.style.display == '') {
        menu.style.display = 'flex'
    } else {
        menu.style.display = 'none'
    }
}