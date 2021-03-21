<template>
  <main class="view">
    <h1>New</h1>
    <Gradient :data="sphereCss" />
    <button @click="handleAddColor">+</button>
    <ul>
      <li
        v-for="color in this.$store.getters['gradientBuilder/getGradientColors']"
        v-bind:key="color.id"
      >
        <input
          type="color"
          :refId="color.id"
          :value="'#' + color.hex"
          >
        <input
          type="text"
          :refId="color.id"
          refProperty="hex"
          :value="color.hex"
          @keyup="handleEditProp"
        >
        <input
          type="number"
          :refId="color.id"
          refProperty="stop"
          :value="color.stop"
          @keyup="handleEditProp"
        >

        <button
          :refId="color.id"
          @click="handleRemoveColor"
        >
        Remove
        </button>
      </li>
    </ul>

    <Levels class="levels" :data="levelsCss" />

    <form>
      <div class="field">
        <input
          type="radio"
          name="type"
          refType="linear"
          checked
          @click="handleEditType"
        >
        <p>Linear</p>
      </div>
      <div class="field">
      <input
        type="radio"
        name="type"
        refType="radial"
        @click="handleEditType"
      >
      <p>Radial</p>
      </div>
    </form>
  </main>
</template>

<script>
import Gradient from '@/components/Gradient'
import Levels from '@/components/Levels'

export default {
  name: 'New',

  components: {
    Gradient,
    Levels
  },

  created () {
    this.$store.dispatch('gradientBuilder/buildGradient')
  },

  methods: {
    handleEditProp (e) {
      const data = {
        id: e.target.getAttribute('refId'),
        property: e.target.getAttribute('refProperty'),
        value: e.target.value
      }
      this.$store.dispatch('gradientBuilder/editGradient', data)
    },

    handleEditType (e) {
      const type = e.target.getAttribute('refType')
      this.$store.dispatch('gradientBuilder/editType', type)
    },

    handleAddColor () {
      this.$store.dispatch('gradientBuilder/addColor')
    },

    handleRemoveColor (e) {
      const id = e.target.getAttribute('refId')
      this.$store.dispatch('gradientBuilder/removeColor', id)
    }
  },

  computed: {
    sphereCss () {
      return this.$store.getters['gradientBuilder/getSphereCss']
    },
    levelsCss () {
      return this.$store.getters['gradientBuilder/getLevelsCss']
    }
  }
}
</script>

<style scoped>
div {
  width: 90px;
  height: 90px;
}

.levels {
  width: 300px;
  height: 30px;
}
</style>
