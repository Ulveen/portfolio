/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/App.tsx',
		'./src/components/**/*.{js,jsx,ts,tsx}',
		'./src/sections/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [require('tailwind-scrollbar-hide')],
};
