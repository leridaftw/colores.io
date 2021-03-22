<template>
  <div class="field flex">
    <input
      type="color"
      :refId="color.id"
      refProperty="hex"
      :value="'#' + color.hex"
      @input="$emit('handleEditColor', $event)"
    >
    <div class="field flex">
      <input
        type="text"
        maxlength="6"
        minlength="6"
        :value="color.hex"
        :refId="color.id"
        refProperty="hex"
        @input="$emit('handleEditColor', $event)"
      >
      <i class="fas fa-hashtag flex input-icon"></i>
    </div>
    <div class="field flex">
      <input
        type="number"
        maxlength="3"
        minlength="1"
        max="100"
        min="0"
        :refId="color.id"
        refProperty="stop"
        :value="color.stop"
        @input="$emit('handleEditColor', $event)"
      >
      <i class="fas fa-percentage flex input-icon"></i>
    </div>
    <button
      class="buttonRemoveColor"
      :refId="color.id"
      @click="$emit('handleRemoveColor', $event)"
    >
    <i class="fas fa-times"/>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ColorField',

  props: {
    color: Object
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/master';

.field {
  position: relative;

  .input-icon {
    position: absolute;
    left: 0.5em;
    height: 100%;
    width: 2em;
    border-top-left-radius: 0.3em;
    border-bottom-left-radius: 0.3em;
    color: rgba(0, 0, 0, 0.2);
  }
}

input[type="color"], input[type="text"], input[type="number"], .buttonRemoveColor {
  height: 100%
}

input[type="text"], input[type="number"] {
  margin: 0 0.5em;
  padding: 0.25em;
  border-radius: 0.25em;
  color: $black;
  letter-spacing: 0.05em;
  font-size: 16px;
  padding-left: 1.8em;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

input[type="color"] {
  border: 0;
  width: 60px;
  height: 38px;
  padding: 0;
  margin-right: 0.5em;
  background: none;
  cursor: crosshair;
}

input[type="text"] {
  position: relative;
  width: 120px;
  text-transform: uppercase;
}

input[type="number"] {
  width: 90px;
}

.buttonRemoveColor {
  position: relative;
  top: 0.1em;
  font-size: 18px;
  padding: 0 0.5em;
  margin-bottom: 0.2em;
  background: none;
  border: 0;
  opacity: 0.5;
  background: -webkit-linear-gradient($pink, $orange);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: 0.25s ease;

  &:hover {
    opacity: 1;
  }
}
</style>
