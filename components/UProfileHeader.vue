<template>
  <section class="profile-header">
    <div class="profile-header-info">
      <div class="profile-header-left">
        <div class="logo-container">
          <img src="../assets/images/content/profile-avatar.jpg" alt="avatar" class="profile-header-img">
        </div>
      </div>
      <div class="profile-header-right">
        <div v-if="!isEdit" class="profileHeaderIsView">
          <div class="profile-header-right-top">
            <span class="profile-header-name">{{ localUserHeaderInfo.name }}</span>
            <div @click="onEdit" class="profile-header-edit-btn" />
          </div>
          <ul class="profile-header-list">
            <li class="profile-header-item">
              <span>{{ localUserHeaderInfo.jobTitle }}</span>
            </li>
            <li class="profile-header-item">
              <span>{{ localUserHeaderInfo.department }}</span>
            </li>
            <li class="profile-header-item">
              <spa>{{ localUserHeaderInfo.company }}</spa>
            </li>
            <li class="profile-header-item">
              <strong>Start Date:</strong>
              <span>{{ localUserHeaderInfo.startDate }}</span>
            </li>
          </ul>
          <button class="small-btn primary-btn">
            Send Email
          </button>
        </div>
        <validation-observer ref="edit" v-else tag="div">
          <form @submit.prevent="handleSubmit(onSubmit)">
            <div class="profile-header-right-top">
              <validation-provider v-slot="{ errors, classes }" class="provile-header-input" name="name" rules="required|min:3" tag="div">
                <label>
                  <input :class="classes" v-model="localUserHeaderInfo.name" class="profile-header-name" type="text">
                </label>
                <p v-for="(error, i) of errors" :key="i">
                  <span class="error">{{ error }}</span>
                </p>
              </validation-provider>
            </div>
            <validation-provider v-slot="{ errors, classes }" class="provile-header-input" name="Job-Title" rules="required|min:3" tag="div">
              <label>
                <input :class="classes" v-model="localUserHeaderInfo.jobTitle" class="profile-header-input" type="text">
              </label>
              <p v-for="(error, i) of errors" :key="i">
                <span class="error">{{ error }}</span>
              </p>
            </validation-provider>
            <validation-provider v-slot="{ errors, classes }" class="provile-header-input" name="department" rules="required|min:3" tag="div">
              <label>
                <input :class="classes" v-model="localUserHeaderInfo.department" class="profile-header-input" type="text">
              </label>
              <p v-for="(error, i) of errors" :key="i">
                <span class="error">{{ error }}</span>
              </p>
            </validation-provider>
            <validation-provider v-slot="{ errors, classes }" class="provile-header-input" name="company" rules="required|min:3" tag="div">
              <label>
                <input :class="classes" v-model="localUserHeaderInfo.company" class="profile-header-input" type="text">
              </label>
              <p v-for="(error, i) of errors" :key="i">
                <span class="error">{{ error }}</span>
              </p>
            </validation-provider>
            <div class="profile-header-date">
              <validation-provider v-slot="{ errors, classes }" name="date" rules="required" tag="div">
                <label>
                  <strong>Start Date:</strong>
                  <DatePick
                    v-model="localUserHeaderInfo.startDate"
                    :format="format"
                    :class="classes"
                    :parseDate="parseDate"
                    :formatDate="formatDate"
                    :inputAttributes="{ size: 32 }"
                  />
                </label>
                <p v-for="(error, i) of errors" :key="i">
                  <span class="error">{{ error }}</span>
                </p>
              </validation-provider>
            </div>
            <div class="isEditButtons">
              <button @click="onSave" type="submit" class="small-btn primary-btn">
                save
              </button>
              <button @click="onCancel" class="small-btn primary-btn">
                cancel
              </button>
            </div>
          </form>
        </validation-observer>
      </div>
    </div>
    <tabs :options="{ useUrlFragment: false }">
      <tab name="General Info">
        <UProfileMain @saveProfileMain="onSaveMain" :user="localUserMainInfo" />
      </tab>
      <tab name="Direct Team">
        This is the content of the second tab
      </tab>
    </tabs>
  </section>
</template>

<script>
import { Tabs } from 'vue-tabs-component'
import Vue from 'vue'
import DatePick from 'vue-date-pick'
import fecha from 'fecha'
import UProfileMain from '../components/UProfileMain'

