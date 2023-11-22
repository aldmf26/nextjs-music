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
        'warnaBg': '#0f0e17',
        'warnaHeadline': '#fffffe',
        'warnaParagraph': '#a7a9be',
        'warnaButton': '#ff8906',
        'warnaSecondary': '#f25f4c',
        'warnaTertiary': '#e53170',

        'warnaPrimary': '#141617',
        'warnaSecondary': '#1F2937',
        'warnaHover': '#F8FBFF',
        'warnaTeksPrimary': '#FFFFF8',
        'warnaTeksSblmHover': '#8d8377',
      },
    },
  },
  plugins: [],
}
