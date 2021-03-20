<template>
  <div class="levels" :style="data"></div>
</template>

<script>
export default {
  name: 'Levels',

  props: {
    data: String
  },

  mounted () {
    this.$store.dispatch('gradientBuilder/buildMarkers')
  }
}
</script>

<style>
.marker {
  position: absolute;
  width: 1px;
  color: red;
  background: yellow;
  cursor: grab;
}
</style>
