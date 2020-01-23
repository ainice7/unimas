<template>
  <li class="statistic-list-item">
    <div :style="`background-image: url(${sidebarStatistic.urlImg})`" class="statistic-icon" />
    <div class="statistic-count">
      {{ count }}{{ sidebarStatistic.unit }}
    </div>
    <div class="statistic-desc">
      {{ sidebarStatistic.desc }}
    </div>
  </li>
</template>

<script>
export default {
  name: 'SidebarStatisticItem',

  props: {
    sidebarStatistic: {
      type: Object,
      required: true
    }
  },
  data () {
    const finalCount = this.sidebarStatistic.count
    return {
      count: 0,
      finalCount
    }
  },
  mounted () {
    if (this.finalCount < 250) {
      setInterval(() => {
        if (this.count < this.finalCount) {
          this.counter()
        } else {
          this.count = this.finalCount
        }
      }, 20)
    } else {
      setInterval(() => {
        if (this.count < this.finalCount) {
          this.counter()
        } else {
          this.count = this.finalCount
        }
      }, 10)
    }
  },
  methods: {
    counter () {
      this.count++
    }
  }
}
</script>

<style lang='scss' scoped>
@import './assets/main.scss';
.statistic-list-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
    border-bottom: 1px solid $light-gray;

    @include breakpoint(lg) {
      width: 25%;
      border-bottom: none;
      border-right: 1px solid $light-gray;
      padding: 0 15px;
    }
    @include breakpoint(md) {
      width: 50%;
      border: none;
      padding: 20px 15px 0;
    }
    @include breakpoint(xs) {
      width: 100%;
      border: none;
      padding: 20px 10px 0;
    }

    &:last-child {
      border: none;
    }

    .statistic-icon {
      margin-bottom: 15px;
      background-position: center;
      width: 75px;
      height: 75px;
      border-radius: 50%;
      background-color: $color-primary;
      background-repeat: no-repeat;
    }

    .statistic-count {
      padding-bottom: 10px;
      color: $color-primary;
      font-size: 36px;
      font-weight: 300;
    }

    .statistic-desc {
      text-align: center;
      font-size: 16px;
      max-width: 180px;

      @include breakpoint(lg) {
        max-width: 100%;
      }
    }
  }
</style>
