<template>
  <section class="dashboard-navbar">
    <h1 id="title-h1">
      {{ dashboardNavTitle }}
    </h1>
    <nav class="dashboard-nav">
      <ul class="dashboard-menu">
        <li class="dashboard-menu-item">
          <nuxt-link :to="{ name: 'Search' }" class="dashboard-menu-link" exec>
            Search
          </nuxt-link>
        </li>
        <li class="dashboard-menu-item">
          <nuxt-link :to="{ name: 'Insights' }" class="dashboard-menu-link">
            Insights
          </nuxt-link>
        </li>
        <li class="dashboard-menu-item">
          <a href class="dashboard-menu-link">Job Posting</a>
        </li>
        <li class="dashboard-menu-item">
          <a href class="dashboard-menu-link">Candidates</a>
        </li>
        <li class="dashboard-menu-item">
          <a href class="dashboard-menu-link">Past Interviews</a>
        </li>
        <li class="dashboard-menu-item">
          <a href class="dashboard-menu-link">Sourcing</a>
        </li>
        <li class="dashboard-menu-item">
          <a href class="dashboard-menu-link">Prospects</a>
        </li>
        <li class="dashboard-menu-item">
          <a href class="dashboard-menu-link">Referrals</a>
        </li>
        <li class="dashboard-menu-item">
          <a href class="dashboard-menu-link">Reports</a>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'TheDashboardNav',
  props: {
    customdashboardNavTitle: {
      type: String,
      required: false,
      default: ''
    }
  },
  data () {
    return {
      defaultDashboardNavTitle: '',
      dashboardNavTitle: ''
    }
  },
  mounted () {
    this.defaultDashboardNavTitle = document.querySelector(
      `a[href="${document.location.pathname}"]`
    ).innerHTML
    this.dashboardNavTitle =
      this.customdashboardNavTitle === undefined
        ? this.defaultDashboardNavTitle
        : this.customdashboardNavTitle
  }
}
</script>

<style lang="scss" scoped>
@import "./assets/main.scss";
.dashboard-navbar {
  position: relative;
  background-color: $base-background;
  padding: 35px 25px 0;
  margin-bottom: 10px;

  @include breakpoint(sm) {
    padding: 25px 25px 15px;
  }

  #title-h1 {
    padding-bottom: 15px;

    &:before {
      content: "";
      display: inline-block;
      margin-right: 20px;
      @include sprite($h1_icon);
    }
  }

  .dashboard-nav {
    &-top {
      padding: 0 25px;
    }

    &-bottom {
      background-color: #f7f7f7;
      padding: 0 25px;
    }
  }

  .dashboard-menu {
    display: flex;
    flex-wrap: wrap;
    border-top: 1px solid $black;

    &-link {
      display: inline-flex;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      color: #cbcbcb;
      padding: 0 20px;
      height: 40px;
      align-items: center;
      border-top: 2px solid transparent;
      margin-top: -1px;

      &:hover,
      &.router-link-active {
        position: relative;
        color: $color-primary;
        border-top: 2px solid $color-primary;

        &:before {
          content: "";
          display: block;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: 0;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 12.5px 10px 12.5px;
          border-color: transparent transparent #f7f7f7 transparent;

          @include breakpoint(md) {
            display: none;
          }
        }
      }

      @include breakpoint(lg) {
        padding: 0 10px;
      }

      @include breakpoint(sm) {
        display: block;
        height: auto;
        padding: 7.5px 0;

        &.router-link-active {
          border: none;
          display: flex;

          &:after {
            content: "";
            margin-left: 10px;
            height: 1px;
            flex-grow: 1;
            background-color: $color-primary;
          }
        }
      }
    }

    &-item {
      @include breakpoint(sm) {
        width: 50%;
      }
      @include breakpoint(sm) {
        width: 100%;
      }
    }
  }
}
</style>
