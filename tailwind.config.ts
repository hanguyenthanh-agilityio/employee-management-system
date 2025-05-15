import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#253D90',
        secondary: '#0A50C2',
        accent: '#F7C948',
        muted: '#969696',
        darkText: '#1A1A1A',
        lightGray: '#F5F5F5',
        mediumLightGray: '#CBB4B4',
        veryLightGray: '#E0E3EC',
        Gray56: '#8F8F8F',
        error: '#EF4444',
        success: '#22C55E',
        yellow: '#FFC20E',
        cyanBlue: '#545559',
      },
      fontSize: {
        xs: ['0.75rem', '1rem'], // 12px
        sm: ['0.875rem', '1.25rem'], // 14px
        base: ['1rem', '1.5rem'], // 16px
        lg: ['1.125rem', '1.75rem'], // 18px
        xl: ['1.25rem', '1.75rem'], // 20px
        '2xl': ['1.5rem', '2rem'], // 24px
        '3xl': ['1.875rem', '2.25rem'], // 30px
        '4xl': ['2.25rem', '2.5rem'], // 36px
        '5xl': ['3rem', '1'], // 48px
        '6xl': ['3.125rem', '1'], // 50px
        '7xl': ['3.5rem', '1'], // 56px
      },
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        18: '4.5rem',
        22: '5.5rem',
      },
      borderRadius: {
        DEFAULT: '0.5rem', // 8px
        lg: '0.75rem', // 12px
        xl: '1rem', // 16px
        '2xl': '1.5rem', // 24px
      },
      boxShadow: {
        soft: '0 4px 8px rgba(0, 0, 0, 0.05)',
        form: '5px 2px 10px 3px rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [],
};
export default config;
