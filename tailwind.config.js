/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // abc: {
        //   400: ["Rouge Script", "cursive"],
        //   100: ["Roboto", "sans-serif"],
        //   200: ["Montserrat", "sans-serif"],
        // },
        intro: {
          100: "#173B6C",
          200: "#0463BA",
          300: "#159CDD",
          400: "#333",
        },
        grr: {
          100: "#a8e48a",
          200: "#1eb6d9",
          300: "#f2d3f7",
        },
        skill: {
          100: "#F7F8F9",
          200: "#F6F9F9",
          300: "#112240",
          400: "#F92C85",
          500: "#78e2ff",
        },
        education: {
          700: "#0A192F",
        },
        contact: {
          100: "#09FCD8",
        },
        project: {
          100: "#152b52",
          200: "#3D7898",
        },
        footer: {
          100: "#191D2C",
        },
        service:{
          100:'#4F99DB',
          200:'#4CB5FE'
        },
        boxShadow: {
          custom: "0 4px 6px #0463BA, 0 2px 4px #0463BA",
        },
      },
      textShadow: {
        custom: "0px 0px 64px -15px rgba(0,0,0,0.1)",
        title:" 0 0 5px #fff, 0 0 8px #fff, 0 0 10px rgb(255 0 153), 0 0 15px rgb(255 0 153), 0 0 30px rgb(255 0 153), 0 0 40px rgb(255 0 153)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        fade: "fade-left 0.5s ease-out",
      },
      fontFamily: {
        custom: ["Roboto", "sans-serif"],
      },
      borderRadius: {
        custom: '50%',  // Define your custom border-radius value
      },
      // transform: {
      //   '-rotate-15': '-15deg',
      // },
      textShadow: {
        'custom': '0 0 5px #fff, 0 0 8px #fff, 0 0 10px #f09, 0 0 15px #f09, 0 0 30px #f09, 0 0 40px #f09',
      },
    },
    fontFamily: {
      title: ["Cinzel Decorative", "cursive"],
      skill: ["Gabarito", "sans-serif"],
      pr: ["Akaya Kanadaka"],
      contact: ["Gabarito"],
      project: ["Tilt Neon", "sans-serif"],
    },
  },
  plugins: [],
};
