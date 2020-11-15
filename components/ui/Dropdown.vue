<template>
  <div class="dropdown">
    <label>
      {{ label }}
    </label>
    <div class="select-wrapper">
      <select ref="select" @change="emitNewValue">
        <option v-for="option in options" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
      <svg-icon class="dropdown-arrow" name="triangle" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Label',
    },
    options: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    emitNewValue() {
      const newValue = this.$refs.select.value
      this.$emit('valueChange', newValue)
    },
  },
}
</script>

<style lang="scss">
select {
  cursor: pointer;
  display: inline-block;
  font-family: 'Teko';
  font-size: 1.875rem;
  font-weight: 500;
  text-transform: capitalize;
  line-height: 1em;
  height: 0.875em;
  color: $black;
  border: none;
  border-radius: 0px;
  background-color: transparent;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
}

.dropdown-arrow {
  display: inline-block;
  transform: rotate(90deg);
  fill: $black;
  width: 7px;
  height: 9px;
  margin-bottom: 7px;
}

.select-wrapper {
  display: inline-block;
  border-bottom: 1px solid $black;
}
</style>
