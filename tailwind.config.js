/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'business': {
          primary: 'var(--business-primary)',
          secondary: 'var(--business-secondary)',
          accent: 'var(--business-accent)',
        },
        'leisure': {
          primary: 'var(--leisure-primary)',
          secondary: 'var(--leisure-secondary)',
          accent: 'var(--leisure-accent)',
        },
      },
    },
  },
  plugins: [],
}