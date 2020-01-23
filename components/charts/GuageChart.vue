<template>
  <div>
    <VueSvgGauge
      :start-angle="-110"
      :end-angle="110"
      :value="3"
      :separator-step="1"
      :min="0"
      :max="3"
      :gauge-color="[{ offset: 0, color: '#347AB0'}, { offset: 100, color: '#8CDFAD'}]"
      :scale-interval="0.1"
    />
  </div>
</template>

<script>
// export default {
//   name: 'GuageChart',
//   components: {
//     VueSvgGauge
//   }
// }
//
</script>

<style lang="scss" scoped>
</style>
