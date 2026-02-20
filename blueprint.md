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
    *   **Partnership Form:** A sleek, AJAX-powered contact form with real-time feedback and modern styling.
*   **Web Components:** The `<lotto-ball>` element encapsulates its own styling and logic using Shadow DOM, ensuring consistent rendering.
*   **Animations:** Smooth transitions for theme switching and staggered animations for newly generated numbers.
*   **Multi-set Generation:** Generates 5 sets of numbers at once for better user experience.
*   **Bonus Number:** Each set includes a distinct bonus number, following official lottery rules.
*   **Disqus Comments:** Integrated community discussion at the bottom of the page with dark/light mode compatibility.
*   **Google AdSense:** Integrated for monetization with Auto Ads and verified via `ads.txt`.

## Current Plan

1.  **Enhance Partnership Inquiry Form:** Improve the existing Formspree-powered contact form with AJAX submission and modern UI feedback.
2.  **HTML Structure:** Update `index.html` with a clearer form structure and status message containers.
3.  **Styling:** Refine `style.css` to add a "lifted" card effect for the form and better input focus states.
4.  **JavaScript Integration:** Implement AJAX submission in `main.js` to prevent page reloads and show success/error messages.
5.  **Deployment:** Configured Firebase Hosting (`firebase.json`). Pushed to GitHub for Cloudflare Pages deployment.
6.  **Disqus Integration:** Added Disqus comment thread section and initialization script.
7.  **Google AdSense Integration:** Added the AdSense script to `index.html` and created `ads.txt` for site verification and monetization.
