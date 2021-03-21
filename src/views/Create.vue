<template>
  <main class="view">
    <Header />
    <div class="content full-width full-height flex between reverse">
      <div class="flex column">
        <Gradient :data="sphereCss" class="sphere" />
        <Levels class="levels" :data="levelsCss" />
      </div>
      <div class="panel">
        <button
          class="buttonAddColor flex"
          @click="handleAddColor"
        >
          <i class="fas fa-plus" />
          <p>Color</p>
        </button>
        <ul>
          <li
            class="flex start"
            v-for="color in this.$store.getters['gradientBuilder/getGradientColors']"
            v-bind:key="color.id"
          >
            <input
              type="color"
              :refId="color.id"
              refProperty="hex"
              :value="'#' + color.hex"
              @input="handleEditColor"
            >
            <div class="input flex">
              <input
                type="text"
                maxlength="6"
                minlength="6"
                :value="color.hex"
                :refId="color.id"
                refProperty="hex"
                @input="handleEditColor"
              >
              <i class="fas fa-hashtag flex"></i>
            </div>
            <div class="input flex">
              <input
                type="number"
                maxlength="3"
                minlength="1"
                max="100"
                min="0"
                :refId="color.id"
                refProperty="stop"
                :value="color.stop"
                @input="handleEditColor"
              >
              <i class="fas fa-percentage flex"></i>
            </div>
            <button
              class="buttonRemoveColor"
              :refId="color.id"
              @click="handleRemoveColor"
            >
            <i class="fas fa-times"/>
            </button>
          </li>
        </ul>

        <div class="types flex start">
          <div class="field flex">
            <input
              type="radio"
              name="type"
              refType="linear"
              checked
              id="linear"
              @click="handleEditType"
            >
            <label for="linear">Linear</label>
          </div>
          <div class="field flex">
          <input
            type="radio"
            name="type"
            id="radial"
            refType="radial"
            @click="handleEditType"
          >
          <label for="radial">Radial</label>
          </div>
        </div>

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
    </div>
  </main>
</template>

<script>
import Header from '@/components/Header'
import Gradient from '@/components/Gradient'
import Levels from '@/components/Levels'

export default {
  name: 'New',

  components: {
    Header,
    Gradient,
    Levels
  },

  created () {
    this.$store.dispatch('gradientBuilder/buildGradient')
  },

  methods: {
    handleEditColor (e) {
      const data = {
        id: e.target.getAttribute('refId'),
        property: e.target.getAttribute('refProperty'),
        value: e.target.value.replace('#', '')
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
      const id = e.target.getAttribute('refId')
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
  width: 360px;
  height: 360px;
  border-radius: 1000em;
}

.levels {
  margin-top: 2em;
  width: 300px;
  height: 19px;
}

.buttonAddColor {
  border-radius: 100px;
  border: 0;
  font-size: 18px;
  background: -webkit-linear-gradient($pink, $orange);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: .7;
  transition: 0.25s ease;

  &:hover {
    opacity: 1;
  }

  p {
    margin-left: 0.5em;
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
  }
}

.buttonRemoveColor {
  position: relative;
  top: 0.1em;
  font-size: 18px;
  padding: 0 0.5em;
  margin-bottom: 0.2em;
  background: none;
  border: 0;
  opacity: 0.5;
  background: -webkit-linear-gradient($pink, $orange);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: 0.25s ease;

  &:hover {
    opacity: 1;
  }
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

.input {
  position: relative;

  i {
    position: absolute;
    left: 0.5em;
    height: 100%;
    width: 2em;
    border-top-left-radius: 0.3em;
    border-bottom-left-radius: 0.3em;
    color: rgba(0, 0, 0, 0.2);
  }
}

input[type="color"], input[type="text"], input[type="number"], .buttonRemoveColor {
  height: 100%
}

input[type="text"], input[type="number"] {
  margin: 0 0.5em;
  padding: 0.25em;
  border-radius: 0.25em;
  color: $black;
  letter-spacing: 0.05em;
  font-size: 16px;
  padding-left: 1.8em;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

input[type="color"] {
  border: 0;
  width: 60px;
  height: 38px;
  padding: 0;
  margin-right: 0.5em;
  background: none;
  cursor: crosshair;
}

input[type="text"] {
  position: relative;
  width: 120px;
  text-transform: uppercase;
}

input[type="number"] {
  width: 90px;
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
      margin-left: 0.5em;
      cursor: pointer;
    }
  }
}
</style>
