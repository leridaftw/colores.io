<template>
  <div class="view">
    <Header />
    <main>
      <ul>
        <li v-for="gradient in gradients" :key="gradient.id">
          <Card :data="gradient.gradient" :name="gradient.name"/>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import Card from '@/components/common/Card'

export default {
  name: 'Home',

  components: {
    Header,
    Card
  },

  created () {
    this.$store.dispatch('gradients/loadGradients')
  },

  computed: {
    gradients () {
      return this.$store.getters['gradients/getGradients']
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  width: 100%;
  z-index: 2;
  background: white;
}

main {
  padding: 1em;
  padding-top: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
}

ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

li {
  margin: 0.5em;
}

.card {
  box-shadow: none;
}
</style>
