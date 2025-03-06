/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        'star': 'star 4s ease-out infinite',
        'fade-in-out': 'fade-in-out 4s ease-in-out infinite',
        'bounce': 'bounce 2s infinite',
      },
      keyframes: {
        star: {
          '0%': { transform: 'scale(0)', opacity: 1 },
          '100%': {
            transform: 'translate(var(--x), var(--y)) scale(1)',
            opacity: 0,
          },
        },
        'fade-in-out': {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
