<template>
  <div class="search-dash">
    <div class="dash-navigation">
      <div class="dash-navigation-options">
        <div class="dash-navigation-filter">
          <span class="dash-navigation-stage">Stage</span>
          <button class="dash-navigation-up" />
          <button class="dash-navigation-down" />
        </div>
        <div class="dash-navigation-filter">
          <span>Last Activity</span>
          <button class="dash-navigation-up" />
          <button class="dash-navigation-down" />
        </div>
        <div class="dash-navigation-filter">
          <div class="dash-navigation-score">
            SCORE
          </div>
          <button class="dash-navigation-up" />
          <button class="dash-navigation-down" />
        </div>
      </div>
      <button class="bulk-actions">
        <div />
        <span>Bulk Actions</span>
      </button>
    </div>
    <DashCandidateBlock :user="user" :task="user.task.tasks" v-for="user of users" v-bind:key="user.id" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DashCandidateBlock from './DashCandidateBlock'

export default {
  components: {
    DashCandidateBlock
  },
  data () {
    return {
      // users: [
      //   {
      //     id: 1,
      //     name: 'James Addams',
      //     position: 'PHP Senior Developer',
      //     attention: true,
      //     department: 'Marketing Department',
      //     company: 'Microsoft',
      //     startDate: '1985-03-03',
      //     nickname: 'Smitti',
      //     birthDate: '1985-03-03',
      //     age: ((new Date().getTime() - new Date(this.birthDate)) / (24 * 3600 * 365.25 * 1000)) | 0,
      //     workAddress: '775 Westminster Avenue APT D5',
      //     homeAddress: 'Brooklyn',
      //     homeSubAddress: 'N.Y., USA, 11201',
      //     email: 'mail@gmail.com',
      //     homePhone: '415-555-1345',
      //     mobilePhone: '415-555-1845',
      //     workPhone: '415-555-5437',
      //     task: {
      //       type: 'review',
      //       description: 'Application to be reviewed',
      //       tasks: [
      //         {
      //           id: 1,
      //           tittle: 'Development Skills Face to Face Interview',
      //           status: 'w/Mary Brown in Head Office Tel Aviv at 4 PM',
      //           type: 'review',
      //           interview: false
      //         },
      //         {
      //           id: 2,
      //           tittle: 'PHP Skills Conference Skype Call',
      //           status: 'w/Mary Brown at 4 PM',
      //           type: 'review',
      //           interview: false
      //         }
      //       ]
      //     },
      //     avatar: `/users/james_addams.png`
      //   },
      //   {
      //     id: 2,
      //     name: 'Nick Whiteman',
      //     position: 'PHP Senior Developer',
      //     attention: true,
      //     department: 'Marketing Department',
      //     company: 'Microsoft',
      //     startDate: '1985-03-03',
      //     nickname: 'Smitti',
      //     birthDate: '1985-03-03',
      //     age: ((new Date().getTime() - new Date(this.birthDate)) / (24 * 3600 * 365.25 * 1000)) | 0,
      //     workAddress: '775 Westminster Avenue APT D5',
      //     homeAddress: 'Brooklyn',
      //     homeSubAddress: 'N.Y., USA, 11201',
      //     email: 'mail@gmail.com',
      //     homePhone: '415-555-1345',
      //     mobilePhone: '415-555-1845',
      //     workPhone: '415-555-5437',
      //     task: {
      //       type: 'decision',
      //       description: 'Needs decision “Face to Face Interview”',
      //       tasks: [
      //         {
      //           id: 1,
      //           tittle: 'Face To Face Interview',
      //           status: '',
      //           type: 'interview',
      //           interview: {
      //             answer: 'yes',
      //             interviewerName: 'Elizabeth Smith',
      //             interviewerPhoto: '/interviewer/elizabeth_smith.png'
      //           }
      //         },
      //         {
      //           id: 2,
      //           tittle: 'Advance Nick Whiteman to Offer?',
      //           status: '',
      //           type: 'offer',
      //           interview: false
      //         }
      //       ]
      //     },
      //     avatar: `/users/nick_whiteman.png`
      //   },
      //   {
      //     id: 3,
      //     name: 'Nick Smith',
      //     position: 'PHP Senior Developer',
      //     attention: false,
      //     department: 'Marketing Department',
      //     company: 'Microsoft',
      //     startDate: '1985-03-03',
      //     nickname: 'Smitti',
      //     birthDate: '1985-03-03',
      //     age: ((new Date().getTime() - new Date(this.birthDate)) / (24 * 3600 * 365.25 * 1000)) | 0,
      //     workAddress: '775 Westminster Avenue APT D5',
      //     homeAddress: 'Brooklyn',
      //     homeSubAddress: 'N.Y., USA, 11201',
      //     email: 'mail@gmail.com',
      //     homePhone: '415-555-1345',
      //     mobilePhone: '415-555-1845',
      //     workPhone: '415-555-5437',
      //     task: {
      //       type: 'schedule',
      //       description: '2 interviews to schedule for Phone Interview',
      //       tasks: [
      //         {
      //           id: 1,
      //           tittle: 'Development Skills Phone Interview',
      //           status: '',
      //           type: 'scheduled',
      //           interview: false
      //         },
      //         {
      //           id: 2,
      //           tittle: 'PHP Skills Conference Skype Call',
      //           status: 'Interview time was proposed 3 days ago',
      //           type: 'scheduled',
      //           interview: false
      //         }
      //       ]
      //     },
      //     avatar: `/users/nick_smith.png`
      //   },
      //   {
      //     id: 4,
      //     name: 'Bernard Puddington',
      //     position: 'PHP Senior Developer',
      //     attention: false,
      //     department: 'Marketing Department',
      //     company: 'Microsoft',
      //     startDate: '1985-03-03',
      //     nickname: 'Smitti',
      //     birthDate: '1985-03-03',
      //     age: ((new Date().getTime() - new Date(this.birthDate)) / (24 * 3600 * 365.25 * 1000)) | 0,
      //     workAddress: '775 Westminster Avenue APT D5',
      //     homeAddress: 'Brooklyn',
      //     homeSubAddress: 'N.Y., USA, 11201',
      //     email: 'mail@gmail.com',
      //     homePhone: '415-555-1345',
      //     mobilePhone: '415-555-1845',
      //     workPhone: '415-555-5437',
      //     task: {
      //       type: 'test',
      //       description: 'Take home Test to be sent',
      //       tasks: [
      //         {
      //           id: 1,
      //           tittle: 'Development Skills Test',
      //           status: '',
      //           type: 'test',
      //           interview: false
      //         }
      //       ]
      //     },
      //     avatar: `/users/bernard_puddington.png`
      //   },
      //   {
      //     id: 5,
      //     name: 'Eva Kim',
      //     position: 'PHP Senior Developer',
      //     attention: false,
      //     department: 'Marketing Department',
      //     company: 'Microsoft',
      //     startDate: '1985-03-03',
      //     nickname: 'Smitti',
      //     birthDate: '1985-03-03',
      //     age: ((new Date().getTime() - new Date(this.birthDate)) / (24 * 3600 * 365.25 * 1000)) | 0,
      //     workAddress: '775 Westminster Avenue APT D5',
      //     homeAddress: 'Brooklyn',
      //     homeSubAddress: 'N.Y., USA, 11201',
      //     email: 'mail@gmail.com',
      //     homePhone: '415-555-1345',
      //     mobilePhone: '415-555-1845',
      //     workPhone: '415-555-5437',
      //     task: {
      //       type: 'interview',
      //       description: '2 interviews today',
      //       tasks: [
      //         {
      //           id: 1,
      //           tittle: 'Development Skills Face to Face Interview',
      //           status: 'w/Mary Brown in Head Office Tel Aviv at 4 PM',
      //           type: 're-schedule',
      //           interview: false
      //         },
      //         {
      //           id: 2,
      //           tittle: 'PHP Skills Conference Skype Call',
      //           status: 'w/Mary Brown at 4 PM',
      //           type: 're-schedule',
      //           interview: false
      //         }
      //       ]
      //     },
      //     avatar: `/users/eva_kim.png`
      //   },
      //   {
      //     id: 6,
      //     name: 'Alex Williamson',
      //     position: 'PHP Senior Developer',
      //     department: 'Marketing Department',
      //     company: 'Microsoft',
      //     startDate: '1985-03-03',
      //     nickname: 'Smitti',
      //     birthDate: '1985-03-03',
      //     age: ((new Date().getTime() - new Date(this.birthDate)) / (24 * 3600 * 365.25 * 1000)) | 0,
      //     workAddress: '775 Westminster Avenue APT D5',
      //     homeAddress: 'Brooklyn',
      //     homeSubAddress: 'N.Y., USA, 11201',
      //     email: 'mail@gmail.com',
      //     homePhone: '415-555-1345',
      //     mobilePhone: '415-555-1845',
      //     workPhone: '415-555-5437',
      //     attention: false,
      //     task: {
      //       type: 'waiting',
      //       description: 'Waiting for candidate to submit test',
      //       tasks: [
      //         {
      //           id: 1,
      //           tittle: 'Development Skills Test',
      //           status: 'Sent, 14 days ago',
      //           interview: false,
      //           type: 'vendor'
      //         }
      //       ]
      //     },
      //     avatar: `/users/alex_williamson.png`
      //   },
      //   {
      //     id: 7,
      //     name: 'Lara Camomile',
      //     position: 'PHP Senior Developer',
      //     department: 'Marketing Department',
      //     company: 'Microsoft',
      //     startDate: '1985-03-03',
      //     nickname: 'Smitti',
      //     birthDate: '1985-03-03',
      //     age: ((new Date().getTime() - new Date(this.birthDate)) / (24 * 3600 * 365.25 * 1000)) | 0,
      //     workAddress: '775 Westminster Avenue APT D5',
      //     homeAddress: 'Brooklyn',
      //     homeSubAddress: 'N.Y., USA, 11201',
      //     email: 'mail@gmail.com',
      //     homePhone: '415-555-1345',
      //     mobilePhone: '415-555-1845',
      //     workPhone: '415-555-5437',
      //     attention: false,
      //     task: {
      //       type: 'todo',
      //       description: '2 to-dos due for Face to Face Interview',
      //       tasks: [
      //         {
      //           id: 1,
      //           tittle: 'Development Skills Face to Face Interview',
      //           status: 'John Smith, about 3 months ago',
      //           type: 'reminder',
      //           interview: false
      //         },
      //         {
      //           id: 2,
      //           tittle: 'PHP Skills Conference Skype Call',
      //           status: 'John Smith, about 3 months ago',
      //           type: 'reminder',
      //           interview: false
      //         }
      //       ]
      //     },
      //     avatar: `/users/lara_camomile.png`
      //   }
      // ]
    }
  },
  computed: mapGetters({
    users: 'users/users'
  })
}
</script>

