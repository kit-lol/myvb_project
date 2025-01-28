const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const closeMenuButton = document.getElementById('close-menu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active'); // Меняет класс для бургер-меню
    sidebar.classList.toggle('open'); // Открывает или закрывает меню
    overlay.style.display = sidebar.classList.contains('open') ? 'block' : 'none'; // Отображает затемнение
});

closeMenuButton.addEventListener('click', () => {
    menuToggle.classList.remove('active'); // Убирает класс для бургер-меню
    sidebar.classList.remove('open'); // Закрывает меню
    overlay.style.display = 'none'; // Скрывает затемнение
});

// Закрытие меню при клике на затемнение
overlay.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    sidebar.classList.remove('open');
    overlay.style.display = 'none';
});