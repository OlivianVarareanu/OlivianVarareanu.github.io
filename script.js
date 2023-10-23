// Function to scroll to a specific element by its ID
function scrollToElement(elementId) {
    const element = document.querySelector(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Find the "Get Started" button by its class name
const getStartedButton = document.querySelector('.get-started');
getStartedButton.addEventListener('click', () => {
    scrollToElement('.creativity');
});

// Find the "About Me" button by its class name
const aboutMeButton = document.querySelector('.aboutme a');
aboutMeButton.addEventListener('click', () => {
    event.preventDefault();
    scrollToElement('.creativity');
});



const projectsLink = document.querySelector('.projects a');
        projectsLink.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link behavior
            scrollToElement('.headline');
        });

const contactButton = document.querySelector('.contact a');
        contactButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link behavior
            scrollToElement('.email-container');
        });



      let isScrolling = false;
const scrollToTopButton = document.getElementById('scrollToTop');

function hideScrollToTopButton() {
    if (!isScrolling) {
        scrollToTopButton.style.transform = 'translateY(100%)';
        setTimeout(() => {
            scrollToTopButton.style.display = 'none';
        }, 500); // Adjust the timeout value as needed (500 milliseconds for 0.5 seconds)
    }
}

function scrollEvent() {
    if (!isScrolling) {
        scrollToTopButton.style.display = 'block';
        // Add the 'show' class to trigger the animation
        scrollToTopButton.classList.add('show');
    }

    isScrolling = true;
    clearTimeout(isScrolling);

    isScrolling = setTimeout(() => {
        isScrolling = false;
        hideScrollToTopButton();
    }, 2000); // After 2 seconds of inactivity
}

window.addEventListener('scroll', scrollEvent);

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    hideScrollToTopButton();
});

// Initial hiding of the button
hideScrollToTopButton();
