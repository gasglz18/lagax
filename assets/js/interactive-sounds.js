// Interactive Sounds System
const SoundSystem = {
  // Flag to control sounds
  soundsEnabled: localStorage.getItem('soundsEnabled') !== 'false',
  audioContext: null,

  // Sound definitions - generated locally via Web Audio (no external license)
  sounds: {
    pin: {
      frequency: 520,
      duration: 0.12,
      volume: 0.3
    }
  },

  // Initialize the sound system
  init: function() {
    console.log('Sound system initialized, sounds enabled:', this.soundsEnabled);
    this.setupAudioUnlock();
    this.setupSoundToggle();
    this.attachSoundsToElements();
  },

  setupAudioUnlock: function() {
    const unlock = () => {
      if (!this.audioContext) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;
        this.audioContext = new AudioContextClass();
      }
      if (this.audioContext.state === 'suspended') {
        this.audioContext.resume();
      }
    };

    document.addEventListener('pointerdown', unlock, { once: true });
    document.addEventListener('keydown', unlock, { once: true });
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

    const soundConfig = this.sounds[soundName];
    if (!soundConfig) {
      console.warn('Sound not found:', soundName);
      return;
    }

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    if (!this.audioContext) {
      this.audioContext = new AudioContextClass();
    }

    if (this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }

    try {
      const ctx = this.audioContext;
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();

      oscillator.type = 'sine';
      oscillator.frequency.value = soundConfig.frequency;

      const now = ctx.currentTime;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(soundConfig.volume, now + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + soundConfig.duration);

      oscillator.connect(gain);
      gain.connect(ctx.destination);

      oscillator.start(now);
      oscillator.stop(now + soundConfig.duration + 0.02);
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  SoundSystem.init();
});
