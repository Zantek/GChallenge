// --- Data Configuration ---
const coreGames = [
    { id: 'c1', title: "Kirby's Adventure", year: 1993, system: "NES", length: "3.5 hrs", genre: "Platformer", color: "from-pink-500 to-rose-500", wiki: "https://en.wikipedia.org/wiki/Kirby%27s_Adventure", banner: "images/games/banners/c1.jpg", desc: "One of the most visually impressive NES games ever made. Kirby explores Dream Land using his iconic ability to copy enemy powers for the first time." },
    { id: 'c2', title: "Star Fox 64", year: 1997, system: "N64", length: "2 hrs", genre: "Rail Shooter", color: "from-blue-600 to-blue-400", wiki: "https://en.wikipedia.org/wiki/Star_Fox_64", banner: "images/games/banners/c2.jpg", desc: "A cinematic space-combat masterpiece. Lead Fox McCloud and his team across the Lylat system to stop the evil Andross." },
    { id: 'c3', title: "Ape Escape", year: 1999, system: "PS1", length: "8 hrs", genre: "Action / Platformer", color: "from-yellow-500 to-orange-500", wiki: "https://en.wikipedia.org/wiki/Ape_Escape_(video_game)", banner: "images/games/banners/c3.jpg", desc: "The first game to require the DualShock controller. Travel through time to catch mischievous monkeys led by the intelligent Specter." },
    { id: 'c4', title: "Luigi's Mansion", year: 2001, system: "GameCube", length: "6 hrs", genre: "Action / Puzzle", color: "from-green-600 to-green-400", wiki: "https://en.wikipedia.org/wiki/Luigi%27s_Mansion", banner: "images/games/banners/c4.png", desc: "Luigi steps into the spotlight as he explores a haunted mansion to save Mario, armed only with a specialized vacuum cleaner." },
    { id: 'c5', title: "Zone of the Enders: The 2nd Runner", year: 2003, system: "PS2", length: "5.5 hrs", genre: "Mech Action", color: "from-blue-700 to-indigo-600", wiki: "https://en.wikipedia.org/wiki/Zone_of_the_Enders:_The_2nd_Runner", banner: "images/games/banners/c5.jpg", desc: "Produced by Hideo Kojima, this is high-speed robotic combat at its absolute peak. Visual flair and frantic action define this cult classic." },
    { id: 'c6', title: "Portal", year: 2007, system: "PC / Xbox", length: "3 hrs", genre: "Puzzle / FPS", color: "from-orange-400 to-blue-400", wiki: "https://en.wikipedia.org/wiki/Portal_(video_game)", banner: "images/games/banners/c6.jpg", desc: "Navigate the Aperture Science Enrichment Center using a portal gun while being taunted by the sarcastic AI, GLaDOS." },
    { id: 'c7', title: "Mirror's Edge", year: 2008, system: "PS3 / 360", length: "6 hrs", genre: "Parkour", color: "from-red-600 to-white", wiki: "https://en.wikipedia.org/wiki/Mirror%27s_Edge", banner: "images/games/banners/c7.jpg", desc: "A first-person parkour game set in a pristine, dystopian city. Focus on momentum and movement over combat as Faith, a 'Runner'." },
    { id: 'c8', title: "Asura's Wrath", year: 2012, system: "PS3 / 360", length: "8.5 hrs", genre: "Action / Beat 'em up", color: "from-orange-700 to-red-700", wiki: "https://en.wikipedia.org/wiki/Asura%27s_Wrath", banner: "images/games/banners/c8.jpg", desc: "An interactive anime where anger is your power. Asura fights to rescue his daughter from a pantheon of corrupt demigods." },
    { id: 'c9', title: "Max Payne 3", year: 2012, system: "PC / PS3 / 360", length: "10 hrs", genre: "Third-Person Shooter", color: "from-gray-800 to-red-900", wiki: "https://en.wikipedia.org/wiki/Max_Payne_3", banner: "images/games/banners/c9.jpg", desc: "A gritty, cinematic action masterpiece. Follow Max Payne as he works private security in São Paulo, Brazil. Experience the evolution of bullet-time in a story defined by its brutal gunplay and technical polish." },
    { id: 'c10', title: "Undertale", year: 2015, system: "PC / Switch", length: "6 hrs", genre: "RPG", color: "from-gray-900 to-white", wiki: "https://en.wikipedia.org/wiki/Undertale", banner: "images/games/banners/c10.jpg", desc: "The RPG where you don't have to kill anyone. Every encounter is a unique bullet-hell puzzle and your choices change everything." },
    { id: 'c11', title: "Ori and the Will of the Wisps", year: 2020, system: "PC / Xbox", length: "11 hrs", genre: "Metroidvania", color: "from-indigo-400 to-purple-500", wiki: "https://en.wikipedia.org/wiki/Ori_and_the_Will_of_the_Wisps", banner: "images/games/banners/c11.jpg", desc: "A heart-wrenching fairy tale with stunning art and incredibly fluid movement. Explore the forest of Niwen as the little spirit Ori." },
    { id: 'c12', title: "Hi-Fi RUSH", year: 2023, system: "PC / Xbox / PS5", length: "11 hrs", genre: "Action / Rhythm", color: "from-yellow-400 to-red-500", wiki: "https://en.wikipedia.org/wiki/Hi-Fi_Rush", banner: "images/games/banners/c12.jpg", desc: "A vibrant, rhythm-action game where the entire world pulses to the beat. Play as Chai, a wannabe rockstar fighting a sinister corporation with music-synced combat." }
];

