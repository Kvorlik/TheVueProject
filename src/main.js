import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'

Vue.use(Vuex);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  render: h => h(App),
}).$mount('#app')
