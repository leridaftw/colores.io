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

    editGradientColor (state, { index, color }) {
      state.gradient.colors[index].hex = color
      console.log(state.gradient.colors[index])
    },

    editGradientStop (state, { index, stop }) {
      state.gradient.colors[index].stop = stop
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

    editGradientColor ({ commit, dispatch, getters }, { id, color }) {
      const data = {
        index: getters.getIndex(id),
        color
      }
      commit('editGradientColor', data)
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
