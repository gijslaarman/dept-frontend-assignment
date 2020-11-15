<template>
  <section class="work">
    <div class="container">
      <WorkFilter
        class="work__filter"
        label="Show me"
        :categories="categories"
        @filterChange="filterCases"
      />

      <div class="work__grid">
        <WorkCase
          v-for="workcase in cases"
          :key="workcase.name"
          :workcase="workcase"
        />
      </div>
    </div>
  </section>
</template>

<script>
import WorkCase from '@/components/WorkCase'
import WorkFilter from '@/components/WorkFilter'

export default {
  components: { WorkCase, WorkFilter },

  data() {
    const thisCases = this.$store.state.cases.cases
    const allItemCategories = thisCases.map((item) => item.category)
    // Create a new unique set of categories (remove duplicates) & have the first item be all
    const categories = ['all work', ...new Set(allItemCategories)]

    return {
      categories,
    }
  },

  computed: {
    cases() {
      return this.$store.state.cases.cases
    },
  },

  methods: {
    filterCases(data) {
      this.$store.commit('cases/filterCases', data)
    },
  },
}
</script>

<style lang="scss">
.work {
  padding-bottom: 4.375rem;
}

.work__filter {
  margin-bottom: 2.5rem;
}

.work__grid {
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  row-gap: 2rem;
}

@include for-tablet-landscape-up {
  .work {
    margin-bottom: 6.25rem;

    .workcase:nth-of-type(even) {
      animation-delay: 100ms;
    }
  }
  .work__grid {
    grid-template-columns: 1fr 1fr;
    column-gap: 1.875rem;
    row-gap: 5rem;
  }
}
</style>
