import WOW from 'wowjs'


export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('WOW', WOW);
})