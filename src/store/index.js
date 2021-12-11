import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations } from 'vuexfire'
import modal from './modal'
import agileValues from './agile-values'
import agilePrinciples from './agile-priniciples'

Vue.use(Vuex)

const store = new Vuex.Store({
  mutations: vuexfireMutations,
  modules: {
    modal,
    agileValues,
    agilePrinciples
  }
})

export default store
