import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import App from './App.vue'
import './assets/css/tailwind.css'
import store from './store'
import globalMixin from './mixins/global'

Vue.use(firestorePlugin)
Vue.mixin(globalMixin)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate () {
    document.title = 'Emapta Examination'
  },
  store
}).$mount('#app')
