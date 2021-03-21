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

<style lang="scss">
.levels {
  position: relative;

  .marker {
    position: absolute;
    width: 1px;
    color: red;
    background: yellow;
    cursor: grab;
  }
}

</style>
