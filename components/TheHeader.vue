<template>
  <header class="header">
    <div class="header-top">
      <div class="container">
        <div class="header-top-left">
          <a class="header-icon-link" href="tel:000000000">
            <span class="header-icon-tel" />
          </a>
          <span class="header-top-text">
            <span class="trial-count-bg">
              <span class="trial-count">7</span>
            </span>
            days left in your free trial.
            <a
              href
              class="header-top-link"
            >Upgrade your plan now</a>
          </span>
        </div>
        <div class="header-top-right">
          <div class="header-top-text">
            System message for the user such as planned maintenance
          </div>
        </div>
      </div>
    </div>
    <div class="header-middle">
      <span v-bind:class="{ burger_active: isActive }" v-on:click="isActive = !isActive" class="burger-btn">
        <span class="burger-lines" />
      </span>
      <div class="container">
        <div class="header-middle-left">
          <a class="header-logo" href="/">
            <img class="header-logo" src="../assets/images/content/logo.png" alt>
          </a>
        </div>
        <div class="header-middle-center">
          <div class="header-middle-icon">
            <a href class="header-icon-link">
              <div class="header-cup-icon" />
            </a>
            <a href class="header-icon-link">
              <div class="header-user-icon">
                <span class="user-plus-icon" />
              </div>
            </a>
          </div>
          <div class="header-search">
            <form action class="header-search-form">
              <input
                type="text"
                class="header-search-input"
                placeholder="Search for Employees, Jobs, Candidates, and More..."
              >
              <input type="submit" class="header-search-icon" value>
            </form>
          </div>
        </div>
        <div class="header-middle-right">
          <a href class="header-icon-link">
            <div class="header-message-icon">
              <span class="message-count">1</span>
            </div>
          </a>
          <a href class="header-icon-link">
            <div class="header-flag-icon">
              <span class="flag-count">1</span>
            </div>
          </a>
          <a href class="header-icon-img">
            <img src="../assets/images/content/header_profile_img.png" class="header-profileimg-icon">
          </a>
        </div>
      </div>
    </div>
    <div v-bind:class="{ nav_mobile: isActive }" class="header-bottom">
      <div class="container">
        <div class="header-bottom-left">
          <nav class="main-nav">
            <ul class="nav-list">
              <li class="nav-item">
                <nuxt-link :to="{ name: 'Dashboard' }" class="nav-link" exec>
                  Dashboard
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link :to="{ name: 'Profile' }" class="nav-link" exec>
                  My Info
                </nuxt-link>
              </li>
              <li class="nav-item">
                <a href class="nav-link">Employees</a>
              </li>
              <li class="nav-item">
                <a href class="nav-link">Jobs</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="header-bottom-right">
          <ul class="nav-list">
            <li class="nav-item">
              <a href class="nav-link">Help</a>
            </li>
            <li class="nav-item">
              <a href class="nav-link">More</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  data () {
    return {
      isActive: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./assets/main.scss";
.header {
  position: relative;
  .header-icon-link {
    margin-right: 20px;

    &:hover {
      opacity: 0.8;
    }
  }

  .container {
    max-width: 1280px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}

.header-top {
  background-color: $black;
  min-height: 25px;
  font-size: 11px;
  display: flex;
  align-items: center;

  @include breakpoint(md) {
    display: none;
  }

  .header-top-left {
    width: 50%;
    padding-right: 15px;
    color: #f6f8f9;

    .header-icon-tel {
      display: inline-block;
      @include sprite($phone_header_top);
    }

    .trial-count-bg {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      @include sprite($trial_period_bg);
      position: relative;
      z-index: 0;

      .trial-count {
        color: #078fef;
        font-weight: 700;
      }
    }

    .header-top-link {
      color: #f6f8f9;
      font-weight: 700;

      &:hover {
        color: $primary-link-color;
      }
    }
  }

  .header-top-right {
    width: 50%;
    color: #dfe1e3;
    display: flex;
    justify-content: flex-end;
  }
}

.header-middle {
  position: relative;
  background-color: $primary-background;
  min-height: 55px;
  display: flex;
  align-items: center;

  @include breakpoint(md) {
    padding: 15px 0;
  }

  @include breakpoint-between(sm, md) {
    .header-middle-left {
      width: 100%;
      text-align: center;
    }
  }

  .header-logo {
    display: inline-block;
  }

  .header-middle-center {
    display: flex;
    align-items: center;
    padding: 0 15px;

    @include breakpoint-between(sm, md) {
      width: 70%;
      justify-content: space-between;
      padding: 0;
      padding-top: 15px;
  }

    @include breakpoint(sm) {
      width: 100%;
      justify-content: flex-end;
      padding: 0;
      padding-top: 15px;
    }

    .header-middle-icon {
      display: flex;

      @include breakpoint(sm) {
        position: absolute;
        bottom: 20px;
        transform: translateY(50%);
        left: 15px;
      }
    }

    .header-cup-icon {
      position: relative;
      display: block;
      @include sprite($header_cup);

      &:before {
        content: ":)";
        display: block;
        position: absolute;
        top: 50%;
        left: 40%;
        transform: translate(-50%, -50%);
        font-size: 14px;
        font-weight: 600;
        text-transform: uppercase;
        color: $primary-background;
      }

      &:hover:before {
        color: $color-primary;
      }
    }

    .header-user-icon {
      position: relative;
      display: block;
      @include sprite($header_user);

      .user-plus-icon {
        display: block;
        position: absolute;
        bottom: -3px;
        left: 74%;
        width: 15px;
        height: 15px;
        font-size: 14px;
        font-weight: 600;
        text-transform: uppercase;
        background-color: #696e83;
        border: 3px solid $primary-background;
        border-radius: 50%;

        &:after,
        &:before {
          content: "";
          width: 6px;
          height: 1px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: $primary-background;
        }

        &:before {
          width: 1px;
          height: 6px;
        }
      }

      &:hover {
        .user-plus-icon {
          border: 1px solid $color-primary;
        }

        .user-plus-icon:after,
        .user-plus-icon:before {
          background-color: $color-primary;
          left: 51%;
        }
      }
    }

    .header-search {
      width: 350px;

      @include breakpoint-between(sm, md) {
      width: 400px;
      }
      @include breakpoint(sm) {
        width: 100%;
      }

      &-form {
        position: relative;
      }

      &-input {
        width: 100%;
        height: 30px;
        background-color: $white;
        padding-left: 15px;
        padding-right: 45px;
        border-radius: 20px;
        border: none;
        font-size: 12px;

        @include breakpoint(xs) {
          font-size: 11px;
        }
      }

      .header-search-icon {
        display: inline-block;
        border: none;
        background-color: transparent;
        @include sprite($search_icon);
        position: absolute;
        right: 5px;

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }

  .header-middle-right {
    display: flex;
    align-items: center;

    @include breakpoint-between(sm, md) {
      width: 30%;
      padding-top: 15px;
      justify-content: flex-end;
    }

    @include breakpoint(sm) {
      width: 100%;
      justify-content: flex-end;
      padding-top: 15px;
    }

    .header-message-icon {
      position: relative;
      display: inline-block;
      @include sprite($header_message);
      margin-right: 10px;
    }

    .header-flag-icon {
      position: relative;
      display: inline-block;
      @include sprite($header_flag);
      margin-right: 10px;
    }

    .message-count,
    .flag-count {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 5px;
      height: 17px;
      position: absolute;
      top: -7px;
      right: -10px;
      background-color: #e87151;
      font-size: 12px;
      color: $white;
      border-radius: 50%;
    }

    .flag-count {
      top: -6px;
    }

    .header-icon-img {
      &:hover {
        opacity: 0.8;
      }
    }
  }
}

.header-bottom {
  background-color: #343841;
  min-height: 40px;
  display: flex;
  align-items: center;

  @include breakpoint(sm) {
    position: fixed;
    visibility: hidden;
    right: -100%;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;
    background-color: $secondary-background;
    transition: 0.7s linear

  }

  .header-bottom-left {
    width: 50%;

    @include breakpoint(sm) {
      width: 100%;
    }
  }

  .header-bottom-right {
    width: 50%;
    display: flex;
    justify-content: flex-end;

    @include breakpoint(sm) {
      width: 100%;
      display: block;
    }
  }
}

.main-nav {
  .nav-link {
    font-weight: 600;
  }
}

.nav-list {
  display: flex;
  margin: 0 -15px;
  flex-wrap: wrap;

  @include breakpoint(sm) {
    display: block;
    margin: 0;
    padding-bottom: 35px;
  }

  .nav-link {
    display: inline-flex;
    font-size: 14px;
    font-weight: 400;
    color: $white;
    padding: 0 10px;
    height: 40px;
    align-items: center;
    border-bottom: 2px solid transparent;

    &:hover, &.router-link-active {
      color: $color-primary;
      border-bottom: 2px solid $color-primary;
    }
  }
}

.burger-btn {
  z-index: 2;
  display: none;
  height: 3em;
  width: 6em;
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;

  @include breakpoint(sm) {
    display: block;
  }

  %burger-btn-decor {
    width: 2.5em;
    display: block;
    content: "";
    border-radius: 0.25em;
    background-color: $color-primary;
    height: 2px;
    position: absolute;
    -webkit-transform: rotate(0);
    transform: rotate(0);
    transition: top 0.2s 0.2s, left 0.1s, transform 0.2s,
    background-color 0.4s 0.2s;
  }

  .burger-lines {
    @extend %burger-btn-decor;
    top: 50%;
    right: 10px;

    &:before {
      @extend %burger-btn-decor;
      right: 1em;
      top: 10px;
    }

    &:after {
      @extend %burger-btn-decor;
      top: -10px;
      right: 1em;
    }
  }

  &.burger_active {
    .burger-lines {
      background-color: transparent;
      transition: background-color 0.2s, top 0.2s, left 0.2s,
        transform 0.2s 0.15s;

      &:before {
        transform: rotate(-45deg);
        left: -1em;
        top: 0;
      }

      &:after {
        transform: rotate(45deg);
        left: -1em;
        top: 0;
      }
    }
  }
}
.nav_mobile {
  right: 0;
  visibility: visible;
  transition: 0.7s linear;
}
</style>
