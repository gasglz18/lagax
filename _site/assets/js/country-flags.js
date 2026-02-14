// Mostrar banderas de países visitantes (sistema simplificado y robusto)
function initCountryFlags() {
  const flagsElement = document.getElementById('country-flags');
  if (!flagsElement) {
    console.warn('Elemento country-flags no encontrado');
    return;
  }

  console.log('🚩 Iniciando sistema de banderas de países...');

  // Usar localStorage para almacenar países visitados (simple y confiable)
  const STORAGE_KEY = 'lagax-visited-countries-v2';
  
  // Timeout para las peticiones
  const TIMEOUT = 5000;
  
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
    
    if (flagsHTML) {
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
    } else {
      flagsElement.innerHTML = '<span style="font-size: 0.9rem; color: rgba(255,255,255,0.6);">🌍 Esperando visitantes...</span>';
    }
  }
  
  // Mostrar estado de "buscando..." inmediatamente
  flagsElement.innerHTML = '<span style="font-size: 0.9rem; color: rgba(255,255,255,0.6);">🔍 Detectando país...</span>';

  // Timeout global - si después de 8 segundos no hay resultado, mostrar banderas guardadas
  setTimeout(() => {
    if (flagsElement.innerHTML.includes('Detectando país')) {
      console.log('⏱️ Timeout alcanzado, mostrando banderas guardadas...');
      showDefaultFlags();
    }
  }, 8000);

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
      
      // Fallback: ipapi.is (HTTPS, gratis, sin límite)
      return fetchWithTimeout('https://api.ipapi.is/', {}, 5000)
        .then(response => response.json())
        .then(data => {
          if (data.location && data.location.country_code) {
            processCountry(data.location.country_code, data.location.country || data.location.country_code);
          } else {
            throw new Error('No country_code en API alternativa');
          }
        })
        .catch(error2 => {
          console.warn('❌ API alternativa también falló:', error2.message);
          // Último fallback: mostrar banderas guardadas localmente
          showDefaultFlags();
        });
    });
  
  // Función para procesar el país detectado
  function processCountry(countryCode, countryName) {
    console.log('✅ País detectado:', countryCode, '-', countryName);
    
    if (!countryCode) {
      console.warn('⚠️ No se pudo detectar código de país');
      showDefaultFlags();
      return;
    }
    
    // Obtener países visitados del localStorage
    let visitedCountries = [];
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        visitedCountries = JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Error al leer localStorage:', e);
      visitedCountries = [];
    }
    
    // Agregar país actual si no existe (sin duplicados)
    const isNewCountry = !visitedCountries.includes(countryCode);
    if (isNewCountry) {
      console.log('🆕 Nuevo país detectado! Agregando:', countryCode);
      visitedCountries.unshift(countryCode);
      
      // Mantener máximo 15 países
      if (visitedCountries.length > 15) {
        visitedCountries.pop();
      }
      
      // Guardar en localStorage
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(visitedCountries));
      } catch (e) {
        console.warn('Error al guardar en localStorage:', e);
      }
      
      // Registrar país en CountAPI (compartido globalmente)
      fetch(`https://api.countapi.xyz/hit/lagax.shop/country-${countryCode}`)
        .then(r => r.json())
        .then(d => console.log(`📊 País ${countryCode} registrado globalmente:`, d.value, 'visitas'))
        .catch(err => console.warn('Error al registrar país en CountAPI:', err));
    } else {
      console.log('ℹ️ País ya existe en la lista local');
    }
    
    // Mostrar banderas
    console.log('🎌 Mostrando', visitedCountries.length, 'banderas');
    displayFlags(visitedCountries);
  }
  
  // Función para mostrar banderas por defecto
  function showDefaultFlags() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const visitedCountries = JSON.parse(stored);
        if (visitedCountries.length > 0) {
          displayFlags(visitedCountries);
          return;
        }
      } catch (e) {}
    }
    flagsElement.innerHTML = '<span style="font-size: 0.9rem; color: rgba(255,255,255,0.6);">🌍 Esperando visitantes...</span>';
  }
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCountryFlags);
} else {
  initCountryFlags();
}
