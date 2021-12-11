import { serverTimestamp } from "firebase/firestore";
import { firestoreAction } from 'vuexfire'
import { db } from '../firebase'

const agileBase = (COLLECTION_NAME) => ({
  state: {
    items: [],
    loading: true,
  },
  getters: { 
    items (state) {
      return state.items
    },
    loading (state) {
      return state.loading
    }
  },
  mutations: {
    SET_ITEMS (state, payload) {
      state.items = payload
    },
    SET_LOADING (state, payload) {
      state.loading = payload
    }
  },
  actions: {
    setLocalItems ({ commit }, payload) {
      commit('SET_ITEMS', payload)
    },
    setLoading ({ commit }, payload) {
      commit('SET_LOADING', payload)
    },
    bindItems: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef(
        'items', 
        db.collection(COLLECTION_NAME).orderBy("timestamp", "asc")
      )
    }),
    addValue: firestoreAction((_, payload) => {
      return db.collection(COLLECTION_NAME)
        .add({
          name: payload,
          isEditing: false,
          timestamp: serverTimestamp()
        })
    }),
    removeValue: firestoreAction((_, payload) => {
      return db.collection(COLLECTION_NAME)
        .doc(payload)
        .delete()
    }),
    updateValue: firestoreAction((_, payload) => {
      const { id, name } = payload
      return db.collection(COLLECTION_NAME)
        .doc(id)
        .update({ name })
    })
  }
})

export default agileBase
