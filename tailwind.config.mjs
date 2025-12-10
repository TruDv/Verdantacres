/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Satoshi', 'sans-serif'],
        signature: ['"Dancing Script"', 'cursive'],
      },
      colors: {
        primary: '#af8737',
        corporate: '#1B5E20',
        dark: '#111827',
        light: '#F5F5F5',
        surface: '#FAFAFA',
      },
      boxShadow: {
        custom: '0 10px 30px rgba(27,94,32,0.1)',
        card: '0 20px 40px -10px rgba(0,0,0,0.1)',
      },
    },
  },
};