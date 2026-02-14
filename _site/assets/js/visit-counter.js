// Contador de visitas elegante con CountAPI
function initVisitCounter() {
  const counterElement = document.getElementById('visit-counter');
  if (!counterElement) return;

  // Usar CountAPI para contar visitas (sin límite de frecuencia)
  fetch('https://api.countapi.xyz/hit/lagax.shop/pageviews')
    .then(response => response.json())
    .then(data => {
      const visits = data.value;
      counterElement.textContent = visits.toLocaleString('es-MX');
      counterElement.dataset.visits = visits;
    })
    .catch(error => {
      console.warn('Error al obtener contador:', error);
      // Fallback: usar localStorage
      let localVisits = parseInt(localStorage.getItem('lagax-visits')) || 0;
      localVisits++;
      localStorage.setItem('lagax-visits', localVisits);
      counterElement.textContent = localVisits.toLocaleString('es-MX');
    });
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initVisitCounter);
} else {
  initVisitCounter();
}
