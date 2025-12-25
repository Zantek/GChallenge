class RadioSystem {
    constructor() {
        this.ctx = null;
        this.gainNode = null;
        this.currentChannel = 'off';
        this.isPlaying = false; // Always start off
        this.channels = [
            '8-bit Chill', 
            'Cyber Pop', 
            'Star Voyager', 
            'Glitch Hack', 
            'Lofi Dreams', 
            'Neon Dusk',
            'Boss Battle'
        ];
        this.channelIndex = 0;
        
        // Interval IDs for generative loops
        this.melodyTimer = null;
        this.droneOscillators = [];
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
            this.gainNode = this.ctx.createGain();
            this.gainNode.gain.setValueAtTime(0.15, this.ctx.currentTime);
            this.gainNode.connect(this.ctx.destination);
        }
    }

    toggle() {
        if (this.isPlaying) {
            this.stop();
        } else {
            this.start();
        }
        this.updateUI();
    }

    start() {
        this.init();
        if (this.ctx.state === 'suspended') this.ctx.resume();
        this.isPlaying = true;
        this.playChannel(this.channels[this.channelIndex]);
    }

    stop() {
        this.isPlaying = false;
        this.clearLoops();
        if (this.gainNode) {
            this.gainNode.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.5);
        }
    }

    nextChannel() {
        if (!this.isPlaying) return;
        this.channelIndex = (this.channelIndex + 1) % this.channels.length;
        this.playChannel(this.channels[this.channelIndex]);
        this.updateUI();
        if (window.sfx) sfx.playTick();
    }

    prevChannel() {
        if (!this.isPlaying) return;
        this.channelIndex = (this.channelIndex - 1 + this.channels.length) % this.channels.length;
        this.playChannel(this.channels[this.channelIndex]);
        this.updateUI();
        if (window.sfx) sfx.playTick();
    }

    setChannel(index) {
        this.channelIndex = index;
        if (this.isPlaying) {
            this.playChannel(this.channels[this.channelIndex]);
        }
        this.updateUI();
        if (window.sfx) sfx.playTick();
    }

    playChannel(name) {
        this.clearLoops();
        this.gainNode.gain.cancelScheduledValues(this.ctx.currentTime);
        this.gainNode.gain.setValueAtTime(0.15, this.ctx.currentTime);

        switch (name) {
            case '8-bit Chill': this.start8BitChill(); break;
            case 'Cyber Pop': this.startCyberPop(); break;
            case 'Star Voyager': this.startStarVoyager(); break;
            case 'Glitch Hack': this.startGlitchHack(); break;
            case 'Lofi Dreams': this.startLofiDreams(); break;
            case 'Neon Dusk': this.startNeonDusk(); break;
            case 'Boss Battle': this.startBossBattle(); break;
        }
    }

    clearLoops() {
        if (this.melodyTimer) clearInterval(this.melodyTimer);
        this.droneOscillators.forEach(osc => {
            try { osc.stop(); } catch(e) {}
        });
        this.droneOscillators = [];
    }

    // --- Generative Logic ---

    start8BitChill() {
        const scale = [261.63, 293.66, 311.13, 349.23, 392.00, 415.30, 466.16]; // C Minor
        
        this.melodyTimer = setInterval(() => {
            if (!this.isPlaying) return;
            if (Math.random() > 0.7) return; 

            const freq = scale[Math.floor(Math.random() * scale.length)];
            const osc = this.ctx.createOscillator();
            const g = this.ctx.createGain();
            
            osc.type = 'square';
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
            
            g.gain.setValueAtTime(0.05, this.ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);
            
            osc.connect(g);
            g.connect(this.gainNode);
            
            osc.start();
            osc.stop(this.ctx.currentTime + 0.5);
        }, 250);
    }

    startCyberPop() {
        const scale = [261.63, 293.66, 329.63, 392.00, 440.00]; // C Major Pentatonic
        this.melodyTimer = setInterval(() => {
            if (!this.isPlaying) return;
            const freq = scale[Math.floor(Math.random() * scale.length)];
            const osc = this.ctx.createOscillator();
            const g = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq * 2, this.ctx.currentTime);
            g.gain.setValueAtTime(0.04, this.ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);
            osc.connect(g);
            g.connect(this.gainNode);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.2);
        }, 150); 
    }

    startStarVoyager() {
        const scale = [130.81, 164.81, 196.00, 246.94]; // C Maj 7 Arpeggio
        let step = 0;
        this.melodyTimer = setInterval(() => {
            if (!this.isPlaying) return;
            const freq = scale[step % scale.length];
            const osc = this.ctx.createOscillator();
            const filter = this.ctx.createBiquadFilter();
            const g = this.ctx.createGain();
            
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
            
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(400 + Math.sin(this.ctx.currentTime) * 200, this.ctx.currentTime);
            filter.Q.setValueAtTime(10, this.ctx.currentTime);

            g.gain.setValueAtTime(0.03, this.ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);
            
            osc.connect(filter);
            filter.connect(g);
            g.connect(this.gainNode);
            
            osc.start();
            osc.stop(this.ctx.currentTime + 0.5);
            step++;
        }, 200);
    }

    startGlitchHack() {
        this.melodyTimer = setInterval(() => {
            if (!this.isPlaying) return;
            const freq = 50 + Math.random() * 2000;
            const osc = this.ctx.createOscillator();
            const g = this.ctx.createGain();
            
            osc.type = Math.random() > 0.5 ? 'sawtooth' : 'square';
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
            
            g.gain.setValueAtTime(0.02, this.ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
            
            osc.connect(g);
            g.connect(this.gainNode);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.05);
        }, 80); // Fast chaotic blips
    }

    startLofiDreams() {
        const chord = [261.63, 329.63, 392.00, 493.88]; // C Maj 7
        this.melodyTimer = setInterval(() => {
            if (!this.isPlaying) return;
            const osc = this.ctx.createOscillator();
            const filter = this.ctx.createBiquadFilter();
            const g = this.ctx.createGain();
            
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(chord[Math.floor(Math.random() * chord.length)], this.ctx.currentTime);
            
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(300, this.ctx.currentTime);
            filter.Q.setValueAtTime(5, this.ctx.currentTime);

            g.gain.setValueAtTime(0, this.ctx.currentTime);
            g.gain.linearRampToValueAtTime(0.03, this.ctx.currentTime + 1.0);
            g.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 2.0);
            
            osc.connect(filter);
            filter.connect(g);
            g.connect(this.gainNode);
            
            osc.start();
            osc.stop(this.ctx.currentTime + 2.0);
        }, 1500);
    }

    startNeonDusk() {
        const createPad = (freq) => {
            const osc = this.ctx.createOscillator();
            const g = this.ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
            g.gain.setValueAtTime(0.02, this.ctx.currentTime);
            osc.connect(g);
            g.connect(this.gainNode);
            osc.start();
            this.droneOscillators.push(osc);
        };
        createPad(130.81); // C3
        createPad(196.00); // G3
        
        this.melodyTimer = setInterval(() => {
            if (Math.random() > 0.4) return;
            const osc = this.ctx.createOscillator();
            const g = this.ctx.createGain();
            osc.type = 'square';
            osc.frequency.setValueAtTime(523.25 * (Math.random() > 0.5 ? 1 : 1.5), this.ctx.currentTime);
            g.gain.setValueAtTime(0.01, this.ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.5);
            osc.connect(g);
            g.connect(this.gainNode);
            osc.start();
            osc.stop(this.ctx.currentTime + 1.5);
        }, 2000);
    }

    startBossBattle() {
        const scale = [130.81, 146.83, 155.56, 174.61, 196.00]; // C minorish
        let step = 0;
        this.melodyTimer = setInterval(() => {
            if (!this.isPlaying) return;
            const freq = scale[step % scale.length];
            const osc = this.ctx.createOscillator();
            const g = this.ctx.createGain();
            
            osc.type = 'square';
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
            if (step % 4 === 0) osc.frequency.setValueAtTime(freq / 2, this.ctx.currentTime); // Bass thump
            
            g.gain.setValueAtTime(0.05, this.ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);
            
            osc.connect(g);
            g.connect(this.gainNode);
            
            osc.start();
            osc.stop(this.ctx.currentTime + 0.15);
            step++;
        }, 125);
    }

    updateUI() {
        const toggle = document.getElementById('setting-radio');
        const channelList = document.getElementById('radio-channels');
        const modalDisplay = document.getElementById('radio-modal-display');
        
        if (!toggle || !channelList) return;

        toggle.checked = this.isPlaying;
        
        if (this.isPlaying) {
            channelList.classList.remove('opacity-50', 'pointer-events-none');
        } else {
            channelList.classList.add('opacity-50', 'pointer-events-none');
        }

        if (modalDisplay) {
            modalDisplay.innerText = this.channels[this.channelIndex];
        }
    }
}

const radio = new RadioSystem();
