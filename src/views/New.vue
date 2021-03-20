<template>
  <div class="view">
    <h1>New</h1>
    <Gradient :data="gradientCss" />
    <ul>
      <li
        v-for="color in this.$store.getters['gradientBuilder/getGradientColors']"
        v-bind:key="color.id"
      >
        <input
          :refId="color.id"
          refProperty="hex"
          :value="color.hex"
          @keyup="handleInput"
        >
        <input
          :refId="color.id"
          refProperty="stop"
          :value="color.stop"
          @keyup="handleInput"
        >
      </li>
    </ul>
  </div>
</template>

<script>
import Gradient from '@/components/Gradient'

export default {
  name: 'New',

  components: {
    Gradient
  },

  created () {
    this.$store.dispatch('gradientBuilder/buildGradientCss')
  },

  methods: {
    handleInput (e) {
      const data = {
        id: e.target.getAttribute('refId'),
        property: e.target.getAttribute('refProperty'),
        value: e.target.value
      }
      this.$store.dispatch('gradientBuilder/editGradient', data)
    }
  },

  computed: {
    gradientCss () {
      return this.$store.getters['gradientBuilder/getGradientCss']
    }
  }
}
</script>

<style scoped>
div {
  width: 90px;
  height: 90px;
}
</style>
