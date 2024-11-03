const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggleButton.textContent = 
        document.body.classList.contains('dark') ? '☀️' : '🌙';
});
