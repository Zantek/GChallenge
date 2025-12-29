class RadioSystem {
    constructor() {
        this.ctx = null;
        this.gainNode = null;
        this.analyser = null;
        this.dataArray = null;
        this.canvas = null;
        this.canvasCtx = null;
        this.animationId = null;
        
        this.currentChannel = 'off';
        this.isPlaying = false; // Always start off
        
        this.activeBand = 'FM'; // 'FM' (Basic) or 'HF' (Hi-Fi)
        this.bands = {
            'FM': [
                'Quest Start', '8-bit Chill', 'Cyber Pop', 'Star Voyager', 
                'Boss Battle', 'Ocean Waves', 'Haunted', 'Nebula', 'Sunrise'
            ],
            'HF': [
                'Deep Signal',
                'Lunar Garden',
                'Clockwork Soul',
                'Pixel Pulse',
                'Midnight Drift',
                'Memory Leak',
                'Level Up'
            ]
        };
        
        this.channels = this.bands[this.activeBand];
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

            // Setup Analyser
            this.analyser = this.ctx.createAnalyser();
            this.analyser.fftSize = 128;
            this.gainNode.connect(this.analyser);
            this.gainNode.connect(this.ctx.destination);

            const bufferLength = this.analyser.frequencyBinCount;
            this.dataArray = new Uint8Array(bufferLength);

            // Setup Canvas
            this.canvas = document.getElementById('radio-visualizer');    
            if (this.canvas) {
                this.canvasCtx = this.canvas.getContext('2d');
                this.resizeCanvas();
                window.addEventListener('resize', () => this.resizeCanvas());
            }
        }
    }

    resizeCanvas() {
        if (!this.canvas) return;
        const rect = this.canvas.parentElement.getBoundingClientRect();   
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
    }

    toggle() {
        if (this.isPlaying) this.stop(); else this.start();
        this.updateUI();
    }

    next() {
        if (!this.isPlaying) this.start();
        
        // Create a flat list of all channels across all bands
        const allChannels = [...this.bands['FM'], ...this.bands['HF']];
        const currentName = this.channels[this.channelIndex];
        let overallIndex = allChannels.indexOf(currentName);
        
        overallIndex = (overallIndex + 1) % allChannels.length;
        const nextName = allChannels[overallIndex];
        
        // Determine which band the new channel belongs to
        this.activeBand = this.bands['HF'].includes(nextName) ? 'HF' : 'FM';
        this.channels = this.bands[this.activeBand];
        this.channelIndex = this.channels.indexOf(nextName);
        
        this.playChannel(nextName);
        this.updateUI();
        if (window.sfx) sfx.playTick();
    }

    prev() {
        if (!this.isPlaying) this.start();
        
        const allChannels = [...this.bands['FM'], ...this.bands['HF']];
        const currentName = this.channels[this.channelIndex];
        let overallIndex = allChannels.indexOf(currentName);
        
        overallIndex = (overallIndex - 1 + allChannels.length) % allChannels.length;
        const nextName = allChannels[overallIndex];
        
        this.activeBand = this.bands['HF'].includes(nextName) ? 'HF' : 'FM';
        this.channels = this.bands[this.activeBand];
        this.channelIndex = this.channels.indexOf(nextName);
        
        this.playChannel(nextName);
        this.updateUI();
        if (window.sfx) sfx.playTick();
    }

    nextChannel() { this.next(); }
    prevChannel() { this.prev(); }

    start() {
        this.init();
        if (this.ctx.state === 'suspended') this.ctx.resume();
        this.isPlaying = true;
        this.playChannel(this.channels[this.channelIndex]);
        this.startVisualizer();
    }

    stop() {
        this.isPlaying = false;
        this.clearLoops();
        if (this.animationId) cancelAnimationFrame(this.animationId);     
        if (this.gainNode) {
            this.gainNode.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.5);
        }
        setTimeout(() => { if (!this.isPlaying && this.canvasCtx) this.canvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height); }, 600);
    }

    startVisualizer() {
        if (!this.canvasCtx) return;
        const draw = () => {
            if (!this.isPlaying) return;
            this.animationId = requestAnimationFrame(draw);
            this.analyser.getByteFrequencyData(this.dataArray);
            this.canvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            const barWidth = (this.canvas.width / this.dataArray.length) * 2.5;
            let barHeight;
            let x = 0;
            const theme = document.documentElement.getAttribute('data-theme');
            let color = '#10b981';
            if (theme === 'brick') color = '#0f380f';
            if (theme === 'cube') color = '#ff4500';
            if (theme === 'os') color = '#000080';
            if (theme === 'legacy') color = '#ffffff';
            if (theme === 'blueprint') color = '#00f2ff';
            if (theme === 'woodgrain') color = '#ffbf00';
            if (theme === 'papercraft') color = '#333333';
            if (theme === 'candy') color = '#ff00ff';
            if (theme === 'arcade') color = '#ff00ff';
            if (theme === 'obsidian') color = '#ff6600';
            if (theme === 'hydraulic') color = '#fbbf24';

            for (let i = 0; i < this.dataArray.length; i++) {
                barHeight = (this.dataArray[i] / 255) * this.canvas.height * 0.8;
                this.canvasCtx.fillStyle = color;
                this.canvasCtx.globalAlpha = 0.2;
                this.canvasCtx.fillRect(x, this.canvas.height - barHeight, barWidth - 1, barHeight);
                x += barWidth;
            }
        };
        draw();
    }

    toggleBand() {
        this.activeBand = (this.activeBand === 'FM') ? 'HF' : 'FM';
        this.channels = this.bands[this.activeBand];
        this.channelIndex = 0;
        if (this.isPlaying) this.playChannel(this.channels[this.channelIndex]);
        this.updateUI();
        if (window.sfx) sfx.playTick();
    }

    setChannel(index) {
        this.channelIndex = index;
        if (this.isPlaying) this.playChannel(this.channels[this.channelIndex]);
        this.updateUI();
        if (window.sfx) sfx.playTick();
    }

    playChannel(name) {
        this.clearLoops();
        this.gainNode.gain.cancelScheduledValues(this.ctx.currentTime);   
        this.gainNode.gain.setValueAtTime(0.15, this.ctx.currentTime);    
        switch (name) {
            case 'Quest Start': this.startQuestStart(); break;
            case '8-bit Chill': this.start8BitChill(); break;
            case 'Cyber Pop': this.startCyberPop(); break;
            case 'Star Voyager': this.startStarVoyager(); break;
            case 'Boss Battle': this.startBossBattle(); break;
            case 'Ocean Waves': this.startOceanWaves(); break;
            case 'Haunted': this.startHaunted(); break;
            case 'Nebula': this.startNebula(); break;
            case 'Sunrise': this.startSunrise(); break;
            case 'Deep Signal': this.startDeepSignal(); break;
            case 'Lunar Garden': this.startLunarGarden(); break;
            case 'Clockwork Soul': this.startClockworkSoul(); break;
            case 'Pixel Pulse': this.startPixelPulse(); break;
            case 'Midnight Drift': this.startMidnightDrift(); break;
            case 'Memory Leak': this.startMemoryLeak(); break;
            case 'Level Up': this.startLevelUp(); break;
        }
    }

    clearLoops() {
        if (this.melodyTimer) clearInterval(this.melodyTimer);
        this.droneOscillators.forEach(osc => { try { osc.stop(); } catch(e) {} });
        this.droneOscillators = [];
    }

    // --- Generative Logic ---

    startQuestStart() {
        const scale = [261.63, 329.63, 392.00, 523.25, 493.88, 392.00, 329.63, 349.23];
        let step = 0;
        this.melodyTimer = setInterval(() => {
            const osc = this.ctx.createOscillator();
            const g = this.ctx.createGain();
            osc.type = 'square';
            osc.frequency.setValueAtTime(scale[step % scale.length], this.ctx.currentTime);
            g.gain.setValueAtTime(0.05, this.ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);
            osc.connect(g); g.connect(this.gainNode);
            osc.start(); osc.stop(this.ctx.currentTime + 0.2);
            step++;
        }, 200);
    }

    start8BitChill() {
        const scale = [261.63, 293.66, 311.13, 349.23, 392.00, 415.30, 466.16];
        this.melodyTimer = setInterval(() => {
            if (Math.random() > 0.7) return;
            const freq = scale[Math.floor(Math.random() * scale.length)]; 
            const osc = this.ctx.createOscillator();
            const g = this.ctx.createGain();
            osc.type = 'square'; osc.frequency.setValueAtTime(freq, this.ctx.currentTime);     
            g.gain.setValueAtTime(0.05, this.ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);
            osc.connect(g); g.connect(this.gainNode);
            osc.start(); osc.stop(this.ctx.currentTime + 0.5);
        }, 250);
    }

    startCyberPop() {
        const scale = [261.63, 293.66, 329.63, 392.00, 440.00];
        this.melodyTimer = setInterval(() => {
            const freq = scale[Math.floor(Math.random() * scale.length)]; 
            const osc = this.ctx.createOscillator();
            const g = this.ctx.createGain();
            osc.type = 'triangle'; osc.frequency.setValueAtTime(freq * 2, this.ctx.currentTime); 
            g.gain.setValueAtTime(0.04, this.ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);
            osc.connect(g); g.connect(this.gainNode);
            osc.start(); osc.stop(this.ctx.currentTime + 0.2);
        }, 150);
    }

    startStarVoyager() {
        const scale = [130.81, 164.81, 196.00, 246.94];
        let step = 0;
        this.melodyTimer = setInterval(() => {
            const freq = scale[step % scale.length];
            const osc = this.ctx.createOscillator();
            const filter = this.ctx.createBiquadFilter();
            const g = this.ctx.createGain();
            osc.type = 'sawtooth'; osc.frequency.setValueAtTime(freq, this.ctx.currentTime);     
            filter.type = 'lowpass'; filter.frequency.setValueAtTime(400 + Math.sin(this.ctx.currentTime) * 200, this.ctx.currentTime);
            g.gain.setValueAtTime(0.03, this.ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);
            osc.connect(filter); filter.connect(g); g.connect(this.gainNode);
            osc.start(); osc.stop(this.ctx.currentTime + 0.5);
            step++;
        }, 200);
    }

    startBossBattle() {
        const scale = [130.81, 146.83, 155.56, 174.61, 196.00];
        let step = 0;
        this.melodyTimer = setInterval(() => {
            const freq = scale[step % scale.length];
            const osc = this.ctx.createOscillator();
            const g = this.ctx.createGain();
            osc.type = 'square'; osc.frequency.setValueAtTime(freq, this.ctx.currentTime);     
            if (step % 4 === 0) osc.frequency.setValueAtTime(freq / 2, this.ctx.currentTime);
            g.gain.setValueAtTime(0.05, this.ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);
            osc.connect(g); g.connect(this.gainNode);
            osc.start(); osc.stop(this.ctx.currentTime + 0.15);
            step++;
        }, 125);
    }

    startOceanWaves() {
        const bufferSize = 2 * this.ctx.sampleRate;
        const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) output[i] = Math.random() * 2 - 1;
        const noise = this.ctx.createBufferSource();
        noise.buffer = noiseBuffer; noise.loop = true;
        const filter = this.ctx.createBiquadFilter(); filter.type = 'lowpass';
        const lfo = this.ctx.createOscillator(); const lfoGain = this.ctx.createGain();
        lfo.frequency.setValueAtTime(0.15, this.ctx.currentTime);
        lfoGain.gain.setValueAtTime(400, this.ctx.currentTime);
        lfo.connect(lfoGain); lfoGain.connect(filter.frequency);
        const g = this.ctx.createGain(); g.gain.setValueAtTime(0.05, this.ctx.currentTime);
        noise.connect(filter); filter.connect(g); g.connect(this.gainNode);
        noise.start(); lfo.start();
        this.droneOscillators.push(noise, lfo);
    }

    startHaunted() {
        const frequencies = [200, 250, 300];
        frequencies.forEach(f => {
            const osc = this.ctx.createOscillator(); const lfo = this.ctx.createOscillator(); const lfoGain = this.ctx.createGain();
            osc.type = 'sine'; lfo.frequency.setValueAtTime(3 + Math.random(), this.ctx.currentTime);
            lfoGain.gain.setValueAtTime(10, this.ctx.currentTime); lfo.connect(lfoGain); lfoGain.connect(osc.frequency);
            const g = this.ctx.createGain(); g.gain.setValueAtTime(0.02, this.ctx.currentTime);
            osc.connect(g); g.connect(this.gainNode);
            osc.start(); lfo.start();
            this.droneOscillators.push(osc, lfo);
        });
    }

    startNebula() {
        [110, 164, 220].forEach(f => {
            const osc = this.ctx.createOscillator(); const g = this.ctx.createGain();
            osc.frequency.setValueAtTime(f, this.ctx.currentTime); g.gain.setValueAtTime(0, this.ctx.currentTime);
            g.gain.linearRampToValueAtTime(0.03, this.ctx.currentTime + 4);
            osc.connect(g); g.connect(this.gainNode);
            osc.start(); this.droneOscillators.push(osc);
        });
    }

    startSunrise() {
        const scale = [523, 587, 659, 783, 880];
        this.melodyTimer = setInterval(() => {
            const osc = this.ctx.createOscillator(); osc.type = 'triangle';
            osc.frequency.setValueAtTime(scale[Math.floor(Math.random()*scale.length)], this.ctx.currentTime);
            const g = this.ctx.createGain(); g.gain.setValueAtTime(0.03, this.ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1);
            osc.connect(g); g.connect(this.gainNode);
            osc.start(); osc.stop(this.ctx.currentTime + 1);
        }, 1000);
    }

    startDeepSignal() {
        let step = 0; const scale = [130.81, 164.81, 196.00];
        this.melodyTimer = setInterval(() => {
            if (step % 4 === 0) {
                const k = this.ctx.createOscillator(); const kg = this.ctx.createGain();
                k.frequency.setValueAtTime(150, this.ctx.currentTime); k.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.2);
                kg.gain.setValueAtTime(0.15, this.ctx.currentTime); kg.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);
                k.connect(kg); kg.connect(this.gainNode); k.start(); k.stop(this.ctx.currentTime + 0.2);
            }
            if (Math.random() > 0.7) {
                const lead = this.ctx.createOscillator(); const lg = this.ctx.createGain(); lead.type = 'triangle';
                lead.frequency.setValueAtTime(scale[Math.floor(Math.random()*scale.length)] * 2, this.ctx.currentTime);
                lg.gain.setValueAtTime(0, this.ctx.currentTime); lg.gain.linearRampToValueAtTime(0.03, this.ctx.currentTime + 0.1);
                lg.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.8);
                lead.connect(lg); lg.connect(this.gainNode); lead.start(); lead.stop(this.ctx.currentTime + 1);
            }
            step++;
        }, 250);
    }

    startLunarGarden() {
        const scale = [261.63, 293.66, 329.63, 392.00, 440.00];
        let step = 0;
        this.melodyTimer = setInterval(() => {
            const now = this.ctx.currentTime;
            if (step % 2 === 0) {
                const bass = this.ctx.createOscillator(); const bg = this.ctx.createGain();
                bass.type = 'square'; bass.frequency.setValueAtTime(scale[step % 3] / 2, now);
                bg.gain.setValueAtTime(0.02, now); bg.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
                bass.connect(bg); bg.connect(this.gainNode); bass.start(); bass.stop(now + 0.4);
            }
            if (Math.random() > 0.4) {
                const lead = this.ctx.createOscillator(); const lg = this.ctx.createGain();
                lead.type = 'square'; lead.frequency.setValueAtTime(scale[Math.floor(Math.random()*scale.length)] * 2, now);
                lg.gain.setValueAtTime(0.03, now); lg.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
                lead.connect(lg); lg.connect(this.gainNode); lead.start(); lead.stop(now + 0.2);
            }
            step++;
        }, 400);
    }

    startClockworkSoul() {
        let step = 0;
        this.melodyTimer = setInterval(() => {
            const now = this.ctx.currentTime;
            const tick = this.ctx.createOscillator(); const tg = this.ctx.createGain();
            tick.type = 'square'; tick.frequency.setValueAtTime(step % 4 === 0 ? 110 : 220, now);
            tg.gain.setValueAtTime(0.03, now); tg.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
            tick.connect(tg); tg.connect(this.gainNode); tick.start(); tick.stop(now + 0.05);
            if (step % 8 === 0) {
                const bell = this.ctx.createOscillator(); const bg = this.ctx.createGain();
                bell.type = 'sine'; bell.frequency.setValueAtTime(880, now);
                bg.gain.setValueAtTime(0.02, now); bg.gain.exponentialRampToValueAtTime(0.001, now + 1.5);
                bell.connect(bg); bg.connect(this.gainNode); bell.start(); bell.stop(now + 1.5);
            }
            step++;
        }, 250);
    }

    startPixelPulse() {
        // Upbeat 8-bit dance: High energy PWM and driving kick
        const scale = [261.63, 311.13, 349.23, 392.00, 466.16]; // C Minor Pentatonic
        let step = 0;
        this.melodyTimer = setInterval(() => {
            const now = this.ctx.currentTime;
            // Four-on-the-floor Kick
            if (step % 4 === 0) {
                const k = this.ctx.createOscillator(); const kg = this.ctx.createGain();
                k.frequency.setValueAtTime(150, now); k.frequency.exponentialRampToValueAtTime(40, now + 0.15);
                kg.gain.setValueAtTime(0.2, now); kg.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
                k.connect(kg); kg.connect(this.gainNode); k.start(); k.stop(now + 0.15);
            }
            // Arp Lead
            const lead = this.ctx.createOscillator(); const lg = this.ctx.createGain();
            lead.type = 'square'; lead.frequency.setValueAtTime(scale[step % scale.length] * 2, now);
            lg.gain.setValueAtTime(0.04, now); lg.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
            lead.connect(lg); lg.connect(this.gainNode); lead.start(); lead.stop(now + 0.1);
            step++;
        }, 125);
    }

    startMidnightDrift() {
        // Chill 16-bit: Warm sawtooth pads with LFO filter
        const chords = [130.81, 164.81, 196.00, 220.00]; // Cmaj7/Am7
        chords.forEach(f => {
            const osc = this.ctx.createOscillator(); const g = this.ctx.createGain();
            const filter = this.ctx.createBiquadFilter();
            osc.type = 'sawtooth'; osc.frequency.setValueAtTime(f, this.ctx.currentTime);
            filter.type = 'lowpass'; filter.Q.setValueAtTime(5, this.ctx.currentTime);
            const lfo = this.ctx.createOscillator(); const lfoG = this.ctx.createGain();
            lfo.frequency.setValueAtTime(0.1, this.ctx.currentTime); lfoG.gain.setValueAtTime(200, this.ctx.currentTime);
            lfo.connect(lfoG); lfoG.connect(filter.frequency);
            g.gain.setValueAtTime(0.02, this.ctx.currentTime);
            osc.connect(filter); filter.connect(g); g.connect(this.gainNode);
            osc.start(); lfo.start(); this.droneOscillators.push(osc, lfo);
        });
    }

    startMemoryLeak() {
        // Glitchy/Upbeat: Fast blips and noise percussion
        let step = 0;
        this.melodyTimer = setInterval(() => {
            const now = this.ctx.currentTime;
            // Digital Snare
            if (step % 4 === 2) {
                const n = this.ctx.createOscillator(); const ng = this.ctx.createGain();
                n.type = 'square'; n.frequency.setValueAtTime(Math.random() * 5000 + 2000, now);
                ng.gain.setValueAtTime(0.05, now); ng.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
                n.connect(ng); ng.connect(this.gainNode); n.start(); n.stop(now + 0.05);
            }
            // Rapid Glitch Melodies
            if (Math.random() > 0.3) {
                const b = this.ctx.createOscillator(); const bg = this.ctx.createGain();
                b.type = 'triangle'; b.frequency.setValueAtTime(440 + (Math.random() * 880), now);
                bg.gain.setValueAtTime(0.03, now); bg.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
                b.connect(bg); bg.connect(this.gainNode); b.start(); b.stop(now + 0.08);
            }
            step++;
        }, 100);
    }

    startLevelUp() {
        // Heroic Retro: Rising arpeggios and bright leads
        const scale = [261.63, 329.63, 392.00, 523.25]; // C Major
        let step = 0;
        this.melodyTimer = setInterval(() => {
            const now = this.ctx.currentTime;
            // Driving Bass
            if (step % 2 === 0) {
                const bass = this.ctx.createOscillator(); const bg = this.ctx.createGain();
                bass.type = 'sawtooth'; bass.frequency.setValueAtTime(step % 8 === 0 ? 65.41 : 130.81, now);
                bg.gain.setValueAtTime(0.03, now); bg.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
                bass.connect(bg); bg.connect(this.gainNode); bass.start(); bass.stop(now + 0.2);
            }
            // Triumph Lead
            const lead = this.ctx.createOscillator(); const lg = this.ctx.createGain();
            lead.type = 'square'; lead.frequency.setValueAtTime(scale[step % scale.length] * (step % 16 < 8 ? 1 : 1.5), now);
            lg.gain.setValueAtTime(0.04, now); lg.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
            lead.connect(lg); lg.connect(this.gainNode); lead.start(); lead.stop(now + 0.15);
            step++;
        }, 150);
    }

    updateUI() {
        const toggle = document.getElementById('setting-radio');
        const channelList = document.getElementById('radio-channels');    
        const modalDisplay = document.getElementById('radio-modal-display');
        const marqueeSvg = document.getElementById('marquee-radio-svg');  
        if (!toggle || !channelList) return;
        toggle.checked = this.isPlaying;
        channelList.className = this.isPlaying ? '' : 'opacity-50 pointer-events-none';
        if (modalDisplay) modalDisplay.innerText = `[${this.activeBand}] ${this.channels[this.channelIndex]}`;
        if (marqueeSvg) {
            marqueeSvg.classList.toggle('text-red-500', !this.isPlaying);
            marqueeSvg.classList.toggle('text-emerald-400', this.isPlaying);
            marqueeSvg.style.filter = this.isPlaying ? 'drop-shadow(0 0 5px rgba(16, 185, 129, 0.6))' : 'none';
        }
    }
}

const radio = new RadioSystem();
