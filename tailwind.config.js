import tailwindScrollbar from 'tailwind-scrollbar'
/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        test: '#F2F4F7',
        test2: '#E2E7F0',
        // electric blue
        primary: {
          // 500 is default
          DEFAULT: '#0554F2',
          50: '#E6EEFE',
          100: '#CDDFFC',
          200: '#B4CFFB',
          300: '#699FF7',
          400: '#377FF5',
          500: '#0554F2',
          600: '#044CC2',
          700: '#033991',
          800: '#022661',
          900: '#011330',
        },
        // lime green
        secondary: {
          // 500 is default
          DEFAULT: '#8df244',
          50: '#E8FCDA',
          100: '#E8FCDA',
          200: '#D1FAB4',
          300: '#BBF78F',
          400: '#A4F569',
          500: '#8df244',
          600: '#71C236',
          700: '#559129',
          800: '#38611B',
          900: '#1C300E',
        },
        // dark blue
        tertiary: {
          // 500 is default
          DEFAULT: '#002049',
          50: 'E6EEFE',
          100: '#E6E9ED',
          200: '#B3BCC8',
          300: '#8090A4',
          400: '#4D6380',
          500: '#002049',
          600: '#001A3A',
          700: '#00132C',
          800: '#000D1D',
          900: '#00060F',
        },
        error: {
          // 500 is default
          DEFAULT: '#f44336',
          100: '#FFCDD2',
          200: '#EF9A9A',
          300: '#E57373',
          400: '#EF5350',
          500: '#f44336',
          600: '#E53935',
          700: '#D32F2F',
          800: '#C62828',
          900: '#B71C1C',
        },
        alert: {
          // 500 is default
          DEFAULT: '#FFE55D',
          100: '#FFF7CE',
          200: '#FFF2AE',
          300: '#ffef9e',
          400: '#ffea7d',
          500: '#FFE55D',
          600: '#ccb74a',
          700: '#998938',
          800: '#665c25',
          900: '#332e13',
        },
        success: {
          // 500 is default
          DEFAULT: '#85d254',
          100: '#DAF2CC',
          200: '#C2E9AA',
          300: '#B6E498',
          400: '#9DDB76',
          500: '#85d254',
          600: '#6aa843',
          700: '#507e32',
          800: '#355422',
          900: '#1B2A11',
        },
        info: {
          // 500 is default
          DEFAULT: '#2B93D5',
          100: '#D5E9F7',
          200: '#AAD4EE',
          300: '#80BEE6',
          400: '#55A9DD',
          500: '#2B93D5',
          600: '#2276AA',
          700: '#1A5880',
          800: '#113B55',
          900: '#091D2B',
        },
        neutral: {
          // 900 is default
          DEFAULT: '#252525',
          0: '#FFFFFF',
          50: '#F3F3F3',
          100: '#E7E7E7',
          200: '#CFCFCF',
          300: '#B6B6B6',
          400: '#9E9E9E',
          500: '#868686',
          600: '#6E6E6E',
          700: '#565656',
          800: '#3D3D3D',
          900: '#252525',
          1000: '#ODODOD',
        },
      },
      fontSize: {
        xl: '20px',
        lg: '18px',
        md: '16px',
        sm: '14px',
        xs: '12px',
        xss: '10px'
      },
      boxShadow: {
        xs: '0px 1px 2px 0px rgba(16, 24, 56, 0.05)',
        sm: '0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)',
        md: '0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.10)',
        lg: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
        xl: '0px 24px 48px -12px rgba(16, 24, 40, 0.18)',
        '2xl': '0px 32px 64px -12px rgba(16, 24, 40, 0.14)'
      },
      fontFamily: {
        body: ['Work Sans'],
        web: ['Vidaloka']
      },
      textColor: {
        // true main-text-color
        body: '#252525',
        // body: '#f44336',
      },
    },
  },
  plugins: [tailwindScrollbar({ preferredStrategy: 'pseudoelements' })],
}
