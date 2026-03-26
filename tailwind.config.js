export default {
  content: [
    "./index.html",
    "./pyqs.html",
    "./ai-solver.html",
    "./branches.html",
    "./about.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ninja-black': '#0a0a0a',
        'ninja-dark': '#1a1a1a',
        'ninja-purple': '#9333ea',
        'ninja-purple-light': '#a855f7',
        'ninja-cyan': '#06b6d4',
        'ninja-cyan-light': '#22d3ee',
      },
      animation: {
        'lightning': 'lightning 0.3s ease-in-out',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        lightning: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #9333ea, 0 0 10px #9333ea' },
          '100%': { boxShadow: '0 0 10px #9333ea, 0 0 20px #9333ea, 0 0 30px #06b6d4' },
        },
      },
    },
  },
  plugins: [],
}
