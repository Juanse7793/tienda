/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue' : '#14b0e2',
      },
      backgroundImage: () => ({
        'company-bg': "url('/src/assets/images/20091.jpg')",
        'about-bg': "url('/src/assets/images/17930.jpg')",
        'store-bg': "url('/src/assets/images/store.webp')",
      }),
    },
  },
  plugins: [],
}