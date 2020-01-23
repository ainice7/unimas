<template>
  <section class="user-info">
    <div class="user-info-top">
      <h2 class="user-info-title">
        employee's personal information
      </h2>
      <button @click="onEdit" v-if="!isEdit" type="button" class="small-btn white-btn">
        Edit
      </button>
    </div>
    <div class="user-info-blocks-container">
      <div v-if="!isEdit" class="user-info-view">
        <div class="user-info-form-block">
          <h3 class="info-form-block-title">
            Basic information:
          </h3>
          <div class="info-form-block-fields row">
            <div class="col-xs-12 col-sm-6 col-xl-4 info-form-item">
              <span class="info-form-field-title">Employee #</span>
              <span class="info-form-field-value">1</span>
            </div>
            <div class="col-xs-12 col-sm-6 col-xl-4 info-form-item">
              <span class="info-form-field-title">Status</span>
              <span class="info-form-field-value">{{ localUserMainInfo.status }}</span>
            </div>
            <div class="col-xs-12 col-sm-6 col-xl-4 info-form-item">
              <span class="info-form-field-title">Nickname</span>
              <span class="info-form-field-value">{{ user.nickname }}</span>
            </div>
            <div class="col-xs-12 col-sm-6 col-xl-4 info-form-item">
              <span class="info-form-field-title">Name</span>
              <span class="info-form-field-value">{{ user.name }}</span>
            </div>
            <div class="col-xs-12 col-md-5 col-lg-6 col-xxl-4 info-form-item">
              <div class="info-form-birth-date-on-view">
                <div>
                  <span class="info-form-field-title">
                    Birth Date
                  </span>
                  <span class="info-form-field-value">
                    {{ user.birthDate }}
                    <span class="info-form-age">(Age:{{ user.age }})</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="user-info-form-block user-info-address">
          <h3 class="info-form-block-title">
            Address:
          </h3>
          <div class="info-form-block-fields row">
            <div class="col-xs-12 info-form-item">
              <div class="address-view-block">
                <span class="info-form-icons pin-view" />
                <div class="address-fields">
                  <span class="info-form-field-value first-address-field">
                    {{ user.workAddress }}
                  </span>
                  <span class="info-form-field-value info-form-address">
                    {{ user.homeAddress }}
                  </span>
                  <span class="info-form-field-value info-form-address">
                    {{ user.homeSubAddress }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="user-info-form-block">
          <h3 class="info-form-block-title">
            Contact:
          </h3>
          <div class="info-form-block-fields">
            <div class="row">
              <div class="col-xxs-12 col-sm-6 col-xl-4 info-form-item">
                <span class="info-form-field-title">
                  Phone
                </span>
                <span class="info-form-field-value">
                  <span class="info-form-icons work-phone-view" />
                  {{ user.workPhone }}
                </span>

                <span class="info-form-field-value info-form-phone">
                  <span class="info-form-icons mobile-phone-view" />
                  {{ user.mobilePhone }}
                </span>
                <span class="info-form-field-value info-form-phone">
                  <span class="info-form-icons home-phone-view" />
                  {{ user.homePhone }}
                </span>
              </div>
              <div class="col-xxs-12 col-sm-6 col-xl-4 info-form-item">
                <span class="info-form-field-title">Email</span>
                <span class="info-form-field-value">
                  <span class="info-form-icons email-view" />
                  {{ user.email }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <validation-observer ref="addUserForm" v-slot="{ handleSubmit }" v-else class="user-info-edit" tag="div">
        <form @submit.prevent="handleSubmit(onSubmit)">
          <div class="user-info-form-block">
            <h3 class="info-form-block-title">
              Basic information:
            </h3>
            <div class="info-form-block-fields row">
              <div class="col-xs-12 col-sm-6 col-xl-4 info-form-item employee">
                <span class="info-form-field-title">Employee #</span>
                <span class="info-form-field-value">1</span>
              </div>
              <div class="col-xs-12 col-sm-6 col-xl-4 info-form-item">
                <v-select v-model="localUserMainInfo.status" :options="['Active','No active']" />
              </div>
              <validation-provider v-slot="{ errors, classes }" class="col-xs-12 col-sm-6 col-xl-4 info-form-item" name="name" rules="required|min:3" tag="div">
                <label>
                  <input :class="classes" v-model="localUserMainInfo.nickname" class="profile-header-name" type="text">
                </label>
                <p v-for="(error, i) of errors" :key="i">
                  <span class="error">{{ error }}</span>
                </p>
              </validation-provider>
              <validation-provider v-slot="{ errors, classes }" class="col-xs-12 col-sm-6 col-xl-4 info-form-item" name="name" rules="required|min:3" tag="div">
                <label>
                  <input :class="classes" v-model="localUserMainInfo.name" class="profile-header-name" type="text">
                </label>
                <p v-for="(error, i) of errors" :key="i">
                  <span class="error">{{ error }}</span>
                </p>
              </validation-provider>
              <validation-provider v-slot="{ errors, classes }" class="col-xs-12 col-sm-6 col-xl-4 info-form-item info-form-birth-date-on-edit" name="name" rules="required" tag="div">
                <label>
                  <span class="birth-date-title">Birth Date</span>
                  <date-pick
                    v-model="localUserMainInfo.birthDate"
                    :class="classes"
                    :format="format"
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
          </div>
          <div class="user-info-form-block user-info-address">
            <h3 class="info-form-block-title">
              Address:
            </h3>
            <div class="info-form-block-fields row">
              <div class="col-xs-12 info-form-item">
                <div class="info-form-address-block">
                  <validation-provider v-slot="{ errors, classes }" name="address" rules="required|min:3" tag="div">
                    <label :class="classes" class="info-form-custom-input">
                      <span class="info-fields-icons field-icon-for-address" />
                      <input v-model="localUserMainInfo.homeAddress" class="profile-header-name" type="text">
                    </label>
                    <p v-for="(error, i) of errors" :key="i">
                      <span class="error">{{ error }}</span>
                    </p>
                  </validation-provider>
                  <validation-provider v-slot="{ errors, classes }" name="address" rules="required|min:3" tag="div">
                    <label :class="classes" class="info-form-custom-input">
                      <span class="info-fields-icons field-icon-for-address" />
                      <input v-model="localUserMainInfo.homeSubAddress" class="profile-header-name" type="text">
                    </label>
                    <p v-for="(error, i) of errors" :key="i">
                      <span class="error">{{ error }}</span>
                    </p>
                  </validation-provider>
                  <validation-provider v-slot="{ errors, classes }" name="address" rules="required|min:3" tag="div">
                    <label :class="classes" class="info-form-custom-input">
                      <span class="info-fields-icons field-icon-for-address" />
                      <input v-model="localUserMainInfo.workAddress" class="profile-header-name" type="text">
                    </label>
                    <p v-for="(error, i) of errors" :key="i">
                      <span class="error">{{ error }}</span>
                    </p>
                  </validation-provider>
                </div>
              </div>
            </div>
          </div>
          <div class="user-info-form-block">
            <h3 class="info-form-block-title">
              Contact:
            </h3>
            <div class="info-form-block-fields row">
              <div class="col-xxs-12 col-xs-6 col-sm-6 col-xl-4 info-form-item">
                <validation-provider v-slot="{ errors, classes }" name="phone" rules="required|min:3" tag="div">
                  <label :class="classes" class="info-form-custom-input">
                    <span class="info-fields-icons field-icon-for-work-phone" />
                    <input v-model="localUserMainInfo.workPhone" type="text" placeholder="Phone">

                  </label>
                  <p v-for="(error, i) of errors" :key="i">
                    <span class="error">{{ error }}</span>
                  </p>
                </validation-provider>
              </div>
              <div class="col-xxs-12 col-xs-6 col-sm-6 col-xl-4 info-form-item">
                <validation-provider v-slot="{ errors, classes }" name="phone" rules="required|min:3" tag="div">
                  <label :class="classes" class="info-form-custom-input">
                    <span class="info-fields-icons field-icon-for-mobile-phone" />
                    <input v-model="localUserMainInfo.mobilePhone" type="text" placeholder="Phone">

                  </label>
                  <p v-for="(error, i) of errors" :key="i">
                    <span class="error">{{ error }}</span>
                  </p>
                </validation-provider>
              </div>
              <div class="col-xxs-12 col-xs-6 col-sm-6 col-xl-4 info-form-item">
                <validation-provider v-slot="{ errors, classes }" name="phone" rules="required|min:3" tag="div">
                  <label :class="classes" class="info-form-custom-input">
                    <span class="info-fields-icons field-icon-for-home-phone" />
                    <input v-model="localUserMainInfo.homePhone" type="text" placeholder="Phone">

                  </label>
                  <p v-for="(error, i) of errors" :key="i">
                    <span class="error">{{ error }}</span>
                  </p>
                </validation-provider>
              </div>
              <div class="col-xxs-12 col-xs-6 col-sm-6 col-xl-4 info-form-item">
                <validation-provider v-slot="{ errors, classes }" name="email" rules="required|email" tag="div">
                  <label :class="classes" class="info-form-custom-input">
                    <span class="info-fields-icons field-icon-for-email" />
                    <input v-model="localUserMainInfo.email" type="text" placeholder="Email">

                  </label>
                  <p v-for="(error, i) of errors" :key="i">
                    <span class="error">{{ error }}</span>
                  </p>
                </validation-provider>
              </div>
            </div>
          </div>
          <div class="buttons-for-IsEdit">
            <button @click="onCancel" class="big-btn white-btn">
              Cancel
            </button>
            <button type="submit" class="big-btn primary-btn">
              Save
            </button>
          </div>
        </form>
      </validation-observer>
    </div>
  </section>
</template>

<script>
import DatePick from 'vue-date-pick'
import vSelect from 'vue-select'
import fecha from 'fecha'

export default {
  name: 'UProfileMain',
  components: { DatePick, vSelect },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      localUserMainInfo: {
        name: '',
        nickname: '',
        birthDate: '',
        workAddress: '',
        homeAddress: '',
        homeSubAddress: '',
        email: '',
        homePhone: '',
        mobilePhone: '',
        workPhone: '',
        status: ''
      },
      isEdit: false,
      format: 'MMM D, YYYY'
    }
  },
  created () {
    this.localUserMainInfo = { ...this.user }
  },
  methods: {
    onEdit () {
      this.isEdit = true
    },
    onSave () {
      this.isEdit = false
      this.$emit('saveProfileMain', this.localUserMainInfo)
    },
    onCancel () {
      this.localUserMainInfo = { ...this.user }
      this.isEdit = false
    },
    parseDate (dateString, format) {
      return fecha.parse(dateString, format)
    },
    formatDate (dateObj, format) {
      return fecha.format(dateObj, format)
    },
    async onSubmit () {
      try {
        if (await this.$ref.addUserForm.validate()) {
          // eslint-disable-next-line no-console
          console.log(this.$refs.addUserForm.validate())
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e.response)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/main.scss";

  .user-info {
    margin-top: 10px;
    background-color: $white;
    .user-info-top {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: solid 1px $black;
      padding-bottom: 15px;
      @include breakpoint-mf(xs) {
        padding: 0 0 15px 10px;
        flex-direction: row;
      }
      .user-info-title {
        margin: 0;
        padding: 10px;
        align-items: center;
        display: flex;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 700;
        @include breakpoint-mf(xs) {
          padding: 0;
        }
        @include breakpoint-mf(md) {
          font-size: 17px;
        }
      }
      .user-info-title:before {
        flex-shrink: 0;
        content: "";
        display: inline-block;
        margin-right: 10px;
        @include sprite($summary-icon)
      }
    }
    .user-info-blocks-container {
      line-height: 24px;
      color: $base-color;
      font-weight: 600;
      @include breakpoint-mf(md) {
        padding: 15px;
      }
      @include breakpoint-mf(lg) {
        padding: 25px;
      }
      .user-info-form-block {
        margin-top: 20px;
        .info-form-block-title {
          text-transform: uppercase;
          font-size: 16px;
          font-weight: 600;
        }
        .info-form-item {
          display: flex;
          padding-bottom: 20px;
          @include breakpoint-mf(md) {
            padding-bottom: 25px;

          }
          @include breakpoint-mf(lg) {
            padding-bottom: 45px;

          }
          input, select {
            width: 100%;
            padding: 5px;
            display: inline-block;
            font-weight: 300;
            -webkit-appearance: none;
            -moz-appearance: none;
            background: none;
            border-radius: 0;
            border: none;
            border-bottom: solid 1px #d6d6d6;
            outline: none;
            font-size: 16px;
          }
          select {
            border: solid 1px #d6d6d6;
          }
          #user-birth-date {
            -webkit-appearance: none;
            -moz-appearance: none;
            padding-right: 25px;

          }
          .info-form-field-title {
            white-space: nowrap;
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            font-size: 16px;
            line-height: 24px;
            color: $base-color;
            font-weight: 600;
          }
          .info-fields-icons {
            display: flex;
          }
          .info-fields-icons:before {
            content: "";
            display: inline-block;
            margin-right: 15px;
          }
          .field-icon-for-home-phone:before {
            @include sprite($edit-hme-phone)
          }
          .field-icon-for-mobile-phone:before {
            @include sprite($edit-mobile-phone)
          }
          .field-icon-for-work-phone:before {
            @include sprite($edit-work-phone)
          }
          .field-icon-for-email:before {
            @include sprite($edit-email)
          }
          .info-form-address-block {
            .info-form-custom-input {
              display: flex;
              width: 100%;
              border-bottom: solid 1px #d6d6d6;
              margin-bottom: 15px;
              @include breakpoint-mf(lg) {
                width: 80%;
                margin-top: 25px;
              }
              input {
                border: none;
              }
            }
          }
          .field-icon-for-address:before {
            @include sprite($edit-address)
          }
          .info-form-icons {
            width: 20px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }
          .address-view-block {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .work-phone-view:before {
            content: "";
            display: inline-block;
            @include sprite($work-phone-view)
          }
          .mobile-phone-view:before {
            content: "";
            display: inline-block;
            @include sprite($mobile-phone-view)
          }
          .home-phone-view:before {
            content: "";
            display: inline-block;
            @include sprite($home_phone-view)
          }
          .email-view:before {
            content: "";
            display: inline-block;
            @include sprite($email-view)
          }
          .pin-view {
            width: 20px;
            margin-top: 5px;
          }
          .pin-view:before {
            margin: 0 auto;
            content: "";
            display: inline-block;
            @include sprite($pin-view)
          }
          .info-form-field-value {
            width: 100%;
            display: block;
            font-weight: 300;
            font-size: 16px;
          }
          .first-address-field {
            font-weight: 700;
          }
          .info-form-address-input {
            width: 100%;
          }
          .info-form-phone, .info-form-address {
            margin-top: 0;
          }
          .info-form-birth-date-on-edit {
            label {
              display: flex;
              white-space: nowrap;
              align-items: center;
            }
            display: flex;
            flex-wrap: nowrap;
          }
          .info-form-age {
            display: inline-block;
            color: #d6d6d6;
          }
          .birth-date-title {
            margin-right: 10px;
          }
        }
      }
      .info-form-custom-input {
        border-bottom: solid 1px #d6d6d6;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        input {
          border: none !important;
        }
      }
    }
    .employee {
      display: flex;
      flex-direction: row;
      align-items: baseline;
      .info-form-field-value {
        margin-left: 20px;
      }
    }
    .buttons-for-IsEdit {
      max-width: 230px;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      padding-top: 10px;
      @include breakpoint-mf(md) {
        padding-top: 25px;
        max-width: 310px;
      }
    }
  }
</style>
