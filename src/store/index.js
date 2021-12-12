import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations } from 'vuexfire'
import modal from './modal'
import agileBase from './agile-base'
import Collection from '../constants/collection'

Vue.use(Vuex)

const store = new Vuex.Store({
  mutations: vuexfireMutations,
  modules: {
    modal,
    agileValues: { ...agileBase(Collection.VALUES) },
    agilePrinciples: { ...agileBase(Collection.PRINCIPLES) }
  }
})

export default store
