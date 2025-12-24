
class Companion {
    constructor() {
        this.container = document.getElementById('companion-container');
        this.level = 1;
        this.frame = 0;
        this.decorationsEnabled = true; // Easy toggle for room decorations
        
        this.decorations = {
            plant: `
                <svg width="24" height="24" viewBox="0 0 16 16" fill="#10b981">
                    <rect x="7" y="10" width="2" height="4" fill="#78350f" />
                    <rect x="6" y="6" width="4" height="4" />
                    <rect x="5" y="7" width="6" height="2" />
                </svg>
            `,
            poster: `
                <div class="w-10 h-12 bg-white/10 border border-white/20 rounded-sm flex items-center justify-center">
                    <div class="w-6 h-8 bg-blue-500/20 rounded-sm animate-pulse"></div>
                </div>
            `,
            console: `
                <svg width="20" height="12" viewBox="0 0 16 16" fill="#94a3b8">
                    <rect x="2" y="10" width="12" height="4" rx="1" />
                    <rect x="4" y="11" width="2" height="2" fill="#1e293b" />
                    <circle cx="11" cy="12" r="1" fill="#ef4444" />
                </svg>
            `
        };

        this.sprites = {
            egg: `
                <svg width="64" height="64" viewBox="0 0 16 16" fill="currentColor" class="text-yellow-200 drop-shadow-lg">
                    <rect x="6" y="2" width="4" height="1" />
                    <rect x="4" y="3" width="8" height="1" />
                    <rect x="3" y="4" width="10" height="1" />
                    <rect x="2" y="5" width="12" height="6" />
                    <rect x="3" y="11" width="10" height="1" />
                    <rect x="4" y="12" width="8" height="1" />
                    <rect x="6" y="13" width="4" height="1" />
                    <!-- Cracks -->
                    <rect x="7" y="5" width="1" height="1" fill="#b45309" class="animate-pulse" />
                    <rect x="8" y="6" width="1" height="1" fill="#b45309" class="animate-pulse" />
                </svg>
            `,
            baby: `
                <svg width="64" height="64" viewBox="0 0 16 16" fill="currentColor" class="text-blue-400 drop-shadow-lg">
                    <!-- Body -->
                    <rect x="4" y="6" width="8" height="6" />
                    <rect x="3" y="7" width="10" height="4" />
                    <!-- Eyes -->
                    <rect x="5" y="8" width="1" height="1" fill="white" />
                    <rect x="10" y="8" width="1" height="1" fill="white" />
                </svg>
            `,
            teen: `
                 <svg width="64" height="64" viewBox="0 0 16 16" fill="currentColor" class="text-green-400 drop-shadow-lg">
                    <!-- Head -->
                    <rect x="5" y="3" width="6" height="5" />
                    <rect x="4" y="4" width="8" height="3" />
                    <!-- Eyes -->
                    <rect x="6" y="5" width="1" height="1" fill="black" />
                    <rect x="9" y="5" width="1" height="1" fill="black" />
                    <!-- Body -->
                    <rect x="6" y="8" width="4" height="4" />
                    <!-- Legs -->
                    <rect x="5" y="12" width="1" height="2" />
                    <rect x="10" y="12" width="1" height="2" />
                </svg>
            `,
            adult: `
                <svg width="64" height="64" viewBox="0 0 16 16" fill="currentColor" class="text-red-500 drop-shadow-lg">
                    <!-- Antenna -->
                    <rect x="7" y="1" width="2" height="2" class="animate-bounce" />
                    <!-- Head -->
                    <rect x="4" y="3" width="8" height="4" />
                    <rect x="3" y="4" width="10" height="2" />
                    <!-- Visor -->
                    <rect x="5" y="4" width="6" height="1" fill="#38bdf8" />
                    <!-- Body -->
                    <rect x="5" y="7" width="6" height="5" />
                    <rect x="3" y="8" width="10" height="3" />
                    <!-- Arms -->
                    <rect x="2" y="8" width="1" height="3" />
                    <rect x="13" y="8" width="1" height="3" />
                    <!-- Legs -->
                    <rect x="4" y="12" width="2" height="3" />
                    <rect x="10" y="12" width="2" height="3" />
                </svg>
            `,
            warrior: `
                <svg width="64" height="64" viewBox="0 0 16 16" fill="currentColor" class="text-slate-700 drop-shadow-lg">
                    <!-- Helmet/Head -->
                    <rect x="5" y="2" width="6" height="4" />
                    <rect x="6" y="3" width="4" height="1" fill="#facc15" /> <!-- Gold visor -->
                    <!-- Shoulder Pads -->
                    <rect x="3" y="5" width="2" height="3" class="text-slate-500"/>
                    <rect x="11" y="5" width="2" height="3" class="text-slate-500"/>
                    <!-- Chest -->
                    <rect x="5" y="6" width="6" height="6" />
                    <rect x="7" y="7" width="2" height="2" fill="#38bdf8" class="animate-pulse"/> <!-- Core -->
                    <!-- Arms -->
                    <rect x="2" y="7" width="2" height="4" />
                    <rect x="12" y="7" width="2" height="4" />
                    <!-- Sword -->
                    <rect x="13" y="4" width="1" height="6" fill="#cyan" />
                    <rect x="12" y="9" width="3" height="1" fill="#cyan" />
                    <rect x="13" y="10" width="1" height="2" fill="brown" />
                    <!-- Legs -->
                    <rect x="4" y="12" width="3" height="3" />
                    <rect x="9" y="12" width="3" height="3" />
                </svg>
            `,
            mecha: `
                <svg width="64" height="64" viewBox="0 0 16 16" fill="currentColor" class="text-indigo-600 drop-shadow-lg">
                    <!-- Head -->
                    <rect x="6" y="2" width="4" height="3" class="text-indigo-400"/>
                    <rect x="7" y="3" width="2" height="1" fill="#ef4444" class="animate-pulse"/> <!-- Red Eye -->
                    <!-- Massive Shoulders -->
                    <rect x="2" y="4" width="4" height="4" />
                    <rect x="10" y="4" width="4" height="4" />
                    <!-- Body -->
                    <rect x="5" y="5" width="6" height="6" class="text-slate-800"/>
                    <!-- Arm Cannons -->
                    <rect x="1" y="8" width="3" height="4" class="text-slate-400"/>
                    <rect x="12" y="8" width="3" height="4" class="text-slate-400"/>
                    <!-- Legs -->
                    <rect x="3" y="11" width="4" height="4" />
                    <rect x="9" y="11" width="4" height="4" />
                </svg>
            `,
            dragon: `
                <svg width="64" height="64" viewBox="0 0 16 16" fill="currentColor" class="text-emerald-500 drop-shadow-lg">
                    <!-- Wings -->
                    <rect x="0" y="2" width="4" height="1" class="text-emerald-300"/>
                    <rect x="1" y="3" width="3" height="1" class="text-emerald-300"/>
                    <rect x="2" y="4" width="2" height="1" class="text-emerald-300"/>
                    <rect x="12" y="2" width="4" height="1" class="text-emerald-300"/>
                    <rect x="12" y="3" width="3" height="1" class="text-emerald-300"/>
                    <rect x="12" y="4" width="2" height="1" class="text-emerald-300"/>
                    <!-- Head -->
                    <rect x="6" y="2" width="4" height="4" />
                    <rect x="7" y="3" width="1" height="1" fill="black"/> <!-- Eye -->
                    <rect x="9" y="5" width="1" height="1" fill="red" class="animate-pulse"/> <!-- Fire breath start -->
                    <!-- Body -->
                    <rect x="5" y="6" width="6" height="6" />
                    <rect x="6" y="7" width="4" height="4" class="text-yellow-200"/> <!-- Belly -->
                    <!-- Tail -->
                    <rect x="11" y="10" width="2" height="1" />
                    <rect x="12" y="9" width="1" height="1" />
                    <rect x="13" y="8" width="1" height="1" />
                    <!-- Legs -->
                    <rect x="4" y="12" width="2" height="2" />
                    <rect x="10" y="12" width="2" height="2" />
                </svg>
            `,
            legend: `
                 <svg width="64" height="64" viewBox="0 0 16 16" fill="currentColor" class="text-yellow-500 drop-shadow-lg">
                    <!-- Crown -->
                    <rect x="5" y="0" width="1" height="2" />
                    <rect x="7" y="0" width="2" height="2" />
                    <rect x="10" y="0" width="1" height="2" />
                    <rect x="4" y="2" width="8" height="1" />
                    <!-- Wings -->
                    <rect x="1" y="4" width="3" height="5" class="text-white animate-pulse" />
                    <rect x="12" y="4" width="3" height="5" class="text-white animate-pulse" />
                    <!-- Head -->
                    <rect x="5" y="3" width="6" height="4" />
                    <rect x="6" y="4" width="1" height="1" fill="black" />
                    <rect x="9" y="4" width="1" height="1" fill="black" />
                    <!-- Body (Robes) -->
                    <rect x="4" y="7" width="8" height="8" class="text-purple-600" />
                    <rect x="6" y="7" width="4" height="8" class="text-purple-400" />
                    <!-- Staff -->
                    <rect x="13" y="2" width="2" height="2" fill="#ef4444" class="animate-spin" />
                    <rect x="14" y="4" width="1" height="11" fill="brown" />
                </svg>
            `
        };

        this.init();
    }

