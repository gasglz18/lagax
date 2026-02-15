// Language selector handler
function changeLanguage(lang) {
  console.log('Changing language to:', lang);
  
  // Save preference
  localStorage.setItem('selectedLanguage', lang);
  
  // Update button text
  const langText = {
    'es': 'Español',
    'en': 'English',
    'pt': 'Português',
    'de': 'Deutsch',  
    'zh-CN': '中文'
  };
  
  const currentLang = document.getElementById('currentLang');
  if (currentLang) {
    currentLang.textContent = langText[lang] || lang;
  }
  
  // Find Google Translate dropdown (it's dynamically injected)
  const tryChangeLanguage = () => {
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      console.log('Found Google Translate select, changing to:', lang);
      select.value = lang;
      select.dispatchEvent(new Event('change'));
      return true;
    }
    return false;
  };
  
  // Try immediately
  if (!tryChangeLanguage()) {
    // If not found, try multiple times with delays
    let attempts = 0;
    const retryInterval = setInterval(() => {
      attempts++;
      console.log('Retry attempt', attempts);
      if (tryChangeLanguage() || attempts >= 10) {
        clearInterval(retryInterval);
      }
    }, 200);
  }
  
  // Close dropdown
  const dropdown = document.getElementById('languageDropdown');
  if (dropdown && typeof bootstrap !== 'undefined') {
    try {
      bootstrap.Dropdown.getInstance(dropdown)?.hide();
    } catch (e) {
      console.log('Dropdown close error:', e);
    }
  }
}

// On page load, restore saved language
document.addEventListener('DOMContentLoaded', function() {
  const savedLang = localStorage.getItem('selectedLanguage');
  console.log('Page loaded, saved language:', savedLang);
  
  if (savedLang && savedLang !== 'es') {
    // Wait for Google Translate to load
    setTimeout(() => {
      changeLanguage(savedLang);
    }, 2000);
  }
});

