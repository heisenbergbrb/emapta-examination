import json from '../constants/twelve-agile-principles.json'

const DEFAULT_STATE = {
  items: [ ...json.data ]
}

const modal = {
  namespaced: true,
  state: () => ({ ...DEFAULT_STATE }),
  getters: { 
    items (state) {
      return state.items
    }
  },
  mutations: {
    SET_ITEMS (state, payload) {
      state.items = payload
    },
  },
  actions: {
    setAgilePrincipleItems ({ commit }, payload) {
      commit('SET_ITEMS', payload)
    }
  },
}

export default modal
