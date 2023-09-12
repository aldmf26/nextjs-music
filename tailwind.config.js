/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'warna1': '#1D0346',
        'warna2': '#00337D',
        'warna3': '#005FA9',
        'warna4': '#008CC4',
        'warna5': '#00B8CD',
        'warna6': '#00E3C6'
      },
    },
  },
  plugins: [],
}