export default {
  name: 'UProfileHeader',
  components: {
    UProfileMain,
    DatePick
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      localUserHeaderInfo: {
        jobTitle: '',
        department: '',
        company: '',
        startDate: '',
        name: ''
      },
      localUserMainInfo: {
        name: '',
        nickname: '',
        birthDate: '',
        age: ((new Date().getTime() - new Date(this.birthDate)) / (24 * 3600 * 365.25 * 1000)) | 0,
        workAddress: '',
        homeAddress: '',
        homeSubAddress: '',
        email: '',
        homePhone: '',
        mobilePhone: '',
        workPhone: ''
      },
      isEdit: false,
      format: 'MMM D, YYYY'
    }
  },
  created () {
    this.localUserMainInfo = { ...this.user.userMainInfo }
    this.localUserHeaderInfo = { ...this.user.userHeaderInfo }
  },
  methods: {
    onEdit () {
      this.isEdit = true
    },
    onSave () {
      this.isEdit = false
      this.$emit('save', this.localUserInfo)
    },
    onCancel () {
      this.localUserInfo = { ...this.user }
      this.isEdit = false
    },
    onSaveMain (userInfo) {
      this.localUserMainInfo = { ...userInfo }
      this.$emit('saveProfileMain', this.localUserMainInfo)
    },
    parseDate (dateString, format) {
      return fecha.parse(dateString, format)
    },
    formatDate (dateObj, format) {
      return fecha.format(dateObj, format)
    },
    async onSubmit () {
      try {
        if (await this.$refs.edit.validate()) {
          // eslint-disable-next-line no-console
          console.log('wwwwww')
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e.response)
      }
    }
  }
}
Vue.use(Tabs)
</script>

<style scoped lang='scss'>
  @import "../assets/main.scss";
  .profile-header {
    background-color: $white;
    padding: 20px;
    width: 100%;
    .profile-header-item {
      font-size: 16px;
      text-transform: capitalize;
      margin: 9px 0;
    }
    strong {
      margin-right: 10px;
    }
    input {
      border: none;
      outline: none;
      display: inline-block;
      font-size: 16px;
      @include breakpoint-mf(lg) {
        min-width: 300px;
      }
    }
    .profile-header-input {
      border-bottom: solid 1px #d6d6d6;
      margin-bottom: 5px;
      padding: 2px 5px;
    }
    .profile-header-info {
      display: flex;
      flex-wrap: wrap;
      padding-bottom: 20px;
      @include breakpoint-mf(sm) {
        flex-wrap: nowrap;
      }
    }
    .profile-header-left {
      width: 180px;
    }
    .profile-header-right {
      width: 100%;
      padding-bottom: 10px;
      @include breakpoint-mf(sm) {
        margin-left: 20px;
        width: calc(100% - 200px);
        padding-bottom: 20px;
      }
      @include breakpoint-mf(lg) {
        padding-bottom: 30px;
      }
    }
    .profile-header-right-top {
      display: flex;
      align-items: center;
      padding-bottom: 15px;
    }

    .profileHeaderIsEdit {
      display: flex;
      flex-direction: column;
    }
    .profile-header-name {
      font-weight: 400;
      font-size: 20px;
      @include breakpoint-mf(lg) {
        font-size: 24px;
      }
    }
    .profile-header-edit-btn {
      margin-left: 15px;
      display: inline-block;
      cursor: pointer ;
      @include sprite($pencil)
    }

    .profile-header-item:before {
      content: "";
      display: inline-block;
      margin-right: 10px;
    }

    .profile-header-item:nth-child(1):before {
      @include sprite($briefcase)
    }

    .profile-header-item:nth-child(2):before {
      @include sprite($portfolio)
    }

    .profile-header-item:nth-child(3):before {
      @include sprite($company-icon)
    }

    .profile-header-item:nth-child(4):before {
      @include sprite($calendar-for-header-profile)
    }
    .profile-header-date {
      font-size: 16px;
      display: flex;max-width: 300px;
      align-items: center;
      margin-bottom: 20px;
      label {
        display: flex;
        align-items: center;
      }
      input {
        margin: 0;
        padding-top: 0;
        padding-bottom: 0;
      }
      strong {
        white-space: nowrap;
      }
    }

  }
</style>
