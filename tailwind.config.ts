import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
        xl: '0 16px 32px var(--tw-shadow-color)',
      },
      colors: {
        'ycs-black': '#141414',
        'ycs-pink': '#FFB090',
        'ycs-faded-pink': '',
        'ycs-blue': '#0071BC',
        'ycs-green': '#39A393',
        'ycs-security-red': '#890c0c',
        'ycs-gray': '#323844',
      },
      fontSize: {
        big: '200px',
      },
    },
  },
  plugins: [],
};
export default config;
