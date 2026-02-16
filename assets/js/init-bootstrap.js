// Inicialización de componentes Bootstrap
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Inicializando componentes Bootstrap...');
  
  // Esperar a que Bootstrap esté cargado
  const initBootstrap = () => {
    if (typeof bootstrap === 'undefined') {
      setTimeout(initBootstrap, 100);
      return;
    }

    console.log('✓ Bootstrap disponible');

    // ===== NAVBAR COLLAPSE MOBILE FIX =====
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');
    
    if (navbarToggler && navbarCollapse) {
      console.log('✓ Navbar toggler y collapse encontrados');
      
      // NO crear nueva instancia, dejar que Bootstrap la maneje automáticamente
      // Solo escuchar los eventos de Bootstrap
      navbarCollapse.addEventListener('show.bs.collapse', function () {
        console.log('📱 Navbar ABRIENDO...');
      });
      
      navbarCollapse.addEventListener('shown.bs.collapse', function () {
        console.log('✅ Navbar ABIERTO');
      });
      
      navbarCollapse.addEventListener('hide.bs.collapse', function () {
        console.log('📱 Navbar CERRANDO...');
      });
      
      navbarCollapse.addEventListener('hidden.bs.collapse', function () {
        console.log('✅ Navbar CERRADO');
      });
      
      // Cerrar navbar al hacer click en un link (solo en móvil)
      const navLinks = navbarCollapse.querySelectorAll('.nav-link:not(.dropdown-toggle)');
      navLinks.forEach(link => {
        link.addEventListener('click', function() {
          if (window.innerWidth < 992) { // Bootstrap lg breakpoint
            console.log('📱 Click en nav-link, cerrando navbar');
            const collapseInstance = bootstrap.Collapse.getInstance(navbarCollapse) || 
                                     new bootstrap.Collapse(navbarCollapse, { toggle: false });
            collapseInstance.hide();
          }
        });
      });
      
      console.log('✅ Navbar mobile fix aplicado (usando comportamiento nativo de Bootstrap)');
    } else {
      console.warn('⚠️ No se encontró navbar toggler o collapse');
    }

    // Inicializar dropdowns manualmente con click handlers
    const dropdownElements = document.querySelectorAll('[data-bs-toggle="dropdown"]');
    console.log('✓ Dropdowns encontrados:', dropdownElements.length);
    
    dropdownElements.forEach(function(element) {
      try {
        const dropdown = new bootstrap.Dropdown(element, { autoClose: true });
        
        // Agregar listener de click adicional
        element.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          dropdown.toggle();
          console.log('✓ Dropdown toggle:', element.textContent.trim());
        });
        
        console.log('✓ Dropdown inicializado:', element.id || element.textContent.trim());
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
            document.querySelectorAll('.modal-backdrop').forEach(backdrop => backdrop.remove());
            document.body.classList.remove('modal-open');
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
            console.log('✓ Modal cerrado, backdrop eliminado');
          }, { once: true });
          
          modal.show();
          console.log('✓ Modal abierto:', targetId);
        }
      });
    });

    console.log('✓ Componentes Bootstrap inicializados');
  };

  initBootstrap();
});

