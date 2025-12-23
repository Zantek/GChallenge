class ThemeManager {
    constructor() {
        this.themes = ['future', 'brick', 'cube', 'os'];
        this.currentTheme = localStorage.getItem('gamingChallengeTheme') || 'future';
        this.applyTheme(this.currentTheme);
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.currentTheme = theme;
        localStorage.setItem('gamingChallengeTheme', theme);
        
        // Dispatch event for any other components that need to know
        document.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
    }

    nextTheme() {
        const currentIndex = this.themes.indexOf(this.currentTheme);
        const nextIndex = (currentIndex + 1) % this.themes.length;
        const nextTheme = this.themes[nextIndex];
        
        this.applyTheme(nextTheme);
        
        // Play a nice feedback sound
        if (typeof sfx !== 'undefined') {
            sfx.playTick();
        }
    }
}

const themeManager = new ThemeManager();
