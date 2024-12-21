/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        'home-bg': "url('../src/assets/images/pink_orange_tech_bg.png')"
      },
      animation: {
				fade: 'fadeIn 1s ease-in-out',
        slide: 'slideUp 1s ease-in-out'
			},
			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
        slideUp: {
          "0%": {
            transform: "translateY(10%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        }
			},
    },
  },
  plugins: [],
}