// Inicialización de componentes Bootstrap
document.addEventListener('DOMContentLoaded', function() {
  // Esperar a que Bootstrap esté cargado
  const initBootstrap = () => {
    if (typeof bootstrap === 'undefined') {
      setTimeout(initBootstrap, 100);
      return;
    }

    // Inicializar todos los dropdowns manualmente
    const dropdownElements = document.querySelectorAll('[data-bs-toggle="dropdown"]');
    dropdownElements.forEach(function(element) {
      new bootstrap.Dropdown(element);
    });

    // Asegurar que los modales funcionen
    const modalElements = document.querySelectorAll('.modal');
    modalElements.forEach(function(element) {
      new bootstrap.Modal(element);
    });

    console.log('Bootstrap inicializado correctamente');
  };

  initBootstrap();
});
