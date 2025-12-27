// --- Hardware Drag & Drop Logic ---
window.hardwareDrag = {
    isDragging: false,
    dragStarted: false, // NEW: Track if we've actually moved enough to drag
    currentGameId: null,
    ghost: null,
    startX: 0,
    startY: 0,

    startCardDrag(e, gameId) {
        if (e.button !== 0) return;
        
        // Don't drag if they clicked a button or interactive element inside the card
        if (e.target.closest('button') || e.target.closest('a') || e.target.closest('input')) {
            return;
        }

        const game = allGames.find(g => g.id === gameId);
        if (!game) return;

        this.currentGameId = gameId;
        this.isDragging = true;
        this.dragStarted = false; // Reset threshold
        this.startX = e.clientX;
        this.startY = e.clientY;

        // Global listeners
        this.moveHandler = this.doCardDrag.bind(this);
        this.upHandler = this.endCardDrag.bind(this);
        document.addEventListener('mousemove', this.moveHandler);
        document.addEventListener('mouseup', this.upHandler);
    },

    doCardDrag(e) {
        if (!this.isDragging) return;

        // Check Threshold (10px)
        if (!this.dragStarted) {
            const dist = Math.hypot(e.clientX - this.startX, e.clientY - this.startY);
            if (dist > 10) {
                this.dragStarted = true;
                // Once we cross threshold, we MUST prevent default to stop browser image dragging
                e.preventDefault(); 
                
                // Initialize Ghost
                this.ghost = document.getElementById('ghost-cartridge');
                const label = document.getElementById('ghost-cart-label');
                const title = document.getElementById('ghost-cart-title');
                const game = allGames.find(g => g.id === this.currentGameId);

                if (this.ghost && game) {
                    label.style.backgroundImage = `url('${game.banner}')`;
                    title.innerText = game.title;
                    this.ghost.style.opacity = '1';
                }
            } else {
                return; // Haven't moved enough yet
            }
        }

        if (!this.ghost) return;

        this.ghost.style.left = `${e.clientX - 72}px`;
        this.ghost.style.top = `${e.clientY - 48}px`;
        this.ghost.style.opacity = '1';

        // Check distance to console
        const consoleEl = document.getElementById('console-hardware');
        const rect = consoleEl.getBoundingClientRect();
        const dist = Math.hypot(e.clientX - (rect.left + rect.width/2), e.clientY - (rect.top + rect.height/2));

        if (dist < 150) {
            this.ghost.style.transform = 'scale(1) rotate(0deg)';
            this.ghost.style.boxShadow = '0 0 30px var(--accent)';
        } else {
            this.ghost.style.transform = 'scale(0.8) rotate(-5deg)';
            this.ghost.style.boxShadow = '0 20px 50px rgba(0,0,0,0.5)';
        }
    },

    endCardDrag(e) {
        if (!this.isDragging) return;
        this.isDragging = false;

        document.removeEventListener('mousemove', this.moveHandler);
        document.removeEventListener('mouseup', this.upHandler);

        if (!this.dragStarted) return; // If they didn't drag past threshold, do nothing (click handles it)
        const consoleEl = document.getElementById('console-hardware');
        const rect = consoleEl.getBoundingClientRect();
        
        // Simple hit-test
        const isOverConsole = (
            e.clientX >= rect.left - 50 && 
            e.clientX <= rect.right + 50 && 
            e.clientY >= rect.top - 50 && 
            e.clientY <= rect.bottom + 50
        );

        if (isOverConsole) {
            insertCartridge(this.currentGameId);
            if (sfx) sfx.playDing();
        }

        // Hide ghost
        if (this.ghost) {
            this.ghost.style.opacity = '0';
            this.ghost.style.transform = 'scale(0.5)';
        }
    }
};

// --- Original Cartridge Logic (Modified) ---
let currentlyPlaying = localStorage.getItem('gamingChallengePlaying') || null;

function updateHeaderMarquee(gameId) {
    const box = document.getElementById('marquee-box');
    const led = document.getElementById('marquee-led');
    const status = document.getElementById('marquee-status');
    const contents = document.querySelectorAll('.marquee-content');

    if (gameId) {
        const game = allGames.find(g => g.id === gameId);
        if (game) {
            // RUNNING STATE
            const text = `Now Playing: ${game.title} [${game.system}] ... Est. Playtime: ${game.length} ... Difficulty: ${game.difficulty}/5 ... "${game.tagline}" ... `;
            contents.forEach(el => {
                el.innerText = text;
                el.className = 'marquee-content whitespace-nowrap text-[9px] md:text-[11px] font-black font-mono text-emerald-400 uppercase tracking-widest transition-colors';
            });
            box.className = 'bg-black/40 border border-emerald-500/30 rounded-md px-3 h-[28px] md:h-[36px] flex items-center gap-3 w-full relative overflow-hidden transition-colors duration-500';
            led.className = 'w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]';
            status.innerText = 'Running';
            status.className = 'text-[7px] font-black text-emerald-500 uppercase tracking-tighter transition-colors';
        }
    } else {
        // STANDBY STATE
        const text = `System_Idle ... Waiting for ROM ... Insert cartridge to begin session ... `;
        contents.forEach(el => {
            el.innerText = text;
            el.className = 'marquee-content whitespace-nowrap text-[9px] md:text-[11px] font-black font-mono text-red-400 uppercase tracking-widest transition-colors';
        });
        box.className = 'bg-black/40 border border-red-500/30 rounded-md px-3 h-[28px] md:h-[36px] flex items-center gap-3 w-full relative overflow-hidden transition-colors duration-500';
        led.className = 'w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.6)]';
        status.innerText = 'Standby';
        status.className = 'text-[7px] font-black text-red-500 uppercase tracking-tighter transition-colors';
    }
}

