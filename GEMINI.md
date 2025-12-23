# 2026 Gaming Challenge Tracker

This project is a web-based application designed to track progress through a curated list of video games for a yearly challenge. Although titled "2025 Gaming Challenge" in the code, it is located in the `2026_Challenge` directory, suggesting it's being adapted or used for the 2026 challenge.

## Project Overview

- **Purpose:** Provide an interactive checklist and progress tracker for various gaming milestones.
- **Main Technologies:**
    - **HTML5:** Core structure.
    - **Tailwind CSS:** Styling via CDN.
    - **JavaScript:** Client-side logic for state management and UI interactivity.
- **Architecture:** Single-page application (SPA) that uses `localStorage` for data persistence.

## Key Features

- **Categorized Game Lists:** Core Challenge, Bonus, Zen Garden, Time Warps, and Art House.
- **Progress Tracking:** Level-based XP system and completion bars.
- **Trophy Room:** Visual milestones for completing specific categories.
- **Game Details:** Modal popups with Wikipedia links and metadata for each game.

## Building and Running

Since this is a static web project, no build or installation steps are required.

### Running the Project
1. Open `index.html` in any modern web browser.
2. Alternatively, use a local development server like Live Server (VS Code extension) or `npx serve .`.

### Testing
There are no automated tests. Verification is performed manually by interacting with the UI in a browser.

## Development Conventions

- **Single File Structure:** The entire application (HTML, CSS, JS) is contained within `index.html`.
- **Styling:** Uses Tailwind CSS with a custom theme configuration for gaming-specific colors and animations.
- **State Management:** Uses a simple `completedGames` array stored in `localStorage`.
- **Interactivity:** Uses vanilla JavaScript for DOM manipulation and event handling.
- **Placeholders:** Uses `placehold.co` for game card images.

## TODOs
- [x] Update titles and dates from 2025 to 2026.
- [ ] Customize the game lists for the 2026 challenge.
