---
layout: default
title: Lagax - Tu Comercializadora
---

<div style="text-align: center; margin-top: 30px; margin-bottom: 50px;">
  <img src="LOGO%20LAGAX.jpg" alt="Logo Lagax" width="25%" style="max-width: 200px; border-radius: 15px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
</div>

# Productos y Servicios Lagax

Tu comercializadora de confianza

## Menú Principal

- [Quiénes somos](#quienes-somos)
- [Misión](#mision)
- [Visión](#vision)
- [Valores](#valores)
- [Nuestros productos y servicios](#productos-servicios)
- [Ubicaciones](#ubicaciones)
- [Contáctanos](#contactanos)

## Quiénes somos {#quienes-somos}

Somos **Lagax**, tu comercializadora de confianza. Con años de experiencia en el sector, nos dedicamos a proporcionar soluciones comerciales de alta calidad.

<style>
.info-cards-container {
  max-width: 1200px;
  margin: 50px auto;
  padding: 20px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.info-card {
  background: white;
  border-radius: 20px;
  padding: 40px 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;
}

.info-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.info-card:hover::before {
  transform: scaleX(1);
}

.info-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(102, 126, 234, 0.4);
  border-color: rgba(102, 126, 234, 0.3);
}

.info-card-icon {
  font-size: 3.5rem;
  margin-bottom: 20px;
  display: block;
  text-align: center;
  filter: drop-shadow(0 5px 10px rgba(0,0,0,0.1));
  transition: transform 0.3s ease;
}

.info-card:hover .info-card-icon {
  transform: scale(1.1) rotate(5deg);
}

.info-card-title {
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.info-card-content {
  color: #555;
  line-height: 1.8;
  text-align: center;
  font-size: 1rem;
}

.valores-card {
  grid-column: 1 / -1;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.valores-card .info-card-title {
  color: white;
  -webkit-text-fill-color: white;
}

.valores-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
  margin-top: 25px;
}

.valor-item {
  background: rgba(255,255,255,0.15);
  padding: 25px 20px;
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.2);
}

.valor-item:hover {
  background: rgba(255,255,255,0.25);
  transform: scale(1.05);
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

.valor-icon {
  font-size: 2.5rem;
  margin-bottom: 12px;
  display: block;
  filter: drop-shadow(0 3px 6px rgba(0,0,0,0.2));
}

.valor-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.valor-description {
  font-size: 0.95rem;
  opacity: 0.95;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .info-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .valores-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .info-card {
    padding: 30px 20px;
  }
  
  .info-card-icon {
    font-size: 2.8rem;
  }
  
  .info-card-title {
    font-size: 1.5rem;
  }
}
</style>

<div class="info-cards-container">
  <div class="info-grid">
    
    <div class="info-card" id="mision">
      <span class="info-card-icon">🎯</span>
      <div class="info-card-title">Misión</div>
      <div class="info-card-content">
        En Productos y Servicios Lagax proveemos partes y servicios para la industria, asegurando que cada producto cumpla con las especificaciones de calidad requeridas por el cliente, en el tiempo adecuado y en las cantidades necesarias, con el objetivo de garantizar su satisfacción mediante un enfoque de mejora continua.
      </div>
    </div>

    <div class="info-card" id="vision">
      <span class="info-card-icon">🚀</span>
      <div class="info-card-title">Visión</div>
      <div class="info-card-content">
        Ser la empresa comercializadora industrial más estratégica y confiable del país, reconocida por su alta calidad, agilidad operativa y capacidad para convertirnos en socios clave de nuestros clientes, contribuyendo a su crecimiento y a la solución eficiente de sus necesidades.
      </div>
    </div>

    <div class="info-card valores-card" id="valores">
      <span class="info-card-icon">💎</span>
      <div class="info-card-title">Nuestros Valores</div>
      <div class="valores-grid">
        
        <div class="valor-item">
          <span class="valor-icon">⚡</span>
          <div class="valor-title">Sentido de Urgencia</div>
          <div class="valor-description">Actuamos con rapidez y enfoque en resultados, priorizando las necesidades del cliente.</div>
        </div>

        <div class="valor-item">
          <span class="valor-icon">🤝</span>
          <div class="valor-title">Amabilidad</div>
          <div class="valor-description">Fomentamos relaciones basadas en el trato cordial, la empatía y el servicio.</div>
        </div>

        <div class="valor-item">
          <span class="valor-icon">💡</span>
          <div class="valor-title">Creatividad</div>
          <div class="valor-description">Buscamos soluciones innovadoras ante los retos del mercado y de nuestros clientes.</div>
        </div>

        <div class="valor-item">
          <span class="valor-icon">🎖️</span>
          <div class="valor-title">Autoexigencia</div>
          <div class="valor-description">Trabajamos con altos estándares de desempeño y calidad en cada actividad que realizamos.</div>
        </div>

        <div class="valor-item">
          <span class="valor-icon">🌟</span>
          <div class="valor-title">Respeto</div>
          <div class="valor-description">Promovemos relaciones profesionales basadas en la consideración y la colaboración mutua.</div>
        </div>

      </div>
    </div>

  </div>
</div>

## Nuestros Productos y Servicios {#productos-servicios}

Contamos con una amplia gama de productos y servicios diseñados para cubrir todas tus necesidades comerciales:

<style>
.carousel-container {
  position: relative;
  max-width: 1000px;
  margin: 40px auto;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 30px;
}

.carousel-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  background: white;
}

.carousel-slides {
  display: flex;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-slide {
  min-width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  box-sizing: border-box;
}

.carousel-slide img {
  max-width: 100%;
  max-height: 400px;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.carousel-slide:hover img {
  transform: scale(1.03);
}

.carousel-title {
  margin-top: 20px;
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.carousel-description {
  margin-top: 10px;
  font-size: 1rem;
  color: #666;
  text-align: center;
  max-width: 600px;
  line-height: 1.6;
}

.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.95);
  border: none;
  color: #667eea;
  font-size: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  z-index: 10;
}

.carousel-nav:hover {
  background: white;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 6px 20px rgba(0,0,0,0.25);
}

.carousel-nav.prev {
  left: 15px;
}

.carousel-nav.next {
  right: 15px;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 25px;
}

.carousel-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255,255,255,0.5);
  border: 2px solid white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.carousel-dot.active {
  background: white;
  transform: scale(1.3);
  box-shadow: 0 0 10px rgba(255,255,255,0.8);
}

.carousel-dot:hover {
  background: rgba(255,255,255,0.8);
  transform: scale(1.2);
}

@media (max-width: 768px) {
  .carousel-container {
    padding: 20px;
    margin: 20px 10px;
  }
  
  .carousel-slide img {
    max-height: 250px;
  }
  
  .carousel-title {
    font-size: 1.3rem;
  }
  
  .carousel-nav {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }
  
  .carousel-nav.prev {
    left: 8px;
  }
  
  .carousel-nav.next {
    right: 8px;
  }
}
</style>

<div class="carousel-container">
  <div class="carousel-wrapper">
    <div class="carousel-slides" id="carouselSlides">
      <div class="carousel-slide">
        <img src="LOGISTICA%20IMPO%20EXPORT.png" alt="Logística Impo-Export">
        <div class="carousel-title">Logística Impo-Export</div>
        <div class="carousel-description">Servicios especializados de importación y exportación, gestionamos tu logística internacional de manera remota y eficiente.</div>
      </div>
      <div class="carousel-slide">
        <img src="DISTRIBUCION.png" alt="Distribución de Productos">
        <div class="carousel-title">Distribución de Productos</div>
        <div class="carousel-description">Red de distribución confiable para hacer llegar tus productos a cualquier destino con puntualidad garantizada.</div>
      </div>
      <div class="carousel-slide">
        <img src="ASESORIAS.png" alt="Asesorías Especializadas">
        <div class="carousel-title">Asesorías Especializadas</div>
        <div class="carousel-description">Consultoría comercial experta para optimizar tus operaciones y tomar decisiones estratégicas informadas.</div>
      </div>
      <div class="carousel-slide">
        <img src="SOLDADURA%20PAILERIA.png" alt="Soldadura y Pailería">
        <div class="carousel-title">Soldadura y Pailería</div>
        <div class="carousel-description">Servicios industriales de soldadura y pailería con los más altos estándares de calidad y seguridad.</div>
      </div>
      <div class="carousel-slide">
        <img src="FINANCIERA.png" alt="Soluciones Financieras">
        <div class="carousel-title">Soluciones Financieras</div>
        <div class="carousel-description">Asesoría financiera y soluciones de pago adaptadas a las necesidades de tu negocio industrial.</div>
      </div>
    </div>
    <button class="carousel-nav prev" onclick="moveCarousel(-1)">‹</button>
    <button class="carousel-nav next" onclick="moveCarousel(1)">›</button>
  </div>
  <div class="carousel-indicators" id="carouselIndicators"></div>
</div>

<script>
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
let autoplayInterval;

// Crear indicadores
const indicatorsContainer = document.getElementById('carouselIndicators');
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('div');
  dot.className = 'carousel-dot';
  if (i === 0) dot.classList.add('active');
  dot.onclick = () => goToSlide(i);
  indicatorsContainer.appendChild(dot);
}

function updateCarousel() {
  const slidesContainer = document.getElementById('carouselSlides');
  slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  
  // Actualizar indicadores
  document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

function moveCarousel(direction) {
  currentSlide += direction;
  if (currentSlide < 0) currentSlide = totalSlides - 1;
  if (currentSlide >= totalSlides) currentSlide = 0;
  updateCarousel();
  resetAutoplay();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
  resetAutoplay();
}

function startAutoplay() {
  autoplayInterval = setInterval(() => {
    moveCarousel(1);
  }, 5000);
}

function resetAutoplay() {
  clearInterval(autoplayInterval);
  startAutoplay();
}

// Pausar autoplay al hacer hover
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.addEventListener('mouseenter', () => {
  clearInterval(autoplayInterval);
});

carouselContainer.addEventListener('mouseleave', () => {
  startAutoplay();
});

// Soporte para gestos táctiles
let touchStartX = 0;
let touchEndX = 0;

carouselContainer.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

carouselContainer.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  if (touchStartX - touchEndX > 50) {
    moveCarousel(1);
  }
  if (touchEndX - touchStartX > 50) {
    moveCarousel(-1);
  }
}

// Iniciar autoplay
startAutoplay();
</script>

## Ubicaciones {#ubicaciones}

Visítanos en nuestras sucursales ubicadas estratégicamente para servir mejor a nuestros clientes.

## Contáctanos {#contactanos}

¿Tienes preguntas o deseas conocer más sobre nuestros servicios? Ponte en contacto con nosotros:

- **Teléfono**: +34 XXX XXX XXX
- **Email**: [direccion@lagax.shop](mailto:direccion@lagax.shop)
- **Email**: [rafael.carrillo@lagax.shop](mailto:rafael.carrillo@lagax.shop)
- **Web**: www.lagax.shop

---

<style>
.contact-form { max-width: 400px; margin: 20px auto; padding: 15px; border: 1px solid #ddd; border-radius: 8px; background: #f9f9f9; }
.contact-form input, .contact-form textarea { width: 100%; padding: 8px; margin: 8px 0; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; font-family: Arial; }
.contact-form button { width: 100%; padding: 10px; background: #0066cc; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; }
.contact-form button:hover { background: #0052a3; }
</style>

<div class="contact-form">
<style>
.gform-wrap { max-width: 700px; margin: 16px auto; }
.gform-iframe { position: relative; padding-bottom: 60%; height: 0; overflow: hidden; }
.gform-iframe iframe { position: absolute; top:0; left:0; width:100%; height:100%; border:0; }
</style>

<div class="gform-wrap">
  <p style="text-align:center;margin-bottom:8px;">Formulario de contacto (Google Forms)</p>
  <div class="gform-iframe">
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc0RrW42VsccmbIpsoUJw-KAe62wWeOhCJL3N7hdqIMS9n1yA/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
  </div>
  <p style="text-align:center;margin-top:8px;font-size:0.95rem;">Si tienes problemas para enviar aquí, <a href="https://docs.google.com/forms/d/e/1FAIpQLSc0RrW42VsccmbIpsoUJw-KAe62wWeOhCJL3N7hdqIMS9n1yA/viewform" target="_blank" rel="noopener">abre el formulario en otra pestaña</a>.</p>
</div>

</div>

