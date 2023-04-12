/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            'dyna-puff': ['"DynaPuff"', 'cursive'],
            'sedgwick-ave': ['"Sedgwick Ave Display"', 'cursive'],
            'prompt': ['"Prompt"', 'sans-serif'],
         },
      },
   },
   plugins: [],
};
