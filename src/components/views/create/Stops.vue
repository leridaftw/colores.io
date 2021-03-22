<template>
  <div class="stops" :style="data"></div>
</template>

<script>
export default {
  name: 'Stops',

  props: {
    data: String
  },

  mounted () {
    this.$store.dispatch('gradientBuilder/buildMarkers')
  }
}
</script>

<style lang="scss">
@import '@/scss/master';

.stops {
  position: relative;
  width: 300px;
  height: 19px;
  border-radius: 1em;

  .marker {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 2;
    top: 2em;
    width: 1px;
    height: 1.8em;
    color: white;
    font-size: 14px;
    border-radius: 0.25em;
    cursor: grab;

    .marker-helper {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.25em;
      background: $black;
      width: 3em;
      height: 30px;
      color: white;

      &::before {
        content: '';
        position: absolute;
        display: block;    
        width: 0px;        
        left: 50%;
        top: 0.4em;
        border: 6px solid transparent;
        border-top: 0;
        border-bottom: 6px solid $black;
        transform: translate(-50%, calc(-100% - 5px));
      }
    }
  }
}
</style>
