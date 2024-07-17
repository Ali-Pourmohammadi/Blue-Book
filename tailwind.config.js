import type { Config } from "tailwindcss"

// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-900': '#1a202c', // Define your custom color here
        'r-primary-200': '#edf2f7', // Define your custom color here
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}