/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'display': 'SF UI Display',
        'roboto': "Roboto",
        'inter': 'Inter'
      },
      fontSize: {
        '3l': '1.75rem',
        'heading-sm': '2.6rem',
        'heading-1': '4rem'
      },
      spacing: {
        'base': '73rem'
      },
      colors: {
        brand: {
          gray: {
            50: '#FAFAFF',
            200: '#E8FFF7',
            700: '#56586F'
          },
          green: {
            400: '#5B5F79'
          },
          blue: {
            300: '#17ACFF',
            400: '#457EF8',
            500: '#5E69DF'
          },
          brown: {
            400: '#2D3254',
          },
          dark: {
            500: '#1B2344'
          },
          red: '#29A47A',
          pink: '#FF56D1',
          orange: '#FFA500'
        }
      },
      backgroundImage: {
        'footer': "url('../img/background.png')",
      }
    },
  },
  plugins: [],
}

