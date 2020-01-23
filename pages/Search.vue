<template>
  <section class="section main-search">
    <TheSearchBar />
    <TheFilterBlock />
  </section>
</template>

<script>
// import { mapGetters } from 'vuex'
import TheSearchBar from '../components/search-components/TheSearchBar'
import TheFilterBlock from '../components/search-components/TheFilterBlock'

export default {
  name: 'Search',
  components: {
    TheSearchBar,
    TheFilterBlock
  },
  async fetch ({ store, error }) {
    try {
      if (store.getters['users/users'].length === 0) {
        await store.dispatch('users/loadUsers')
      }
    } catch (e) {
      error(e)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
