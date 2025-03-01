document.addEventListener('DOMContentLoaded', function() {
    const leftHamburger = document.querySelector('.hamburger');
    const rightHamburger = document.querySelector('.right-menu');
    const leftSidebar = document.querySelector('.left-sidebar');
    const rightSidebar = document.querySelector('.right-sidebar');
    const overlay = document.querySelector('.overlay');
    const sidebarLinks = document.querySelectorAll('.sidebar ul li a'); // Отримуємо всі посилання

    // Функція для закриття сайдбарів
    function closeSidebars() {
        leftSidebar.classList.remove('active');
        rightSidebar.classList.remove('active');
        leftHamburger.classList.remove('active');
        rightHamburger.classList.remove('active');
        overlay.classList.remove('active');
    }

    // Відкриття/закриття лівого сайдбара
    leftHamburger.addEventListener('click', function() {
        leftHamburger.classList.toggle('active');
        leftSidebar.classList.toggle('active');
        overlay.classList.toggle('active');

        // Закриваємо правий сайдбар, якщо він відкритий
        rightSidebar.classList.remove('active');
        rightHamburger.classList.remove('active');
    });

    // Відкриття/закриття правого сайдбара
    rightHamburger.addEventListener('click', function() {
        rightHamburger.classList.toggle('active');
        rightSidebar.classList.toggle('active');
        overlay.classList.toggle('active');

        // Закриваємо лівий сайдбар, якщо він відкритий
        leftSidebar.classList.remove('active');
        leftHamburger.classList.remove('active');
    });

    // Закриття сайдбарів при натисканні на overlay
    overlay.addEventListener('click', closeSidebars);

    // Закриття сайдбарів при натисканні на пункт меню
    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeSidebars);
    });
});
