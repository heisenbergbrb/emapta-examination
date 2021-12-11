const DEFAULT_STATE = {
  show: false,
  title: '',
  description: '',
  buttonText: '',
  buttonAction: null
}

const modal = {
  namespaced: true,
  state: () => ({ ...DEFAULT_STATE }),
  getters: { 
    show (state) {
      return state.show
    },
    title (state) {
      return state.title
    },
    description (state) {
      return state.description
    },
    buttonText (state) {
      return state.buttonText
    },
    buttonAction (state) {
      return state.buttonAction
    },
  },
  mutations: {
    SET_SHOW (state, payload) {
      state.show = payload
    },
    SET_STATE (state, payload) {
      Object.assign(state, payload)
    },
    RESET (state) {
      Object.assign(state, { ...DEFAULT_STATE })
    }
  },
  actions: {
    toggleModal ({ commit }, payload) {
      if (payload == false) {
        commit('SET_SHOW', false)
        setTimeout(function () {
          commit('RESET')
        }, 500) 
  
        return
      }
      commit('SET_STATE', payload)
    }
  },
}

export default modal
