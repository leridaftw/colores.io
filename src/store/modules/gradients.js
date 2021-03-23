import firebase from 'firebase'

export const gradients = {
  namespaced: true,
  state: {
    gradients: []
  },
  mutations: {
    loadGradients (state, gradient) {
      state.gradients = [...state.gradients, gradient]
      state.gradients = state.gradients.sort(() => 0.5 - Math.random())
    },

    emptyGradients (state) {
      state.gradients = []
    }
  },
  actions: {
    loadGradients ({ commit }) {
      const database = firebase.database()
      const ref = database.ref('gradients')
      ref.on('value', (snapshot) => {
        const gradients = snapshot.val()
        commit('emptyGradients')
        Object.entries(gradients).map((gradient) => {
          commit('loadGradients', gradient[1])
        })
      })
    }
  },
  getters: {
    getGradients (state) {
      return state.gradients
    }
  }
}
