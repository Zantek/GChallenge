# 2026 Gaming Challenge Tracker

This project is a web-based application designed to track progress through a curated list of video games for the 2026 yearly challenge. It features a highly customizable and immersive interface inspired by classic gaming consoles.

## Project Overview

- **Purpose:** Provide an interactive checklist, progress tracker, and digital diary for various gaming milestones.
- **Main Technologies:**
    - **HTML5:** Core structure and layout.
    - **Tailwind CSS:** Modern utility-first styling with custom theme variables.
    - **JavaScript:** Client-side logic for state management, procedural audio, and UI interactivity.
- **Architecture:** Single-page application (SPA) with a modular JavaScript structure, using `localStorage` for persistent save data.

## Key Features

- **Console Skins (Theme Switcher):** Multiple visual aesthetics including "The Future" (Dark Mode), "The Brick" (Retro Handheld), "The Cube" (Geometric Indigo), and "The OS" (Classic PC).
- **CRT Mode:** An authentic retro visual filter featuring scanlines, screen curvature, flicker, and chromatic aberration.
- **The Graveyard (DNF System):** A guilt-free way to drop games that aren't clicking, moving them to a separate section while awarding "Wisdom XP".
- **Passport Stamp System:** Automatically logs completion dates with unique, theme-appropriate "ink stamps" on game cards.
- **Trophy Showcase:** A sleek, interactive achievement gallery with glass pedestals and lock states for category completion.
- **Companion Buddy:** An evolving 8-bit companion that grows and reacts as you level up your gaming progress.
- **Advanced Integrations:** Quick search links for "HowLongToBeat" and YouTube gameplay trailers integrated into every game modal.
- **State Management:** Robust Import/Export system for challenge progress and completion timestamps.

## Building and Running

Since this is a static web project, no build or installation steps are required.

### Running the Project
1. Open `index.html` in any modern web browser.
2. Alternatively, use a local development server like Live Server (VS Code extension) or `npx serve .`.

### Testing
Manual verification is performed by interacting with the UI in a browser. State persistence should be checked via page refreshes and Import/Export actions.

## Development Conventions

- **Modular CSS Variables:** All themes are controlled via CSS variables defined in `:root` and `[data-theme]` attributes.
- **Component-based JS:** Features like themes, CRT mode, achievements, and the companion are managed by dedicated classes/modules.
- **Responsive Design:** Mobile-first approach with fluid transitions between handheld, tablet, and desktop layouts.
- **Audio:** Procedural 8-bit sound effects generated via the Web Audio API.

## TODOs
- [x] Update titles and dates from 2025 to 2026.
- [x] Implement Console Skins and Theme Manager.
- [x] Implement CRT Mode visual filter.
- [x] Implement The Graveyard (DNF) and Wisdom XP system.
- [x] Implement Passport Stamp completion logging.
- [x] Rework Trophy Room into Showcase Gallery.
- [x] Improve Header and Modal responsiveness.
- [ ] Customize the final game lists for the 2026 challenge.
- [ ] Add more "Secret" achievements for specific milestone combinations.