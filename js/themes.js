class ThemeManager {
    constructor() {
        this.themes = ['future', 'brick', 'cube', 'os', 'legacy', 'blueprint', 'woodgrain'];
        this.currentTheme = localStorage.getItem('gamingChallengeTheme') || 'future';
        this.previousTheme = localStorage.getItem('gamingChallengePreviousTheme') || 'future';
        
        this.konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        this.konamiIndex = 0;

        this.init();
        this.applyTheme(this.currentTheme);
    }

    init() {
        document.addEventListener('keydown', (e) => {
            if (e.key === this.konamiCode[this.konamiIndex]) {
                this.konamiIndex++;
                if (this.konamiIndex === this.konamiCode.length) {
                    this.triggerSecretGlitch();
                    this.konamiIndex = 0;
                }
            } else {
                this.konamiIndex = 0;
            }
        });
    }

    triggerSecretGlitch() {
        // High-intensity visual juice
        const body = document.body;
        body.classList.add('system-glitch');
        
        if (typeof sfx !== 'undefined') {
            // Intense glitch sound (rapid random tones)
            for(let i=0; i<10; i++) {
                sfx.playTone(Math.random() * 1000 + 100, 'sawtooth', 0.05, i * 0.05, 0.05);
            }
        }

        if (window.companion) {
            companion.react('dropped'); // Use dropped for sad/glitchy look
            const bubble = document.getElementById('companion-bubble');
            if (bubble) bubble.innerText = "SYSTEM CRITICAL: HACK DETECTED";
        }

        // Give Achievement
        if (typeof achievements !== 'undefined') {
            achievements.show({
                title: "System Breaker",
                message: "You've accessed the restricted glitch layer.",
                type: 'level'
            });
        }

        // Remove effect after 2 seconds
        setTimeout(() => {
            body.classList.remove('system-glitch');
        }, 2000);
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.currentTheme = theme;
        localStorage.setItem('gamingChallengeTheme', theme);
        
        // Dispatch event
        document.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
    }

    nextTheme() {
        const currentIndex = this.themes.indexOf(this.currentTheme);
        const nextIndex = (currentIndex + 1) % this.themes.length;
        const nextTheme = this.themes[nextIndex];
        
        // Update previousTheme when normally switching
        this.previousTheme = this.currentTheme;
        localStorage.setItem('gamingChallengePreviousTheme', this.previousTheme);
        
        this.applyTheme(nextTheme);
        
        if (typeof sfx !== 'undefined') {
            sfx.playTick();
        }
    }
}

const themeManager = new ThemeManager();
