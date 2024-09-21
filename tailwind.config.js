import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
        comfortaa: ['var(--font-comfortaa)'],
        poppins: ['var(--font-poppins)'],
        roboto: ['var(--font-roboto)'],
        cedarvilleCursive: ['var(--font-cedarville-cursive)'],


      },
      keyframes: {
        meteor: {
          "0%": { transform: "translateY(-20%) translateX(-50%)" },
          "100%": { transform: "translateY(300%) translateX(-50%)" },
        },

      },

      animation: {
        meteor: "meteor 5s ease-in-out infinite",
        cursor: "cursor 0.5s ease-in-out infinite"
      },

      backgroundImage: {
        'sprinkle': "url('/sprinkle.svg')",
        'moon': "url('/moon.svg')",
        'rect_light': "url('/rect_light.svg')",
        'hexagon': "url('/hexagon.svg')",
        'shapes': "url('/shapes.svg')",
      },
      cursor: {
        'custom': 'url(/pointer.svg) 12 12, auto',

        'pointer': 'pointer',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
