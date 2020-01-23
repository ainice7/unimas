<template>
  <div>
    <TheDashboardNav />
    <nuxt-child />
  </div>
</template>

<script>
import TheDashboardNav from '../components/TheDashboardNav.vue'

export default {
  name: 'Dashboard',
  components: {
    TheDashboardNav
  }
}
</script>

<style lang="scss" scoped>

</style>
