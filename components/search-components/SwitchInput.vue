<template>
  <label class="checkbox">
    <input @click="$emit('change-timed')" v-on:click="changeText" type="checkbox">
    <div class="checkbox__text">{{ text }}</div>
  </label>
</template>

<script>
export default {
  data () {
    return {
      text: 'No'
    }
  },
  methods: {
    changeText () {
      this.text === 'No' ? this.text = 'Yes' : this.text = 'No'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/main.scss";

.checkbox input {
  position: absolute;
  z-index: -1;
  opacity: 0;
  margin: 10px 0 0 20px;
}
.checkbox__text {
  position: relative;
  padding: 0 0 5px;
  line-height: 100%;
  min-width: 20px;
  text-align: center;
  cursor: pointer;
  font-size: 10px;
  color: $color-primary;
}
.checkbox__text:before {
  content: "";
  position: absolute;
  top: 12px;
  left: -8px;
  width: 38px;
  height: 24px;
  border-radius: 13px;
  background: #cdd1da;
  box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.2);
  transition: 0.2s;
}
.checkbox__text:after {
  content: "";
  position: absolute;
  top: 13px;
  left: -6px;
  width: 22px;
  height: 22px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: 0.2s;
}
.checkbox input:checked + .checkbox__text:before {
  background: $color-primary;
}
.checkbox input:checked + .checkbox__text:after {
  left: 6px;
}
</style>
