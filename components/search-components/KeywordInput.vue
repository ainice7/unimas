<template>
  <div class="keyword-inputs">
    <input
      v-on:click="inputParam"
      v-if="isChecked"
      class="keyword-input-submit"
      type="submit"
      value=""
    >
    <input
      ref="keyword"
      v-on:keyup.enter="inputParam"
      v-if="isChecked"
      class="keyword-input"
      type="text"
      placeholder="Type a keyword"
    >
    <a-date-picker v-if="!isChecked" @change="onChange" @ok="onOk" :format="dateFormat">
      <div class="keyword-input date-picker">
        Date
      </div>
    </a-date-picker>
  </div>
</template>

<script>
export default {
  props: {
    inputParam: {
      type: Function,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      time1: undefined,
      dateFormat: 'll'
    }
  },
  computed: {
    isChecked () {
      return this.type !== 'schedule' && this.type !== 'interviewed'
    }
  },
  methods: {
    onChange (value, dateString) {
      if (value === null) {
        return ''
      } else {
        this.inputParam(value.format(), dateString)
      }
    },
    onOk (value) {
      if (value === null) {
        return ''
      } else {
        this.inputParam(value.format(), value.format(this.dateFormat))
      }
    },
    clearTime () {
      this.time1 = undefined
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/main.scss";

.keyword-inputs {
  position: relative;
  margin-bottom: 20px;
  .keyword-input {
    border: none;
    font-size: 14px;
    padding: 7px 0 7px 31px;
    width: 250px;
    background-color: transparent;
    border-bottom: 1px solid #fff;
    &:focus {
      outline-color: $color-primary;
    }
    &::-webkit-input-placeholder {
      text-indent: 0px;
      transition: text-indent 0.3s ease;
      color: $input-option-color;
    }
    &::-moz-placeholder {
      text-indent: 0px;
      transition: text-indent 0.3s ease;
      color: $input-option-color;
    }
    &:-moz-placeholder {
      text-indent: 0px;
      transition: text-indent 0.3s ease;
      color: $input-option-color;
    }
    &:-ms-input-placeholder {
      text-indent: 0px;
      transition: text-indent 0.3s ease;
      color: $input-option-color;
    }
    &:focus::-webkit-input-placeholder {
      text-indent: 100%;
      transition: text-indent 0.3s ease;
    }
    &:focus::-moz-placeholder {
      text-indent: 100%;
      transition: text-indent 0.3s ease;
    }
    &:focus:-moz-placeholder {
      text-indent: 100%;
      transition: text-indent 0.3s ease;
    }
    &:focus:-ms-input-placeholder {
      text-indent: 100%;
      transition: text-indent 0.3s ease;
    }
    &.date-picker {
      padding: 10px 0 10px 10px;
      font-size: 16px;
      color: $input-option-color;
      background-image: url('../../assets/images/content/schedule.png');
      background-repeat: no-repeat;
      background-position: right;
      background-position-y: 50%;
      background-size: 25px;
    }
  }
  .keyword-input-submit {
    position: absolute;
    background-color: transparent;
    border: none;
    @include sprite($search-input);
    z-index: 5;
    top: 10px;
    left: 6px;
    padding: 0;
  }
}
</style>
