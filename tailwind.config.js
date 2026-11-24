/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kanit', 'sans-serif'],
        script: ['"Caveat Brush"', 'cursive'],
        display: ['Anton', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: { ink: '#0C0C0C', ice: '#D7E2EA' },
    },
  },
  plugins: [],
}
