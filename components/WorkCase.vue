<template>
  <article ref="article" class="workcase" :class="{ animate: inView }">
    <a href="#">
      <div class="workcase__image">
        <img :src="`/img/cases/${workcase.img.src}`" :alt="workcase.img.alt" />
      </div>
      <h4 class="workcase__name">{{ workcase.name }}</h4>
      <h3 class="workcase__title">{{ workcase.title }}</h3>
      <span class="workcase__link">view case</span>
    </a>
  </article>
</template>

<script>
export default {
  props: {
    workcase: {
      type: Object,
      default: () => ({
        name: {
          type: String,
          default: 'Name',
        },
        title: {
          type: String,
          default: 'Title',
        },
      }),
    },
  },

  data() {
    return {
      inView: false,
      elementPosition: null,
    }
  },

  mounted() {
    window.addEventListener('scroll', this.isElementInView)

    // Set the element position here, so that the scroll event doesn't need to check everytime.
    this.elementPosition =
      this.$refs.article.getBoundingClientRect().top + scrollY

    // Call method if some elements are already in view.
    this.isElementInView()
  },

  methods: {
    isElementInView() {
      const scrollY = window.scrollY || window.pageYOffset
      const scrollPosition = scrollY + window.innerHeight

      if (scrollPosition > this.elementPosition) {
        // set view true, and make it not toggleable once the element is in view it should stay in view.
        this.inView = true
      }
    },
  },
}
</script>

<style lang="scss">
.workcase {
  width: 100%;
  max-width: 585px;
  justify-self: center;
  display: block;
  position: relative;
  bottom: 0;
  transition: bottom 200ms;
  transform: translateY(100px);
  opacity: 0;

  &.animate {
    animation: workcasefadein 500ms forwards;
  }
}

.workcase__image {
  position: relative;
  padding-top: calc((500 / 585) * 100%);
  margin-bottom: 1.125rem;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.workcase__name {
  font-size: 0.9375rem; // 15px
  margin-bottom: 0.75rem;
}

.workcase__title {
  color: $black;
  font-size: 1.875rem;
}

.workcase__link {
  display: none;
  font-size: 0.875rem;
  font-weight: 700;
  padding-bottom: 1.125rem;
  text-transform: uppercase;
  margin-left: 0;
  transition: 200ms margin;

  &:before {
    content: '';
    display: inline-block;
    background-color: $blue;
    width: 0.4375rem;
    height: 0.5625rem;
    margin-right: 0.625rem;
    mask: url('~assets/icons/triangle.svg');
    mask-size: cover;
    -webkit-mask: url('~assets/icons/triangle.svg');
    -webkit-mask-size: cover;
    transition: 200ms linear;
    transition-property: background-color, margin;
  }
}

.workcase:hover {
  bottom: 5px;

  .workcase__image {
    box-shadow: 0 2px 14px 1px rgba(0, 0, 0, 0.2),
      0 5px 6px 0px rgba(0, 0, 0, 0.1);
  }

  .workcase__link {
    margin-left: 1em;

    &:before {
      margin-right: 0.375rem;
    }
  }
}

@include for-tablet-landscape-up {
  .workcase__title {
    margin-bottom: 0.875rem;
  }

  .workcase__link {
    display: block;
  }
}

@keyframes workcasefadein {
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}
</style>
