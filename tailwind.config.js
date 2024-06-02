/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,html}", // Ajoutez ici toutes les extensions de fichiers pertinents
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        }
      },
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  plugins: [],
}

