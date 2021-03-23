<template>
  <main class="publish flex between">
    <section>
      <Card :data="sphereCss" :name="gradientName" />
    </section>
    <section class="confirm">
      <h2>Name</h2>
      <input v-model="gradientName" type="text" maxlength="18" autofocus>

      <div class="buttons">
        <button
          @click="handlePublish"
          :style="[gradientName.length > 0? {} : {opacity: 0.5, pointerEvents: 'none'}]"
        >
          <i class="fas fa-check"></i>
          Confirm
        </button>
        <button @click="$router.push('/create')">
          <i class="fas fa-angle-left"></i>
          Go back
        </button>
      </div>
    </section>
  </main>
</template>

<script>
import firebase from 'firebase'
import Card from '@/components/common/Card'

export default {
  name: 'Publish',

  components: {
    Card
  },

  methods: {
    handlePublish () {
      const data = {
        id: this.$store.getters['gradientBuilder/getGradientId'],
        gradient: this.$store.getters['gradientBuilder/getSphereCss'],
        name: this.$store.getters['gradientBuilder/getGradientName']
      }
      const database = firebase.database()
      const ref = database.ref('gradients')
      ref.push(data)
    }
  },

  computed: {
    sphereCss () {
      return this.$store.getters['gradientBuilder/getSphereCss']
    },

    gradientName: {
      get () {
        return this.$store.getters['gradientBuilder/getGradientName']
      },

      set (name) {
        this.$store.commit('gradientBuilder/setGradientName', name)
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/scss/master';

.publish {
  max-width: 500px;
  margin: 0 auto;
  height: 100vh;

  .card {
    button * {
      opacity: 0.5;
    }

    button {
      pointer-events: none;
    }
  }

  h2 {
    font-size: 24px;
    font-weight: 600;
    color: lighten($pink, 30);
  }

  input {
    margin: 1em 0;
    padding: 0.8em 0.5em;
    border: 1px solid darken($grey, 10);
    border-radius: 0.5em;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    text-transform: capitalize;
  }

  .buttons {
    margin-top: 0.5em;
  }

  .confirm {
    button {
      width: 100%;
      padding: 1em 0;
      font-weight: 600;
      border-radius: 0.5em;

      i {
        font-size: 18px;
        position: relative;
        top: 2px;
        margin-right: 0.25em;
      }

      &:active {
        position: relative;
        top: 3px;
      }

      &:first-child {
        color: white;
        background: lighten($pink, 30);
        border: 1px solid lighten($pink, 20);
        box-shadow: 0 3px 0 lighten($pink, 20);

        &:hover, &:focus {
          background: lighten($pink, 20);
          border-color: lighten($pink, 10);
          box-shadow: 0 3px 0 lighten($pink, 10);
        }

        &:active {
          box-shadow: 0 0 0 darken($grey, 20);
        }
      }

      &:last-child {
        color: darken($grey, 50);
        margin-top: 1em;
        background: $grey;
        border: 1px solid darken($grey, 20);
        box-shadow: 0 3px 0 darken($grey, 20);

        &:hover, &:focus {
          color: $black;
          background: darken($grey, 10);
          border-color: darken($grey, 30);
          box-shadow: 0 3px 0 darken($grey, 30);
        }

        &:active {
          box-shadow: 0 0 0 darken($grey, 20);
        }
      }
    }
  }
}
</style>
