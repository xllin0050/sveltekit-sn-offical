/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				'red-hat': ['"Red Hat Mono"', 'monospace']
			}
		}
	},
	plugins: []
};
