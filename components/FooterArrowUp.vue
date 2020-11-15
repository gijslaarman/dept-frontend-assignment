<template>
  <button class="arrow-up" @click="scrollToTop">
    <svg-icon name="arrow-up" />
    <span class="text-center">Top</span>
  </button>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
}
</script>

<style lang="scss">
.arrow-up {
  background-color: transparent;
  border: none;
  width: 40px;
  cursor: pointer;

  svg {
    display: block;
    fill: $blue;
    width: 14px;
    height: 30.5px;
    margin: 0 auto;
  }

  span {
    color: $blue;
    font-family: 'Teko';
    text-transform: uppercase;
    font-size: 1.375rem;
  }
}
</style>
