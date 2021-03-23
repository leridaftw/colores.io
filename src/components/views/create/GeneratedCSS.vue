<template>
  <article>
    <div class="row flex between">
      <h3>Generated CSS</h3>
      <span>
        <i class="far fa-clipboard" @click="$emit('handleCopyCSS')" />
        <p>Copied!</p>
      </span>
    </div>
    <div class="generated-css-wrapper">
      <textarea v-model="data" name="" id="" cols="30" rows="10" readonly />
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
  opacity: 0.5;
}

i {
  position: relative;
  top: -2px;
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

span {
  position: relative;

  &:active p {
    opacity: 1;
  }

  p {
    position: absolute;
    z-index: 2;
    top: -2.8em;
    left: -0.7em;
    margin-left: 0.5em;
    padding: 0.5em;
    border-radius: 0.25em;
    font-family: $font-primary;
    font-size: 12px;
    color: white;
    background: $black;
    -webkit-background-clip: unset;
    -webkit-text-fill-color: unset;
    pointer-events: none;
    opacity: 0;

    &::after {
      content: '';
        position: absolute;
        display: block;
        width: 0px;
        left: 50%;
        bottom: -1.4em;
        border: 6px solid transparent;
        border-top: 6px solid $black;
        border-bottom: 0;
        transform: translate(-50%, calc(-100% - 5px));
    }
  }
}

.generated-css-wrapper {
  border-radius: 0.5em;
  padding: 1em;
  background: $grey;
  border: 1px solid darken($grey, 10);
}

textarea {
  color: $black;
  font-family: Consolas;
  width: 100%;
  background: 0;
  resize: none;
  border: 0;
  max-height: 40px;
}

@keyframes opacity {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
