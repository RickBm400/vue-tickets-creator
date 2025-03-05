// @ts-nocheck
import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import './sass/index.sass'

createApp(App)
    .use(PrimeVue, {
        theme: {
            preset: Aura,
            options: {
                darkModeSelector: false,
            },
        },
    })
    .use(router)
    .mount('#app')
