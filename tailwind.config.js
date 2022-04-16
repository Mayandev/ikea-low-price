module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      logo: ['RibeyeMarrow', 'system-ui'],
    },
    extend: {
      colors: {
        'ikea-blue': '#1a52bf',
        'ikea-yellow': '#FBD914',
        'ikea-orange': '#b76d32',
        'dark-black': '#35363a',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
