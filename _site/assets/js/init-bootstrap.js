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

    // Inicializar dropdowns
    const dropdownElements = document.querySelectorAll('[data-bs-toggle="dropdown"]');
    console.log('✓ Dropdowns encontrados:', dropdownElements.length);
    
    dropdownElements.forEach(function(element) {
      try {
        new bootstrap.Dropdown(element, { autoClose: true });
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
          });
          
          modal.show();
          console.log('✓ Modal abierto:', targetId);
        }
      });
    });

    console.log('✓ Componentes Bootstrap inicializados');
  };

  initBootstrap();
});
