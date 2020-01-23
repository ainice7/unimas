<template>
  <div :class="{ 'non-check': !item.check }" class="keyblock">
    <div class="keyblock-word">
      {{ item.text }}
    </div>
    <div v-if="item.check" class="keyword-checkboxes">
      <div>
        <input :id="item.check.note.id" @click="changeNote" type="checkbox">
        <label :for="item.check.note.id" class="custom-checkbox" />
      </div>
      <div>
        <input :id="item.check.feedback.id" @click="changeFeedback" type="checkbox">
        <label :for="item.check.feedback.id" class="custom-checkbox" />
      </div>
    </div>
    <SwitchInput v-if="item.date" v-on:change-timed="changeTimed" />
    <div @click="$emit('delete-keyword')" class="delete-button" />
  </div>
</template>

<script>
import SwitchInput from './SwitchInput'

export default {
  components: {
    SwitchInput
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    changeNote () {
      this.item.check.note.checked = !this.item.check.note.checked
    },
    changeFeedback () {
      this.item.check.feedback.checked = !this.item.check.feedback.checked
    },
    changeTimed () {
      this.item.timed = !this.item.timed
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/main.scss";

.keyblock {
  padding: 0 0 9px;
  display: flex;
  &.non-check {
    justify-content: space-between;
  }
  .keyblock-word {
    width: 179px;
    height: 38px;
    background-color: $color-primary;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    flex-shrink: 0;
  }
  .keyword-checkboxes {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-left: 15px;
    width: 100%;
    div {
      width: 18px;
      height: 18px;
      margin: 0 27px 0 5px;
    }
  }
  .custom-checkbox {
    display: inline-block;
    cursor: pointer;
    position: relative;
    padding-left: 25px;
    margin-right: 15px;
    &::before {
      content: "";
      display: inline-block;
      width: 16px;
      height: 16px;
      margin-right: 10px;
      position: absolute;
      left: 0;
      bottom: 1px;
      background-color: transparent;
      border: 1px solid $color-primary;
      border-radius: 3px;
    }
  }
  input[type="checkbox"] {
    display: none;
  }
  .checkbox label {
    &:before {
      border-radius: 3px;
    }
  }
  input[type="checkbox"]:checked + label:before {
    content: "\2713";
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
    font-size: 15px;
    color: $color-primary;
    text-align: center;
    line-height: 15px;
  }
  .delete-button {
    width: 10px;
    height: 10px;
    @include sprite($cross);
    flex-shrink: 0;
    align-self: center;
    cursor: pointer;
  }
}
</style>
