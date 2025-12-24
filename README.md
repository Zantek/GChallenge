# 2026 Gaming Challenge Tracker

A highly immersive, responsive web-based application designed to track progress through a curated list of video games for the 2026 yearly challenge. This project transforms a simple checklist into a tactile "Digital Game Shelf" experience, complete with virtual hardware, evolving companions, and retro aesthetics.

## 🎮 Core Features

- **3D Box Flipper:** Every game is presented as a physical box art that flips in 3D to reveal detailed stats, Metacritic scores, and descriptions.
- **Universal Retro Console:** A virtual top-loading hardware interface in the corner. Clicking "Play" on a game visually inserts a dynamic cartridge into the slot, switching the console from Standby (Red) to Active (Green).
- **Tactile Review System:** "Seal the Record" by slamming theme-specific rubber stamps (**Masterpiece**, **Solid**, **Meh**) onto the box art, accompanied by a satisfying "thud" and theme-synced confetti.
- **Gamer Alignment Chart:** A 2D RPG-style coordinate grid that tracks your "Gaming Personality." Your build drifts between **Body vs. Mind** and **Action vs. Logic** based on the genres you complete.
- **Reactive Companion (buddy.exe):** An 8-bit desktop pet that evolves from an egg to a legend. It features a "Live Feed" reaction system, celebrating your victories and mourning your dropped games in real-time.
- **Retro Boot Sequence:** A fake BIOS startup animation with technical diagnostic text and 8-bit sound effects that sets the mood every time you "Power On" the system.
- **Console Skins:** Five distinct visual identities:
    - **The Future:** Neon holographic aesthetics with glowing gradients.
    - **The Brick:** Authentic Game Boy style with a dot-matrix LCD grid and "pea-soup" green palette.
    - **The Cube:** Vibrant geometric design with heavy shadows and bold colors.
    - **The OS:** A meticulous reconstruction of a classic Windows 95 desktop environment.
    - **Legacy:** A secret, high-contrast monochrome "terminal" mode unlocked via the Konami Code.
- **CRT Mode:** A toggleable visual filter adding scanlines, screen curvature, flicker, and chromatic aberration.
- **State Management:** Robust persistence using `localStorage` with a Base64-encoded **Full System Save** (Import/Export) that backs up your progress, reviews, settings, and console state.

## 🛠️ Technical Overview

- **Architecture:** Vanilla JavaScript SPA with a modular CSS structure.
- **Audio:** Custom procedural 8-bit sound engine using the Web Audio API.
- **Visuals:** Pure CSS shapes for hardware and UI; Canvas API for particle physics and share-card generation.
- **Data:** Game metadata is decoupled and also available as a `games.csv` export.

## 🚀 Building and Running

Since this is a static web project, no build or installation steps are required.

1. Open `index.html` in any modern web browser.
2. For the best experience, use a local server (e.g., `npx serve .` or VS Code Live Server).

## 📝 Development TODOs
- [x] Implement 5 unique Console Skins and Theme Manager.
- [x] Implement CRT Mode and "System Glitch" effects.
- [x] Implement 3D Box Flipper interaction.
- [x] Implement Tactile Review Stamp system with themed variants.
- [x] Implement "Universal Retro Console" hardware and dynamic cartridges.
- [x] Implement Gamer Alignment Chart (RPG Stats).
- [x] Implement Live Feed Reactions and room decorations for buddy.exe.
- [x] Implement Retro BIOS Boot Sequence.
- [x] Modularize CSS into themes, cards, ui, modals, and effects.
- [ ] Customize the final game lists for the actual 2026 challenge.
- [ ] **Alignment Personality:** Make buddy.exe dialogue change based on current alignment quadrant.
- [ ] **Year-End Recap:** Create a generator that compiles all stamps into a single "Collection Mosaic" image.
- [ ] **Legacy Legacy:** Add a hidden "Legacy" sprite for the companion when in monochrome mode.