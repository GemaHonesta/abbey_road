// page de point d'entrée:
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/scss/styles.scss"

import header from "@/components/header.vue"
import footer from "@/components/footer.vue"

Vue.component('header-bar', header)
Vue.component('footer-bar', footer)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



