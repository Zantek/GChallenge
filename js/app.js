// --- Data Configuration ---
const coreGames = [
    { id: 'c1', title: "Kirby's Adventure", year: 1993, system: "NES", length: "3.5 hrs", genre: "Platformer", color: "from-pink-500 to-rose-500", wiki: "https://en.wikipedia.org/wiki/Kirby%27s_Adventure", banner: "images/games/banners/c1.jpg", tagline: "The pink puffball's biggest NES adventure yet!", brand: "nintendo", difficulty: 2, score: 84, desc: "A technical marvel for the NES, Kirby's Adventure pushed the console to its limits with vibrant colors and smooth parallax scrolling. The pink puffball Kirby explores Dream Land to recover the shattered Star Rod from King Dedede. This title is historically significant for introducing Kirby's signature copy ability, allowing him to absorb enemy powers like fire, ice, and lasers, which redefined the series' platforming mechanics and puzzle-solving depth." },
    { id: 'c2', title: "Star Fox 64", year: 1997, system: "N64", length: "2 hrs", genre: "Rail Shooter", color: "from-blue-600 to-blue-400", wiki: "https://en.wikipedia.org/wiki/Star_Fox_64", banner: "images/games/banners/c2.jpg", tagline: "Do a barrel roll across the Lylat System!", brand: "nintendo", difficulty: 3, score: 88, desc: "A cinematic masterpiece of the 64-bit era, Star Fox 64 brought intense dogfighting and iconic voice acting to the forefront. Lead Fox McCloud and his team—Falco, Peppy, and Slippy—across the Lylat system to stop Andross. With its branching paths based on player performance, diverse mission types ranging from underwater subs to land-based tanks, and legendary memes, this game remains the gold standard for rail shooters and arcade-style flight combat." },
    { id: 'c3', title: "Ape Escape", year: 1999, system: "PS1", length: "8 hrs", genre: "Action / Platformer", color: "from-yellow-500 to-orange-500", wiki: "https://en.wikipedia.org/wiki/Ape_Escape_(video_game)", banner: "images/games/banners/c3.jpg", tagline: "Catch 'em if you can!", brand: "sony", difficulty: 3, score: 90, desc: "Ape Escape was the first PlayStation game to require the DualShock controller, utilizing both analog sticks for movement and gadget manipulation. You play as Spike, catching a horde of intelligent apes led by the telepathic monkey, Specter, who has traveled back in time to rewrite history. Each ape has a unique personality, requiring a diverse arsenal of gadgets like the Monkey Net, Stun Club, and Sky Flyer to succeed in this quirky and creatively designed time-traveling adventure." },
    { id: 'c4', title: "Luigi's Mansion", year: 2001, system: "GameCube", length: "6 hrs", genre: "Action / Puzzle", color: "from-green-600 to-green-400", wiki: "https://en.wikipedia.org/wiki/Luigi%27s_Mansion", banner: "images/games/banners/c4.png", tagline: "He's looking for his brother... and he's terrified!", brand: "nintendo", difficulty: 2, score: 78, desc: "Luigi finally steps out of his brother's shadow in this atmospheric GameCube launch title. Armed with the Poltergust 3000, a specialized vacuum cleaner, Luigi must explore a dark, ghost-infested mansion to rescue Mario. The game features incredible lighting effects and physics for its time, with a heavy emphasis on environmental puzzles and a unique 'dual-stick' ghost-catching mechanic. It's a delightful blend of spooky atmosphere and satisfying vacuum-based combat." },
    { id: 'c5', title: "Zone of the Enders: The 2nd Runner", year: 2003, system: "PS2", length: "5.5 hrs", genre: "Mech Action", color: "from-blue-700 to-indigo-600", wiki: "https://en.wikipedia.org/wiki/Zone_of_the_Enders:_The_2nd_Runner", banner: "images/games/banners/c5.jpg", tagline: "High-speed robot action at its absolute peak!", brand: "konami", difficulty: 4, score: 82, desc: "Produced by Hideo Kojima, this sequel polished high-speed robotic combat to a mirror shine. Pilot the legendary Orbital Frame Jehuty in a frantic struggle against the forces of BAHRAM. The game is renowned for its breathtaking 'cel-shaded' art style, incredibly fluid 60fps action, and a presentation that makes every battle feel like an epic anime sequence. It represents the peak of mech action games, offering a sense of scale and speed that few others have ever matched." },
    { id: 'c6', title: "Portal", year: 2007, system: "PC / Xbox", length: "3 hrs", genre: "Puzzle / FPS", color: "from-orange-400 to-blue-400", wiki: "https://en.wikipedia.org/wiki/Portal_(video_game)", banner: "images/games/banners/c6.jpg", tagline: "Now you're thinking with portals.", brand: "valve", difficulty: 3, score: 90, desc: "Portal emerged as a revolutionary puzzle game that used physics and spatial logic in entirely new ways. As Chell, you are a test subject in the Aperture Science Enrichment Center, navigating deadly chambers using a hand-held portal device. The game is famous for its dark humor and the iconic AI antagonist GLaDOS, who taunts you with promises of cake. Its short length is balanced by perfect pacing, mind-bending level design, and a narrative reveal that turned it into an instant cultural phenomenon." },
    { id: 'c7', title: "Mirror's Edge", year: 2008, system: "PS3 / 360", length: "6 hrs", genre: "Parkour", color: "from-red-600 to-white", wiki: "https://en.wikipedia.org/wiki/Mirror%27s_Edge", banner: "images/games/banners/c7.jpg", tagline: "Believe in the run.", brand: "ea", difficulty: 4, score: 81, desc: "Mirror's Edge introduced a striking minimalist visual style and a first-person perspective on urban parkour. You play as Faith Connors, a 'Runner' who transmits messages while evading a totalitarian government in a pristine city. Gameplay focuses on momentum and flow, favoring fluid movement across rooftops over gunplay. Its bold use of color, specifically 'Runner Vision' to highlight paths, and unique physical feedback create a visceral sense of speed and vertigo." },
    { id: 'c8', title: "Asura's Wrath", year: 2012, system: "PS3 / 360", length: "8.5 hrs", genre: "Action / Beat 'em up", color: "from-orange-700 to-red-700", wiki: "https://en.wikipedia.org/wiki/Asura%27s_Wrath", banner: "images/games/banners/c8.jpg", tagline: "Anger is your only weapon.", brand: "capcom", difficulty: 2, score: 71, desc: "Asura's Wrath is an episodic, highly cinematic action game that blends myth with over-the-top sci-fi. You play as Asura, a demigod seeking vengeance against his former peers who betrayed him. The game is structured like an anime series, complete with 'next episode' previews and interactive cutscenes that demand your rage. Its sheer scale is unmatched, featuring battles against enemies larger than planets and a story driven by pure anger and epic spectacle." },
    { id: 'c9', title: "Max Payne 3", year: 2012, system: "PC / PS3 / 360", length: "10 hrs", genre: "Third-Person Shooter", color: "from-gray-800 to-red-900", wiki: "https://en.wikipedia.org/wiki/Max_Payne_3", banner: "images/games/banners/c9.jpg", tagline: "Life is a series of bullet-time moments.", brand: "rockstar", difficulty: 4, score: 87, desc: "Max Payne 3 moves from noir New York to the sun-drenched favelas of São Paulo, Brazil. This Rockstar sequel features advanced animation and gunplay systems, with a heavy emphasis on realistic weight and positioning. Max, now in private security, finds himself embroiled in a conspiracy that tests his skills and sanity. The game's use of bullet-time, destructible environments, and a relentless narrative make it a brutal and incredibly polished masterpiece of the genre." },
    { id: 'c10', title: "Undertale", year: 2015, system: "PC / Switch", length: "6 hrs", genre: "RPG", color: "from-gray-900 to-white", wiki: "https://en.wikipedia.org/wiki/Undertale", banner: "images/games/banners/c10.jpg", tagline: "The RPG where no one has to die.", brand: "indie", difficulty: 3, score: 92, desc: "A subversion of RPG tropes, Undertale is a classic where your choices have profound consequences. You fall into the Underground, a world of monsters, and must find your way home. What makes the game special is that you don't have to kill anyone; every encounter can be resolved through negotiation. Its combat system blends turn-based menus with bullet-hell mini-games, while its characters and heart-wrenching story have earned it a place among the most influential indie games." },
    { id: 'c11', title: "Ori and the Will of the Wisps", year: 2020, system: "PC / Xbox", length: "11 hrs", genre: "Metroidvania", color: "from-indigo-400 to-purple-500", wiki: "https://en.wikipedia.org/wiki/Ori_and_the_Will_of_the_Wisps", banner: "images/games/banners/c11.jpg", tagline: "A stunning journey of spirit and light.", brand: "xbox", difficulty: 4, score: 90, desc: "This breathtaking sequel improves upon its predecessor with a stunningly beautiful world and incredibly fluid movement. Explore the forest of Niwen as the spirit Ori, embarking on a quest to save a friend and discover your true destiny. The game's hand-painted art and orchestral score create an emotional atmosphere that elevates intense Metroidvania exploration. With challenging platforming and massive boss encounters, it is a finest example of the genre." },
    { id: 'c12', title: "Hi-Fi RUSH", year: 2023, system: "PC / Xbox / PS5", length: "11 hrs", genre: "Action / Rhythm", color: "from-yellow-400 to-red-500", wiki: "https://en.wikipedia.org/wiki/Hi-Fi_Rush", banner: "images/games/banners/c12.jpg", tagline: "Feel the beat, fight the system.", brand: "xbox", difficulty: 3, score: 89, desc: "Hi-Fi RUSH is a vibrant, high-energy rhythm-action game that feels like a Saturday morning cartoon come to life. You play as Chai, a wannabe rockstar whose music player is fused to his heart, causing the world to pulse to the beat. Combat, movement, and hazards are synced to the music, rewarding players for staying on beat with flashy combos and devastating attacks. Its infectious energy, charming characters, and incredible licensed soundtrack make it an absolute joy to play." }
];

