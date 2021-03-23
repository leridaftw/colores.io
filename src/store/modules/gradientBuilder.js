import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui'

export const gradientBuilder = {
  namespaced: true,

  state: {
    gradient: {
      id: new Date().getTime(),
      name: '',
      type: 'linear',
      direction: 'to top right',

      sphereCss: '',
      levelsCss: '',

      colors: [
        {
          id: 1,
          hex: '333333',
          stop: '0'
        },
        {
          id: 2,
          hex: 'FFFFFF',
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

    setGradientName (state, name) {
      state.gradient.name = name
    },

    resetData (state) {
      state.gradient.name = ''
      state.gradient.type = 'linear'
      state.gradient.direction = 'to top right'
      state.gradient.sphereCss = ''
      state.gradient.levelsCss = ''
      state.gradient.colors = [
        {
          id: 1,
          hex: '333333',
          stop: '0'
        },
        {
          id: 2,
          hex: 'FFFFFF',
          stop: '100'
        }
      ]
    },

    editDirection (state, direction) {
      state.gradient.direction = direction
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
      const colors = getters.getGradientColors
      const type = getters.getGradientType
      const direction = getters.getGradientDirection
      const colorsArray = []

      colors.map(color => {
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

      if (type === 'radial') {
        styles.sphereCss = `background-image: ${type}-gradient(${colorsString})`
      } else {
        styles.sphereCss = `background-image: ${type}-gradient(${direction}, ${colorsString})`
      }
      commit('buildGradient', styles)
    },

    buildMarkers ({ dispatch, getters }) {
      const levelsBar = document.querySelector('.stops')
      const gradientColors = getters.getGradientColors

      const markers = document.querySelectorAll('.marker')
      markers.forEach(marker => marker.remove())

      gradientColors.map(color => {
        const marker = document.createElement('span')
        const markerHelper = document.createElement('span')

        marker.classList.add('marker')
        marker.setAttribute('refId', color.id)
        markerHelper.classList.add('marker-helper')
        markerHelper.textContent = color.stop

        marker.style.left = `${color.stop * 3}px`

        marker.append(markerHelper)
        levelsBar.append(marker)

        $(marker).draggable({
          axis: 'x',
          containment: '.stops',

          drag: () => {
            const data = {
              id: marker.getAttribute('refId'),
              stopLevel: Math.floor($(marker).position().left / 2.98)
            }

            marker.style.cursor = 'grabbing'
            markerHelper.textContent = color.stop
            dispatch('editStopLevel', data)
          },

          stop: () => {
            marker.style.cursor = 'grab'
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
      dispatch('buildGradient')
      dispatch('buildMarkers')
    },

    editDirection ({ commit, dispatch, getters }, direction) {
      const type = getters.getGradientType
      if (type === 'linear') {
        commit('editDirection', direction)
        dispatch('buildGradient')
      }
    },

    addColor ({ commit, dispatch, getters }) {
      const numberOfColors = getters.getNumberOfColors

      if (numberOfColors < 4) {
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

    getGradientDirection (state) {
      return state.gradient.direction
    },

    getGradientName (state) {
      return state.gradient.name
    },

    getGradientId (state) {
      return state.gradient.id
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
