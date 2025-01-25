// Получаем элемент header
const header = document.querySelector('.header');

// Функция для добавления/удаления класса scrolled
window.addEventListener('scroll', () => {
    if (window.scrollY > 25) { // Если прокрутка больше 0
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
