<template>
  <section class="container error">
    <div class="animation">
      <AnimationPlayer />
    </div>

    <section class="error-message">
      <h1 v-if="error.statusCode === 404">{{ error.message }}</h1>
      <h1 v-else>An error occurred</h1>

      <Button href="/">Click here to go back</Button>
    </section>
  </section>
</template>

<script>
import AnimationPlayer from '@/components/AnimationPlayer'
import Button from '@/components/ui/Button'

export default {
  components: { AnimationPlayer, Button },
  props: {
    error: {
      type: Object,
      default: () => ({
        statusCode: 404,
        message: 'Page not found',
      }),
    },
  },

  scrollToTop: true,
  layout: 'error', // you can set a custom layout for the error page
}
</script>

<style lang="scss">
section.error {
  padding-top: 6rem;
}
.animation {
  width: 100%;
  margin: 0 auto 3rem;
}

.error-message {
  margin-bottom: 100px;
}

@include for-tablet-landscape-up {
  .button {
    display: inline-block;
  }
  section.error {
    padding-top: 10rem;
  }
  .animation {
    width: 50%;
  }
}
</style>
