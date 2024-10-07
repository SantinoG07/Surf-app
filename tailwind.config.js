// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'], // Ajusta esto según la estructura de tu proyecto
  theme: {
    extend: {
      colors: {
        primary: '#1da1f2',
        secondary: '#ffad1f',
      },
    },
  },
  plugins: [],
}
