<template>
  <section class="clients">
    <div class="text text-center container">
      <h2>Clients</h2>
      <p>
        We value a great working relationship with our clients above all else.
        It’s why they often come to our parties. It’s also why we’re able to
        challenge and inspire them to reach for the stars.
      </p>
    </div>

    <div class="container">
      <ClientsGrid />
    </div>
  </section>
</template>

<script>
import ClientsGrid from './ClientsGrid'
export default {
  components: { ClientsGrid },
}
</script>

<style lang="scss">
.clients {
  background-color: $background-grey;
  padding: 2.5rem 0 2.375rem;
  position: relative;

  .text {
    margin-bottom: 3.75rem;
  }

  p {
    max-width: 35rem;
    margin: auto;
  }

  @include for-tablet-landscape-up {
    padding: 5rem 0 6.25rem;

    // Adding a white bar to the right with a pseudo element to align the items still center of the page, not relative to the content because it would be aligned wrong with a border or margin to the right.
    &:after {
      content: '';
      position: absolute;
      width: 20px;
      height: 100%;
      background-color: $white;
      top: 0;
      right: 0;
    }
  }
}
</style>
