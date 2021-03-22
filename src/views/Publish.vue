<template>
  <main>
    <section>
      <Card />
    </section>
    <section>
      <h2>Give it a name</h2>
      <input type="text">

      <div class="buttons">
        <button>Confirm</button>
        <button>Close</button>
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
  }
}
</script>

<style lang="scss" scoped>

</style>
