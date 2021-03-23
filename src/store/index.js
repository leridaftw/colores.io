import Vue from 'vue'
import Vuex from 'vuex'

import { gradientBuilder } from './modules/gradientBuilder'
import { gradients } from './modules/gradients'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    gradientBuilder,
    gradients
  }
})
