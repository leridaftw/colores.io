<template>
  <main class="publish flex between">
    <section>
      <Card :data="sphereCss" />
    </section>
    <section>
      <h2>Give it a name</h2>
      <input type="text">

      <div class="buttons">
        <button>Confirm</button>
        <button>Cancel</button>
      </div>
    </section>
  </main>
</template>

<script>
import Card from '@/components/common/Card'

export default {
  name: 'Publish',

  components: {
    Card
  },

  computed: {
    sphereCss () {
      return this.$store.getters['gradientBuilder/getSphereCss']
    }
  }
}
</script>

<style lang="scss">
.publish {
  max-width: 420px;
  margin: 0 auto;

  .card {
    button * {
      opacity: 0.5;
    }

    button {
      pointer-events: none;
    }
  }
}
</style>
