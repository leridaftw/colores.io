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
  margin-top: 2em;
  width: 300px;
  height: 19px;

  .marker {
    position: absolute;
    width: 1px;
    color: red;
    background: yellow;
    cursor: grab;
  }
}

</style>
