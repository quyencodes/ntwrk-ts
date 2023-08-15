/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '1440px',
        contentContainer: '1140px',
        containerSmall: '1024px',
        containerXS: '768px',
      },
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
      },
      fontFamily: {
        bodyFont: ['Montserrat', 'sans-serif'],
        titleFont: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        navbarShadow: '0 10px 30px -10px rgba(2, 12, 27, 0.7)',
      },
      colors: {
        bodyColor: '#0D1826',
        bgColor: '#1C2541',
        textMain: '#DF8F82',
        textLight: '#CCD6F6',
        textDark: '#8892b0',
        grayScale: '#000000',
        hoverColor: 'rgba(223, 143, 130, 0.1)',
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};
