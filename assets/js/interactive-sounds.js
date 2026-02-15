// Interactive Sounds System
const SoundSystem = {
  // Flag to control sounds
  soundsEnabled: localStorage.getItem('soundsEnabled') !== 'false',
  
  // Sound definitions - using free audio from web-accessible sources
  sounds: {
    pin: 'https://assets.mixkit.co/active_storage/sfx/2351/2351-preview.mp3'
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
    const floatingSelectors = [
      '.modal',
      '.modal-dialog',
      '.modal-content',
      '.modal-header',
      '.modal-body',
      '.modal-footer',
      '.whatsapp-float'
    ];
    const soundMappings = [
      {
        matchAll: true,
        sound: 'pin',
        selector: floatingSelectors.join(', ')
      }
    ];
    
    // Find and attach sounds to matching elements
    soundMappings.forEach(mapping => {
      const elements = document.querySelectorAll(mapping.selector);
      elements.forEach(el => {
        if (mapping.matchAll) {
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
