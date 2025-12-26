// --- Audio System (Procedural 8-bit Sound) ---
class SoundFX {
    constructor() {
        this.muted = localStorage.getItem('gamingChallengeAudioMuted') === 'true';
        this.ctx = null;
        this.updateUI();
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
        }
    }

    toggleMute() {
        this.muted = !this.muted;
        localStorage.setItem('gamingChallengeAudioMuted', this.muted);
        this.updateUI();
        if (!this.muted) this.playTick(); // Feedback
    }

    updateUI() {
        const on = document.getElementById('icon-sound-on');
        const off = document.getElementById('icon-sound-off');
        if (on && off) {
            if (this.muted) {
                on.classList.add('hidden');
                off.classList.remove('hidden');
            } else {
                on.classList.remove('hidden');
                off.classList.add('hidden');
            }
        }
    }

    playTone(freq, type, duration, startTime = 0, vol = 0.1) {
        if (this.muted) return;
        this.init();
        if (this.ctx.state === 'suspended') this.ctx.resume();

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + startTime);
        
        gain.gain.setValueAtTime(vol, this.ctx.currentTime + startTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + startTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(this.ctx.currentTime + startTime);
        osc.stop(this.ctx.currentTime + startTime + duration);
    }

    playCoin() {
        // 8-bit "bling": Square wave rapid pitch slide
        if (this.muted) return;
        this.init();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'square';
        osc.frequency.setValueAtTime(1200, now);
        osc.frequency.linearRampToValueAtTime(2000, now + 0.1); // Slide up
        
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.1);
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.start(now);
        osc.stop(now + 0.1);
    }

    playTick() {
        // Menu hover tick: very short high pitch blip
        this.playTone(800, 'square', 0.03, 0, 0.03);
    }

    playFanfare() {
        if (this.muted) return;
        this.init();
        const vol = 0.1;

        // Even more accurate FF-style timing
        const notes = [
            { f: 523.25, d: 0.05, t: 0.00 }, // Triplet 1
            { f: 523.25, d: 0.05, t: 0.07 }, // Triplet 2
            { f: 523.25, d: 0.05, t: 0.14 }, // Triplet 3
            { f: 523.25, d: 0.25, t: 0.21 }, // Sustained C
            
            { f: 415.30, d: 0.12, t: 0.46 }, // Ab4 (Faster)
            { f: 466.16, d: 0.12, t: 0.58 }, // Bb4 (Faster)
        ];

        notes.forEach(n => {
            this.playTone(n.f, 'square', n.d, n.t, vol);
        });

        // Final Triumphant Chord (Faster transition)
        const chordTime = 0.70;
        this.playTone(523.25, 'square', 1, chordTime, vol);      
        this.playTone(659.25, 'square', 1, chordTime, vol * 0.8); 
        this.playTone(783.99, 'square', 1, chordTime, vol * 0.8); 
        this.playTone(1046.50, 'square', 1, chordTime, vol * 0.5);
    }

    playSurge() {
        if (this.muted) return;
        this.playTone(60, 'sawtooth', 0.2, 0, 0.2); // Low heavy thump
        this.playTone(120, 'sine', 0.1, 0.05, 0.1); // Resonance
    }

    playThud() {
        if (this.muted) return;
        this.init();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.exponentialRampToValueAtTime(40, now + 0.2);
        
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.2);
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.start(now);
        osc.stop(now + 0.2);
    }

    playDing() {
        if (this.muted) return;
        this.init();
        const now = this.ctx.currentTime;
        // High pitched short square wave "ding"
        this.playTone(1200, 'square', 0.1, 0, 0.1);
    }

    playFlip() {
        if (this.muted) return;
        this.init();
        const now = this.ctx.currentTime;
        // Soft low thump/knock
        this.playTone(150, 'sine', 0.1, 0, 0.1);
    }

    playInsert() {
        if (this.muted) return;
        this.init();
        const now = this.ctx.currentTime;
        // Mechanical slide + snap (two parts)
        this.playTone(400, 'square', 0.05, 0, 0.05); // Slide
        this.playTone(200, 'sine', 0.1, 0.05, 0.1);  // Snap/Lock
    }
}

const sfx = new SoundFX();
