module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors:{
        'app-dark': '#232230',
        'app-purple-800': '#1e1b2e',
        'app-purple-500': '#664efe',
        'app-purple-100': '#9696dd',
        'app-red-500': '#f04040',
        'app-red-700': '#cd1717'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
