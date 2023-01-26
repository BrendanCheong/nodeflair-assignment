/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: 'hsl(var(--light), <alpha-value>)',
        primary: 'hsl(var(--primary), <alpha-value>)',
      },
    },
  },
  plugins: [],
};
