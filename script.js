// JavaScript for additional interactivity
const darkModeToggle = document.getElementById('dark-mode-toggle');
const sections = document.querySelectorAll('section');

darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjusted for fixed header height
            behavior: 'smooth'
        });
    });
});

// Parallax scrolling effect
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    const scrolled = window.scrollY;
    parallax.style.transform = 'translateY(' + (scrolled * 0.5) + 'px)';
});

// JavaScript for additional functionality
const scrollIndicator = document.querySelector('.scroll-indicator');
const backToTopButton = document.getElementById('back-to-top');

// Show scroll indicator as the user scrolls down the page
window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrolled / totalHeight) * 100;
    scrollIndicator.style.width = scrollPercentage + '%';
});

// Scroll to top functionality
backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show back to top button when user scrolls down, hide it when at the top
window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});