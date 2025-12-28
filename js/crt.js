class ExpansionManager {
    constructor() {
        this.activeModule = localStorage.getItem('gamingChallengeActiveFX') || null;
        
        // Canvas storage
        this.fxCanvas = null;
        this.fxCtx = null;
        this.fxAnimId = null;
        
        // State data
        this.stars = [];
        this.raindrops = [];
        this.fogClouds = [];
        this.lightningTimeout = null;

        this.init();
    }

    init() {
        if (this.activeModule) {
            this.applyModule(this.activeModule, true);
        }

        document.addEventListener('mousedown', (e) => {
            const sidebar = document.getElementById('expansion-sidebar');
            const trigger = document.getElementById('expansion-trigger');
            if (sidebar && !sidebar.classList.contains('translate-x-full')) {
                if (!sidebar.contains(e.target) && !trigger.contains(e.target)) {
                    this.closeSidebar();
                }
            }
        });
    }

    openSidebar() {
        const sidebar = document.getElementById('expansion-sidebar');
        if (!sidebar) return;
        if (!sidebar.classList.contains('translate-x-full')) {
            this.closeSidebar();
            return;
        }
        sidebar.classList.remove('translate-x-full');
        this.updateUI();
    }

    closeSidebar() {
        const sidebar = document.getElementById('expansion-sidebar');
        if (sidebar) sidebar.classList.add('translate-x-full');
    }

    applyModule(moduleId, silent = false) {
        this.deactivateAll();
        this.activeModule = moduleId;
        localStorage.setItem('gamingChallengeActiveFX', moduleId || '');

        if (moduleId === 'crt') this.enableCRT();
        else if (moduleId === 'stars') this.enableStars();
        else if (moduleId === 'dither') this.enableDither();
        else if (moduleId === 'storm') this.enableStorm();
        else if (moduleId === 'vcr') this.enableVCR();
        else if (moduleId === 'steam') this.enableSteam();
        else if (moduleId === 'blueshift') this.enableBlueShift();

        if (!silent && typeof sfx !== 'undefined') sfx.playTick();
        this.updateUI();
        this.updateTriggerIcon();
    }

    deactivateAll() {
        const root = document.documentElement;
        const vignette = document.getElementById('crt-vignette');
        
        root.classList.remove('crt-active', 'fx-dither-active', 'fx-vcr-active', 'fx-blueshift-active', 'fx-storm-dim');
        if (vignette) {
            vignette.classList.add('hidden');
            vignette.classList.remove('crt-vignette');
        }

        if (this.fxCanvas) this.fxCanvas.classList.add('hidden');
        if (this.fxAnimId) cancelAnimationFrame(this.fxAnimId);
        if (this.lightningTimeout) clearTimeout(this.lightningTimeout);
        document.body.classList.remove('lightning-flash');
    }

    getCanvas() {
        if (!this.fxCanvas) {
            this.fxCanvas = document.createElement('canvas');
            this.fxCanvas.id = 'fx-layer-canvas';
            this.fxCanvas.className = 'fixed inset-0 pointer-events-none z-[0]';
            document.body.prepend(this.fxCanvas);
            this.fxCtx = this.fxCanvas.getContext('2d');
            
            window.addEventListener('resize', () => {
                if (this.fxCanvas && this.activeModule) {
                    this.fxCanvas.width = window.innerWidth;
                    this.fxCanvas.height = window.innerHeight;
                    if (this.activeModule === 'stars') this.initStars();
                    if (this.activeModule === 'storm') this.initStorm();
                    if (this.activeModule === 'steam') this.initSteam();
                }
            });
        }
        this.fxCanvas.width = window.innerWidth;
        this.fxCanvas.height = window.innerHeight;
        this.fxCanvas.classList.remove('hidden');
        return this.fxCtx;
    }

    enableCRT() {
        const root = document.documentElement;
        const vignette = document.getElementById('crt-vignette');
        root.classList.add('crt-active');
        if (vignette) {
            vignette.classList.remove('hidden');
            vignette.classList.add('crt-vignette');
        }
    }

    enableStars() {
        this.getCanvas();
        this.initStars();
        this.animateStars();
    }

    enableDither() {
        document.documentElement.classList.add('fx-dither-active');
    }

    enableStorm() {
        this.getCanvas();
        this.initStorm();
        this.animateStorm();
        this.triggerLightning();
        
        // Auto-dim if the theme is light
        const lightThemes = ['inkwash', 'glacier', 'museum', 'manga', 'famicom', 'future', 'prism'];
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (lightThemes.includes(currentTheme)) {
            document.documentElement.classList.add('fx-storm-dim');
        }
    }

    enableVCR() {
        document.documentElement.classList.add('fx-vcr-active');
    }

    enableSteam() {
        this.getCanvas();
        this.initSteam();
        this.animateSteam();
    }

    enableBlueShift() {
        document.documentElement.classList.add('fx-blueshift-active');
    }

    // --- Module Logic Implementations ---

    initStars() {
        this.stars = [];
        for (let i = 0; i < 150; i++) {
            this.stars.push({
                x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight,
                size: Math.random() * 3 + 0.5, speed: Math.random() * 1.2 + 0.2,
                opacity: Math.random() * 0.7 + 0.3
            });
        }
    }

    animateStars() {
        if (this.activeModule !== 'stars') return;
        this.fxCtx.clearRect(0, 0, this.fxCanvas.width, this.fxCanvas.height);
        this.stars.forEach(s => {
            s.x += s.speed;
            if (s.x > window.innerWidth) { s.x = -5; s.y = Math.random() * window.innerHeight; }
            this.fxCtx.fillStyle = `rgba(255, 255, 255, ${s.opacity})`;
            this.fxCtx.beginPath(); this.fxCtx.arc(s.x, s.y, s.size, 0, Math.PI * 2); this.fxCtx.fill();
        });
        this.fxAnimId = requestAnimationFrame(this.animateStars.bind(this));
    }

    initStorm() {
        this.raindrops = [];
        for (let i = 0; i < 100; i++) {
            this.raindrops.push({
                x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight,
                len: Math.random() * 20 + 10, speed: Math.random() * 15 + 10
            });
        }
    }

    animateStorm() {
        if (this.activeModule !== 'storm') return;
        this.fxCtx.clearRect(0, 0, this.fxCanvas.width, this.fxCanvas.height);
        
        // Detect if we need light or dark rain based on theme
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const lightThemes = ['inkwash', 'glacier', 'museum', 'manga', 'famicom', 'prism'];
        const rainColor = lightThemes.includes(currentTheme) ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.3)';

        this.fxCtx.strokeStyle = rainColor;
        this.fxCtx.lineWidth = 1.5; // Slightly thicker
        this.fxCtx.lineCap = 'round';
        this.raindrops.forEach(r => {
            this.fxCtx.beginPath();
            this.fxCtx.moveTo(r.x, r.y);
            this.fxCtx.lineTo(r.x + 2, r.y + r.len);
            this.fxCtx.stroke();
            r.y += r.speed;
            r.x += 2;
            if (r.y > window.innerHeight) { r.y = -r.len; r.x = Math.random() * window.innerWidth; }
        });
        this.fxAnimId = requestAnimationFrame(this.animateStorm.bind(this));
    }

    triggerLightning() {
        if (this.activeModule !== 'storm') return;
        const delay = Math.random() * 8000 + 2000;
        this.lightningTimeout = setTimeout(() => {
            document.body.classList.add('lightning-flash');
            if (typeof sfx !== 'undefined') sfx.playTone(60, 'sawtooth', 0.1, 0, 0.2); // Low thunder rumble
            setTimeout(() => {
                document.body.classList.remove('lightning-flash');
                this.triggerLightning();
            }, 150);
        }, delay);
    }

    initSteam() {
        this.fogClouds = [];
        const count = 40; // Doubled density
        for (let i = 0; i < count; i++) {
            this.fogClouds.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight, // Full screen coverage
                radius: Math.random() * 300 + 200, // Massive clouds
                speed: Math.random() * 0.3 + 0.05,
                opacity: Math.random() * 0.15 + 0.05
            });
        }
    }

    animateSteam() {
        if (this.activeModule !== 'steam') return;
        this.fxCtx.clearRect(0, 0, this.fxCanvas.width, this.fxCanvas.height);
        
        // Auto-dim for Silent Hill vibe
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const lightThemes = ['inkwash', 'glacier', 'museum', 'manga', 'famicom', 'prism'];
        if (lightThemes.includes(currentTheme)) {
            document.documentElement.classList.add('fx-storm-dim');
        }

        this.fogClouds.forEach(c => {
            c.x += c.speed;
            if (c.x - c.radius > window.innerWidth) {
                c.x = -c.radius;
                c.y = Math.random() * window.innerHeight;
            }
            const grad = this.fxCtx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.radius);
            grad.addColorStop(0, `rgba(200, 200, 200, ${c.opacity})`);
            grad.addColorStop(1, 'rgba(200, 200, 200, 0)');
            this.fxCtx.fillStyle = grad;
            this.fxCtx.beginPath();
            this.fxCtx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
            this.fxCtx.fill();
        });
        this.fxAnimId = requestAnimationFrame(this.animateSteam.bind(this));
    }

    updateTriggerIcon() {
        const trigger = document.getElementById('expansion-trigger');
        if (trigger) trigger.style.color = this.activeModule ? '#10b981' : '';
    }

    toggleModule(moduleId) {
        if (this.activeModule === moduleId) this.applyModule(null);
        else this.applyModule(moduleId);
    }

    updateUI() {
        const list = document.getElementById('expansion-list');
        if (!list) return;
        const modules = [
            { id: 'crt', name: 'CRT FX Module', icon: '📺', color: '#fb923c' },
            { id: 'stars', name: 'Starfield FX', icon: '✨', color: '#3b82f6' },
            { id: 'dither', name: '8-Bit Dither', icon: '👾', color: '#a855f7' },
            { id: 'storm', name: 'Storm Pak', icon: '⛈️', color: '#64748b' },
            { id: 'vcr', name: 'VCR Retro Pak', icon: '📼', color: '#ef4444' },
            { id: 'steam', name: 'Steam Fog FX', icon: '🌫️', color: '#94a3b8' },
            { id: 'blueshift', name: 'Blue Shift Pak', icon: '🟦', color: '#06b6d4' }
        ];
        list.innerHTML = modules.map(m => {
            const isActive = this.activeModule === m.id;
            return `
                <div class="px-4 pt-2">
                    <button onclick="expansionManager.toggleModule('${m.id}')" 
                            class="w-full flex items-center gap-4 p-4 rounded-xl transition-all border-2 ${isActive ? 'bg-white/10 border-white/20' : 'bg-transparent border-white/5 hover:bg-white/5 hover:border-white/10'} group/item text-left font-sans">
                        <div class="w-12 h-12 rounded-xl shadow-lg flex items-center justify-center shrink-0 border-2 border-white/10 transition-transform group-hover/item:scale-110" 
                             style="background-color: ${m.color}; color: #fff">
                            <span class="text-xl">${m.icon}</span>
                        </div>
                        <div class="flex flex-col min-w-0">
                            <h4 class="text-sm font-black uppercase tracking-wider truncate ${isActive ? 'text-white' : 'text-white/80 group-hover/item:text-white'}">${m.name}</h4>
                            <span class="text-[9px] font-bold text-white/40 uppercase tracking-[0.1em] mt-1 truncate">Status: ${isActive ? 'ACTIVE' : 'READY'}</span>
                        </div>
                        ${isActive ? `
                            <div class="ml-auto flex flex-col items-end gap-1">
                                <div class="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981] animate-pulse"></div>
                                <span class="text-[7px] font-black text-emerald-500 uppercase tracking-tighter">Running</span>
                            </div>
                        ` : ''}
                    </button>
                </div>
            `;
        }).join('');
    }
}
const expansionManager = new ExpansionManager();