function insertCartridge(gameId, silent = false, instant = false) {
    if (!instant && currentlyPlaying === gameId) {
        ejectCartridge();
        return;
    }

    const game = allGames.find(g => g.id === gameId);
    if (!game) return;

    currentlyPlaying = gameId;
    localStorage.setItem('gamingChallengePlaying', gameId);
    localStorage.setItem('gamingChallengeLastPlayedId', gameId);

    const cart = document.getElementById('active-cartridge');
    const label = document.getElementById('cart-label');
    const title = document.getElementById('cart-title');
    const led = document.getElementById('console-led');
    const status = document.getElementById('console-status-text');

    const encodedTitle = encodeURIComponent(game.title);
    const imgUrl = game.banner || `https://placehold.co/600x350/222/eee?text=${encodedTitle}`;

    localStorage.setItem('lastCartridgeBanner', game.banner || '');
    localStorage.setItem('lastCartridgeTitle', game.title || '');

    if (instant) {
        cart.style.transition = 'none';
        cart.style.userSelect = 'none'; // Prevent text selection while dragging
        label.style.backgroundImage = `url('${imgUrl}')`;
        title.innerText = game.title.length > 25 ? game.title.substring(0, 22) + "..." : game.title;
        cart.style.transform = `translateY(${CARTRIDGE_INSERTED_Y}px)`;
        cart.style.opacity = '1';
        led.style.backgroundColor = '#10b981';
        led.style.boxShadow = '0 0 10px rgba(16, 185, 129, 0.8)';
        status.innerText = 'Running_ROM';
        status.classList.add('text-emerald-400/40');
        status.classList.remove('text-white/10');
        if (typeof updateAllPlayButtons === 'function') updateAllPlayButtons();
        updateHeaderMarquee(gameId); // Instant marquee update
        return;
    }

    // 1. "Eject" current (fast)
    cart.style.transition = 'transform 0.2s ease-in, opacity 0.2s ease-in';
    cart.style.transform = 'translateY(-120%)';
    cart.style.opacity = '0';
    updateHeaderMarquee(null); // Hide marquee during swap
    
    setTimeout(() => {
        // 2. Load New Data
        label.style.backgroundImage = `url('${imgUrl}')`;
        title.innerText = game.title.length > 25 ? game.title.substring(0, 22) + "..." : game.title;
        
        // 3. "Insert" New (Neatly into slot)
        cart.style.transition = 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease-out';
        cart.style.userSelect = 'none';
        cart.style.transform = `translateY(${CARTRIDGE_INSERTED_Y}px)`;
        cart.style.opacity = '1';

        // 4. Power Surge Effect
        const isSurgeEnabled = localStorage.getItem('enablePowerSurge') === 'true';
        if (isSurgeEnabled && !silent) {
            document.body.classList.add('power-surge-active');
            if (sfx) sfx.playSurge();
            setTimeout(() => {
                document.body.classList.remove('power-surge-active');
            }, 200);
        }

        if (!silent && sfx) {
            setTimeout(() => { sfx.playInsert(); }, 300);
        }
        
        // 4. Power On LED
        led.style.backgroundColor = '#10b981'; // Green
        led.style.boxShadow = '0 0 10px rgba(16, 185, 129, 0.8)';
        status.innerText = 'Running_ROM';
        status.classList.add('text-emerald-400/40');
        status.classList.remove('text-white/10');

        // Update UI buttons globally
        if (typeof updateAllPlayButtons === 'function') updateAllPlayButtons();
        updateHeaderMarquee(gameId); // Show new game marquee
    }, 150);
}

