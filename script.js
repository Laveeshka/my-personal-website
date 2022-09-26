document.getElementById('nav').addEventListener('click', function (e) {
    e.preventDefault();
    const target = e.target;
    if (target.classList.contains('link_a')) {
        const id = target.getAttribute('href').slice(1);
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }
});

const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");
const nav = document.querySelector('#nav');
const navWrap = document.querySelector('div.nav-wrap');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navigation.classList.toggle("active");
    nav.classList.toggle("active");
    navWrap.classList.toggle("active");

})

document.querySelectorAll(".link").forEach(link => link.
    addEventListener("click", () => {
        console.log("click");
        hamburger.classList.toggle("active");
        navigation.classList.toggle("active");

        nav.classList.toggle("active");
        navWrap.classList.toggle("active");
    
    }))