// Manejo de scroll suave para anchors con compensación del navbar fijo
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    
    if (target) {
      // Cerrar navbar collapsed si está abierto
      const navbar = document.querySelector('.navbar-collapse');
      if (navbar && navbar.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbar, { toggle: false });
        bsCollapse.hide();
      }
      
      // Calcular la altura del navbar (aproximadamente 70px)
      const navbarHeight = 70;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
      
      // Scroll suave
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});
