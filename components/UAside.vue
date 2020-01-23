<template>
  <div class="profile-aside">
    <button :class="{ cross: isShow }" @click="isShow = !isShow" class="aside-show-btn" />
    <div :class="{ show: isShow }" class="aside-wrapper">
      <client-only>
        <tabs :options="{ useUrlFragment: false }">
          <tab name="<span class ='follow'></span>">
            <div class="aside-main">
              <div class="aside-img">
                <img src="../assets/images/content/paper.png" alt="paper">
              </div>
              <h2 class="aside-title">
                Looking for
                your employee
                record&
              </h2>
              <p class="aside-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </tab>
          <tab name="<span class ='add-user'></span>">
            <div class="aside-main">
              <div class="aside-img">
                <img src="../assets/images/content/paper.png" alt="paper">
              </div>
              <h2 class="aside-title">
                Looking for
                record&
              </h2>
              <p class="aside-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </tab>
          <tab name="<span class ='ticket'></span>">
            <div class="aside-main">
              <div class="aside-img">
                <img src="../assets/images/content/paper.png" alt="paper">
              </div>
              <h2 class="aside-title">
                Looking for
                your employee
                record&
              </h2>
              <p class="aside-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </tab>
          <tab name="<span class ='note'></span>">
            <div class="aside-main">
              <div class="aside-img">
                <img src="../assets/images/content/paper.png" alt="paper">
              </div>
              <h2 class="aside-title">
                Looking for
                your employee
                record&
              </h2>
              <p class="aside-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </tab>
          <tab name="<span class ='reminder'></span>">
            <div class="aside-main">
              <div class="aside-img">
                <img src="../assets/images/content/paper.png" alt="paper">
              </div>
              <h2 class="aside-title">
                Looking for
                your employee
                record&
              </h2>
              <p class="aside-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </tab>
          <tab name="<span class ='settings'></span>">
            <div class="aside-main">
              <div class="aside-img">
                <img src="../assets/images/content/paper.png" alt="paper">
              </div>
              <h2 class="aside-title">
                Looking for
                your employee
                record&
              </h2>
              <p class="aside-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </tab>
        </tabs>
      </client-only>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tabs } from 'vue-tabs-component'

export default {
  name: 'UAside',
  data () {
    return {
      isShow: false
    }
  },
  methods: {
  }
}
Vue.use(Tabs)
</script>

<style scoped lang="scss">
  @import "../assets/main.scss";

  .profile-aside {
    .aside-show-btn {
      background-color: transparent;
      border: none;outline: none;
      @include sprite($arrow-for-aside);
      display: block;
      position: absolute;
      right: 25px;
      top: 15px;
      z-index: 2;
      @include breakpoint-mf(lg) {
        display: none;
      }
    }
    .aside-wrapper {
      display: flex;
      justify-content: flex-end;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      position: absolute;
      left: 100%;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 4;
      transition: all 0.5s linear;
      @include breakpoint-mf(lg) {
        position: static;
        border-left: 10px solid $body-background;
      }
      .aside-nav {
        background-color: $primary-background;
        .aside-nav-list {
          display: flex;
          height: 70px;
          @include breakpoint-mf(lg) {
            border-bottom: solid 5px $body-background;
          }
        }
      }
      .aside-main {
        display: flex;
        padding: 50px 15px;
        flex-direction: column;
        flex-grow: 1;
        @include breakpoint-mf(md) {
          min-width: 350px;
        }
      }
      .aside-text {
        font-size: 20px;
        color: $base-color-secondary;
        font-weight: 400;
        text-align: center;
        line-height: 140%;
      }
      .aside-img {
        display: flex;
        justify-content: center;
        padding-bottom: 80px;
      }
      .aside-title {
        max-width: 260px;
        margin: 0 auto;
        font-size: 30px;
        color: $base-color-secondary;
        font-weight: 700;
        text-align: center;
        line-height: 125%;
      }
    }
    .show {
      display: flex;
      justify-content: flex-end;
      right: 0;
      left: 0;
      transition: all 0.5s linear;
      z-index: 2;
    }
    .cross {
      background-color: transparent;
      @include sprite($cross-for-aside);
      right: 3px;
      top: 3px;
      z-index: 3;
    }
  }
</style>
