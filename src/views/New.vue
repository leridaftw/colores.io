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
          :data-id="color.id"
          :value="color.hex"
          @keyup="handleInputColor($event)"
        >
        <input
          :data-id="color.id"
          :value="color.stop"
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
    handleInputColor (e) {
      const data = {
        id: e.target.getAttribute('data-id'),
        color: e.target.value
      }
      this.$store.dispatch('gradientBuilder/editGradientColor', data)
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
