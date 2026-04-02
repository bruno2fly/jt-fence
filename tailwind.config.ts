import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7f3',
          100: '#deeee6',
          200: '#bdddd2',
          300: '#8cc1b3',
          400: '#5aa594',
          500: '#3a8975',
          600: '#2d6f5d',
          700: '#235749',
          800: '#1d453c',
          900: '#1B4332',
        },
        secondary: {
          50: '#f9f9f9',
          100: '#f3f3f3',
          200: '#e7e7e7',
          300: '#d1d1d1',
          400: '#ababab',
          500: '#858585',
          600: '#5e5e5e',
          700: '#454545',
          800: '#3a3a3a',
          900: '#2D3436',
        },
        accent: {
          50: '#fffaf0',
          100: '#fef4e0',
          200: '#fce8c1',
          300: '#f9d9a1',
          400: '#f5c180',
          500: '#f0a960',
          600: '#e59140',
          700: '#d67a2a',
          800: '#c26a1a',
          900: '#C9A84C',
        },
        cream: {
          50: '#fffbf9',
          100: '#faf8f5',
          200: '#f5f2ed',
          300: '#f0ebe4',
        },
        stone: {
          50: '#fafaf8',
          100: '#f5f3f0',
          200: '#f0ebe6',
          300: '#ebe6df',
          400: '#e8e4df',
        },
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--color-text)',
            a: {
              color: 'var(--color-primary)',
              '&:hover': {
                color: 'var(--color-primary-dark)',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
}

export default config
