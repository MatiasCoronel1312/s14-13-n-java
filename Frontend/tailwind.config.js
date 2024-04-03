/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
				primary: '#FF8C00',
				secondary: '#333333',
				accent: '#B81C00',
				text: '#333333',
				background: '#F5F5F5',
			},
    },
  },
  plugins: [],
}

