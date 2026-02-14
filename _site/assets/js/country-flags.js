// Mostrar banderas de países visitantes (almacenamiento global compartido)
function initCountryFlags() {
  const flagsElement = document.getElementById('country-flags');
  if (!flagsElement) {
    console.warn('Elemento country-flags no encontrado');
    return;
  }

  console.log('🚩 Iniciando sistema de banderas de países...');

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
    if (!countries || countries.length === 0) {
      flagsElement.innerHTML = '<span style="font-size: 0.9rem; color: rgba(255,255,255,0.6);">🌍 Esperando visitantes...</span>';
      return;
    }
    
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
  console.log('🌍 Obteniendo información de geolocalización...');
  fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
      const countryCode = data.country_code;
      console.log('✅ País detectado:', countryCode, '-', data.country_name);
      
      if (countryCode) {
        // 1. Obtener lista actual de países visitados desde la nube
        console.log('📡 Consultando países guardados en la nube...');
        fetch(`https://kvdb.io/${KVDB_BUCKET}/${KVDB_KEY}`)
          .then(response => {
            if (response.ok) {
              return response.text();
            }
            console.log('⚠️ Base de datos vacía, creando nueva...');
            return '[]'; // Si no existe, lista vacía
          })
          .then(data => {
            let visitedCountries = [];
            try {
              visitedCountries = JSON.parse(data);
              console.log('📋 Países existentes:', visitedCountries);
            } catch (e) {
              visitedCountries = [];
              console.log('⚠️ Error al parsear datos, iniciando lista nueva');
            }
            
            // 2. SOLO agregar bandera si es un país DIFERENTE (no duplicar)
            const isNewCountry = !visitedCountries.includes(countryCode);
            
            if (isNewCountry) {
              console.log('🆕 Nuevo país detectado! Agregando:', countryCode);
              // País nuevo detectado - agregar al inicio de la lista
              visitedCountries.unshift(countryCode);
              
              // Mantener máximo 15 países diferentes
              if (visitedCountries.length > 15) {
                visitedCountries.pop();
              }
              
              // 3. Guardar lista actualizada en la nube (solo si hay país nuevo)
              console.log('💾 Guardando en la nube:', visitedCountries);
              fetch(`https://kvdb.io/${KVDB_BUCKET}/${KVDB_KEY}`, {
                method: 'POST',
                body: JSON.stringify(visitedCountries),
                headers: {
                  'Content-Type': 'application/json'
                }
              })
                .then(() => console.log('✅ Guardado exitoso en la nube'))
                .catch(err => console.warn('❌ Error al guardar países:', err));
            } else {
              console.log('ℹ️ País ya existe en la lista, no se agrega duplicado');
            }
            
            // 4. Mostrar todas las banderas acumuladas (sin duplicados)
            console.log('🎌 Mostrando', visitedCountries.length, 'banderas');
            displayFlags(visitedCountries);
          })
          .catch(error => {
            console.warn('❌ Error al obtener países desde la nube:', error);
            // Fallback: mostrar solo el país actual y guardarlo
            displayFlags([countryCode]);
            // Intentar inicializar la base de datos en la nube
            console.log('🔄 Intentando inicializar base de datos...');
            fetch(`https://kvdb.io/${KVDB_BUCKET}/${KVDB_KEY}`, {
              method: 'POST',
              body: JSON.stringify([countryCode]),
              headers: {
                'Content-Type': 'application/json'
              }
            })
              .then(() => console.log('✅ Base de datos inicializada'))
              .catch(err => console.warn('❌ Error al inicializar países:', err));
          });
      } else {
        console.warn('⚠️ No se pudo detectar código de país');
        displayFlags([]);
      }
    })
    .catch(error => {
      console.warn('❌ Error al obtener datos de geolocalización:', error);
      flagsElement.innerHTML = '<span style="font-size: 0.9rem; color: rgba(255,255,255,0.6);">🌍 Conectando...</span>';
    });
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCountryFlags);
} else {
  initCountryFlags();
}
