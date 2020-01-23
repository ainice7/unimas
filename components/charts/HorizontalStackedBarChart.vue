<script>
import { HorizontalBar } from 'vue-chartjs'

export default {
  name: 'HorizontalStackedBarChart',
  extends: HorizontalBar,
  mounted () {
    this.renderChart({
      labels: ['Alex Robertson ', 'Thomas Willson', 'Alex Robertson', 'Martin Sandler', 'Thomas Willson', 'James Addams'],
      datasets: [
        {
          label: 'Food Products',
          backgroundColor: '#17afe1',
          data: [130, 110, 115, 100, 100, 130]
        },
        {
          label: 'Food Products2',
          backgroundColor: '#2677ca',
          data: [80, 70, 75, 60, 70, 80]
        },
        {
          label: 'Non-Food Products',
          backgroundColor: '#8b8fa0',
          data: [80, 60, 80, 65, 65, 70]
        }
      ]
    },
    {
      responsive: true,
      maintainAspectRatio: false,
      onClick: (evt, item) => {
        // eslint-disable-next-line no-console
        console.log(item)
      },
      legend: {
        position: 'bottom',
        usePointStyle: true
      },
      scales: {
        xAxes: [{
          stacked: true,
          ticks: {
            beginAtZero: false,
            stepSize: 100,
            min: 0,
            max: 300,
            fontSize: 10,
            fontColor: '#bfc0c0',
            fontFamily: 'Open Sans',
            fontStyle: '600',
            lineHeight: '2.2',
            callback: (value, index, values) => {
              return '$' + value + 'K'
            }
          }
        }],
        yAxes: [{
          margins: {
            right: 30
          },
          barThickness: 11,
          stacked: true,
          ticks: {
            stepSize: 0,
            fontColor: '#bfc0c0',
            fontFamily: 'Open Sans',
            fontStyle: '600',
            lineHeight: '2.2'
          }
        }]
      }
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
