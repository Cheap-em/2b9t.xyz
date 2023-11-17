const toggleButton = document.getElementById('dark-mode-toggle');
const container = document.getElementById('container');

toggleButton.addEventListener('click', () => {
  container.classList.toggle('dark');
});
