module.exports = {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '350px',
			md: '600px',
			lg: '800px',
			xl: '1280px',
			'2xl': '1536px',
		},
		fontFamily: {
			ms: ['Montserrat', 'sans-serif'],
			rb: ['Rubik', 'sans-serif'],
		},
		colors: {
			dark: '#0E0E25',
			secondaryDark: '#181E34',
			primary: '#364FAB',
			primaryInactive: '#364fab9f',
			secondary: '#7765E3',
			white: {
				100: '#F0FBFF',
				200: '#E8F8FF',
				300: '#D6E9FF',
				400: '#C6DFFF',
			},
		},
		extend: {
			fontSize: {
				'7xl': '5rem',
				'8xl': '8rem',
			},
			spacing: {
				45: '45%',
				90: '90%',
				95: '95%',
			},
		},
	},
	plugins: [],
};