<style lang="scss" scoped>
@import "~assets/main.scss";

.search-dash {
  grid-area: "dash";
  .dash-navigation {
    display: flex;
    font-weight: 600;
    color: $base-color;
    padding: 7px 10px 16px 20px;
    align-items: center;
    justify-content: space-between;
    .dash-navigation-options {
      display: flex;
      .dash-navigation-filter {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 600;
        text-transform: uppercase;
        .dash-navigation-stage {
          margin-right: 7px;
        }
        .dash-navigation-score {
          font-weight: 700;
          position: relative;
          font-size: 16px;
          padding: 3px 0 15px 25px;
          margin-right: 17px;
          &::before,
          &::after {
            content: "";
            position: absolute;
          }
          &::before {
            top: 0;
            left: 0;
            width: 21px;
            height: 24px;
            @include sprite($score);
          }
          &::after {
            bottom: 0;
            left: 0;
            height: 5px;
            width: 76px;
            @include sprite($score-gradient);
          }
        }
      }
      .dash-navigation-filter:nth-child(2) {
        margin-left: 44px;
      }
      .dash-navigation-filter:nth-child(3) {
        margin-left: 58px;
      }
      .dash-navigation-up,
      .dash-navigation-down {
        width: 32px;
        height: 32px;
        background-color: #52a8d0;
        border: none;
        border-radius: 5px;
        position: relative;
        margin: 0 6px;
        &::before {
          content: "";
          position: absolute;
          right: 14px;
          width: 2px;
          height: 20px;
          background-color: $white;
          border-radius: 2px;
        }
        &::after {
          content: "";
          position: absolute;
          right: 12px;
          width: 7px;
          height: 7px;
          border-top: 2px solid $white;
          border-right: 2px solid $white;
          transform: rotate(-45deg);
          border-radius: 2px;
        }
      }
      .dash-navigation-up {
        &::before {
          top: 7px;
        }
        &::after {
          top: 6px;
        }
      }
      .dash-navigation-down {
        &::before {
          top: 5px;
        }
        &::after {
          transform: rotate(135deg);
          bottom: 6px;
        }
      }
    }
    .bulk-actions {
      background-color: transparent;
      color: $color-primary;
      border: 1px solid $color-primary;
      border-radius: 20px;
      width: 162px;
      height: 42px;
      font-size: 14px;
      text-transform: uppercase;
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        width: 16px;
        height: 16px;
        background-color: $color-primary;
        position: relative;
        &::before,
        &::after {
          content: "";
          position: absolute;
          top: 0px;
          left: 4px;
        }
        &::before {
          height: 100%;
          width: 2px;
          background-color: $body-background;
        }
        &:after {
          width: 20px;
          height: 8px;
          border: 2px solid $body-background;
          top: 4px;
          left: -2px;
        }
      }
      &:hover {
        background-color: $color-primary;
        color: $body-background;
        div {
          background-color: $body-background;
          &::before {
            background-color: $color-primary;
          }
          &::after {
            border-color: $color-primary;
          }
        }
      }
      span {
        position: relative;
        padding-left: 15px;
        line-height: 100%;
      }
    }
  }
}
</style>