    init() {
        // Listen for level updates from app.js
        document.addEventListener('progressUpdated', (e) => {
            this.updateLevel(e.detail.level);
        });
        
        // Start animation loop
        setInterval(() => this.animate(), 500);
        this.render();
    }

    updateLevel(newLevel) {
        if (newLevel !== this.level) {
            this.level = newLevel;
            // Play evolution sound?
            if (window.sfx && !window.sfx.muted) {
                // Simple evolution jingle
                window.sfx.playTone(400, 'square', 0.1, 0, 0.1);
                window.sfx.playTone(600, 'square', 0.1, 0.1, 0.1);
                window.sfx.playTone(800, 'square', 0.2, 0.2, 0.1);
            }
            this.render();
        }
    }

    getSprite() {
        if (this.level < 1) return this.sprites.egg;
        if (this.level < 3) return this.sprites.baby;
        if (this.level < 6) return this.sprites.teen;
        if (this.level < 9) return this.sprites.adult;
        if (this.level < 12) return this.sprites.warrior;
        if (this.level < 15) return this.sprites.mecha;
        if (this.level < 18) return this.sprites.dragon;
        return this.sprites.legend;
    }

    render() {
        if (!this.container) return;
        
        // Decide which decorations to show
        let decsHtml = '';
        if (this.decorationsEnabled) {
            if (this.level >= 5) decsHtml += `<div class="absolute bottom-2 left-2 z-0 animate-bounce" style="animation-duration: 3s">${this.decorations.plant}</div>`;
            if (this.level >= 10) decsHtml += `<div class="absolute top-4 left-4 z-0 opacity-50">${this.decorations.poster}</div>`;
            if (this.level >= 15) decsHtml += `<div class="absolute bottom-2 right-2 z-0">${this.decorations.console}</div>`;
        }

        this.container.innerHTML = `
            <div class="relative group cursor-pointer" onclick="companion.interact()">
                <!-- Speech Bubble -->
                <div id="companion-bubble" class="absolute bottom-full right-0 mb-4 w-40 bg-gaming-card border-4 border-gaming-border text-gaming-text text-[10px] p-2 font-bold text-center z-50 opacity-0 transition-opacity duration-300 pointer-events-none shadow-[4px_4px_0px_0px_var(--border)]">
                    Level Up to see me grow!
                    <div class="absolute -bottom-2 right-8 w-3 h-3 bg-gaming-card border-r-4 border-b-4 border-gaming-border rotate-45"></div>
                </div>
                
                <!-- Retro Window Frame -->
                <div class="companion-window bg-gaming-card border-4 border-gaming-border shadow-[8px_8px_0px_0px_rgba(0,0,0,0.4)] w-32 h-32 flex flex-col relative transition-all duration-200 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.4)] rounded-gaming overflow-hidden">
                    <!-- Title Bar -->
                    <div class="h-6 bg-gaming-accent border-b-4 border-gaming-border flex items-center justify-between px-2">
                        <span class="text-[8px] font-black text-white tracking-widest uppercase">BUDDY.EXE</span>
                        <div class="flex gap-1">
                             <div class="w-2 h-2 bg-white border border-gaming-border"></div>
                        </div>
                    </div>
                    
                    <!-- Screen Content -->
                    <div class="flex-grow bg-gaming-dark/30 flex items-end justify-center pb-2 relative overflow-hidden">
                        <!-- Pixel Background Pattern -->
                        <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(var(--accent) 1px, transparent 1px); background-size: 4px 4px;"></div>
                        
                        <!-- Room Decorations -->
                        ${decsHtml}

                        <!-- Floor -->
                        <div class="companion-floor absolute bottom-0 w-full h-8 bg-green-400/30 border-t-4 border-green-500/30"></div>
                        
                        <!-- Sprite -->
                        <div id="companion-sprite" class="transition-all duration-300 relative z-10 scale-110">
                            ${this.getSprite()}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    animate() {
        const sprite = document.getElementById('companion-sprite');
        if (sprite) {
            this.frame = !this.frame;
            sprite.style.transform = this.frame ? 'translateY(-2px)' : 'translateY(0)';
        }
    }

    react(type) {
        const bubble = document.getElementById('companion-bubble');
        const sprite = document.getElementById('companion-sprite');
        if (!bubble || !sprite) return;

        const reactions = {
            'masterpiece': { 
                msg: "HOLY PIXELS! AN ABSOLUTE MASTERPIECE!", 
                anim: 'animate-bounce',
                color: 'text-emerald-400'
            },
            'solid': { 
                msg: "Nice! That looked like a solid play.", 
                anim: 'animate-pulse',
                color: 'text-blue-400'
            },
            'meh': { 
                msg: "Mid... but hey, a win is a win!", 
                anim: '',
                color: 'text-yellow-500'
            },
            'dropped': { 
                msg: "Farewell... another one for the vault.", 
                anim: 'opacity-50 scale-90',
                color: 'text-red-500'
            }
        };

        const r = reactions[type];
        if (!r) return;

        // Visual Reaction
        bubble.innerText = r.msg;
        bubble.classList.remove('opacity-0');
        bubble.classList.add(r.color);
        sprite.classList.add(...r.anim.split(' '));

        setTimeout(() => {
            bubble.classList.add('opacity-0');
            bubble.classList.remove(r.color);
            sprite.classList.remove(...r.anim.split(' '));
        }, 4000);
    }

    interact() {
        const bubble = document.getElementById('companion-bubble');
        if (bubble) {
            const messages = [
                "Keep going!",
                "You can do it!",
                "One more game?",
                "Don't give up!",
                "I believe in you!",
                "Pixels are cool."
            ];
            bubble.innerText = messages[Math.floor(Math.random() * messages.length)];
            bubble.classList.remove('opacity-0');
            setTimeout(() => bubble.classList.add('opacity-0'), 2000);
            
            if (window.sfx) window.sfx.playTick();
        }
    }
}

const companion = new Companion();