const bonusGames = [
    { id: 'b1', title: "WarioWare: Smooth Moves", year: 2006, system: "Wii", length: "2.5 hrs", genre: "Party / Microgames", color: "from-yellow-400 to-red-500", wiki: "https://en.wikipedia.org/wiki/WarioWare:_Smooth_Moves", banner: "images/games/banners/b1.png", desc: "A frantic collection of 'microgames' that last only seconds. Use the Wii Remote in dozens of hilarious 'forms'." },
    { id: 'b2', title: "The Stanley Parable", year: 2013, system: "PC", length: "1.5 hrs", genre: "Narrative / Comedy", color: "from-yellow-600 to-gray-600", wiki: "https://en.wikipedia.org/wiki/The_Stanley_Parable", banner: "images/games/banners/b2.jpg", desc: "A comedy exploration game where you can follow or disobey the narrator. It’s a meta-commentary on choice in video games." },
    { id: 'b3', title: "Donut County", year: 2018, system: "Switch / PC", length: "2 hrs", genre: "Puzzle / Physics", color: "from-pink-400 to-purple-400", wiki: "https://en.wikipedia.org/wiki/Donut_County", banner: "images/games/banners/b3.jpg", desc: "Play as a hole in the ground that gets bigger every time you swallow something. A funny physics toy with a great art style." },
    { id: 'b4', title: "What the Golf?", year: 2019, system: "Switch / PC", length: "4 hrs", genre: "Physics / Comedy", color: "from-green-400 to-yellow-300", wiki: "https://en.wikipedia.org/wiki/What_the_Golf%3F", banner: "images/games/banners/b4.jpg", desc: "A golf game for people who hate golf. Every level subverts the rules of the sport in unexpected and hilarious ways." },
    { id: 'b5', title: "Turnip Boy Commits Tax Evasion", year: 2021, system: "PC / Switch", length: "2.5 hrs", genre: "Adventure", color: "from-green-500 to-green-700", wiki: "https://en.wikipedia.org/wiki/Turnip_Boy_Commits_Tax_Evasion", banner: "images/games/banners/b5.jpg", desc: "You are an adorable turnip who owes taxes to Mayor Onion. Rip up documents and explore dungeons in this Zelda-like parody." },
    { id: 'b6', title: "We Love Katamari REROLL+", year: 2023, system: "Consoles", length: "5 hrs", genre: "Puzzle / Action", color: "from-pink-500 to-green-500", wiki: "https://en.wikipedia.org/wiki/We_Love_Katamari", banner: "images/games/banners/b6.jpg", desc: "The ultimate satisfying game. Roll a ball to pick up items, growing from the size of a thumbtack to a massive celestial giant." }
];

