<template>
  <div class="clients__grid">
    <div v-for="client in clients" :key="client.name" class="clients__image">
      <img :src="client.img.src" :alt="client.img.alt" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { clients: this.$store.state.clients.list }
  },
}
</script>

<style lang="scss">
.clients__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 15px;
  max-width: 1000px;
  margin: auto;
}

@include for-tablet-portrait-up {
  .clients__grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@include for-tablet-landscape-up {
  .clients__grid {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
