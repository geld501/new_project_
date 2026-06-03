

const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalWindow = document.querySelector('.sign-wind');

console.log('Скрипт отработал корректно')

if (openModalBtn && modalWindow) {
    console.log('2')
    openModalBtn.addEventListener("click", function(event) {
        modalWindow.removeAttribute("hidden");
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
