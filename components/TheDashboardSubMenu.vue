<template>
  <li class="dashboard-submenu-item">
    <nuxt-link :to="{ name: `${dashboardSubMenuLink.routName}` }" class="dashboard-submenu-link" exec>
      {{ dashboardSubMenuLink.name }}
    </nuxt-link>
  </li>
</template>

<script>
export default {
  name: 'TheDashboardSubMenu',
  props: {
    dashboardSubMenuLink: {
      type: Object,
      required: true
    }
  },
  mounted () {
    this.mobile_sb_menu()
  },
  methods: {
    mobile_sb_menu () {
      window.addEventListener('resize', function () {
        if (window.outerWidth <= 640) {
          const sbMenu = document.querySelector('.dashboard-submenu')
          document.querySelector('.dashboard-menu-link.router-link-active').parentNode.append(sbMenu)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./assets/main.scss";

.dashboard-submenu {
  &-item {
    padding: 0 5px;
  }
  &-link {
    display: inline-flex;
    align-items: center;
    padding: 0 15px;
    height: 35px;
    font-size: 11px;
    font-weight: 700;
    color: $base-color-secondary;
    @include breakpoint(lg) {
      padding: 0 10px;
    }
    @include breakpoint(sm) {
      display: block;
      height: auto;
      padding: 7.5px 0;
    }
    &:hover, &.router-link-exact-active {
      color: $color-primary;
    }
  }
}
</style>
