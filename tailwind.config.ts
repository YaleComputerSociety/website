import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      typography: ({ theme }: { theme: (path: string) => string }) => ({
        invert: {
          css: {
            color: theme('colors.white'),
            a: { color: theme('colors.ycs-old-pink'), textDecoration: 'underline' },
            strong: { color: theme('colors.white') },
            h1: { color: theme('colors.white') },
            h2: { color: theme('colors.white') },
            h3: { color: theme('colors.white') },
            h4: { color: theme('colors.white') },
            code: {
              backgroundColor: theme('colors.zinc.800'),
              color: theme('colors.ycs-old-pink'),
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              fontSize: '0.9em',
            },
            pre: {
              backgroundColor: theme('colors.zinc.900'),
              color: theme('colors.ycs-old-pink'),
              padding: '1rem',
              borderRadius: '0.5rem',
              fontSize: '0.9rem',
            },
            blockquote: {
              borderLeftColor: theme('colors.zinc.600'),
              color: theme('colors.white'),
              fontStyle: 'normal',
            },
            'ul > li::marker': {
              color: theme('colors.zinc.400'),
            },
            hr: { borderColor: theme('colors.zinc.700') },
          },
        },
      }),
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
        'ycs-old-pink': '#F45A5A', // strong logo pink
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
  plugins: [require('@tailwindcss/typography')],
};
export default config;
