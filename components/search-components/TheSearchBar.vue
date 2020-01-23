<template>
  <div class="search-bar">
    <form action="/">
      <label for="search-main-input">
        <img src="~/assets/images/content/loop_search.png" alt="search loop">
      </label>
      <input
        id="search-main-input"
        type="text"
        placeholder="Search for a Job by job title, office, department, requisite id"
      >
      <button type="submit" class="accept-button">
        Search
      </button>
      <button type="reset" class="clear-button">
        clear results
      </button>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "~assets/helpers/variables";

.search-bar {
  margin-bottom: 13px;
  padding: 0 25px;
  background-color: $white;
  form {
    padding: 16px 12px;
    display: flex;
    align-items: center;
    label {
      margin-right: 15px;
    }
    #search-main-input {
      margin-right: 44px;
      width: 100%;
      display: block;
      padding: 17px 30px 7px;
      border: none;
      border-bottom: 1px solid rgba($color: $base-color, $alpha: 0.78);
      &:focus {
        outline-color: $color-primary;
      }
      &::-webkit-input-placeholder {
        text-indent: 0px;
        transition: text-indent 0.3s ease;
        color: $base-color;
      }
      &::-moz-placeholder {
        text-indent: 0px;
        transition: text-indent 0.3s ease;
        color: $base-color;
      }
      &:-moz-placeholder {
        text-indent: 0px;
        transition: text-indent 0.3s ease;
        color: $base-color;
      }
      &:-ms-input-placeholder {
        text-indent: 0px;
        transition: text-indent 0.3s ease;
        color: $base-color;
      }
      &:focus::-webkit-input-placeholder {
        text-indent: 100%;
        transition: text-indent 0.3s ease;
      }
      &:focus::-moz-placeholder {
        text-indent: 100%;
        transition: text-indent 0.3s ease;
      }
      &:focus:-moz-placeholder {
        text-indent: 100%;
        transition: text-indent 0.3s ease;
      }
      &:focus:-ms-input-placeholder {
        text-indent: 100%;
        transition: text-indent 0.3s ease;
      }
    }
    .accept-button {
      margin-right: 47px;
      text-transform: uppercase;
    }
    .clear-button {
      color: $color-primary;
      text-transform: uppercase;
      background-color: transparent;
      border: none;
      width: 124px;
      padding: 10px;
      flex-shrink: 0;
      white-space: nowrap;
    }
  }
}
</style>
