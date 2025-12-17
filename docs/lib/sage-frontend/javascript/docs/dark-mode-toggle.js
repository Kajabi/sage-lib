/**
 * Dark Mode Toggle
 * Handles switching between light and dark themes
 */

const THEME_KEY = 'sage-theme';
const THEME_DARK = 'dark';
const THEME_LIGHT = 'light';

class DarkModeToggle {
  constructor() {
    this.toggle = document.querySelector('[data-js-dark-mode-toggle]');
    if (!this.toggle) return;

    this.init();
  }

  init() {
    // Set initial theme from localStorage or system preference
    const savedTheme = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? THEME_DARK : THEME_LIGHT);

    this.setTheme(initialTheme, false);

    // Listen for toggle clicks
    this.toggle.addEventListener('click', () => this.handleToggle());

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(THEME_KEY)) {
        this.setTheme(e.matches ? THEME_DARK : THEME_LIGHT, false);
      }
    });
  }

  handleToggle() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
    this.setTheme(newTheme, true);
  }

  setTheme(theme, save = true) {
    // Update data-theme attribute on <html>
    document.documentElement.setAttribute('data-theme', theme);

    // Update toggle button aria-label and icon
    const isDark = theme === THEME_DARK;
    this.toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    this.toggle.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');

    // Update icon (pds-icon element)
    const icon = this.toggle.querySelector('pds-icon');
    if (icon) {
      // When dark mode: use flash-filled, when light mode: use flash
      icon.setAttribute('name', isDark ? 'flash-filled' : 'flash');
    }

    // Save to localStorage if requested
    if (save) {
      localStorage.setItem(THEME_KEY, theme);
    }
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new DarkModeToggle());
} else {
  new DarkModeToggle();
}

export default DarkModeToggle;

