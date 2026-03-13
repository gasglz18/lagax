// Custom form submission to Google Sheets via Apps Script
(function() {
  'use strict';
  
  const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxUYxWwA-zVP7oH8Vvbj7otRNxVAkhpnVml_bzOnO-pw6k_cj8fr55A7pJ28d8kYT_s/exec';
  const DESTINATION_EMAIL = 'direccion@lagax.shop';
  
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('lagax-custom-form');
    if (!form) return;
    
    const submitBtn = document.getElementById('submitBtn');
    const successMsg = document.getElementById('successMessage');
    const errorMsg = document.getElementById('errorMessage');
    
    form.addEventListener('submit', async function(e) {
      e.preventDefault();

      // Disable submit button
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
      errorMsg.style.display = 'none';

      try {
        const nombreInput = document.getElementById('nombre');
        const empresaInput = document.getElementById('empresa');
        const emailInput = document.getElementById('email');
        const mensajeInput = document.getElementById('mensaje');

        if (!nombreInput || !empresaInput || !emailInput || !mensajeInput) {
          throw new Error('No se encontraron todos los campos del formulario.');
        }

        const formData = {
          nombre: nombreInput.value.trim(),
          empresa: empresaInput.value.trim(),
          email: emailInput.value.trim(),
          mensaje: mensajeInput.value.trim(),
          destinoCorreo: DESTINATION_EMAIL,
          asunto: 'Nuevo mensaje de contacto - Lagax'
        };

        const controller = new AbortController();
        const timeoutId = setTimeout(function() {
          controller.abort();
        }, 15000);

        const response = await fetch(APPS_SCRIPT_URL, {
          redirect: 'follow',
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(formData),
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        const rawText = await response.text();
        let result;

        try {
          result = JSON.parse(rawText);
        } catch (parseError) {
          throw new Error('El servidor no devolvio JSON valido. Revisa el despliegue de Apps Script.');
        }

        if (result.status === 'success') {
          successMsg.style.display = 'block';
          errorMsg.style.display = 'none';
          form.reset();
          setTimeout(function() {
            successMsg.style.display = 'none';
          }, 5000);
          return;
        }

        throw new Error(result.message || 'Error desconocido');
      } catch (error) {
        console.error('Error:', error);
        errorMsg.style.display = 'block';
        successMsg.style.display = 'none';
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar';
      }
    });
  });
})();
