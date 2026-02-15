// Google Translate Widget Initialization
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'es',
    includedLanguages: 'es,en,pt,de,zh-CN',
    autoDisplay: false,
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}

// Language change handler
function changeLanguage(lang) {
  // Save language preference to localStorage
  localStorage.setItem('preferredLanguage', lang);
  
  // Update the button text
  updateLanguageButtonText(lang);
  
  // Trigger Google Translate
  const translateElement = document.querySelector('.goog-te-combo');
  if (translateElement) {
    translateElement.value = lang;
    translateElement.dispatchEvent(new Event('change'));
  }
  
  // Close the dropdown
  const dropdown = new bootstrap.Dropdown(document.getElementById('languageDropdown'));
  dropdown.hide();
}

// Update button text based on selected language
function updateLanguageButtonText(lang) {
  const langNames = {
    'es': '🇪🇸 Español',
    'en': '🇺🇸 English',
    'pt': '🇵🇹 Português',
    'de': '🇩🇪 Deutsch',
    'zh-CN': '🇨🇳 中文 (Mandarin)'
  };
  
  const currentLangSpan = document.getElementById('currentLang');
  if (currentLangSpan && langNames[lang]) {
    currentLangSpan.textContent = langNames[lang].split(' ').slice(1).join(' ');
  }
}

// Load saved language preference on page load
document.addEventListener('DOMContentLoaded', function() {
  const savedLanguage = localStorage.getItem('preferredLanguage');
  
  if (savedLanguage && savedLanguage !== 'es') {
    // Wait for Google Translate element to load
    setTimeout(function() {
      changeLanguage(savedLanguage);
    }, 1500);
  }
  
  // Hide the default Google Translate element if visible
  const googleTranslateElement = document.getElementById('google_translate_element');
  if (googleTranslateElement) {
    googleTranslateElement.style.display = 'none';
  }
});