const bonusGames = [
    { id: 'b1', title: "WarioWare: Smooth Moves", year: 2006, system: "Wii", length: "2.5 hrs", genre: "Party / Microgames", color: "from-yellow-400 to-red-500", wiki: "https://en.wikipedia.org/wiki/WarioWare:_Smooth_Moves", banner: "images/games/banners/b1.png", tagline: "Move your body, shake the remote!", brand: "nintendo", difficulty: 2, score: 83, desc: "A frantic collection of microgames, Smooth Moves perfectly showcased the Wii's motion sensing capabilities. Perform dozens of different 'Forms'—holding the Wii Remote in specific ways—to complete tasks that last only seconds. It's a chaotic, high-speed test of reflexes and intuition, wrapped in signature surreal humor and bizarre art. The game remains a brilliant example of how Nintendo can turn experimental hardware features into a pure, concentrated fun experience." },
    { id: 'b2', title: "The Stanley Parable", year: 2013, system: "PC", length: "1.5 hrs", genre: "Narrative / Comedy", color: "from-yellow-600 to-gray-600", wiki: "https://en.wikipedia.org/wiki/The_Stanley_Parable", banner: "images/games/banners/b2.jpg", tagline: "You have no choice... or do you?", brand: "indie", difficulty: 1, score: 88, desc: "A meta-commentary on narrative and choice, The Stanley Parable follows a man named Stanley and a narrator who describes his every move. As you explore the office, you can choose to follow instructions or defiantly ignore them, leading to branching paths, surreal endings, and philosophical observations. The game constantly breaks the fourth wall, questioning the player's agency. It's a sharp, witty, and deep experience that uses the medium itself to deconstruct game design." },
    { id: 'b3', title: "Donut County", year: 2018, system: "Switch / PC", length: "2 hrs", genre: "Puzzle / Physics", color: "from-pink-400 to-purple-400", wiki: "https://en.wikipedia.org/wiki/Donut_County", banner: "images/games/banners/b3.jpg", tagline: "Be the hole. Eat the world.", brand: "indie", difficulty: 2, score: 77, desc: "In this physics-based puzzle game, you play as a hole in the ground that grows larger with every object it swallows. Controlled by a raccoon named BK, the hole is used to 'deliver donuts' by effectively swallowing their homes. The story is told through humorous dialogue between characters trapped underground. It's a simple yet deeply satisfying gameplay hook, paired with a vibrant, low-poly art style and a relaxed atmosphere that makes it a perfect short-form experience." },
    { id: 'b4', title: "What the Golf?", year: 2019, system: "Switch / PC", length: "4 hrs", genre: "Physics / Comedy", color: "from-green-400 to-yellow-300", wiki: "https://en.wikipedia.org/wiki/What_the_Golf%3F", banner: "images/games/banners/b4.jpg", tagline: "A golf game for people who hate golf.", brand: "indie", difficulty: 2, score: 84, desc: "The ultimate golf game for people who hate golf, What the Golf? is a relentless barrage of surprises. Every level introduces a ridiculous mechanic that challenges your expectations of the sport. You might launch houses, people, cars, or even the hole itself. The game parodies countless other titles and genres, keeping the player constantly on their toes with its rapid-fire comedy and creative level design. It's a celebratory deconstruction that prioritizes laughter and invention." },
    { id: 'b5', title: "Turnip Boy Commits Tax Evasion", year: 2021, system: "PC / Switch", length: "2.5 hrs", genre: "Adventure", color: "from-green-500 to-green-700", wiki: "https://en.wikipedia.org/wiki/Turnip_Boy_Commits_Tax_Evasion", banner: "images/games/banners/b5.jpg", tagline: "Rip up the system, one document at a time.", brand: "indie", difficulty: 3, score: 74, desc: "Don't let the cute art style fool you—Turnip Boy is a menace. After being evicted for failing to pay taxes, our protagonist must embark on a quest to tear up documents and clear his debt. Gameplay is a clever parody of classic Zelda adventures, featuring dungeon exploration and item-based puzzles. Along the way, you'll encounter eccentric food-based characters and uncover a surprisingly dark story about bureaucratic corruption. It's a short adventure that balances adorable visuals with sharp humor." },
    { id: 'b6', title: "We Love Katamari REROLL+", year: 2023, system: "Consoles", length: "5 hrs", genre: "Puzzle / Action", color: "from-pink-500 to-green-500", wiki: "https://en.wikipedia.org/wiki/We_Love_Katamari", banner: "images/games/banners/b6.jpg", tagline: "Roll up everything in the universe!", brand: "bandai", difficulty: 3, score: 80, desc: "This remaster of the beloved sequel captures everything that made Katamari Damacy a cult classic while adding even more charm. Play as the tiny Prince, tasked by the King of All Cosmos to roll a sticky ball to collect increasingly larger objects. As the Katamari grows from a thumbtack to a celestial giant, the sense of scale and satisfaction is unparalleled. The game is celebrated for its surreal premise, infectious pop soundtrack, and a unique control scheme that makes rolling up an entire city feel joyful." }
];

