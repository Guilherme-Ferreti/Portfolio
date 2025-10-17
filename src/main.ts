import './assets/css/app.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import { FocusTrap } from 'focus-trap-vue';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component('FocusTrap', FocusTrap);

app.mount('#app');
