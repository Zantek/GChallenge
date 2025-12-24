class ConfettiCannon {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.animationId = null;

        // Styling
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '1000';
        document.body.appendChild(this.canvas);

        window.addEventListener('resize', () => this.resize());
        this.resize();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    fire(x, y) {
        const theme = document.documentElement.getAttribute('data-theme') || 'future';
        const count = 60 + Math.floor(Math.random() * 40);
        
        for (let i = 0; i < count; i++) {
            this.particles.push(this.createParticle(x, y, theme));
        }

        if (!this.animationId) {
            this.animate();
        }
    }

    createParticle(x, y, theme) {
        const angle = Math.random() * Math.PI * 2;
        const velocity = 2 + Math.random() * 6;
        const friction = 0.95;
        const gravity = 0.15;
        const life = 1.0;
        const decay = 0.01 + Math.random() * 0.01;

        let size = 4 + Math.random() * 6;
        let color = '#ffffff';
        let shape = 'square';
        let glow = false;

        // Theme specific properties
        if (theme === 'future') {
            const colors = ['#3b82f6', '#a855f7', '#22d3ee', '#ffffff'];
            color = colors[Math.floor(Math.random() * colors.length)];
            shape = 'triangle';
            glow = true;
        } else if (theme === 'brick') {
            color = '#306230'; // Lighter GameBoy Green
            shape = 'pixel';
            size = 4 + Math.floor(Math.random() * 4); // Fixed sizes for pixel feel
        } else if (theme === 'cube') {
            const colors = ['#ff4500', '#ffa500', '#ffffff', '#4b0082'];
            color = colors[Math.floor(Math.random() * colors.length)];
            shape = 'circle';
        } else if (theme === 'os') {
            const colors = ['#000080', '#ffffff', '#c0c0c0', '#808080'];
            color = colors[Math.floor(Math.random() * colors.length)];
            shape = 'rect';
        }

        return {
            x, y,
            vx: Math.cos(angle) * velocity,
            vy: Math.sin(angle) * velocity,
            friction,
            gravity,
            life,
            decay,
            size,
            color,
            shape,
            glow,
            rotation: Math.random() * Math.PI * 2,
            vr: (Math.random() - 0.5) * 0.2
        };
    }

    drawParticle(p) {
        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate(p.rotation);
        this.ctx.globalAlpha = p.life;
        this.ctx.fillStyle = p.color;

        if (p.glow) {
            this.ctx.shadowBlur = 10;
            this.ctx.shadowColor = p.color;
        }

        switch (p.shape) {
            case 'triangle':
                this.ctx.beginPath();
                this.ctx.moveTo(0, -p.size);
                this.ctx.lineTo(p.size, p.size);
                this.ctx.lineTo(-p.size, p.size);
                this.ctx.closePath();
                this.ctx.fill();
                break;
            case 'circle':
                this.ctx.beginPath();
                this.ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
                this.ctx.fill();
                break;
            case 'pixel':
            case 'square':
                this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
                break;
            case 'rect':
                this.ctx.fillRect(-p.size, -p.size / 2, p.size * 2, p.size);
                break;
        }

        this.ctx.restore();
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            
            p.vx *= p.friction;
            p.vy *= p.friction;
            p.vy += p.gravity;
            
            p.x += p.vx;
            p.y += p.vy;
            p.rotation += p.vr;
            p.life -= p.decay;

            if (p.life <= 0) {
                this.particles.splice(i, 1);
            } else {
                this.drawParticle(p);
            }
        }

        if (this.particles.length > 0) {
            this.animationId = requestAnimationFrame(() => this.animate());
        } else {
            this.animationId = null;
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }
}

// Global instance
const confetti = new ConfettiCannon();
