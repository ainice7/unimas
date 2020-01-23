<script>
import { Pie } from 'vue-chartjs'

export default {
  name: 'PieChart',
  extends: Pie,
  data () {
    return {
      users: [],
      labels: ['JAVA DEVELOPERS', 'FRONT END DEVELOPERS', 'PROJECT MENEGERS', 'PHP DEVELOPERS', 'DESIGNERS', 'QA ENGINEERS', 'DATABASE ADMINISTRATOR'],
      data: [15, 5, 10, 10, 20, 25, 15]
    }
  },
  mounted () {
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          backgroundColor: [
            '#17afe1',
            '#318ce9',
            '#a2cf6e',
            '#68b36b',
            '#35a5a6',
            '#2677ca',
            '#3bcfe3'
          ],
          borderWidth: 0,
          data: this.data,
          callback: (value, index, values) => {
            return value + '%'
          }
        }
      ]
    },
    {
      responsive: true,
      maintainAspectRatio: false,
      onClick: (evt, item) => {
        document.getElementById('pie-detail-info').innerHTML = `<p>this is ${item[0]._index} piece of pie!</p>`
      },
      legend: {
        position: 'left'
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            display: false
          }
        }],
        yAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            display: false
          }
        }]
      }
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
