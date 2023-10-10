/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:'#edb937',
        secondary: 'white',
        accent: '#ffffff',
        background: '#1d140c'
      },
      fontFamily: {
        mono: ['var(--font-SF-Mono)']
      },
      dropShadow: {
        primaryGlow: "0 2px 12px #b0712d",
        whiteGlow: "0 2px 12px #d1d1d1",
      }
    },
  },
  plugins: [],
}
