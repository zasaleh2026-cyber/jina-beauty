module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#D4A574', light: '#E8C9A0', dark: '#B8895A' },
        secondary: '#8B6F47',
        cream: '#FAF7F2',
        beige: '#E8D5C4',
        softpink: '#F5E6E0',
        darkbrown: '#2C1810'
      }
    }
  },
  plugins: []
}
