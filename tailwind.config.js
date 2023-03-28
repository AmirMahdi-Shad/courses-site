/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          50:"#686089",
          100:"#2c1f4a"
        },
        cart:{
          50:"#381d74"
        },
        circle:{
          50:"#2f2b6e"
        },
      },
      fontFamily:{
        caladea:"'Caladea',serief",
        inter:"'Inter',sans-serief",
      }
    },
  },
  plugins: [],
}
