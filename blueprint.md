# Lotto Number Generator

## Overview

This is a visually appealing and interactive web application for generating random lottery numbers. It features a modern design, responsive layout, and dark/light mode support.

## Style, Design, and Features

*   **Layout:** Centered card interface with a modern, clean aesthetic.
*   **Color Palette:** Supports both Light and Dark themes. Light mode uses soft whites and vibrant blues, while Dark mode uses deep grays and high-contrast accents.
*   **Typography:** Bold, modern sans-serif typography with strong hierarchy.
*   **Interactivity:**
    *   **Generate Button:** Features a gradient background and a "pop" animation on hover.
    *   **Theme Toggle:** A floating button to switch between dark and light modes, with persistent storage in `localStorage`.
    *   **Lotto Balls:** Animated appearance with random vibrant colors and hover effects.
*   **Web Components:** The `<lotto-ball>` element encapsulates its own styling and logic using Shadow DOM, ensuring consistent rendering.
*   **Animations:** Smooth transitions for theme switching and staggered animations for newly generated numbers.
*   **Multi-set Generation:** Generates 5 sets of numbers at once for better user experience.
*   **Bonus Number:** Each set includes a distinct bonus number, following official lottery rules.

## Current Plan

1.  **Bonus Number & Multi-set Generation:** Update the generation logic in `main.js` to produce 5 sets of 6+1 numbers.
2.  **UI Layout Update:** Modify `index.html` and `style.css` to display the sets in a structured row-based layout.
3.  **Bonus Number Styling:** Add a visual indicator for the bonus number (e.g., a "+" sign and specific styling).
4.  **Git & Deployment:** Commit changes to the repository and ensure the latest version is deployed.
