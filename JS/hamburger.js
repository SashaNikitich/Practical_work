document.addEventListener('DOMContentLoaded', function() {
    const leftHamburger = document.querySelector('.hamburger');
    const rightHamburger = document.querySelector('.right-menu');
    const leftSidebar = document.querySelector('.left-sidebar');
    const rightSidebar = document.querySelector('.right-sidebar');
    const overlay = document.querySelector('.overlay');

    // Left sidebar toggle
    leftHamburger.addEventListener('click', function() {
        leftHamburger.classList.toggle('active');
        leftSidebar.classList.toggle('active');
        overlay.classList.toggle('active');

        // Close right sidebar if open
        rightSidebar.classList.remove('active');
        rightHamburger.classList.remove('active');
    });

    // Right sidebar toggle
    rightHamburger.addEventListener('click', function() {
        rightHamburger.classList.toggle('active');
        rightSidebar.classList.toggle('active');
        overlay.classList.toggle('active');

        // Close left sidebar if open
        leftSidebar.classList.remove('active');
        leftHamburger.classList.remove('active');
    });

    // Close sidebars when clicking overlay
    overlay.addEventListener('click', function() {
        leftSidebar.classList.remove('active');
        rightSidebar.classList.remove('active');
        leftHamburger.classList.remove('active');
        rightHamburger.classList.remove('active');
        overlay.classList.remove('active');
    });
});