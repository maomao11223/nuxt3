import { ErrorMessage } from "./.nuxt/components.d";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	runtimeConfig: {
		public: {
			apiBase:'/api'
		}
	},
	devtools: { enabled: true },
	css: ["@/assets/scss/main.scss", "animate.css/animate.min.css"],
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
	modules: [
		"@nuxtjs/i18n",
		"@vee-validate/nuxt",
		//Icon https://ithelp.ithome.com.tw/m/articles/10335953
		"nuxt-icon",
		"unplugin-icons/nuxt",
		"@pinia/nuxt",
		"@nuxt/test-utils/module",
	],
	veeValidate: {
		// disable or enable auto imports
		autoImports: true,
	},
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
		strategy: "no_prefix",
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: "i18n_redirected",
		},
		defaultLocale: "zh-tw",
	},
});
