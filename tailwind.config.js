/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#1a4d40',
        'brand-gold': '#D4A574',
        'brand-sage': '#2a7a6f',
        'brand-coral': '#D85D4F',
        'brand-cream': '#F5F1ED',
      },
    },
  },
  plugins: [],
}
