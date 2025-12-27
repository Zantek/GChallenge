class ThemeManager {
    constructor() {
        this.themes = ['future', 'brick', 'cube', 'os', 'legacy', 'blueprint', 'woodgrain', 'papercraft', 'candy', 'arcade', 'obsidian', 'hydraulic', 'overgrown', 'inkwash', 'hero', 'navigator', 'glacier', 'nomad', 'prism', 'invader', 'virtual', 'quest', 'genesis', 'spectrum', 'famicom', 'gamegear', 'manga', 'museum', 'craft', 'street', 'noir', 'tokyo'];
        this.currentTheme = localStorage.getItem('gamingChallengeTheme') || 'future';
        this.previousTheme = localStorage.getItem('gamingChallengePreviousTheme') || 'future';
        this.activeCategory = 'classic';
        
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

        // Click outside to close browser
        document.addEventListener('mousedown', (e) => {
            const browser = document.getElementById('theme-browser');
            const trigger = document.getElementById('theme-browser-trigger');
            if (browser && !browser.classList.contains('translate-x-full')) {
                // If click is not on the browser AND not on the trigger button
                if (!browser.contains(e.target) && !trigger.contains(e.target)) {
                    this.closeThemeBrowser();
                }
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
        if (typeof sfx !== 'undefined') sfx.playDing();
    }

    openThemeBrowser() {
        const browser = document.getElementById('theme-browser');
        if (!browser) return;

        // Toggle Logic: If it's already open, close it
        if (!browser.classList.contains('translate-x-full')) {
            this.closeThemeBrowser();
            return;
        }

        if (typeof closeSettings !== 'undefined') closeSettings();
        browser.classList.remove('translate-x-full');
        if (typeof sfx !== 'undefined') sfx.playTick();
        this.updatePickerUI();
    }

    closeThemeBrowser() {
        const browser = document.getElementById('theme-browser');
        if (browser) browser.classList.add('translate-x-full');
        if (typeof sfx !== 'undefined') sfx.playTick();
    }

    switchCategory(catId) {
        if (this.activeCategory === catId) return;
        this.activeCategory = catId;
        if (typeof sfx !== 'undefined') sfx.playTick();
        this.updatePickerUI();
    }

    updatePickerUI() {
        const list = document.getElementById('theme-browser-list');
        if (!list) return;

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
            'hydraulic': '#fbbf24',
            'overgrown': '#4ade80',
            'inkwash': '#d32f2f',
            'hero': '#ff0000',
            'navigator': '#00f2ff',
            'glacier': '#e0f2fe',
            'nomad': '#78350f',
            'prism': '#ff00ff',
            'invader': '#22c55e',
            'virtual': '#ff0000',
            'quest': '#3b82f6',
            'genesis': '#1e3a8a',
            'spectrum': '#000000',
            'famicom': '#991b1b',
            'web1': '#c0c0c0',
            'gamegear': '#1f2937',
            'manga': '#ffffff',
            'museum': '#f5f5f5',
            'craft': '#3b82f6',
            'street': '#4b5563',
            'noir': '#1a1a1a',
            'tokyo': '#7e22ce'
        };

        const themeFonts = {
            'future': 'Inter',
            'brick': 'DotGothic16',
            'cube': 'Archivo Black',
            'os': 'IBM Plex Mono',
            'legacy': 'JetBrains Mono',
            'blueprint': 'Space Mono',
            'woodgrain': 'DM Serif Display',
            'papercraft': 'Special Elite',
            'candy': 'Comfortaa',
            'arcade': 'Silkscreen',
            'obsidian': 'Chakra Petch',
            'hydraulic': 'Russo One',
            'overgrown': 'Cormorant Garamond',
            'inkwash': 'ZCOOL XiaoWei',
            'hero': 'Balsamiq Sans',
            'navigator': 'Audiowide',
            'glacier': 'Quicksand',
            'nomad': 'Stardos Stencil',
            'prism': 'Montserrat',
            'invader': 'Press Start 2P',
            'virtual': 'DotGothic16',
            'quest': 'Pixelify Sans',
            'genesis': 'Exo 2',
            'spectrum': 'JetBrains Mono',
            'famicom': 'DotGothic16',
            'web1': 'Cormorant Garamond',
            'gamegear': 'Exo 2',
            'manga': 'Balsamiq Sans',
            'museum': 'Cormorant Garamond',
            'craft': 'Comfortaa',
            'street': 'Archivo Black',
            'noir': 'JetBrains Mono',
            'tokyo': 'DotGothic16'
        };

        const categories = [
            { id: 'classic', name: 'System', themes: ['future', 'os', 'legacy', 'blueprint', 'quest', 'candy', 'arcade', 'obsidian', 'navigator', 'glacier'] },
            { id: 'retro', name: 'Retro', themes: ['famicom', 'genesis', 'gamegear', 'spectrum', 'virtual', 'brick', 'woodgrain', 'invader'] },
            { id: 'art', name: 'Art', themes: ['overgrown', 'inkwash', 'manga', 'museum', 'noir', 'tokyo', 'nomad', 'street'] },
            { id: 'modern', name: 'Modern', themes: ['cube', 'papercraft', 'hydraulic', 'prism', 'hero', 'craft'] }
        ];

        // 1. Render Tabs
        let html = `
            <div class="sticky top-0 z-20 bg-[#0f172a] p-4 pb-6">
                <div class="flex gap-1 p-1 bg-[#1e293b] rounded-lg border border-white/5 shadow-xl">
                    ${categories.map(cat => `
                        <button onclick="themeManager.switchCategory('${cat.id}')" 
                                class="flex-1 py-2 text-[9px] font-black uppercase tracking-widest rounded transition-all ${this.activeCategory === cat.id ? 'bg-[#3b82f6] text-white shadow-lg' : 'text-white/40 hover:text-white hover:bg-white/5'}">
                            ${cat.name}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;

        // 2. Render Active Category Themes
        const activeCat = categories.find(c => c.id === this.activeCategory);
        
        activeCat.themes.forEach(t => {
            if (!this.themes.includes(t)) return; // Skip disabled
            
            const isActive = this.currentTheme === t;
            html += `
                <div class="px-4">
                    <button onclick="themeManager.setTheme('${t}')" 
                            class="w-full flex items-center gap-4 p-4 rounded-xl transition-all border-2 ${isActive ? 'bg-white/10 border-white/20' : 'bg-transparent border-white/5 hover:bg-white/5 hover:border-white/10'} group/item text-left font-sans mb-3">
                        <div class="w-12 h-12 rounded-xl shadow-xl flex items-center justify-center shrink-0 border-2 border-white/10 transition-transform group-hover/item:rotate-12" 
                             style="background-color: ${themeColors[t]}; color: #fff">
                            <span class="text-2xl">${isActive ? '💎' : '🎮'}</span>
                        </div>
                        <div class="flex flex-col min-w-0">
                            <h4 class="text-sm font-black uppercase tracking-wider truncate ${isActive ? 'text-white' : 'text-white/80 group-hover/item:text-white'}">
                                ${t}
                            </h4>
                            <span class="text-[9px] font-bold text-white/40 uppercase tracking-[0.1em] mt-1 truncate">
                                Font: ${themeFonts[t]}
                            </span>
                        </div>
                        ${isActive ? `
                            <div class="ml-auto flex flex-col items-end gap-1">
                                <div class="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981] animate-pulse"></div>
                                <span class="text-[7px] font-black text-emerald-500 uppercase tracking-tighter">Active</span>
                            </div>
                        ` : ''}
                    </button>
                </div>
            `;
        });

        list.innerHTML = html;
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
