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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        custom: ['Open Sans', 'sans-serif'], 
        logo: ['DancingScript-Bold', 'cursive']
      },
      backgroundImage: {
        'hero-background': "url('/Galaxy.jpeg')",
        'skills-background': "url('/Space.jpeg')",
        'contact-form-background': "url('/Supernova.jpeg')"
      },
    },
  },
  plugins: [],
};
