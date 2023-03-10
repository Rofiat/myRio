/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'map': "url('./components/images/map.png')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
