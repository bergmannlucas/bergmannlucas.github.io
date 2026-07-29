/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './layouts/**/*.html',
    './content/**/*.{md,html}',
    './assets/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#fafafa',
          dark: '#0a0a0a',
        },
        surface: {
          DEFAULT: '#ffffff',
          dark: '#171717',
        },
        text: {
          DEFAULT: '#171717',
          dark: '#e5e5e5',
        },
        muted: {
          DEFAULT: '#525252',
          dark: '#a3a3a3',
        },
        border: {
          DEFAULT: '#e5e5e5',
          dark: '#262626',
        },
        accent: {
          DEFAULT: '#2563eb',
          dark: '#3b82f6',
          soft: {
            DEFAULT: '#eff6ff',
            dark: '#172554',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
