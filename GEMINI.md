# 2026 Gaming Challenge Tracker

This project is a highly immersive, responsive web application designed to track progress through a curated list of video games for the 2026 yearly challenge. It features a tactile "Digital Game Shelf" aesthetic inspired by classic gaming consoles and physical media.

## Project Overview

- **Purpose:** Provide an interactive checklist, progress tracker, and digital diary for various gaming milestones.
- **Main Technologies:**
    - **HTML5:** Core structure and layout.
    - **Tailwind CSS:** Modern utility-first styling with custom theme variables.
    - **JavaScript:** Client-side logic for state management, procedural audio, particle physics, and UI interactivity.
    - **Canvas API:** Used for the Confetti Cannon and Share Card generation.
- **Architecture:** Single-page application (SPA) with a modular JavaScript structure, using `localStorage` for persistent save data.

## Key Features

- **3D Box Flipper:** Every game is presented as a physical box that flips in 3D to reveal detailed stats, Metacritic scores, and descriptions.
- **Console Skins (Theme Switcher):** Multiple visual aesthetics including "The Future" (Holographic), "The Brick" (Retro Handheld), "The Cube" (Geometric Indigo), and "The OS" (Classic PC).
- **CRT Mode:** An authentic retro visual filter featuring scanlines, screen curvature, flicker, and chromatic aberration.
- **Tactile Review System:** A "Seal the Record" mechanic where players slam theme-specific rubber stamps (Masterpiece, Solid, Meh) onto the box art with a satisfying "thud" sound.
- **Confetti Cannon:** Explosive theme-synced particle bursts (pixels, triangles, or circles) triggered upon completing milestones.
- **Gamer Alignment Chart:** A 2D RPG-style coordinate grid that maps completed games to archetypes like "The Cosmic Sage" or "The Apex Predator" based on genre balance.
- **Reactive Companion (buddy.exe):** An evolving 8-bit buddy that grows from an egg to a legend and reacts in real-time to your review scores and drops.
- **The Graveyard (DNF System):** A guilt-free way to drop games, awarding "Wisdom XP" and a red "Dropped" stamp.
- **State Management:** Robust Import/Export system for challenge progress, reviews, and timestamps using Base64 strings.

## Building and Running

Since this is a static web project, no build or installation steps are required.

### Running the Project
1. Open `index.html` in any modern web browser.
2. Alternatively, use a local development server like Live Server (VS Code extension) or `npx serve .`.

## Development Conventions

- **Theme Variable Injection:** Themes are controlled via CSS variables and `data-theme` attributes, synced across JS modules.
- **Particle Engine:** Custom lightweight canvas engine for visual "juice" without external dependencies.
- **Procedural Audio:** 8-bit sound effects generated via the Web Audio API.

## TODOs
- [x] Update titles and dates from 2025 to 2026.
- [x] Implement Console Skins and Theme Manager.
- [x] Implement CRT Mode visual filter.
- [x] Implement 3D Box Flipper card interaction.
- [x] Implement Tactile Review Stamp system.
- [x] Implement Confetti Cannon particle system.
- [x] Implement Gamer Alignment Chart (RPG Stats).
- [x] Implement Live Feed Reaction for buddy.exe.
- [x] Implement The Graveyard (DNF) and Wisdom XP system.
- [x] Rework Trophy Room into Showcase Gallery.
- [ ] Customize the final game lists for the actual 2026 challenge.
- [ ] **Alignment Personality:** Make buddy.exe dialogue change based on current alignment quadrant.
- [x] **Virtual Room Decorations:** Add level-based room unlocks (Plant, Console, Poster) with a toggle to hide/show them.
- [ ] **Year-End Recap:** Create a generator that compiles all stamps into a single "Collection Mosaic" image.
- [x] **Legacy Mode:** Add a secret "Legacy" skin (Monochrome high-contrast).
- [x] **Konami Code:** Add secret reactivity/easter egg for the companion.
