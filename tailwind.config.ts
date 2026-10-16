import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      typography: ({ theme }: { theme: (path: string) => string }) => ({
        invert: {
          css: {
            color: theme('colors.white'),
            a: { color: theme('colors.ycs-pink'), textDecoration: 'underline' },
            strong: { color: theme('colors.white') },
            h1: { color: theme('colors.white') },
            h2: { color: theme('colors.white') },
            h3: { color: theme('colors.white') },
            h4: { color: theme('colors.white') },
            code: {
              backgroundColor: theme('colors.zinc.800'),
              color: theme('colors.ycs-pink'),
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              fontSize: '0.9em',
            },
            pre: {
              backgroundColor: theme('colors.zinc.900'),
              color: theme('colors.ycs-pink'),
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
        // 2026 redesign palette
        ink: '#0A0A0A',
        panel: '#151515',
        'panel-deep': '#111111',
        paper: '#F3F1EC',
        cream: '#F5F3EF',
        muted: '#A9A398',
        soft: '#CFCAC1',
        accent: '#FFB090',
        'accent-ink': '#1A0E08',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'ui-monospace', 'monospace'],
      },
      // Type runs about 7% under Tailwind's defaults for a tighter, crisper feel.
      // Only text shrinks; spacing still uses the 16px rem.
      fontSize: {
        big: '200px',
        sm: ['13px', '19px'],
        base: ['15px', '22px'],
        lg: ['17px', '26px'],
        xl: ['18.5px', '26px'],
        '2xl': ['22px', '30px'],
        '3xl': ['28px', '34px'],
        '4xl': ['33px', '37px'],
        '5xl': ['44px', '1'],
        '6xl': ['56px', '1'],
        '7xl': ['66px', '1'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
