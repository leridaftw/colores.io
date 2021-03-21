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
          refProperty="hex"
          :value="'#' + color.hex"
          @input="handleEditColor"
        >
        <input
          type="text"
          maxlength="6"
          minlength="6"
          :refId="color.id"
          refProperty="hex"
          :value="color.hex"
          @keyup="handleEditColor"
        >
        <input
          type="number"
          maxlength="3"
          minlength="1"
          :refId="color.id"
          refProperty="stop"
          :value="color.stop"
          @keyup="handleEditColor"
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

    <p> {{ sphereCss }} </p>

    <div class="direction">
      <button refDirection="to top left" @click="handleEditDirection">Top left</button>
      <button refDirection="to top" @click="handleEditDirection">Top</button>
      <button refDirection="to top right" @click="handleEditDirection">Top right</button>
      <button refDirection="to left" @click="handleEditDirection">Left</button>
      <button refDirection="to right" @click="handleEditDirection">Right</button>
      <button refDirection="to bottom left" @click="handleEditDirection">Bottom left</button>
      <button refDirection="to bottom" @click="handleEditDirection">Bottom</button>
      <button refDirection="to bottom right" @click="handleEditDirection">Bottom right</button>
    </div>
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
    handleEditColor (e) {
      const data = {
        id: e.target.getAttribute('refId'),
        property: e.target.getAttribute('refProperty'),
        value: e.target.value.replace('#', '')
      }
      this.$store.dispatch('gradientBuilder/editGradient', data)
    },

    handleEditType (e) {
      const type = e.target.getAttribute('refType')
      this.$store.dispatch('gradientBuilder/editType', type)
    },

    handleEditDirection (e) {
      const direction = e.target.getAttribute('refDirection')
      this.$store.dispatch('gradientBuilder/editDirection', direction)
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
