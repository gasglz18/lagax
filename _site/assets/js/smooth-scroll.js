// Manejo de scroll suave para anchors con compensación del navbar fijo
document.addEventListener('DOMContentLoaded', function() {
  console.log('✓ Smooth scroll inicializado');
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      console.log('→ Click en enlace:', href, 'Clases:', this.className);
      
      // Ignorar elementos sin href válido
      if (href === '#' || href === '') {
        console.log('  ↳ Ignorado: href vacío o #');
        return;
      }
      
      // Ignorar elementos con data-bs-toggle (dropdowns, modales, etc.)
      if (this.hasAttribute('data-bs-toggle')) {
        console.log('  ↳ Ignorado: tiene data-bs-toggle');
        return;
      }
      
      // Ignorar links dentro de dropdowns
      if (this.classList.contains('dropdown-item')) {
        console.log('  ↳ Ignorado: es dropdown-item');
        return;
      }
      if (this.classList.contains('dropdown-toggle')) {
        console.log('  ↳ Ignorado: es dropdown-toggle');
        return;
      }
      
      const target = document.querySelector(href);
      if (!target) {
        console.log('  ↳ Error: target no encontrado:', href);
        return;
      }
      
      console.log('  ✓ Haciendo scroll a:', href);
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
      
      console.log('  ↳ Posición calculada:', targetPosition, 'Navbar height:', navbarHeight);
      
      // Scroll suave
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      console.log('  ✓ Scroll completado');
    });
  });
});
