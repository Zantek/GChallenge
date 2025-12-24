class ThemeManager {
    constructor() {
        this.themes = ['future', 'brick', 'cube', 'os'];
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
                    this.activateLegacy();
                    this.konamiIndex = 0;
                }
            } else {
                this.konamiIndex = 0;
            }
        });
    }

    activateLegacy() {
        if (this.currentTheme !== 'legacy') {
            this.previousTheme = this.currentTheme;
            localStorage.setItem('gamingChallengePreviousTheme', this.previousTheme);
            this.applyTheme('legacy');
            if (typeof achievements !== 'undefined') {
                achievements.show({
                    title: "Legacy Mode",
                    message: "You've unlocked the secret monochrome skin!",
                    type: 'level'
                });
            }
            if (typeof sfx !== 'undefined') sfx.playFanfare();
        }
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.currentTheme = theme;
        localStorage.setItem('gamingChallengeTheme', theme);
        
        // Dispatch event
        document.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
    }

    nextTheme() {
        if (this.currentTheme === 'legacy') {
            // Escape legacy mode back to previous
            this.applyTheme(this.previousTheme);
        } else {
            const currentIndex = this.themes.indexOf(this.currentTheme);
            const nextIndex = (currentIndex + 1) % this.themes.length;
            const nextTheme = this.themes[nextIndex];
            
            // Update previousTheme when normally switching
            this.previousTheme = this.currentTheme;
            localStorage.setItem('gamingChallengePreviousTheme', this.previousTheme);
            
            this.applyTheme(nextTheme);
        }
        
        if (typeof sfx !== 'undefined') {
            sfx.playTick();
        }
    }
}

const themeManager = new ThemeManager();
