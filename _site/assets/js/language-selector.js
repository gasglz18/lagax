// Translation using LibreTranslate API (100% free, no API key needed)
const LIBRE_TRANSLATE_API = 'https://api.mymemory.translated.net/get';

// Language mapping
const langMap = {
  'es': { name: 'Español', code: 'es' },
  'en': { name: 'English', code: 'en' },
  'pt': { name: 'Português', code: 'pt' },
  'de': { name: 'Deutsch', code: 'de' },
  'zh-CN': { name: '中文', code: 'zh-CN' }
};

let currentLanguage = 'es';
let originalTexts = {};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  console.log('Language selector initialized');
  
  // Store original Spanish text
  storeOriginalTexts();
  
  // Restore saved language if exists
  const savedLang = localStorage.getItem('selectedLanguage');
  if (savedLang && savedLang !== 'es') {
    setTimeout(() => changeLanguage(savedLang), 500);
  }
});

// Store all original text nodes
function storeOriginalTexts() {
  const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, label, button, li, span');
  elements.forEach(el => {
    if (el.children.length === 0 && el.textContent.trim().length > 0) {
      originalTexts[el.textContent.trim()] = el.textContent.trim();
    }
  });
  console.log('Stored', Object.keys(originalTexts).length, 'text nodes');
}

// Main translation function
async function changeLanguage(lang) {
  console.log('Change language to:', lang);
  
  localStorage.setItem('selectedLanguage', lang);
  updateLanguageButton(lang);
  
  if (lang === 'es') {
    // Restore Spanish
    restoreOriginalTexts();
    currentLanguage = 'es';
    console.log('Restored original Spanish content');
    return;
  }
  
  currentLanguage = lang;
  
  // Show loading indicator
  showLoadingState();
  
  try {
    // Get all translatable elements
    const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, label, button, li, span, textarea');
    let translated = 0;
    
    for (const el of elements) {
      // Skip if element has children or is empty
      if (el.children.length > 0 || !el.textContent.trim()) continue;
      
      const originalText = el.textContent.trim();
      
      // Skip very short or already non-Spanish text
      if (originalText.length < 2) continue;
      
      try {
        const translatedText = await translateText(originalText, lang);
        if (translatedText && translatedText !== originalText) {
          el.textContent = translatedText;
          translated++;
          console.log(`Translated: "${originalText}" → "${translatedText}"`);
        }
      } catch (e) {
        console.log('Error translating:', e);
      }
      
      // Rate limiting
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    
    console.log('Total translated:', translated);
  } catch (error) {
    console.error('Translation error:', error);
  } finally {
    hideLoadingState();
  }
}

// Translate single text
async function translateText(text, targetLang) {
  try {
    const response = await fetch(
      `${LIBRE_TRANSLATE_API}?q=${encodeURIComponent(text)}&langpair=es|${targetLang}`
    );
    
    const data = await response.json();
    
    if (data.responseStatus === 200 && data.responseData.translatedText) {
      return data.responseData.translatedText;
    }
    
    return text;
  } catch (error) {
    console.error('Translation API error:', error);
    return text;
  }
}

// Restore original Spanish text
function restoreOriginalTexts() {
  const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, label, button, li, span');
  elements.forEach(el => {
    if (el.children.length === 0) {
      const originalText = Object.keys(originalTexts).find(key => 
        el.textContent.includes(key.substring(0, 10))
      );
      if (originalText) {
        el.textContent = originalText;
      }
    }
  });
}

// Update button text
function updateLanguageButton(lang) {
  const span = document.getElementById('currentLang');
  if (span && langMap[lang]) {
    span.textContent = langMap[lang].name;
  }
}

// Loading indicator
function showLoadingState() {
  const main = document.querySelector('main');
  if (main) {
    main.style.opacity = '0.7';
    main.style.transition = 'opacity 0.3s';
  }
}

function hideLoadingState() {
  const main = document.querySelector('main');
  if (main) {
    main.style.opacity = '1';
  }
}

// Make globally available
window.changeLanguage = changeLanguage;
