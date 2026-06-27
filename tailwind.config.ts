import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'field-paper': '#121a10',
        'field-paper-warm': '#1a2414',
        'moss': '#6b9e6a',
        'moss-dark': '#558556',
        'moss-light': '#1e2c18',
        'terracotta': '#d4916e',
        'terracotta-dark': '#bd7d5c',
        'terracotta-light': '#2a1e18',
        'bark': '#d4c8b8',
        'bark-light': '#a89880',
        'stone': '#a09488',
        'clay': '#3d362e',
        'ember': '#e07b4c',
        'sky-muted': '#5a6e62',
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      },
      backgroundImage: {
        'paper-texture':
          "url(\"data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E\")",
        'hand-drawn-line':
          "url(\"data:image/svg+xml,%3Csvg width='100%25' height='3' viewBox='0 0 1200 3' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'%3E%3Cpath d='M0,1.5 Q100,2.8 200,1.2 T400,1.8 T600,1.3 T800,1.7 T1000,1.1 T1200,1.5' stroke='%236b9e6a' stroke-width='1.2' fill='none' opacity='0.5' stroke-linecap='round'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        'leaf-sway': {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'leaf-sway': 'leaf-sway 6s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s ease-out forwards',
      },
      borderRadius: {
        'pill': '999px',
        'journal': '2px',
      },
      boxShadow: {
        'field': '0 1px 3px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.25)',
        'field-hover': '0 2px 6px rgba(0,0,0,0.5), 0 8px 20px rgba(0,0,0,0.35)',
        'inner-field': 'inset 0 1px 3px rgba(0,0,0,0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