const zenGames = [
    { id: 'z1', title: "A Short Hike", year: 2019, system: "PC/Switch", length: "1.5 hrs", genre: "Adventure", color: "from-green-300 to-emerald-500", wiki: "https://en.wikipedia.org/wiki/A_Short_Hike", banner: "images/games/banners/z1.jpg", desc: "Hike, climb, and soar through the peaceful landscapes of Hawk Peak Provincial Park. A cozy game about the joy of discovery." },
    { id: 'z2', title: "Unpacking", year: 2021, system: "PC/Xbox", length: "3.5 hrs", genre: "Puzzle", color: "from-orange-200 to-orange-400", wiki: "https://en.wikipedia.org/wiki/Unpacking_(video_game)", banner: "images/games/banners/z2.jpg", desc: "Tell a story through the items you pull out of boxes and place in your new home. Deeply satisfying and meditative." },
    { id: 'z3', title: "Abzû", year: 2016, system: "PS4/PC", length: "2 hrs", genre: "Underwater", color: "from-cyan-400 to-blue-600", wiki: "https://en.wikipedia.org/wiki/Abz%C3%BB", banner: "images/games/banners/z3.jpg", desc: "Immerse yourself in a vibrant ocean world full of mystery and bursting with color and life. No oxygen limits, just fluid beauty." },
    { id: 'z4', title: "Flower", year: 2009, system: "PS3/PC", length: "2 hrs", genre: "Nature", color: "from-pink-100 to-green-300", wiki: "https://en.wikipedia.org/wiki/Flower_(video_game)", banner: "images/games/banners/z4.jpg", desc: "Become the wind and guide a swarm of flower petals through lush fields. A sensory experience about nature and urbanization." },
    { id: 'z5', title: "Alba: A Wildlife Adventure", year: 2020, system: "All", length: "2.5 hrs", genre: "Adventure", color: "from-blue-200 to-yellow-200", wiki: "https://en.wikipedia.org/wiki/Alba:_A_Wildlife_Adventure", banner: "images/games/banners/z5.jpg", desc: "Visit your grandparents on a Mediterranean island and set out to save the local wildlife with your phone camera." },
    { id: 'z6', title: "Townscaper", year: 2021, system: "All", length: "1 hr", genre: "Toy / Builder", color: "from-red-200 to-blue-200", wiki: "https://en.wikipedia.org/wiki/Townscaper", banner: "images/games/banners/z6.jpg", desc: "An instant town-building toy. Just click to place colorful blocks and watch the algorithm create charming coastal architecture." }
];

const timeGames = [
    { id: 't1', title: "SUPERHOT", year: 2016, system: "PC/Xbox", length: "2.5 hrs", genre: "FPS / Puzzle", color: "from-red-600 to-gray-900", wiki: "https://en.wikipedia.org/wiki/Superhot", banner: "images/games/banners/t1.jpg", desc: "Time moves only when you move. It’s a tactical action game where every bullet and step counts in a lethal dance." },
    { id: 't2', title: "Minit", year: 2018, system: "PC/Switch", length: "2 hrs", genre: "Adventure", color: "from-gray-100 to-gray-400", wiki: "https://en.wikipedia.org/wiki/Minit_(video_game)", banner: "images/games/banners/t2.jpg", desc: "An adventure played sixty seconds at a time. Each life is a minute-long sprint to solve puzzles and unlock new paths." },
    { id: 't3', title: "Katana ZERO", year: 2019, system: "PC/Switch", length: "4.5 hrs", genre: "Action", color: "from-purple-600 to-fuchsia-600", wiki: "https://en.wikipedia.org/wiki/Katana_Zero", banner: "images/games/banners/t3.jpg", desc: "A stylish neo-noir action platformer. Use time-bending drugs to slash through enemies and uncover your mysterious past." },
    { id: 't4', title: "The Gardens Between", year: 2018, system: "All", length: "2.5 hrs", genre: "Puzzle", color: "from-indigo-300 to-teal-400", wiki: "https://en.wikipedia.org/wiki/The_Gardens_Between", banner: "images/games/banners/t4.jpg", desc: "Manipulate time to guide two friends through a surreal world of dreamlike island gardens made of their childhood memories." },
    { id: 't5', title: "Braid", year: 2008, system: "PC/Xbox", length: "5 hrs", genre: "Puzzle Platformer", color: "from-amber-600 to-stone-700", wiki: "https://en.wikipedia.org/wiki/Braid_(video_game)", banner: "images/games/banners/t5.jpg", desc: "Rewind time to solve intricate puzzles. This indie classic redefined storytelling in games with its deep, hidden narrative." },
    { id: 't6', title: "Timelie", year: 2020, system: "PC/Switch", length: "4.5 hrs", genre: "Stealth Puzzle", color: "from-blue-900 to-cyan-500", wiki: "https://en.wikipedia.org/wiki/Timelie", banner: "images/games/banners/t6.jpg", desc: "Control time like a media player. Preview the future and rewind the past to pull off a perfect, undetectable escape." }
];

