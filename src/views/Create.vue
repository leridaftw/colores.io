<template>
  <div class="view">
    <Header />
    <main class="content full-width full-height flex between reverse">
      <div class="flex column">
        <div class="sphere-wrapper flex">
          <Gradient :data="sphereCss" class="sphere" />
          <Direction
            v-if="$store.getters['gradientBuilder/getGradientType'] === 'linear'"
            @handleEditDirection="handleEditDirection"
          />
        </div>
        <Stops class="levels" :data="levelsCss" />
      </div>
      <div class="panel">
        <Add @handleAddColor="handleAddColor" />
        <ul>
          <li
            class="flex justify-start"
            v-for="color in this.$store.getters['gradientBuilder/getGradientColors']"
            :key="color.id"
          >
            <Color
              :color="color"
              @handleEditColor="handleEditColor"
              @handleRemoveColor="handleRemoveColor"
            />
          </li>
        </ul>

        <Type @handleEditType="handleEditType" />
        <GeneratedCSS @handleCopyCSS="handleCopyCSS" :data="sphereCss" />
      </div>
    </main>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import Gradient from '@/components/common/Gradient'
import Add from '@/components/views/create/Add'
import Color from '@/components/views/create/Color'
import Type from '@/components/views/create/Type'
import Direction from '@/components/views/create/Direction'
import GeneratedCSS from '@/components/views/create/GeneratedCSS'
import Stops from '@/components/views/create/Stops'

export default {
  name: 'New',

  components: {
    Header,
    Add,
    Color,
    Type,
    Direction,
    Gradient,
    GeneratedCSS,
    Stops
  },

  created () {
    this.$store.dispatch('gradientBuilder/buildGradient')
  },

  methods: {
    handleEditColor (e) {
      const data = {
        id: e.currentTarget.getAttribute('refId'),
        property: e.currentTarget.getAttribute('refProperty'),
        value: e.currentTarget.value.replace('#', '')
      }
      this.$store.dispatch('gradientBuilder/editGradient', data)
    },

    handleEditType (e) {
      const type = e.target.getAttribute('refType')
      this.$store.dispatch('gradientBuilder/editType', type)
    },

    handleEditDirection (e) {
      const direction = e.currentTarget.getAttribute('refDirection')
      this.$store.dispatch('gradientBuilder/editDirection', direction)
    },

    handleAddColor () {
      this.$store.dispatch('gradientBuilder/addColor')
    },

    handleRemoveColor (e) {
      const id = e.currentTarget.getAttribute('refId')
      this.$store.dispatch('gradientBuilder/removeColor', id)
    },

    handleCopyCSS () {
      const generatedCss = document.querySelector('textarea')
      generatedCss.select()
      document.execCommand('copy')
    }
  },

  computed: {
    sphereCss () {
      return this.$store.getters['gradientBuilder/getSphereCss']
    },
    levelsCss () {
      return this.$store.getters['gradientBuilder/getLevelsCss']
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/master';

.content {
  padding: 0 2em;
  max-width: 1024px;
  margin: 0 auto;
}

.panel {
  max-width: 420px;
}

.sphere-wrapper {
  position: relative;
  top: -2em;
  height: 420px;

  &:hover .direction {
    opacity: 1;
    width: 180px;
    height: 180px;
  }
}

.sphere {
  width: 420px;
  height: 420px;
  border-radius: 1000em;
}

ul {
  margin: 1em 0;
  border-bottom: 1px solid $grey;
}

li:first-child {
  border-top: 1px solid $grey;
}

li:last-child {
  border-bottom: 0;
}

li {
  padding: 0.5em 0;
  border-bottom: 1px solid $grey;
}
</style>
