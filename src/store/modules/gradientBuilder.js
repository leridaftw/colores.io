export const gradientBuilder = {
  namespaced: true,

  state: {
    gradient: {
      type: 'linear',

      css: '',

      colors: [
        {
          id: 1,
          hex: '000000',
          stop: '0'
        },
        {
          id: 2,
          hex: 'DDDDDD',
          stop: '100'
        }
      ]
    }
  },

  mutations: {
    buildGradientCss (state, css) {
      state.gradient.css = css
    },

    editGradient (state, { index, property, value }) {
      state.gradient.colors[index][property] = value
      console.log(state.gradient.colors[index])
    }
  },

  actions: {
    buildGradientCss ({ commit, getters }) {
      const gradientColors = getters.getGradientColors
      const gradientType = getters.getGradientType
      const colorsArray = []

      gradientColors.map(color => {
        colorsArray.push(`#${color.hex} ${color.stop}%,`)
      })

      const removeLastComma = colorsArray[colorsArray.length - 1].split(',')[0]

      colorsArray.pop()
      colorsArray.push(removeLastComma)

      const colorsString = colorsArray.join(' ')

      const css = `background-image: ${gradientType}-gradient(to top right, ${colorsString})`

      commit('buildGradientCss', css)
    },

    editGradient ({ commit, dispatch, getters }, { id, property, value }) {
      const data = {
        index: getters.getIndex(id),
        property,
        value
      }
      commit('editGradient', data)
      dispatch('buildGradientCss')
    }
  },

  getters: {
    getGradientColors (state) {
      return state.gradient.colors
    },

    getGradientType (state) {
      return state.gradient.type
    },

    getGradientCss (state) {
      return state.gradient.css
    },

    getIndex: state => id => {
      return state.gradient.colors.findIndex(color => color.id === parseInt(id))
    }
  }
}
