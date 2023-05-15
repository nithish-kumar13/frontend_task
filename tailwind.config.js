/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        InputLabel: "0.875rem",
      },
      fontWeight: {
        normal: "400", // normal font weight
        medium: "500", // medium font weight
        bold: "700", // bold font weight
      },
      colors: {
        dark: "#212121",
        cardColor: "#FFFFFF",
        cardBorder: "#E6E6E6",
        white: "#FAFAFA",
        error: "#D86161",
        placeholder: "#7A7A7A",
        primary: "#1597E4",
        optionBorder: "#D8D8D8",
        gray: "#646464",
        darkGray: "#212427",
        jobCardBorder: "#DADEDF",
        formHeader: "#182021",
      },
      borderRadius: {
        sm: "10px",
      },
    },
  },
  plugins: [],
};
