import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html',
  './src/*.{html.ts}',
  './src/components/*.{html.ts}',
  ],
  theme: {
    screens: {
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    colors: {
      'primary': 'var(--color-primary)',
      'secondary': 'var(--color-secondary)',
      'success': 'var(--color-success)',
      'warning': 'var(--color-warning)',
      'danger': 'var(--color-danger)',
      'info': 'var(--color-info)',
      'dark': 'var(--color-dark)',
      'light': 'var(--color-light)',
      'gray': 'var(--color-gray)',
      'light-primary': 'var(--color-light-primary)',
      'light-secondary': 'var(--color-light-secondary)',
      'light-success': 'var(--color-light-success)',
      'light-warning': 'var(--color-light-warning)',
      'light-danger': 'var(--color-light-danger)',
      'light-info': 'var(--color-light-info)',
      'light-dark': 'var(--color-light-dark)',
      'light-light': 'var(--color-light-light)',
      'light-gray': 'var(--color-light-gray)',
      'primary-hover': 'var(--color-primary-hover)',
      'secondary-hover': 'var(--color-secondary-hover)',
      'success-hover': 'var(--color-success-hover)',
      'warning-hover': 'var(--color-warning-hover)',
      'danger-hover': 'var(--color-danger-hover)',
      'info-hover': 'var(--color-info-hover)',
      'dark-hover': 'var(--color-dark-hover)',
      'light-hover': 'var(--color-light-hover)',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
       
    },
  },
  plugins: [],
} satisfies Config

