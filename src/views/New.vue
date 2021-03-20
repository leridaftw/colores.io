<template>
  <div class="view">
    <h1>New</h1>
    <div :style="gradientCss"></div>
  </div>
</template>

<script>
// import Gradient from '@/components/Gradient'

export default {
  name: 'New',

  components: {
    // Gradient
  },

  created () {
    this.$store.dispatch('gradientBuilder/buildGradientCss')
  },

  computed: {
    gradientCss: {
      get () {
        return this.$store.getters['gradientBuilder/getGradientCss']
      }
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
