// Mostrar banderas de países visitantes
function initCountryFlags() {
  const flagsElement = document.getElementById('country-flags');
  if (!flagsElement) return;

  // Función para convertir código de país a emoji de bandera
  function countryCodeToFlag(countryCode) {
    return countryCode
      .toUpperCase()
      .split('')
      .map(char => String.fromCodePoint(127397 + char.charCodeAt()))
      .join('');
  }

  // Obtener información del país por IP
  fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
      const countryCode = data.country_code;
      const countryName = data.country_name;
      
      if (countryCode) {
        // Obtener lista de países visitados del localStorage
        let visitedCountries = JSON.parse(localStorage.getItem('visited-countries')) || [];
        
        // Agregar país actual si no está en la lista (máximo 12 banderas)
        if (!visitedCountries.includes(countryCode)) {
          visitedCountries.unshift(countryCode);
          if (visitedCountries.length > 12) {
            visitedCountries.pop();
          }
          localStorage.setItem('visited-countries', JSON.stringify(visitedCountries));
        }
        
        // Mostrar banderas
        let flagsHTML = '';
        visitedCountries.forEach(code => {
          const flag = countryCodeToFlag(code);
          flagsHTML += `<span title="Visitante de ${code}" style="font-size: 1.5rem; margin: 0 4px; cursor: pointer; transition: transform 0.2s;">${flag}</span>`;
        });
        
        flagsElement.innerHTML = flagsHTML;
        
        // Agregar efecto hover
        document.querySelectorAll('#country-flags span').forEach(flag => {
          flag.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.3)';
          });
          flag.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
          });
        });
      }
    })
    .catch(error => {
      console.warn('Error al obtener datos de geolocalización:', error);
    });
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCountryFlags);
} else {
  initCountryFlags();
}
