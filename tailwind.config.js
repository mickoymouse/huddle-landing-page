/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["*.html"],
	theme: {
		extend: {
			backgroundImage: {
				desktop: "url('/images/bg-desktop.svg')",
				mobile: "url('/images/bg-mobile.svg')",
			},
		},
	},
	plugins: [],
};
