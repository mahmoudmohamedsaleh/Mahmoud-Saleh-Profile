// Main JavaScript for Portfolio
document.addEventListener('DOMContentLoaded', function() {
  // Experience Card Expand/Collapse
  const expandButtons = document.querySelectorAll('.expand-btn');
  
  expandButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const card = btn.closest('.experience-card');
      const fullDescription = card.querySelector('.full-description');
      const btnText = btn.querySelector('.btn-text');
      const chevronDown = btn.querySelector('.chevron-down');
      const chevronUp = btn.querySelector('.chevron-up');
      
      if (fullDescription.classList.contains('active')) {
        fullDescription.classList.remove('active');
        btnText.textContent = 'Show more';
        chevronDown.style.display = 'block';
        chevronUp.style.display = 'none';
      } else {
        fullDescription.classList.add('active');
        btnText.textContent = 'Show less';
        chevronDown.style.display = 'none';
        chevronUp.style.display = 'block';
      }
    });
  });

  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
