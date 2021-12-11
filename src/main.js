import Vue from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css'
import store from './store'
import globalMixin from './mixins/global'

Vue.config.productionTip = false
Vue.mixin(globalMixin)

new Vue({
  render: h => h(App),
  beforeCreate () {
    document.title = 'Emapta Examination'
  },
  store
}).$mount('#app')
