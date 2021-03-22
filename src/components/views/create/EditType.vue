<template>
  <div class="types flex start">
    <div class="field flex">
      <input
        type="radio"
        name="type"
        refType="linear"
        checked
        id="linear"
        @click="$emit('handleEditType', $event)"
      >
      <label for="linear">Linear</label>
    </div>
    <div class="field flex">
    <input
      type="radio"
      name="type"
      id="radial"
      refType="radial"
      @click="$emit('handleEditType', $event)"
    >
    <label for="radial">Radial</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChangeType'
}
</script>

<style lang="scss" scoped>

</style>
