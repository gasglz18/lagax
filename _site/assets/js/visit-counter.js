// Contador de visitas con almacenamiento híbrido (localStorage + API externa opcional)
function initVisitCounter() {
  const counterElement = document.getElementById('visit-counter');
  if (!counterElement) return;

  // Obtener de localStorage primero (rápido y confiable)
  let localVisits = parseInt(localStorage.getItem('lagax-visits')) || 1;
  
  // Registrar esta visita
  const lastVisit = localStorage.getItem('lagax-last-visit');
  const today = new Date().toDateString();
  
  // Solo incrementar una vez por día
  if (lastVisit !== today) {
    localVisits++;
    localStorage.setItem('lagax-visits', localVisits);
    localStorage.setItem('lagax-last-visit', today);
  }
  
  // Mostrar contador local inmediatamente (sin esperas)
  counterElement.textContent = localVisits.toLocaleString('es-MX');
  counterElement.dataset.visits = localVisits;
  
  // Intentar obtener de API externa de forma asincrónica (sin bloquear)
  // Intentamos con múltiples servicios en caso de que uno no funcione
  tryExternalCounters(localVisits);
}

// Intentar obtener datos de APIs externas (sin que afecte si fallan)
function tryExternalCounters(localCount) {
  // Opción 1: Visitor API (mejor CORS)
  const visitorCountKey = 'lagax-visitor-sync';
  const lastSync = localStorage.getItem(visitorCountKey);
  const today = new Date().toDateString();
  
  // Sincronizar solo cada 24 horas para no sobrecargar APIs
  if (lastSync !== today) {
    // Intentar con Visitor API (recomendado para CORS)
    fetch('https://visitor-count-badge.herokuapp.com/count?site=lagax.shop&increment', {
      method: 'GET',
      mode: 'no-cors'
    })
    .then(() => {
      localStorage.setItem(visitorCountKey, today);
    })
    .catch(() => {
      // Falla silenciosamente, no afecta la experiencia del usuario
      console.debug('External counter sync skipped');
    });
  }
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initVisitCounter);
} else {
  initVisitCounter();
}
