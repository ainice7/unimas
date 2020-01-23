<template>
  <li @click="toShow" :class="{'clicked': seen}" class="job-filter">
    <span :class="{'clicked-option': seen}" class="job-filter-option">{{ option }}</span>
    <div @click.stop="toHide" v-if="seen" class="hidden-option">
      <div class="hidden-option-arrow" />
      <span>Advanced</span>
    </div>
    <div v-if="seen" class="keywords-options">
      <div class="action-buttons">
        <button type="reset" class="clear-button">
          cancel
        </button>
        <button type="submit" class="accept-button">
          Search
        </button>
      </div>
      <VOption />
    </div>
  </li>
</template>

<script>
import VOption from './VOption'

export default {
  components: {
    VOption
  },
  props: {
    option: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      seen: false
    }
  },
  methods: {
    toShow () {
      this.seen = true
    },
    toHide () {
      this.seen = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/main.scss";

.job-filter {
  padding: 23px 0 23px 12px;
  border-bottom: 1px solid #696e84;
  opacity: 0.76;
  display: flex;
  justify-content: space-between;
  position: relative;
  .container {
      padding: 0;
  }
  cursor: pointer;
  .job-filter-option {
    position: relative;
    padding-right: 27px;
    &::after {
      content: "";
      position: absolute;
      right: 2px;
      top: 2px;
      width: 12px;
      height: 12px;
      border-bottom: 1px solid $white;
      border-right: 1px solid $white;
      transform: rotate(45deg);
      transition: all 0.3s ease;
    }
    &.clicked-option {
      &::after {
        transform: rotate(225deg);
        transition: all 0.3s ease;
        top: 10px;
      }
    }
  }
  &:hover {
    opacity: 1;
  }
  &.clicked {
    opacity: 1;
  }
  .hidden-option {
    font-size: 15px;
    color: $color-primary;
    padding-left: 13px;
    border-left: 1px solid #696e84;
    display: flex;
    .hidden-option-arrow {
      width: 19px;
      height: 17px;
      position: relative;
      margin-right: 9px;
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 1px;
        width: 14px;
        height: 3px;
        border-radius: 1px;
        background-color: $color-primary;
      }
      &::after {
        content: "";
        position: absolute;
        width: 9px;
        height: 9px;
        transform: rotate(225deg);
        border-top: 3px solid $color-primary;
        border-right: 3px solid $color-primary;
        border-radius: 1px;
        left: 0px;
        top: 6px;
      }
    }
  }
  .keywords-options {
    position: absolute;
    z-index: 5;
    top: 0;
    left: 112%;
    width: 389px;
    overflow: auto;
    cursor: default;
    background-color: $primary-background;
    opacity: 1;
    padding: 0 30px 0 35px;
    .action-buttons {
      padding: 20px 0;
      display: flex;
      justify-content: space-around;
      .clear-button {
        background-color: transparent;
        color: $color-primary;
        border: none;
        text-transform: uppercase;
        font-size: 14px;
      }
    }
  }
}
</style>
