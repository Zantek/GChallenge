class BootSequence {
    constructor() {
        this.overlay = document.getElementById('boot-overlay');
        this.terminal = document.getElementById('boot-terminal');
        this.skipBoot = localStorage.getItem('skipBootSequence') === 'true';
        this.bootEnabled = true; // Code-level master toggle
    }

    init() {
        this.overlay = document.getElementById('boot-overlay');
        this.terminal = document.getElementById('boot-terminal');
        this.prompt = document.getElementById('boot-prompt');
        this.skipBoot = localStorage.getItem('skipBootSequence') === 'true';
        
        if (!this.bootEnabled || this.skipBoot) {
            if (this.overlay) this.overlay.remove();
            return;
        }
        
        if (this.overlay) {
            // Show prompt, hide terminal
            this.prompt.classList.remove('hidden');
            this.terminal.classList.add('hidden');
        }
    }

    start() {
        // Unlock Audio
        if (window.sfx) {
            sfx.init();
            if (sfx.ctx && sfx.ctx.state === 'suspended') sfx.ctx.resume();
        }

        // Switch visuals
        this.prompt.classList.add('hidden');
        this.terminal.classList.remove('hidden');
        this.overlay.classList.replace('items-center', 'items-start'); // Move text to top
        
        this.runSequence();
    }

    async runSequence() {
        if (!this.overlay || !this.terminal) return;

        const lines = [
            "GAMING CHALLENGE BIOS v4.0.26",
            "COPYRIGHT (C) 2026 GEMINI SYSTEMS",
            "",
            "BIOS CHECKSUM... 0x8FF2 OK",
            "CHECKING MEMORY... 1048576 KB OK",
            "CMOS BATTERY STATUS... 3.3V OK",
            "DETECTING HARDWARE... EMULATOR DETECTED",
            "CPU TEMPERATURE... 42C (STABLE)",
            "VOLTAGE MONITOR... 1.2V NOMINAL",
            "SCANNING PCI BUS... 4 DEVICES FOUND",
            "INITIALIZING GPU... PIXEL-SHADER v3.0 OK",
            "RENDER BUFFER... 4096MB ALLOCATED",
            "VRAM VERIFICATION... 8GB DETECTED",
            "VERIFYING DISPLAY... CRT CALIBRATION COMPLETE",
            "I/O PORTS INITIALIZATION... OK",
            "MOUNTING DRIVE C: ... GAMES/2026/BACKLOG FOUND",
            "SCANNING DIRECTORIES... 36 TITLES IDENTIFIED",
            "INDEXING BANNERS... OK",
            "LOADING COMPANION PROTOCOL... BUDDY.EXE OK",
            "VERIFYING BUDDY HEARTBEAT... 8-BIT PULSE DETECTED",
            "SYNCHRONIZING CRT CLOCK... OK",
            "CHECKING STAMP INK RESERVOIR... 98% OK",
            "PREPARING CONFETTI CANNON... CHARGED",
            "CALCULATING ALIGNMENT CHART... READY",
            "SCANNING FOR HIDDEN ACHIEVEMENTS... 0 FOUND",
            "LOADING THEME_SHADERS... OK",
            "ENABLING LEGACY_MODE... COMPATIBILITY OK",
            "INJECTING VISUAL JUICE... 100% OK",
            "ESTABLISHING SECURE CONNECTION TO 2026_GAMING_LIST...",
            "SYSTEM STATUS: NOMINAL",
            "",
            "SYSTEM INITIALIZATION COMPLETE.",
            "BOOTING CHALLENGE_OS..."
        ];

        // 1. Text Scrolling
        for (let line of lines) {
            const p = document.createElement('div');
            p.className = 'opacity-0';
            p.innerText = line;
            this.terminal.appendChild(p);
            
            await this.wait(40); // 20% faster than 50ms
            p.classList.remove('opacity-0');
            this.terminal.scrollTop = this.terminal.scrollHeight;
            
            if (sfx) sfx.playTone(800, 'square', 0.02, 0, 0.02);
        }

        await this.wait(800);

        // 3. Simple Fade Out
        this.overlay.style.pointerEvents = 'none';
        this.overlay.classList.add('opacity-0');
        
        setTimeout(() => {
            this.overlay.remove();
        }, 500);
    }

    wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

const bootSequence = new BootSequence();
