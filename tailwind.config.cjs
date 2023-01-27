/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: 'hsl(var(--light), <alpha-value>)',
        primary: 'hsl(var(--primary), <alpha-value>)',
        'node-gray': 'hsl(var(--gray), <alpha-value>)',
        'dark-gray': 'hsl(var(--gray-dark), <alpha-value>)',
        'light-gray': 'hsl(var(--light-gray), <alpha-value>)',
        'node-white': 'hsl(var(--white), <alpha-value>)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
