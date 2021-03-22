<template>
  <article>
    <h3>Generated CSS</h3>
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

  .generated-css-wrapper {
    border-radius: 0.5em;
    padding: 1em;
    background: $grey;
    border: 1px solid darken($grey, 10);
  }

  p {
    color: $black;
    font-family: bitmap;
  }
}
</style>
