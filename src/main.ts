import 'floating-vue/dist/style.css';
import './assets/css/app.css';

import { createPinia } from 'pinia';
import { createApp } from 'vue';

import { vTooltip } from 'floating-vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.directive('tooltip', vTooltip);

app.mount('#app');
