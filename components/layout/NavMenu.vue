<template>
  <div class="nav__menu">
    <div class="container">
      <nav>
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/x">Werk</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/x">Over</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/x">Diensten</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/x">Partners</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/x">Stories</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/x">Vacatures</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/x">Events</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/x">Contact</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
}
</script>

<style lang="scss">
.nav__menu {
  overflow-y: scroll;
  padding-top: 6em;
  font-size: 1rem;
  z-index: -1;
  opacity: 0;
  position: absolute;
  visibility: hidden;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $black;
  transform: scale(1.05);
  transition: 200ms linear;
  transition-property: transform, opacity, visibility;
  padding-bottom: 6em; // This is a friendly fix for touch devices/mobile browsers not being able to see the full text at the bottom of the nav if the menu was larger than the viewport.

  @include for-tablet-landscape-up {
    font-size: 2rem;
    // padding-top: 10rem;
  }

  @include for-desktop-up {
    margin: 20px;
    height: calc(100vh - 40px);
  }

  nav {
    ul {
      padding: 0;

      li {
        padding: 0;
        margin: 0;
        list-style: none;
        line-height: 3.125em;
        height: calc(3.125em + 1px);
        color: $white;
        text-align: right;
        border-bottom: 1px solid rgba($grey, 0.5);

        &:last-of-type {
          border: none;
        }

        a {
          display: block;
          font-family: 'Teko';
          color: $white;
          padding-top: 0.05em;
          font-size: 3.125em;
          text-decoration: none;
          text-transform: uppercase;
          transition: 200ms linear;
          transition-property: color;

          &.nuxt-link-active:before {
            content: '';
            display: inline-block;
            background-color: $white;
            width: 0.28em;
            height: 0.36em;
            margin-right: 0.2em;
            margin-bottom: 0.125em;
            mask: url('~assets/icons/triangle.svg');
            mask-size: cover;
            -webkit-mask: url('~assets/icons/triangle.svg');
            -webkit-mask-size: cover;
            transition: 200ms linear background-color;
          }

          &:hover {
            color: $grey;

            &.nuxt-link-active:before {
              background-color: $grey;
            }
          }
        }
      }
    }
  }
}

.active {
  .nav__menu {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
  }
}
</style>