const zenGames = [
    { id: 'z1', title: "A Short Hike", year: 2019, system: "PC/Switch", length: "1.5 hrs", genre: "Adventure", color: "from-green-300 to-emerald-500", wiki: "https://en.wikipedia.org/wiki/A_Short_Hike", banner: "images/games/banners/z1.jpg", tagline: "Hike, climb, and soar.", brand: "indie", difficulty: 1, score: 82, desc: "A Short Hike is a peaceful exploration game set in Hawk Peak Provincial Park. You play as Claire, a bird who decides to hike to the mountain top for cell reception. The game encourages you to move at your own pace, offering hidden paths and charming interactions. Its pixelated 3D graphics and soothing soundtrack create a warm atmosphere that perfectly captures a lazy summer afternoon. It's a masterful 'cozy' game that values discovery and atmosphere over stress and conflict." },
    { id: 'z2', title: "Unpacking", year: 2021, system: "PC/Xbox", length: "3.5 hrs", genre: "Puzzle", color: "from-orange-200 to-orange-400", wiki: "https://en.wikipedia.org/wiki/Unpacking_(video_game)", banner: "images/games/banners/z2.jpg", tagline: "Every object tells a story.", brand: "indie", difficulty: 1, score: 84, desc: "Unpacking is a meditative puzzle game where you tell a life story by unpacking belongings across several house moves. Gameplay is simple: find a place for items in a new room. The true depth lies in environmental storytelling; every object—from a favorite toy to a kitchen gadget—reveals details about the character's interests and growth. Its satisfying sound design and detailed pixel art make it a uniquely intimate experience that celebrates the significance of the objects we keep." },
    { id: 'z3', title: "Abzû", year: 2016, system: "PS4/PC", length: "2 hrs", genre: "Underwater", color: "from-cyan-400 to-blue-600", wiki: "https://en.wikipedia.org/wiki/Abz%C3%BB", banner: "images/games/banners/z3.jpg", tagline: "Dive into the heart of the ocean.", brand: "indie", difficulty: 1, score: 80, desc: "From the art director of Journey, Abzû is a breathtaking underwater odyssey that immerses you in a vibrant ocean world. As a nameless diver, you explore vast undersea environments teeming with marine life. There are no oxygen limits or combat; the game focuses on movement and the awe-inspiring spectacle of the sea. Its fluid swimming mechanics and stunning orchestral score create a deeply emotional experience, taking the player on a silent journey through the heart of the ocean's mysteries." },
    { id: 'z4', title: "Flower", year: 2009, system: "PS3/PC", length: "2 hrs", genre: "Nature", color: "from-pink-100 to-green-300", wiki: "https://en.wikipedia.org/wiki/Flower_(video_game)", banner: "images/games/banners/z4.jpg", tagline: "Be the wind.", brand: "sony", difficulty: 1, score: 87, desc: "Flower is a poetic experience that allows you to become the wind, guiding petals through lush, expansive landscapes. By tilting the controller, you drift across fields, causing flowers to bloom and revitalizing the environment with color. The game is a wordless exploration of the relationship between nature and urbanization, moving from peaceful meadows to industrial settings. Its beautiful visuals and dynamic soundtrack create a unique form of interactive relaxation that feels like a gentle digital daydream." },
    { id: 'z5', title: "Alba: A Wildlife Adventure", year: 2020, system: "All", length: "2.5 hrs", genre: "Adventure", color: "from-blue-200 to-yellow-200", wiki: "https://en.wikipedia.org/wiki/Alba:_A_Wildlife_Adventure", banner: "images/games/banners/z5.jpg", tagline: "Save the island, save the animals.", brand: "indie", difficulty: 2, score: 79, desc: "Set on a Mediterranean island, Alba is a heartwarming adventure about conservation and the power of small actions. You play as Alba, who decides to start a wildlife rescue league to save the local environment from a hotel development. Armed with your phone camera, you document species, clean up litter, and help island residents. Its vibrant art style and positive message about environmental stewardship make it an uplifting and wholesome experience for players of all ages." },
    { id: 'z6', title: "Townscaper", year: 2021, system: "All", length: "1 hr", genre: "Toy / Builder", color: "from-red-200 to-blue-200", wiki: "https://en.wikipedia.org/wiki/Townscaper", banner: "images/games/banners/z6.jpg", tagline: "Instant town building.", brand: "indie", difficulty: 1, score: 75, desc: "Townscaper is a digital toy offering an instant and satisfying town-building experience. There are no goals or timers; you simply click to place colorful blocks, and an algorithm transforms them into charming coastal architecture. You can create winding streets, cathedrals, or floating islands. The sound of bricks popping into place and the organic way buildings connect make it a meditative and creatively liberating experience that focuses purely on the joy of construction." }
];

