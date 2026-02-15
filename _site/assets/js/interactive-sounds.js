// Interactive Sounds System
const SoundSystem = {
  // Flag to control sounds
  soundsEnabled: localStorage.getItem('soundsEnabled') !== 'false',
  
  // Sound definitions - using free audio from web-accessible sources
  sounds: {
    airplane: 'https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3',
    cash_register: 'https://assets.mixkit.co/active_storage/sfx/2816/2816-preview.mp3',
    metallic_hit: 'https://assets.mixkit.co/active_storage/sfx/2845/2845-preview.mp3',
    welding: 'https://assets.mixkit.co/active_storage/sfx/2854/2854-preview.mp3',
    cash_coins: 'https://assets.mixkit.co/active_storage/sfx/2815/2815-preview.mp3',
    notification: 'https://assets.mixkit.co/active_storage/sfx/2489/2489-preview.mp3',
    success: 'https://assets.mixkit.co/active_storage/sfx/2867/2867-preview.mp3'
  },
  
  // Initialize the sound system
  init: function() {
    console.log('Sound system initialized, sounds enabled:', this.soundsEnabled);
    this.setupSoundToggle();
    this.attachSoundsToElements();
  },
  
  // Setup the sound toggle button
  setupSoundToggle: function() {
    const toggleBtn = document.getElementById('soundToggle');
    if (!toggleBtn) return;
    
    // Update button state
    this.updateToggleButton();
    
    // Add click listener
    toggleBtn.addEventListener('click', () => {
      this.soundsEnabled = !this.soundsEnabled;
      localStorage.setItem('soundsEnabled', this.soundsEnabled);
      this.updateToggleButton();
      console.log('Sounds toggled:', this.soundsEnabled);
    });
  },
  
  // Update toggle button appearance
  updateToggleButton: function() {
    const toggleBtn = document.getElementById('soundToggle');
    if (!toggleBtn) return;
    
    const icon = toggleBtn.querySelector('i');
    if (this.soundsEnabled) {
      icon.className = 'fas fa-volume-up';
      toggleBtn.classList.remove('disabled');
      toggleBtn.style.opacity = '1';
    } else {
      icon.className = 'fas fa-volume-mute';
      toggleBtn.classList.add('disabled');
      toggleBtn.style.opacity = '0.5';
    }
  },
  
  // Attach sounds to elements
  attachSoundsToElements: function() {
    // Map of keywords to sounds and their selectors
    const soundMappings = [
      {
        keywords: ['distribur', 'distribución', 'distribucion'],
        sound: 'airplane',
        selector: 'h2, h3, p, a'
      },
      {
        keywords: ['importar', 'importación', 'importacion'],
        sound: 'notification',
        selector: 'h2, h3, p, a'
      },
      {
        keywords: ['exportar', 'exportación', 'exportacion'],
        sound: 'success',
        selector: 'h2, h3, p, a'
      },
      {
        keywords: ['almacenar', 'almacenamiento', 'warehouse', 'logística'],
        sound: 'notification',
        selector: 'h2, h3, p, a'
      },
      {
        keywords: ['asesorías', 'asesorias', 'financier', 'financial'],
        sound: 'cash_register',
        selector: 'h2, h3, p, a'
      },
      {
        keywords: ['ubicacion', 'ubicaciones', 'location'],
        sound: 'notification',
        selector: 'h2, h3, p, a, li'
      },
      {
        keywords: ['pailería', 'paileria'],
        sound: 'metallic_hit',
        selector: 'h2, h3, p, a'
      },
      {
        keywords: ['soldadura', 'soldadas', 'welding'],
        sound: 'welding',
        selector: 'h2, h3, p, a'
      }
    ];
    
    // Find and attach sounds to matching elements
    soundMappings.forEach(mapping => {
      const elements = document.querySelectorAll(mapping.selector);
      elements.forEach(el => {
        const text = el.textContent.toLowerCase();
        // Check if any keyword matches
        if (mapping.keywords.some(keyword => text.includes(keyword))) {
          el.setAttribute('data-sound', mapping.sound);
          el.style.cursor = 'pointer';
          el.addEventListener('mouseenter', () => this.playSound(mapping.sound));
        }
      });
    });
    
    console.log('Sounds attached to elements');
  },
  
  // Play a sound
  playSound: function(soundName) {
    if (!this.soundsEnabled) return;
    
    const soundUrl = this.sounds[soundName];
    if (!soundUrl) {
      console.warn('Sound not found:', soundName);
      return;
    }
    
    try {
      const audio = new Audio(soundUrl);
      audio.volume = 0.5; // 50% volume
      audio.play().catch(err => {
        console.log('Could not play sound:', err);
      });
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  SoundSystem.init();
});
