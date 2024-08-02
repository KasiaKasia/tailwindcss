/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #3acfd5 0%, #17310a 100%)',
       
      },
      boxShadow: {
        'custom-shadow': '0 0 5px rgba(30, 60, 114, 0.5)',
      },
      colors: {
        'custom-light-blue-gray': 'rgba(190, 202, 221, 0.72)',
      },
      borderColor: {
        'custom-gradient-green': 'linear-gradient(to right, #3acfd5 0%, #357713 100%) 1',
        'custom-gradient-red': 'linear-gradient(to right, #d5643a 0%, #d53a9e 100%) 1',
      },
    }, 
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

