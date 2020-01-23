<template>
  <div>
    <section class="insights-recruitment">
      <div class="sidebar-wrapper">
        <SidebarStatistic :sidebarStatistics="sidebarStatistics" :sidebarStatisticTitle="sidebarStatisticTitle" />
      </div>
      <section class="recruiting-overview">
        <div class="col col-3_3 filter-section">
          <h2>Recruiting Overview for 12 jobs</h2>
          <div>
            <nuxt-link to="" class="filter-icon">
              filter jobs
            </nuxt-link>
          </div>
        </div>
        <div class="col col-2_3">
          <div class="overlined-title">
            <h2>Applications in the Past 30 Days</h2>
          </div>
          <client-only>
            <GuageChart />
          </client-only>
        </div>
        <div class="col col-1_3">
          <div class="overlined-title">
            <h2>HIRING FUNNEL</h2>
          </div>
          <client-only>
            <!-- <FunnelChart /> -->
          </client-only>
          <div class="overlined-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt.</p>
          </div>
        </div>
        <div class="col col-3_3-1">
          <div class="overlined-title">
            <h2>Candidates by Position</h2>
          </div>
          <client-only>
            <div class="pie-chart middle-chart">
              <PieChart />
            </div>
            <div id="pie-detail-info" />
          </client-only>
        </div>
        <div class="col col-1_3-1">
          <div class="overlined-title">
            <h2>Applications by Month</h2>
          </div>
          <client-only>
            <div class="line-chart small-chart">
              <LineChart />
            </div>
          </client-only>
          <div class="overlined-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt.</p>
          </div>
        </div>
        <div class="col col-1_3-2">
          <div class="overlined-title">
            <h2>Quality by Recruiter</h2>
          </div>
          <client-only>
            <div class="horizontalStackedBar-chart small-chart">
              <HorizontalStackedBarChart />
            </div>
          </client-only>
          <div class="overlined-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt.</p>
          </div>
        </div>
        <div class="col col-1_3-3">
          <div class="overlined-title">
            <h2>Source Quality</h2>
          </div>
          <client-only>
            <div class="horizontalBar-chart small-chart">
              <HorizontalBarChart />
            </div>
          </client-only>
          <div class="overlined-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt.</p>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import SidebarStatistic from '../../components/SidebarStatistic'
import LineChart from '../../components/charts/LineChart'
import HorizontalStackedBarChart from '../../components/charts/HorizontalStackedBarChart'
import HorizontalBarChart from '../../components/charts/HorizontalBarChart'
import PieChart from '../../components/charts/PieChart'
import GuageChart from '../../components/charts/GuageChart'
// import FunnelChart from '../../components/charts/FunnelChart'

export default {
  name: 'Recruitment',
  components: {
    SidebarStatistic,
    LineChart,
    HorizontalStackedBarChart,
    HorizontalBarChart,
    PieChart,
    GuageChart
    // FunnelChart
  },

  data () {
    return {
      customdashboardNavTitle: 'Insights',
      sidebarStatisticTitle: 'WHAT ARE OUR KPIs',
      sidebarStatistics: [
        {
          urlImg: '/KPIs1.png',
          count: 117.76,
          unit: 'd',
          desc: 'Time to Hire'
        },
        {
          urlImg: '/KPIs2.png',
          count: 200.24,
          unit: 'd',
          desc: 'Hiring Speed'
        },
        {
          urlImg: '/KPIs3.png',
          count: 524,
          unit: '',
          desc: 'Qualified Candidates pes hire'
        },
        {
          urlImg: '/KPIs4.png',
          count: 652,
          unit: '',
          desc: 'Interviews per hire'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./assets/main.scss";

.insights-recruitment {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 250px 1fr;
  grid-gap: 10px;
  @include breakpoint(lg) {
    display: flex;
    flex-direction: column-reverse;
  }
}

.recruiting-overview {
  display: grid;
  grid-template-areas:
    "three-third three-third three-third"
    "two-third two-third one-third"
    "three-third1 three-third1 three-third1"
    "one-third1 one-third2 one-third3";
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;

  @include breakpoint(md) {
    grid-template-areas:
    "three-third three-third"
    "two-third two-third"
    "one-third one-third1"
    "three-third1 three-third1"
    "one-third2 one-third3";
    grid-template-columns: 1fr 1fr;
  }
  @include breakpoint(xs) {
    grid-template-areas:
    "three-third"
    "two-third"
    "one-third"
    "three-third1"
    "one-third1"
    "one-third2"
    "one-third3";
    grid-template-columns: 1fr;
  }

  .small-chart {
    max-width: 280px;
  }

  .middle-chart {
    max-width: 525px;
  }

  .overlined-title {
    margin-top: -25px;
    @include breakpoint(xxl) {
      margin-top: -20px
    }
    @include breakpoint(sm) {
      margin-top: -15px
    }
  }

  h2 {
    @include breakpoint(md) {
      font-size: 18px
    }
    @include breakpoint(xs) {
      font-size: 16px
    }
  }

  .overlined-text {
    margin-top: 40px;
    border-top: 1px solid #e2e4e4;
    padding-top: 25px
  }

  .col {
    height: auto;
    padding: 25px;
    background-color: $white;

    @include breakpoint(xxl) {
      padding: 20px
    }
    @include breakpoint(sm) {
      padding: 15px
    }
  }

  .col-3_3 {
    grid-area: three-third
  }
  .col-3_3-1 {
    grid-area: three-third1
  }
  .col-2_3 {
    grid-area: two-third
  }
  .col-1_3 {
    grid-area: one-third
  }
  .col-1_3-1 {
    grid-area: one-third1
  }
  .col-1_3-2 {
    grid-area: one-third2
  }
  .col-1_3-3 {
    grid-area: one-third3
  }

  .filter-section {
    padding: 35px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include breakpoint(xs) {
      padding: 5px 15px;
      text-align: center;
      flex-direction: column-reverse
    }

    h2 {
      padding: 0
    }

    .filter-icon {
      display: flex;
      align-items: center;
      color: #34a6db;
      font-size: 18px;
      text-transform: uppercase;

      @include breakpoint(xs) {
        font-size: 16px
      }

      &:hover {
        opacity: 0.7
      }

      &:before {
        content:"";
        @include sprite($filter-icon);
        margin-right: 2px;
      }

      &:after {
        content:"";
        @include sprite($arr-down);
        margin-left: 10px;
      }
    }
  }
}
</style>
