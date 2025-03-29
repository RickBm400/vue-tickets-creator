// @ts-nocheck
import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import axiosPlugin from './plugins/axios-plugin'
import { createPinia } from 'pinia'
import { i18n } from './plugins/i18n'
import './assets/main.sass'

const primeVueTheme = {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: false,
            cssLayer: {
                name: 'primevue',
                order: 'theme, base, primevue, main.sass',
            },
        },
    },
}

const pinia = createPinia()

createApp(App)
    .use(i18n)
    .use(pinia)
    .use(PrimeVue, primeVueTheme)
    .use(axiosPlugin)
    .use(router)
    .mount('#app')
