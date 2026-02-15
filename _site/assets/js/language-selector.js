// Add logging to console for debugging
console.log('Language selector script LOADED');

// Translation using MyMemory API
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
let originalTexts = new Map();

// Main translation function - GLOBAL
window.changeLanguage = async function(lang) {
  console.log('=== CHANGE LANGUAGE CALLED ===');
  console.log('Language selected:', lang);
  
  localStorage.setItem('selectedLanguage', lang);
  updateLanguageButton(lang);
  
  if (lang === 'es') {
    console.log('Restoring Spanish...');
    location.reload(); // Reload page to restore
    return;
  }
  
  currentLanguage = lang;
  console.log('Starting translation to:', lang);
  
  // Show loading
  const main = document.querySelector('main');
  if (main) {
    main.style.opacity = '0.6';
    console.log('Loading state activated');
  }
  
  try {
    // Get all text nodes
    const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, a, label, button, span, td, th');
    console.log('Found elements to translate:', elements.length);
    
    let count = 0;
    for (const el of elements) {
      if (el.children.length > 0) continue;
      const text = el.textContent.trim();
      if (text.length < 2) continue;
      
      try {
        console.log('Translating:', text.substring(0, 30));
        const translated = await translateText(text, lang);
        if (translated && translated !== text) {
          el.textContent = translated;
          count++;
        }
      } catch (e) {
        console.error('Translation error:', e);
      }
      
      await new Promise(resolve => setTimeout(resolve, 30));
    }
    
    console.log('Total elements translated:', count);
  } catch (error) {
    console.error('Translation process error:', error);
  } finally {
    if (main) {
      main.style.opacity = '1';
      console.log('Loading state removed');
    }
  }
};

// Translate single text
async function translateText(text, targetLang) {
  try {
    const url = `${LIBRE_TRANSLATE_API}?q=${encodeURIComponent(text)}&langpair=es|${targetLang}`;
    console.log('API Call:', url.substring(0, 80) + '...');
    
    const response = await fetch(url);
    const data = await response.json();
    
    console.log('API Response:', data.responseStatus);
    
    if (data.responseStatus === 200 && data.responseData.translatedText) {
      return data.responseData.translatedText;
    }
    return text;
  } catch (error) {
    console.error('API error:', error);
    return text;
  }
}

// Update button text
function updateLanguageButton(lang) {
  const span = document.getElementById('currentLang');
  console.log('Updating button, span element:', span);
  if (span && langMap[lang]) {
    span.textContent = langMap[lang].name;
    console.log('Button updated to:', langMap[lang].name);
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  console.log('=== DOM LOADED ===');
  console.log('Window changeLanguage function available:', typeof window.changeLanguage);
  
  const savedLang = localStorage.getItem('selectedLanguage');
  console.log('Saved language:', savedLang);
});

console.log('Language selector READY');
