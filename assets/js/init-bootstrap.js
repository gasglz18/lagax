// Inicialización de componentes Bootstrap y navegación
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Inicializando sitio...');
  
  // Esperar a que Bootstrap esté cargado
  const initBootstrap = () => {
    if (typeof bootstrap === 'undefined') {
      setTimeout(initBootstrap, 100);
      return;
    }

    console.log('✓ Bootstrap cargado');

    // Inicializar dropdowns manualmente
    const dropdownElements = document.querySelectorAll('[data-bs-toggle="dropdown"]');
    console.log('✓ Dropdowns encontrados:', dropdownElements.length);
    
    dropdownElements.forEach(function(element) {
      try {
        // Crear instancia del dropdown
        const dropdown = new bootstrap.Dropdown(element, {
          autoClose: true
        });
        
        // Agregar listener de click adicional
        element.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          dropdown.toggle();
          console.log('✓ Dropdown toggle:', element.textContent.trim());
        });
        
        console.log('✓ Dropdown inicializado:', element.id);
      } catch(err) {
        console.error('✗ Error inicializando dropdown:', err);
      }
    });

    // Inicializar modales con limpieza de backdrop
    const modalTriggers = document.querySelectorAll('[data-bs-toggle="modal"]');
    console.log('✓ Modal triggers encontrados:', modalTriggers.length);
    
    modalTriggers.forEach(function(trigger) {
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-bs-target');
        const modalElement = document.querySelector(targetId);
        
        if (modalElement) {
          const modal = new bootstrap.Modal(modalElement, {
            backdrop: true,
            keyboard: true
          });
          
          // Limpiar backdrop al cerrar
          modalElement.addEventListener('hidden.bs.modal', function () {
            // Remover todos los backdrops
            document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
              backdrop.remove();
            });
            // Restaurar scroll del body
            document.body.classList.remove('modal-open');
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
            console.log('✓ Modal cerrado y backdrop eliminado');
          });
          
          modal.show();
          console.log('✓ Modal abierto:', targetId);
        }
      });
    });

    // Inicializar navegación con smooth scroll
    initSmoothScroll();

    console.log('✓ Bootstrap inicializado completamente');
  };

  // Función de smooth scroll
  function initSmoothScroll() {
    console.log('✓ Inicializando smooth scroll...');
    
    const navLinks = document.querySelectorAll('a.nav-link[href^="#"]');
    console.log('✓ Enlaces de navegación encontrados:', navLinks.length);
    
    navLinks.forEach(function(link) {
      // Ignorar dropdowns
      if (link.hasAttribute('data-bs-toggle')) {
        console.log('  ↳ Ignorando (dropdown):', link.textContent.trim());
        return;
      }
      
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        console.log('→ Click en:', this.textContent.trim(), 'href:', href);
        
        if (href === '#' || !href) {
          console.log('  ↳ Ignorado: href vacío');
          return;
        }
        
        const target = document.querySelector(href);
        if (!target) {
          console.error('  ✗ Target no encontrado:', href);
          return;
        }
        
        e.preventDefault();
        console.log('  ✓ Target encontrado, haciendo scroll...');
        
        // Cerrar navbar si está abierto
        const navbar = document.querySelector('.navbar-collapse');
        if (navbar && navbar.classList.contains('show')) {
          try {
            const bsCollapse = new bootstrap.Collapse(navbar, { toggle: false });
            bsCollapse.hide();
          } catch(err) {
            console.warn('Error cerrando navbar:', err);
          }
        }
        
        // Calcular posición
        const navbarHeight = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        console.log('  ↳ Scrolling a posición:', targetPosition);
        
        // Hacer scroll
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        setTimeout(() => {
          console.log('  ✓ Scroll completado');
        }, 500);
      });
      
      console.log('  ✓ Listener agregado a:', link.textContent.trim());
    });
  }

  initBootstrap();
});
