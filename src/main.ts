import 'floating-vue/dist/style.css';
import './assets/css/app.css';

import { vTooltip } from 'floating-vue';
import { createPinia } from 'pinia';
import { register as registerSwiper } from 'swiper/element/bundle';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

registerSwiper();

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.directive('tooltip', vTooltip);

app.mount('#app');
