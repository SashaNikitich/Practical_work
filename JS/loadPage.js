function loadPage(page) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = pages[page] || '<h1>Сторінка не знайдена</h1>';

    document.querySelectorAll('.left-sidebar a').forEach(link => {
        if (link.getAttribute('onclick')?.includes(page)) {
            link.style.display = 'none';
        } else {
            link.style.display = 'block';
        }
    });
}