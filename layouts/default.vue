<template>
  <div>
    <Header
      @toggleMenu="toggleMenu"
      @closeMenu="closeMenu"
      :isMenuActive="isMenuActive"
    />
    <NavMenu @toggleMenu="toggleMenu" :isMenuActive="isMenuActive" />
    <Nuxt />
  </div>
</template>

<script>
import Header from '@/components/layout/Header'
import NavMenu from '@/components/layout/NavMenu'

export default {
  components: { Header, NavMenu },
  data() {
    return {
      isMenuActive: false,
    }
  },

  watch: {
    isMenuActive: {
      // Watch if menu is active. e.g. if it's turned inactive by clicking a route remove the body-lock
      handler() {
        this.isMenuActive
          ? document.body.classList.add('menu-active')
          : document.body.classList.remove('menu-active')
      },
    },
  },

  methods: {
    toggleMenu() {
      // Toggle menu
      this.isMenuActive
        ? (this.isMenuActive = false)
        : (this.isMenuActive = true)
    },
    closeMenu() {
      this.isMenuActive = false
    },
  },
}
</script>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body.menu-active {
  overflow: hidden;
}

:root {
  font-size: 16px;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