const timeGames = [
    { id: 't1', title: "SUPERHOT", year: 2016, system: "PC/Xbox", length: "2.5 hrs", genre: "FPS / Puzzle", color: "from-red-600 to-gray-900", wiki: "https://en.wikipedia.org/wiki/Superhot", banner: "images/games/banners/t1.jpg", tagline: "Time moves only when you move.", brand: "indie", difficulty: 4, score: 82, desc: "SUPERHOT is a revolutionary shooter where time only moves when you move. This mechanic transforms intense action into tactical puzzles where every step and shot must be planned. Outnumbered and outgunned, you must dodge bullets in slow motion and use the environment to your advantage. Its striking minimalist art style and meta-narrative about control and immersion make it one of the most innovative and memorable action games of the last decade." },
    { id: 't2', title: "Minit", year: 2018, system: "PC/Switch", length: "2 hrs", genre: "Adventure", color: "from-gray-100 to-gray-400", wiki: "https://en.wikipedia.org/wiki/Minit_(video_game)", banner: "images/games/banners/t2.jpg", tagline: "A world of adventure, 60 seconds at a time.", brand: "indie", difficulty: 3, score: 79, desc: "Minit is a peculiar adventure played sixty seconds at a time. Cursed to die every minute, you must explore a monochrome world, helping characters and uncovering secrets in rapid-fire sprints. Each life is a race to unlock items or shortcuts that persist across your inevitable deaths. Its clever use of a time-loop mechanic, paired with minimalist aesthetics and witty writing, creates a unique sense of urgency and discovery that rewards optimizing every second." },
    { id: 't3', title: "Katana ZERO", year: 2019, system: "PC/Switch", length: "4.5 hrs", genre: "Action", color: "from-purple-600 to-fuchsia-600", wiki: "https://en.wikipedia.org/wiki/Katana_Zero", banner: "images/games/banners/t3.jpg", tagline: "Slash through time.", brand: "indie", difficulty: 5, score: 83, desc: "A stylish neo-noir action platformer, Katana ZERO features breakneck combat and instant-death thrills. You play as an assassin in a dystopian future, using a time-bending drug to slow time and deflect bullets. Gameplay is fast and unforgiving, requiring you to clear rooms in a single, perfectly executed flow. Between missions, a dark story unfolds through interactive dialogue and hallucinations. Its vibrant pixel art and synth-wave soundtrack create a visceral experience." },
    { id: 't4', title: "The Gardens Between", year: 2018, system: "All", length: "2.5 hrs", genre: "Puzzle", color: "from-indigo-300 to-teal-400", wiki: "https://en.wikipedia.org/wiki/The_Gardens_Between", banner: "images/games/banners/t4.jpg", tagline: "Manipulate time, follow the story.", brand: "indie", difficulty: 2, score: 79, desc: "In this surreal puzzle game, you manipulate time to guide two friends through dreamlike island gardens made of childhood memories. Instead of controlling the characters directly, you control the flow of time itself—moving it forward and backward to solve spatial puzzles. The game is a wordless exploration of friendship and nostalgia. Its beautiful, stylized art and evocative atmosphere create a quiet, emotional experience that celebrates the bittersweet nature of growing up." },
    { id: 't5', title: "Braid", year: 2008, system: "PC/Xbox", length: "5 hrs", genre: "Puzzle Platformer", color: "from-amber-600 to-stone-700", wiki: "https://en.wikipedia.org/wiki/Braid_(video_game)", banner: "images/games/banners/t5.jpg", tagline: "Timeless.", brand: "indie", difficulty: 4, score: 93, desc: "Braid is a seminal indie title that redefined storytelling and puzzle design. As Tim, you journey through worlds using unique time-manipulation mechanics—rewinding time, creating shadow clones, or dealing with objects unaffected by time. Each puzzle is a brilliant exploration of its specific mechanic, requiring deep logical thinking. The game's painterly art and philosophical narrative reveal a complex story, making it a landmark achievement in interactive storytelling." },
    { id: 't6', title: "Timelie", year: 2020, system: "PC/Switch", length: "4.5 hrs", genre: "Stealth Puzzle", color: "from-blue-900 to-cyan-500", wiki: "https://en.wikipedia.org/wiki/Timelie", banner: "images/games/banners/t6.jpg", tagline: "Control the future, fix the past.", brand: "indie", difficulty: 3, score: 77, desc: "Timelie is a clever stealth-puzzle game that allows you to control time like a media player. You guide a young girl and a mysterious cat through a futuristic facility, using a timeline bar to preview the future and rewind the past. This 'precognition' allows you to plan perfect escapes, avoiding guards and traps with surgical precision. The girl and cat must coordinate actions across the timeline, adding depth. Its design and atmosphere make it a hidden gem for puzzle fans." }
];

const artGames = [
    { id: 'a1', title: "Gris", year: 2018, system: "PC/Switch", length: "3.5 hrs", genre: "Art / Platformer", color: "from-pink-200 to-blue-300", wiki: "https://en.wikipedia.org/wiki/Gris", banner: "images/games/banners/a1.jpg", tagline: "A journey through sorrow and light.", brand: "indie", difficulty: 2, score: 84, desc: "Gris is a hopeful young girl lost in her own world, dealing with a painful experience. Her journey through sorrow is manifested in her dress, which grants abilities to navigate her faded reality. As the story unfolds, Gris grows emotionally and sees her world differently, uncovering new paths. The game is a masterpiece of visual design, with a stunning watercolor art style and a haunting soundtrack that capture themes of grief, resilience, and restoration." },
    { id: 'a2', title: "Sayonara Wild Hearts", year: 2019, system: "PC/Switch", length: "1.5 hrs", genre: "Music / Action", color: "from-purple-700 to-indigo-900", wiki: "https://en.wikipedia.org/wiki/Sayonara_Wild_Hearts", banner: "images/games/banners/a2.jpg", tagline: "A pop-album video game.", brand: "indie", difficulty: 3, score: 84, desc: "Sayonara Wild Hearts is a neon-soaked 'pop-album video game' about heartbreak, healing, and self-discovery. You play as a young woman embarking on a high-speed journey through a stylized world to recover harmony. Gameplay is a fast blend of racing, rhythm, and arcade action, all synced to an original synth-pop soundtrack. Each level feels like a unique music video, filled with incredible visual flair. It's a short, euphoric, and deeply empowering experience." },
    { id: 'a3', title: "Gorogoa", year: 2017, system: "PC/Mobile", length: "2 hrs", genre: "Hand-drawn Puzzle", color: "from-amber-100 to-stone-500", wiki: "https://en.wikipedia.org/wiki/Gorogoa", banner: "images/games/banners/a3.jpg", tagline: "Thousands of illustrations, one story.", brand: "indie", difficulty: 3, score: 84, desc: "Gorogoa is an elegant and unique puzzle game told through thousands of hand-drawn illustrations. Gameplay involves arranging these illustrations within a grid, discovering unexpected connections to progress. You might zoom into a painting or layer scenes. The game is a silent, symbolic narrative about a boy's search for a divine monster, exploring themes of perspective and time. Its ingenious design and beautiful art make it a one-of-a-kind intellectual experience." },
    { id: 'a4', title: "Monument Valley", year: 2014, system: "Mobile/PC", length: "2 hrs", genre: "Optical Puzzle", color: "from-teal-200 to-rose-300", wiki: "https://en.wikipedia.org/wiki/Monument_Valley_(video_game)", banner: "images/games/banners/a4.jpg", tagline: "Manipulate the impossible.", brand: "indie", difficulty: 2, score: 89, desc: "Monument Valley is a stunning puzzle game where you guide a princess through a world of impossible architecture. The level design is inspired by optical illusions, requiring you to manipulate the environment discover connections that shouldn't logically exist. Its minimalist art style and soothing sound design create a deeply meditative atmosphere. It's a landmark mobile game that created an experience that is both intellectually challenging and visually arresting." },
    { id: 'a5', title: "The Unfinished Swan", year: 2012, system: "PS3/PC", length: "3 hrs", genre: "Adventure", color: "from-gray-100 to-gray-300", wiki: "https://en.wikipedia.org/wiki/The_Unfinished_Swan", banner: "images/games/banners/a5.jpg", tagline: "Revealing a hidden kingdom.", brand: "sony", difficulty: 2, score: 79, desc: "The Unfinished Swan begins in a featureless white space. As Monroe, a boy chasing a runaway swan from a painting, you explore this world by splattering paint to reveal geometry. The game is a constant journey of discovery, introducing new mechanics in every chapter—from navigating a vine-filled garden to building structures with water. Its unique premise and experimental approach to perspective make it a creative adventure that feels like a silent fairy tale." },
    { id: 'a6', title: "Manifold Garden", year: 2019, system: "All", length: "5 hrs", genre: "Geometry Puzzle", color: "from-gray-700 to-indigo-400", wiki: "https://en.wikipedia.org/wiki/Manifold_Garden", banner: "images/games/banners/a6.jpg", tagline: "Rediscover gravity.", brand: "indie", difficulty: 4, score: 77, desc: "Manifold Garden is a mind-bending game that reimagines the laws of physics. Set in a world of infinite Escher-esque architecture, you navigate structures by shifting your orientation—turning walls into floors. You must solve complex spatial puzzles by manipulating blocks and exploring the infinite scale of the world. Its stark geometric art style and focus on the nature of space create a sense of scale and wonder that is truly unique, offering a deep and challenging intellectual journey." }
];

