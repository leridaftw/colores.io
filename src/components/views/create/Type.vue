<template>
  <article class="types flex column align-start">
    <h3>Type</h3>
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
  margin-top: 1.5em;
}

.types {
  margin-bottom: 1em;
}

h3 {
  font-size: 16px;
  margin-bottom: 0.5em;
  opacity: 0.5;
}

.field:last-child {
  margin-left: 1em
}

input {
  cursor: pointer;
  transform: scale(1.2);
}

label {
  font-size: 14px;
  font-weight: 600;
  padding-left: 0.5em;
  cursor: pointer;
}

@media (max-width: 920px) {
  h3 {
    margin: 0 auto;
  }

  .flex {
    width: 100%;
  }
}
</style>
