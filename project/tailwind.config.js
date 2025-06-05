/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        qult: {
          pink: '#FF1B8D',
          blue: '#00A7E1',
          green: '#4ADE80',
          orange: '#FF5733',
          teal: '#2DD4BF'
        },
        primary: {
          50: '#E6F0FF',
          100: '#CCE0FF',
          200: '#99C2FF',
          300: '#66A3FF',
          400: '#3385FF',
          500: '#0066FF',
          600: '#0052CC',
          700: '#003D99',
          800: '#002966',
          900: '#001433',
        },
        secondary: {
          50: '#FFF8E6',
          100: '#FFF1CC',
          200: '#FFE299',
          300: '#FFD466',
          400: '#FFC633',
          500: '#FFB800',
          600: '#CC9300',
          700: '#996E00',
          800: '#664A00',
          900: '#332500',
        },
        tertiary: {
          50: '#F5F9FF',
          100: '#EBF3FF',
          200: '#D6E7FF',
          300: '#C2DBFF',
          400: '#ADCFFF',
          500: '#99C3FF',
          600: '#7A9CCC',
          700: '#5C7599',
          800: '#3D4E66',
          900: '#1F2733',
        },
        success: {
          50: '#E6FFF0',
          100: '#CCFFE0',
          200: '#99FFC2',
          300: '#66FFA3',
          400: '#33FF85',
          500: '#00FF66',
          600: '#00CC52',
          700: '#00993D',
          800: '#006629',
          900: '#003314',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-qult-1': 'linear-gradient(135deg, #FF1B8D 0%, #00A7E1 100%)',
        'gradient-qult-2': 'linear-gradient(45deg, #4ADE80 0%, #2DD4BF 50%, #00A7E1 100%)',
        'gradient-qult-3': 'linear-gradient(to right, #FF1B8D 0%, #FF5733 100%)',
        'gradient-qult-4': 'linear-gradient(to bottom right, #00A7E1 0%, #2DD4BF 50%, #4ADE80 100%)',
        'gradient-primary': 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
        'gradient-dark': 'linear-gradient(135deg, #001433 0%, #332500 100%)',
        'texture-dots': 'radial-gradient(circle at center, #FF1B8D 1px, transparent 1px)',
        'texture-grid': 'linear-gradient(to right, rgba(0, 167, 225, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 167, 225, 0.1) 1px, transparent 1px)',
        'texture-noise': 'url("/textures/noise.png")',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'glow-pink': '0 0 20px rgba(255, 27, 141, 0.15)',
        'glow-blue': '0 0 20px rgba(0, 167, 225, 0.15)',
        'glow-green': '0 0 20px rgba(74, 222, 128, 0.15)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out forwards',
        slideIn: 'slideIn 0.6s ease-out forwards',
        float: 'float 3s ease-in-out infinite'
      },
      backgroundSize: {
        'dots-sm': '10px 10px',
        'dots-md': '20px 20px',
        'grid-sm': '20px 20px',
        'grid-md': '40px 40px',
      }
    },
  },
  plugins: [],
};