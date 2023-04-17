/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    extend: {
      screens: {
        sm: '320px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      },
      colors: {
        'red' : '#D4354D',
        'green' : '#249451',
        'gray' : '#909090',
        'black' : '#333333',
      }
    },
  },
  plugins: [],
}