const allGames = [...coreGames, ...bonusGames, ...zenGames, ...timeGames, ...artGames];

const categoryNames = { 
    'core': 'Core Challenge', 
    'bonus': 'Weird Bonus', 
    'zen': 'Zen Garden', 
    'time': 'Time Warp', 
    'art': 'Art House' 
};

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
    } else if (s.includes('switch')) {
        // Switch Icon (Screen + Joy-cons)
        path = '<rect x="2" y="6" width="20" height="12" rx="2"/><line x1="7" y1="6" x2="7" y2="18"/><line x1="17" y1="6" x2="17" y2="18"/><circle cx="4.5" cy="10" r="1"/><circle cx="19.5" cy="14" r="1"/>';
    } else if (s.includes('wii')) {
        // Wii Remote
        path = '<rect x="9" y="4" width="6" height="16" rx="1"/><circle cx="12" cy="7" r="1"/><circle cx="12" cy="14" r="0.5"/><circle cx="12" cy="16" r="0.5"/>';
    } else if (s.includes('nes') || s.includes('snes')) {
        // NES Controller
        path = '<rect x="2" y="7" width="20" height="10" rx="1"/><rect x="5" y="11" width="4" height="1"/><rect x="6.5" y="9.5" width="1" height="4"/><circle cx="15" cy="12" r="1"/><circle cx="18" cy="12" r="1"/>';
    } else if (s.includes('n64')) {
        // N64 Controller shape
        path = '<path d="M4 8l2 9h3l1-4h4l1 4h3l2-9H4z"/><circle cx="16" cy="11" r="1"/><circle cx="18" cy="11" r="1"/><circle cx="17" cy="9" r="1"/><circle cx="17" cy="13" r="1"/><path d="M6 11h2M7 10v2"/>';
    } else if (s.includes('gamecube')) {
        // GameCube Controller buttons
        path = '<path d="M6 8h12a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-2a4 4 0 0 1 4-4z"/><circle cx="16" cy="11" r="2"/><circle cx="14" cy="13" r="1"/><circle cx="18" cy="13" r="0.8"/><circle cx="16" cy="14" r="0.8"/>';
    } else if (s.includes('ps') || s.includes('playstation')) {
        // DualShock style (Symmetrical sticks)
        path = '<path d="M6 8h12a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-2a4 4 0 0 1 4-4z"/><circle cx="8.5" cy="14" r="1.5"/><circle cx="15.5" cy="14" r="1.5"/><path d="M6 11h2M7 10v2M15 10.5h1M16 11.5h1"/>';
    } else if (s.includes('xbox') || s.includes('360')) {
        // Xbox style (Asymmetrical sticks)
        path = '<path d="M6 8h12a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-2a4 4 0 0 1 4-4z"/><circle cx="7.5" cy="11.5" r="1.5"/><circle cx="16.5" cy="14.5" r="1.5"/>';
    } else {
        // Default Gamepad Icon
        path = '<path d="M6 12h.01M9 12h.01M15 12h.01M18 12h.01M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm6 12v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2"/>';
    }

    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400 opacity-80">${path}</svg>`;
}

// --- Logic ---

let completedGames = JSON.parse(localStorage.getItem('gamingChallenge2026')) || [];
let completionDates = JSON.parse(localStorage.getItem('gamingChallengeDates2026')) || {};
let droppedGames = JSON.parse(localStorage.getItem('gamingChallengeDropped2026')) || [];
let gameReviews = JSON.parse(localStorage.getItem('gamingChallengeReviews2026')) || {};

function saveState() {
    localStorage.setItem('gamingChallenge2026', JSON.stringify(completedGames));
    localStorage.setItem('gamingChallengeDates2026', JSON.stringify(completionDates));
    localStorage.setItem('gamingChallengeDropped2026', JSON.stringify(droppedGames));
    localStorage.setItem('gamingChallengeReviews2026', JSON.stringify(gameReviews));
    updateProgress();
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options).toUpperCase();
}

let currentReviewTarget = null;

function openReviewModal(id) {
    currentReviewTarget = id;
    document.getElementById('review-modal').classList.remove('hidden');
}

function closeReviewModal() {
    currentReviewTarget = null;
    document.getElementById('review-modal').classList.add('hidden');
}

function applyReviewStamp(rating) {
    if (!currentReviewTarget) return;
    
    const id = currentReviewTarget;
    sfx.playThud();
    
    // Process Completion
    if (!completedGames.includes(id)) {
        completedGames.push(id);
        const now = new Date().toISOString();
        completionDates[id] = now;
    }
    
    gameReviews[id] = rating;
    
    closeReviewModal();
    saveState();
}

function toggleGame(id, event) {
    if (event) event.stopPropagation();
    
    // Safety: Don't allow completing dropped games
    if (droppedGames.includes(id)) return;

    if (completedGames.includes(id)) {
        completedGames = completedGames.filter(gameId => gameId !== id);
        delete completionDates[id];
        delete gameReviews[id];
        saveState();
    } else {
        openReviewModal(id);
    }
}

function parseLength(lengthStr) {
    const num = parseFloat(lengthStr);
    return isNaN(num) ? 0 : num;
}

function calculateStats() {
    const droppedCount = droppedGames.length;
    const total = allGames.length - droppedCount;
    const completed = completedGames.length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    let totalXP = 0;
    allGames.forEach(game => {
        if (completedGames.includes(game.id)) {
            totalXP += parseLength(game.length) * 100;
        } else if (droppedGames.includes(game.id)) {
            totalXP += 100; // Wisdom XP
        }
    });

    const xpPerLevel = 500;
    const level = Math.floor(totalXP / xpPerLevel) + 1;
    const currentLevelXP = totalXP % xpPerLevel;
    const xpPercentage = (currentLevelXP / xpPerLevel) * 100;

    return { total, completed, percentage, level, currentLevelXP, xpPerLevel, xpPercentage, droppedCount };
}

