document.getElementById('nav').addEventListener('click', function (e) {
    e.preventDefault();
    const target = e.target;
    if (target.classList.contains('link_a')) {
        const id = target.getAttribute('href').slice(1);
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }
});