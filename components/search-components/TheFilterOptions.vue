<template>
  <aside class="filter-options">
    <div class="founded-candidates">
      <button class="reset-profiles-button">
        RESET FILTER
      </button>
      <span>11 CANDIDATES found</span>
    </div>
    <div class="for-filters">
      Job filters
    </div>
    <ul class="job-filters">
      <FilterOption :option="option" v-for="option in filterOptions" :key="option" />
    </ul>
  </aside>
</template>

<script>
import FilterOption from './FilterOption'

export default {
  components: {
    FilterOption
  },
  data () {
    return {
      filterOptions: ['Stage', 'Keyword', 'Source', 'Credited To', 'Status'],
      dataSource: ['Burns Bay Road', 'Downing Street', 'Wall Street']
    }
  },
  methods: {
    filterOption (input, option) {
      return (
        option.componentOptions.children[0].text
          .toUpperCase()
          .includes(input.toUpperCase()) >= 0
      )
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/helpers/variables";

.filter-options {
  grid-area: "aside";
  padding: 0 25px;
  background-color: $primary-background;
  .founded-candidates {
    padding: 21px 0 30px;
    display: flex;
    flex-direction: column;
    text-align: center;
    text-transform: uppercase;
    line-height: 100%;
    .reset-profiles-button {
      color: $color-primary;
      align-self: flex-end;
      padding: 0 16px 0 0;
      background-color: transparent;
      border: none;
      font-size: 16px;
      margin-bottom: 35px;
      line-height: 100%;
      position: relative;
      &::after {
        content: "+";
        position: absolute;
        right: 0;
        top: 0;
        transform: rotate(-45deg);
        font-size: 24px;
      }
    }
  }
  .for-filters {
    background-color: $white;
    margin: 0 -25px;
    padding: 11px 25px 6px;
    color: $color-primary;
    text-transform: uppercase;
    line-height: 100%;
  }
  .job-filters {
    padding: 24px 5px;
  }
}
</style>
