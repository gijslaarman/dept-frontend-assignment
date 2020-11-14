<template>
  <main>
    <PageHeader :img-src="imgSrc" />
  </main>
</template>

<script>
import PageHeader from '@/components/PageHeader'

export default {
  components: { PageHeader },
  data() {
    return {
      imgSrc: '/img/Header-img.jpg',
    }
  },
}
</script>

<style></style>
