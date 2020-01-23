<template>
  <div>
    <TheDashboardNav />
    <div class="profile">
      <UProfileHeader :user="userInfo" @saveProfileMain="onSaveMain" @saveProfileHeader="onSaveHeader" />
      <UAside />
    </div>
  </div>
</template>
<script>
import TheDashboardNav from '../components/TheDashboardNav.vue'
import UProfileHeader from '../components/UProfileHeader'
import UAside from '../components/UAside'

export default {
  name: 'Profile',
  components: {
    TheDashboardNav,
    UAside,
    UProfileHeader
  },
  data () {
    return {
      userInfo: {
        userHeaderInfo: {
          jobTitle: 'job Title',
          department: 'Marketing Department',
          company: 'Microsoft',
          startDate: '1985-03-03',
          name: 'Charlotte Danielle Abbott',
          nickname: 'Smitti',
          birthDate: '1985-03-03',
          age: ((new Date().getTime() - new Date(this.birthDate)) / (24 * 3600 * 365.25 * 1000)) | 0,
          workAddress: '775 Westminster Avenue APT D5',
          homeAddress: 'Brooklyn',
          homeSubAddress: 'N.Y., USA, 11201',
          email: 'mail@gmail.com',
          homePhone: '415-555-1345',
          mobilePhone: '415-555-1845',
          workPhone: '415-555-5437'
        },
        userMainInfo: {
          name: 'Charlotte Danielle Abbott',
          status: 'Active',
          nickname: 'Smitti',
          birthDate: '1985-03-03',
          age: ((new Date().getTime() - new Date(this.birthDate)) / (24 * 3600 * 365.25 * 1000)) | 0,
          workAddress: '775 Westminster Avenue APT D5',
          homeAddress: 'Brooklyn',
          homeSubAddress: 'N.Y., USA, 11201',
          email: 'mail@gmail.com',
          homePhone: '415-555-1345',
          mobilePhone: '415-555-1845',
          workPhone: '415-555-5437'
        }
      }
    }
  },
  async asyncData ({ $axios, params }) {
    let user = {}
    try {
      user = await $axios.$get(`/users/${params.id}`, {
        params: {
          _embed: 'posts'
        }
      })
      // eslint-disable-next-line no-console
      console.log(user)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e.response)
    }
    return { user }
  },
  methods: {
    onSaveMain (userInfo) {
      this.userInfo.userMainInfo = { ...userInfo }
    },
    onSaveHeader (userInfo) {
      this.userInfo.userHeaderInfo = { ...userInfo }
    }
  }
}
</script>
<style scoped lang="scss">
  @import "../assets/main.scss";
  .profile {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
    @include breakpoint-mf(md) {
      flex-direction: row;
    }
  }
</style>
