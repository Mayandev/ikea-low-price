module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'logo': ['RibeyeMarrow', 'system-ui'],
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
