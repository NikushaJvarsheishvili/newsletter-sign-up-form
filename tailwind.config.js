/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customTomato: "hsl(4, 100%, 67%)",
        customSlateGrey: "hsl(234, 29%, 20%)",
        customCharcoalGrey: "hsl(235, 18%, 26%)",
        customGrey: "hsl(231, 7%, 60%)",
        customWhite: "hsl(0, 0%, 100%)",
        inputBg: "hsl(4, 77%, 83%)",
      },
      screens: {
        "2md": "850px",
      },
      backgroundImage: {
        "gradient-primary": `linear-gradient(127deg,#FF644A 40% ,#FF5969 70%)`,
      },
      maxWidth: {
        "55rem": "55rem",
        "22rem": "22rem",
      },
      maxHeight: {
        550: "550px",
      },
      height: {
        100: "100%",
      },
      borderRadius: {
        "2rem": "2rem",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".form-elements": {
          width: "100%",
          height: "3rem",
          borderRadius: "0.5rem",
        },
        ".input-error": {
          borderColor: "hsl(4, 100%, 67%)",
          backgroundColor: "rgba(255, 98, 87, 0.2)",
          color: "hsl(4, 100%, 67%)",
        },
        ".isHidden": {
          position: "absolute",
          opacity: "0",
          right: "1000px",
          top: "-1000px",
        },
        ".isVisable": {
          position: "relative",
          opacity: "1",
          right: "0",
          top: "0",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
