<template>
  <footer>
    <div class="container">
      <div class="wrapper">
        <div class="inner">
          <nav>
            <DeptLogo class="deptlogo" />
            <ul class="menu">
              <li v-for="menuItem in menuItems" :key="menuItem.name">
                <a :href="menuItem.link">{{ menuItem.name }}</a>
              </li>
            </ul>

            <ul class="socials">
              <li v-for="social in socials" :key="social.type">
                <a :href="social.link">
                  <svg-icon :name="social.type" :title="social.type" />
                </a>
              </li>
            </ul>
          </nav>

          <div class="information">
            <div class="inner">
              <p>Chamber of Commerce: 63464101</p>
              <p>VAT: NL 8552.47.502.B01</p>
              <p><a href="/tos">Terms and conditions</a></p>
            </div>
            <div class="copyright"><p>© 2018 Dept Agency</p></div>
          </div>
        </div>

        <FooterArrowUp />
      </div>
    </div>
  </footer>
</template>

<script>
import FooterArrowUp from '@/components/FooterArrowUp'
import DeptLogo from './DeptLogo'

export default {
  name: 'Footer',

  components: { DeptLogo, FooterArrowUp },

  data() {
    return {
      menuItems: this.$store.state['menu-items'].footer.map((icon) => {
        icon.name = icon.name.toLowerCase()
        return icon
      }),
      socials: this.$store.state.socials.active,
    }
  },
}
</script>

<style scoped lang="scss">
footer {
  // First container element
  .wrapper {
    position: relative;
    background-color: $black;
    margin-right: -20px;
    padding: 3.75rem 20px 3.125rem 0;

    &:before {
      content: '';
      background-color: $black;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      padding-left: 99999px;
      z-index: -1;
    }
  }

  .menu,
  .socials {
    display: flex;
    flex-direction: column;

    a {
      color: $white;
    }
  }

  .socials {
    a {
      width: 28px;
      height: 28px;
      display: inline-block;
    }

    svg {
      fill: $white;
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-width: 100%;
    }
  }

  nav {
    font-size: 2rem;
    display: flex;
    justify-content: space-between;
    padding-bottom: 2.5rem;
    margin-bottom: 2.5rem;
    border-bottom: 1px solid $darkgrey;
    position: relative;
  }

  .menu,
  .information .inner {
    transition: margin 500ms;
  }

  .deptlogo {
    display: none;
    position: absolute;
  }

  .menu li,
  .socials li {
    display: block;
    margin-bottom: 1.25rem;
    line-height: 1em;
    height: 1em;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  .information {
    color: $grey-1;
    font-size: 0.8125rem;

    > .inner {
      display: flex;
      flex-direction: column;
      margin-bottom: 1.5625rem;
    }

    p {
      font-size: inherit;
    }

    a {
      color: inherit;
      text-decoration: underline;
    }
  }

  .copyright {
    color: $grey-4;
  }

  .arrow-up {
    display: none;
    position: absolute;
    right: -70px;
    top: 50%;
    transform: translateY(-50%);
  }

  @include for-tablet-landscape-up {
    nav {
      font-size: 1.125rem;
      align-items: center;
    }

    .menu,
    .socials,
    .information,
    .information > .inner {
      flex-direction: row;
      margin-bottom: 0;
    }

    .menu li,
    .information p {
      margin-right: 28px;
      margin-bottom: 0;
    }

    .socials li {
      margin-right: 30px;
      margin-bottom: 0;
    }

    .socials a {
      width: 16px;
      height: 16px;
    }

    .menu li:last-of-type,
    .socials li:last-of-type,
    .information p:last-of-type {
      margin-right: 0;
    }

    .information {
      display: flex;
      justify-content: space-between;
    }

    .copyright {
      text-align: right;
    }
  }

  @include for-desktop-up {
    .wrapper {
      padding: 6.875rem 100px 7rem;
    }

    .deptlogo {
      display: block;
      width: 100px;
      height: 27px;
      bottom: 0;
      top: 0;
      transform: translateY(-27%);
      fill: $white;
    }

    nav .menu,
    .information .inner {
      margin-left: 15.625rem;
    }

    .arrow-up {
      display: block;
    }
  }
}
</style>
