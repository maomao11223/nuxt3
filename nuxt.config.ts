// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ["~/assets/scss/main.scss"],
	app: {
		pageTransition: {
			name: "page",
			mode: "out-in",
		},
		layoutTransition: {
			name: "layout",
			mode: "out-in",
		},
	},
	modules: ["@nuxtjs/i18n"],
	i18n: {
		langDir: "locales",
		locales: [
			{
				code: "en",
				iso: "en-US",
				file: "en.json",
			},
			{
				code: "zh-tw",
				iso: "zh-TW",
				file: "zh-tw.json",
			},
    ],
    strategy:'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey:'i18n_redirected'
    },
		defaultLocale: "zh-tw",
	},
});
