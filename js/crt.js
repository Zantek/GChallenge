class CRTManager {
    constructor() {
        this.active = localStorage.getItem('gamingChallengeCRT') === 'true';
        this.init();
    }

    init() {
        if (this.active) {
            this.apply(true);
        }
    }

    apply(state) {
        const root = document.documentElement;
        const vignette = document.getElementById('crt-vignette');
        const btn = document.getElementById('crt-btn');
        
        if (state) {
            root.classList.add('crt-active');
            if (vignette) {
                vignette.classList.remove('hidden');
                vignette.classList.add('crt-vignette');
            }
            if (btn) {
                btn.classList.remove('text-orange-400');
                btn.classList.add('text-emerald-400');
            }
        } else {
            root.classList.remove('crt-active');
            if (vignette) {
                vignette.classList.add('hidden');
                vignette.classList.remove('crt-vignette');
            }
            if (btn) {
                btn.classList.remove('text-emerald-400');
                btn.classList.add('text-orange-400');
            }
        }
        localStorage.setItem('gamingChallengeCRT', state);
    }

    toggle() {
        this.active = !this.active;
        this.apply(this.active);
        
        if (typeof sfx !== 'undefined') {
            sfx.playTick();
        }
    }
}

const crtManager = new CRTManager();
