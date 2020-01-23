<template>
  <date-pick
    v-model="date"
    :format="format"
    :parseDate="parseDate"
    :formatDate="formatDate"
    :inputAttributes="{size: 32}"
  />
</template>

<script>
import DatePick from 'vue-date-pick'
import fecha from 'fecha'

export default {
  name: 'VueDatePick',
  components: { DatePick },
  data: () => ({
    format: 'MMM D, YYYY',
    date: fecha.format(new Date(), 'MMM D, YYYY')
  }),
  methods: {
    parseDate (dateString, format) {
      return fecha.parse(dateString, format)
    },
    formatDate (dateObj, format) {
      return fecha.format(dateObj, format)
    }
  }
}
</script>