const artGames = [
    { id: 'a1', title: "Gris", year: 2018, system: "PC/Switch", length: "3.5 hrs", genre: "Art / Platformer", color: "from-pink-200 to-blue-300", wiki: "https://en.wikipedia.org/wiki/Gris", banner: "images/games/banners/a1.jpg", desc: "A hopeful young girl lost in her own world. Experience a journey through sorrow, expressed through watercolor art and music." },
    { id: 'a2', title: "Sayonara Wild Hearts", year: 2019, system: "PC/Switch", length: "1.5 hrs", genre: "Music / Action", color: "from-purple-700 to-indigo-900", wiki: "https://en.wikipedia.org/wiki/Sayonara_Wild_Hearts", banner: "images/games/banners/a2.jpg", desc: "A pop-album video game. Ride motorcycles, skate, and fight in stylized battles to a fantastic synth-pop soundtrack." },
    { id: 'a3', title: "Gorogoa", year: 2017, system: "PC/Mobile", length: "2 hrs", genre: "Hand-drawn Puzzle", color: "from-amber-100 to-stone-500", wiki: "https://en.wikipedia.org/wiki/Gorogoa", banner: "images/games/banners/a3.jpg", desc: "An elegant puzzle game told through thousands of hand-drawn illustrations. Manipulate panels to discover how they connect." },
    { id: 'a4', title: "Monument Valley", year: 2014, system: "Mobile/PC", length: "2 hrs", genre: "Optical Puzzle", color: "from-teal-200 to-rose-300", wiki: "https://en.wikipedia.org/wiki/Monument_Valley_(video_game)", banner: "images/games/banners/a4.jpg", desc: "Manipulate impossible architecture and guide a silent princess through a world of stunning optical illusions and geometry." },
    { id: 'a5', title: "The Unfinished Swan", year: 2012, system: "PS3/PC", length: "3 hrs", genre: "Adventure", color: "from-gray-100 to-gray-300", wiki: "https://en.wikipedia.org/wiki/The_Unfinished_Swan", banner: "images/games/banners/a5.jpg", desc: "Explore a completely white space by splattering black paint to reveal the geometry of a mysterious hidden kingdom." },
    { id: 'a6', title: "Manifold Garden", year: 2019, system: "All", length: "5 hrs", genre: "Geometry Puzzle", color: "from-gray-700 to-indigo-400", wiki: "https://en.wikipedia.org/wiki/Manifold_Garden", banner: "images/games/banners/a6.jpg", desc: "Rediscover gravity and explore a world of Escher-esque architecture. Solve puzzles using the infinite, repeating nature of space." }
];

const allGames = [...coreGames, ...bonusGames, ...zenGames, ...timeGames, ...artGames];

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
        // Check/Trophy unlock: Major Triad Arpeggio (C-E-G)
        if (this.muted) return;
        const root = 523.25; // C5
        const third = 659.25; // E5
        const fifth = 783.99; // G5
        
        this.playTone(root, 'square', 0.1, 0, 0.1);
        this.playTone(third, 'square', 0.1, 0.1, 0.1);
        this.playTone(fifth, 'square', 0.4, 0.2, 0.1);
    }
}

const sfx = new SoundFX();

// --- Helpers ---

function getSystemIcon(system) {
    const s = system.toLowerCase();
    let path = "";
    
    if (s.includes('pc')) {
        // Monitor Icon
        path = '<rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>';
    } else if (s.includes('mobile')) {
        // Smartphone Icon
        path = '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><line x1="12" x2="12" y1="18" y2="18"/>';
    } else {
        // Gamepad Icon (Default for Consoles)
        path = '<path d="M6 12h.01M9 12h.01M15 12h.01M18 12h.01M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm6 12v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2"/>';
    }

    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400 opacity-80">${path}</svg>`;
}

function getEraClass(year) {
    if (year < 2000) return 'era-retro';
    if (year < 2010) return 'era-y2k';
    if (year < 2020) return 'era-modern';
    return 'era-cyber';
}

// --- Logic ---

let completedGames = JSON.parse(localStorage.getItem('gamingChallenge2026')) || [];

function saveState() {
    localStorage.setItem('gamingChallenge2026', JSON.stringify(completedGames));
    updateProgress();
}

