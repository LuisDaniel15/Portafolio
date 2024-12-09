/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pulse512: {
          '0%': { boxShadow: '0 0 0 0 #05bada66' },
          '70%': { boxShadow: '0 0 0 20px rgba(218, 103, 108, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(218, 103, 68, 0)' },
        },
      },
      animation: {
        pulse512: 'pulse512 1.5s infinite',
      },
      keyOpa: {
        pulse: {
          '0%': { opacity: '0' },
          '70%': { opacity: '0.5'},
          '100%': { opacity: '1' },
        },
      },
      anima: {
        pulse: 'pulse 1.5s both',
      }
    },
  },
  plugins: [],
}

