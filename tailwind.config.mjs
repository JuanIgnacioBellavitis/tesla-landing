/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './src/styles/global.css'],
	theme: {
		extend: {},
		fontFamily: {
			sans: ['Gotham SSm A, sans-serif']
		}
	},
	plugins: [],
}