function toggleGame(id, event) {
    if (event) event.stopPropagation();
    const card = document.getElementById(`card-${id}`);
    const checkbox = card.querySelector('input[type="checkbox"]');
    const statusText = card.querySelector('.group-mark span');
    
    if (completedGames.includes(id)) {
        completedGames = completedGames.filter(gameId => gameId !== id);
        card.classList.remove('completed');
        if (checkbox) checkbox.checked = false;
        if (statusText) {
            statusText.innerText = 'Mark as Complete';
            statusText.className = 'text-xs text-gray-500 font-medium uppercase tracking-wider transition-colors';
        }
    } else {
        sfx.playCoin(); // Play Sound
        completedGames.push(id);
        card.classList.add('completed');
        if (checkbox) checkbox.checked = true;
        if (statusText) {
            statusText.innerText = 'Completed';
            statusText.className = 'text-xs text-emerald-400 font-bold uppercase tracking-wider transition-colors';
        }
    }
    saveState();
}

function parseLength(lengthStr) {
    const num = parseFloat(lengthStr);
    return isNaN(num) ? 0 : num;
}

function calculateStats() {
    const total = allGames.length;
    const completed = completedGames.length;
    const percentage = Math.round((completed / total) * 100);

    let totalXP = 0;
    allGames.forEach(game => {
        if (completedGames.includes(game.id)) {
            totalXP += parseLength(game.length) * 100;
        }
    });

    const xpPerLevel = 500;
    const level = Math.floor(totalXP / xpPerLevel) + 1;
    const currentLevelXP = totalXP % xpPerLevel;
    const xpPercentage = (currentLevelXP / xpPerLevel) * 100;

    return { total, completed, percentage, level, currentLevelXP, xpPerLevel, xpPercentage };
}

function updateProgress(silent = false) {
    const stats = calculateStats();
    const oldLevel = parseInt(document.getElementById('level-badge').innerText.replace('L', '')) || 1;

    // UI Updates
    document.getElementById('progress-bar').style.width = `${stats.percentage}%`;
    document.getElementById('progress-text').innerText = `${stats.completed}/${stats.total} Games`;
    
    document.getElementById('level-badge').innerText = `L${stats.level}`;
    document.getElementById('xp-bar').style.width = `${stats.xpPercentage}%`;
    document.getElementById('xp-text').innerText = `${Math.floor(stats.currentLevelXP)} / ${stats.xpPerLevel} XP to Level ${stats.level + 1}`;

    // Level Up Achievement
    if (!silent && stats.level > oldLevel) {
        achievements.show({
            title: `Level ${stats.level}`,
            message: "Your gaming prowess is expanding!",
            type: 'level',
            icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>'
        });
    }

    // Trophy Logic
    const checkList = (list) => list.length > 0 && list.every(g => completedGames.includes(g.id));
    
    const updateTrophy = (id, condition, trophyName) => {
        const el = document.getElementById(id);
        const wasUnlocked = el.classList.contains('unlocked');
        
        if (condition) {
            el.classList.add('unlocked');
            if (!wasUnlocked && !silent) {
                // Achievement Popup
                achievements.show({
                    title: trophyName,
                    message: "Category fully completed!",
                    type: 'trophy'
                });
            }
        } else {
            el.classList.remove('unlocked');
        }
    };

    updateTrophy('trophy-core', checkList(coreGames), "Core Master");
    updateTrophy('trophy-bonus', checkList(bonusGames), "Bonus Collector");
    updateTrophy('trophy-zen', checkList(zenGames), "Zen Master");
    updateTrophy('trophy-time', checkList(timeGames), "Time Lord");
    updateTrophy('trophy-art', checkList(artGames), "Art Critic");
    updateTrophy('trophy-all', stats.completed === stats.total && stats.total > 0, "Grand Master");

    // Notify other components (Companion)
    document.dispatchEvent(new CustomEvent('progressUpdated', { detail: { level: stats.level } }));
}

function resetProgress() {
    if(confirm("Are you sure you want to reset all progress?")) {
        completedGames = [];
        saveState();
        location.reload();
    }
}

