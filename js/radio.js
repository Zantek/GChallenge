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
        this.channels = [
            'Quest Start', '8-bit Chill', 'Cyber Pop', 'Star Voyager', 'Glitch Hack', 
            'Lofi Dreams', 'Neon Dusk', 'Boss Battle', 'Ocean Waves', 'Rainy Day', 
            'Cyber Club', 'Haunted', 'Jungle Quest', 'Industrial', 'Nebula', 
            'Funky Chip', 'Sunrise', 'Vaporwave', 'Deep Signal'
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
        this.channelIndex = (this.channelIndex + 1) % this.channels.length;
        this.playChannel(this.channels[this.channelIndex]);
        this.updateUI();
        if (window.sfx) sfx.playTick();
    }

    prev() {
        if (!this.isPlaying) this.start();
        this.channelIndex = (this.channelIndex - 1 + this.channels.length) % this.channels.length;
        this.playChannel(this.channels[this.channelIndex]);
        this.updateUI();
        if (window.sfx) sfx.playTick();
    }

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

    playChannel(name) {
        this.clearLoops();
        this.gainNode.gain.cancelScheduledValues(this.ctx.currentTime);   
        this.gainNode.gain.setValueAtTime(0.15, this.ctx.currentTime);    
        switch (name) {
            case 'Quest Start': this.startQuestStart(); break;
            case '8-bit Chill': this.start8BitChill(); break;
            case 'Cyber Pop': this.startCyberPop(); break;
            case 'Star Voyager': this.startStarVoyager(); break;
            case 'Glitch Hack': this.startGlitchHack(); break;
            case 'Lofi Dreams': this.startLofiDreams(); break;
            case 'Neon Dusk': this.startNeonDusk(); break;
            case 'Boss Battle': this.startBossBattle(); break;
            case 'Ocean Waves': this.startOceanWaves(); break;
            case 'Rainy Day': this.startRainyDay(); break;
            case 'Cyber Club': this.startCyberClub(); break;
            case 'Haunted': this.startHaunted(); break;
            case 'Jungle Quest': this.startJungleQuest(); break;
            case 'Industrial': this.startIndustrial(); break;
            case 'Nebula': this.startNebula(); break;
            case 'Funky Chip': this.startFunkyChip(); break;
            case 'Sunrise': this.startSunrise(); break;
            case 'Vaporwave': this.startVaporwave(); break;
            case 'Deep Signal': this.startDeepSignal(); break;
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

    startGlitchHack() {
        this.melodyTimer = setInterval(() => {
            const freq = 50 + Math.random() * 2000;
            const osc = this.ctx.createOscillator();
            const g = this.ctx.createGain();
            osc.type = Math.random() > 0.5 ? 'sawtooth' : 'square'; osc.frequency.setValueAtTime(freq, this.ctx.currentTime);     
            g.gain.setValueAtTime(0.02, this.ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
            osc.connect(g); g.connect(this.gainNode);
            osc.start(); osc.stop(this.ctx.currentTime + 0.05);
        }, 80);
    }

    startLofiDreams() {
        const chord = [261.63, 329.63, 392.00, 493.88];
        this.melodyTimer = setInterval(() => {
            const osc = this.ctx.createOscillator();
            const filter = this.ctx.createBiquadFilter();
            const g = this.ctx.createGain();
            osc.type = 'sawtooth'; osc.frequency.setValueAtTime(chord[Math.floor(Math.random() * chord.length)], this.ctx.currentTime);
            filter.type = 'lowpass'; filter.frequency.setValueAtTime(300, this.ctx.currentTime);   
            filter.Q.setValueAtTime(5, this.ctx.currentTime);
            g.gain.setValueAtTime(0, this.ctx.currentTime);
            g.gain.linearRampToValueAtTime(0.03, this.ctx.currentTime + 1.0);
            g.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 2.0);
            osc.connect(filter); filter.connect(g); g.connect(this.gainNode);
            osc.start(); osc.stop(this.ctx.currentTime + 2.0);
        }, 1500);
    }

    startNeonDusk() {
        const createPad = (freq) => {
            const osc = this.ctx.createOscillator();
            const g = this.ctx.createGain();
            osc.type = 'sawtooth'; osc.frequency.setValueAtTime(freq, this.ctx.currentTime);     
            g.gain.setValueAtTime(0.02, this.ctx.currentTime);
            osc.connect(g); g.connect(this.gainNode);
            osc.start(); this.droneOscillators.push(osc);
        };
        createPad(130.81); createPad(196.00);
        this.melodyTimer = setInterval(() => {
            if (Math.random() > 0.4) return;
            const osc = this.ctx.createOscillator();
            const g = this.ctx.createGain();
            osc.type = 'square'; osc.frequency.setValueAtTime(523.25 * (Math.random() > 0.5 ? 1 : 1.5), this.ctx.currentTime);
            g.gain.setValueAtTime(0.01, this.ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.5);
            osc.connect(g); g.connect(this.gainNode);
            osc.start(); osc.stop(this.ctx.currentTime + 1.5);
        }, 2000);
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

    startRainyDay() {
        this.melodyTimer = setInterval(() => {
            const osc = this.ctx.createOscillator();
            const g = this.ctx.createGain();
            osc.type = 'sine'; osc.frequency.setValueAtTime(300 + Math.random() * 50, this.ctx.currentTime);
            g.gain.setValueAtTime(0.01, this.ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);
            osc.connect(g); g.connect(this.gainNode);
            osc.start(); osc.stop(this.ctx.currentTime + 0.1);
        }, 100);
        this.startOceanWaves();
    }

    startCyberClub() {
        let step = 0;
        this.melodyTimer = setInterval(() => {
            const kick = this.ctx.createOscillator(); const kg = this.ctx.createGain();
            kick.frequency.setValueAtTime(150, this.ctx.currentTime);     
            kick.frequency.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
            kg.gain.setValueAtTime(0.2, this.ctx.currentTime);
            kg.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.1);
            kick.connect(kg); kg.connect(this.gainNode);
            kick.start(); kick.stop(this.ctx.currentTime + 0.1);
            if (step % 2 === 1) {
                const hat = this.ctx.createOscillator(); const hg = this.ctx.createGain();
                hat.type = 'square'; hat.frequency.setValueAtTime(10000, this.ctx.currentTime);
                hg.gain.setValueAtTime(0.02, this.ctx.currentTime);       
                hg.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
                hat.connect(hg); hg.connect(this.gainNode);
                hat.start(); hat.stop(this.ctx.currentTime + 0.05);       
            }
            step++;
        }, 250);
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

    startJungleQuest() {
        this.melodyTimer = setInterval(() => {
            const osc = this.ctx.createOscillator(); const g = this.ctx.createGain();
            osc.type = 'triangle'; osc.frequency.setValueAtTime(Math.random() > 0.5 ? 800 : 1200, this.ctx.currentTime);
            g.gain.setValueAtTime(0.03, this.ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);
            osc.connect(g); g.connect(this.gainNode);
            osc.start(); osc.stop(this.ctx.currentTime + 0.1);
        }, 400);
    }

    startIndustrial() {
        this.melodyTimer = setInterval(() => {
            const osc = this.ctx.createOscillator(); osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(40 + Math.random() * 20, this.ctx.currentTime);
            const g = this.ctx.createGain(); g.gain.setValueAtTime(0.05, this.ctx.currentTime);
            g.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.4);
            osc.connect(g); g.connect(this.gainNode);
            osc.start(); osc.stop(this.ctx.currentTime + 0.4);
        }, 500);
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

    startFunkyChip() {
        const bass = [55, 65, 73, 82]; let step = 0;
        this.melodyTimer = setInterval(() => {
            const osc = this.ctx.createOscillator(); osc.type = 'square';
            osc.frequency.setValueAtTime(bass[step % bass.length], this.ctx.currentTime);
            const g = this.ctx.createGain(); g.gain.setValueAtTime(0.05, this.ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);
            osc.connect(g); g.connect(this.gainNode);
            osc.start(); osc.stop(this.ctx.currentTime + 0.2);
            step++;
        }, 200);
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

    startVaporwave() {
        const osc = this.ctx.createOscillator(); const lfo = this.ctx.createOscillator(); const lfoG = this.ctx.createGain();
        lfo.frequency.setValueAtTime(0.5, this.ctx.currentTime); lfoG.gain.setValueAtTime(5, this.ctx.currentTime);
        lfo.connect(lfoG); lfoG.connect(osc.frequency); osc.frequency.setValueAtTime(130.81, this.ctx.currentTime);
        const g = this.ctx.createGain(); g.gain.setValueAtTime(0.04, this.ctx.currentTime);
        osc.connect(g); g.connect(this.gainNode);
        osc.start(); lfo.start(); this.droneOscillators.push(osc, lfo);
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

    updateUI() {
        const toggle = document.getElementById('setting-radio');
        const channelList = document.getElementById('radio-channels');    
        const modalDisplay = document.getElementById('radio-modal-display');
        const marqueeSvg = document.getElementById('marquee-radio-svg');  
        if (!toggle || !channelList) return;
        toggle.checked = this.isPlaying;
        channelList.className = this.isPlaying ? '' : 'opacity-50 pointer-events-none';
        if (modalDisplay) modalDisplay.innerText = this.channels[this.channelIndex];
        if (marqueeSvg) {
            marqueeSvg.classList.toggle('text-red-500', !this.isPlaying);
            marqueeSvg.classList.toggle('text-emerald-400', this.isPlaying);
            marqueeSvg.style.filter = this.isPlaying ? 'drop-shadow(0 0 5px rgba(16, 185, 129, 0.6))' : 'none';
        }
    }
}

const radio = new RadioSystem();