<template>
  <article>
    <div class="row flex justify-start">
      <h3>Generated CSS</h3>
      <i class="far fa-clipboard"></i>
    </div>
    <div class="generated-css-wrapper">
      <p>{{ data }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'GeneratedCSS',

  props: {
    data: String
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/master';

article {
  margin-top: 1em;
}

h3 {
  font-size: 16px;
}

i {
  position: relative;
  top: -1px;
  margin-left: 0.5em;
  padding: 0.5em;
  font-size: 18px;
  background: -webkit-linear-gradient($pink, $orange);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.5;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
}

.generated-css-wrapper {
  border-radius: 0.5em;
  padding: 1em;
  background: $grey;
  border: 1px solid darken($grey, 10);
}

p {
  color: $black;
  font-family: Consolas;
  user-select: all;
}
</style>