function updateProgress(silent = false) {
    const stats = calculateStats();
    const oldLevel = parseInt(document.getElementById('level-badge').innerText.replace('L', '')) || 1;

    // UI Updates
    document.getElementById('progress-bar').style.width = `${stats.percentage}%`;
    document.getElementById('progress-text').innerText = `${stats.completed}/${stats.total} Games`;
    
    if (stats.droppedCount > 0) {
        document.getElementById('progress-text').innerText += ` (${stats.droppedCount} Dropped)`;
    }
    
    document.getElementById('level-badge').innerText = `L${stats.level}`;
    document.getElementById('xp-bar').style.width = `${stats.xpPercentage}%`;
    document.getElementById('xp-text').innerText = `${Math.floor(stats.currentLevelXP)} / ${stats.xpPerLevel} XP to Level ${stats.level + 1}`;

    // Update Category Grids (Filter out dropped games)
    const categoryData = {
        'core': { list: coreGames, grid: 'core-grid', count: 'count-core', section: 'section-core' },
        'bonus': { list: bonusGames, grid: 'bonus-grid', count: 'count-bonus', section: 'section-bonus' },
        'zen': { list: zenGames, grid: 'zen-grid', count: 'count-zen', section: 'section-zen' },
        'time': { list: timeGames, grid: 'time-grid', count: 'count-time', section: 'section-time' },
        'art': { list: artGames, grid: 'art-grid', count: 'count-art', section: 'section-art' }
    };

    Object.entries(categoryData).forEach(([key, data]) => {
        const grid = document.getElementById(data.grid);
        const countBadge = document.getElementById(data.count);
        const section = document.getElementById(data.section);
        
        if (grid) {
            const activeGames = data.list.filter(g => !droppedGames.includes(g.id));
            grid.innerHTML = activeGames.map(game => createCard(game, key)).join('');
            
            // Update Count Badge
            if (countBadge) {
                countBadge.innerText = `${activeGames.length} Games`;
            }

            // Update Section Opacity
            if (section) {
                if (activeGames.length === 0) {
                    section.classList.add('opacity-30');
                } else {
                    section.classList.remove('opacity-30');
                }
            }
        }
    });

    // Update Graveyard
    const graveyardGrid = document.getElementById('graveyard-grid');
    const graveyardSection = document.getElementById('graveyard-section');
    if (droppedGames.length > 0) {
        graveyardSection.classList.remove('hidden');
        const droppedList = allGames.filter(g => droppedGames.includes(g.id));
        graveyardGrid.innerHTML = droppedList.map(game => createCard(game)).join('');
    } else {
        graveyardSection.classList.add('hidden');
    }

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
    const checkList = (list) => {
        if (list.length === 0) return false;
        const allAccountedFor = list.every(g => completedGames.includes(g.id) || droppedGames.includes(g.id));
        const atLeastOneCompleted = list.some(g => completedGames.includes(g.id));
        return allAccountedFor && atLeastOneCompleted;
    };
    
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

function toggleDrop(id, event) {
    if (event) event.stopPropagation();
    
    if (droppedGames.includes(id)) {
        droppedGames = droppedGames.filter(gameId => gameId !== id);
        if (gameReviews[id] === 'dropped') delete gameReviews[id];
    } else {
        // Remove from completed if it was there
        completedGames = completedGames.filter(gameId => gameId !== id);
        delete completionDates[id];
        
        droppedGames.push(id);
        gameReviews[id] = 'dropped'; // Automatic Stamp
        sfx.playTone(200, 'sine', 0.5, 0, 0.1); // Low somber tone
    }
    closeModal();
    saveState();
}

function dropCategory(key) {
    const categoryLists = {
        'core': coreGames,
        'bonus': bonusGames,
        'zen': zenGames,
        'time': timeGames,
        'art': artGames
    };
    
    const list = categoryLists[key];
    if (!list) return;

    if (confirm(`Drop all available games in this category? Completed games will be skipped.`)) {
        list.forEach(game => {
            // Only drop if not already dropped AND not completed
            if (!droppedGames.includes(game.id) && !completedGames.includes(game.id)) {
                droppedGames.push(game.id);
            }
        });
        sfx.playTone(200, 'sine', 0.5, 0, 0.1);
        saveState();
    }
}

function reviveCategory(key) {
    const categoryLists = {
        'core': coreGames,
        'bonus': bonusGames,
        'zen': zenGames,
        'time': timeGames,
        'art': artGames
    };
    
    const list = categoryLists[key];
    if (!list) return;

    list.forEach(game => {
        droppedGames = droppedGames.filter(id => id !== game.id);
    });
    saveState();
}

function resetProgress() {
    if(confirm("Are you sure you want to reset all progress? This will also clear the Graveyard and Review Stamps.")) {
        completedGames = [];
        droppedGames = [];
        completionDates = {};
        gameReviews = {};
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


    // 4. Review Distribution
    const reviewCounts = {
        'masterpiece': 0,
        'solid': 0,
        'meh': 0,
        'dropped': 0
    };
    
    let totalReviews = 0;
    Object.values(gameReviews).forEach(rating => {
        if (reviewCounts.hasOwnProperty(rating)) {
            reviewCounts[rating]++;
            totalReviews++;
        }
    });

    const container = document.getElementById('review-stamp-bars');
    container.innerHTML = '';

    if (totalReviews === 0) {
        container.innerHTML = '<p class="text-center text-gray-500 text-sm italic py-4">Review games to see your distribution!</p>';
    } else {
        const order = ['masterpiece', 'solid', 'meh', 'dropped'];
        const colors = {
            'masterpiece': 'bg-emerald-500',
            'solid': 'bg-blue-500',
            'meh': 'bg-yellow-500',
            'dropped': 'bg-red-500'
        };
        const labels = {
            'masterpiece': 'Masterpiece',
            'solid': 'Solid Play',
            'meh': 'Meh / Average',
            'dropped': 'Dropped'
        };

        order.forEach(key => {
            const count = reviewCounts[key];
            if (count === 0) return; // Skip empty categories
            
            const pct = (count / totalReviews) * 100;
            
            const html = `
                <div class="relative">
                    <div class="flex justify-between text-xs font-semibold mb-1">
                        <span class="text-gaming-text/80">${labels[key]}</span>
                        <span class="text-gaming-muted">${count} (${Math.round(pct)}%)</span>
                    </div>
                    <div class="w-full bg-gaming-dark rounded-full h-2 overflow-hidden border border-gaming-border">
                        <div class="${colors[key]} h-2 rounded-full" style="width: ${pct}%"></div>
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
    const data = btoa(JSON.stringify({
        completed: completedGames,
        dates: completionDates,
        dropped: droppedGames,
        reviews: gameReviews
    }));
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
        const decoded = JSON.parse(atob(code));
        let newCompleted = [];
        let newDates = {};
        let newDropped = [];
        let newReviews = {};

        if (Array.isArray(decoded)) {
            // Backward compatibility
            newCompleted = decoded;
        } else if (decoded.completed && Array.isArray(decoded.completed)) {
            newCompleted = decoded.completed;
            newDates = decoded.dates || {};
            newDropped = decoded.dropped || [];
            newReviews = decoded.reviews || {};
        } else {
            throw new Error("Invalid format");
        }

        if(confirm("This will overwrite your current progress. Continue?")) {
            completedGames = newCompleted;
            completionDates = newDates;
            droppedGames = newDropped;
            gameReviews = newReviews;
            saveState();
            location.reload();
        }
    } catch (e) {
        alert("Invalid save code. Please check and try again.");
    }
}

function generateShareCard() {
    const stats = calculateStats();
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'future';
    
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 630;
    const ctx = canvas.getContext('2d');

    // Theme Configs
    const themeStyles = {
        'future': {
            bg: ['#0f172a', '#1e1b4b'],
            accent: '#3b82f6',
            secondary: '#a855f7',
            text: '#ffffff',
            muted: '#94a3b8',
            font: 'Inter, sans-serif',
            radius: 20,
            glow: true
        },
        'brick': {
            bg: ['#8bac0f', '#8bac0f'],
            accent: '#0f380f',
            secondary: '#306230',
            text: '#0f380f',
            muted: '#306230',
            font: 'monospace',
            radius: 0,
            glow: false
        },
        'cube': {
            bg: ['#6a5acd', '#4b0082'],
            accent: '#ff4500',
            secondary: '#ffa500',
            text: '#ffffff',
            muted: '#dcdcdc',
            font: 'Arial Black, sans-serif',
            radius: 50,
            glow: true
        },
        'os': {
            bg: ['#c0c0c0', '#c0c0c0'],
            accent: '#000080',
            secondary: '#808080',
            text: '#000000',
            muted: '#404040',
            font: 'Tahoma, sans-serif',
            radius: 0,
            glow: false
        }
    };

    const s = themeStyles[currentTheme] || themeStyles['future'];

    // 1. Background
    const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
    gradient.addColorStop(0, s.bg[0]);
    gradient.addColorStop(1, s.bg[1]);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1200, 630);

    // 2. Decorative elements
    if (s.glow) {
        ctx.shadowBlur = 150;
        ctx.shadowColor = s.accent;
        ctx.fillStyle = s.accent;
        ctx.beginPath();
        ctx.arc(1100, 100, 200, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowColor = s.secondary;
        ctx.fillStyle = s.secondary;
        ctx.beginPath();
        ctx.arc(100, 530, 150, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
    }

    if (currentTheme === 'os') {
        // Win95 Blue Header Bar
        ctx.fillStyle = '#000080';
        ctx.fillRect(10, 10, 1180, 60);
        ctx.fillStyle = '#ffffff';
        ctx.font = `bold 30px ${s.font}`;
        ctx.textAlign = 'left';
        ctx.fillText(' Challenge_Results.exe', 30, 45);
        
        // Window Borders
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 4;
        ctx.strokeRect(5, 5, 1190, 620);
        ctx.strokeStyle = '#808080';
        ctx.strokeRect(7, 7, 1186, 616);
    }

    if (currentTheme === 'brick') {
        // Scanlines effect for brick
        ctx.fillStyle = 'rgba(0,0,0,0.05)';
        for(let i=0; i<630; i+=4) {
            ctx.fillRect(0, i, 1200, 2);
        }
    }

    // 4. Content
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Title
    ctx.font = `bold 70px ${s.font}`;
    ctx.fillStyle = s.text;
    if (currentTheme === 'os') ctx.fillStyle = '#000000';
    ctx.fillText('2026 Gaming Challenge', 600, 150);

    // Main Stat (Percentage)
    if (s.glow) {
        ctx.shadowBlur = 20;
        ctx.shadowColor = s.accent;
    }
    ctx.font = `bold 180px ${s.font}`;
    ctx.fillStyle = s.accent;
    ctx.fillText(`${stats.percentage}%`, 600, 320);
    ctx.shadowBlur = 0;

    // Subtitle
    ctx.font = `bold 40px ${s.font}`;
    ctx.fillStyle = s.muted;
    ctx.fillText('COMPLETED', 600, 420);

    // Details Bar
    ctx.fillStyle = currentTheme === 'os' ? '#ffffff' : (currentTheme === 'brick' ? s.secondary : '#1e293b');
    if (currentTheme === 'os') {
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.strokeRect(300, 480, 600, 100);
        ctx.fillRect(300, 480, 600, 100);
    } else {
        ctx.roundRect(300, 480, 600, 100, s.radius);
        ctx.fill();
    }

    // Detail Text
    ctx.font = `bold 36px ${s.font}`;
    ctx.fillStyle = currentTheme === 'brick' ? s.bg[0] : (currentTheme === 'os' ? '#000000' : '#f8fafc');
    ctx.fillText(`Level ${stats.level}  •  ${stats.completed}/${stats.total} Games`, 600, 530);

    // Footer
    ctx.font = `20px ${s.font}`;
    ctx.fillStyle = s.muted;
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
    
    // Completion Stamp in Modal
    let stampHtml = '';
    if (completionDates[id]) {
        stampHtml = `
            <div class="absolute top-4 left-4 z-20">
                <div class="passport-stamp">${formatDate(completionDates[id])}</div>
            </div>
        `;
    }

    banner.innerHTML = `
        <div class="absolute inset-0 bg-black/40 z-0"></div>
        ${stampHtml}
        <h2 id="modal-title-big" class="hidden text-4xl font-black text-gaming-text drop-shadow-lg text-center px-4 z-10">${game.title}</h2>
    `;

    const hltbUrl = `https://howlongtobeat.com/?q=${encodeURIComponent(game.title)}`;
    const ytUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(game.title + ' Gameplay Trailer')}`;

    const modalActions = document.getElementById('modal-actions');
    const isDropped = droppedGames.includes(id);
    const isCompleted = completedGames.includes(id);

    const dropButtonHtml = !isCompleted ? `
        <button onclick="toggleDrop('${id}')" class="text-gaming-muted hover:text-red-400 transition-colors flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5zM9 7a3 3 0 0 1 6 0v3H9V7zm3 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>
            ${isDropped ? 'Revive Game' : 'Drop Game'}
        </button>
    ` : '<div></div>';

    modalActions.innerHTML = `
        <div class="flex flex-col sm:flex-row gap-6 justify-between items-center w-full mt-6 border-t border-gaming-border pt-6">
            <div class="flex justify-center w-full sm:w-auto order-2 sm:order-1">
                ${dropButtonHtml}
            </div>
            <div class="flex flex-wrap gap-3 justify-center sm:justify-end items-center w-full sm:w-auto order-1 sm:order-2">
                <a href="${ytUrl}" target="_blank" class="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg font-bold transition-colors flex items-center gap-2 text-sm shadow-lg shadow-red-500/20">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/></svg>
                    Trailer
                </a>
                <a href="${hltbUrl}" target="_blank" class="bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 px-4 py-2 rounded-lg font-bold transition-colors flex items-center gap-2 text-sm">
                    <svg class="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>
                    HLTB
                </a>
                <a id="modal-wiki" href="${game.wiki}" target="_blank" class="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg font-bold transition-colors flex items-center gap-2">
                    Wikipedia
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </a>
            </div>
        </div>
    `;

    document.getElementById('detail-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('detail-modal').classList.add('hidden');
}

function createCard(game, category = 'core') {
    const isCompleted = completedGames.includes(game.id);
    const isDropped = droppedGames.includes(game.id);
    const statusClass = isCompleted ? 'completed' : (isDropped ? 'dropped' : '');
    const encodedTitle = encodeURIComponent(game.title);

    const imgUrl = game.banner || `https://placehold.co/600x350/222/eee?text=${encodedTitle}`;
    const stampHtml = isCompleted ? `<div class="passport-stamp absolute top-4 left-4 z-30 pointer-events-none">${formatDate(completionDates[game.id])}</div>` : '';
    
    const hltbUrl = `https://howlongtobeat.com/?q=${encodedTitle}`;
    const ytUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(game.title + ' Gameplay Trailer')}`;
    
    const categoryNames = { 'core': 'Core', 'bonus': 'Bonus', 'zen': 'Zen', 'time': 'Time', 'art': 'Art' };


    // Difficulty Stars
    let stars = '';
    for(let i=0; i<5; i++) {
        const color = i < game.difficulty ? 'text-yellow-500' : 'text-gaming-text/10';
        stars += `<svg class="w-2 h-2 ${color}" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>`;
    }

    return `
        <div id="card-${game.id}" class="game-card-container ${statusClass}" onclick="this.classList.toggle('flipped')">
            <div class="game-card-inner">
                <!-- FRONT FACE -->
                <div class="game-card-front bg-gaming-card border border-gaming-border flex flex-col group transition-all duration-300">
                    <div class="relative h-40 overflow-hidden shrink-0">
                        <div class="absolute inset-0 bg-gradient-to-br ${game.color} opacity-0 group-hover:opacity-25 transition-opacity duration-500 z-10"></div>
                        
                        ${stampHtml}
                        ${(isDropped || gameReviews[game.id]) ? `<div class="review-stamp stamp-${isDropped ? 'dropped' : gameReviews[game.id]}">${isDropped ? 'dropped' : gameReviews[game.id]}</div>` : ''}
                        ${isDropped ? '<div class="absolute inset-0 bg-black/40 z-20 flex items-center justify-center"><svg class="w-12 h-12 text-white/30" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5zM9 7a3 3 0 0 1 6 0v3H9V7zm3 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg></div>' : ''}
                        <img src="${imgUrl}" alt="${game.title}" class="w-full h-full object-cover shadow-inner group-hover:scale-110 transition-transform duration-700 ease-in-out">
                        <div class="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] px-2 py-1 rounded z-20 font-mono border border-white/20" style="transform: translateZ(1px)">
                            ${game.length}
                        </div>
                    </div>

                    <div class="p-4 flex flex-col flex-grow">
                        <div class="mb-2">
                            <div class="flex justify-between items-start">
                                <span class="text-[10px] font-semibold text-blue-400 uppercase tracking-wider">${game.genre}</span>
                                <div class="flex flex-col items-center">
                                    <span class="text-[8px] text-gaming-muted uppercase font-bold leading-none mb-1">Difficulty</span>
                                    <div class="flex gap-0.5">${stars}</div>
                                </div>
                            </div>
                            <h3 class="text-base font-bold text-gaming-text leading-tight mt-1 truncate">${game.title}</h3>
                            <p class="text-[10px] text-gaming-muted italic mt-1 leading-tight line-clamp-1">"${game.tagline}"</p>
                        </div>

                        <div class="mt-auto pt-4 flex items-center justify-between border-t border-gaming-border/50">
                            <div class="flex flex-col">
                                <span class="text-[9px] text-gaming-muted leading-none">System</span>
                                <div class="flex items-center gap-1.5 mt-1">
                                    ${getSystemIcon(game.system)}
                                    <span class="text-xs font-medium text-gaming-text/80">${game.system}</span>
                                </div>
                            </div>
                            <div class="flex flex-col items-center">
                                <span class="text-[10px] text-gaming-muted">Score</span>
                                <span class="text-xs font-black ${game.score >= 70 ? 'text-emerald-400 border-emerald-400/30' : (game.score >= 50 ? 'text-yellow-500 border-yellow-500/30' : 'text-red-400 border-red-400/30')} border px-1.5 rounded bg-black/20">
                                    ${game.score}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gaming-dark/50 px-4 py-3 flex items-center justify-between border-t border-gaming-border ${isDropped ? 'opacity-60' : 'cursor-pointer hover:bg-gaming-card'} transition-colors group-mark" 
                            ${!isDropped ? `onclick="toggleGame('${game.id}', event)"` : ''}>
                        <span class="text-[10px] ${isCompleted ? 'text-emerald-400 font-bold' : (isDropped ? 'text-red-400 font-bold' : 'text-gaming-muted font-medium')} uppercase tracking-wider transition-colors">
                            ${isCompleted ? 'Completed' : (isDropped ? 'Dropped (Wisdom +100)' : 'Mark as Complete')}
                        </span>
                        ${!isDropped ? `
                        <input type="checkbox" class="custom-checkbox pointer-events-none" ${isCompleted ? 'checked' : ''} aria-label="Mark ${game.title} as complete">
                        ` : `
                        <svg class="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5zM9 7a3 3 0 0 1 6 0v3H9V7zm3 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>
                        `}
                    </div>
                </div>

                <!-- BACK FACE -->
                <div class="game-card-back bg-gaming-card border-2 border-gaming-accent p-4 flex flex-col gap-3 shadow-2xl relative">
                    <div class="absolute top-4 right-4 opacity-20 scale-150">
                         ${getSystemIcon(game.system)}
                    </div>
                    
                    <div class="min-w-0">
                        <h3 class="text-lg font-black text-gaming-text leading-tight mb-1 truncate">${game.title}</h3>
                        <div class="flex gap-2">
                            <span class="text-[8px] font-black text-blue-400 uppercase tracking-widest bg-blue-900/20 px-1.5 py-0.5 rounded border border-blue-500/20">${game.genre}</span>
                            <span class="text-[8px] font-black text-gaming-muted bg-gaming-dark/50 px-1.5 py-0.5 rounded border border-gaming-border">${game.year}</span>
                        </div>
                    </div>

                    <p class="text-[11px] md:text-xs text-gaming-text/90 leading-relaxed overflow-y-auto pr-1 custom-scrollbar flex-grow mt-2">
                        ${game.desc}
                    </p>

                    <div class="grid grid-cols-2 gap-2 mt-auto pt-2">
                        <div class="bg-gaming-dark/30 p-1.5 rounded border border-gaming-border">
                            <span class="text-[7px] text-gaming-muted block uppercase font-bold">Platform</span>
                            <span class="text-[9px] text-gaming-text font-medium truncate block">${game.system}</span>
                        </div>
                        <div class="bg-gaming-dark/30 p-1.5 rounded border border-gaming-border text-right">
                            <span class="text-[7px] text-gaming-muted block uppercase font-bold">Playtime</span>
                            <span class="text-[9px] text-emerald-400 font-bold block">${game.length}</span>
                        </div>
                    </div>

                    <div class="flex flex-col gap-1.5 mt-2 pt-2 border-t border-gaming-border">
                        <div class="flex gap-1.5">
                            <a href="${ytUrl}" target="_blank" onclick="event.stopPropagation()" class="flex-1 bg-red-600 hover:bg-red-500 text-white py-1 rounded text-[9px] font-bold text-center flex items-center justify-center gap-1">
                                YT
                            </a>
                            <a href="${hltbUrl}" target="_blank" onclick="event.stopPropagation()" class="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-1 rounded text-[9px] font-bold text-center flex items-center justify-center gap-1">
                                HLTB
                            </a>
                        </div>
                        <a href="${game.wiki}" target="_blank" onclick="event.stopPropagation()" class="bg-blue-600 hover:bg-blue-500 text-white py-1 rounded text-[9px] font-bold text-center flex items-center justify-center gap-1">
                            Wikipedia
                        </a>
                        ${!isCompleted ? `
                        <button onclick="toggleDrop('${game.id}', event)" class="text-gaming-muted hover:text-red-400 text-[8px] font-black uppercase tracking-widest pt-0.5">
                            ${isDropped ? 'Revive' : 'Drop'}
                        </button>
                        ` : ''}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('core-grid').innerHTML = coreGames.map(game => createCard(game, 'core')).join('');
    document.getElementById('bonus-grid').innerHTML = bonusGames.map(game => createCard(game, 'bonus')).join('');
    document.getElementById('zen-grid').innerHTML = zenGames.map(game => createCard(game, 'zen')).join('');
    document.getElementById('time-grid').innerHTML = timeGames.map(game => createCard(game, 'time')).join('');
    document.getElementById('art-grid').innerHTML = artGames.map(game => createCard(game, 'art')).join('');

    updateProgress(true);
});
