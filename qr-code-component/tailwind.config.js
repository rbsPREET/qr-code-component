/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        c_white: "hsl(0, 0%, 100%)",
        c_light_gray: "hsl(212, 45%, 89%)",
        c_grayish_blue: "hsl(220, 15%, 55%)",
        c_dark_blue: "hsl(218, 44%, 22%)"
      }
    },
  },
  plugins: [],
}
