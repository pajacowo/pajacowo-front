/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         colors: {
            'dark-blue': '#011135',
            'light-blue': '#80d3ff',
            'light-green': '#34ffae',
         },
         fontFamily: {
            'dyna-puff': ['"DynaPuff"', 'cursive'],
            'sedgwick-ave': ['"Sedgwick Ave Display"', 'cursive'],
            'prompt': ['"Prompt"', 'sans-serif'],
         },
      },
   },
   plugins: [],
};
