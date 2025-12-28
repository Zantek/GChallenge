class ExpansionManager {
    constructor() {
        this.activeModule = localStorage.getItem('gamingChallengeActiveFX') || null;
        this.activeCategory = 'retro';
        
        // Canvas storage
        this.fxCanvas = null;
        this.fxCtx = null;
        this.fxAnimId = null;
        
        // State data
        this.particles = [];
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

    switchCategory(catId) {
        if (this.activeCategory === catId) return;
        this.activeCategory = catId;
        if (typeof sfx !== 'undefined') sfx.playTick();
        this.updateUI();
    }

    applyModule(moduleId, silent = false) {
        this.deactivateAll();
        this.activeModule = moduleId;
        localStorage.setItem('gamingChallengeActiveFX', moduleId || '');

        if (!moduleId) {
            this.updateUI();
            this.updateTriggerIcon();
            return;
        }

        // Logic branching for 27 modules
        switch(moduleId) {
            case 'crt': this.enableCRT(); break;
            case 'vcr': this.enableCSS('fx-vcr-active'); break;
            case 'dither': this.enableCSS('fx-dither-active'); break;
            case 'scanline': this.enableCSS('fx-scanline-pro'); break;
            case 'interlace': this.enableCSS('fx-interlace-active'); break;
            
            case 'stars': this.startCanvasFX('stars'); break;
            case 'storm': this.startCanvasFX('storm'); break;
            case 'steam': this.startCanvasFX('steam'); break;
            case 'snow': this.startCanvasFX('snow'); break;
            case 'autumn': this.startCanvasFX('autumn'); break;
            case 'underwater': this.startCanvasFX('underwater'); break;
            case 'heatwave': this.enableCSS('fx-heatwave-active'); break;
            
            case 'matrix': this.startCanvasFX('matrix'); break;
            case 'error': this.enableCSS('fx-error-active'); break;
            case 'hologram': this.enableCSS('fx-hologram-active'); break;
            case 'grid': this.enableCSS('fx-grid-active'); break;
            
            case 'blueshift': this.enableCSS('fx-blueshift-active'); break;
            case 'noir': this.enableCSS('fx-noir-active'); break;
            case 'sepia': this.enableCSS('fx-sepia-active'); break;
            case 'bloom': this.enableCSS('fx-bloom-active'); break;
            case 'infrared': this.enableCSS('fx-infrared-active'); break;
            case 'popart': this.enableCSS('fx-popart-active'); break;
        }

        if (!silent && typeof sfx !== 'undefined') sfx.playTick();
        this.updateUI();
        this.updateTriggerIcon();
    }

    deactivateAll() {
        const root = document.documentElement;
        const vignette = document.getElementById('crt-vignette');
        
        root.classList.remove(
            'crt-active', 'fx-dither-active', 'fx-vcr-active', 'fx-blueshift-active', 'fx-storm-dim',
            'fx-scanline-pro', 'fx-interlace-active', 'fx-heatwave-active', 'fx-underwater-active',
            'fx-error-active', 'fx-hologram-active', 'fx-grid-active',
            'fx-noir-active', 'fx-sepia-active', 'fx-bloom-active', 'fx-infrared-active', 'fx-popart-active'
        );

        if (vignette) {
            vignette.classList.add('hidden');
            vignette.classList.remove('crt-vignette');
        }

        if (this.fxCanvas) this.fxCanvas.classList.add('hidden');
        if (this.fxAnimId) cancelAnimationFrame(this.fxAnimId);
        if (this.lightningTimeout) clearTimeout(this.lightningTimeout);
        document.body.classList.remove('lightning-flash');
    }

    enableCRT() {
        document.documentElement.classList.add('crt-active');
        const v = document.getElementById('crt-vignette');
        if (v) { v.classList.remove('hidden'); v.classList.add('crt-vignette'); }
    }

    enableCSS(className) {
        document.documentElement.classList.add(className);
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
                    this.initParticles(this.activeModule);
                }
            });
        }
        this.fxCanvas.width = window.innerWidth;
        this.fxCanvas.height = window.innerHeight;
        this.fxCanvas.classList.remove('hidden');
        return this.fxCtx;
    }

    startCanvasFX(type) {
        this.getCanvas();
        this.initParticles(type);
        this.animate(type);
        if (type === 'storm') this.triggerLightning();
        if (type === 'underwater') this.enableCSS('fx-underwater-active');
    }

    initParticles(type) {
        this.particles = [];
        let count = 100;
        if (type === 'stars') count = 150;
        if (type === 'matrix') count = 50;
        if (type === 'steam') count = 40;

        for (let i = 0; i < count; i++) {
            const p = {
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                size: Math.random() * 3 + 1,
                speed: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.5 + 0.2
            };
            if (type === 'matrix') {
                p.char = String.fromCharCode(0x30A0 + Math.random() * 96);
                p.speed = Math.random() * 5 + 2;
                p.size = 10 + Math.random() * 10;
            }
            this.particles.push(p);
        }
    }

    animate(type) {
        if (this.activeModule !== type) return;
        this.fxCtx.clearRect(0, 0, this.fxCanvas.width, this.fxCanvas.height);

        this.particles.forEach(p => {
            if (type === 'stars') {
                p.x += p.speed * 0.5;
                if (p.x > window.innerWidth) p.x = -5;
                this.drawCircle(p.x, p.y, p.size, `rgba(255,255,255,${p.opacity})`);
            } else if (type === 'storm') {
                p.y += p.speed * 5; p.x += 2;
                if (p.y > window.innerHeight) { p.y = -20; p.x = Math.random() * window.innerWidth; }
                this.drawLine(p.x, p.y, p.x + 1, p.y + 15, 'rgba(200,220,255,0.3)');
            } else if (type === 'snow') {
                p.y += p.speed; p.x += Math.sin(p.y / 30);
                if (p.y > window.innerHeight) p.y = -10;
                this.drawCircle(p.x, p.y, p.size, `rgba(255,255,255,${p.opacity})`);
            } else if (type === 'matrix') {
                p.y += p.speed;
                if (p.y > window.innerHeight) { p.y = -20; p.char = String.fromCharCode(0x30A0 + Math.random() * 96); }
                this.fxCtx.fillStyle = `rgba(34, 197, 94, ${p.opacity})`;
                this.fxCtx.font = `${p.size}px monospace`;
                this.fxCtx.fillText(p.char, p.x, p.y);
            } else if (type === 'steam') {
                p.x += p.speed * 0.2;
                if (p.x > window.innerWidth + 200) p.x = -200;
                const grad = this.fxCtx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 50);
                grad.addColorStop(0, `rgba(200,200,200,${p.opacity * 0.2})`);
                grad.addColorStop(1, 'rgba(200,200,200,0)');
                this.fxCtx.fillStyle = grad;
                this.fxCtx.beginPath(); this.fxCtx.arc(p.x, p.y, p.size * 50, 0, Math.PI * 2); this.fxCtx.fill();
            } else if (type === 'autumn') {
                p.y += p.speed; p.x += Math.cos(p.y / 100) * 2;
                if (p.y > window.innerHeight) p.y = -20;
                this.fxCtx.fillStyle = `rgba(245, 158, 11, ${p.opacity})`;
                this.fxCtx.fillRect(p.x, p.y, p.size * 2, p.size);
            } else if (type === 'underwater') {
                p.y -= p.speed * 0.5; p.x += Math.sin(p.y / 50) * 0.5;
                if (p.y < -20) p.y = window.innerHeight + 20;
                this.drawCircle(p.x, p.y, p.size, `rgba(255,255,255,${p.opacity * 0.3})`, true);
            }
        });

        this.fxAnimId = requestAnimationFrame(() => this.animate(type));
    }

    drawCircle(x, y, r, color, stroke = false) {
        this.fxCtx.fillStyle = color;
        this.fxCtx.beginPath(); this.fxCtx.arc(x, y, r, 0, Math.PI * 2); 
        if (stroke) { this.fxCtx.strokeStyle = color; this.fxCtx.stroke(); } else { this.fxCtx.fill(); }
    }

    drawLine(x1, y1, x2, y2, color) {
        this.fxCtx.strokeStyle = color; this.fxCtx.lineWidth = 1;
        this.fxCtx.beginPath(); this.fxCtx.moveTo(x1, y1); this.fxCtx.lineTo(x2, y2); this.fxCtx.stroke();
    }

    triggerLightning() {
        if (this.activeModule !== 'storm') return;
        this.lightningTimeout = setTimeout(() => {
            document.body.classList.add('lightning-flash');
            if (typeof sfx !== 'undefined') sfx.playTone(60, 'sawtooth', 0.1, 0, 0.2);
            setTimeout(() => {
                document.body.classList.remove('lightning-flash');
                this.triggerLightning();
            }, 150);
        }, Math.random() * 8000 + 2000);
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

        const categories = [
            { id: 'retro', name: 'Retro', modules: [
                { id: 'crt', name: 'CRT FX', icon: '📺', color: '#fb923c' },
                { id: 'vcr', name: 'VCR Retro', icon: '📼', color: '#ef4444' },
                { id: 'dither', name: '8-Bit Dither', icon: '👾', color: '#a855f7' },
                { id: 'scanline', name: 'Scanline Pro', icon: '📏', color: '#64748b' },
                { id: 'interlace', name: 'Interlace', icon: '〰️', color: '#3b82f6' }
            ]},
            { id: 'nature', name: 'Nature', modules: [
                { id: 'storm', name: 'Storm Pak', icon: '⛈️', color: '#475569' },
                { id: 'steam', name: 'Silent Fog', icon: '🌫️', color: '#94a3b8' },
                { id: 'stars', name: 'Starfield', icon: '✨', color: '#3b82f6' },
                { id: 'snow', name: 'Snowfall', icon: '❄️', color: '#e0f2fe' },
                { id: 'autumn', name: 'Autumn', icon: '🍂', color: '#b45309' },
                { id: 'underwater', name: 'Deep Sea', icon: '🫧', color: '#0ea5e9' },
                { id: 'heatwave', name: 'Heatwave', icon: '🔥', color: '#f59e0b' }
            ]},
            { id: 'digital', name: 'Digital', modules: [
                { id: 'matrix', name: 'Matrix Code', icon: '📟', color: '#22c55e' },
                { id: 'error', name: 'Sys Error', icon: '⚠️', color: '#ef4444' },
                { id: 'hologram', name: 'Hologram', icon: '💎', color: '#00f2ff' },
                { id: 'grid', name: 'Cyber Grid', icon: '🌐', color: '#7e22ce' }
            ]},
            { id: 'filters', name: 'Filters', modules: [
                { id: 'blueshift', name: 'Blue Shift', icon: '🟦', color: '#06b6d4' },
                { id: 'noir', name: 'Noir Cinema', icon: '🎬', color: '#1a1a1a' },
                { id: 'sepia', name: 'Vintage', icon: '📜', color: '#78350f' },
                { id: 'bloom', name: 'Dream Bloom', icon: '🌸', color: '#f0abfc' },
                { id: 'infrared', name: 'Infrared', icon: '🌡️', color: '#dc2626' },
                { id: 'popart', name: 'Pop Art', icon: '🎨', color: '#ffde00' }
            ]}
        ];

        let html = `
            <div class="sticky top-0 z-20 bg-[#0f172a] p-4 pb-6">
                <div class="flex gap-1 p-1 bg-[#1e293b] rounded-lg border border-white/5 shadow-xl">
                    ${categories.map(cat => `
                        <button onclick="expansionManager.switchCategory('${cat.id}')" 
                                class="flex-1 py-2 text-[9px] font-black uppercase tracking-widest rounded transition-all ${this.activeCategory === cat.id ? 'bg-[#fb923c] text-white shadow-lg' : 'text-white/40 hover:text-white hover:bg-white/5'}">
                            ${cat.name}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;

        const activeCat = categories.find(c => c.id === this.activeCategory);
        activeCat.modules.forEach(m => {
            const isActive = this.activeModule === m.id;
            html += `
                <div class="px-4 mb-3">
                    <button onclick="expansionManager.toggleModule('${m.id}')" 
                            class="w-full flex items-center gap-4 p-4 rounded-xl transition-all border-2 ${isActive ? 'bg-white/10 border-white/20' : 'bg-transparent border-white/5 hover:bg-white/5 hover:border-white/10'} group/item text-left font-sans">
                        <div class="w-12 h-12 rounded-xl shadow-lg flex items-center justify-center shrink-0 border-2 border-white/10 transition-transform group-hover/item:scale-110" 
                             style="background-color: ${m.color}; color: #fff">
                            <span class="text-2xl">${m.icon}</span>
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
        });

        list.innerHTML = html;
    }
}

const expansionManager = new ExpansionManager();