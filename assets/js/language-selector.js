// MyMemory Translation API
const TRANSLATION_API = 'https://api.mymemory.translated.net/get';

// Language codes
const LANG_CODES = {
  'es': { name: 'Español', code: 'es-ES' },
  'en': { name: 'English', code: 'en-US' },
  'pt': { name: 'Português', code: 'pt-BR' },
  'de': { name: 'Deutsch', code: 'de-DE' },
  'zh-CN': { name: '中文', code: 'zh-CN' }
};

// Store original HTML content
let originalContent = {};
let currentLanguage = 'es';

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  console.log('Initializing language selector...');
  
  // Store original content
  const mainContent = document.querySelector('main');
  if (mainContent) {
    originalContent.html = mainContent.innerHTML;
  }
  
  // Load saved language
  const savedLang = localStorage.getItem('selectedLanguage');
  if (savedLang && savedLang !== 'es') {
    currentLanguage = savedLang;
    changeLanguage(savedLang);
  } else {
    currentLanguage = 'es';
  }
});

// Change language function
async function changeLanguage(lang) {
  console.log('Changing to language:', lang);
  
  if (lang === 'es') {
    // Restore original Spanish content
    restoreOriginalContent();
    updateLanguageButton('es');
    localStorage.setItem('selectedLanguage', 'es');
    closeLanguageDropdown();
    return;
  }
  
  currentLanguage = lang;
  localStorage.setItem('selectedLanguage', lang);
  updateLanguageButton(lang);
  
  // Show loading state
  const mainContent = document.querySelector('main');
  if (mainContent) {
    mainContent.style.opacity = '0.6';
    mainContent.style.pointerEvents = 'none';
  }
  
  try {
    // Get the text content to translate
    const mainElement = document.querySelector('main');
    if (!mainElement) return;
    
    // Get all text nodes and translate them
    const textNodes = getAllTextNodes(mainElement);
    console.log('Found', textNodes.length, 'text nodes to translate');
    
    // Translate in batches to avoid API limits
    const batchSize = 5;
    for (let i = 0; i < textNodes.length; i += batchSize) {
      const batch = textNodes.slice(i, i + batchSize);
      
      for (const node of batch) {
        const text = node.textContent.trim();
        
        // Skip empty, very short, or already translated text
        if (text.length < 3 || text.match(/^[\d\[\],.!?-]*$/)) {
          continue;
        }
        
        try {
          const translated = await translateText(text, lang);
          if (translated && translated !== text) {
            node.textContent = translated;
          }
        } catch (e) {
          console.log('Translation error for:', text, e);
        }
      }
      
      // Small delay to avoid API rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    console.log('Translation complete!');
  } catch (error) {
    console.error('Translation failed:', error);
  } finally {
    // Restore normal state
    if (mainContent) {
      mainContent.style.opacity = '1';
      mainContent.style.pointerEvents = 'auto';
    }
  }
  
  // Close dropdown
  closeLanguageDropdown();
}

// Get all text nodes from an element
function getAllTextNodes(element) {
  const textNodes = [];
  const walk = document.createTreeWalker(
    element,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );
  
  let node;
  while (node = walk.nextNode()) {
    const text = node.textContent.trim();
    // Only include meaningful text
    if (text.length > 0 && !text.match(/^[\s\n\r]*$/)) {
      textNodes.push(node);
    }
  }
  
  return textNodes;
}

// Translate text using MyMemory API
async function translateText(text, targetLang) {
  try {
    const response = await fetch(
      `${TRANSLATION_API}?q=${encodeURIComponent(text)}&langpair=es|${targetLang}`
    );
    
    const data = await response.json();
    
    if (data.responseStatus === 200 && data.responseData.translatedText) {
      return data.responseData.translatedText;
    }
    
    return text;
  } catch (error) {
    console.error('API call failed:', error);
    return text;
  }
}

// Update language button text
function updateLanguageButton(lang) {
  const currentLangSpan = document.getElementById('currentLang');
  if (currentLangSpan && LANG_CODES[lang]) {
    currentLangSpan.textContent = LANG_CODES[lang].name;
  }
}

// Restore original Spanish content
function restoreOriginalContent() {
  const mainContent = document.querySelector('main');
  if (mainContent && originalContent.html) {
    mainContent.innerHTML = originalContent.html;
  }
}

// Close language dropdown
function closeLanguageDropdown() {
  const dropdown = document.getElementById('languageDropdown');
  if (dropdown && typeof bootstrap !== 'undefined') {
    const dropdownInstance = bootstrap.Dropdown.getInstance(dropdown);
    if (dropdownInstance) {
      dropdownInstance.hide();
    }
  }
}

// Make changeLanguage globally available
window.changeLanguage = changeLanguage;
