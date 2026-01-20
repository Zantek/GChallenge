class InstructionManual {
    constructor() {
        this.currentPage = 0;
        this.pages = [
            {
                title: "2026 CHALLENGE",
                subtitle: "The Official Operator's Guide",
                content: `
                    <div class="flex-grow flex flex-col items-center justify-center text-center gap-6">
                        <div class="w-32 h-32 border-4 border-current rounded-full flex items-center justify-center animate-pulse">
                            <span class="text-4xl">🎮</span>
                        </div>
                        <div class="space-y-2">
                            <p class="text-sm font-black uppercase tracking-[0.3em]">Revision 2.6</p>
                            <p class="text-[10px] italic opacity-60">Property of the 2026 Gaming Collective</p>
                        </div>
                        <div class="mt-4 p-4 border border-current/20 bg-current/5 rounded text-[9px] leading-relaxed max-w-xs">
                            WARNING: Unauthorized duplication of this save data is strictly prohibited by digital law.
                        </div>
                    </div>
                `
            },
            {
                title: "SYSTEM OVERVIEW",
                subtitle: "Hardware & Interface",
                content: `
                    <div class="space-y-6 text-[11px] leading-relaxed">
                        <div class="space-y-2">
                            <h5 class="font-black uppercase tracking-widest text-accent">01. THE CONSOLE</h5>
                            <p>Your virtual hardware features a top-loading slot. Click 'PLAY' on any game card to insert its ROM. Click the cartridge label to jump back to its position on the shelf.</p>
                        </div>
                        <div class="space-y-2">
                            <h5 class="font-black uppercase tracking-widest text-accent">02. SYSTEM MONITOR</h5>
                            <p>The permanent marquee tracks console metadata and real-time audio frequencies. Green LED indicates ACTIVE_ROM; Red LED indicates STANDBY.</p>
                        </div>
                        <div class="space-y-2">
                            <h5 class="font-black uppercase tracking-widest text-accent">03. SMART CARTRIDGE</h5>
                            <p>Ejected cartridges persist across sessions, displaying the last-played game art for tactile familiarity.</p>
                        </div>
                        <div class="space-y-2">
                            <h5 class="font-black uppercase tracking-widest text-accent">04. BUDDY.EXE</h5>
                            <p>An autonomous 8-bit companion that reacts to your progress. Buddy evolves at Level 10 and 20, unlocking new diagnostic data.</p>
                        </div>
                    </div>
                `
            },
            {
                title: "OPERATOR LOGIC",
                subtitle: "buddy.exe Protocol",
                content: `
                    <div class="space-y-6 text-[11px] leading-relaxed">
                        <div class="flex items-center gap-4 p-3 bg-current/5 border border-current/10 rounded">
                            <div class="text-3xl">🤖</div>
                            <div>
                                <h5 class="font-black uppercase tracking-tighter">BUDDY_EXE_OS</h5>
                                <p class="text-[9px] opacity-60">Status: EVOLVING</p>
                            </div>
                        </div>
                        <p>Your companion evolves based on completed games. At Level 10 and 20, Buddy unlocks advanced diagnostic dialogue and unique reactions.</p>
                        <div class="p-3 border-l-4 border-accent bg-accent/5 italic">
                            "Treat your Buddy with respect. They are the mirror of your 2026 journey."
                        </div>
                    </div>
                `
            },
            {
                title: "FEATURE MANIFEST",
                subtitle: "Advanced Subsystems",
                content: `
                    <div class="space-y-4 text-[10px] leading-relaxed">
                        <div class="grid grid-cols-2 gap-x-6 gap-y-4">
                            <div class="space-y-1">
                                <h6 class="font-black text-accent uppercase">3D BOX FLIPPER</h6>
                                <p>Tactile box art with 3D depth. Click to reveal hidden metadata, Wikipedia links, and gameplay trailers.</p>
                            </div>
                            <div class="space-y-1">
                                <h6 class="font-black text-accent uppercase">RPG PROGRESS</h6>
                                <p>Earn XP based on game length. Every dropped game rewards +100 Wisdom. Track your Gamer DNA on the 2D Alignment Chart.</p>
                            </div>
                            <div class="space-y-1">
                                <h6 class="font-black text-accent uppercase">PROCEDURAL AUDIO</h6>
                                <p>18 real-time chiptune stations. Soundscapes are generated on-the-fly using the Web Audio API.</p>
                            </div>
                            <div class="space-y-1">
                                <h6 class="font-black text-accent uppercase">CRT SIMULATION</h6>
                                <p>Enable vintage phosphor scanlines and screen curvature for authentic 90s visual fidelity.</p>
                            </div>
                            <div class="space-y-1">
                                <h6 class="font-black text-accent uppercase">MEDIA VAULT</h6>
                                <p>Archive high-res custom posters and procedurally generated 90s magazine press clippings.</p>
                            </div>
                            <div class="space-y-1">
                                <h6 class="font-black text-accent uppercase">SAVE PERSISTENCE</h6>
                                <p>Full system state is preserved via Base64 saves. Export your 2026 legacy at any time.</p>
                            </div>
                            <div class="space-y-1">
                                <h6 class="font-black text-accent uppercase">CONSOLE SKINS</h6>
                                <div class="flex flex-wrap gap-1 mt-1">
                                    <span class="px-1 border border-current/20 text-[6px]">BLUEPRINT</span>
                                    <span class="px-1 border border-current/20 text-[6px]">WOODGRAIN</span>
                                    <span class="px-1 border border-current/20 text-[6px]">ARCADE</span>
                                    <span class="px-1 border border-current/20 text-[6px]">CANDY</span>
                                </div>
                                <p class="mt-1">11 unique physical identities for your hardware, from Y2K gloss to 70s woodgrain.</p>
                            </div>
                            <div class="space-y-1">
                                <h6 class="font-black text-accent uppercase">SMART JUMP</h6>
                                <p>Interactive hardware: click the inserted cartridge to instantly locate and highlight the game on your shelf.</p>
                            </div>
                            <div class="space-y-1">
                                <h6 class="font-black text-accent uppercase">JOURNEY MAP</h6>
                                <p>A chronological vertical trail visualizing your 2026 milestones, milestones, and victories.</p>
                            </div>
                            <div class="space-y-1">
                                <h6 class="font-black text-accent uppercase">SYSTEM MONITOR</h6>
                                <p>Reactive hardware marquee featuring infinite-loop ticker tape and beat-reactive oscilloscope.</p>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                title: "PRO TIPS",
                subtitle: "Advanced Maneuvers",
                content: `
                    <div class="space-y-4 text-[10px] leading-tight">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="space-y-1">
                                <span class="font-black uppercase text-accent">SEAL THE RECORD</span>
                                <p>Slamming a stamp requires focus. Choose your rating wisely—it defines your Gamer DNA.</p>
                            </div>
                            <div class="space-y-1">
                                <span class="font-black uppercase text-accent">THEME SWAPPING</span>
                                <p>Open System Config to instantly transform your hardware skin. Use different aesthetics to match your current gaming mood.</p>
                            </div>
                            <div class="space-y-1">
                                <span class="font-black uppercase text-accent">THE GRAVEYARD</span>
                                <p>Dropping a game provides +100 Wisdom XP. Sometimes, quitting is the smartest play.</p>
                            </div>
                            <div class="space-y-1">
                                <span class="font-black uppercase text-accent">RADIO TUNER</span>
                                <p>Cycle through 18 stations in System Config to find the perfect frequency for your current genre.</p>
                            </div>
                            <div class="space-y-1">
                                <span class="font-black uppercase text-accent">POSTER ACCESS</span>
                                <p>Once a game is marked as complete, use the 'Poster' button in the card footer to view high-fidelity artwork.</p>
                            </div>
                            <div class="space-y-1">
                                <span class="font-black uppercase text-accent">BOOT OVERRIDE</span>
                                <p>Tired of the diagnostic sequence? You can disable the BIOS startup animation in the System Config toggles.</p>
                            </div>
                            <div class="space-y-1">
                                <span class="font-black uppercase text-accent">RANDOM_SELECTOR</span>
                                <p>Can't decide? Use the Slot Machine Randomizer in the Gamer Profile to let fate pick your next session.</p>
                            </div>
                            <div class="space-y-1">
                                <span class="font-black uppercase text-accent">VAULT REVIEW</span>
                                <p>Open the Gamer Profile and switch to the Achievements tab to see your earned trophies and completion badges.</p>
                            </div>
                            <div class="space-y-1">
                                <span class="font-black uppercase text-accent">WIKI_LOOKUP</span>
                                <p>Flip a card to find a direct link to the game's Wikipedia page for deep-dive lore and development history.</p>
                            </div>
                            <div class="space-y-1">
                                <span class="font-black uppercase text-accent">CARTRIDGE_JUMP</span>
                                <p>When a game is inserted, click its label on the console hardware to instantly scroll to its shelf location.</p>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                title: "CHALLENGE MATRIX",
                subtitle: "Thematic Categories",
                content: `
                    <div class="space-y-4 text-[10px] leading-relaxed">
                        <div>
                            <h6 class="font-black text-accent uppercase">01. CORE CHALLENGE</h6>
                            <p>A curated selection of defining masterpieces that serve as the foundation of your 2026 gaming legacy.</p>
                        </div>
                        <div>
                            <h6 class="font-black text-accent uppercase">02. WEIRD BONUS</h6>
                            <p>Experimental titles and quirky mechanical anomalies that defy standard genre classification.</p>
                        </div>
                        <div>
                            <h6 class="font-black text-accent uppercase">03. MICRO-QUESTS</h6>
                            <p>Bite-sized RPG adventures designed to deliver a full heroic journey within a single evening's session.</p>
                        </div>
                        <div>
                            <h6 class="font-black text-accent uppercase">04. PAPERWORK</h6>
                            <p>Tactile simulators focused on the mundane satisfaction of organization, stamping, and bureaucratic precision.</p>
                        </div>
                        <div>
                            <h6 class="font-black text-accent uppercase">05. TIME WARPS</h6>
                            <p>Deep-dives into temporal logic, time-loops, and chronological puzzles that demand your full mental focus.</p>
                        </div>
                        <div>
                            <h6 class="font-black text-accent uppercase">06. ZEN GARDEN</h6>
                            <p>Meditative, low-friction experiences designed for decompression and atmospheric immersion.</p>
                        </div>
                        <div>
                            <h6 class="font-black text-accent uppercase">07. ART HOUSE</h6>
                            <p>Visually striking and intellectually stimulating titles that push the boundaries of interactive aesthetics.</p>
                        </div>
                        <div>
                            <h6 class="font-black text-accent uppercase">08. GRAND THEFT AUTO</h6>
                            <p>Legendary open-world crime sagas that defined the genre across three generations of hardware.</p>
                        </div>
                    </div>
                `
            },
            {
                title: "CATALOG_DATABASE",
                subtitle: "Manifest Vol. 1",
                content: `
                    <div class="space-y-4 text-[10px] leading-relaxed">
                        <h6 class="font-black text-accent uppercase border-b border-current/10 pb-1">CORE CHALLENGE [12/12]</h6>
                        <div class="grid grid-cols-2 gap-x-4 gap-y-1 font-bold opacity-80">
                            <span>• Kirby's Adventure</span>
                            <span>• Star Fox 64</span>
                            <span>• Ape Escape</span>
                            <span>• Luigi's Mansion</span>
                            <span>• Zone of the Enders 2</span>
                            <span>• Portal</span>
                            <span>• Mirror's Edge</span>
                            <span>• Asura's Wrath</span>
                            <span>• Max Payne 3</span>
                            <span>• Undertale</span>
                            <span>• Ori & the Wisps</span>
                            <span>• Hi-Fi RUSH</span>
                        </div>
                    </div>
                `
            },
            {
                title: "CATALOG_DATABASE",
                subtitle: "Manifest Vol. 2",
                content: `
                    <div class="space-y-6 text-[10px] leading-relaxed">
                        <div class="space-y-2">
                            <h6 class="font-black text-accent uppercase border-b border-current/10 pb-1">WEIRD BONUS [06/06]</h6>
                            <div class="grid grid-cols-1 gap-y-1 font-bold opacity-80">
                                <span>• WarioWare: Smooth Moves</span>
                                <span>• The Stanley Parable</span>
                                <span>• Donut County</span>
                                <span>• What the Golf?</span>
                                <span>• Turnip Boy Tax Evasion</span>
                                <span>• We Love Katamari REROLL+</span>
                            </div>
                        </div>
                        <div class="space-y-2">
                            <h6 class="font-black text-accent uppercase border-b border-current/10 pb-1">MICRO-QUESTS [06/06]</h6>
                            <div class="grid grid-cols-1 gap-y-1 font-bold opacity-80">
                                <span>• Gato Roboto</span>
                                <span>• Fairune Collection</span>
                                <span>• Bleak Sword</span>
                                <span>• Kamiko</span>
                                <span>• Anodyne</span>
                                <span>• Reventure</span>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                title: "CATALOG_DATABASE",
                subtitle: "Manifest Vol. 3",
                content: `
                    <div class="space-y-6 text-[10px] leading-relaxed">
                        <div class="space-y-2">
                            <h6 class="font-black text-accent uppercase border-b border-current/10 pb-1">PAPERWORK [06/06]</h6>
                            <div class="grid grid-cols-1 gap-y-1 font-bold opacity-80">
                                <span>• Papers, Please</span>
                                <span>• Assemble with Care</span>
                                <span>• Sticky Business</span>
                                <span>• Wilmot's Warehouse</span>
                                <span>• A Little to the Left</span>
                                <span>• Death and Taxes</span>
                            </div>
                        </div>
                        <div class="space-y-2">
                            <h6 class="font-black text-accent uppercase border-b border-current/10 pb-1">TIME WARPS [06/06]</h6>
                            <div class="grid grid-cols-1 gap-y-1 font-bold opacity-80">
                                <span>• SUPERHOT</span>
                                <span>• Minit</span>
                                <span>• Katana ZERO</span>
                                <span>• The Gardens Between</span>
                                <span>• The Silent Age</span>
                                <span>• Timelie</span>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                title: "CATALOG_DATABASE",
                subtitle: "Manifest Vol. 4",
                content: `
                    <div class="space-y-6 text-[10px] leading-relaxed">
                        <div class="space-y-2">
                            <h6 class="font-black text-accent uppercase border-b border-current/10 pb-1">ZEN GARDEN [06/06]</h6>
                            <div class="grid grid-cols-1 gap-y-1 font-bold opacity-80">
                                <span>• A Short Hike</span>
                                <span>• Unpacking</span>
                                <span>• Abzû</span>
                                <span>• Flower</span>
                                <span>• Alba: A Wildlife Adventure</span>
                                <span>• Townscaper</span>
                            </div>
                        </div>
                        <div class="space-y-2">
                            <h6 class="font-black text-accent uppercase border-b border-current/10 pb-1">ART HOUSE [06/06]</h6>
                            <div class="grid grid-cols-1 gap-y-1 font-bold opacity-80">
                                <span>• Gris</span>
                                <span>• Sayonara Wild Hearts</span>
                                <span>• Gorogoa</span>
                                <span>• Monument Valley</span>
                                <span>• The Unfinished Swan</span>
                                <span>• Manifold Garden</span>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                title: "CATALOG_DATABASE",
                subtitle: "Manifest Vol. 5",
                content: `
                    <div class="space-y-6 text-[10px] leading-relaxed">
                        <div class="space-y-2">
                            <h6 class="font-black text-accent uppercase border-b border-current/10 pb-1">GRAND THEFT AUTO [05/05]</h6>
                            <div class="grid grid-cols-1 gap-y-1 font-bold opacity-80">
                                <span>• Grand Theft Auto III</span>
                                <span>• Grand Theft Auto: Vice City</span>
                                <span>• Grand Theft Auto: San Andreas</span>
                                <span>• Grand Theft Auto IV</span>
                                <span>• Grand Theft Auto V</span>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                title: "SYSTEM_CREDITS",
                subtitle: "The Architect Guild",
                content: `
                    <div class="space-y-6 text-[10px] leading-relaxed flex flex-col h-full">
                        <div class="space-y-4">
                            <div>
                                <h6 class="font-black text-accent uppercase">CHIEF OPERATOR</h6>
                                <p class="text-sm font-bold tracking-tight">The Player [2026 Challenger]</p>
                            </div>
                            <div>
                                <h6 class="font-black text-accent uppercase">SYSTEM ARCHITECT</h6>
                                <p class="text-sm font-bold tracking-tight">Gemini AI (Vibe Coding Division)</p>
                            </div>
                            <div>
                                <h6 class="font-black text-accent uppercase">HARDWARE DESIGN</h6>
                                <p>Procedural CSS Chassis v4.0</p>
                            </div>
                        </div>
                        <div class="mt-auto p-4 border-2 border-dashed border-current/20 text-center opacity-50">
                            <p class="font-black uppercase tracking-[0.2em]">Thank you for playing.</p>
                        </div>
                    </div>
                `
            },
            {
                title: "THE_FINAL_WORD",
                subtitle: "Warranty & Notes",
                content: `
                    <div class="h-full flex flex-col">
                        <div class="flex-grow relative">
                            <!-- Lined paper effect -->
                            <div class="absolute inset-0 space-y-4 py-2">
                                <div class="h-[1px] bg-current/10 w-full"></div>
                                <div class="h-[1px] bg-current/10 w-full"></div>
                                <div class="h-[1px] bg-current/10 w-full"></div>
                                <div class="h-[1px] bg-current/10 w-full"></div>
                                <div class="h-[1px] bg-current/10 w-full"></div>
                                <div class="h-[1px] bg-current/10 w-full"></div>
                            </div>
                            <!-- Fake handwriting -->
                            <div class="relative z-10 p-2 font-serif italic text-blue-600 opacity-80 rotate-[-2deg] text-xs">
                                Don't forget to check the Konami code if the system glitches... 
                                <br><br>
                                - Stay Retro.
                            </div>
                        </div>
                        <div class="p-4 bg-current text-secondary text-[7px] font-bold leading-tight">
                            LIMITED WARRANTY: This digital artifact is provided "AS IS". Warranty is void if operator attempts to "Touch Grass" or exits the 2026 simulation before completion of all 48 sectors.
                        </div>
                    </div>
                `
            }
        ];

        this.init();
    }

    init() {
        // Listen for theme changes to re-render pages with correct colors
        document.addEventListener('themeChanged', () => {
            if (!document.getElementById('manual-modal').classList.contains('hidden')) {
                this.render();
            }
        });
    }

    open() {
        const modal = document.getElementById('manual-modal');
        modal.classList.remove('hidden');
        this.render();
        if (typeof sfx !== 'undefined') sfx.playTick();
    }

    close() {
        document.getElementById('manual-modal').classList.add('hidden');
        if (typeof sfx !== 'undefined') sfx.playTick();
    }

    next() {
        if (this.currentPage + 2 < this.pages.length) {
            this.currentPage += 2;
            this.render();
            if (typeof sfx !== 'undefined') sfx.playFlip();
        }
    }

    prev() {
        if (this.currentPage - 2 >= 0) {
            this.currentPage -= 2;
            this.render();
            if (typeof sfx !== 'undefined') sfx.playFlip();
        }
    }

    render() {
        const leftPage = this.pages[this.currentPage];
        const rightPage = this.pages[this.currentPage + 1];

        this.renderPage('left', leftPage, this.currentPage + 1);
        this.renderPage('right', rightPage, this.currentPage + 2);
        
        this.applyTheme();
    }

    renderPage(side, data, num) {
        const content = document.getElementById(`manual-content-${side}`);
        const numEl = document.getElementById(`page-num-${side}`);
        
        if (!data) {
            content.innerHTML = '<div class="flex-grow flex items-center justify-center opacity-10 text-4xl font-black italic">END_OF_GUIDE</div>';
            numEl.innerText = "";
            return;
        }

        content.innerHTML = `
            <div class="mb-6 pb-2 border-b border-current/20">
                <h4 class="text-xl font-black uppercase tracking-tighter leading-none">${data.title}</h4>
                <p class="text-[9px] font-bold uppercase tracking-[0.2em] opacity-50 mt-1">${data.subtitle}</p>
            </div>
            <div class="flex-grow">
                ${data.content}
            </div>
        `;
        numEl.innerText = num;
    }

    applyTheme() {
        const theme = document.documentElement.getAttribute('data-theme') || 'future';
        const pages = document.querySelectorAll('.manual-page');
        
        pages.forEach(p => {
            p.setAttribute('data-manual-theme', theme);
            // Clear old inline styles to allow CSS to take over
            p.style.backgroundColor = "";
            p.style.color = "";
            p.style.borderColor = "";
            p.style.fontFamily = "";
            p.style.boxShadow = "";
        });

        const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
        // Apply accent color to class-labeled spans
        document.querySelectorAll('.text-accent').forEach(el => {
            el.style.color = accentColor;
        });

        // Theme-specific footer text coloring
        const footer = document.querySelector('.manual-page .bg-current');
        if (footer) {
            if (theme === 'blueprint' || theme === 'arcade' || theme === 'legacy') {
                footer.style.backgroundColor = accentColor;
                footer.style.color = "#000000";
            } else if (theme === 'os' || theme === 'woodgrain' || theme === 'papercraft' || theme === 'brick') {
                footer.style.backgroundColor = "#333";
                footer.style.color = "#ffffff";
            } else {
                footer.style.backgroundColor = accentColor;
                footer.style.color = "#ffffff";
            }
        }
    }
}

// Global instance and triggers
let booklet;
document.addEventListener('DOMContentLoaded', () => {
    booklet = new InstructionManual();
});

function openManual() { if (booklet) booklet.open(); }
function closeManual() { if (booklet) booklet.close(); }
function nextPage() { if (booklet) booklet.next(); }
function prevPage() { if (booklet) booklet.prev(); }
