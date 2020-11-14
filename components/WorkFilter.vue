<template>
  <div class="filter">
    <Dropdown :label="label" :options="options" />
  </div>
</template>

<script>
import Dropdown from '@/components/ui/Dropdown'

export default {
  components: { Dropdown },

  data() {
    // Get options
    const categories = ['All work']

    const options = categories.map((category) => {
      // make value lowercase & remove all spaces
      const value = category.toLowerCase().replace(' ', '')
      return {
        name: category,
        value,
      }
    })

    return {
      label: 'Show me',
      options,
    }
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
