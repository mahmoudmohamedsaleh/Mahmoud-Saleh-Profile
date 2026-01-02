// Theme Toggle Script
(function() {
  // Get saved theme or detect system preference
  function getPreferredTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // Apply theme immediately (before DOM loads)
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }

  // Apply on load
  applyTheme(getPreferredTheme());

  // Initialize toggle when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', function() {
        const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
      });
    }
  });
})();
