<template>
  <div>
    <OptionToggling :pannel="item" v-for="item in pannels" :key="item.id" />
  </div>
</template>

<script>
import OptionToggling from './OptionToggling'

export default {
  components: {
    OptionToggling
  },
  data: () => ({
    pannels: [
      {
        id: 1,
        text: 'with keyword',
        type: 'withKey'
      },
      {
        id: 2,
        text: 'without keyword',
        type: 'withoutKey'
      },
      {
        id: 3,
        text: 'with skills',
        type: 'withSkills'
      },
      {
        id: 4,
        text: 'without skills',
        type: 'withoutSkills'
      },
      {
        id: 5,
        text: 'with education',
        type: 'withEducation'
      },
      {
        id: 6,
        text: 'with attribute',
        type: 'withAttribute'
      },
      {
        id: 7,
        text: 'without attribute',
        type: 'withoutAttribute'
      },
      {
        id: 8,
        text: 'that were in a process',
        type: 'schedule'
      },
      {
        id: 9,
        text: 'that were interviewed',
        type: 'interviewed'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
@import "~assets/main.scss";

.keywords-navbar {
  margin-top: 20px;
  overflow: hidden;
  z-index: 5;
  max-height: 1800px;
  -webkit-transition: max-height 0.3s;
  -moz-transition: max-height 0.3s;
  -ms-transition: max-height 0.3s;
  -o-transition: max-height 0.3s;
  transition: max-height 0.3s;
}
.keywords-navbar.collapsed {
  transition: max-height 0.3s;
  max-height: 0;
}

.navbar-toggle {
  padding: 23px 0 20px;
  margin-left: 7px;
  text-align: left;
  font-size: 16px;
  border: none;
  background-color: transparent;
  color: $white;
  text-transform: uppercase;
  display: block;
  width: 100%;
  &:focus {
    outline: none;
  }
  border-top: 1px solid #696e84;
}
.keywords-navbar li a {
  display: block;
  line-height: 40px;
  padding: 0 20px;
  text-decoration: none;
  color: #373737;
}
.keywords-navbar li a:hover {
  background-color: #eee;
}

</style>
