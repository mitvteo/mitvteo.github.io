const queue = [];

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            queue.push(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.slide-in').forEach(el => observer.observe(el));

setTimeout(() => {
    document.body.classList.toggle('bgcolor2');
    setInterval(() => {
        document.body.classList.toggle('bgcolor2');
    }, 15000)
}, 100)

function enter(id) {
    document.querySelectorAll(`.${id}`).forEach(el => el.classList.add('visible'));
}

function leave(id) {
    document.querySelectorAll(`.${id}`).forEach(el => el.classList.remove('visible'));
}

setInterval(() => {
    if (queue.length > 0) {
        queue[0].classList.add('visible');
        queue.shift();
    }
}, 100);
