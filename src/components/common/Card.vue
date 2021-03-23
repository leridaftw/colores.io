<template>
  <article class="card flex column">
    <Gradient :data="data" />
    <div class="info flex column align-start">
      <h4>{{ name }}</h4>
      <div class="flex full-width">
        <button class="flex" :refId="id">
          <i class="fas fa-clipboard"/>
          <p>Copy CSS</p>
        </button>
      </div>
    </div>
  </article>
</template>

<script>
import Gradient from '@/components/common/Gradient'

export default {
  name: 'Card',

  props: {
    data: String,
    name: String
  },

  components: {
    Gradient
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/master';

article {
  height: 280px;
  width: 220px;
  border: 1px solid $grey;
  border-radius: 0.5em;
  position: relative;
  transform: scale(0.9);
  transition: 0.3s ease;
  transform: scale(1);
  box-shadow: 0 1em 1em rgba(0, 0, 0, 0.05);
}

.gradient {
  width: 140px;
  height: 140px;
  border-radius: 100em;
  margin-bottom: 4.5em;
}

h4 {
  width: 100%;
  margin-bottom: 1.25em;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  text-transform: capitalize;
}

button {
  width: 100%;
  height: 48px;
  background: none;
  border: 0;
  border-top: 1px solid $grey;
  font-weight: 600;

  * {
    opacity: 0.5;
  }

  &:hover * {
    opacity: 1;
    background: -webkit-linear-gradient($pink, $orange);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  i {
    margin-right: 0.5em;
    font-size: 18px;
  }
}

.info {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
