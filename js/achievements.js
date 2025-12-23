
class AchievementSystem {
    constructor() {
        this.container = document.createElement('div');
        this.container.id = 'achievement-toast-container';
        this.container.className = 'fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center gap-4 pointer-events-none';
        document.body.appendChild(this.container);
        
        this.queue = [];
        this.isProcessing = false;
    }

    // Show a notification
    show({ title, message, icon, type = 'trophy' }) {
        this.queue.push({ title, message, icon, type });
        if (!this.isProcessing) {
            this.processQueue();
        }
    }

    async processQueue() {
        if (this.queue.length === 0) {
            this.isProcessing = false;
            return;
        }

        this.isProcessing = true;
        const data = this.queue.shift();
        await this.createToast(data);
        
        // Short delay between multiple achievements
        setTimeout(() => this.processQueue(), 500);
    }

    createToast(data) {
        return new Promise((resolve) => {
            const toast = document.createElement('div');
            
            // Animation classes (Tailwind)
            toast.className = `
                flex items-center gap-4 bg-gray-900/95 backdrop-blur-md border-2 border-gray-700 
                p-4 rounded-xl shadow-2xl min-w-[320px] max-w-[400px]
                animate-in slide-in-from-bottom-full duration-500 ease-out
            `;

            const iconColor = data.type === 'level' ? 'text-blue-500' : 'text-yellow-500';
            const badgeBg = data.type === 'level' ? 'bg-blue-500/20' : 'bg-yellow-500/20';

            toast.innerHTML = `
                <div class="${badgeBg} p-3 rounded-lg ${iconColor}">
                    ${data.icon || '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>'}
                </div>
                <div class="flex-grow">
                    <p class="text-[10px] font-black uppercase tracking-[0.2em] ${iconColor} mb-0.5">
                        ${data.type === 'level' ? 'Level Up!' : 'Achievement Unlocked'}
                    </p>
                    <h4 class="text-white font-bold text-sm">${data.title}</h4>
                    <p class="text-gray-400 text-xs">${data.message}</p>
                </div>
            `;

            this.container.appendChild(toast);

            // Play Sound
            if (sfx) {
                if (data.type === 'level') {
                    // Unique level up sound or just fanfare
                    sfx.playFanfare();
                } else {
                    sfx.playFanfare();
                }
            }

            // Remove after duration
            setTimeout(() => {
                toast.classList.add('animate-out', 'fade-out', 'slide-out-to-bottom-full');
                setTimeout(() => {
                    toast.remove();
                    resolve();
                }, 500);
            }, 2000);
        });
    }
}

const achievements = new AchievementSystem();

// Listen for the custom event from app.js
document.addEventListener('progressUpdated', (e) => {
    // Note: Level up logic is handled in app.js now to avoid duplication
});
