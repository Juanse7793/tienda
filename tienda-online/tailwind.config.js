/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        'company-bg': "url('/src/assets/images/20091.jpg')",
        'about-bg': "url('/src/assets/images/17930.jpg')",
        'store-bg': "url('/src/assets/images/store.webp')",
      }),
    },
  },
  plugins: [],
}