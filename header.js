function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Закрытие меню при клике вне его
window.onclick = function(event) {
  if (!event.target.matches('.drop_down svg')) {
      const menu = document.getElementById('menu');
      if (menu.style.display === 'block') {
          menu.style.display = 'none';
      }
  }
}