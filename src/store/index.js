import Vue from 'vue'
import Vuex from 'vuex'
import modal from './modal'
import agileValues from './agile-values'
import agilePrinciples from './agile-priniciples'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    modal,
    agileValues,
    agilePrinciples
  }
})

export default store
