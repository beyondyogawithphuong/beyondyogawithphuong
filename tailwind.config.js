/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#3D6B5E',
        'brand-text': '#1C1C1A',
        'brand-light': '#FAFAF7',
        'brand-accent': '#3D6B5E',
        'brand-dark': '#1C1C1A',
      },
      fontFamily: {
        'title': ['Lora', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'sm': '4px',
      },
    },
  },
  plugins: [],
}
