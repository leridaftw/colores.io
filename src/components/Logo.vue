<template>
  <div>
    <img src="@/assets/logo.svg">
    <h1>Colores</h1>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/master';

div {
  display: flex;
  align-items: center;
}

h1 {
  margin-top: 0.2em;
  margin-left: 0.4em;
  font-family: $font-secondary;
  background: -webkit-linear-gradient($pink, $orange);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
