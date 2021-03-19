import Vue from 'vue'
import Vuex from 'vuex'

import { gradientBuilder } from './modules/gradientBuilder'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    gradientBuilder
  }
})
