const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        darkBlue: {
          50: '#ebeefd',
          100: '#c7ccea',
          200: '#a3aadb',
          300: '#7f89cb',
          400: '#5a67bc',
          500: '#414da4',
          600: '#323c7f',
          700: '#232b5b',
          800: '#151a38',
          900: '#060917',
        },
      },
    },
  },
  plugins: [],
}
