// @ts-nocheck
import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import './assets/main.sass'
import axios from './plugins/axios'

createApp(App)
    .use(axios)
    .use(PrimeVue, {
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
    })
    .use(router)
    .mount('#app')
