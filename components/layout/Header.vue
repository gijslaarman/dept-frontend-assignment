<template>
  <header
    class="nav"
    :class="{ active: isActive, 'stick-to-top': scrollPosition > 50 }"
  >
    <div class="container">
      <div class="nav__inner">
        <NuxtLink to="/">
          <DeptLogo title="Dept Logo" class="nav__logo"></DeptLogo>
        </NuxtLink>

        <div class="nav__menu-button-wrapper">
          <button class="nav__menu-button" @click="toggleMenu"></button>
        </div>
      </div>
    </div>

    <NavMenu />
  </header>
</template>

<script>
import NavMenu from './NavMenu'
import DeptLogo from './DeptLogo'

export default {
  name: 'Header',
  components: { NavMenu, DeptLogo },

  data() {
    return {
      isActive: false,
      scrollPosition: null,
    }
  },

  watch: {
    $route() {
      // Watch for route changes, meaning that we clicked a link. The menu should be inactive when that happens.
      this.isActive = false
    },
  },

  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },

  methods: {
    toggleMenu() {
      this.isActive ? (this.isActive = false) : (this.isActive = true)
      this.$emit('toggleScroll', this.isActive)
    },
    updateScroll() {
      // https://stackoverflow.com/questions/59910718/change-background-color-of-navbar-when-scroll-event-with-vuejs
      this.scrollPosition = window.scrollY
    },
  },
}
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  transition: 200ms;
  transition-property: background-color;
}

.nav__logo {
  height: 14px;
  width: auto;
  transition: 200ms height;

  @include for-tablet-landscape-up {
    height: 28px;
  }
}

.nav__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.125rem 0;
  background-color: transparent;
  border-bottom: none;
  transition: 200ms linear;
  transition-property: border-bottom, padding;

  @include for-tablet-landscape-up {
    padding: 2rem 0 1.125rem;
    border-bottom: 1px solid $black;
  }

  @include for-desktop-up {
    padding-top: 3rem;
  }
}

.nav__menu-button-wrapper {
  position: relative;
  width: 20px;
  height: 20px;
}

.nav__menu-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  padding: 16px 10px;
  height: 40px;
  width: 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  // Create bars of the menu
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 2px;
    right: 10px;
    display: block;
    background-color: $black;
    transition: 300ms linear;
    transition-property: transform, background-color;
  }

  &:before {
    top: 16px;
  }

  &:after {
    bottom: 16px;
  }
}

// The page is being scrolled, add a background color to the header & make the logo smaller.
.stick-to-top {
  background-color: rgba($white, 0.5);

  .nav__logo {
    height: 14px;
    margin-bottom: 0;
  }

  .nav__inner {
    @include for-tablet-landscape-up {
      border-bottom: transparent;
      padding: 1.25rem 0;
    }
  }
}

.active {
  background-color: transparent;

  .nav__inner {
    border: none;
  }

  .nav__menu-button {
    // Change the color of the menu bars.
    &:before,
    &:after {
      background: $white;
    }

    &:before {
      top: 50%;
      transform: translate(0, -50%) rotate(-45deg);
    }
    &:after {
      top: 50%;
      transform: translate(0, -50%) rotate(45deg);
    }
  }

  @include for-tablet-landscape-up {
    .nav__logo {
      height: 28px;
    }

    .nav__inner {
      padding: 3rem 0 1.25rem;
    }
  }
}
</style>
