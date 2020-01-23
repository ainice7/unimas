<template>
  <div class="education-block">
    <div class="enter-education">
      <EducationSelect :placeholder="item" v-for="(item, i) of placeholders" :key="i" />
      <div class="clear-values">
        <button @click="clearValues" class="clear-values-btn" />
      </div>
    </div>
    <div class="selected-education">
      <SelectedEducation />
    </div>
    <button @click="toSendEducation" class="add-education">
      + Add a New Education
    </button>
  </div>
</template>

<script>
import EducationSelect from './EducationSelect'
import SelectedEducation from './SelectedEducation'

export default {
  components: {
    EducationSelect,
    SelectedEducation
  },
  props: {
    inputParam: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      placeholders: [
        'Degree',
        'Field',
        'University'
      ],
      chosenValues: {}
    }
  },
  methods: {
    toSelectDegree (e) {
      this.chosenValues.degree = e
    },
    toSelectField (e) {
      this.chosenValues.field = e
    },
    toSelectUniversity (e) {
      this.chosenValues.university = e
    },
    toSendSelected () {
      this.$children.forEach((item) => {
        if (item.$el.className === 'custom-select') {
          if (item.selected !== item.placeholder) {
            if (item.placeholder === 'Degree') {
              this.chosenValues.degree = item.selected
            } else if (item.placeholder === 'Field') {
              this.chosenValues.field = item.selected
            } else if (item.placeholder === 'University') {
              this.chosenValues.university = item.selected
            }
          } else if (item.selected === item.placeholder) {
            const lowerValue = item.placeholder.toLowerCase()
            this.chosenValues[lowerValue] = ''
          }
        }
      })
    },
    clearValues () {
      this.$children.forEach((item) => {
        if (item.$el.className === 'custom-select') {
          item.selected = item.placeholder
        }
      })
    },
    toSendEducation () {
      this.toSendSelected()
      this.inputParam(this.chosenValues)
      this.chosenValues = {}
      this.clearValues()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/main.scss";

.education-block {
  margin-bottom: 19px;
}
.add-education {
  font-size: 12px;
  background-color: transparent;
  color: $color-primary;
  border: 1px solid $color-primary;
  border-radius: 15px;
  width: 160px;
  height: 25px;
  &:focus {
    outline: none;
  }
}
.enter-education {
  position: relative;
  .clear-values {
    position: absolute;
    height: 110%;
    width: 8%;
    top: -5%;
    right: 0;
    border: 1px solid #c2c2c2;
    border-left: 1px solid transparent;
    .clear-values-btn {
      position: absolute;
      top: calc(60% - 34px);
      right: -8px;
      width: 16px;
      height: 34px;
      border: none;
      background-color: $primary-background;
      outline: none;
      &::before, &::after {
        content: "";
        position: absolute;
        top: 25%;
        height: 15px;
        width: 2px;
        background-color: #c2c2c2;
        border-radius: 1px;
      }
      &:before {
        transform: rotate(-45deg);
        left: 7px;
      }
      &:after {
        transform: rotate(45deg);
        right: 7px;
      }
    }
  }
}
</style>
