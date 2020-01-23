<template>
  <div class="filter-block">
    <TheFilterOptions />
    <TheSearchDash />
  </div>
</template>

<script>
import TheFilterOptions from './TheFilterOptions'
import TheSearchDash from './TheSearchDash'

export default {
  components: {
    TheFilterOptions,
    TheSearchDash
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/helpers/variables";

.filter-block {
  display: grid;
  grid-template-areas: "aside dash";
  grid-template-columns: 2fr 5fr;
  grid-column-gap: 11px;
  font-family: $base-font-family;
  font-weight: 600;
  color: $white;
  font-size: 18px;
}
</style>
