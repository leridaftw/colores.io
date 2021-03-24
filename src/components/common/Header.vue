<template>
  <header>
    <nav class="flex between">
      <div class="full-height flex">
        <router-link to="/" class="flex">
          <div>
            <img src="@/assets/logo.svg">
            <h1>Colores</h1>
          </div>
        </router-link>

        <div class="path full-height flex">
          <span class="placeholder flex">
            <h2>Gradients</h2>
            <i class="fas fa-angle-down" />
          </span>
          <!-- <span class="selector flex">
            <h3>Random</h3>
            <i class="fas fa-angle-down" />
          </span> -->
        </div>
      </div>

      <router-link v-if="$route.name === 'Home'" to="/create" class="flex">
        <i class="fas fa-plus flex"></i>
      </router-link>
      <router-link v-if="$route.name === 'Create'" to="/publish" class="flex">
        <button :style="{marginRight: '4em'}">Publish</button>
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
@import '@/scss/master';

header {
  height: 50px;
  padding: 0 2em;
  border-bottom: 1px solid $grey;
  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.05);
  overflow: hidden;

  div {
    display: flex;
    align-items: center;
  }

  h1 {
    margin-top: 0.2em;
    margin-left: 0.4em;
    font-family: $font-secondary;
    background: -webkit-linear-gradient($pink, $orange);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  nav {
    height: 100%;
    max-width: $desktop;
    margin: 0 auto;

    button {
      padding: 0.5em 1em;
      background: none;
      border: 1px solid $pink;
      border-radius: 0.25em;
      font-weight: 600;
      background: -webkit-linear-gradient($pink, $orange);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      &:hover {
        background: -webkit-linear-gradient($pink, $orange);
        -webkit-background-clip: unset;
        -webkit-text-fill-color: unset;
        color: white;
      }
    }
  }

  a {
    height: 100%;
  }

  a:last-child {
    width: 2em;
  }

  img {
    width: 24px;
    height: 36px;
  }

  h1 {
    font-size: 21px;
  }

  i {
    font-size: 18px;
    background: -webkit-linear-gradient($pink, $orange);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .path {
    position: relative;
    top: 0.15em;
    height: 100%;
    margin-left: 1.5em;

    .placeholder {
      opacity: 0.5;
    }

    .selector {
      height: 100%;
      cursor: pointer;
    }

    h2, h3 {
      font-weight: 600;
      font-size: 13px;
    }

    i:first-child {
      opacity: 0.5;
    }

    i {
      padding: 0 0.5em;
    }
  }
}

@media (max-width: 920px) {
  header {
    padding: 1em;
  }
}
</style>
