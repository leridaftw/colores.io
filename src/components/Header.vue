<template>
  <header>
    <nav class="flex between">
      <div class="full-height flex">
        <router-link to="/" class="flex">
          <Logo />
        </router-link>

        <div class="path full-height flex">
          <span class="placeholder flex">
            <h2>Gradients</h2>
            <i class="fas fa-angle-right" />
          </span>
          <span class="selector flex">
            <h3>Random</h3>
            <i class="fas fa-angle-down" />
          </span>
        </div>
      </div>

      <router-link to="/create" class="flex">
        <i class="fas fa-plus flex"></i>
      </router-link>
    </nav>
  </header>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  name: 'Header',
  components: {
    Logo
  }
}
</script>

<style lang="scss">
@import '@/scss/master';

header {
  height: 50px;
  padding: 0 1em;
  border-bottom: 1px solid $grey;
  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.05);
  overflow: hidden;

  nav {
    height: 100%;
    max-width: $desktop;
    margin: 0 auto;
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
</style>
