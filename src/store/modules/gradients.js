import firebase from 'firebase'

export const gradients = {
  namespaced: true,
  state: {
    gradients: []
  },
  mutations: {
    loadGradients (state, gradients) {
      state.gradients = gradients
    }
  },
  actions: {
    loadGradients ({ commit }) {
      const database = firebase.database()
      const ref = database.ref('gradients')
      ref.on('value', (snapshot) => {
        const gradients = snapshot.val()
        commit('loadGradients', gradients)
      })
    }
  },
  getters: {
    getGradients (state) {
      return state.gradients
    }
  }
}