function startRandomizer() {
    const available = allGames.filter(g => !completedGames.includes(g.id));
    
    if (available.length === 0) {
        alert("You've completed everything! Go touch some grass!");
        return;
    }

    // Open Modal in "Loading" state
    const modal = document.getElementById('detail-modal');
    modal.classList.remove('hidden');
    
    let ticks = 0;
    const maxTicks = 20; // How many spins
    const intervalTime = 50; // Speed of spin

    // Slot Machine Loop
    const timer = setInterval(() => {
        // Pick random game
        const randomGame = available[Math.floor(Math.random() * available.length)];
        
        // Update Modal Visuals Rapidly
        document.getElementById('modal-title-big').innerText = "???"; 
        document.getElementById('modal-title').innerText = randomGame.title;
        document.getElementById('modal-banner').style.backgroundImage = 'none';
        document.getElementById('modal-banner').className = `h-48 w-full bg-gradient-to-br ${randomGame.color} flex items-center justify-center relative overflow-hidden`;
        
        sfx.playTick();
        ticks++;

        if (ticks >= maxTicks) {
            clearInterval(timer);
            // Show Final Result
            showDetails(randomGame.id);
            sfx.playFanfare();
        }
    }, intervalTime);
}

// --- Stats Logic ---

function closeStatsModal() {
    document.getElementById('stats-modal').classList.add('hidden');
}

function showStats() {
    // 1. Calculate Hours
    let hoursDone = 0;
    let hoursTotal = 0;

    allGames.forEach(g => {
        const h = parseLength(g.length);
        hoursTotal += h;
        if (completedGames.includes(g.id)) {
            hoursDone += h;
        }
    });

    const hoursLeft = hoursTotal - hoursDone;
    const hoursPct = hoursTotal > 0 ? (hoursDone / hoursTotal) * 100 : 0;

    document.getElementById('stat-hours-done').innerText = hoursDone.toFixed(1);
    document.getElementById('stat-hours-left').innerText = hoursLeft.toFixed(1);
    document.getElementById('stat-hours-bar').style.width = `${hoursPct}%`;


    // 2. Completion Rate
    const stats = calculateStats();
    document.getElementById('stat-rate').innerText = `${stats.percentage}%`;
    document.getElementById('stat-count').innerText = `${stats.completed} / ${stats.total} Games`;


    // 3. Favorite Era
    const eraCounts = {};
    completedGames.forEach(id => {
        const g = allGames.find(game => game.id === id);
        if (g) {
            const decade = Math.floor(g.year / 10) * 10;
            const eraName = `${decade}s`;
            eraCounts[eraName] = (eraCounts[eraName] || 0) + 1;
        }
    });

    let bestEra = "TBD";
    let maxCount = 0;
    
    // Sort eras to handle ties (prefer modern? retro? random? just first found)
    for (const [era, count] of Object.entries(eraCounts)) {
        if (count > maxCount) {
            maxCount = count;
            bestEra = era;
        }
    }
    
    // If no games, keep TBD
    if(completedGames.length === 0) bestEra = "N/A";
    
    document.getElementById('stat-era').innerText = bestEra;


    // 4. Genre Distribution
    // Some games have "Action / Platformer". We will split them.
    const genreCounts = {};
    let totalGenrePoints = 0;

    completedGames.forEach(id => {
        const g = allGames.find(game => game.id === id);
        if (g) {
            const genres = g.genre.split('/').map(s => s.trim());
            genres.forEach(gen => {
                genreCounts[gen] = (genreCounts[gen] || 0) + 1;
                totalGenrePoints++;
            });
        }
    });

    const genreList = Object.entries(genreCounts)
        .sort((a, b) => b[1] - a[1]); // Sort by most frequent

    const container = document.getElementById('genre-bars');
    container.innerHTML = '';

    if (genreList.length === 0) {
        container.innerHTML = '<p class="text-center text-gray-500 text-sm italic py-4">Complete games to see your stats!</p>';
    } else {
        genreList.forEach(([genre, count]) => {
            const pct = (count / totalGenrePoints) * 100;
            
            // Determine Color based on Genre name (Simple hash-like approach or predefined)
            // Let's use predefined mapping or random consistent colors if list grows.
            // For now, simple blue is fine, or we can vary slightly.
            
            const html = `
                <div class="relative">
                    <div class="flex justify-between text-xs font-semibold mb-1">
                        <span class="text-gray-300">${genre}</span>
                        <span class="text-gray-500">${Math.round(pct)}%</span>
                    </div>
                    <div class="w-full bg-gray-800 rounded-full h-2 overflow-hidden border border-gray-700">
                        <div class="bg-blue-500 h-2 rounded-full" style="width: ${pct}%"></div>
                    </div>
                </div>
            `;
            container.innerHTML += html;
        });
    }

    document.getElementById('stats-modal').classList.remove('hidden');
}

// --- New Features: Share & Export ---

