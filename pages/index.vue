<template>
  <main>
    <PageHeader :img-src="imgSrc" />

    <div class="container">
      <Work />
    </div>
  </main>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import Work from '@/components/Work'

export default {
  components: { PageHeader, Work },
  data() {
    return {
      imgSrc: '/img/default-header.jpg',
    }
  },
}
</script>

<style></style>
