import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import storeConfig from './store/store-config'
import './registerServiceWorker'
import Buefy from 'buefy'
import './assets/_bulma.scss'
import "@fortawesome/fontawesome-free/js/all.js"
import './assets/global.css'

Vue.use(Buefy)
Vue.use(Vuex)

const store = new Vuex.Store(storeConfig)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')