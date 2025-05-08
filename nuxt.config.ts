export default defineNuxtConfig({
	css: ['~/assets/css/tailwind.css'],
	modules: ['@nuxtjs/tailwindcss'],
	devtools: { enabled: true },
	compatibilityDate: '2025-04-27',

	app: {
		head: {
			link: [
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
				},
			],
		},
	},
});
