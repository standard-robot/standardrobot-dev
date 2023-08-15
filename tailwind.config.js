/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        glitch: 'glitch 2s infinite',
      },
      colors: {
        bsod: '#000A5F',
        border: '#AAAAAA',
      },
      fontFamily: {
        firacode: ['Fira_Code', 'sans-serif'],
        lucida: ['Lucida_Console'],
        w95fa: ['w95fa', 'sans-serif'],
      },
    },
  },

  variants: [],
  plugins: [],
};