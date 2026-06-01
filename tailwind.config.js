/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand
        'sage':       '#22654a',
        'sage-soft':  '#f1f6f3',
        'cyan':       '#00E5FF',
        'coral':      '#FF3D00',

        // Neutrals
        'ink':        '#1a1a1a',
        'ink-soft':   '#4a4a4a',
        'ink-mute':   '#8a8a8a',
        'paper':      '#FFFFFF',
        'cream':      '#fafaf7',

        // Legacy aliases (kept temporarily so older usages don't break; new code should use semantic names above)
        'brand-overlay':   '#22654a',
        'brand-text':      '#1a1a1a', // remapped from #FFFFFF to fix invisible-text bug on light bgs
        'brand-highlight': '#00E5FF',
        'brand-warning':   '#FF3D00',
        'brand-dark':      '#1a1a1a',
        'brand-light':     '#fafaf7',
      },
      fontFamily: {
        'title': ['Lora', 'serif'],
        'body': ['Montserrat', 'sans-serif'],
        'serif': ['Lora', 'serif'],
      },
      letterSpacing: {
        'eyebrow': '0.15em',
      },
    },
  },
  plugins: [],
}
