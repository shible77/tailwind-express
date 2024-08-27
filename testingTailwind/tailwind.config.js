/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient1': 'linear-gradient(to right, #0172AF ,#74FEBD)',
        'custom-gradient2': 'linear-gradient(to right, #6157FF ,#EE49FD)',
        'custom-gradient3': 'linear-gradient(to right, #2DFFF5 ,#FFF878)',
        'custom-gradient4': 'linear-gradient(to right, #0700DE ,#DDFFC9)',
        'custom-gradient5': 'linear-gradient(to right, #FF4066 ,#FFF16A)',
        'custom-gradient6': 'linear-gradient(to right, #FF8473 ,#FFF9D2)',
      },
      width: {
        '9/10': '90%',
        '1/10': '10%',
      },
      colors :{
         'custom-color' : '#FF8473'
      }
    },
  },
  plugins: [],
}

