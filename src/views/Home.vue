<template>
  <div class="view">
    <Header />
    <main>
      <ul>
        <div class="loader" v-if="gradients.length === 0">
           <img src="@/assets/logo.svg">
        </div>
        <li v-for="gradient in gradients" :key="gradient.id">
          <Card class="card" :data="gradient.gradient" :name="gradient.name" :id="gradient.id"/>
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

.loader {
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 120px;
    height: 120px;
    animation: rotate 3s infinite forwards;
  }
}

main {
  padding-top: 4em;
  padding-bottom: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1440px;
  margin: 0 auto;
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

@keyframes rotate {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}
</style>
