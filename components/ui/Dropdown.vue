<template>
  <div class="dropdown">
    <label>
      {{ label }}
    </label>
    <select>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
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
}
</script>

<style></style>
