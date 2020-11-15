<template>
  <main>
    <PageHeader :img-src="imgSrc" />

    <Work />

    <Clients />
  </main>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import Work from '@/components/Work'
import Clients from '@/components/Clients'

export default {
  components: { PageHeader, Work, Clients },
  data() {
    return {
      imgSrc: '/img/default-header.jpg',
    }
  },
}
</script>

<style></style>
