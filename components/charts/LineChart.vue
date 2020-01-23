<script>
import { Line } from 'vue-chartjs'

export default {
  name: 'LineChart',
  extends: Line,
  mounted () {
    this.renderChart({
      labels: ['1/6/19', '', '1/8/19', '', '1/10/19', '', '1/12/19'],
      datasets: [
        {
          label: 'Search',
          lineTension: 0,
          borderWidth: 2,
          borderColor: '#17afe1',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          pointBackgroundColor: '#17afe1',
          borderCapStyle: 'square',
          data: [400, 700, 650, 1200, 1250, 1190, 1450]
        },
        {
          label: 'Offine Marketing',
          lineTension: 0,
          borderWidth: 2,
          borderColor: '#2677ca',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          pointBackgroundColor: '#2677ca',
          borderCapStyle: 'square',
          data: [1500, 2300, 1800, 2550, 2350, 3100, 2300]
        },
        {
          label: 'Paid Search',
          lineTension: 0,
          borderWidth: 2,
          borderColor: '#68b36b',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          pointBackgroundColor: '#68b36b',
          borderCapStyle: 'square',
          data: [2600, 3200, 3000, 3600, 3100, 4600, 4800]
        }
      ]
    },
    {
      responsive: true,
      maintainAspectRatio: false,
      height: 200,
      legend: {
        position: 'bottom',
        boxWidth: 22
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false,
            stepSize: 800,
            min: 0,
            max: 5600,
            fontSize: 10,
            fontColor: '#bfc0c0',
            fontFamily: 'Open Sans',
            fontStyle: '600',
            lineHeight: '2.2'
          }
        }],
        xAxes: [{
          ticks: {
            fontSize: 10,
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
