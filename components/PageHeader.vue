<template>
  <section
    class="page-header"
    :style="{ 'background-image': `url(${imgSrc})` }"
  >
    <div class="container">
      <h1 class="page-header__title">Work</h1>

      <div class="page-header__button-aligner">
        <Button class="page-header__button" href="/something">View case</Button>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '@/components/ui/Button'

export default {
  name: 'PageHeader',
  components: { Button },
  props: {
    imgSrc: {
      type: String,
      default: '/img/default-header.jpg',
    },
  },
}
</script>

<style lang="scss">
.page-header {
  background-size: cover;
  background-position: center;
  margin-bottom: 110px;
}

.page-header__button {
  position: relative;
  top: 70px;
}

.page-header__title {
  font-weight: 400;
  font-size: 170px;
  line-height: 1em;
  margin: 0;
  height: unset;
  padding: 130px 0 70px;
}

@include for-tablet-landscape-up {
  .page-header {
    margin-bottom: 4rem;
  }

  .page-header__title {
    font-size: 400px;
    padding: 10rem 0 4.25rem;
  }

  .page-header__button-aligner {
    display: flex;
    justify-content: flex-end;
    padding-bottom: 5rem;
  }

  .page-header__button {
    display: inline-block;
    top: 0;
  }
}

@include for-desktop-up {
  .page-header {
    margin: 20px;
  }
}
</style>
