function changePage(direction) {
    const pages = ["index.html", "Lesson_5.html", "Lesson_5_olymp.html", "Lesson_6.html"];
    
    let currentPage = window.location.href.split("/").pop();
    
    if (currentPage === "" || !pages.includes(currentPage)) {
        currentPage = "index.html"; // Default to index.html if not recognized
    }

    let currentIndex = pages.indexOf(currentPage);

    const prevButton = document.querySelector('.nav-btn.prev');
    const nextButton = document.querySelector('.nav-btn.next');

    if (currentIndex === 0) {
        prevButton.style.display = 'none'; // Hide previous button on the first page
    } else {
        prevButton.style.display = 'inline-block'; // Show previous button
    }

    if (currentIndex === pages.length - 1) {
        nextButton.style.display = 'none'; // Hide next button on the last page
    } else {
        nextButton.style.display = 'inline-block'; // Show next button
    }

    if (direction === 'prev' && currentIndex > 0) {
        window.location.href = pages[currentIndex - 1];
    } else if (direction === 'next' && currentIndex < pages.length - 1) {
        window.location.href = pages[currentIndex + 1];
    }
}

// Initial page load
document.addEventListener("DOMContentLoaded", function() {
    changePage(''); // Initialize the button visibility on page load
});
