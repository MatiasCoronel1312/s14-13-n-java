/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "Inter", "sans-serif"],
      serif: ["Lora", "serif"],
      // Agregamos Roboto como familia de fuente "mono"
      mono: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#FF8C00",
        secondary: "#333333",
        accent: "#B81C00",
        text: "#333333",
        background: "#F5F5F5",
        gradient:""
      },
      boxShadow: {
        card: "0px 3px 4px 1px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
