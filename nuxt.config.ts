import { ErrorMessage } from "./.nuxt/components.d";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	runtimeConfig: {
		public: {
			apiBase: "/api",
		},
	},
	devtools: { enabled: true },
	css: [
		"@/assets/scss/main.scss",
		"animate.css/animate.css",
		"@animxyz/core/dist/animxyz.css",
	],
	app: {
		pageTransition: {
			name: "page",
			mode: "out-in",
		},
		layoutTransition: {
			name: "layout",
			mode: "out-in",
		},
		head: {
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			link: [
				{
					rel: "stylesheet",
					href: "https://834832894.r.cdn36.com/chinesefonts3/packages/jpdzt/dist/BoutiqueBitmap9x9_1_6/result.css",
				},
			],
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
		//https://auto-animate.formkit.com/#usage-vue
		"@formkit/auto-animate/nuxt",
	],
	veeValidate: {
		// disable or enable auto imports
		autoImports: true,
		componentNames: {
			Form: "VeeForm",
			Field: "VeeField",
			FieldArray: "VeeFieldArray",
			ErrorMessage: "VeeErrorMessage",
		},
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
