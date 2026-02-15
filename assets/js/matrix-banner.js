// Matrix-style banner with multilingual messages - v2
(function() {
  'use strict';
  
  const messages = [
    'Estamos listos para servirte',  // Español
    'We are ready to serve you',      // Inglés
    '我们随时为您服务',                // Chino
    'हम आपकी सेवा के लिए तैयार हैं',   // Hindi
    'نحن على استعداد لخدمتك',         // Árabe
    'Estamos prontos para servi-lo',  // Portugués
    'আমরা আপনার সেবা করতে প্রস্তুত',    // Bengalí
    'Мы готовы служить вам',          // Ruso
    '私たちはあなたに奉仕する準備ができています', // Japonés
    'Nous sommes prêts à vous servir' // Francés
  ];
  
  let currentIndex = 0;
  
  function updateAllTexts() {
    const textElements = document.querySelectorAll('.matrix-text');
    if (textElements.length > 0) {
      currentIndex = (currentIndex + 1) % messages.length;
      textElements.forEach(function(element) {
        element.textContent = messages[currentIndex] + ' • ';
      });
      console.log('Idioma actualizado a: ' + messages[currentIndex]);
    }
  }
  
  // Esperar a que el DOM esté completamente cargado
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setInterval(updateAllTexts, 5000);
    });
  } else {
    setInterval(updateAllTexts, 5000);
  }
})();
