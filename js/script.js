

const openModalBtn = document.querySelector(".welcome__button");
const closeModalBtn = document.getElementById('closeModalBtn');
const modalWindow = document.querySelector('.sign-wind');

console.log('Скрипт отработал корректно')

if (openModalBtn && modalWindow) {
    console.log('2')
    openModalBtn.addEventListener("click", function(event) {
        modalWindow.removeAttribute("hidden");
    });
}

window.addEventListener("click", function(event) {
    console.log('3')
    if (event.target === modalWindow) {
        modalWindow.setAttribute("hidden", true);
    }
});
