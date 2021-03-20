<template>
  <div :style="css"></div>
</template>

<script>
export default {
  name: 'Gradient',

  props: {
    css: String
  },

  created () {
    console.log(this.$props)
  }
}
</script>
