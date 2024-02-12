/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        mullish: ["Mulish", "sans-serif"],
      },
      backgroundImage: theme => ({
        'gradient-custom': 'linear-gradient( 109.6deg,  rgba(24,138,141,1) 11.2%, rgba(96,221,142,1) 91.1% )',
      }),
      textColor: theme => ({
        'gradient-custom-from': theme('colors.gradient-custom.from'),
        'gradient-custom-to': theme('colors.gradient-custom.to'),
      }),
      colors: {
        'gradient-custom': {
          'from': 'rgba(24,138,141,1)',
          'to': 'rgba(96,221,142,1)',
        },
        'gradient-custom-border-from': 'rgba(24,138,141,1)',
        'gradient-custom-border-to': 'rgba(96,221,142,1)',
        deepBlue: "#02042a",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
      },
      borderColor: theme => ({
        'gradient-custom-border-from': theme('colors.gradient-custom-border-from'),
        'gradient-custom-border-to': theme('colors.gradient-custom-border-to'),
      }),
      backgroundImage: theme => ({
        'gradient-custom': 'linear-gradient( 109.6deg,  rgba(24,138,141,1) 11.2%, rgba(96,221,142,1) 91.1% )',
        'local-image': "url('./images/logo-removebg-preview.png')", // Replace './path/to/your/image.jpg' with the path to your image file
        
      }),
    },
  },
  plugins: [],
}

