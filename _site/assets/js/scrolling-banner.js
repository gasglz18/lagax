// Scrolling Banner - Sequential Words
document.addEventListener('DOMContentLoaded', function() {
  const wordElement = document.querySelector('.animated-word');
  const words = ['Estamos', 'listos', 'para', 'servirte'];
  let currentIndex = 0;
  
  if (wordElement) {
    setInterval(function() {
      // Cambiar a la siguiente palabra
      currentIndex = (currentIndex + 1) % words.length;
      wordElement.textContent = words[currentIndex];
      
      // Reiniciar la animación
      wordElement.style.animation = 'none';
      setTimeout(function() {
        wordElement.style.animation = 'fadeInOut 0.5s ease-in-out';
      }, 10);
    }, 2000); // Cambiar cada 2 segundos
  }
});
