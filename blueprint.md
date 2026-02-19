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

## Current Plan

1.  **Bug Fix:** Resolved the issue where numbers were not appearing by moving the `LottoBall` rendering logic to the `connectedCallback` lifecycle method.
2.  **Theme Implementation:** Added a theme toggle feature with CSS variables and JavaScript logic for persistent user preference.
3.  **UI Enhancement:** Improved the overall look with deeper shadows, refined spacing, and better mobile responsiveness.
4.  **Deployment:** Pushing the updated codebase to the GitHub repository for deployment.
