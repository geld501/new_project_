

const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalWindow = document.querySelector('.sign-wind');

const card = document.querySelector('.dialog-card1');
const next1but = document.querySelector('.strel');

console.log('Скрипт отработал корректно')

if (openModalBtn && modalWindow) {
    console.log('2')
    openModalBtn.addEventListener("click", function(event) {
        modalWindow.removeAttribute("hidden");
    });
}

if (card && next1but && card.getAttribute("hidden")) {
    console.log('5')
    next1but.addEventListener("click", function(event) {
        card.removeAttribute("hidden");
    });
}

if (card && next1but && !card.getAttribute("hidden")) {
    console.log('6')
    next1but.addEventListener("click", function(event) {
        card.setAttribute("hidden");
    });
}

if (closeModalBtn && modalWindow) {
    console.log('4')
    closeModalBtn.addEventListener("click", function(event) {
        modalWindow.setAttribute("hidden", true)
    });
}

window.addEventListener("click", function(event) {
    console.log('3')
    if (event.target === modalWindow) {
        modalWindow.setAttribute("hidden", true);
    }
});
