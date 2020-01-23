<template>
  <div>
    <button id="navToggle" v-on:click="collapse" class="navbar-toggle">
      {{ pannel.text }}
      <div class="filter-arrow" />
    </button>
    <div id="mainNav" class="keywords-navbar collapsed">
      <KeywordInputBlock :type="pannel.type" />
    </div>
  </div>
</template>

<script>
import KeywordInputBlock from './KeywordInputBlock'

export default {
  components: {
    KeywordInputBlock
  },
  props: {
    pannel: {
      type: Object,
      required: true
    }
  },
  methods: {
    collapse () {
      const mainNav = this.$el.querySelector('.keywords-navbar')
      const arrow = this.$el.querySelector('.filter-arrow')
      arrow.classList.toggle('rotated')
      mainNav.classList.toggle('collapsed')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/main.scss";
.keywords-navbar {
  z-index: 5;
  max-height: 1800px;
  -webkit-transition: max-height 0.3s;
  -moz-transition: max-height 0.3s;
  -ms-transition: max-height 0.3s;
  -o-transition: max-height 0.3s;
  transition: max-height 0.3s;
}
.keywords-navbar.collapsed {
  max-height: 0;
  display: none;
}

.navbar-toggle {
  padding: 23px 0 20px;
  text-align: left;
  font-size: 16px;
  border: none;
  background-color: transparent;
  color: $white;
  text-transform: uppercase;
  display: flex;
  width: 100%;
  &:focus {
    outline: none;
  }
  border-top: 1px solid #696e84;
}
.filter-arrow {
  margin-left: 11px;
  width: 17px;
  height: 9px;
  @include sprite($arrow-filter);
  align-self: center;
  transform: rotate(180deg);
  transition: transform 0.3s ease;
  &.rotated {
    transform: rotate(0deg);
    transition: transform 0.3s ease;
  }
}
</style>
