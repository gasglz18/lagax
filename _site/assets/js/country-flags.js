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
  
  // Timeout para las peticiones (10 segundos)
  const TIMEOUT = 10000;
  
  // Función para fetch con timeout
  function fetchWithTimeout(url, options = {}, timeout = TIMEOUT) {
    return Promise.race([
      fetch(url, options),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Timeout')), timeout)
      )
    ]);
  }

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

  // Obtener información del país por IP con múltiples fuentes
  console.log('🌍 Obteniendo información de geolocalización...');
  
  // Intentar ipapi.co primero
  fetchWithTimeout('https://ipapi.co/json/', {}, 5000)
    .then(response => {
      if (!response.ok) throw new Error('ipapi.co falló');
      return response.json();
    })
    .then(data => {
      if (!data.country_code) throw new Error('No country_code en respuesta');
      processCountry(data.country_code, data.country_name || data.country_code);
    })
    .catch(error => {
      console.warn('❌ ipapi.co falló:', error.message);
      console.log('🔄 Intentando con API alternativa...');
      
      // Fallback: ipwhois.app (sin límite de peticiones)
      return fetchWithTimeout('http://ipwho.is/', {}, 5000)
        .then(response => response.json())
        .then(data => {
          if (data.country_code) {
            processCountry(data.country_code, data.country || data.country_code);
          } else {
            throw new Error('No country_code en API alternativa');
          }
        })
        .catch(error2 => {
          console.warn('❌ API alternativa también falló:', error2.message);
          // Último fallback: solo mostrar banderas existentes
          loadExistingFlags();
        });
    });
  
  // Función para procesar el país detectado
  function processCountry(countryCode, countryName) {
    console.log('✅ País detectado:', countryCode, '-', countryName);
    
    if (countryCode) {
      // 1. Obtener lista actual de países visitados desde la nube
      console.log('📡 Consultando países guardados en la nube...');
      fetchWithTimeout(`https://kvdb.io/${KVDB_BUCKET}/${KVDB_KEY}`, {}, 5000)
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
            fetchWithTimeout(`https://kvdb.io/${KVDB_BUCKET}/${KVDB_KEY}`, {
              method: 'POST',
              body: JSON.stringify(visitedCountries),
              headers: {
                'Content-Type': 'application/json'
              }
            }, 5000)
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
          fetchWithTimeout(`https://kvdb.io/${KVDB_BUCKET}/${KVDB_KEY}`, {
            method: 'POST',
            body: JSON.stringify([countryCode]),
            headers: {
              'Content-Type': 'application/json'
            }
          }, 5000)
            .then(() => console.log('✅ Base de datos inicializada'))
            .catch(err => console.warn('❌ Error al inicializar países:', err));
        });
    } else {
      console.warn('⚠️ No se pudo detectar código de país');
      displayFlags([]);
    }
  }
  
  // Función para cargar solo las banderas existentes (sin agregar nuevo país)
  function loadExistingFlags() {
    console.log('📡 Cargando banderas existentes sin agregar país...');
    fetchWithTimeout(`https://kvdb.io/${KVDB_BUCKET}/${KVDB_KEY}`, {}, 5000)
      .then(response => response.ok ? response.text() : '[]')
      .then(data => {
        try {
          const visitedCountries = JSON.parse(data);
          console.log('📋 Mostrando países existentes:', visitedCountries);
          displayFlags(visitedCountries);
        } catch (e) {
          console.warn('❌ Error al cargar banderas:', e);
          flagsElement.innerHTML = '<span style="font-size: 0.9rem; color: rgba(255,255,255,0.6);">🌍 Esperando visitantes...</span>';
        }
      })
      .catch(error => {
        console.warn('❌ Error de conexión:', error);
        flagsElement.innerHTML = '<span style="font-size: 0.9rem; color: rgba(255,255,255,0.6);">🌍 Conectando...</span>';
      });
  }
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCountryFlags);
} else {
  initCountryFlags();
}
