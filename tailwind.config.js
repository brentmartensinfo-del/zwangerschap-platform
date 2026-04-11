/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#fbf8f6',
        foreground: '#2b2b2b',
        border: 'rgba(0,0,0,0.08)',
        primary: {
          DEFAULT: '#7aa67a',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#f6ede8',
          foreground: '#6b4f4a',
        },
        muted: {
          DEFAULT: '#f1efef',
          foreground: '#8b8b8b',
        },
        card: {
          DEFAULT: '#ffffff',
          foreground: '#2b2b2b',
        },
        accent: {
          DEFAULT: '#e8c8d0',
          foreground: '#60343e',
        },
      },
      borderRadius: {
        sm: '6px',
        md: '8px',
        lg: '12px',
        xl: '20px',
        '2xl': '28px',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        // Hero gradient overlay: strong warm wash on left, fades to transparent right
        'hero-overlay':
          'linear-gradient(90deg, rgba(251,248,246,0.94) 0%, rgba(251,248,246,0.88) 34%, rgba(43,43,43,0.18) 100%)',
      },
      backgroundColor: {
        // Semi-transparent whites used for glass surfaces
        'glass-search': 'rgba(255,255,255,0.88)',
        'glass-card':   'rgba(255,255,255,0.82)',
      },
      textColor: {
        'body-muted': 'rgba(43,43,43,0.76)',
        'trust-muted': 'rgba(43,43,43,0.72)',
      },
      backdropBlur: {
        // Named alias so components stay readable
        glass: '6px',
      },
      padding: {
        // Shorthand used on stat cards: 18px top/bottom, 20px left/right
        'card-stat': '18px 20px',
      },
    },
  },
  plugins: [],
};