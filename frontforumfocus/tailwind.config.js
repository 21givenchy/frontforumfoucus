/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "wh-10":"#F4F4F4",
        "wh-50":"#FBFBFB",
        "wh-100":"#C9C9C9",
        "wh-300":"#939393",
        "wh-500":"#595959",
        "wh-900":"#0F0F0F",
        "accent-red":"#EA9648",
        "accent-orange":"#F6CF6B",
        "accent-green":"#C2E984",
      },
      backgroundImage:  (theme) => ({
        "gradient-gradual":
        "linear-gradient(180deg, rgba(116, 116, 116, 0) 66.15%, #000000 100%)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }),
      screens:{
        xs:"480px",
        sm:"768px",
        md:"1060px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
}
