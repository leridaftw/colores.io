<template>
  <article class="card flex column">
    <Gradient :data="data" />
    <div class="info flex column align-start">
      <h4>Name</h4>
      <div class="flex full-width">
        <button>
          <i class="far fa-heart"></i>
          <p></p>
        </button>
        <button class="flex">
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
  },

  watch: {
    data: {
      immediate: true,
      deep: true,
      handler (value) {
        console.log(value)
      }
    }
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

  &:hover {
    transform: scale(1);
    box-shadow: 0 1em 1em rgba(0, 0, 0, 0.05);
  }
}

.gradient {
  width: 140px;
  height: 140px;
  border-radius: 100em;
  margin-bottom: 4.5em;
  box-shadow: 0 0 0 0.4em lighten($grey, 2);
}

h4 {
  margin-bottom: 1em;
  text-align: center;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
}

button {
  width: 100%;
  height: 48px;
  background: none;
  border: 0;
  border-top: 1px solid $grey;

  &:first-child {
    width: 60%;
    border-right: 1px solid $grey;
  }

  &:last-child i {
    position: relative;
    top: -1px;
    margin-right: 0.5em;
  }

  i {
    font-size: 18px;
  }
}

.info {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
