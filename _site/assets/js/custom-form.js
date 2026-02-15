// Custom form submission to Google Forms
(function() {
  'use strict';
  
  const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSc0RrW42VsccmbIpsoUJw-KAe62wWeOhCJL3N7hdqIMS9n1yA/formResponse';
  
  // Field mappings from your Google Form
  const FIELD_IDS = {
    nombre: 'entry.1633920210',
    email: 'entry.227649005',
    direccion: 'entry.790080973',
    telefono: 'entry.1770822543',
    presupuesto: 'entry.1846923513',
    horario: 'entry.1242266990',
    necesidad: 'entry.1198873492'
  };
  
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
      submitBtn.textContent = 'Enviando...';
      
      // Get form data
      const formData = new FormData();
      formData.append(FIELD_IDS.nombre, document.getElementById('nombre').value);
      formData.append(FIELD_IDS.email, document.getElementById('email').value);
      formData.append(FIELD_IDS.direccion, document.getElementById('direccion').value);
      formData.append(FIELD_IDS.telefono, document.getElementById('telefono').value);
      formData.append(FIELD_IDS.presupuesto, document.getElementById('presupuesto').value);
      formData.append(FIELD_IDS.horario, document.getElementById('horario').value);
      formData.append(FIELD_IDS.necesidad, document.getElementById('necesidad').value);
      
      // Send to Google Form using fetch with no-cors mode
      fetch(GOOGLE_FORM_ACTION, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString()
      })
      .then(function() {
        // Show success message
        successMsg.style.display = 'block';
        errorMsg.style.display = 'none';
        form.reset();
        
        // Re-enable button after a delay
        setTimeout(function() {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Enviar';
          successMsg.style.display = 'none';
        }, 5000);
      })
      .catch(function(error) {
        // Show error message
        console.error('Error:', error);
        errorMsg.style.display = 'block';
        successMsg.style.display = 'none';
        
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar';
      });
    });
  });
})();
