<template>
  <header class="nav" :class="{ active: isActive }">
    <div class="container">
      <div class="nav__inner">
        <DeptLogo class="nav__logo"></DeptLogo>

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
    }
  },
  methods: {
    toggleMenu() {
      this.isActive ? (this.isActive = false) : (this.isActive = true)
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
}

.nav__logo {
  height: 14px;
  width: auto;

  @include for-tablet-landscape-up {
    height: 28px;
    margin-bottom: 1.5rem;
  }
}

.nav__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.125rem;
  background-color: transparent;
  border-bottom: none;
  transition: border-bottom 200ms;

  @include for-tablet-landscape-up {
    margin-top: 3rem;
  }

  @include for-desktop-up {
    border-bottom: 1px solid $black;
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

.active {
  .nav__inner {
    border: none;
    // background-color: $black; // Make background black for when the menu is so long the user needs to scroll, this way the close button and DEPT logo are still nicely visible.
  }

  .nav__menu-button {
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
}
</style>
