// tailwind.config.js
module.exports = {
	darkMode: ["class"],
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  container: {
		center: true,
		padding: "15px",
	  },
	  screens: {
		sm: "640px",
		md: "768px",
		lg: "960px",
		"2xl": "1400px",
	  },
	  fontFamily: {
		custom: 'var(--font-jetbainsmono)', // Custom font variable
	  },
	  extend: {
		colors: {
		  background: 'var(--background)',
		  foreground: 'var(--foreground)',

		  primary:"#1c1c22",
		  accent:{
			//DEFAULT :"#88ff99",
			//DEFAULT:"#00ffff",
			DEFAULT:"#0891B2",  
			hover:"00e187",
		  }
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  
