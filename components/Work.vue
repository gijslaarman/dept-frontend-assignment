<template>
  <section class="work">
    <WorkFilter class="work__filter" />

    <div class="work__grid">
      <WorkCase
        v-for="workcase in cases"
        :key="workcase.name"
        :workcase="workcase"
      />
    </div>
  </section>
</template>

<script>
import WorkCase from '@/components/WorkCase'
import WorkFilter from '@/components/WorkFilter'

export default {
  components: { WorkCase, WorkFilter },

  computed: {
    cases() {
      return this.$store.state.cases.list
    },
  },
}
</script>

<style lang="scss">
.work {
  margin-bottom: 4.375rem;
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
  }
  .work__grid {
    grid-template-columns: 1fr 1fr;
    column-gap: 1.875rem;
    row-gap: 5rem;
  }
}
</style>
