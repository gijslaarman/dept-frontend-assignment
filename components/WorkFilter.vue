<template>
  <div class="filter">
    <Dropdown
      ref="select"
      :label="label"
      :options="categories"
      @valueChange="valueChange"
    />
  </div>
</template>

<script>
import Dropdown from '@/components/ui/Dropdown'

export default {
  components: { Dropdown },

  props: {
    label: {
      type: String,
      default: 'Dropdown',
    },
    categories: {
      type: Array,
      default: () => ['No options set'],
    },
  },

  data() {
    return {
      category: this.$props.categories[0],
    }
  },

  methods: {
    valueChange(value) {
      this.category = value
      this.emitFilterChange()
    },
    emitFilterChange() {
      this.$emit('filterChange', {
        category: this.$data.category,
      })
    },
  },
}
</script>

<style lang="scss">
.filter {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
