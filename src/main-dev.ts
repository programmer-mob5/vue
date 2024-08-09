/**
 * This entry file is for vite running projet as standalone for development and cypress testing purpose
 */

import { createApp } from 'vue';
import { registerComponents } from '@/utils';
import ToastService from 'primevue/toastservice';

import App from './App.vue';
import router from './router';

const app = createApp(App).use(router).use(ToastService);
registerComponents(app);

app.mount('#app');
