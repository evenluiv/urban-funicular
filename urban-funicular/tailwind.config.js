/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pink-50": "#ECE2E1",
        "pink-100": "#FCD1D1",
        "blue-50": "#D3E0DC",
        "blue-100": "#AEE1E1"
      },
      screens: {
        'phone': '450px',
        // => @media (min-width: 450px) { ... }

        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      gridTemplateRows: {
        // Simple 2 row grid
        '2': '7fr 1fr',
        'custom2': '1fr 1fr'
      },
      backgroundImage: {
        'custom-bg': "url('/src/assets/taustakujundus.png')"
      }
    },
  },
  plugins: [],
}