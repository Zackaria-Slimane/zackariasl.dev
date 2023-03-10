/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	exclude: [".nuxt"],
	theme: {
		extend: {
			backgroundImage: {
				squgily: "url('~/assets/divider.svg')",
				topbar:
					"linear-gradient(to right, #00c3ff, #ffff1c)",
			},
			colors: {
				p_text: "#b1b1b1",
				text_bg: "#151922",
				head_text: "#eaeaea",
				navbar_back: "rgba(21 ,25 ,34,0.6)",
				item_back: "#151922",
				item_hover_back: "#151922",
				action_back: "#151922",
				action_border: "#363636",
				border_sm: "rgba(54, 54, 54, 0.6)",
				action_text: "#d9d9d9",
				btn_back: "#151922",
				btn_text: "#f6f6f6",
				link_text_hover: "#6366F1",
				link_border_hover: "rgb(99,102,241, 0.4)",
				link_border: "#6c6c6c",
				link: "#d9d9d9",
				background: "#151922",
				selectionBack: "rgba(40,41,96)",
			},
			screens: {
				sm: "640px",
				md: "768px",
				slg: "978px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1536px",
			},
			fontSize: {
				mobile: "0.525 em"
			},
			fontFamily: {
				zs: "Darlington",
				logo: ["DarlingtonDemo", "Darling",
					"monospace"],
				theme: [
					"MonoLisa",
					"Monaco",
					"Source Code Pro",
					"Consolas",
					"monospace",
				],
				theme_bold: [
					"MonoLisaBold",
					"Monaco",
					"Source Code Pro",
					"Consolas",
					"monospace",
				],
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
