// Inicialización de componentes Bootstrap
document.addEventListener('DOMContentLoaded', function() {
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

    console.log('✓ Bootstrap inicializado completamente');
  };

  initBootstrap();
});
