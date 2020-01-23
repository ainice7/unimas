<script>
import { HorizontalBar } from 'vue-chartjs'

export default {
  name: 'HorizontalBarChart',
  extends: HorizontalBar,
  mounted () {
    this.renderChart({
      labels: ['OEM&Manufacturing', 'Transportation&logistics', 'OEM&Manufacturing', 'Transportation&logistics', 'OEM&Manufacturing', 'Transportation&logistics'],
      datasets: [
        {
          label: '2015',
          backgroundColor: '#68b36b',
          data: [13, 16, 17, 11, 13, 17]
        },
        {
          label: '2016',
          backgroundColor: '#a2cf6e',
          borderCapStyle: 'square',
          data: [11, 14, 12, 8, 5, 11]
        }
      ]
    },
    {
      responsive: true,
      maintainAspectRatio: false,
      height: 200,
      legend: {
        position: 'bottom',
        usePointStyle: true
      },
      scales: {
        xAxes: [{
          ticks: {
            beginAtZero: false,
            stepSize: 6,
            min: 0,
            max: 18,
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
          barThickness: 12,
          ticks: {
            stepSize: 10,
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
