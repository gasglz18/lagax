// Simple language selector - opens Google Translate
function changeLanguage(lang) {
  console.log('Opening translation for:', lang);
  
  // Save preference
  localStorage.setItem('selectedLanguage', lang);
  
  // Language mapping for Google Translate
  const langMap = {
    'es': 'es',
    'en': 'en',
    'pt': 'pt',
    'de': 'de',
    'zh-CN': 'zh-CN'
  };
  
  const googleLang = langMap[lang] || lang;
  const currentUrl = window.location.href;
  
  // Open Google Translate in the same window
  const translateUrl = `https://translate.google.com/translate?u=${encodeURIComponent(currentUrl)}&hl=es&tl=${googleLang}`;
  window.open(translateUrl, '_blank');
  
  // Close dropdown
  try {
    const dropdown = document.getElementById('languageDropdown');
    if (dropdown && typeof bootstrap !== 'undefined') {
      bootstrap.Dropdown.getInstance(dropdown)?.hide();
    }
  } catch (e) {
    console.log('Error closing dropdown');
  }
}

// On page load
document.addEventListener('DOMContentLoaded', function() {
  console.log('Language selector loaded');
  const savedLang = localStorage.getItem('selectedLanguage');
  if (savedLang) {
    const langMap = {
      'es': 'Español',
      'en': 'English',
      'pt': 'Português',
      'de': 'Deutsch',
      'zh-CN': '中文'
    };
    const currentLangSpan = document.getElementById('currentLang');
    if (currentLangSpan && langMap[savedLang]) {
      currentLangSpan.textContent = langMap[savedLang];
    }
  }
});

// Make globally available
window.changeLanguage = changeLanguage;
