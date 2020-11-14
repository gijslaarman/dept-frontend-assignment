<template>
  <a class="button" :href="href">
    <slot />
  </a>
</template>

<script>
export default {
  name: 'Button',
  props: {
    href: String,
  },
}
</script>

<style lang="scss">
.button {
  display: block;
  font-size: 15px;
  line-height: 2em;
  background-color: $black;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  color: $white;
  padding: 0.5rem 2.5rem 0.75rem;

  transition: 200ms;
  transition-property: background-color;

  &:hover {
    background-color: $grey;
  }
}
</style>
