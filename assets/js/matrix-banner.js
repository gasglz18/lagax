// Matrix-style banner with multilingual messages
document.addEventListener('DOMContentLoaded', function() {
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
  const textElement = document.querySelector('.matrix-text');
  
  if (textElement) {
    // Cambiar el mensaje cada 5 segundos
    setInterval(function() {
      currentIndex = (currentIndex + 1) % messages.length;
      textElement.textContent = messages[currentIndex] + ' • ';
    }, 5000);
  }
});
