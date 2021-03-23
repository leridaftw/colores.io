<template>
  <div class="view">
    <Header />
    <main>
      <Card />
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
  }
}
</script>
