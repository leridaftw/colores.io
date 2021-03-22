<template>
  <article class="types flex column align-start">
    <h3>Gradient type</h3>
    <div class="flex">
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
  </article>
</template>

<script>
export default {
  name: 'ChangeType'
}
</script>

<style lang="scss" scoped>
@import '@/scss/master';

article {
  margin-top: 1em;
}

.types {
  margin-bottom: 1em;
}

h3 {
  font-size: 16px;
  margin-bottom: 0.5em;
}

.field:last-child {
  margin-left: 1em
}

.field:hover label {
  opacity: 1;
}

input {
  cursor: pointer;
  transform: scale(1.2);
}

label {
  font-size: 14px;
  font-weight: 600;
  padding-left: 0.5em;
  background: -webkit-linear-gradient($pink, $orange);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.7;
  cursor: pointer;
  transition: 0.3s ease;
}
</style>
