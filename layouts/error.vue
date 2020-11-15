<template>
  <section class="container" style="padding-top: 10rem">
    <h1 v-if="error.statusCode === 404">{{ error.message }}</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </section>
</template>

<script>
export default {
  props: {
    error: {
      type: String,
      default: () => ({
        statusCode: 404,
        message: 'Page not found',
      }),
    },
  },
  layout: 'error', // you can set a custom layout for the error page
}
</script>
