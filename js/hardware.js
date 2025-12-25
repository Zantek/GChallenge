// --- Console Hardware Logic ---
let currentlyPlaying = localStorage.getItem('gamingChallengePlaying') || null;

function insertCartridge(gameId, silent = false, instant = false) {
    if (!instant && currentlyPlaying === gameId) {
        ejectCartridge();
        return;
    }

    const game = allGames.find(g => g.id === gameId);
    if (!game) return;

    currentlyPlaying = gameId;
    localStorage.setItem('gamingChallengePlaying', gameId);

    const cart = document.getElementById('active-cartridge');
    const label = document.getElementById('cart-label');
    const title = document.getElementById('cart-title');
    const led = document.getElementById('console-led');
    const status = document.getElementById('console-status-text');

    const encodedTitle = encodeURIComponent(game.title);
    const imgUrl = game.banner || `https://placehold.co/600x350/222/eee?text=${encodedTitle}`;

    if (instant) {
        cart.style.transition = 'none';
        label.style.backgroundImage = `url('${imgUrl}')`;
        title.innerText = game.title.length > 25 ? game.title.substring(0, 22) + "..." : game.title;
        cart.style.transform = 'translateY(-24px)';
        led.style.backgroundColor = '#10b981';
        led.style.boxShadow = '0 0 10px rgba(16, 185, 129, 0.8)';
        status.innerText = 'Running_ROM';
        status.classList.add('text-emerald-400/40');
        status.classList.remove('text-white/10');
        if (typeof updateAllPlayButtons === 'function') updateAllPlayButtons();
        return;
    }

    // 1. "Eject" current (fast)
    cart.style.transition = 'transform 0.2s ease-in';
    cart.style.transform = 'translateY(-120%)';
    
    setTimeout(() => {
        // 2. Load New Data
        label.style.backgroundImage = `url('${imgUrl}')`;
        title.innerText = game.title.length > 25 ? game.title.substring(0, 22) + "..." : game.title;
        
        // 3. "Insert" New (Neatly into slot)
        cart.style.transition = 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)';
        cart.style.transform = 'translateY(-24px)';
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
    }, 150);
}

function ejectCartridge() {
    currentlyPlaying = null;
    localStorage.removeItem('gamingChallengePlaying');

    const cart = document.getElementById('active-cartridge');
    const led = document.getElementById('console-led');
    const status = document.getElementById('console-status-text');

    // 1. "Eject" 
    cart.style.transition = 'transform 0.2s ease-in';
    cart.style.transform = 'translateY(-120%)';
    
    // 2. Standby LED
    led.style.backgroundColor = '#dc2626'; // Red
    led.style.boxShadow = '0 0 8px rgba(220, 38, 38, 0.6)';
    status.innerText = 'Standby';
    status.classList.remove('text-emerald-400/40');
    status.classList.add('text-white/10');

    // Update UI buttons globally
    if (typeof updateAllPlayButtons === 'function') updateAllPlayButtons();
    if (sfx) sfx.playFlip(); // Use thump sound for eject
}

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
