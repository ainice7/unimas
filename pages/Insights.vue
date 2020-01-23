<template>
  <div>
    <ul class="dashboard-submenu">
      <theDashboardSubMenu :dashboardSubMenuLink="dashboardSubMenuLink" v-for="(dashboardSubMenuLink, i) of dashboardSubMenuLinks" :key="i" />
    </ul>
    <nuxt-child />
  </div>
</template>

<script>
import TheDashboardSubMenu from '../components/TheDashboardSubMenu.vue'

export default {
  name: 'Insights',
  components: {
    TheDashboardSubMenu
  },
  data () {
    return {
      dashboardSubMenuLinks: [
        {
          routName: 'Recruitment',
          name: 'Recruitment'
        },
        {
          routName: '#',
          name: 'Strategic Overview'
        },
        {
          routName: '#',
          name: 'Tactical Overview'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
