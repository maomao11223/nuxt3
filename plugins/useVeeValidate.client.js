import { configure, defineRule } from 'vee-validate'
import { localize, setLocale } from '@vee-validate/i18n/dist/vee-validate-i18n.esm'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import en from '@vee-validate/i18n/dist/locale/en.json'

import allRules from '@vee-validate/rules/dist/vee-validate-rules'


Object.keys(allRules).forEach(rule => {
    defineRule(rule, allRules[rule])
})

configure({
    generateMessage: localize({ zh_TW: zhTW, en })
})


let selectedLocale = useCookie('i18n_redirected')
let formatLocale = '';
console.log("🚀 ~ selectedLocale:", selectedLocale.value);

if (selectedLocale.value === 'zh-tw') {
    formatLocale= 'zh_TW'
} else {
    formatLocale = selectedLocale.value
}

setLocale(formatLocale )

export default defineNuxtPlugin(_nuxtApp => { })