document.addEventListener('DOMContentLoaded', function () {
    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
  
    darkModeToggle.addEventListener('click', function () {
      body.classList.toggle('dark-mode');
    });
  });
  