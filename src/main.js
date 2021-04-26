// page de point d'entrée:
import Vue from 'vue';

import footer from '@/components/footer.vue';
import header from '@/components/header.vue';
import markerpopup from '@/components/markerpopup.vue';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.component('header-bar', header)
Vue.component('footer-bar', footer)
Vue.component('marker-popup', markerpopup)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')