<template>
  <lottie :options="lottieOptions" @animCreated="handleAnimation" />
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from '@/static/animations/puzzle'

export default {
  components: {
    lottie,
  },

  data() {
    return {
      anim: null, // for saving the reference to the animation
      lottieOptions: { animationData: animationData.default },
    }
  },

  methods: {
    handleAnimation(anim) {
      this.anim = anim
    },
  },
}
</script>

<style></style>
