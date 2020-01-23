<template>
  <div
    :tabindex="tabindex"
    @blur="open = false"
    class="custom-select"
  >
    <div :class="{ open: open, highlighted: selected !== placeholder }" @click="open = !open" class="selected">
      {{ selected }}
    </div>
    <div :class="{ selectHide: !open }" class="items">
      <div
        :key="i"
        v-for="(option, i) of options"
        @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
        class="item"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabindex: {
      type: Number,
      required: false,
      default: 0
    },
    placeholder: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      selected: this.placeholder,
      open: false,
      options: []
    }
  },
  mounted () {
    this.$emit('input', this.selected)
    if (this.placeholder === 'Degree') {
      this.options = [
        'Bachelor Degree',
        'Master Degree',
        'Doctoral Degree'
      ]
    } else if (this.placeholder === 'Field') {
      this.options = [
        'Computer Science',
        'Project Manager',
        'PHP Developer',
        'Front-End Developer',
        'Recruiter'
      ]
    } else if (this.placeholder === 'University') {
      this.options = [
        'Harvard',
        'Oxford',
        'Stanford',
        'KHNADU'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/main.scss";

.custom-select {
  position: relative;
  width: 95%;
  text-align: left;
  outline: none;
  line-height: 47px;
  margin-bottom: 12px;
}

.selected {
  background-color: transparent;
  border-radius: 6px;
  border: 1px solid #c2c2c2;
  color: $input-option-color;
  padding-left: 8px;
  cursor: pointer;
  user-select: none;
  &.highlighted {
    color: #fff;
    background-color: $color-primary;
    border: 1px solid $color-primary;
  }
}

.selected.open{
  border: 1px solid $color-primary;
  border-radius: 6px 6px 0px 0px;
}

.selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 10px;
  width: 0;
  height: 0;
  border: 4px solid transparent;
  border-color: #fff transparent transparent transparent;
}

.items {
  color: #ffffff;
  border-radius: 0px 0px 6px 6px;
  display: block;
  border-right: 1px solid $color-primary;
  border-left: 1px solid $color-primary;
  border-bottom: 1px solid $color-primary;
  background-color: $primary-background;
  position: absolute;
  right: 0;
  left: 0;
  z-index: 6;
}

.item{
  color: #ffffff;
  padding-left: 8px;
  cursor: pointer;
  user-select: none;
  min-height: 50px;
}

.item:hover{
  background-color: $color-primary;
}

.selectHide {
  display: none;
}
</style>