function ejectCartridge(silent = false) {
    // Before clearing, save the last info for persistence
    if (currentlyPlaying) {
        const game = allGames.find(g => g.id === currentlyPlaying);
        if (game) {
            localStorage.setItem('lastCartridgeBanner', game.banner || '');
            localStorage.setItem('lastCartridgeTitle', game.title || '');
        }
    }

    currentlyPlaying = null;
    localStorage.removeItem('gamingChallengePlaying');

    const cart = document.getElementById('active-cartridge');
    const led = document.getElementById('console-led');
    const status = document.getElementById('console-status-text');

    // 1. "Eject" 
    cart.style.transition = silent ? 'none' : 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.2s ease-in';
    
    // If silent (boot), keep it visible but in the waiting position
    cart.style.transform = `translateY(${CARTRIDGE_EJECTED_Y}px)`;
    cart.style.opacity = '1';
    if (silent) cart.style.transition = 'none';
    
    updateHeaderMarquee(null); // Restore header title
    
    // 2. Standby LED
    led.style.backgroundColor = '#dc2626'; // Red
    led.style.boxShadow = '0 0 8px rgba(220, 38, 38, 0.6)';
    status.innerText = 'Standby';
    status.classList.remove('text-emerald-400/40');
    status.classList.add('text-white/10');

    // Update UI buttons globally
    if (typeof updateAllPlayButtons === 'function') updateAllPlayButtons();
    
    if (!silent && sfx) {
        sfx.playTone(150, 'square', 0.1, 0, 0.1); // Tactile "THUMP"
        setTimeout(() => { sfx.playTick(); }, 100);
    }
}

let isDraggingCartridge = false;
let dragStartY = 0;
let dragInitialY = -24; 
const CARTRIDGE_INSERTED_Y = -24;
const CARTRIDGE_EJECTED_Y = -60;

function startCartridgeDrag(e) {
    if (e.button !== 0) return; // Only left click
    isDraggingCartridge = true;
    dragStartY = e.clientY;
    
    // Identify where we are starting from
    dragInitialY = currentlyPlaying ? CARTRIDGE_INSERTED_Y : CARTRIDGE_EJECTED_Y;
    
    const cart = document.getElementById('active-cartridge');
    cart.style.transition = 'none'; // Instant response during drag
    
    document.addEventListener('mousemove', doCartridgeDrag);
    document.addEventListener('mouseup', endCartridgeDrag);
    
    e.preventDefault();
}

function doCartridgeDrag(e) {
    if (!isDraggingCartridge) return;
    
    const deltaY = e.clientY - dragStartY;
    const cart = document.getElementById('active-cartridge');
    
    const newY = dragInitialY + deltaY;
    
    // Constraints: 
    // - Don't go higher than -120px (leaving console)
    // - Don't go lower than 0px (sinking into console)
    const clampedY = Math.max(-120, Math.min(0, newY));
    cart.style.transform = `translateY(${clampedY}px)`;
}

function endCartridgeDrag(e) {
    if (!isDraggingCartridge) return;
    isDraggingCartridge = false;
    
    const deltaY = e.clientY - dragStartY;
    const cart = document.getElementById('active-cartridge');
    
    document.removeEventListener('mousemove', doCartridgeDrag);
    document.removeEventListener('mouseup', endCartridgeDrag);

    // Logic based on direction and state
    if (currentlyPlaying) {
        // We are playing: Drag UP to eject
        if (deltaY < -40) {
            ejectCartridge();
        } else if (Math.abs(deltaY) < 5) {
            scrollToActiveGame(e);
        } else {
            // Snap back to inserted
            cart.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
            cart.style.transform = `translateY(${CARTRIDGE_INSERTED_Y}px)`;
        }
    } else {
        // We are NOT playing: Drag DOWN to slam in
        if (deltaY > 30) {
            const lastId = localStorage.getItem('gamingChallengeLastPlayedId');
            if (lastId) {
                insertCartridge(lastId);
            } else {
                cart.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
                cart.style.transform = `translateY(${CARTRIDGE_EJECTED_Y}px)`;
            }
        } else if (Math.abs(deltaY) < 5) {
            scrollToActiveGame(e);
        } else {
            // Snap back to raised/ejected
            cart.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
            cart.style.transform = `translateY(${CARTRIDGE_EJECTED_Y}px)`;
        }
    }
}

// Attach startDrag to ThemeManager for index.html access or keep global
themeManager.startCartridgeDrag = startCartridgeDrag;

function scrollToActiveGame(event) {
    if (event) event.stopPropagation();
    if (!currentlyPlaying) return;
    const container = document.getElementById(`card-${currentlyPlaying}`);
    if (container) {
        const rect = container.getBoundingClientRect();
        const isInView = (rect.top >= 0 && rect.bottom <= window.innerHeight);
        
        container.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        const triggerHighlight = () => {
            container.classList.add('simulated-highlight');
            setTimeout(() => {
                container.classList.remove('simulated-highlight');
            }, 600);
        };

        if (isInView) {
            triggerHighlight();
        } else {
            // Wait for scroll if it was off-screen
            setTimeout(triggerHighlight, 400);
        }
    }
}
