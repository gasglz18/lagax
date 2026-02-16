---
layout: default
title: Lagax - Tu Comercializadora
---

<div class="lagax-logo-container">
  <img src="LOGO%20LAGAX.jpg" loading="lazy" alt="Logo Lagax" class="lagax-logo">
</div>

<div class="hero-card">
  <h1 class="hero-title">Productos y Servicios Lagax</h1>
  <h2 class="hero-subtitle">Tu Comercializadora de Confianza</h2>
  <div class="hero-divider"></div>
  <h3 class="hero-section-title" id="quienes-somos">Quiénes somos</h3>
  <p class="hero-description">Somos <strong>Lagax</strong>, tu comercializadora de confianza. Con años de experiencia en el sector, nos dedicamos a proporcionar soluciones comerciales de alta calidad.</p>
</div>

<style>
.lagax-logo-container {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 50px;
}

.lagax-logo {
  width: 25%;
  max-width: 200px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s ease, filter 0.4s ease;
  cursor: pointer;
  display: inline-block;
}

.lagax-logo:hover {
  transform: translateY(-15px) scale(1.15);
  box-shadow: 0 20px 50px rgba(102, 126, 234, 0.6), 0 0 30px rgba(118, 75, 162, 0.3);
  filter: brightness(1.1) drop-shadow(0 10px 20px rgba(102, 126, 234, 0.5));
}

/* Hero Card - Estilo flotante */
.hero-card {
  max-width: 900px;
  margin: 40px auto;
  padding: 50px 40px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.15);
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

.hero-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, var(--primary-color, #667eea) 0%, var(--secondary-color, #764ba2) 100%);
}

.hero-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.25);
  border-color: rgba(102, 126, 234, 0.3);
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 15px;
  letter-spacing: 1px;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #666;
  font-weight: 500;
  margin-bottom: 25px;
  font-style: italic;
}

.hero-divider {
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  margin: 30px auto;
  border-radius: 2px;
}

.hero-section-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  max-width: 700px;
  margin: 0 auto;
}

