// Google Translate Widget Initialization
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'es',
    includedLanguages: 'es,en,pt,de,zh-CN',
    autoDisplay: false,
    layout: google.translate.TranslateElement.SIMPLE
  }, 'google_translate_element');
  
  // After widget loads, check for saved language preference
  setTimeout(restoreSavedLanguage, 1000);
}

// Restore language from localStorage after widget loads
function restoreSavedLanguage() {
  const savedLanguage = localStorage.getItem('preferredLanguage');
  if (savedLanguage && savedLanguage !== 'es') {
    changeLanguage(savedLanguage);
  }
}

// Language change handler
function changeLanguage(lang) {
  console.log('Changing language to:', lang);
  
  // Save language preference to localStorage
  localStorage.setItem('preferredLanguage', lang);
  
  // Update the button text
  updateLanguageButtonText(lang);
  
  // Find and click the Google Translate dropdown
  const googFrameDiv = document.querySelector('.goog-te-combo');
  
  if (googFrameDiv) {
    console.log('Found Google Translate combo');
    googFrameDiv.value = lang;
    googFrameDiv.dispatchEvent(new Event('change'));
    
    // Alternative: force trigger through onclick
    setTimeout(() => {
      googFrameDiv.dispatchEvent(new Event('change'));
    }, 100);
  } else {
    console.log('Google Translate combo not found, retrying...');
    // Retry after a delay
    setTimeout(() => changeLanguage(lang), 500);
  }
  
  // Close the dropdown
  try {
    const dropdown = new bootstrap.Dropdown(document.getElementById('languageDropdown'));
    dropdown.hide();
  } catch (e) {
    console.log('Could not close dropdown:', e);
  }
}

// Update button text based on selected language
function updateLanguageButtonText(lang) {
  const langNames = {
    'es': 'Español',
    'en': 'English',
    'pt': 'Português',
    'de': 'Deutsch',
    'zh-CN': '中文'
  };
  
  const currentLangSpan = document.getElementById('currentLang');
  if (currentLangSpan && langNames[lang]) {
    currentLangSpan.textContent = langNames[lang];
  }
}

// Load saved language preference on page load
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, waiting for Google Translate widget...');
  
  // Hide the default Google Translate element if visible
  const googleTranslateElement = document.getElementById('google_translate_element');
  if (googleTranslateElement) {
    googleTranslateElement.style.display = 'none';
  }
  
  // Check and restore language after longer delay to ensure widget is loaded
  setTimeout(function() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    console.log('Saved language:', savedLanguage);
    
    if (savedLanguage && savedLanguage !== 'es') {
      changeLanguage(savedLanguage);
    }
  }, 2000);
});

