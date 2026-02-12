---
layout: default
title: Lagax - Tu Comercializadora
---

<div style="text-align: center; margin-top: -20px; margin-bottom: 20px;">
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

## Misión {#mision}

Proporcionar soluciones comerciales de alta calidad, confiables y oportunas que superen las expectativas de nuestros clientes.

## Visión {#vision}

Ser la comercializadora preferida y más confiable del mercado, reconocida por nuestra excelencia y compromiso con nuestros clientes.

## Valores {#valores}

- **Confianza** - Somos una empresa transparente y confiable
- **Calidad** - Nuestros productos y servicios son de la más alta calidad
- **Compromiso** - Nos comprometemos con el éxito de nuestros clientes
- **Transparencia** - Operamos con total honestidad y claridad

## Nuestros Productos y Servicios {#productos-servicios}

Contamos con una amplia gama de productos y servicios diseñados para cubrir todas tus necesidades comerciales:

- Distribución de productos
- Asesoría comercial
- Soluciones logísticas
- Servicios especializados

## Ubicaciones {#ubicaciones}

Visítanos en nuestras sucursales ubicadas estratégicamente para servir mejor a nuestros clientes.

## Contáctanos {#contactanos}

¿Tienes preguntas o deseas conocer más sobre nuestros servicios? Ponte en contacto con nosotros:

- **Teléfono**: +34 XXX XXX XXX
- **Email**: [direccion@lagax.shop](mailto:direccion@lagax.shop)
- **Web**: www.lagax.shop

---

<style>
.contact-form { max-width: 400px; margin: 20px auto; padding: 15px; border: 1px solid #ddd; border-radius: 8px; background: #f9f9f9; }
.contact-form input, .contact-form textarea { width: 100%; padding: 8px; margin: 8px 0; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; font-family: Arial; }
.contact-form button { width: 100%; padding: 10px; background: #0066cc; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; }
.contact-form button:hover { background: #0052a3; }
</style>

<div class="contact-form">
<form id="contactForm" action="https://formspree.io/f/xpwgzldj" method="POST">
  <label><strong>Teléfono</strong></label>
  <input type="tel" name="Teléfono" required>

  <label><strong>Empresa</strong></label>
  <input type="text" name="Empresa" required>

  <label><strong>Correo</strong></label>
  <input type="email" name="Correo" required>

  <label><strong>Ubicación</strong></label>
  <input type="text" name="Ubicación" placeholder="Ciudad, País" required>

  <label><strong>Mensaje</strong></label>
  <textarea name="Mensaje" rows="4" placeholder="Escribe tu mensaje aquí" required></textarea>

  <button type="submit">Enviar</button>
</form>

<div id="contactResult" style="max-width:400px;margin:12px auto;text-align:center;"></div>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contactForm');
  var result = document.getElementById('contactResult');
  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    var btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    var originalText = btn.textContent;
    btn.textContent = 'Enviando...';
    var data = new FormData(form);
    try {
      var resp = await fetch(form.action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } });
      if (resp.ok) {
        result.innerHTML = '<p style="padding:10px;background:#e6ffed;border:1px solid #b9f5d0;border-radius:6px;">Gracias, tu mensaje fue enviado. Te contactaremos pronto.</p>';
        form.reset();
      } else {
        var json = await resp.json();
        throw new Error(json.error || 'Error al enviar');
      }
    } catch (err) {
      result.innerHTML = '<p style="padding:10px;background:#ffecec;border:1px solid #f5c6cb;border-radius:6px;color:#a94442;">No se pudo enviar. Intenta de nuevo más tarde.</p>';
      btn.disabled = false;
      btn.textContent = originalText;
    }
  });
});
</script>
</div>
