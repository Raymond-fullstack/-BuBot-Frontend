/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: '#F9F9F9',
        'on-surface': '#1A1C1C',
        primary: '#705D00',
        'primary-container': '#FFD700',
        'on-primary-fixed': '#221B00',
        secondary: '#5E5E5E',
        'surface-container-low': '#F3F3F4',
        'surface-container-lowest': '#FFFFFF',
        'surface-container-highest': '#E2E2E2',
        'outline-variant': '#B3B3B3',
        tertiary: '#1B6D24',
        'primary-fixed-dim': '#E9C400',
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      spacing: {
        16: '4rem',
        20: '5rem',
      },
      borderRadius: {
        xl: '1.5rem',
        sm: '0.25rem',
      },
    },
  },
  plugins: [],
}