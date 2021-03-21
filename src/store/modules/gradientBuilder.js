import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui'

export const gradientBuilder = {
  namespaced: true,

  state: {
    gradient: {
      type: 'linear',

      sphereCss: '',
      levelsCss: '',

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
    buildGradient (state, { sphereCss, levelsCss }) {
      state.gradient.sphereCss = sphereCss
      state.gradient.levelsCss = levelsCss
    },

    editGradient (state, { index, property, value }) {
      state.gradient.colors[index][property] = value
    },

    editStopLevel (state, { index, stopLevel }) {
      state.gradient.colors[index].stop = stopLevel
    },
    editType (state, type) {
      state.gradient.type = type
    },

    addColor (state, color) {
      state.gradient.colors.splice(1, 0, color)
    },

    removeColor (state, index) {
      state.gradient.colors.splice(index, 1)
    }
  },

  actions: {
    buildGradient ({ commit, getters }) {
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

      const styles = {
        sphereCss: '',
        levelsCss: `background-image: linear-gradient(to right, ${colorsString})`
      }

      if (gradientType === 'radial') {
        styles.sphereCss = `background-image: ${gradientType}-gradient(${colorsString})`
      } else {
        styles.sphereCss = `background-image: ${gradientType}-gradient(to top right, ${colorsString})`
      }
      commit('buildGradient', styles)
    },

    buildMarkers ({ dispatch, getters }) {
      const levelsBar = document.querySelector('.levels')
      const gradientColors = getters.getGradientColors

      const markers = document.querySelectorAll('.marker')
      markers.forEach(marker => marker.remove())

      gradientColors.map(color => {
        const marker = document.createElement('span')
        marker.classList.add('marker')
        marker.setAttribute('refId', color.id)
        marker.textContent = color.stop

        marker.style.left = `${color.stop * 3.07}px`

        levelsBar.append(marker)

        $(marker).draggable({
          axis: 'x',
          containment: '.levels',

          drag: () => {
            const data = {
              id: marker.getAttribute('refId'),
              stopLevel: Math.floor($(marker).position().left / 3.07)
            }
            marker.textContent = color.stop
            dispatch('editStopLevel', data)
          }
        })
      })
    },

    editGradient ({ commit, dispatch, getters }, { id, property, value }) {
      const data = {
        index: getters.getIndex(id),
        property,
        value
      }
      commit('editGradient', data)
      dispatch('buildGradient')
      dispatch('buildMarkers')
    },

    editStopLevel ({ commit, dispatch, getters }, { id, stopLevel }) {
      const data = {
        index: getters.getIndex(id),
        stopLevel
      }
      commit('editStopLevel', data)
      dispatch('buildGradient')
    },

    editType ({ commit, dispatch }, type) {
      commit('editType', type)
      dispatch('buildGradient', type)
      dispatch('buildMarkers')
    },

    addColor ({ commit, dispatch, getters }) {
      const numberOfColors = getters.getNumberOfColors

      if (numberOfColors < 6) {
        const gradientColors = getters.getGradientColors

        const stop = (gradientColors[1].stop / 2).toString()

        const color = {
          id: new Date().getTime(),
          hex: 'FFFFFF',
          stop
        }

        commit('addColor', color)
        dispatch('buildGradient')
        dispatch('buildMarkers')
      }
    },

    removeColor ({ commit, dispatch, getters }, id) {
      const numberOfColors = getters.getNumberOfColors

      if (numberOfColors > 2) {
        const index = getters.getIndex(id)

        commit('removeColor', index)
        dispatch('buildGradient')
        dispatch('buildMarkers')
      }
    }
  },

  getters: {
    getGradientColors (state) {
      return state.gradient.colors
    },

    getNumberOfColors (state) {
      return state.gradient.colors.length
    },

    getGradientType (state) {
      return state.gradient.type
    },

    getSphereCss (state) {
      return state.gradient.sphereCss
    },

    getLevelsCss (state) {
      return state.gradient.levelsCss
    },

    getIndex: state => id => {
      return state.gradient.colors.findIndex(color => color.id === parseInt(id))
    }
  }
}
