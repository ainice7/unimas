<template>
  <div>
    <TheHeader />
    <main>
      <div class="container" style="max-width: 1330px">
        <nuxt />
      </div>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
</style>
