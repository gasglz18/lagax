// Manejo de scroll suave para anchors con compensación del navbar fijo
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      // Ignorar elementos sin href válido
      if (href === '#' || href === '') return;
      
      // Ignorar elementos con data-bs-toggle (dropdowns, modales, etc.)
      if (this.hasAttribute('data-bs-toggle')) return;
      
      // Ignorar links dentro de dropdowns
      if (this.classList.contains('dropdown-item')) return;
      if (this.classList.contains('dropdown-toggle')) return;
      
      const target = document.querySelector(href);
      if (!target) return;
      
      e.preventDefault();
      
      // Cerrar navbar collapsed si está abierto
      const navbar = document.querySelector('.navbar-collapse');
      if (navbar && navbar.classList.contains('show')) {
        try {
          const bsCollapse = new bootstrap.Collapse(navbar, { toggle: false });
          bsCollapse.hide();
        } catch(err) {
          console.warn('Bootstrap no está disponible');
        }
      }
      
      // Calcular la altura del navbar (aproximadamente 70px)
      const navbarHeight = 70;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
      
      // Scroll suave
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
});
