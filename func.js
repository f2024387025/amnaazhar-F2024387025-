// ==========================
// 1. Smooth Scroll for Menu
// ==========================
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// ==========================
// 2. Contact Form Alert
// ==========================
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // page reload rokta hai

    alert("Thank you! Your message has been sent 😊");

    form.reset(); // form clear kar deta hai
});


// ==========================
// 3. Resume Button Click
// ==========================
const resumeBtn = document.querySelector('.btn');

resumeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    alert("Resume download option coming soon 📄");
});
