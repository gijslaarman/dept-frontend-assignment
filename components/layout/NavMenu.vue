<template>
  <div class="nav__menu">
    <div class="wrapper">
      <div class="container">
        <nav>
          <ul>
            <li v-for="{ name, link } in menuItems" :key="name">
              <NuxtLink :to="link" @click.native="toggleMenu">{{
                name
              }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',

  props: {
    isMenuActive: Boolean,
  },

  data() {
    return {
      menuItems: this.$store.state['menu-items'].list,
    }
  },

  methods: {
    toggleMenu() {
      this.$emit('toggleMenu')
    },
  },
}
</script>

<style lang="scss">
.nav__menu {
  overflow-y: auto;
  padding-top: 6em;
  font-size: 1rem;
  z-index: 999;
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  visibility: hidden;
  height: 100vh;
  width: 100%;
  background-color: $black;
  transition: 200ms linear;
  transition-property: opacity, visibility;
  padding-bottom: 6em; // This is a friendly fix for touch devices/mobile browsers not being able to see the full text at the bottom of the nav if the menu was larger than the viewport.

  .wrapper {
    transform: scale(1.05);
    transition-property: transform;
    transition: 200ms linear;
  }

  @include for-tablet-landscape-up {
    font-size: 2rem; // Double the font size, everything is set up with 'em' values to scale accordingly.
  }

  @include for-desktop-up {
    border: 20px solid $white;
    height: 100vh;
  }

  nav {
    ul {
      padding: 0;

      li {
        padding: 0;
        margin: 0;
        list-style: none;
        line-height: 3.125em;
        height: calc(3.125em + 1px);
        color: $white;
        text-align: right;
        border-bottom: 1px solid rgba($grey, 0.5);

        &:last-of-type {
          border: none;
        }

        a {
          display: block;
          font-family: 'Teko';
          color: $white;
          padding-top: 0.05em;
          font-size: 3.125em;
          text-decoration: none;
          text-transform: uppercase;
          transition: 200ms linear;
          transition-property: color;

          &:hover {
            color: $grey;

            &.nuxt-link-exact-active:before {
              background-color: $grey;
            }
          }
        }
      }
    }
  }
  .nuxt-link-exact-active:before {
    content: '';
    display: inline-block;
    background-color: $white;
    width: 0.28em;
    height: 0.36em;
    margin-right: 0.2em;
    margin-bottom: 0.125em;
    mask: url('~assets/icons/triangle.svg');
    mask-size: cover;
    -webkit-mask: url('~assets/icons/triangle.svg');
    -webkit-mask-size: cover;
    transition: 200ms linear background-color;
  }
}

.menu-active {
  .nav__menu {
    opacity: 1;
    visibility: visible;

    .wrapper {
      transform: scale(1);
    }
  }
}
</style>