.dark-mode .hero-card {
  background: var(--bg-dark, #1a202c);
  color: var(--text-light, #f7fafc);
}

.dark-mode .hero-subtitle {
  color: rgba(255, 255, 255, 0.7);
}

.dark-mode .hero-description {
  color: rgba(255, 255, 255, 0.8);
}

@media (max-width: 768px) {
  .hero-card {
    padding: 30px 25px;
    margin: 20px 15px;
  }
  
  .hero-title {
    font-size: 1.8rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .hero-section-title {
    font-size: 1.4rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
}

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

<h2 class="hero-section-title">Nuestros Productos y Servicios</h2>

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

@media (max-width: 768px) {
  .carousel-container {
    padding: 20px;
    margin: 20px 10px;
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
        <img src="LOGISTICA%20IMPO%20EXPORT.png" loading="lazy" alt="Logística Impo-Export">
        <div class="carousel-title">Logística Impo-Export</div>
        <div class="carousel-description">Servicios especializados de importación y exportación, gestionamos tu logística internacional de manera remota y eficiente.</div>
      </div>
      <div class="carousel-slide">
        <img src="DISTRIBUCION.png" loading="lazy" alt="Distribución de Productos">
        <div class="carousel-title">Distribución de Productos</div>
        <div class="carousel-description">Red de distribución confiable para hacer llegar tus productos a cualquier destino con puntualidad garantizada.</div>
      </div>
      <div class="carousel-slide">
        <img src="ASESORIAS.png" loading="lazy" alt="Asesorías Especializadas">
        <div class="carousel-title">Asesorías Especializadas</div>
        <div class="carousel-description">Consultoría comercial experta para optimizar tus operaciones y tomar decisiones estratégicas informadas.</div>
      </div>
      <div class="carousel-slide">
        <img src="SOLDADURA%20PAILERIA.png" loading="lazy" alt="Soldadura y Pailería">
        <div class="carousel-title">Soldadura y Pailería</div>
        <div class="carousel-description">Servicios industriales de soldadura y pailería con los más altos estándares de calidad y seguridad.</div>
      </div>
      <div class="carousel-slide">
        <img src="FINANCIERA.png" loading="lazy" alt="Soluciones Financieras">
        <div class="carousel-title">Soluciones Financieras</div>
        <div class="carousel-description">Asesoría financiera y soluciones de pago adaptadas a las necesidades de tu negocio industrial.</div>
      </div>
      <div class="carousel-slide">
        <img src="SOFTWARE.jpg" loading="lazy" alt="Desarrollo de Software">
        <div class="carousel-title">Desarrollo de Software</div>
        <div class="carousel-description">Desarrollo de páginas web, desarrollo de aplicaciones móviles y software a la medida del cliente.</div>
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
  }, 8500);
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

<div class="hero-card ubicaciones-hero">
  <h2 class="hero-title">Ubicaciones</h2>
  <h3 class="hero-subtitle">Nuestras Áreas de Servicio</h3>
  <div class="hero-divider"></div>
  <p class="hero-description">En <strong>Lagax</strong> brindamos servicios de <strong>comercialización industrial, importación y exportación</strong> en las principales ciudades del centro y noreste de México:</p>
</div>

<style>
.ubicaciones-hero {
  margin-bottom: 50px;
}

.ubicaciones-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin: 30px 0;
}

.ubicacion-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 30px 25px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s ease, filter 0.4s ease;
  text-align: center;
  cursor: pointer;
}

.ubicacion-card:hover {
  transform: translateY(-15px) scale(1.05);
  box-shadow: 0 20px 50px rgba(102, 126, 234, 0.6), 0 0 30px rgba(118, 75, 162, 0.3);
  filter: brightness(1.1) drop-shadow(0 10px 20px rgba(102, 126, 234, 0.5));
}

@media (max-width: 768px) {
  .ubicaciones-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>

<div class="ubicaciones-grid" id="ubicaciones">
  <div class="ubicacion-card">
    <span class="ubicacion-icon">📍</span>
    <div class="ubicacion-ciudad">Monterrey</div>
    <div class="ubicacion-estado">Nuevo León</div>
    <div class="ubicacion-servicios">Importación • Exportación • Logística • Distribución Industrial</div>
  </div>
  
  <div class="ubicacion-card">
    <span class="ubicacion-icon">📍</span>
    <div class="ubicacion-ciudad">Saltillo</div>
    <div class="ubicacion-estado">Coahuila</div>
    <div class="ubicacion-servicios">Comercialización • Impo-Export • Asesorías • Servicios Industriales</div>
  </div>
  
  <div class="ubicacion-card">
    <span class="ubicacion-icon">📍</span>
    <div class="ubicacion-ciudad">Torreón</div>
    <div class="ubicacion-estado">Coahuila</div>
    <div class="ubicacion-servicios">Distribución • Exportación • Logística • Soluciones Comerciales</div>
  </div>
  
  <div class="ubicacion-card">
    <span class="ubicacion-icon">📍</span>
    <div class="ubicacion-ciudad">Aguascalientes</div>
    <div class="ubicacion-estado">Aguascalientes</div>
    <div class="ubicacion-servicios">Impo-Export • Logística Internacional • Asesorías Comerciales</div>
  </div>
</div>

<div class="hero-card servicios-hero" id="productos-servicios">
  <h3 class="hero-section-title">Servicios Disponibles en Toda la Región</h3>
  <div class="hero-divider"></div>
  <p class="hero-description" style="margin-bottom: 20px;">Como <strong>comercializadora industrial</strong> líder, ofrecemos:</p>
  

  
  <div class="servicios-list">
    <div class="servicio-item">🌍 <strong>Importación y Exportación</strong> con seguimiento completo</div>
    <div class="servicio-item"> <strong>Asesorías comerciales</strong> personalizadas</div>
    <div class="servicio-item">🔧 <strong>Servicios de soldadura y pailería</strong></div>
    <div class="servicio-item">💰 <strong>Asesoría financiera</strong> a empresas</div>
    <div class="servicio-item">💻 <strong>Soluciones de Software</strong> a la medida del cliente</div>
  </div>
  
  <p class="hero-description" style="margin-top: 30px; font-style: italic; color: #667eea;">Contáctanos para conocer cómo podemos ayudarte con tus necesidades de comercialización.</p>
</div>

<style>
.servicios-hero {
  margin: 50px auto;
}

.servicios-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
  text-align: left;
  max-width: 800px;
  margin: 0 auto;
}

.servicio-item {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #555;
  padding: 10px 15px;
  border-left: 3px solid #667eea;
  background: rgba(102, 126, 234, 0.05);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.servicio-item:hover {
  background: rgba(102, 126, 234, 0.1);
  transform: translateX(5px);
  border-left-color: #764ba2;
}

.dark-mode .servicio-item {
  color: rgba(255, 255, 255, 0.9);
  background: rgba(102, 126, 234, 0.15);
}

.dark-mode .servicio-item:hover {
  background: rgba(102, 126, 234, 0.25);
}

@media (max-width: 768px) {
  .servicios-list {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  
  .servicio-item {
    font-size: 0.95rem;
  }
}
</style>

## Contáctanos {#contactanos}

¿Tienes preguntas o deseas conocer más acerca de nuestros servicios? Contáctanos:

- **Email**: [direccion@lagax.shop](mailto:direccion@lagax.shop)
- **Email**: [w.alfaro@lagax.shop](mailto:w.alfaro@lagax.shop)
- **Web**: www.lagax.shop

---

<div class="custom-form-container">
  <form id="lagax-custom-form" class="lagax-form" style="padding: 50px 40px; background: #fff; border-radius: 20px; box-shadow: 0 10px 40px rgba(102, 126, 234, 0.15); border: 2px solid transparent; position: relative; overflow: hidden; max-width: 100%;">
    <div style="content: ''; position: absolute; top: 0; left: 0; right: 0; height: 5px; background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);"></div>
    <h3 style="font-size: 2rem; font-weight: 700; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 15px; text-align: center; letter-spacing: 0.5px;">Formulario de Contacto</h3>
    <p style="text-align: center; color: #555; font-size: 1.1rem; margin-bottom: 30px; line-height: 1.6;">Completa el siguiente formulario y nos pondremos en contacto contigo lo antes posible.</p>
    
    <div class="form-grid">
      <div class="form-group">
        <label for="nombre">Nombre <span class="required">*</span></label>
        <input type="text" id="nombre" name="nombre" autocomplete="name" required>
      </div>
      
      <div class="form-group">
        <label for="email">Correo electrónico <span class="required">*</span></label>
        <input type="email" id="email" name="email" autocomplete="email" required>
      </div>
      
      <div class="form-group">
        <label for="telefono">Número de teléfono <span class="required">*</span></label>
        <input type="tel" id="telefono" name="telefono" autocomplete="tel" required>
      </div>
      
      <div class="form-group">
        <label for="horario">¿A qué hora lo podemos contactar y qué medio? <span class="required">*</span></label>
        <input type="text" id="horario" name="horario" autocomplete="off" required placeholder="Ej: Por la tarde, WhatsApp">
      </div>
      
      <div class="form-group full-width">
        <label for="direccion">Ciudad/País <span class="required">*</span></label>
        <textarea id="direccion" name="direccion" autocomplete="street-address" rows="2" required></textarea>
      </div>
      
      <div class="form-group full-width">
        <label for="presupuesto">¿Cuál es su rango de precio deseado y presupuesto? <span class="required">*</span></label>
        <textarea id="presupuesto" name="presupuesto" autocomplete="off" rows="2" required></textarea>
      </div>
      
      <div class="form-group full-width">
        <label for="necesidad">¿Cuál es su necesidad? <span class="required">*</span></label>
        <textarea id="necesidad" name="necesidad" autocomplete="off" rows="3" required></textarea>
      </div>
    </div>
    
    <div class="form-messages">
      <div id="successMessage" class="success-message" style="display: none;">
        <i class="fas fa-check-circle"></i> ¡Gracias! Tu mensaje ha sido enviado exitosamente. Nos pondremos en contacto contigo pronto.
      </div>
      <div id="errorMessage" class="error-message" style="display: none;">
        <i class="fas fa-exclamation-circle"></i> Hubo un problema al enviar el formulario. <a href="https://docs.google.com/forms/d/e/1FAIpQLSc0RrW42VsccmbIpsoUJw-KAe62wWeOhCJL3N7hdqIMS9n1yA/viewform" target="_blank" rel="noopener">Prueba aquí</a>.
      </div>
    </div>
    
    <button type="submit" id="submitBtn" class="submit-btn">
      <i class="fas fa-paper-plane"></i> Enviar
    </button>
  </form>
</div>

