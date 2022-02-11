module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      '2xl': { max: '1240px' },
      xl: { max: '1020px' },
      lg: { max: '992px' },
      md: { max: '768px' },
      sm: { max: '572px' },
      xs: { max: '352px' },
    },
    extend: {
      colors: {},

      fontFamily: {
        mainfont: ['Rubik', 'sans-serif'],
        textfont: ['Montserrat', 'sans-serif'],
        codefont: ['Outfit', 'sans-serif'],
        curlfont: ['Quicksand', 'sans-serif'],
      },
    },
  },
  extend: {},
  plugins: [],
};
