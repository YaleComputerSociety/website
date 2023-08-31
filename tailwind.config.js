/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
        xl : '0 16px 32px var(--tw-shadow-color)'
      },
      colors: {
        "ycs-black": "#1F232C",
        "ycs-pink": "#FF555B",
        "ycs-faded-pink" : "F26891",
        "ycs-blue" : "#0071BC",
        "ycs-green" : "#39A393",
      },
      fontSize: {
        'big': '200px',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
};