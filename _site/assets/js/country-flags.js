// Mostrar banderas de países visitantes (almacenamiento global compartido)
function initCountryFlags() {
  const flagsElement = document.getElementById('country-flags');
  if (!flagsElement) return;

  // ID único para tu sitio en kvdb.io (almacenamiento compartido gratuito)
  const KVDB_BUCKET = 'Ap6EfdBQDbZtbVMVwRjYFN';
  const KVDB_KEY = 'lagax-countries';

  // Función para convertir código de país a emoji de bandera
  function countryCodeToFlag(countryCode) {
    return countryCode
      .toUpperCase()
      .split('')
      .map(char => String.fromCodePoint(127397 + char.charCodeAt()))
      .join('');
  }

  // Función para mostrar las banderas
  function displayFlags(countries) {
    let flagsHTML = '';
    countries.forEach(code => {
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

  // Obtener información del país por IP
  fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
      const countryCode = data.country_code;
      
      if (countryCode) {
        // 1. Obtener lista actual de países visitados desde la nube
        fetch(`https://kvdb.io/${KVDB_BUCKET}/${KVDB_KEY}`)
          .then(response => {
            if (response.ok) {
              return response.text();
            }
            return '[]'; // Si no existe, lista vacía
          })
          .then(data => {
            let visitedCountries = [];
            try {
              visitedCountries = JSON.parse(data);
            } catch (e) {
              visitedCountries = [];
            }
            
            // 2. SOLO agregar bandera si es un país DIFERENTE (no duplicar)
            const isNewCountry = !visitedCountries.includes(countryCode);
            
            if (isNewCountry) {
              // País nuevo detectado - agregar al inicio de la lista
              visitedCountries.unshift(countryCode);
              
              // Mantener máximo 15 países diferentes
              if (visitedCountries.length > 15) {
                visitedCountries.pop();
              }
              
              // 3. Guardar lista actualizada en la nube (solo si hay país nuevo)
              fetch(`https://kvdb.io/${KVDB_BUCKET}/${KVDB_KEY}`, {
                method: 'POST',
                body: JSON.stringify(visitedCountries),
                headers: {
                  'Content-Type': 'application/json'
                }
              }).catch(err => console.warn('Error al guardar países:', err));
            }
            
            // 4. Mostrar todas las banderas acumuladas (sin duplicados)
            displayFlags(visitedCountries);
          })
          .catch(error => {
            console.warn('Error al obtener países:', error);
            // Fallback: mostrar solo el país actual
            displayFlags([countryCode]);
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
