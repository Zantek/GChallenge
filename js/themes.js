class ThemeManager {
    constructor() {
        this.themes = ['future', 'brick', 'cube', 'os', 'legacy', 'blueprint', 'woodgrain', 'papercraft', 'candy', 'arcade', 'obsidian', 'hydraulic'];
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
        
        this.updatePickerUI();

        // Dispatch event
        document.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
    }

    setTheme(theme) {
        if (this.currentTheme === theme) return;
        this.applyTheme(theme);
        if (typeof sfx !== 'undefined') sfx.playTick();
    }

    updatePickerUI() {
        const grid = document.getElementById('theme-picker-grid');
        if (!grid) return;

        const themeColors = {
            'future': '#3b82f6',
            'brick': '#306230',
            'cube': '#ff4500',
            'os': '#000080',
            'legacy': '#ffffff',
            'blueprint': '#00f2ff',
            'woodgrain': '#5c4033',
            'papercraft': '#d32f2f',
            'candy': '#ff00ff',
            'arcade': '#ff00ff',
            'obsidian': '#ff6600',
            'hydraulic': '#fbbf24'
        };

        grid.innerHTML = this.themes.map(t => {
            const isActive = this.currentTheme === t;
            return `
                <button onclick="themeManager.setTheme('${t}')" 
                        class="flex flex-col items-center gap-1 group">
                    <div class="w-10 h-10 rounded-lg transition-all border-2 ${isActive ? 'border-white scale-110 shadow-lg' : 'border-white/10 hover:border-white/30'}"
                        style="background-color: ${themeColors[t] || '#333'}"
                        title="${t.charAt(0).toUpperCase() + t.slice(1)}">
                        ${isActive ? '<div class="w-full h-full flex items-center justify-center bg-black/20"><div class="w-2 h-2 bg-white rounded-full"></div></div>' : ''}
                    </div>
                    <span class="text-[7px] font-black uppercase tracking-tighter ${isActive ? 'text-white' : 'text-gaming-muted'} group-hover:text-white transition-colors">${t}</span>
                </button>
            `;
        }).join('');
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
