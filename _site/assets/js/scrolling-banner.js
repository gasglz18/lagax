// Scrolling Banner JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const banner = document.querySelector('.banner-track');
  
  if (banner) {
    // Forzar que la animación esté activa
    banner.style.animation = 'marquee 25s linear infinite';
    
    // Verificar que la animación se esté ejecutando
    setTimeout(() => {
      const computedStyle = window.getComputedStyle(banner);
      console.log('Animación activa:', computedStyle.animation);
    }, 100);
  }
});
