/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    screens:{
      xsm: '380px',
      xm: '480px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
      '2xl': '1536px',
    },
    backgroundColor: ({
      'primary': '#0A2640',
      'secondary': '#E5E5E5',
    }),
    fontFamily: {
      Manrope: ["Manrope", "sans-serif"],
      OpenSans: ["Open Sans", "sans-serif"],
     },
    container: {
      center: true,
      padding: {
        DEFAULT: '0',
       
      },
    
    },
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '728px',
          },
          '@screen lg': {
            maxWidth: '984px',
          },
          '@screen xl': {
            maxWidth: '1200px',
          },

        }
      })
    }
  ],
}
