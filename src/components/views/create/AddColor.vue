<template>
  <button
    class="buttonAddColor flex"
    @click="$emit('handleAddColor')"
  >
    <i class="fas fa-plus" />
    <p>Color</p>
  </button>
</template>

<script>
export default {
  name: 'AddColor'
}
</script>

<style lang="scss" scoped>
@import '@/scss/master';

.buttonAddColor {
  border-radius: 100px;
  border: 0;
  font-size: 18px;
  background: -webkit-linear-gradient($pink, $orange);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: .7;
  transition: 0.25s ease;

  &:hover {
    opacity: 1;
  }

  p {
    margin-left: 0.5em;
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
  }
}
</style>
