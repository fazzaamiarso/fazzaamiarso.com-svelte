/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			white: '#FFF',
			brand: {
				100: 'var(--color-brand-100)',
				200: 'var(--color-brand-200)',
				300: 'var(--color-brand-300)',
				400: 'var(--color-brand-400)',
				500: 'var(--color-brand-500)',
				600: 'var(--color-brand-600)',
				700: 'var(--color-brand-700)',
				800: 'var(--color-brand-800)',
				900: 'var(--color-brand-900)'
			},
			gray: {
				100: 'var(--color-gray-100)',
				200: 'var(--color-gray-200)',
				300: 'var(--color-gray-300)',
				400: 'var(--color-gray-400)',
				500: 'var(--color-gray-500)',
				600: 'var(--color-gray-600)',
				700: 'var(--color-gray-700)',
				800: 'var(--color-gray-800)',
				900: 'var(--color-gray-900)'
			}
		},
		fontSize: {
			'heading-1': ['var(--text-heading-1)', '112px'],
			'heading-2': ['var(--text-heading-2)', '80px'],
			'heading-3': ['var(--text-heading-3)', '52px'],
			'heading-4': ['var(--text-heading-4)', '40px'],
			'heading-5': ['var(--text-heading-5)', '28px'],
			'heading-6': ['var(--text-heading-6)', '20px'],
			'body-xl': ['var(--text-body-xl)', '36px'],
			'body-lg': ['var(--text-body-lg)', '30px'],
			'body-base': ['var(--text-body-base)', '24px'],
			'body-sm': ['var(--text-body-sm)', '18px']
		},
		fontFamily: {
			'fira-sans': ['Fira Sans', 'sans-serif'],
			'dm-sans': ['DM Sans', 'sans-serif']
		},
		extend: {}
	},
	plugins: []
};
