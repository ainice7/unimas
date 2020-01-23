<template>
  <aside class="statistic-sidebar">
    <h3>{{ sidebarStatisticTitle }}</h3>
    <ul class="statistic-list">
      <SidebarStatisticItem
        :sidebarStatistic="sidebarStatistic"
        v-for="(sidebarStatistic, i) of sidebarStatistics"
        :key="i"
      />
    </ul>
  </aside>
</template>

<script>
import SidebarStatisticItem from '../components/SidebarStatisticItem.vue'

export default {
  name: 'SidebarStatistic',

  components: {
    SidebarStatisticItem
  },

  props: {
    sidebarStatisticTitle: {
      type: String,
      required: true
    },
    sidebarStatistics: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang='scss' scoped>
@import './assets/main.scss';
.statistic-sidebar {
  background-color: $white;
  padding: 30px 10px;

  @include breakpoint(lg) {
    margin-top: 10px;
  }

  h3 {
    text-align: center;
  }

  @include breakpoint(lg) {
    .statistic-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

}
</style>
