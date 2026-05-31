/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-overlay': '#22654a',
        'brand-text': '#FFFFFF',
        'brand-highlight': '#00E5FF',
        'brand-warning': '#FF3D00',
        'brand-dark': '#1a1a1a',
        'brand-light': '#f8f8f8',
      },
      fontFamily: {
        'title': ['Lora', 'serif'],
        'body': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
