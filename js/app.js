// Toggle the off-canvas menu and overlay
document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.off-canvas-menu').classList.toggle('open');
    document.querySelector('.overlay').classList.toggle('open');
});

// Close the off-canvas menu and overlay when the close button is clicked
document.querySelector('.close-btn').addEventListener('click', function () {
    document.querySelector('.off-canvas-menu').classList.remove('open');
    document.querySelector('.overlay').classList.remove('open');
});

// Close the off-canvas menu and overlay when clicking outside of it
document.addEventListener('click', function (event) {
    const offCanvasMenu = document.querySelector('.off-canvas-menu');
    const menuToggle = document.querySelector('.menu-toggle');
    const overlay = document.querySelector('.overlay');

    if (!offCanvasMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        offCanvasMenu.classList.remove('open');
        overlay.classList.remove('open');
    }
});

// Close the off-canvas menu and overlay when a nav-link is clicked
document.querySelectorAll('.off-canvas-menu a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelector('.off-canvas-menu').classList.remove('open');
        document.querySelector('.overlay').classList.remove('open');
    });
});

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
const originalNavbarHeight = navbar.offsetHeight;
const offsetThreshold = originalNavbarHeight; // Offset threshold to check if navbar should be hidden
document.querySelector('main').style.paddingTop = `${originalNavbarHeight}px`;

window.addEventListener('resize', function () {
    const navbar = document.querySelector('.navbar');
    const originalNavbarHeight = navbar.offsetHeight;
    document.querySelector('main').style.paddingTop = `${originalNavbarHeight}px`;
});

window.addEventListener('scroll', function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Check if the original navbar is not visible (user has scrolled past it)
    if (scrollTop > offsetThreshold) {
        if (scrollTop > lastScrollTop) {
            // User is scrolling down
            navbar.style.top = `-${originalNavbarHeight}px`; // Hide navbar
        } else {
            // User is scrolling up
            navbar.style.top = '0'; // Show navbar
        }
    } else {
        // If user is near the top, show the navbar (reset position)
        navbar.style.top = '0';
    }

    lastScrollTop = scrollTop;
});


document.addEventListener('DOMContentLoaded', function () {
    const projectModal = document.getElementById('projectModal');
    const projectVideo = document.getElementById('projectVideo');

    projectModal.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget;
        const videoSrc = button.getAttribute('data-video-src');

        // Update the video source
        projectVideo.querySelector('source').src = videoSrc;
        projectVideo.load();
    });

    projectModal.addEventListener('hidden.bs.modal', function () {
        projectVideo.pause();
        projectVideo.currentTime = 0; // Reset video to start
    });
});