function exportData() {
    const data = btoa(JSON.stringify(completedGames));
    navigator.clipboard.writeText(data).then(() => {
        alert("Save code copied to clipboard! Keep it safe.");
    }).catch(err => {
        console.error('Failed to copy: ', err);
        alert("Failed to copy to clipboard. Check console.");
    });
}

function importData() {
    const code = prompt("Paste your save code here:");
    if (!code) return;
    try {
        const data = JSON.parse(atob(code));
        if (Array.isArray(data)) {
            if(confirm("This will overwrite your current progress. Continue?")) {
                completedGames = data;
                saveState();
                location.reload();
            }
        } else {
            alert("Invalid save code format.");
        }
    } catch (e) {
        alert("Invalid save code. Please check and try again.");
    }
}

function generateShareCard() {
    const stats = calculateStats();
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 630;
    const ctx = canvas.getContext('2d');

    // 1. Background (Dark Gaming Theme)
    const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
    gradient.addColorStop(0, '#0f172a'); // Slate-900
    gradient.addColorStop(1, '#1e1b4b'); // Indigo-950
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1200, 630);

    // 2. Decorative Glow (Top Right)
    ctx.shadowBlur = 150;
    ctx.shadowColor = '#3b82f6';
    ctx.fillStyle = '#3b82f6';
    ctx.beginPath();
    ctx.arc(1100, 100, 200, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

     // 3. Decorative Glow (Bottom Left)
    ctx.shadowBlur = 150;
    ctx.shadowColor = '#a855f7'; // Purple
    ctx.fillStyle = '#a855f7';
    ctx.beginPath();
    ctx.arc(100, 530, 150, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // 4. Content
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Title
    ctx.font = 'bold 70px Inter, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('2026 Gaming Challenge', 600, 120);

    // Main Stat (Percentage)
    ctx.shadowBlur = 20;
    ctx.shadowColor = 'rgba(59, 130, 246, 0.5)'; // Blue glow
    ctx.font = 'bold 180px Inter, sans-serif';
    ctx.fillStyle = '#3b82f6'; // Blue-500
    ctx.fillText(`${stats.percentage}%`, 600, 300);
    ctx.shadowBlur = 0;

    // Subtitle
    ctx.font = 'bold 40px Inter, sans-serif';
    ctx.fillStyle = '#94a3b8'; // Slate-400
    ctx.fillText('COMPLETED', 600, 400);

    // Details Bar
    ctx.fillStyle = '#1e293b'; // Slate-800
    ctx.roundRect(300, 480, 600, 100, 20); // x, y, w, h, radius
    ctx.fill();

    // Detail Text
    ctx.font = 'bold 36px Inter, sans-serif';
    ctx.fillStyle = '#f8fafc';
    ctx.fillText(`Level ${stats.level}  •  ${stats.completed}/${stats.total} Games`, 600, 530);

    // Footer / Tag
    ctx.font = '24px Inter, sans-serif';
    ctx.fillStyle = '#475569';
    ctx.fillText('generated by 2026 Gaming Challenge Tracker', 600, 600);

    // 5. Show in Modal
    const dataUrl = canvas.toDataURL('image/png');
    const img = document.getElementById('share-image');
    const link = document.getElementById('download-link');
    
    img.src = dataUrl;
    link.href = dataUrl;
    link.download = `gaming-challenge-2026-${stats.percentage}pct.png`;
    
    document.getElementById('share-modal').classList.remove('hidden');
}

function closeShareModal() {
    document.getElementById('share-modal').classList.add('hidden');
}

// --- Modal Logic ---

function showDetails(id) {
    const game = allGames.find(g => g.id === id);
    if (!game) return;

    document.getElementById('modal-title-big').innerText = game.title;
    document.getElementById('modal-title').innerText = game.title;
    document.getElementById('modal-genre').innerText = game.genre;
    document.getElementById('modal-year').innerText = game.year;
    document.getElementById('modal-description').innerText = game.desc;
    document.getElementById('modal-length').innerText = game.length;
    document.getElementById('modal-wiki').href = game.wiki;
    
    document.getElementById('modal-system').innerHTML = `
        <div class="flex items-center gap-2">
            ${getSystemIcon(game.system)}
            <span>${game.system}</span>
        </div>
    `;
    
    const banner = document.getElementById('modal-banner');
    const encodedTitle = encodeURIComponent(game.title);
    const imgUrl = game.banner || `https://placehold.co/600x350/222/eee?text=${encodedTitle}`;
    
    banner.style.backgroundImage = `url('${imgUrl}')`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';
    banner.className = `h-48 w-full bg-gradient-to-br ${game.color} flex items-center justify-center relative overflow-hidden`;
    
    // Add an overlay to ensure text readability if needed
    banner.innerHTML = `
        <div class="absolute inset-0 bg-black/40 z-0"></div>
        <h2 id="modal-title-big" class="text-4xl font-black text-white drop-shadow-lg text-center px-4 z-10">${game.title}</h2>
    `;

    document.getElementById('detail-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('detail-modal').classList.add('hidden');
}

function createCard(game) {
    const isCompleted = completedGames.includes(game.id);
    const eraClass = getEraClass(game.year);
    const statusClass = isCompleted ? 'completed' : '';
    const encodedTitle = encodeURIComponent(game.title);

    // Dynamic Approach: Use game.banner if it exists, fallback to placeholder
    const imgUrl = game.banner || `https://placehold.co/600x350/222/eee?text=${encodedTitle}`;

    return `
        <div id="card-${game.id}" 
                class="game-card relative bg-gray-800 overflow-hidden ${eraClass} ${statusClass} flex flex-col h-full group"
                onclick="showDetails('${game.id}')"
                onmouseenter="sfx.playTick()">
            <div class="relative h-40 overflow-hidden">                         <!-- Gradient Overlay: Invisible by default, fades in on hover -->
            <div class="absolute inset-0 bg-gradient-to-br ${game.color} opacity-0 group-hover:opacity-25 transition-opacity duration-500 z-10"></div>
            
            <!-- Image: Full opacity by default, slight zoom on hover -->
            <img src="${imgUrl}" 
                alt="${game.title}" 
                class="w-full h-full object-cover shadow-inner group-hover:scale-110 transition-transform duration-700 ease-in-out"
                onerror="this.onerror=null; this.src='https://placehold.co/600x350/222/eee?text=${encodedTitle}'">
            <div class="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded z-20 font-mono border border-white/20">
            ${game.length}
            </div>
    </div>

    <div class="p-4 flex flex-col flex-grow">
        <div class="flex justify-between items-start mb-2">
            <div>
                <span class="text-xs font-semibold text-blue-400 uppercase tracking-wider">${game.genre}</span>
                <h3 class="text-lg font-bold text-white leading-tight mt-1 hover:text-blue-400 transition-colors">
                    <a href="${game.wiki}" target="_blank" onclick="event.stopPropagation()">${game.title}</a>
                </h3>
            </div>
        </div>

        <div class="mt-auto pt-4 flex items-center justify-between border-t border-gray-700/50">
            <div class="flex flex-col">
                <span class="text-xs text-gray-400">System</span>
                <div class="flex items-center gap-1.5 mt-0.5">
                    ${getSystemIcon(game.system)}
                    <span class="text-sm font-medium text-gray-200">${game.system}</span>
                </div>
            </div>
            <div class="flex flex-col items-end">
                <span class="text-xs text-gray-400">Year</span>
                <span class="text-sm font-medium text-gray-200">${game.year}</span>
            </div>
        </div>
    </div>

                        <div class="bg-gray-900/50 p-3 flex items-center justify-between border-t border-gray-700 cursor-pointer hover:bg-gray-800 transition-colors group-mark" 
                                onclick="toggleGame('${game.id}', event)">
                            <span class="text-xs ${isCompleted ? 'text-emerald-400 font-bold' : 'text-gray-500 font-medium'} uppercase tracking-wider transition-colors">
                                ${isCompleted ? 'Completed' : 'Mark as Complete'}
                            </span>
                            <input type="checkbox" 
                                    class="custom-checkbox pointer-events-none"
                                    ${isCompleted ? 'checked' : ''} 
                                    aria-label="Mark ${game.title} as complete">
                        </div>                </div>
`;
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('core-grid').innerHTML = coreGames.map(game => createCard(game)).join('');
    document.getElementById('bonus-grid').innerHTML = bonusGames.map(game => createCard(game)).join('');
    document.getElementById('zen-grid').innerHTML = zenGames.map(game => createCard(game)).join('');
    document.getElementById('time-grid').innerHTML = timeGames.map(game => createCard(game)).join('');
    document.getElementById('art-grid').innerHTML = artGames.map(game => createCard(game)).join('');

    updateProgress(true);
});
