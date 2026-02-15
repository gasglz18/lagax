// Custom form submission to Google Sheets via Apps Script
(function() {
  'use strict';
  
  const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwA8siBlH6RvFj8OgKuot-StMsCQ1INdytCOT6ycyFTfM0xtak4jNFQsoQjP9k6aiQC/exec';
  
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('lagax-custom-form');
    if (!form) return;
    
    const submitBtn = document.getElementById('submitBtn');
    const successMsg = document.getElementById('successMessage');
    const errorMsg = document.getElementById('errorMessage');
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Disable submit button
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
      
      // Get form data
      const formData = {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        direccion: document.getElementById('direccion').value,
        telefono: document.getElementById('telefono').value,
        presupuesto: document.getElementById('presupuesto').value,
        horario: document.getElementById('horario').value,
        necesidad: document.getElementById('necesidad').value
      };
      
      // Send to Google Sheets via Apps Script
      fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      .then(function() {
        // Show success message
        successMsg.style.display = 'block';
        errorMsg.style.display = 'none';
        form.reset();
        
        // Re-enable button after a delay
        setTimeout(function() {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar';
          successMsg.style.display = 'none';
        }, 5000);
      })
      .catch(function(error) {
        // Show error message
        console.error('Error:', error);
        errorMsg.style.display = 'block';
        successMsg.style.display = 'none';
        
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar';
      });
    });
  });
})();
