// @ts-nocheck
import App from './App.vue';
import router from './router';
import { createApp } from 'vue';
import './sass/index.sass';

createApp(App).use(router).mount('#app');
