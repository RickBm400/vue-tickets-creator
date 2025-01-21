// @ts-nocheck
import App from './App.vue';
import router from './router';
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import './sass/index.sass';

createApp(App).use(PrimeVue).use(router).mount('#app');
