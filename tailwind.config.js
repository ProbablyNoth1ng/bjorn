/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
  
    extend: {
      screens: {
     
        'max-2xl': {'max': '1536px'},
        'max-xl': {'max': '1280px'},
        'max-lg': {'max': '991px'},
        'max-md': {'max': '768px'},
        'max-sm': {'max': '576px'},
        'max-xs': {'max': '320px'},
  
    
        
      },
    },
  },
  plugins: [],
  
});

 

