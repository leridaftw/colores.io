<template>
  <div class="view">
    <Header />
    <main class="content full-width full-height flex between reverse">
      <div class="flex column">
        <Gradient :data="sphereCss" class="sphere" />
        <Levels class="levels" :data="levelsCss" />
      </div>
      <div class="panel">
        <AddColor @handleAddColor="handleAddColor" />
        <ul>
          <li
            class="flex start"
            v-for="color in this.$store.getters['gradientBuilder/getGradientColors']"
            :key="color.id"
          >
            <ColorField
              :color="color"
              @handleEditColor="handleEditColor"
              @handleRemoveColor="handleRemoveColor"
            />
          </li>
        </ul>

        <EditType @handleEditType="handleEditType" />

        <p> {{ sphereCss }} </p>

        <div class="direction">
          <button refDirection="to top left" @click="handleEditDirection">Top left</button>
          <button refDirection="to top" @click="handleEditDirection">Top</button>
          <button refDirection="to top right" @click="handleEditDirection">Top right</button>
          <button refDirection="to left" @click="handleEditDirection">Left</button>
          <button refDirection="to right" @click="handleEditDirection">Right</button>
          <button refDirection="to bottom left" @click="handleEditDirection">Bottom left</button>
          <button refDirection="to bottom" @click="handleEditDirection">Bottom</button>
          <button refDirection="to bottom right" @click="handleEditDirection">Bottom right</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import Gradient from '@/components/common/Gradient'
import AddColor from '@/components/views/create/AddColor'
import ColorField from '@/components/views/create/ColorField'
import EditType from '@/components/views/create/EditType'
import Levels from '@/components/views/create/Levels'

export default {
  name: 'New',

  components: {
    Header,
    AddColor,
    ColorField,
    EditType,
    Gradient,
    Levels
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
      const direction = e.target.getAttribute('refDirection')
      this.$store.dispatch('gradientBuilder/editDirection', direction)
    },

    handleAddColor () {
      this.$store.dispatch('gradientBuilder/addColor')
    },

    handleRemoveColor (e) {
      const id = e.currentTarget.getAttribute('refId')
      this.$store.dispatch('gradientBuilder/removeColor', id)
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
  padding: 0 12em;
}

.panel {
  max-width: 420px;
}

.sphere {
  width: 420px;
  height: 420px;
  border-radius: 1000em;
}

ul {
  margin: 1em 0;
}

li:first-child {
  border-top: 1px solid $grey;
}

li {
  padding: 0.5em 0;
  border-bottom: 1px solid $grey;
}

.types {
  .field {
    margin-left: 1em;
    cursor: pointer;

    &:first-child {
      margin-left: 0;
    }

    input {
      cursor: pointer;
    }

    label {
      font-size: 14px;
      padding-left: 0.5em;
      cursor: pointer;
    }
  }
}
</style>
